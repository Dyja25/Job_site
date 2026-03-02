import React from "react";
import {  message, Upload } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import axios from "axios";
import { InboxOutlined} from '@ant-design/icons';
import {  FlexContainer } from "../../UI/Layout";

import {getparsedata,uploadJobDocument} from "../../../Jobsite/JobAction";
import { anyalytic_url } from "../../../Config/Auth";
const { Dragger } = Upload;
const token = sessionStorage.getItem("token");

class DragableUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [],
  };
  beforeUpload = (file) => {
    const isLt2M = file.size / 2000 / 2000 < 25;

    if (!isLt2M) {
       message.error("Image size must be smaller than 25MB!");
      file.flag = true;
      return false;
    }
  };
//   callUpload = () => {
//  this.props.uploadJobDocument({})
//   };
  // handleResumeUpload = () => {
  //   let formData = new FormData();
  //   // formData.append("file", this.state.selectedFile);
  //   // console.log(this.props.resumeForm.length && this.props.resumeForm);
  //   this.props.uploadJobDocument(formData);
  // };
  handleDocumentUpload = ({ onSuccess, onError, file }) => {
   
    console.log(this.props);
    console.log(this.props.librarys);
    const convertedArray = this.props.librarys.map((item) => item.name);
    const convertedString = convertedArray.toString();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("skills", convertedString);
    console.log(formData);
     this.props.uploadJobDocument(formData)
    axios
      // .post(`${base_url}/document/website/upload?url=talent.tekorero.com`, formData, {
      //   // headers: {
      //   //   "Content-Type": "multipart/form-data",
      //   //   Authorization: `Bearer ${token}`,
      //   // },
      // })
      .post(`${anyalytic_url}/pdf/read`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res);
        message.success("Uploaded successfully");
         onSuccess();
        // this.callUpload();
       // this.props.form.setFieldValue(this.props.field.name, res.data);
        this.setState({ previewVisible: false, previewImage: "" });
        this.props.getparsedata(res.data);
         this.props.handleResponseData(res.data);
      })
      .catch((err) => {
        console.log(err);
        // onError();
      });
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList, file }) => {
    console.log(fileList);
    console.log(file);
    if (file.flag === true) {
      return this.setState({ fileList: [] });
    }

    this.setState({ fileList });
  };
  render() {
    const { fileList } = this.state;
    return (
      <div className="clearfix" >
       
        
       
        <Dragger
          customRequest={this.handleDocumentUpload}
          
          beforeUpload={this.beforeUpload}
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          style={{borderRadius:"0.6rem",marginTop:"0.5rem"}}
        >
          <FlexContainer justifyContent="space-between">
          <div style={{width:"20%"}}>
          <p className="ant-upload-drag-icon">
          <InboxOutlined />
          </p></div>
          <div style={{width:"80%"}}>
          <h3 className="ant-upload-text text-white" style={{fontFamily:"sans-serif"}}>
            Click or drag file to this area to upload.
          </h3></div>
          </FlexContainer>
        </Dragger>
      </div>
    );
  }
}

const mapStateToProps = ({job }) => ({
  librarys: job.librarys,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        getparsedata,
        uploadJobDocument
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DragableUpload);

// export default DragableUpload;

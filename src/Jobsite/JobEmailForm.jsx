import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Checkbox, message } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../Components/UI/Elements";
import { InputComponent } from "../Components/Forms/Formik/InputComponent.jsx";
import { FlexContainer } from "../Components/UI/Layout";
import {AddEmail,handleCandidateApplyModal,handleEmailFormModal} from "./JobAction";
import CandidateJobApplyModal from "./CandidateJobApplyModal.jsx";
const CandidateSchema = Yup.object().shape({
  emailId: Yup.string()
    .trim()
    .email("Enter a valid Email")
    .required("Input needed!"),
});
class JobEmailForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        documentStatus: false,
        checkeds: false,
       
      };
    }
    handleDocumentStatus = (checked) => {
      this.setState({ documentStatus: checked });
    };
    handleChange = () => {
      this.setState({
        checkeds: !this.state.checkeds,
      });
      console.log(this.state.checkeds);
    };
   
    // handleCallBack =(data)=>{   
    //   if(data.candidateInd === false){
    //   this.props.handleCandidateApplyModal(true)
    //   }        
    //      }

    handleCallBack = (data) => {

  if (data.candidateInd === true) {
    this.props.handleEmailFormModal(false);
  }

  if (data.candidateInd === false) {
    this.props.handleCandidateApplyModal(true);
  }
};
         
 
    render() {
        const {
          emailData,
          addCandidateApply,
          // handleCandidateApplyModal
        } = this.props; 
    
        return (
            <>
        <Formik
  initialValues={{
    emailId: "",
    opportunityId: this.props.setEditingCard.opportunityId,
    recruitmentId: this.props.setEditingCard.recruitmentId,
    recruitmentProcessId:
      this.props.setEditingCard.recruitmentProcessId,
  }}
  validationSchema={CandidateSchema}
  onSubmit={(values, { resetForm }) => {
    console.log("SUBMIT WORKING", values);

    this.props.AddEmail(
      {
        ...values,
        opportunityId: this.props.setEditingCard.opportunityId,
        recruitmentId: this.props.setEditingCard.recruitmentId,
        recruitmentProcessId:
          this.props.setEditingCard.recruitmentProcessId,
        status: this.state.documentStatus ? "true" : "false",
      },
      this.handleCallBack
    );
  }}
>
  {({
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
  }) => {
    console.log("VALUES", values);
    console.log("ERRORS", errors);

    return (
      <Form>
        <Spacer />

        <FlexContainer>
         <div style={{ width: window.innerWidth < 640 ? "100%" : "45%" }}>
            <Field
              type="email"
              name="emailId"
              label="Email"
              isColumn
              width={"100%"}
              component={InputComponent}
              inlineLabel
            />
          </div>
        </FlexContainer>

        <Spacer style={{ margin: "1%" }} />

        <FlexContainer
  justifyContent={window.innerWidth < 640 ? "center" : "flex-end"}
>
          <Button
            type="primary"
            htmlType="submit"
            loading={this.props.addingEmail}
          >
            Submit
          </Button>
        </FlexContainer>
      </Form>
    );
  }}
</Formik>
        <CandidateJobApplyModal
        addCandidateApply={addCandidateApply}
        handleCandidateApplyModal={this.props.handleCandidateApplyModal}
        />
      </>
    );
  }
}
const mapStateToProps = ({ auth, job }) => ({
  addingEmail:job.addingEmail,
  emailData:job.emailData,
  addCandidateApply:job.addCandidateApply,
  jobData:job.jobData,
  // opportunityId:job.jobData.opportunityId,
  // recruitmentId:job.jobData.recruitmentId,
  setEditingCard:job.setEditingCard,

  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        AddEmail,
        handleCandidateApplyModal,
        handleEmailFormModal
      },
      dispatch
    );
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobEmailForm);
  
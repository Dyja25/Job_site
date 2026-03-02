import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";

import { Button, Select,  Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../Components/UI/Elements";
import DragableUpload from "../Components/Forms/Formik/DragableUpload.jsx";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray.jsx";
import { InputComponent } from "../Components/Forms/Formik/InputComponent.jsx";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent.jsx";
import { FlexContainer } from "../Components/UI/Layout";
import { addPartner, getSectors, getLibrarys } from "./JobAction";
import SearchSelect1 from "../Components/Forms/Formik/SearchSelect1.jsx";

const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
const PartnerSchema = Yup.object().shape({
  partnerName: Yup.string().required("Please enter company name"),
  phoneNo: Yup.string().required("Please enter your phone number"),
  url: Yup.string().required("Please enter url"),
  countryDialCode: Yup.string().required("Input needed!"),
  // address: Yup.string().required("Input required!"),
  sectorId: Yup.string().required("Please enter sector name"),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Please enter your email address"),
});

class JobVendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentStatus: false,
      checkeds: false,
      responseData: null,
    };
  }
  handleDocumentStatus = (checked) => {
    this.setState({ documentStatus: checked });
  };

  handleCallBack = (data) => {
    this.props.history.push(`/partnerSuccess`);
  };

  handleChange = () => {
    this.setState({
      checkeds: !this.state.checkeds,
    });
    console.log(this.state.checkeds);
  };
  handleResponseData = (data) => {
    this.setState({ responseData: data });
  };
  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
  };

  componentDidMount() {
    this.props.getSectors();
    this.props.getLibrarys();
  }
  render() {
    const {
      accounts,
      user,
      // user: { userId, firstName },
      isEditing,
      prefillAccount,
      addingPartner,
      addPartner,
      clearbit,
      setClearbitData,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
      };
    });

    const skillOption = this.props.sectors.map((item) => {
      return {
        label: `${item.sectorName}`,
        value: item.sectorId,
      };
    });

    return (
      <>
        <Formik
          // enableReinitialize
          initialValues={{
            partnerName: "",
            definationId: "",
            sectorDescription: "",
            url: "",
            countryDialCode: "",
            phoneNo: "",
            notes: "",
            taxRegistrationNumber: "",
            businessRegistrationNumber: "",
            bankName: "",

            accountNumber: "",
            documentId: "",
            email: "",
            status: this.state.documentStatus ? "true" : "false",

            contactMapper: {
              emailId: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
            },

            address: [
              {
                address1: "",
                address2: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",

                country: "",
              },
            ],
          }}
          validationSchema={PartnerSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            addPartner(
              {
                ...values,

                status: this.state.documentStatus ? "true" : "false",
                sectorId: values.sectorId,
                tncInd: this.state.checkeds ? true : false,
              },
              //   this.props.userId,
              this.handleCallBack,

              () => this.handleReset(resetForm)
            );
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
            values,
            ...rest
          }) => (
            <Form class=" max-sm:w-11/12 -mt-56 m-auto md:mt-0 w-3/4  ">
              <MainWrapper
                class="max-sm: w-4/5"
                style={{
                  width: "91%",
                  margin: "auto",
                  height: "56rem",
                  background: "#3737a7",
                }}
              >
                <div class=" max-sm:flex flex-col m-auto w-11/12 md:w-w77 mt-margin10 ml-auto mr-auto">
                  <span style={{ color: "White", fontFamily: "sans-serif" }}>
                  <FormattedMessage
                  id="app.fillintheform"
                  defaultMessage="fillintheform"
                />
                    {/* Fill in the form! */}
                  </span>

                  <div class=" text-xs text-white">
                  <FormattedMessage
                  id="app.allfieldsaremandatory"
                  defaultMessage="allfieldsaremandatory"
                />
                    {/* All Fields are Mandatory* */}
                  </div>
                  <Spacer />
                  <hr />
                  <div class="max-sm:flex flex-col items-center">
                    {/* Left */}
                    {/* <h2><b>Register Company here</b></h2> */}
                    <div>
                      <div class="max-sm:w-60 md:w-w19 ">
                      <FormattedMessage id="app.companyname" defaultMessage="companyname">

                          
{companyname =>  ( <Field

    name="partnerName"
    placeholder={companyname}
    type="text"
    width={"100%"}
    isColumn
    component={InputComponent}
    inlineLabel
  />
)}
  </FormattedMessage>
                      
                      </div>
                      <FlexContainer>
                        <div class="max-sm:w-60 md:w-w19">
                        <FormattedMessage id="app.email" defaultMessage="email">

                          
{email =>  ( <Field

name="email"
type="email"
    placeholder={email}
    width={"100%"}
    isColumn
    component={InputComponent}
    inlineLabel
  />
)}
  </FormattedMessage>
                 
                        </div>
                      </FlexContainer>
                      <FlexContainer justifyContent="space-between">
                        <div class="max-sm:w-20 -mt-6  md:mt-0 w-24 ">
                         <FormattedMessage id="app.dial" defaultMessage="dial">
                  {dial =>  (  <Field
                            name="countryDialCode"
                            isColumnWithoutNoCreate
                            selectType="dialCode"
                            // label="Phone#"
                            placeholder={dial}
                            width={"100%"}
                            isColumn
                            component={SearchSelect1}
                          />
                          )}
                      </FormattedMessage>
                        </div>
                        <div class="max-sm:-mt-1 w-36  md:w-48">

                        <FormattedMessage id="app.phonenumber" defaultMessage="phonenumber">

                          
{phonenumber =>  ( <Field

name="phoneNo"
type="text"
    placeholder={phonenumber}
    width={"100%"}
    isColumn
    component={InputComponent}
    inlineLabel
  />
)}
  </FormattedMessage>
               
                        </div>
                      </FlexContainer>

                      <FlexContainer>
                        <div class="max-sm:w-60 md:w-w19">
                        <FormattedMessage id="app.websiteurl" defaultMessage="websiteurl">

                          
{websiteurl =>  ( <Field

name="url"
type="text"
    placeholder={websiteurl}
    isColumn
    width={"100%"}
    component={InputComponent}
    inlineLabel
  />
)}
  </FormattedMessage>
               
                        </div>
                      </FlexContainer>
                      <Spacer />

                      <Spacer />
                    </div>

                    <div class="max-sm:w-60 md:w-w19">
                      <FieldArray
                        name="address"
                        //value={values.address}
                        render={(arrayHelpers) => (
                          <AddressFieldArray
                            singleAddress
                            arrayHelpers={arrayHelpers}
                            values={values}
                          />
                        )}
                      />
                    </div>

                    <div class="w-auto max-sm:w-60 mt-6 md:mt-6">
                    <FormattedMessage id="app.sector" defaultMessage="sector">

                          
{sector =>  ( <Field

name="sectorId"
isColumnWithoutNoCreate
    placeholder={sector}
   //selectType="name"
   width={"100%"}
   isColumn
   component={SelectComponent}
   options={Array.isArray(skillOption) ? skillOption : []}
   inlineLabel
  />
)}
  </FormattedMessage>
                 
                    </div>

                    <div class=" mt-4 max-sm:mt-0 flex flex-col ">
                      <label
                        class="text-white mt-6"
                        style={{ fontFamily: "sans-serif" }}
                      >
                         <FormattedMessage
                  id="app.uploadpresentation"
                  defaultMessage="uploadpresentation"
                />
                        {/* Upload presentation */}
                      </label>
                      <DragableUpload
                        handleResponseData={this.handleResponseData}
                      />
                    </div>
                    <Spacer marginTop="1rem" />
                    <div class="max-sm:mt-8">
                      <Checkbox
                        // disabled={this.props.validOtp === ""}
                        // disabled={true}
                        checkeds={this.state.checkeds}
                        onChange={this.handleChange}
                      >
                        <a
                          href="https://axisdigitaal.com/privacyverklaring"
                          target="_blank"
                          style={{ color: "white", fontFamily: "sans-serif" }}
                        >
                          <FormattedMessage id="app.privacyy" defaultMessage="privacyy"/>
                        </a>
                      </Checkbox>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <Spacer marginTop="1rem" />
                    <Button
                      type="primary"
                      htmlType="submit"
                      // icon={<PoweroffOutlined />}
                      Loading={addingPartner}
                      className={"vendorBtn"}
                    >
                      <label style={{ fontFamily: "sans-serif" }}> Send</label>
                    </Button>
                  </div>
                  {/* </div> */}
                </div>
              </MainWrapper>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ job }) => ({
  addingCandidate: job.addingCandidate,
  sectors: job.sectors,
  librarys: job.librarys,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPartner,
      getLibrarys,
      getSectors,
    },
    dispatch
  );
export default (
  connect(mapStateToProps, mapDispatchToProps)(JobVendorForm)
);

////OldOne
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
// import { Formik, Form, FastField, Field, FieldArray } from "formik";
// import * as Yup from "yup";
// import { MainWrapper, Spacer } from "../Components/UI/Elements";
// import { ShowOrCollapse } from "../Components/Common";
// import SearchSelect from "../Components/Forms/Formik/SearchSelect";
// import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray";
// import { InputComponent } from "../Components/Forms/Formik/InputComponent";
// import { SelectComponent } from "../Components/Forms/Formik/SelectComponent";
// import Upload from "../Components/Forms/Formik/Upload";
// import { StyledLabel } from "../Components/UI/Elements";
// import { FlexContainer } from "../Components/UI/Layout";
// import { TextareaComponent } from "../Components/Forms/Formik/TextareaComponent";
// import { DatePicker } from "../Components/Forms/Formik/DatePicker";
// import moment from "moment";
// import { addPartner, getSectors } from "./JobAction";

// const { Option } = Select;
// /**
//  * yup validation scheme for creating a contact
//  */
// const PartnerSchema = Yup.object().shape({
//   // contactOwner: Yup.string().required("Please Select contact owner"),
//   // email: Yup.string().email("Enter a valid Email").required("Input needed!"),
//   partnerName: Yup.string().required("Input required!"),
//   contactMapper: Yup.object({
//     firstName: Yup.string().nullable().required("Input required!"),
//     lastName: Yup.string().nullable().required("Input required!"),
//     emailId:Yup.string().email("Enter a valid Email").required("Input needed!"),
//   }),
// });

// class JobVendorForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       documentStatus: false,
//       checkeds: false,
//     };
//   }
//   handleDocumentStatus = (checked) => {
//     this.setState({ documentStatus: checked });
//   };

//   handleChange = () => {
//     this.setState({
//       checkeds: !this.state.checkeds,
//     });
//     console.log(this.state.checkeds);
//   };

//   handleReset = (resetForm) => {
//     const { callback } = this.props;
//     callback && callback();
//     resetForm();
//   };

//   componentDidMount() {
//     this.props.getSectors();
//   }
//   render() {
//     const {
//       accounts,
//       user,
//       // user: { userId, firstName },
//       isEditing,
//       prefillAccount,
//       addingPartner,
//       addPartner,
//       clearbit,
//       setClearbitData,
//     } = this.props;

//     const sectorOption = this.props.sectors.map((item) => {
//       return {
//         label: item.sectorName || "",
//         value: item.sectorId,
//       };
//     });

//     return (
//       <>
//         <Formik
//           // enableReinitialize
//           initialValues={{
//             sectorId: "",
//             partnerName: "",
//             sectorDescription: "",
//             url: "",
//             countryDialCode: "",
//             // email: "",
//             phoneNo: "",
//             // userId: this.props.userId,
//             notes: "",
//             taxRegistrationNumber: "",
//             businessRegistrationNumber: "",
//             bankName: "",
//             // country: "",
//             accountNumber: "",
//             status: this.state.documentStatus ? "true" : "false",

//             contactMapper:
//               {
//               emailId : "",
//               firstName: "",
//               lastName: "",
//               phoneNumber: "",
//               },

//             address: [
//               {
//                 address1: "",
//                 address2: "",
//                 street: "",
//                 city: "",
//                 state: "",
//                 postalCode: "",
//                 // country: "",
//                 country: "",
//               },
//             ],
//           }}
//           validationSchema={PartnerSchema}
//           onSubmit={(values, { resetForm }) => {
//             console.log(values);
//             addPartner(
//               {
//                 ...values,
//                 status: this.state.documentStatus ? "true" : "false",
//               },
//               //   this.props.userId,
//               () => this.handleReset(resetForm)
//             );
//           }}
//         >
//           {({
//             errors,
//             touched,
//             isSubmitting,
//             setFieldValue,
//             setFieldTouched,
//             values,
//             ...rest
//           }) => (
//             <Form style={{marginTop:"7%"}}>
//               <Spacer />
//               <Spacer style={{ marginTop: "auto" }} />
//               <MainWrapper
//                 style={{ width: "50%", margin: "auto", padding: "1em" }}
//               >
//                 <Spacer />
//                 <div
//                   style={{
//                     width: "100%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <div style={{ width: "47%" }}>
//                     {/* Left */}
//                     <h2><b>Register Company here</b></h2>
//                     <div>
//                       <Field
//                         isRequired
//                         name="partnerName"
//                         type="text"
//                         label="Company Name"
//                         isColumn
//                         width={"100%"}
//                         component={InputComponent}
//                         inlineLabel
//                       />
//                       {/* <FlexContainer>
//                         <div style={{ width: "100%" }}>
//                           <FastField
//                             isRequired
//                             type="email"
//                             name="email"
//                             label="Email"
//                             className="field"
//                             isColumn
//                             width={"100%"}
//                             component={InputComponent}
//                             inlineLabel
//                           />
//                         </div>
//                       </FlexContainer> */}
//                       <Spacer />
//                       <FlexContainer>
//                         <div style={{ width: "100%" }}>
//                           <FastField
//                             name="url"
//                             type="text"
//                             label="URL"
//                             isColumn
//                             width={"100%"}
//                             component={InputComponent}
//                             inlineLabel
//                           />
//                         </div>
//                       </FlexContainer>
//                       <Spacer />

//                       <FlexContainer>
//                         <div >
//                           <FastField
//                             name="sectorId"
//                             label="Sector"
//                             isColumn
//                             width={"100%"}
//                             component={SelectComponent}
//                             // options={[" Accountancy"," Aviation"]}
//                             options={
//                               Array.isArray(sectorOption) ? sectorOption : []
//                             }
//                           />
//                         </div>
//                       </FlexContainer>
//                       <Spacer />
//                       <FlexContainer justifyContent="space-between">
//                         <div style={{ width: "27%" }}>
//                           <FastField
//                             name="countryDialCode"
//                             isColumnWithoutNoCreate
//                             selectType="dialCode"
//                             label="Phone#"
//                             width={"100%"}
//                             isColumn
//                             component={SearchSelect}
//                           />
//                         </div>
//                         <div style={{ width: "70%" }}>
//                           <FastField
//                             type="text"
//                             name="phoneNo"
//                             isColumn
//                             component={InputComponent}
//                             inlineLabel
//                             width={"100%"}
//                           />
//                         </div>
//                       </FlexContainer>
//                     </div>

//                     <div>

//                       <Spacer style={{ marginTop: "1.5em" }} />

//                     <FieldArray
//                       name="address"
//                       render={(arrayHelpers) => (
//                         <AddressFieldArray
//                           singleAddress
//                           arrayHelpers={arrayHelpers}
//                           values={values}
//                         />
//                       )}
//                     />

//                     </div>

//                   </div>
//                   <div style={{ width: "47%" }}>

//                   <h2><b>Contact Person</b></h2>
//                       <FlexContainer justifyContent="space-between">
//                         <div style={{ width: "45%" }}>
//                           <FastField
//                             name="contactMapper.firstName"
//                             isColumnWithoutNoCreate
//                             label="First Name"
//                             width={"100%"}
//                             isColumn
//                             component={InputComponent}
//                           />
//                         </div>
//                         <div style={{ width: "45%" }}>
//                           <FastField
//                             name="contactMapper.lastName"
//                             isColumn
//                             label="LastName"
//                             component={InputComponent}
//                             inlineLabel
//                             width={"100%"}
//                           />
//                         </div>
//                       </FlexContainer>
//                           <Spacer/>
//                           <FlexContainer justifyContent="space-between">
//                         <div style={{ width: "27%" }}>
//                           <FastField
//                             name="countryDialCode"
//                             isColumnWithoutNoCreate
//                             selectType="dialCode"
//                             label="Mobile#"
//                             width={"100%"}
//                             isColumn
//                             component={SearchSelect}
//                           />
//                         </div>
//                         <div style={{ width: "70%" }}>
//                           <FastField
//                             type="text"
//                             name="contactMapper.phoneNumber"
//                             isColumn
//                             component={InputComponent}
//                             inlineLabel
//                             width={"100%"}
//                           />
//                         </div>
//                       </FlexContainer>
//                       <Spacer/>
//                       <FlexContainer>
//                         <div style={{ width: "100%" }}>
//                           <FastField
//                             isRequired
//                             type="email"
//                             name="contactMapper.emailId"
//                             label="Email"
//                             className="field"
//                             isColumn
//                             width={"100%"}
//                             component={InputComponent}
//                             inlineLabel
//                           />
//                         </div>
//                       </FlexContainer>

//                     <Spacer />
//                     <FlexContainer>
//                         <div style={{ width: "100%" }}>
//                           <Field
//                             name="notes"
//                             label="Notes"
//                             isColumn
//                             component={TextareaComponent}
//                           />
//                         </div>
//                       </FlexContainer>
//                     {/* <FlexContainer justifyContent="space-between">
//                       <div style={{ width: "47%" }}>
//                         <Field
//                           name="taxRegistrationNumber"
//                           type="text"
//                           label="Tax Reg#"
//                           isColumn
//                           width={"100%"}
//                           component={InputComponent}
//                           inlineLabel
//                         />
//                       </div>
//                       <div style={{ width: "47%" }}>
//                         <Field
//                           name="businessRegistrationNumber"
//                           type="text"
//                           label="Business Reg#"
//                           isColumn
//                           width={"100%"}
//                           component={InputComponent}
//                           inlineLabel
//                         />
//                       </div>
//                     </FlexContainer>
//                     <Spacer />
//                     <FlexContainer justifyContent="space-between">
//                       <div style={{ width: "47%" }}>
//                         <Field
//                           name="bankName"
//                           type="text"
//                           label="Bank Name"
//                           isColumn
//                           width={"100%"}
//                           component={InputComponent}
//                           inlineLabel
//                         />
//                       </div>
//                       <div style={{ width: "47%" }}>
//                         <Field
//                           name="accountNumber"
//                           type="text"
//                           label="Account #"
//                           isColumn
//                           width={"100%"}
//                           component={InputComponent}
//                           inlineLabel
//                         />
//                       </div>
//                     </FlexContainer> */}
//                     <Spacer style={{ marginTop: "1.5625em" }} />
//                     {/* <StyledLabel>Status</StyledLabel>
//                     &nbsp;&nbsp;
//                     <Switch
//                       checked={this.state.documentStatus}
//                       onChange={this.handleDocumentStatus}
//                       checkedChildren="Approved"
//                       unCheckedChildren="Not Approved"
//                     /> */}
//                     <div style={{}}>
//               <Checkbox
//                       // disabled={this.props.validOtp === ""}
//                       // disabled={true}
//                       checkeds={this.state.checkeds}
//                       onChange={this.handleChange}
//                     >
//                       <span> Agree on the privacy statement.</span>
//                     </Checkbox>
//               </div>
//               <div style={{align:"right"}}>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   // icon={<PoweroffOutlined />}
//                   Loading={addingPartner}
//                   className={"vendorBtn"}
//                 >
//                   Submit
//                 </Button>
//                 </div>
//                   </div>
//                 </div>

//               </MainWrapper>
//              </Form>
//           )}
//         </Formik>
//       </>
//     );
//   }
// }

// const mapStateToProps = ({ job }) => ({
//   addingCandidate: job.addingCandidate,
//   sectors: job.sectors,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       addPartner,
//       getSectors,
//     },
//     dispatch
//   );
// export default connect(mapStateToProps, mapDispatchToProps)(JobVendorForm);

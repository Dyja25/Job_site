import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button, Select,  Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import AddressFieldArray from "../Components/Forms/Formik/AddressFieldArray.jsx";
import DragableUpload from "../Components/Forms/Formik/DragableUpload.jsx";
import { MainWrapper, Spacer } from "../Components/UI/Elements";


import { InputComponent } from "../Components/Forms/Formik/InputComponent.jsx";
import { SelectComponent } from "../Components/Forms/Formik/SelectComponent.jsx";

import { FlexContainer } from "../Components/UI/Layout";

import { DatePicker } from "../Components/Forms/Formik/DatePicker.jsx";

import {
  addCandidate,
  getSectors,
  getLibrarys,
  getRolesName,
  getIdProofs,
  getDepartments
} from "./JobAction";

import SearchSelect1 from "../Components/Forms/Formik/SearchSelect1.jsx";
import SearchSelect2 from "../Components/Forms/Formik/SearchSelect2.jsx";
import dayjs from "dayjs";
import { FormattedMessage } from "react-intl";
// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  //email: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
  lastName: Yup.string().required("Input needed!"),
  mobileNumber: Yup.string().required("Input needed!"),
  countryDialCode: Yup.string().required("Needed!"),
  emailId: Yup.string().required("Input needed!"),
  roleTypeId: Yup.string().required("Input needed!"),
  workpreference: Yup.string().required("Input needed!"),
  dateOfBirth: Yup.string().required("Input needed!"),
  experience: Yup.string().required("Input needed!"),
  // documentId: Yup.string().required("Input needed!"),
  country: Yup.string().required("Input needed!"),
  // address: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       address1: Yup.string().required("Address line 1 is required!"),
  //     })
  //   )
  //   .required("At least one address is required!")
  //   .min(1, "You must provide at least one address."),
});

class JobUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      option: "Mobile",
      option1: "Mobile",
      option2: "Work",
      currentOption: "",
      data:"",
      candidate: false,
      responseData:null,
      availability: true,
      billing: false,
      whiteblue: true,
      checked: false,
      whatsapp: false,
    };
  }
  handleCandidate = (checked) => {
    this.setState({ candidate: checked });
  };
  handleAvailability = (checked) => {
    this.setState({ availability: checked });
  };
  handleWhatsApp = (checked) => {
    this.setState({ whatsapp: checked });
  };
  handlebilling = (checked) => {
    this.setState({ billing: checked });
  };

   handleCallBack=(data)=> {
    this.props.history.push(`/success`);
  }
  handleResponseData=(data)=>{
    this.setState({responseData:data})
  }
  handleWhiteBlue = (checked) => {
    this.setState({ whiteblue: checked });
  };
  handleSetData = (data) => {
    this.setState({data:data} );
  };

  handleReset = (resetForm) => {
    const { callback } = this.props;
    callback && callback();
    resetForm();
    console.log("hello");
  };
  handleClick = (option) => {
    ////debugger;
    this.setState({
      currentOption: option,
    });
    console.log(this.state.option);
    console.log(this.state.currentOption);
  };
  handleFieldClik() {
    this.setState({
      disabled: !this.state.disabled,
      visible: !this.state.visible,
    });
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  onChange = (value) => {
    console.log(value);
    this.setState({
      option: value,
    });
  };
  onChange1 = (value) => {
    console.log(value);
    this.setState({
      option1: value,
    });
  };
  onChange2 = (value) => {
    ////debugger;
    console.log(value);
    this.setState({
      option2: value,
    });
  };

  componentDidMount() {
    // const { getLibrarys,organizationId,} = this.props;
    // console.log();
    this.props.getLibrarys();
    this.props.getSectors();
    this.props.getIdProofs();
    this.props.getDepartments();
    this.props.getRolesName();
  }

  render() {
    //console.log("test1",this.state.data&&this.state.data.emails.length&&this.state.data.emails[0])
    // console.log("test3",this.state.responseData)
    console.log("test4",this.props.parseData)
    console.log(this.props.documentData.length && this.props.documentData)
    // console.log(this.state.responseData&&this.state.responseData.emails.length &&
    //               this.state.responseData.emails[0])
    // console.log("test2",this.state.data.emails.length &&
    // this.state.data.emails[0])
    const {
      // user: { userId, firstName, lastName,department },
      addCandidate,
      addingCandidate,
      dateOfBirth,
      availableDate,
    } = this.props;

    const sectorOption = this.props.sectors.map((item) => {
      return {
        label: item.sectorName || "",
        value: item.sectorId,
      };
    });

    // const rolesNameOption = this.props.rolesname.map((item) => {
    //   return {
    //     label: `${item.roleType}`,
    //     value: item.roleTypeId,
    //   };
    // });

    const rolesNameOption = this.props.rolesname.map((item) => {
      return {
        label: `${item.roleType}`,
        value: item.roleTypeId,
      };
    });



    const libraryOption = this.props.librarys.map((item) => {
      return {
        label: item.name || "",
        value: item.name,
      };
    });
    const IdProofOption = this.props.idProofs.map((item) => {
      return {
        label: item.IdProofType || "",
        value: item.idProofTypeId,
      };
    });
    const departmentOption = this.props.departments.map((item) => {
      return {
        label: item.departmentName || "",
        value: item.departmentId,
      };
    });
    // console.log("sec",sectorOption)
    // if (fetchingCustomers) {
  //   return <BundleLoader />;
  // }
    return (
      <>
        <Formik
        enableReinitialize
          initialValues={{
          
            mobileNumber: this.props.parseData.phoneNumbers
            ? this.props.parseData.phoneNumbers.length &&
            this.props.parseData.phoneNumbers[0]
            : "",
            emailId: this.props.parseData.emails
            ? this.props.parseData.emails.length &&
            this.props.parseData.emails[0]
            : "",
            skills:this.props.parseData.skills
            ? this.props.parseData.skills.length &&
            this.props.parseData.skills : "",
            //  country:"",

             address: [
              {
                address1: "",
                address2: "",
                street: "",
                city: "",
                state: "",
                postalCode: "",
                // country: "",
                country: "",
              },
            ],
         

            
       
             
            
          }}
          validationSchema={CandidateSchema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);

            addCandidate(
              {
                ...values,
                roleTypeId: values.roleTypeId,
                workpreference: values.workpreference,
                dateOfBirth: dateOfBirth || dayjs(),
                experience: parseFloat(values.experience),
                tAndCInd:this.state.checked?true:false,

                skills:this.props.parseData.skills
                ? this.props.parseData.skills.length &&
                this.props.parseData.skills : [],

                documentId:this.props.documentData.length && this.props.documentData?this.props.documentData.length&&this.props.documentData:"",
                firstName: values.firstName,
                lastName: values.lastName,
                countryDialCode: "",
                // experience:"",
               
              
         
              },
              this.handleCallBack,

              () => this.handleReset(resetForm)
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
          }) => (
            <Form className="form-background max-sm:w-11/12 max-sm:h-h73 -mt-28 m-4 md:mt-0 w-3/4 h-h101"  >
             
            
              <MainWrapper
              
                style={{ width: "91%", margin: "auto", background: "#5a5a5a",height:"75rem" }}
              >
              

            <div class=" max-sm:flex flex-col m-auto w-11/12 md:w-w75 mt-margin10 ml-auto mr-auto">
                <span style={{color:"White",fontFamily:"sans-serif"}}> <FormattedMessage
                  id="app.fillintheform"
                  defaultMessage="fillintheform"
                /></span>
                <Spacer />
                <hr/>
                <div>
                    <div>
                    <div class=" mt-3 max-sm:mt-0 flex flex-col ">
                  <label class="text-white mt-1"style={{fontFamily:"sans-serif"}}>
                  <FormattedMessage
                  id="app.uploadcv"
                  defaultMessage="uploadcv"
                /><br></br>
                    (<FormattedMessage
                  id="app.included"
                  defaultMessage="included"
                />).
                    </label>         
                 
                  <DragableUpload
                   handleResponseData={this.handleResponseData}
                  />
                  </div>
                   
                    <div>
                      <FlexContainer>
                     
                        <div style={{ width: "100%" }}>
                           <FormattedMessage id="app.firstname" defaultMessage="firstname">
             {firstname=>( <Field
                            isRequired
                            name="firstName"
                            value={values.firstName}
                            placeholder={firstname}
                           
                            type="text"
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
                        <div style={{ width: "100%" }}>
                           <FormattedMessage id="app.lastname" defaultMessage="lastname">
                           {lastname =>  ( <Field
                        isRequired
                            name="lastName"
                            value={values.lastName}
                            
                            placeholder={lastname}
                         
                            type="text"
                            width={"100%"}                         
                            isColumn
                            component={InputComponent}
                            inlineLabel
                          />
                          )}
                          </FormattedMessage>
                        </div>
                      </FlexContainer>
                    </div>
                                   
                  <FlexContainer >
                    <div style={{ width: "100%" }}>
                    <FormattedMessage id="app.email" defaultMessage="email">
                    {email =>  (<Field
                        isRequired
                        type="email"
                        name="emailId"
                        value={values.emailId}
                        // label="Email"
                         placeholder={email}
                        //className="field"
                        isColumn
                        width={"100%"}
                        component={InputComponent}
                        inlineLabel
                      />
                    )}
                      </FormattedMessage>
                    </div>   
                  </FlexContainer>                             
                  <FlexContainer justifyContent="space-between" >
                  <div class="max-sm:w-20 -mt-6  md:mt-0 w-24 ">
                  <FormattedMessage id="app.dial" defaultMessage="dial">
                  {dial =>  ( <Field
                      isRequired
                        name="countryDialCode"
                        isColumnWithoutNoCreate
                        // label="Mobile"
                        placeholder={dial}
                        selectType="dialCode"
                        value={values.countryDialCode}
                        isColumn                        
                        component={SearchSelect1}                        
                        inlineLabel
                      />
                  )}
                      </FormattedMessage>
                    </div>
                   <div class="max-sm:-mt-1 w-36 md:w-48 ">
                   <FormattedMessage id="app.mobileno" defaultMessage="mobileno">
                   {mobileno =>  (  <FastField
                      isRequired
                        type="text"
                        name="mobileNumber" 
                        value={values.mobileNumber}
                        placeholder={mobileno}                       
                        component={InputComponent}
                        inlineLabel
                        width={"100%"}
                        isColumn
                      />
                   )}
                      </FormattedMessage>
                    </div>
                 

                    
                  </FlexContainer>
                     
                  <Spacer marginTop="1.5rem"/>     
                  <FlexContainer justifyContent="space-between">
                  
                    <div style={{ width: "100%",height:"2.8rem" }}>
                    <FormattedMessage id="app.dateofbirth" defaultMessage="dateofbirth">
                    {dateofbirth =>  ( <Field
                    isRequired
                    name="dateOfBirth"
                    placeholder={dateofbirth}
                    component={DatePicker}
                    isColumn
                    width={"100%"}
                    //isRequired
                    value={values.dateOfBirth}
                    inlineLabel
                    //  style={{
                    //   Color: "#737373d1",
                    //   fontSize:"20px",
                    //   fontWeight:"700"
                    //  }}
                  />
                    )}
                  </FormattedMessage>
                    </div>                    
                  </FlexContainer>
                </div>
               
                      <div class="max-sm:-mb-2 mt-3 md:mt-6" >
                      <FormattedMessage id="app.workpreference" defaultMessage="workpreference">
                      {workpreference =>  (<Field
                        isRequired
                        name="workpreference"
                        isColumnWithoutNoCreate
                        value={values.workpreference}
                        // label="Mobile"
                        placeholder={workpreference}
                        //selectType="dialCode"
                        width={"100%"}
                       
                        isColumn   
                        options={["Remote", "Hybrid", "Office"]}                     
                        component={SelectComponent}                       
                        // inlineLabel
                      />
                      )}
                      </FormattedMessage>
</div>
                  
                                          
                       <div class="max-sm:mt-0 md:mt-2">
                         <Field
                        isRequired
                          name="country"
                          isColumnWithoutNoCreate
                          // label="Nationality" 
                          placeholder={<FormattedMessage id="app.nationlity" defaultMessage="nationlity"/>}
                          isColumn   
                          width={"100%"}                    
                          selectType="country"                          
                          component={SearchSelect2}                          
                          //inlineLabel
                        />
                       </div>  
                       
                    

                      <div className="mt-4 max-sm:mt-1" >
                      <FormattedMessage id="app.experience" defaultMessage="experience">
                      {experience =>  (<FastField
                       
                        isRequired
                          name="experience"
                          // label="Experience in years"
                          placeholder={experience}
                          value={values.experience}
                          isColumn
                          width={"100%"}
                          component={InputComponent}
                          inlineLabel
                        />
                      )}
                        </FormattedMessage>

                      </div>                    
                        <div class="mt-6">
                        <FormattedMessage id="app.roleat" defaultMessage="roleat">
                      {roleat =>  (<Field
                        isRequired
                        name="roleTypeId"
                        //isColumnWithoutNoCreate
                        placeholder={roleat}
                        width={"100%"}
                        isColumn     
                        value={values.roleTypeId}                   
                        component={SelectComponent}
                        options={Array.isArray(rolesNameOption) ? rolesNameOption : []}                   
                       // inlineLabel
                      />
                      )}
                      </FormattedMessage>
                    
                        </div>
                        <div class="max-sm:w-72 md:w-w19">
                     <FieldArray
                    //  isRequired
                      name="address"
                      render={(arrayHelpers) => (
                        <AddressFieldArray
                          singleAddress
                          arrayHelpers={arrayHelpers}
                          values={values}
                        />
                      )}
                    />
                    
                    </div>
       
                
                  <Spacer marginTop="1rem"/>
                    <div >
                    <Checkbox
                      // disabled={this.props.validOtp === ""}
                      // disabled={true}
                      checked={this.state.checked}
                      onChange={this.handleChange}
                    ><a href="https://axisdigitaal.com/privacyverklaring"target="_blank" style={{color:"white",fontFamily:"sans-serif"}}><FormattedMessage
                    id="app.privacyy"
                    defaultMessage="privacyy"
                  /></a>
                       
                    </Checkbox>
              </div>
              </div>
              <Spacer marginTop="1rem"/>
                  <Button
                  type="primary"
                  htmlType="submit"
                  // icon={<PoweroffOutlined />}
                  Loading={addingCandidate}
                  className={"profileBtn"}
                   style={{fontFamily:"sans-serif",}}
                >
                  Submit
                </Button>
              
                </div>
              </MainWrapper>
                     
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth, job }) => ({
  addingCandidate: job.addingCandidate,
  parseData:job.parseData,
  sectors: job.sectors,
  rolesname:job.rolesname,
  librarys: job.librarys,
  idProofs: job.idProofs,
  countries: job.countries,
  departments: job.departments,
  documentData: job.documentData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addCandidate,
      getLibrarys,
      getRolesName,
      getSectors,
      getIdProofs,
      getDepartments
      // getAllPartnerListByUserId,
      // getContactById,
      // addLinkContactByOpportunityId,
      // getCurrency,
    },
    dispatch
  );

export default  (connect(mapStateToProps, mapDispatchToProps)(JobUploadForm));
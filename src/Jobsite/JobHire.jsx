import React, { Suspense, Component } from "react";
import { BundleLoader } from "../Components/Placeholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Select,  Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import { MainWrapper, Spacer } from "../Components/UI/Elements";


import HireStepper from "./HireStepper.jsx";

// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
class JobHireForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleReset = (resetForm) => {
        const { callback } = this.props;
        callback && callback();
        resetForm();
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
        // this.props.getLibrarys();
        // this.props.getSectors();
        // this.props.getIdProofs();
        // this.props.getDepartments();
    }

    render() {
        const {
            // user: { userId, firstName, lastName,department },
            addCandidate,
        } = this.props;
        // console.log("sec",sectorOption)
        return (
            <>
                <Formik
                    initialValues={{}}
                    //validationSchema={CandidateSchema}
                    onSubmit={(values, { resetForm }) => {
                        // console.log(values,this.props.responseData&&this.props.responseData.phoneNumbers.length  ?  this.props.responseData.phoneNumbers[0] : "",);
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
                        <Form style={{ marginTop: "7%" }}>

                            <Spacer />
                            <Spacer style={{ marginTop: "2em" }} />

                            <MainWrapper
                                style={{ width: "50%", margin: "auto", padding: "1em" }}
                            ><Suspense fallback={<BundleLoader />}>
                                    <HireStepper
                                    //projectOrderId={this.props.projectOrderId} 
                                    />
                                </Suspense>
                                <Spacer />
                            </MainWrapper>
                            <Spacer style={{ margin: "1%" }} />
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

const mapStateToProps = ({ auth, job }) => ({
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(JobHireForm);










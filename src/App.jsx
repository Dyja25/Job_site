
import React, { Component, lazy, Suspense } from "react";

import { connect } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
import Job from './Jobsite/Job';

import JobTalent from "./Jobsite/JobTalent.jsx";

import "./App.css";
import { BundleLoader } from "./Components/Placeholder";;
import SuccessTemplate from "./Container/Successfull/SuccessTemplate.jsx";
import PartnerSuccessTemplate from "./Container/Successfull/PartnerSuccessTemplate.jsx";
import Partner from "./Container/Partner/Partner.jsx";
import VacancyPage from "./Container/Partner/VacancyPage.jsx";

import CandidateJobApplyForm from "./Jobsite/CandidateJobApplyForm";
import Header from "./Components/Header/Header.jsx";



/**
 * lazy loaded compenents
 */


class App extends Component {
  render() {
    const { fetchingUserDetails } = this.props;
    return (
      <div>
     <div className="bg-gray-200">
          
          <div className="max-sm:m-0 md:w-w7 m-auto bg-white">
            <Header/>
            </div>
            </div>
          <Suspense fallback={<BundleLoader />}>
          <Routes>
            
            {/* <Route  path="/" element={<Job/>}/> */}
            <Route  path="/talent" element={<JobTalent/>}/>
            <Route   path="/partner" element={<Partner/>}/>
            <Route   path="/vacancy" element={<VacancyPage/>}/>
            <Route  path="/success" element={<SuccessTemplate/>}/>
            <Route   path="/partnerSuccess" element={<PartnerSuccessTemplate/>}/>

            <Route  exact path="/cndapp" element={<CandidateJobApplyForm/>}/>
           <Route path="*" element={<Navigate to="/talent" />} />
      
          
           </Routes>
          </Suspense>
      
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);


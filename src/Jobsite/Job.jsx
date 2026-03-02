import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobCard from "./JobCard.jsx";
import {setJobViewType} from "./JobAction";
import { BundleLoader } from '../Components/Placeholder';
import { handleCandidateApplyModal,handleEmailFormModal } from "./JobAction";

import AddEmailFormModal from "./AddEmailFormModal.jsx";

import JobHire from "./JobHire.jsx";
import JobVendor from "./JobVendor.jsx";
import JobTalent from "./JobTalent.jsx";
import Header from "../Components/Header/Header.jsx";
function Job(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <div class="bg-gray-200">
    <React.Fragment class="flex justify-center">
      <div class="max-sm:m-0 md:w-w7 m-auto bg-white">
      <Header 
      setJobViewType={setJobViewType}  
       viewType={viewType} 
       />
       <div class="max-sm:flex flex-col">
 <Suspense fallback={<BundleLoader />}>
          {viewType === "jobvendor" ? 
            <JobCard 
            addEmailformModal={props.addEmailformModal}
            handleEmailFormModal={props.handleEmailFormModal}
            />
           : viewType === "jobtalent" ? 
          <JobVendor/>
         
          :  viewType === "jobtalent" ? 
            <JobTalent/>
          :  viewType === "jobhire" ? 
            <JobHire/>
           : null}
        </Suspense>
    </div>
    <AddEmailFormModal
    addEmailformModal={props.addEmailformModal}
    handleEmailFormModal={props.handleEmailFormModal}
    />
    </div>
    </React.Fragment>
    </div>
  )
}
const mapStateToProps = ({job }) => ({
  viewType:job.viewType,
  addCandidateApply: job.addCandidateApply,
  addEmailformModal:job.addEmailformModal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        // setJobViewType,
        // handleCandidateApplyModal,
        // handleEmailFormModal
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);
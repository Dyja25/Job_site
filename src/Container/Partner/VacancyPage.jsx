import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import FWLogo from "../../images/Picture.jpg";
import Header from "../../Components/Header/Header.jsx";
;
import JobCard from "../../Jobsite/JobCard.jsx";

function VacancyPage(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment >
      <div class="md:flex justify-center bg-slate-200 ">
        <div>
      <div class="md:w-w7 bg-white ">
      <Header/>
        <div class="w-wk h-18 max-sm:h-96">
<img 
 class=" h-4/5"
src={FWLogo}
alt="Tekorero logo"
            />
 </div>          
<div class=" max-sm:flex flex-wrap flex-col xl:flex-row flex justify-between  mt-6  h-auto">
<div class="flex-col max-sm:w-wk -mt-mt82 md:-mt-margin31 ml-20 flex w-w53  ">
<h2 class="text-white max-sm:text-2xl md:text-5xl">
  {/* LOOKING FOR PARTNERS */}

  <FormattedMessage
                  id="app.looking"
                  defaultMessage="looking"
                />
  </h2>
<h4 class=" text-slate-400  max-sm:leading-6 text-base md:text-3.5xl leading-10 mt-margin2 ">
<FormattedMessage
                  id="app.viewvacancy"
                  defaultMessage="viewvacancy"
                />
</h4>

</div>
</div> 
  
  
   <div class="flex flex-col justify-center max-sm:mt-0 items-center ">
        
        <JobCard/>
        </div>
 
    <div class="text-sm flex justify-center mt-3 mb-8 text-gray-700"style={{fontFamily:"sans-serif"}} >
          Copyright © {new Date().getFullYear()} {` `} LIBAXIS B.V. All Rights Reserved.
        </div>
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
       
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VacancyPage);
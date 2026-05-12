import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

import { Button } from "antd";
// import "./job.scss";



function JobTalentContent(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>

<div class=" flex flex-col mt-margin50 justify-end flex-wrap items-center max-sm:mt-0">
<div class=" flex flex-col w-8/12 justify-center mt-28 ">

<h2 class=" max-sm: text-3xl md:text-5xl  ">
  {/* Why join us? */}
  <FormattedMessage
                  id="app.whyjoinus"
                  defaultMessage="whyjoinus"
                />
  </h2>
 
        <p class="mt-5">
            <FormattedMessage
                  id="app.newwayto"
                  defaultMessage="newwayto"
                />
           </p>
           {/* &nbsp;
           <p>
           <FormattedMessage
                  id="app.atselectiontoworkweunderstandtheinvaluablevalueofnetworkingforcurrentandfutureopportunitiesourplatformlibaxisconnectscompaniesandprofessionalsforvaluablemeetings"
                  defaultMessage="atselectiontoworkweunderstandtheinvaluablevalueofnetworkingforcurrentandfutureopportunitiesourplatformlibaxisconnectscompaniesandprofessionalsforvaluablemeetings"
                />
           </p>
           &nbsp;
           <p>
           <FormattedMessage
                  id="app.whatmakesusuniqueweprovidetheidealmatchbetweenjobopeningsandprofessionalssimplyfilloutourformandwewillfindtherightcompanyforyouandforfree"
                  defaultMessage="whatmakesusuniqueweprovidetheidealmatchbetweenjobopeningsandprofessionalssimplyfilloutourformandwewillfindtherightcompanyforyouandforfree"
                />
           </p>
           &nbsp;
           <p>
           <FormattedMessage
                  id="app.areyoulookingforworkwanttouseyourfreetimeproductivelyorsupplementyourincomeselectiontoworkoffersthesolution"
                  defaultMessage="app.areyoulookingforworkwanttouseyourfreetimeproductivelyorsupplementyourincomeselectiontoworkoffersthesolution"
                />
           </p>
           &nbsp;
           <p>
           <FormattedMessage
                  id="app.ourextensiverelationshipswithpartnershavecreatedarobustnetworkaddressingchallengessuchasworkloadandstaffshortages"
                  defaultMessage="app.ourextensiverelationshipswithpartnershavecreatedarobustnetworkaddressingchallengessuchasworkloadandstaffshortages"
                />
           </p> */}
           </div>
       
           <div class="w-8/12 mt-10">
           <h2 class=" max-sm: text-3xl md:text-5xl ">
            {/* What we offer! */}
            <FormattedMessage
                  id="app.whatweoffer"
                  defaultMessage="whatweoffer"
                />
            </h2>
        <p class="mt-5">
           <FormattedMessage
                  id="app.ourlibax"
                  defaultMessage="ourlibax"
                />
          </p>
          {/* &nbsp;
          <p>
          <FormattedMessage
                  id="app.selectedcandidatesare"
                  defaultMessage="selectedcandidatesare"
                />
          </p>
          &nbsp;
          <p>
          <FormattedMessage
                  id="app.selectedcandidatesare"
                  defaultMessage="selectedcandidatesare"
                />
          </p>
          &nbsp;
          <p>
          <FormattedMessage
                  id="app.onceasuitablematch"
                  defaultMessage="onceasuitablematch"
                />
          </p> */}
          </div>
          <div class="mt-4 max-sm:w-w77 max-sm:ml-margin5 md:w-w81  flex flex-col items-center ml-margin10 ">
          <h2 class=" max-sm: text-3xl md:text-5xl flex justify-start w-w94">
            {/* Have any questions? */}
            <FormattedMessage
                  id="app.haveanyquestions"
                  defaultMessage="haveanyquestions"
                />
            </h2>
        <p class="mt-5 ml-3">
        <FormattedMessage
                  id="app.youcanleave"
                  defaultMessage="youcanleave"
                />
          {/* We will help you with all your questions to clear up any confusion or ambiguity! */}
          </p>
      </div>
      <div class="-ml-[19rem] mt-4 max-sm:-ml-32">
        <Button
        className="abtnn text-white "
                >
                  <a href="https://talent.tekorero.com/contact/" target="_blank"><label style={{fontFamily:"sans-serif"}}>Contact us</label></a>
               
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobTalentContent);
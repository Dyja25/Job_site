import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';

import { Button } from "antd";




function PartnerContent(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>
{/* <div class="flex-col mt-96" style={{display:"flex",justifyContent:"center",flexDirection:"column",flexWrap:"wrap"}}> */}
<div class=" flex flex-col mt-margin60 justify-end flex-wrap items-center max-sm:mt-0">
  {/* <div class="flex-col w-8/12" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignContent:"stretch",alignItems:"flex-end"}}> */}
    <div class=" flex flex-col w-8/12 justify-center mt-12 ">
     <h2 class=" max-sm: text-3xl md:text-5xl  ">
      {/* Why join us? */}
      <FormattedMessage
                  id="app.whyjoinus"
                  defaultMessage="whyjoinus"
                />
      </h2>
        <p class="mt-5">
                        <FormattedMessage
                  id="app.isyurcom"
                  defaultMessage="isyurcom"
                />
               </p>
               </div>
               <div class="w-8/12 mt-12">
                
               <h2 class=" max-sm: text-3xl md:text-5xl ">
               <FormattedMessage
                  id="app.whatweoffer"
                  defaultMessage="whatweoffer"
                />
                {/* What we offer! */}
                </h2>
        <p  class="mt-5">
        <FormattedMessage
                  id="app.throughourpl"
                  defaultMessage="throughourpl"
                />
          </p>
          &nbsp;
          <p>
          <FormattedMessage
                  id="app.onceasuitable"
                  defaultMessage="onceasuitable"
                />
          </p>
        </div>
        <div class="mt-12 max-sm:w-w77 md:w-w81 flex flex-col items-center ml-margin10 ">
        <h2 class=" max-sm:w-full text-3xl md:text-5xl w-w96 ">
         <FormattedMessage
                  id="app.haveanyquestions"
                  defaultMessage="haveanyquestions"
                />
          </h2>
          <p class="mt-5 ml-3">
          <FormattedMessage
                  id="app.youcanleavemessa"
                  defaultMessage="youcanleavemessa"
                />
                  </p>
        </div>
        <div class="w-1/6 mt-4 max-sm:mr-margin25 md:mr-margin50">
        <a href="https://talent.tekorero.com/contact/"></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(PartnerContent);
import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { FormattedMessage } from "react-intl";
import PartnerContent from "./PartnerContent.jsx";

import FWLogo from "../../images/Picture.jpg";
// import Header from "../../Components/Header/Header.jsx";
import PartnerForm from "./PartnerForm.jsx";

function Partner(props) {
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
      {/* <Header/> */}
      {/* <div class="sm:flex flex-wrap gap-4 border-solid ml-margin5  w-11/12 flex-col xl:flex-row flex justify-evenly mt-6 box-border h-auto"> */}
        {/* <FlexContainer class="sm:flex flex-wrap gap-4 border-solid ml-margin5  w-11/12 flex-col xl:flex-row flex justify-evenly mt-6 box-border h-auto">
        
        <JobVendorContent/>
        <JobVendorForm/>
 
        </FlexContainer> */}
        {/* </div> */}
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
                  id="app.lookingforpartners"
                  defaultMessage="lookingforpartners"
                />
  </h2>
<hr class=" max-sm:h-0 mt-0 md:mt-4 w-w47 ml-0 h-1 mx-auto  bg-gray-100 border-0 rounded "/>
{/* <div class=" max-sm:  md:border-l-border-l-5 h-h8 ml-margin65 md:w-2/3"></div> */}
<h4 class=" text-slate-400  max-sm:leading-6 text-base md:text-3.5xl leading-10 mt-margin2 ">
<FormattedMessage
                  id="app.bignetworkofpartners"
                  defaultMessage="bignetworkofpartners"
                />
{/* Fill in our form to join our */}
<br/>
{/* <FormattedMessage
                  id="app.bignetworkofpartners"
                  defaultMessage="bignetworkofpartners"
                /> */}
{/* big network of partners! */}
</h4>

</div>
</div> 
  
   <div class=" grid grid-cols-2 gap-4 max-sm:flex flex-col-reverse mt-0 md:-mt-96">
  {/* <div class="grid grid-cols-2 gap-4 max-sm:mt-0 4% 0% 5%",display:"flex",flexDirection:"column-reverse"> */}
        <div class="flex flex-col justify-center ">
            <PartnerContent/>
        </div>
        <div class="flex flex-col justify-center max-sm:mt-0 items-center md:mt-36">
        <div class=" max-sm:  md:border-l-border-l-5 h-28 ml-margin251 -mt-margin5.6 md:w-2/3"></div>
            <PartnerForm/>
        </div>
    </div>
    <hr class=" mt-28 w-auto ml-0 h-1 mx-auto  bg-black border-0 rounded "/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Partner);
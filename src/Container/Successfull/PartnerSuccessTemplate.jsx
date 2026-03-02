
import React from "react";
import { CheckCircleFilled ,CloseCircleOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Button, Card } from "antd";

 import FWLogo from "../../images/Rdm.jpg";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PartnerSuccessTemplate extends React.Component {
  render() {
    console.log(this.props.partnerMessage)
  
  return (
  <>
   
    {/* <div className="oderContainer"> */}
    <div class=" w-full">
    <img
          className="big-logo max-sm:w-w130 h-auto md:h-h150 mr-96 w-w200 "
          src={FWLogo}
         
          alt="Tekorero logo"
        />
        </div>
    <div class=" flex  flex-col items-center " >
    {this.props.partnerMessage.partnerInd===true?<CloseCircleOutlined style={{ fontSize: "3rem", color: "red" }} />: <CheckCircleFilled style={{ fontSize: "3rem", color: "green" }} />}
     
      <div class=" flex justify-center" >
      <div class=" text-2xl mt-8 flex w-2/5 justify-center">{this.props.partnerMessage.message}
    
      </div>
      </div>
      <div class=" flex justify-center mt-8 w-full" >
        <div className="btnTrck">
          <Button
          className="btnTrack"
           type="primary"
          >
          Contact Us
          </Button>
          {/* </Link> */}
        </div>
        &nbsp;&nbsp;
        <div>
        
    
        <Link to="/">
          <Button 
          className="btnShping"
          type="primary"
          >
            Home 
          </Button>
          </Link>
          </div>
      
      
      </div>
    </div>
   
  {/* </div> */}
</>
  );
}
}

const mapStateToProps = ({ customer, auth ,job}) => ({
  partnerMessage:job.partnerMessage
  // paymentId: customer.paymentDetails.stripePaymentId,
  // shopName:customer.shopName,
  // confirmedPayment:customer.confirmedPayment

});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        // getShopName
        //  addPlaceOrder
      },
      dispatch
  );




export default (connect(mapStateToProps, mapDispatchToProps)(PartnerSuccessTemplate));




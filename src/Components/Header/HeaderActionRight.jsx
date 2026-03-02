import React, { useEffect ,useState} from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { Select,message,Button } from "antd";
// import { Link } from "react-router-dom";
import { setLanguage } from "../../../src/Language/LanguageAction";


const { Option } = Select;

const HeaderActionRight = (props) => {



    

  function handleLanguageSelect(selectType) {
    
    props.setLanguage(selectType)
    
  
    
  }
 
    return (
      <>
 <div class="flex"> 
      <div class="md:mr-4">
        <Select 
        className=" max-sm:hidden "
                    value={props.language}
                     style={{fontFamily:"sans-serif"}}
                   
                    onChange={(e) => handleLanguageSelect(e)}
                  >
                    <Option value="Dutch" style={{fontFamily:"sans-serif"}}>Dutch</Option>
                    <Option value="English" style={{fontFamily:"sans-serif"}}>English</Option>
                    
                  </Select>
                  </div>

                  {/* <Link to="/login">
          <Button className='yourshop ' 
          style={{height:"1.7rem"}}
          type="primary">
            <h4 class="text-white">Log in</h4>
          </Button>
        </Link> */}
        </div>
</>

    );
    
 
}
const mapStateToProps = ({ language}) => ({
  language:language.language
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      setLanguage
    },
    dispatch
  );
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderActionRight);
import React, { Component } from "react";
import { ActionHeader } from "../../Components/Utils";
import HeaderActionLeft from "./HeaderActionLeft.jsx";
import HeaderActionRight from "./HeaderActionRight.jsx";

class Header extends Component {
  render() {
    const { setJobViewType, viewType } = this.props;
    return (
      <div  >
        <ActionHeader
          leftComponent={
            <HeaderActionLeft
              setJobViewType={setJobViewType}
              viewType={viewType}
            />
          }
              rightComponent={<HeaderActionRight/>}

        />
       
      
     
      </div>
    );
  }
}

export default Header;

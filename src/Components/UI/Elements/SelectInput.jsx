import styled from "styled-components";
import { StyledSelect } from "../Antd";
const SelectInput = styled(StyledSelect)`
  .ant-input{
      borderRadius: "0.4rem";
      // border: 0.0625em solid ${props => props.theme.borderColor};
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.color};
      display: block;
      margin: 0 0 0.2rem 0;
      width:21.875em;
      font-size: 16px;
      outline: none;
      box-shadow:${props => (props.isShadow ? "" : "0em 0.25em 0.625em -0.25em #aaa")} ; 
       height:2.6rem;
      border-right: ${props =>
    props.isRequired ? "0.1875em solid #ed260b" : ""} !important;
      padding: 4px;
    &:hover{
      // box-shadow: 0em 0.25em 0.625em -0.125em  #777;
      }
      ::placeholder {
      color: #737373;
      font-family:sans-serif;
      padding: 4px
      }
      ::placeholder {
      color: #737373;
      font-family:sans-serif;
      padding: 4px
      }
  }
  .ant-select-selection {
    height: 1.8125em;
    line-height:0px;
    padding: 4px
    font-size: 16px;
     
  }
   `;
export default SelectInput;

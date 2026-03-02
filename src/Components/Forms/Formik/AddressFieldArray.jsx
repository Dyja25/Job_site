import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { EnvironmentOutlined } from '@ant-design/icons';
import { Field } from "formik";

import { Spacer } from "../../UI/Elements";
import FormikPlacesAutoComplete from "./FormikPlacesAutoComplete.jsx";

class AddressFieldArray extends Component {
  render() {
    console.log(this.props);
    const { arrayHelpers, values, singleAddress } = this.props;
    console.log(singleAddress);
    console.log(values);
    return (
      <div>
        <>
          {/* {!singleAddress && (
            <Button
              type="primary"
              htmlType="button"
              onClick={() =>
                arrayHelpers.push({
                  addressType: "",
                  address1: "",
                  address2: "",
                  town: "",
                  street: "",
                  city: "",
                  state: "",
                  postalCode: "",
                  country: "",
                  latitude: "",
                  longitude: ""
                })
              }
            >
              +
            </Button>
          )} */}
        </>

        {values &&
          values.address.map((address, index) => (
            <div >
              {/* <StyledLabel style={{ marginTop: "0.75em" }}>Location</StyledLabel> */}
              <div key={index} style={{ display: "flex", marginTop: "1.25rem",justifyContent:"center" }}>
                <div class="max-sm: w-wk mt-1 flex  md:mt-4 ">
                <EnvironmentOutlined
                  // type="environment"
                  style={{                   
                    fontSize: "1.2em",
                    margin: "0px 0.68em 0.42rem",
                    placeSelf: "center",
                    color:"white"
                  }}
                />
                <Field
                  name={`address[${index}]`}
                  // label="Location"
                  component={FormikPlacesAutoComplete}
                  isColumn
                  options={{}}
                  style={{ height: "2em", marginTop: "0px" }}
                />
                </div>
                <div style={{ marginTop: "0.31em" }}>
                  {!singleAddress && (
                    <Button
                      type="primary"
                      htmlType="button"
                      ghost
                      onClick={() =>
                        arrayHelpers.push({
                          addressType: "",
                          address1: "",
                          address2: "",
                          town: "",
                          street: "",
                          houseNo: "",
                          city: "",
                          state: "",
                          postalCode: "",
                          country: "",
                          latitude: "",
                          longitude: "",
                        })
                      }
                    >
                      <i class="fas fa-plus"></i>
                    </Button>
                  )}
                </div>
                <div style={{ marginTop: "0.31em" }}>
                  {!singleAddress && (
                    <Button
                      ghost
                      type="primary"
                      htmlType="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      <i class="fas fa-minus"></i>
                    </Button>
                  )}
                </div>
              </div>
              {/* {!singleAddress && (
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  -
                </Button>
              )} */}
              <span>
                {/* <Field
                                name={`address[${index}].addressType`}
                                label='Type'
                                component={SelectComponent}
                                options={['Office', 'Communication', 'Headquarters', 'Registered']}
                                inlineLabel
                                style={{ flexBasis: '80%' }}
                            /> */}
                <Spacer style={{ margin: 0 }} />
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0px",
                    //fontStyle: "italic",
                    color: "#1890ff",
                    fontFamily: "sans-serif",
                    margin: 0,
                  }}
                >
                    {/* <FormattedMessage
                  id="app.addressinputisonlyallowedusinglocationfeature"
                  defaultMessage="addressinputisonlyallowedusinglocationfeature"
                /> */}
                  {/* Address input is only allowed using Location feature */}
               
                  <label htmlFor={`address.${index}.address2`}></label>
                  <label htmlFor={`address.${index}.street`}></label>
                </p>
                {/* <FormattedMessage id="app.houseno" defaultMessage="houseno">

                          
{houseNo =>  ( <Field

name={`address.${index}.houseNo`}
    placeholder={houseNo}
    component={InputComponent}
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
              
                   {/* <Spacer />
                <Field
                
                  name={`address.${index}.houseNo`}
                  placeholder="House No"
                  component={InputComponent}
                  width={"100%"}
                  isColumn
                  inlineLabel
                /> */}
                <Spacer />
                {/* <Field name={`address.${index}.address2`}
                                label='Address2'
                                component={InputComponent}
                            /> */}


{/* <FormattedMessage id="app.street" defaultMessage="street">

                          
{street =>  ( <Field

name={`address.${index}.street`}
    placeholder={street}
    component={InputComponent}
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
           
             
                <Spacer />
                  <div>
                    <Tooltip title="Use Location feature for easy search ">
                    {/* <FormattedMessage id="app.city" defaultMessage="city">

                          
{city =>  ( <Field

name={`address.${index}.city`}
    placeholder={city}
    component={InputComponent}
    disabled
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
                    </Tooltip>
                  </div>
                  <div>
                    <Tooltip title="Use Location feature for easy search ">

                    {/* <FormattedMessage id="app.state" defaultMessage="state">

                          
{state =>  ( <Field

name={`address.${index}.state`}
    placeholder={state}
    component={InputComponent}
    disabled
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
                    </Tooltip>
                  </div>

                  <div>
                    <Tooltip title="Use Location feature for easy search ">
                    {/* <FormattedMessage id="app.zipcode" defaultMessage="zipcode">

                          
{zipcode =>  ( <Field

name={`address.${index}.postalCode`}
    placeholder={zipcode}
    component={InputComponent}
    disabled
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
 
                    </Tooltip>
                  </div>

                  <div>
                    <Tooltip title="Use Location feature for easy search ">

                    {/* <FormattedMessage id="app.country" defaultMessage="country">

                          
{country =>  ( <Field

name={`address.${index}.country`}
    placeholder={country}
    component={InputComponent}
    disabled
    width={"100%"}
    isColumn
    inlineLabel
  />
)}
  </FormattedMessage> */}
  {/* <div class="flex  flex-col">
  <Field
name={`address.${index}.houseNo`}
    
  />
  <Field
name={`address.${index}.street`}
    
  />
  <Field
name={`address.${index}.state`}
   
  />
  <Field
name={`address.${index}.country`}
    
  />
    <Field
name={`address.${index}.postalCode`}
   
  />
  </div> */}
                    </Tooltip>
                  </div>
              

                <Spacer />
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default AddressFieldArray;

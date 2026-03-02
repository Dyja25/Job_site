import React from "react";
import { get } from "lodash";
import { FlexContainer } from "../../UI/Layout";
import { SelectInput, ValidationError, StyledLabel } from "../../UI/Elements";
const Option = SelectInput.Option;

export const SelectComponent = ({
  field,
  options,
  mode,
  label,
  placeholder,
  isRequired,
  isShadow,
  isColumn,
  defaultValue,
  noLabel,
  width,
  inlineLabel,
  form: { touched, errors, setFieldTouched, setFieldValue },
  ...props
}) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
    setFieldValue(field.name, value);
  }

  function handleBlur() {
    console.log("blur");
    setFieldTouched(field.name, true);
  }

  // Apply border styling conditionally based on isRequired prop
  const inputStyle = {
    height: "2.8rem",
    borderRadius:"0.6rem",
    borderRight: isRequired ? "3px solid red" : "none", // Apply border styling here
  };

  return (
    <>
      <FlexContainer>
        <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: "100%" }}>{label}</StyledLabel>
          )}
          <SelectInput
            style={{ ...inputStyle }} // Apply inputStyle here
            {...field}
            {...props}
            width="100%"
            isShadow={isShadow}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder || "Select"}
            defaultValue={defaultValue}
            isRequired={isRequired}
              mode={mode || undefined}
          >
            {options.map((option, i) => {
              if (typeof option === "string") {
                return (
                  <Option key={i} value={option}>
                    {option}
                  </Option>
                );
              } else {
                return (
                  <Option key={i} value={option.value}>
                    {option.label}
                  </Option>
                );
              }
            })}
          </SelectInput>
        </FlexContainer>
      </FlexContainer>
      {get(touched, field.name) && get(errors, field.name) && (
        <ValidationError>{get(errors, field.name)}</ValidationError>
      )}
    </>
  );
};

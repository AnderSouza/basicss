import React, { useState, FocusEvent } from "react";
import { TextInputProps } from "../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import CheckBox from "./checkbox";
import Masked from "./masked";
import Radio from "./radio";

let normal = {
  fontSize: "0.9rem",
  top: "16px",
};

let elevated = {
  fontSize: "0.7rem",
  top: "0px",
  color: "steelblue",
};

type StyledInputProps = {
  name?: string;
  value: string;
  valid: boolean;
  isFocused: boolean;
};

type StyledLabelProps = {
  for?: string;
  valid: boolean;
  value: string;
  isFocused: boolean;
};

type StyledMessageProps = {
  valid: boolean;
};

const StyledWrapper = commonStyles(
  styled.div`
    position: relative;
    width: 100%;
  `
);

const getColor = (valid: boolean, isFocused: boolean) => {
  if (valid) {
    return isFocused ? "steelblue" : "grey";
  } else {
    return "tomato";
  }
};

const StyledLabel = styled.label<StyledLabelProps>`
  width: 100%;
  position: absolute;
  left: 0px;
  padding-left: 10px;
  z-index: 1;
  transition: font-size 200ms ease-out, top 200ms ease-out;
  color: ${(props) => getColor(props.valid, props.isFocused)};
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  position: relative;
  background: transparent;
  border: none;
  border-bottom: ${(props) =>
    `solid 2px ${getColor(props.valid, props.isFocused)}`};
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 18px;
  outline: none;
  font-size: 1rem;
  z-index: 2;
`;

const StyledMessage = styled.div<StyledMessageProps>`
  width: 100%;
  padding: 8px 10px;
  color: ${(props) => (props.valid ? "black" : "tomato")};
  font-size: 0.8rem;
`;

const Input = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0 ? true : false;

  function getStyle(hasValue: boolean, isFocused: boolean) {
    return hasValue || isFocused ? elevated : normal;
  }

  return (
    <StyledWrapper>
      <StyledLabel
        style={{ ...getStyle(hasValue, isFocused), ...props.labelStyle }}
        for={props.name}
        valid={props.valid}
        value={props.value}
        isFocused={isFocused}
        className={props.labelClassName}
      >
        {props.title}
      </StyledLabel>
      <StyledInput
        name={props.name}
        type={props.type ? props.type : "text"}
        value={props.value}
        placeholder={props.placeholder}
        valid={props.valid}
        onClick={props.onClick}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        onFocus={(e: FocusEvent<any>) => {
          setIsFocused(!isFocused);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={(e: FocusEvent<any>) => {
          setIsFocused(!isFocused);
          props.onBlur && props.onBlur(e);
        }}
        isFocused={isFocused}
        ref={props.innerRef}
        style={props.style}
        className={props.className}
      />
      <StyledMessage
        valid={props.valid}
        style={props.messageStyle}
        className={props.messageClassName}
      >
        {props.message}
      </StyledMessage>
    </StyledWrapper>
  );
};

Input.CheckBox = CheckBox;
Input.Radio = Radio;
Input.Masked = Masked;

export default Input;

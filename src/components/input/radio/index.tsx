import React from "react";
import { RadioInputProps } from "./../../../types";
import styled from "styled-components";
import { commonStyles } from "./../../common-styles";

const HiddenRadio = styled.input`
  display: none;
`;

const Radio = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: lightgray;
  display: inline-block;
  ${HiddenRadio}:checked + & {
    background-color: steelblue;
  }
  ${HiddenRadio}:checked ~ &:after {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    margin-top: 4px;
    margin-left: 4px;
  }
  vertical-align: middle;
  margin-left: 3px;
`;

const Label = commonStyles(
  styled.label`
    margin: 6px;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover > ${Radio} {
      background-color: darkgray;
    }
    &:hover > ${HiddenRadio}:checked + ${Radio} {
      background-color: steelblue;
    }
  `
);

export default (props: RadioInputProps) => {
  return (
    <Label className={props.labelClassName} style={props.labelStyle}>
      {props.title}
      <HiddenRadio
        name={props.name}
        type="radio"
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
      />
      <Radio className={props.className} style={props.style} />
    </Label>
  );
};

import React from "react";
import { CheckboxInputProps } from "../../../types";
import styled from "styled-components";
import { commonStyles } from "./../../common-styles";

const HiddenCheckbox = styled.input`
  display: none;
`;

const Checkbox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  background-color: lightgray;
  display: inline-block;
  ${HiddenCheckbox}:checked + & {
    background-color: steelblue;
  }
  ${HiddenCheckbox}:checked ~ &:after {
    content: "";
    display: block;
    width: 6px;
    height: 12px;
    background: transparent;
    margin-top: 2px;
    margin-left: 7px;
    border-right: solid 2px white;
    border-bottom: solid 2px white;
    transform: rotate(45deg);
  }
  vertical-align: middle;
  margin-left: 3px;
`;

const Label = commonStyles(
  styled.label`
    margin: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover > ${Checkbox} {
      background-color: darkgray;
    }
    &:hover > ${HiddenCheckbox}:checked + ${Checkbox} {
      background-color: steelblue;
    }
  `
);

export default (props: CheckboxInputProps) => {
  return (
    <>
      <Label className={props.labelClassName} style={props.labelStyle}>
        {props.title}
        <HiddenCheckbox
          name={props.name}
          type="checkbox"
          value={props.value}
          onClick={props.onClick}
          onChange={props.onChange}
        />
        <Checkbox className={props.className} style={props.style} />
      </Label>
    </>
  );
};

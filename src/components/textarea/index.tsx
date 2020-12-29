import React from "react";
import { TextAreaProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";

const TextArea = commonStyles(
  styled.textarea`
    width: 100%;
    border: solid 1px lightgray;
    margin-top: 5px;
    padding: 4px 8px;
    font-size: 0.9rem;
    border-radius: 3px;
    outline: none;
    &:focus {
      border: solid 1px steelblue;
    }
  `
);

const Label = styled.label`
  margin: 6px;
  font-size: 0.9rem;
`;

export default (props: TextAreaProps) => {
  return (
    <Label className={props.labelClassName} style={props.labelStyle}>
      {props.title}
      <TextArea
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onClick={props.onClick}
        onChange={props.onChange}
        className={props.className}
        style={props.style}
        rows={props.rows}
        cols={props.cols}
      />
    </Label>
  );
};

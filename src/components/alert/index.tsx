import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsExclamationSquareFill } from "react-icons/bs";
import { AlertProps } from "./../../types/index";
import { commonStyles } from "./../common-styles";
import COLORS from "./../../colors";

const getBackground = (variant?: string) => {
  switch (variant) {
    case "error":
      return COLORS.error;
    case "warning":
      return COLORS.warning;
    case "info":
      return COLORS.info;
    case "success":
      return COLORS.success;
    default:
      return COLORS.primary;
  }
};

const Alert = commonStyles(
  styled.div<{ variant?: string }>`
    background-color: ${(props) => getBackground(props.variant)};
    font-size: 1.25rem;
    line-height: 1.25rem;
    border-radius: 6px;
    padding: 10px;
    color: white;
    margin: 10px;
  `
);

const iconStyle = {
  verticalAlign: "middle",
  fontSize: "30px",
  marginRight: "5px",
};

export default (props: AlertProps) => (
  <Alert {...props}>
    <IconContext.Provider value={{ style: iconStyle }}>
      <BsExclamationSquareFill />
    </IconContext.Provider>
    {props.children}
  </Alert>
);

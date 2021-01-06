import React from "react";
import { ButtonProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import COLORS from "./../../colors";

const getColor = (color: string) => {
  switch (color) {
    case "primary":
      return COLORS.primary;
    case "secondary":
      return COLORS.secondary;
    case "success":
      return COLORS.success;
    case "info":
      return COLORS.info;
    case "warning":
      return COLORS.warning;
    case "error":
      return COLORS.error;
    default:
      return COLORS.primary;
  }
};

const getBorderByVariant = (variant: string, color: string) => {
  return variant === "outlined" ? `solid 1px ${getColor(color)}` : `none`;
};

const getFontColorByVariant = (variant: string, color: string) =>
  variant === "filled" ? "white" : getColor(color);

const getBackgroundColorByVariant = (
  state: "normal" | "active" | "hover",
  color: string,
  variant: string
) => {
  const isFilled = variant === "filled";
  let opacity;
  switch (state) {
    case "normal":
      opacity = isFilled ? 0.85 : 0.05;
      break;
    case "active":
      opacity = isFilled ? 1 : 0.15;
      break;
    case "hover":
      opacity = isFilled ? 0.7 : 0.1;
      break;
    default:
      opacity = 0.85;
  }
  return COLORS.convertHexToRGBA(getColor(color), opacity || 1);
};

const StyledButton = commonStyles(
  styled.button<ButtonProps>`
    padding: 6px;
    margin: 5px;
    font-size: 0.9rem;
    background-color: ${(props) =>
      getBackgroundColorByVariant("normal", props.color, props.variant)};
    color: ${(props) => getFontColorByVariant(props.variant, props.color)};
    border: ${(props) => getBorderByVariant(props.variant, props.color)};
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
        getBackgroundColorByVariant("hover", props.color, props.variant)};
    }
    &:active {
      background-color: ${(props) =>
        getBackgroundColorByVariant("active", props.color, props.variant)};
    }
  `
);

export default (props: ButtonProps) => <StyledButton {...props} />;

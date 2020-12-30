import { MouseEventHandler } from "react";
import { BaseProps } from "./base-props";

type Variant = "filled" | "void" | "outlined";
type Color = "primary" | "secondary" | "success" | "info" | "warning" | "error";
type Type = "button" | "submit" | "reset";

export interface ButtonProps extends BaseProps {
  autoFocus?: boolean;
  disabled?: boolean;
  name?: string;
  type?: Type;
  value?: string;
  variant: Variant;
  color: Color;
}

import { MouseEventHandler } from "react";
import { BaseProps } from "./base-props";
declare type Variant = "filled" | "void" | "outlined";
declare type Color = "primary" | "secondary" | "success" | "info" | "warning" | "error";
declare type Type = "button" | "submit" | "reset";
export interface ButtonProps extends BaseProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: MouseEventHandler<HTMLButtonElement>;
    autoFocus?: boolean;
    disabled?: boolean;
    name?: string;
    type?: Type;
    value?: string;
    variant: Variant;
    color: Color;
}
export {};

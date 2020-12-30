import { RefObject } from "react";
import { BaseProps } from "./base-props";
import { CSSProperties } from "react";

export interface TextInputProps extends BaseProps {
  title?: string;
  name?: string;
  type?: "text" | "number";
  value: string;
  placeholder?: string;
  valid: boolean;
  message?: string;
  innerRef?: RefObject<HTMLInputElement>;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  messageStyle?: CSSProperties;
  messageClassName?: string;
}

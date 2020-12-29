import { MouseEvent, ChangeEvent, KeyboardEvent, RefObject } from "react";
import { BaseProps } from "./base-props";
import { CSSProperties } from "react";

export interface TextInputProps extends BaseProps {
  title?: string;
  name?: string;
  value: string;
  placeholder?: string;
  valid: boolean;
  message?: string;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  innerRef?: RefObject<HTMLInputElement>;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  messageStyle?: CSSProperties;
  messageClassName?: string;
};

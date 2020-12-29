import { CSSProperties, MouseEvent, ChangeEvent } from "react";
import { BaseProps } from "./base-props";

export interface TextAreaProps extends BaseProps {
  title: string;
  name: string;
  value?: string;
  placeholder: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  rows?: number;
  cols?: number;
  onClick?: (e: MouseEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

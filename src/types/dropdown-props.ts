import { BaseProps } from "./base-props";
import { CSSProperties } from "react";

export interface DropdownProps extends BaseProps {
  title: string;
  buttonStyle?: CSSProperties;
  buttonClassName?: string;
}

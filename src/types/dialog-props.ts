import { BaseProps } from "./base-props";
import { CSSProperties } from "react";

export interface DialogProps extends BaseProps {
  open: boolean;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
  onCancel: () => void;
}

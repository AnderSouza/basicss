import { CSSProperties, ReactElement } from "react";
import { BaseProps } from "./base-props";

export interface TabsProps extends BaseProps {
  headClassName?: string;
  headStyle?: CSSProperties;
  linkClassName?: string;
  linkStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  children: ReactElement | ReactElement[];
};

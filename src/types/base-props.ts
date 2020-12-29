import { ReactChild, CSSProperties } from "react";

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactChild | ReactChild[];
}

import { BaseProps } from "./base-props";

type Variant = "error" | "warning" | "info" | "success";

export interface AlertProps extends BaseProps {
  variant: Variant;
}

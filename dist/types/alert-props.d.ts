import { BaseProps } from "./base-props";
declare type Variant = "error" | "warning" | "info" | "success";
export interface AlertProps extends BaseProps {
    variant: Variant;
}
export {};

import { BaseProps } from "./base-props";
import { CSSProperties } from "react";
export interface CheckboxInputProps extends BaseProps {
    title?: string;
    name: string;
    value: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
}

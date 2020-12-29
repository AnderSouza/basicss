import { BaseProps } from "./base-props";
import { MouseEvent, ChangeEvent, CSSProperties } from "react";
export interface CheckboxInputProps extends BaseProps {
    title?: string;
    name: string;
    value: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

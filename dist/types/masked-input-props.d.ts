import { BaseProps } from "./base-props";
import { CSSProperties, RefObject } from "react";
export interface MaskedInputProps extends BaseProps {
    initial: string;
    format: string;
    placeholder: string;
    mask: string;
    valid: boolean;
    setValue: (value: string) => void | undefined;
    title?: string;
    name?: string;
    message?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    messageStyle?: CSSProperties;
    messageClassName?: string;
    setRef?: (ref: RefObject<HTMLInputElement>) => void;
}

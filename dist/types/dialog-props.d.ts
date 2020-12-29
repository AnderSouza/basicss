import { BaseProps } from "./base-props";
import { CSSProperties } from "react";
export interface DialogProps extends BaseProps {
    open: boolean;
    fadeStyle?: CSSProperties;
    fadeClassName?: string;
    actionsStyle?: CSSProperties;
    actionsClassName?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

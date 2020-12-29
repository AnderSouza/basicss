/// <reference types="react" />
import { TextInputProps } from "../../types";
declare const Input: {
    (props: TextInputProps): JSX.Element;
    CheckBox: (props: import("../../types").CheckboxInputProps) => JSX.Element;
    Radio: (props: import("../../types").RadioInputProps) => JSX.Element;
    Masked: (props: import("../../types").MaskedInputProps) => JSX.Element;
};
export default Input;

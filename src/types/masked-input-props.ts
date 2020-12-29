import { BaseProps } from "./base-props";
import { MouseEvent, ChangeEvent, KeyboardEvent, CSSProperties } from "react";

export interface MaskedInputProps extends BaseProps {
  initial: string;
  format: string;
  placeholder: string;
  mask: string;
  setValue: (value: string) => void | undefined;
  title?: string;
  name?: string;
  valid: boolean;
  message?: string;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  messageStyle?: CSSProperties;
  messageClassName?: string;
}

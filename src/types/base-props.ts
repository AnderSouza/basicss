import {
  ReactChild,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  CSSProperties,
  RefObject,
} from "react";

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactChild | ReactChild[];
  innerRef?: RefObject<any>;
  onClick?: (e: MouseEvent<any>) => void;
  onChange?: (e: ChangeEvent<any>) => void;
  onKeyDown?: (e: KeyboardEvent<any>) => void;
  onKeyUp?: (e: KeyboardEvent<any>) => void;
  onFocus?: (e: FocusEvent<any>) => void;
  onBlur?: (e: FocusEvent<any>) => void;
  onMouseOver?: (e: MouseEvent<any>) => void;
}

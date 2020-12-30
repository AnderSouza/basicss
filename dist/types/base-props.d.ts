import { ReactChild, MouseEvent, ChangeEvent, KeyboardEvent, FocusEvent, CSSProperties, RefObject } from "react";
export interface BaseProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactChild | ReactChild[];
    innerRef?: RefObject<any>;
    onClick?: <T>(e: MouseEvent<T>) => void;
    onChange?: <T>(e: ChangeEvent<T>) => void;
    onKeyDown?: <T>(e: KeyboardEvent<T>) => void;
    onKeyUp?: <T>(e: KeyboardEvent<T>) => void;
    onFocus?: <T>(e: FocusEvent<T>) => void;
    onBlur?: <T>(e: FocusEvent<T>) => void;
    onMouseOver?: <T>(e: MouseEvent<T>) => void;
}

import React, {
  MouseEvent,
  RefObject,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  FocusEvent,
} from "react";
import {
  countFocusPosition,
  formatValue,
  validateInput,
  handleNewKey,
} from "./index.func";

import Input from "../input";
import { MaskedInputProps } from "../../../types/masked-input-props";

export default (props: MaskedInputProps) => {
  validateInput(props.initial, props.format, props.placeholder, props.mask);

  const ref = useRef<HTMLInputElement>(null);
  const [pureValue, setPureValue] = useState(props.initial);

  const onKeyDown = function <T>(e: React.KeyboardEvent<T>) {
    e.preventDefault();
    let newValue = handleNewKey(e.key, pureValue, props.format);
    setPureValue(newValue);
  };

  const moveCursorTo = (pos: number, ref: RefObject<HTMLInputElement>) => {
    ref.current && ref.current.setSelectionRange(pos, pos);
  };

  const focus = () => {
    const focusPosition = countFocusPosition(pureValue, props.mask);
    moveCursorTo(focusPosition, ref);
  };

  useEffect(() => {
    props.setValue && props.setValue(pureValue);
  }, [pureValue, props.setValue]);

  useEffect(() => {
    console.log("mounting masked component");
    props.setRef && props.setRef(ref);
  }, []);

  useLayoutEffect(() => {
    focus();
  });

  const value = formatValue(pureValue, props.placeholder, props.mask);

  const onClick = function <T>(e: MouseEvent<T>) {
    props.onClick && props.onClick(e);
    focus();
  };

  const onFocus = function <T>(e: FocusEvent<T>) {
    props.onFocus && props.onFocus(e);
    focus();
  };

  return (
    <Input
      valid={props.valid}
      type="text"
      value={value}
      innerRef={ref}
      title={props.title}
      name={props.name}
      placeholder={props.placeholder}
      message={props.message}
      onClick={onClick}
      onChange={props.onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      style={props.style}
      className={props.className}
      labelStyle={props.labelStyle}
      labelClassName={props.labelClassName}
      messageStyle={props.messageStyle}
      messageClassName={props.messageClassName}
    />
  );
};

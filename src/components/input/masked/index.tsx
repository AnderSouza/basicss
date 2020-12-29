import React, {
  MouseEvent,
  RefObject,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    let newValue = handleNewKey(e.key, pureValue, props.format);
    setPureValue(newValue);
  };

  const moveCursorTo = (pos: number, ref: RefObject<HTMLInputElement>) => {
    console.log(ref.current);
    ref.current && ref.current.setSelectionRange(pos, pos);
  };

  const focus = () => {
    const focusPosition = countFocusPosition(pureValue, props.mask);
    moveCursorTo(focusPosition, ref);
  };

  useEffect(() => {
    props.setValue && props.setValue(pureValue);
  }, [pureValue, props.setValue]);

  useLayoutEffect(() => {
    focus();
  });

  const value = formatValue(pureValue, props.placeholder, props.mask);
  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    props.onClick && props.onClick(e);
    focus();
  };
  return (
    <Input
      valid={props.valid}
      value={value}
      innerRef={ref}
      title={props.title}
      name={props.name}
      placeholder={props.placeholder}
      message={props.message}
      onClick={onClick}
      onChange={props.onChange}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown(e);
        props.onKeyDown && props.onKeyDown(e);
      }}
      style={props.style}
      className={props.className}
      labelStyle={props.labelStyle}
      labelClassName={props.labelClassName}
      messageStyle={props.messageStyle}
      messageClassName={props.messageClassName}
    />
  );
};

import React, { FocusEvent, MouseEvent, useRef, useState } from "react";
import { DropdownProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import COLORS from "./../../colors";

const Wrapper = commonStyles(
  styled.div`
    position: relative;
    display: inline-block;
  `
);
type OverlayProps = { isOpen: boolean };

const Overlay = commonStyles(
  styled.div<OverlayProps>`
    font-size: 0.8rem;
    background-color: ${COLORS.whitesmoke};
    position: absolute;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    padding: 2px 0px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
  `
);

const Button = styled.button<{ open: boolean }>`
  font-size: 0.8rem;
  padding: 8px;
  background-color: ${(props) =>
    props.open ? COLORS.gainsboro : COLORS.whitesmoke};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.gainsboro};
  }
`;

export const Item = styled.div`
  padding: 10px;
  font-size: 0.8rem;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${COLORS.whitesmoke};
  &:hover {
    background-color: ${COLORS.gainsboro};
  }
`;

export const Dropdown = (props: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);
  const focus = () => ref.current && ref.current.focus();
  const close = () => setIsOpen(false);

  const onMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
    !isOpen && setTimeout(focus, 200);
    toggle();
  };

  return (
    <Wrapper>
      <Button
        style={props.buttonStyle}
        className={props.buttonClassName}
        onMouseUp={onMouseUp}
        open={isOpen}
      >
        {props.title}
      </Button>
      <Overlay
        tabIndex={0}
        onBlur={(e: FocusEvent<HTMLDivElement>) => close()}
        onMouseUp={(e: MouseEvent<HTMLDivElement>) => close()}
        style={props.style}
        className={props.className}
        ref={ref}
        isOpen={isOpen}
      >
        {props.children}
      </Overlay>
    </Wrapper>
  );
};

Dropdown.Item = Item;

export default Dropdown;

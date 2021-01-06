import React, { MouseEvent } from "react";
import { DialogProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";

const Wrapper = commonStyles(
  styled.div<{ open: boolean }>`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.open ? "block" : "none")};
  `
);

const StyledDialog = styled.div`
  width: 40vw;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  font-size: 0.8rem;
`;

const Body = styled.div``;

const Footer = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding-top: 10px;
`;

const Dialog = (props: DialogProps) => (
  <Wrapper
    onClick={props.onCancel}
    open={props.open}
    className={props.wrapperClassName}
    style={props.wrapperStyle}
  >
    <StyledDialog
      style={props.style}
      className={props.className}
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      {props.children}
    </StyledDialog>
  </Wrapper>
);

Dialog.Body = Body;
Dialog.Footer = Footer;

export default Dialog;

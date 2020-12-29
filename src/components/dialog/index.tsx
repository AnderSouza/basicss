import React, { MouseEvent } from "react";
import Button from "./../button/index";
import { DialogProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";

const Fade = commonStyles(
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

const Dialog = styled.div`
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

const Actions = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding-top: 10px;
  border-top: solid 1px grey;
`;

export default (props: DialogProps) => (
  <Fade
    onClick={props.onConfirm}
    open={props.open}
    className={props.fadeClassName}
    style={props.fadeStyle}
  >
    <Dialog
      style={props.style}
      className={props.className}
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      {props.children}
      <Actions style={props.actionsStyle} className={props.actionsClassName}>
        <Button
          variant="filled"
          color="primary"
          style={{ marginLeft: "5px", float: "right" }}
          onClick={props.onConfirm}
        >
          OK
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ float: "right" }}
          onClick={props.onCancel}
        >
          Cancelar
        </Button>
      </Actions>
    </Dialog>
  </Fade>
);

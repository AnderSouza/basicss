import React from "react";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import { BaseProps } from "./../../types";
import COLORS from "./../../colors";

export const Item = styled.div`
  cursor: pointer;
  color: #444444;
  padding: 10px;
  margin: 0px 0px;
  &:hover {
    background-color: ${COLORS.gainsboro};
  }
`;

const StyledMenu = commonStyles(
  styled.div`
    width: 100%;
    border-radius: 4px;
    display: flex;
    padding: 0px 5px;
    background-color: ${COLORS.whitesmoke};
    & > div {
      border-right: solid 1px white;
    }
    & > div:last-of-type {
      border-right: none;
    }
    & > div:last-of-type {
      border-right: none;
    }
  `
);

const Menu = (props: BaseProps) => (
  <StyledMenu {...props}>{props.children}</StyledMenu>
);

Menu.Item = Item;

export default Menu;

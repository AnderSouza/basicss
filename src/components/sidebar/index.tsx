import React from "react";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import { BaseProps } from "./../../types/index";
import COLORS from "./../../colors";

const StyledItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: #444444;
  padding: 10px;
  white-space: nowrap;
  margin: 0;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  &:hover {
    background-color: ${COLORS.gainsboro};
  }
`;

const StyledSidebar = commonStyles(
  styled.div`
    display: inline-block;
    padding: 1px;
    font-size: 0.9rem;
    background-color: ${COLORS.whitesmoke};
  `
);

const StyledWrapper = styled.div``;

const Sidebar = (props: BaseProps) => (
  <StyledWrapper>
    <StyledSidebar {...props} />
  </StyledWrapper>
);

Sidebar.Item = StyledItem;

export default Sidebar;

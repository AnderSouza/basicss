import React from "react";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import { BaseProps } from "./../../types/index";

const StyledItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: white;
  padding: 10px;
  white-space: nowrap;
  margin: 0;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  &:hover {
    background-color: #999;
  }
`;

const StyledSidebar = commonStyles(
  styled.div`
    display: inline-block;
    padding: 1px;
    font-size: 0.9rem;
    background-color: #777777;
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

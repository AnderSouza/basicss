import styled, { StyledComponent } from "styled-components";

export const commonStyles = (component: StyledComponent<any, any>) => styled(
  component
)`
  font-family: inherit;
  box-sizing: border-box;
  & * {
    font-family: inherit;
    box-sizing: inherit;
  }
`;

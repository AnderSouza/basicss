import React from "react";
import { BaseProps } from "./../../types/index";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";

const StyledCard = commonStyles(
  styled.div`
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);
    margin: 0px 10px;
    padding: 8px;
    display: inline-block;
    background-color: white;
    font-family: inherit;
    box-sizing: border-box;
    & * {
      font-family: inherit;
      box-sizing: border-box;
    }
  `
);

const Header = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const Body = styled.div`
  font-size: 1rem;
`;

const Card = (props: BaseProps) => <StyledCard {...props} />;

Card.Header = Header;
Card.Body = Body;

export default Card;

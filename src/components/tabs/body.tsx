import React, { CSSProperties, ReactElement } from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: white;
  border: solid 1px #777777;
  border-top: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px;
`;

function isArray(
  children: ReactElement | ReactElement[]
): children is Array<ReactElement> {
  return children.constructor.name === "Array";
}

const generateTabs = (
  active: string,
  children: ReactElement | ReactElement[]
) => {
  children = isArray(children) ? children : [children];
  return children.map((child) => (
    <div style={{ display: child.props.title === active ? "block" : "none" }}>
      {child}
    </div>
  ));
};

export default (props: {
  children: ReactElement | ReactElement[];
  style?: CSSProperties;
  className?: string;
  active: string;
}) => (
  <Body style={props.style} className={props.className}>
    {generateTabs(props.active, props.children)}
  </Body>
);

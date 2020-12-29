import React, { useState, ReactElement } from "react";
import { TabsProps } from "./../../types";
import styled from "styled-components";
import { commonStyles } from "./../common-styles";
import Head from "./head";
import Body from "./body";
import Tab from "./tab";

const StyledTabs = commonStyles(
  styled.div`
    margin: 10px;
  `
);

export function isArray(
  children: ReactElement | ReactElement[]
): children is Array<ReactElement> {
  return children.constructor.name === "Array";
}

const Tabs = (props: TabsProps) => {
  const initial = isArray(props.children)
    ? props.children[0].props.title
    : props.children.props.title;

  const [active, setActive] = useState(initial);

  return (
    <StyledTabs style={props.style} className={props.className}>
      <Head
        style={props.headStyle}
        className={props.headClassName}
        linkStyle={props.linkStyle}
        linkClassName={props.linkClassName}
        setActive={setActive}
        active={active}
      >
        {props.children}
      </Head>
      <Body
        style={props.bodyStyle}
        className={props.bodyClassName}
        active={active}
      >
        {props.children}
      </Body>
    </StyledTabs>
  );
};

Tabs.Tab = Tab;

export default Tabs;

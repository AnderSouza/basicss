import React, {
  Dispatch,
  MouseEvent,
  ReactElement,
  SetStateAction,
  CSSProperties,
} from "react";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  border-bottom: solid 1px #777777;
`;

const Link = styled.div<{ active: boolean }>`
  border: ${(props) => (props.active ? `solid 1px #777777` : `none`)};
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-bottom: ${(props) => (props.active ? `-1px` : `0px`)};
  cursor: pointer;
  padding: 8px;
  background-color: white;
`;

function isArray(
  children: ReactElement | ReactElement[]
): children is Array<ReactElement> {
  return children.constructor.name === "Array";
}

const createLinks = (props: {
  setActive: SetStateAction<Dispatch<string>>;
  active: string;
  children: ReactElement | ReactElement[];
  linkClassName?: string;
  linkStyle?: CSSProperties;
}) => {
  const children = isArray(props.children) ? props.children : [props.children];

  return children.map((child: ReactElement) => (
    <Link
      active={props.active === child.props.title}
      onClick={(e: MouseEvent<HTMLDivElement>) =>
        props.setActive(child.props.title)
      }
      style={props.linkStyle}
      className={props.linkClassName}
    >
      {child.props.title}
    </Link>
  ));
};

export default (props: {
  children: ReactElement | ReactElement[];
  active: string;
  setActive: SetStateAction<Dispatch<string>>;
  className?: string;
  style?: CSSProperties;
  linkClassName?: string;
  linkStyle?: CSSProperties;
}) => {
  return (
    <Head className={props.className} style={props.style}>
      {createLinks(props)}
    </Head>
  );
};

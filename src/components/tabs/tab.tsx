import React, { CSSProperties, ReactChild } from "react";

export default ({
  title,
  children,
  style,
  className,
}: {
  title: string;
  children?: ReactChild | ReactChild[];
  style?: CSSProperties;
  className?: string;
}) => (
  <div style={style} className={className}>
    {children}
  </div>
);

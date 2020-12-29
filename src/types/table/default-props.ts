import { MouseEventHandler } from "react";

export type DefaultProps = {
  onClick: MouseEventHandler<HTMLElement>;
  className: string | undefined;
  style: object | undefined;
};

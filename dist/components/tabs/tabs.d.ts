import React, { ReactElement } from "react";
import { TabsProps } from "./../../types";
export declare function isArray(children: ReactElement | ReactElement[]): children is Array<ReactElement>;
declare const Tabs: {
    (props: TabsProps): JSX.Element;
    Tab: ({ title, children, style, className, }: {
        title: string;
        children?: string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactChild[] | undefined;
        style?: React.CSSProperties | undefined;
        className?: string | undefined;
    }) => JSX.Element;
};
export default Tabs;

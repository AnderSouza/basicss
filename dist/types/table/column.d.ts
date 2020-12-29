/// <reference types="react" />
import { DefaultProps } from "./default-props";
export declare type Column = {
    id: string;
    title: string;
    accessor: string;
    width?: number;
    headerProps?: DefaultProps;
    cellProps?: DefaultProps;
    filter?: JSX.Element;
};

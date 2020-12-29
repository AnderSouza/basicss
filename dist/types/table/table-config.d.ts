import { DefaultProps } from "./default-props";
export declare type TableConfig = {
    pageIndex: number;
    pageCount: number;
    rowProps?: DefaultProps;
    tableProps?: DefaultProps;
    headProps?: DefaultProps;
    bodyProps?: DefaultProps;
    footProps?: DefaultProps;
    nextPage: () => void;
    prevPage: () => void;
};

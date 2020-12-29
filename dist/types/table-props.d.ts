import { BaseProps, Columns, TableConfig } from "./index";
export interface TableProps extends BaseProps {
    columns: Columns;
    data: any[];
    config: TableConfig;
}

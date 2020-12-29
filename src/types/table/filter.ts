import type { FilterFunction } from "./filter-function";
export type Filter = (id: string, filter: FilterFunction) => JSX.Element;

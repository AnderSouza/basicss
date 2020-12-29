/// <reference types="react" />
import { BaseProps } from "./../../types/index";
declare const Sidebar: {
    (props: BaseProps): JSX.Element;
    Item: import("styled-components").StyledComponent<"div", any, {
        active?: boolean | undefined;
    }, never>;
};
export default Sidebar;

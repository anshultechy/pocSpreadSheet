import { Type } from "./type";
/**
 * The row type.
 */
export declare enum DataSourceRowType {
    /**
     * Normal row
     */
    Normal = 0,
    /**
     * Section header
     */
    SectionHeader = 1,
    /**
     * Section footer
     */
    SectionFooter = 2,
    /**
     * A shited row
     */
    ShiftedRow = 3,
    /**
     * Custom
     */
    Custom = 4
}
/**
 * @hidden
 */
export declare let DataSourceRowType_$type: Type;

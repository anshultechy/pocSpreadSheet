import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Enumerates options that specify the initial display of the Filter Dialog.
 */
export declare enum SpreadsheetFilterDialogOption {
    /**
     * Filter in values which are equal to the comparison value.
     */
    Equals = 0,
    /**
     * Filter in values which are not equal to the comparison value.
     */
    NotEqual = 1,
    /**
     * Filter in values which are greater than the comparison value.
     */
    GreaterThan = 2,
    /**
     * Filter in values which are greater than or equal to the comparison value.
     */
    GreaterThanOrEqual = 3,
    /**
     * Filter in values which are less than the comparison value.
     */
    LessThan = 4,
    /**
     * Filter in values which are less than or equal to the comparison value.
     */
    LessThanOrEqual = 5,
    /**
     * Filter in string values which begin with the comparison value.
     */
    BeginsWith = 6,
    /**
     * Filter in string values which do not begin with the comparison value.
     */
    DoesNotBeginWith = 7,
    /**
     * Filter in string values which ends with the comparison value.
     */
    EndsWith = 8,
    /**
     * Filter in string values which do not end with the comparison value.
     */
    DoesNotEndWith = 9,
    /**
     * Filter in string values which contain the comparison value.
     */
    Contains = 10,
    /**
     * Filter in string values which do not contain the comparison value.
     */
    DoesNotContain = 11,
    /**
     * Filter in values which are between two comparison values.
     */
    Between = 12,
    /**
     * Show the dialog with the default options.
     */
    Custom = 13
}
/**
 * @hidden
 */
export declare let SpreadsheetFilterDialogOption_$type: Type;

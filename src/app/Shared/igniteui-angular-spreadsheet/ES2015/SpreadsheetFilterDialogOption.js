/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "../../igniteui-angular-core/ES2015/type";
/**
 * Enumerates options that specify the initial display of the Filter Dialog.
 */
export var SpreadsheetFilterDialogOption;
(function (SpreadsheetFilterDialogOption) {
    /**
     * Filter in values which are equal to the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["Equals"] = 0] = "Equals";
    /**
     * Filter in values which are not equal to the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["NotEqual"] = 1] = "NotEqual";
    /**
     * Filter in values which are greater than the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["GreaterThan"] = 2] = "GreaterThan";
    /**
     * Filter in values which are greater than or equal to the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["GreaterThanOrEqual"] = 3] = "GreaterThanOrEqual";
    /**
     * Filter in values which are less than the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["LessThan"] = 4] = "LessThan";
    /**
     * Filter in values which are less than or equal to the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["LessThanOrEqual"] = 5] = "LessThanOrEqual";
    /**
     * Filter in string values which begin with the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["BeginsWith"] = 6] = "BeginsWith";
    /**
     * Filter in string values which do not begin with the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["DoesNotBeginWith"] = 7] = "DoesNotBeginWith";
    /**
     * Filter in string values which ends with the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["EndsWith"] = 8] = "EndsWith";
    /**
     * Filter in string values which do not end with the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["DoesNotEndWith"] = 9] = "DoesNotEndWith";
    /**
     * Filter in string values which contain the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["Contains"] = 10] = "Contains";
    /**
     * Filter in string values which do not contain the comparison value.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["DoesNotContain"] = 11] = "DoesNotContain";
    /**
     * Filter in values which are between two comparison values.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["Between"] = 12] = "Between";
    /**
     * Show the dialog with the default options.
     */
    SpreadsheetFilterDialogOption[SpreadsheetFilterDialogOption["Custom"] = 13] = "Custom";
})(SpreadsheetFilterDialogOption || (SpreadsheetFilterDialogOption = {}));
/**
 * @hidden
 */
export let SpreadsheetFilterDialogOption_$type = markEnum('SpreadsheetFilterDialogOption', 'Equals,0|NotEqual,1|GreaterThan,2|GreaterThanOrEqual,3|LessThan,4|LessThanOrEqual,5|BeginsWith,6|DoesNotBeginWith,7|EndsWith,8|DoesNotEndWith,9|Contains,10|DoesNotContain,11|Between,12|Custom,13');
//# sourceMappingURL=SpreadsheetFilterDialogOption.js.map
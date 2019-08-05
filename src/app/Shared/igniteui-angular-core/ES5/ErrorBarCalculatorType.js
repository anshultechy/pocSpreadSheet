/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available types of error bar calculators.
 */
export var ErrorBarCalculatorType;
(function (ErrorBarCalculatorType) {
    /**
     * A calculator type that provides a fixed value.
     */
    ErrorBarCalculatorType[ErrorBarCalculatorType["Fixed"] = 0] = "Fixed";
    /**
     * A calculator type that provides a fixed percentage of each input value
     */
    ErrorBarCalculatorType[ErrorBarCalculatorType["Percentage"] = 1] = "Percentage";
    /**
     * A calculator type that provides the input values directly.
     */
    ErrorBarCalculatorType[ErrorBarCalculatorType["Data"] = 2] = "Data";
    /**
     * A calculator type that provides the standard deviation of the input values.
     */
    ErrorBarCalculatorType[ErrorBarCalculatorType["StandardDeviation"] = 3] = "StandardDeviation";
    /**
     * A calculator type that provides the standard error of the input values.
     */
    ErrorBarCalculatorType[ErrorBarCalculatorType["StandardError"] = 4] = "StandardError";
})(ErrorBarCalculatorType || (ErrorBarCalculatorType = {}));
/**
 * @hidden
 */
export var ErrorBarCalculatorType_$type = markEnum('ErrorBarCalculatorType', 'Fixed,0|Percentage,1|Data,2|StandardDeviation,3|StandardError,4');
//# sourceMappingURL=ErrorBarCalculatorType.js.map
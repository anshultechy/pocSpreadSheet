/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available types of trend lines supported by series.
 */
export var TrendLineType;
(function (TrendLineType) {
    /**
     * No trend line will be displayed.
     */
    TrendLineType[TrendLineType["None"] = 0] = "None";
    /**
     * Linear fit.
     */
    TrendLineType[TrendLineType["LinearFit"] = 1] = "LinearFit";
    /**
     * Quadratic polynomial fit.
     */
    TrendLineType[TrendLineType["QuadraticFit"] = 2] = "QuadraticFit";
    /**
     * Cubic polynomial fit.
     */
    TrendLineType[TrendLineType["CubicFit"] = 3] = "CubicFit";
    /**
     * Quartic polynomial fit.
     */
    TrendLineType[TrendLineType["QuarticFit"] = 4] = "QuarticFit";
    /**
     * Quintic polynomial fit.
     */
    TrendLineType[TrendLineType["QuinticFit"] = 5] = "QuinticFit";
    /**
     * Logarithmic fit.
     */
    TrendLineType[TrendLineType["LogarithmicFit"] = 6] = "LogarithmicFit";
    /**
     * Exponential fit.
     */
    TrendLineType[TrendLineType["ExponentialFit"] = 7] = "ExponentialFit";
    /**
     * Powerlaw fit.
     */
    TrendLineType[TrendLineType["PowerLawFit"] = 8] = "PowerLawFit";
    /**
     * Simple moving average.
     */
    TrendLineType[TrendLineType["SimpleAverage"] = 9] = "SimpleAverage";
    /**
     * Exponential moving average.
     */
    TrendLineType[TrendLineType["ExponentialAverage"] = 10] = "ExponentialAverage";
    /**
     * Modified moving average.
     */
    TrendLineType[TrendLineType["ModifiedAverage"] = 11] = "ModifiedAverage";
    /**
     * Cumulative moving average.
     */
    TrendLineType[TrendLineType["CumulativeAverage"] = 12] = "CumulativeAverage";
    /**
     * Weighted moving average.
     */
    TrendLineType[TrendLineType["WeightedAverage"] = 13] = "WeightedAverage";
})(TrendLineType || (TrendLineType = {}));
/**
 * @hidden
 */
export let TrendLineType_$type = markEnum('TrendLineType', 'None,0|LinearFit,1|QuadraticFit,2|CubicFit,3|QuarticFit,4|QuinticFit,5|LogarithmicFit,6|ExponentialFit,7|PowerLawFit,8|SimpleAverage,9|ExponentialAverage,10|ModifiedAverage,11|CumulativeAverage,12|WeightedAverage,13');
//# sourceMappingURL=TrendLineType.js.map
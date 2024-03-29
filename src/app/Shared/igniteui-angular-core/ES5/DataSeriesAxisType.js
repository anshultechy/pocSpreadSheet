/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Indicates which axis type is suggested in a data series.
 */
export var DataSeriesAxisType;
(function (DataSeriesAxisType) {
    /**
     * Used when a category axis type is suggested.
     */
    DataSeriesAxisType[DataSeriesAxisType["Category"] = 0] = "Category";
    /**
     * Used when a linear axis type is suggested.
     */
    DataSeriesAxisType[DataSeriesAxisType["Linear"] = 1] = "Linear";
    /**
     * Used when a logarithmic axis type is suggested.
     */
    DataSeriesAxisType[DataSeriesAxisType["Logarithmic"] = 2] = "Logarithmic";
    /**
     * Used when a continuous date time axis type is suggested.
     */
    DataSeriesAxisType[DataSeriesAxisType["ContinuousDateTime"] = 3] = "ContinuousDateTime";
    /**
     * Used when a discrete date time axis type is suggested.
     */
    DataSeriesAxisType[DataSeriesAxisType["DiscreteDateTime"] = 4] = "DiscreteDateTime";
})(DataSeriesAxisType || (DataSeriesAxisType = {}));
/**
 * @hidden
 */
export var DataSeriesAxisType_$type = markEnum('DataSeriesAxisType', 'Category,0|Linear,1|Logarithmic,2|ContinuousDateTime,3|DiscreteDateTime,4');
//# sourceMappingURL=DataSeriesAxisType.js.map
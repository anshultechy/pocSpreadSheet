/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Identifies various intents for the sub properties of the data being bound to a data series.
 */
export var DataSeriesIntent;
(function (DataSeriesIntent) {
    /**
     * Identifies the primary values to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["PrimarySeriesValue"] = 0] = "PrimarySeriesValue";
    /**
     * Identifies the x axis values to use for a scatter series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesX"] = 1] = "SeriesX";
    /**
     * Identifies the y axis values to use for a scatter series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesY"] = 2] = "SeriesY";
    /**
     * Identifies the fill scale values to use for a bubble series or scatter area series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesFill"] = 3] = "SeriesFill";
    /**
     * Identifies the legend label values to use for a bubble series in item-wize legends.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesLabel"] = 4] = "SeriesLabel";
    /**
     * Identifies the radius values to use for a bubble, polar, or radial series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesRadius"] = 5] = "SeriesRadius";
    /**
     * Identifies the angle values to use for a polar or radial series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesAngle"] = 6] = "SeriesAngle";
    /**
     * Identifies the shape values to use for a scatter polyline or polygon series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesShape"] = 7] = "SeriesShape";
    /**
     * Identifies the item-wize values to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesValue"] = 8] = "SeriesValue";
    /**
     * Identifies a grouping identifier to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesGroup"] = 9] = "SeriesGroup";
    /**
     * Identifies a title to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["SeriesTitle"] = 10] = "SeriesTitle";
    /**
     * Identifies an open value to use for a financial series.
     */
    DataSeriesIntent[DataSeriesIntent["OpenSeriesValue"] = 11] = "OpenSeriesValue";
    /**
     * Identifies a high value to use for a financial series or range series.
     */
    DataSeriesIntent[DataSeriesIntent["HighSeriesValue"] = 12] = "HighSeriesValue";
    /**
     * Identifies a low value to use for a financial series or range series.
     */
    DataSeriesIntent[DataSeriesIntent["LowSeriesValue"] = 13] = "LowSeriesValue";
    /**
     * Identifies a close value to use for a financial series or range series.
     */
    DataSeriesIntent[DataSeriesIntent["CloseSeriesValue"] = 14] = "CloseSeriesValue";
    /**
     * Identifies a volume value to use for a financial series or range series.
     */
    DataSeriesIntent[DataSeriesIntent["VolumeSeriesValue"] = 15] = "VolumeSeriesValue";
    /**
     * Identifies an axis label value to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["AxisLabelValue"] = 16] = "AxisLabelValue";
    /**
     * Identifies an axis date value to use for a series.
     */
    DataSeriesIntent[DataSeriesIntent["AxisDateValue"] = 17] = "AxisDateValue";
    /**
     * Identifies that a value should be ignored when considering values for a series.
     */
    DataSeriesIntent[DataSeriesIntent["DontPlot"] = 18] = "DontPlot";
    /**
     * Identifies a sales units value to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesUnit"] = 19] = "SalesUnit";
    /**
     * Identifies a sales fixed cost to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesFixedCost"] = 20] = "SalesFixedCost";
    /**
     * Identifies a sales variable cost to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesVariableCost"] = 21] = "SalesVariableCost";
    /**
     * Identifies a sales total cost to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesTotalCost"] = 22] = "SalesTotalCost";
    /**
     * Identifies a sales revenue to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesRevenue"] = 23] = "SalesRevenue";
    /**
     * Identifies a sales marginal profit to use for a break-even series
     */
    DataSeriesIntent[DataSeriesIntent["SalesMarginalProfit"] = 24] = "SalesMarginalProfit";
    /**
     * Identifes a value that has been used to generate other data to bind against.
     */
    DataSeriesIntent[DataSeriesIntent["GenerationInput"] = 25] = "GenerationInput";
})(DataSeriesIntent || (DataSeriesIntent = {}));
/**
 * @hidden
 */
export var DataSeriesIntent_$type = markEnum('DataSeriesIntent', 'PrimarySeriesValue,0|SeriesX,1|SeriesY,2|SeriesFill,3|SeriesLabel,4|SeriesRadius,5|SeriesAngle,6|SeriesShape,7|SeriesValue,8|SeriesGroup,9|SeriesTitle,10|OpenSeriesValue,11|HighSeriesValue,12|LowSeriesValue,13|CloseSeriesValue,14|VolumeSeriesValue,15|AxisLabelValue,16|AxisDateValue,17|DontPlot,18|SalesUnit,19|SalesFixedCost,20|SalesVariableCost,21|SalesTotalCost,22|SalesRevenue,23|SalesMarginalProfit,24|GenerationInput,25');
//# sourceMappingURL=DataSeriesIntent.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Identifies which type of series is suggested for a data series.
 */
export var DataSeriesType;
(function (DataSeriesType) {
    /**
     * Used when a line series is suggested.
     */
    DataSeriesType[DataSeriesType["Line"] = 0] = "Line";
    /**
     * Used when a column series is suggested.
     */
    DataSeriesType[DataSeriesType["Column"] = 1] = "Column";
    /**
     * Used when an area series is suggested.
     */
    DataSeriesType[DataSeriesType["Area"] = 2] = "Area";
    /**
     * Used when a bar series is suggested.
     */
    DataSeriesType[DataSeriesType["Bar"] = 3] = "Bar";
    /**
     * Used when a step line series is suggested.
     */
    DataSeriesType[DataSeriesType["StepLine"] = 4] = "StepLine";
    /**
     * Used when a step area series is suggested.
     */
    DataSeriesType[DataSeriesType["StepArea"] = 5] = "StepArea";
    /**
     * Used when a spline series is suggested.
     */
    DataSeriesType[DataSeriesType["Spline"] = 6] = "Spline";
    /**
     * Used when a spline area series is suggested.
     */
    DataSeriesType[DataSeriesType["SplineArea"] = 7] = "SplineArea";
    /**
     * Used when a waterfall series is suggested.
     */
    DataSeriesType[DataSeriesType["Waterfall"] = 8] = "Waterfall";
    /**
     * Used when a stacked series is suggested.
     */
    DataSeriesType[DataSeriesType["Stacked"] = 9] = "Stacked";
    /**
     * Used when a point series is suggested.
     */
    DataSeriesType[DataSeriesType["Point"] = 10] = "Point";
    /**
     * Used when a scatter point series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterPoint"] = 11] = "ScatterPoint";
    /**
     * Used when a scatter line series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterLine"] = 12] = "ScatterLine";
    /**
     * Used when a scatter spline series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterSpline"] = 13] = "ScatterSpline";
    /**
     * Used when a scatter area series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterArea"] = 14] = "ScatterArea";
    /**
     * Used when a scatter contour series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterContour"] = 15] = "ScatterContour";
    /**
     * Used when a high density scatter series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterHighDensity"] = 16] = "ScatterHighDensity";
    /**
     * Used when a bubble series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterBubble"] = 17] = "ScatterBubble";
    /**
     * Used when a polygon series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterPolygon"] = 18] = "ScatterPolygon";
    /**
     * Used when a polyline series is suggested.
     */
    DataSeriesType[DataSeriesType["ScatterPolyline"] = 19] = "ScatterPolyline";
    /**
     * Used when a financial price series is suggested.
     */
    DataSeriesType[DataSeriesType["FinancialPrice"] = 20] = "FinancialPrice";
    /**
     * Used when an financial indicator series is suggested.
     */
    DataSeriesType[DataSeriesType["FinancialIndicator"] = 21] = "FinancialIndicator";
    /**
     * Used when a financial overlay series is suggested.
     */
    DataSeriesType[DataSeriesType["FinancialOverlay"] = 22] = "FinancialOverlay";
    /**
     * Used when a value overlay is suggested.
     */
    DataSeriesType[DataSeriesType["ValueOverlay"] = 23] = "ValueOverlay";
    /**
     * Specifies unknown series type
     */
    DataSeriesType[DataSeriesType["Unknown"] = 24] = "Unknown";
    /**
     * Used when an item tooltip layer is suggested.
     */
    DataSeriesType[DataSeriesType["ItemToolTipLayer"] = 25] = "ItemToolTipLayer";
    /**
     * Used when a category tooltip layer is suggested.
     */
    DataSeriesType[DataSeriesType["CategoryToolTipLayer"] = 26] = "CategoryToolTipLayer";
    /**
     * Used when a crosshair layer is suggested.
     */
    DataSeriesType[DataSeriesType["CrosshairLayer"] = 27] = "CrosshairLayer";
    /**
     * Used when a callout layer is suggested.
     */
    DataSeriesType[DataSeriesType["CalloutLayer"] = 28] = "CalloutLayer";
    /**
     * Used when a final value layer is suggested.
     */
    DataSeriesType[DataSeriesType["FinalValueLayer"] = 29] = "FinalValueLayer";
    /**
     * Used when a category highlight layer is suggested.
     */
    DataSeriesType[DataSeriesType["CategoryHighlightLayer"] = 30] = "CategoryHighlightLayer";
    /**
     * Used when a category item highlight layer is suggested.
     */
    DataSeriesType[DataSeriesType["CategoryItemHighlightLayer"] = 31] = "CategoryItemHighlightLayer";
})(DataSeriesType || (DataSeriesType = {}));
/**
 * @hidden
 */
export let DataSeriesType_$type = markEnum('DataSeriesType', 'Line,0|Column,1|Area,2|Bar,3|StepLine,4|StepArea,5|Spline,6|SplineArea,7|Waterfall,8|Stacked,9|Point,10|ScatterPoint,11|ScatterLine,12|ScatterSpline,13|ScatterArea,14|ScatterContour,15|ScatterHighDensity,16|ScatterBubble,17|ScatterPolygon,18|ScatterPolyline,19|FinancialPrice,20|FinancialIndicator,21|FinancialOverlay,22|ValueOverlay,23|Unknown,24|ItemToolTipLayer,25|CategoryToolTipLayer,26|CrosshairLayer,27|CalloutLayer,28|FinalValueLayer,29|CategoryHighlightLayer,30|CategoryItemHighlightLayer,31');
//# sourceMappingURL=DataSeriesType.js.map
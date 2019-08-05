import { Type } from "./type";
/**
 * Identifies which type of series is suggested for a data series.
 */
export declare enum DataSeriesType {
    /**
     * Used when a line series is suggested.
     */
    Line = 0,
    /**
     * Used when a column series is suggested.
     */
    Column = 1,
    /**
     * Used when an area series is suggested.
     */
    Area = 2,
    /**
     * Used when a bar series is suggested.
     */
    Bar = 3,
    /**
     * Used when a step line series is suggested.
     */
    StepLine = 4,
    /**
     * Used when a step area series is suggested.
     */
    StepArea = 5,
    /**
     * Used when a spline series is suggested.
     */
    Spline = 6,
    /**
     * Used when a spline area series is suggested.
     */
    SplineArea = 7,
    /**
     * Used when a waterfall series is suggested.
     */
    Waterfall = 8,
    /**
     * Used when a stacked series is suggested.
     */
    Stacked = 9,
    /**
     * Used when a point series is suggested.
     */
    Point = 10,
    /**
     * Used when a scatter point series is suggested.
     */
    ScatterPoint = 11,
    /**
     * Used when a scatter line series is suggested.
     */
    ScatterLine = 12,
    /**
     * Used when a scatter spline series is suggested.
     */
    ScatterSpline = 13,
    /**
     * Used when a scatter area series is suggested.
     */
    ScatterArea = 14,
    /**
     * Used when a scatter contour series is suggested.
     */
    ScatterContour = 15,
    /**
     * Used when a high density scatter series is suggested.
     */
    ScatterHighDensity = 16,
    /**
     * Used when a bubble series is suggested.
     */
    ScatterBubble = 17,
    /**
     * Used when a polygon series is suggested.
     */
    ScatterPolygon = 18,
    /**
     * Used when a polyline series is suggested.
     */
    ScatterPolyline = 19,
    /**
     * Used when a financial price series is suggested.
     */
    FinancialPrice = 20,
    /**
     * Used when an financial indicator series is suggested.
     */
    FinancialIndicator = 21,
    /**
     * Used when a financial overlay series is suggested.
     */
    FinancialOverlay = 22,
    /**
     * Used when a value overlay is suggested.
     */
    ValueOverlay = 23,
    /**
     * Specifies unknown series type
     */
    Unknown = 24,
    /**
     * Used when an item tooltip layer is suggested.
     */
    ItemToolTipLayer = 25,
    /**
     * Used when a category tooltip layer is suggested.
     */
    CategoryToolTipLayer = 26,
    /**
     * Used when a crosshair layer is suggested.
     */
    CrosshairLayer = 27,
    /**
     * Used when a callout layer is suggested.
     */
    CalloutLayer = 28,
    /**
     * Used when a final value layer is suggested.
     */
    FinalValueLayer = 29,
    /**
     * Used when a category highlight layer is suggested.
     */
    CategoryHighlightLayer = 30,
    /**
     * Used when a category item highlight layer is suggested.
     */
    CategoryItemHighlightLayer = 31
}
/**
 * @hidden
 */
export declare let DataSeriesType_$type: Type;
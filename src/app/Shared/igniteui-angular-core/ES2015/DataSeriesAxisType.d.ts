import { Type } from "./type";
/**
 * Indicates which axis type is suggested in a data series.
 */
export declare enum DataSeriesAxisType {
    /**
     * Used when a category axis type is suggested.
     */
    Category = 0,
    /**
     * Used when a linear axis type is suggested.
     */
    Linear = 1,
    /**
     * Used when a logarithmic axis type is suggested.
     */
    Logarithmic = 2,
    /**
     * Used when a continuous date time axis type is suggested.
     */
    ContinuousDateTime = 3,
    /**
     * Used when a discrete date time axis type is suggested.
     */
    DiscreteDateTime = 4
}
/**
 * @hidden
 */
export declare let DataSeriesAxisType_$type: Type;
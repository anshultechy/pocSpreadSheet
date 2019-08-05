import { Type } from "./type";
/**
 * Identifies which type of marker is suggested for a data series.
 */
export declare enum DataSeriesMarker {
    /**
     * Used when Automatic marker shape is suggested.
     */
    Automatic = 0,
    /**
     * Used when no marker is suggested.
     */
    None = 1,
    /**
     * Used when Circle marker shape is suggested.
     */
    Circle = 2,
    /**
     * Used when Flat-top triangle marker shape is suggested.
     */
    Triangle = 3,
    /**
     * Used when Flat-base triangle marker shape is suggested.
     */
    Pyramid = 4,
    /**
     * Used when Square marker shape is suggested.
     */
    Square = 5,
    /**
     * Used when Diamond marker shape is suggested.
     */
    Diamond = 6,
    /**
     * Used when Pentagon marker shape is suggested.
     */
    Pentagon = 7,
    /**
     * Used when Hexagon marker shape is suggested.
     */
    Hexagon = 8,
    /**
     * Used when Four-pointed star marker shape is suggested.
     */
    Tetragram = 9,
    /**
     * Used when Five-pointed star marker shape is suggested.
     */
    Pentagram = 10,
    /**
     * Used when Six-pointed star marker shape is suggested.
     */
    Hexagram = 11,
    /**
     * Used when a hidden marker is suggested.
     */
    Hidden = 12
}
/**
 * @hidden
 */
export declare let DataSeriesMarker_$type: Type;

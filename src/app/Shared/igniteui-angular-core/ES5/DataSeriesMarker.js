/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Identifies which type of marker is suggested for a data series.
 */
export var DataSeriesMarker;
(function (DataSeriesMarker) {
    /**
     * Used when Automatic marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Automatic"] = 0] = "Automatic";
    /**
     * Used when no marker is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["None"] = 1] = "None";
    /**
     * Used when Circle marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Circle"] = 2] = "Circle";
    /**
     * Used when Flat-top triangle marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Triangle"] = 3] = "Triangle";
    /**
     * Used when Flat-base triangle marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Pyramid"] = 4] = "Pyramid";
    /**
     * Used when Square marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Square"] = 5] = "Square";
    /**
     * Used when Diamond marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Diamond"] = 6] = "Diamond";
    /**
     * Used when Pentagon marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Pentagon"] = 7] = "Pentagon";
    /**
     * Used when Hexagon marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Hexagon"] = 8] = "Hexagon";
    /**
     * Used when Four-pointed star marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Tetragram"] = 9] = "Tetragram";
    /**
     * Used when Five-pointed star marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Pentagram"] = 10] = "Pentagram";
    /**
     * Used when Six-pointed star marker shape is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Hexagram"] = 11] = "Hexagram";
    /**
     * Used when a hidden marker is suggested.
     */
    DataSeriesMarker[DataSeriesMarker["Hidden"] = 12] = "Hidden";
})(DataSeriesMarker || (DataSeriesMarker = {}));
/**
 * @hidden
 */
export var DataSeriesMarker_$type = markEnum('DataSeriesMarker', 'Automatic,0|None,1|Circle,2|Triangle,3|Pyramid,4|Square,5|Diamond,6|Pentagon,7|Hexagon,8|Tetragram,9|Pentagram,10|Hexagram,11|Hidden,12');
//# sourceMappingURL=DataSeriesMarker.js.map
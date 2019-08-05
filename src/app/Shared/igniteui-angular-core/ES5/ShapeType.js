/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Describes available types of item represented by the current row of a shapefile.
 */
export var ShapeType;
(function (ShapeType) {
    /**
     * A placeholder value which cannot occur when reading a shapefile.
     */
    ShapeType[ShapeType["None"] = 0] = "None";
    /**
     * Specifies a point shape.
     */
    ShapeType[ShapeType["Point"] = 1] = "Point";
    /**
     * Specifies a polyline shape.
     */
    ShapeType[ShapeType["PolyLine"] = 3] = "PolyLine";
    /**
     * Specifies a polygon shape.
     */
    ShapeType[ShapeType["Polygon"] = 5] = "Polygon";
    /**
     * Specifies a polypoint shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolyPoint"] = 8] = "PolyPoint";
    /**
     * Specifies a polypoint shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PointZ"] = 11] = "PointZ";
    /**
     * Specifies a polylinez shape
     */
    ShapeType[ShapeType["PolyLineZ"] = 13] = "PolyLineZ";
    /**
     * Specifies a polygonz shape
     */
    ShapeType[ShapeType["PolygonZ"] = 15] = "PolygonZ";
    /**
     * Specifies a polypointz shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolyPointZ"] = 18] = "PolyPointZ";
    /**
     * Specifies a pointm shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PointM"] = 21] = "PointM";
    /**
     * Specifies a polylinem shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolyLineM"] = 23] = "PolyLineM";
    /**
     * Specifies a polygonm shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolygonM"] = 25] = "PolygonM";
    /**
     * Specifies a polypointm shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolyPointM"] = 28] = "PolyPointM";
    /**
     * Specifies a polypatchm shape (not supported; cannot occur when reading a shapefile)
     */
    ShapeType[ShapeType["PolyPatch"] = 31] = "PolyPatch";
})(ShapeType || (ShapeType = {}));
/**
 * @hidden
 */
export var ShapeType_$type = markEnum('ShapeType', 'None,0|Point,1|PolyLine,3|Polygon,5|PolyPoint,8|PointZ,11|PolyLineZ,13|PolygonZ,15|PolyPointZ,18|PointM,21|PolyLineM,23|PolygonM,25|PolyPointM,28|PolyPatch,31');
//# sourceMappingURL=ShapeType.js.map
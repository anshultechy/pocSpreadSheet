/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
export var PathSegmentType;
(function (PathSegmentType) {
    PathSegmentType[PathSegmentType["Line"] = 0] = "Line";
    PathSegmentType[PathSegmentType["Bezier"] = 1] = "Bezier";
    PathSegmentType[PathSegmentType["PolyBezier"] = 2] = "PolyBezier";
    PathSegmentType[PathSegmentType["PolyLine"] = 3] = "PolyLine";
    PathSegmentType[PathSegmentType["Arc"] = 4] = "Arc";
})(PathSegmentType || (PathSegmentType = {}));
/**
 * @hidden
 */
export var PathSegmentType_$type = markEnum('PathSegmentType', 'Line,0|Bezier,1|PolyBezier,2|PolyLine,3|Arc,4');
//# sourceMappingURL=PathSegmentType.js.map
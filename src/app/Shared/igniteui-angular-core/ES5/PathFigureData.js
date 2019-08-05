/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { PointData } from "./PointData";
import { List$1 } from "./List$1";
import { SegmentData } from "./SegmentData";
import { LineSegmentData } from "./LineSegmentData";
import { PolylineSegmentData } from "./PolylineSegmentData";
import { ArcSegmentData } from "./ArcSegmentData";
import { PolyBezierSegmentData } from "./PolyBezierSegmentData";
import { BezierSegmentData } from "./BezierSegmentData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var PathFigureData = /** @class */ (function (_super) {
    tslib_1.__extends(PathFigureData, _super);
    function PathFigureData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._startPoint = null;
        _this._segments = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.segments = new List$1(SegmentData.$, 0);
                    _this.startPoint = new PointData(NaN, NaN);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.segments = new List$1(SegmentData.$, 0);
                    _this.startPoint = PointData.b(c._startPoint);
                    for (var d = 0; d < c._segments.count; d++) {
                        var e = c._segments._inner[d];
                        var f = null;
                        switch (e.a) {
                            case 0:
                                f = new LineSegmentData(1, e);
                                break;
                            case 3:
                                f = new PolylineSegmentData(1, e);
                                break;
                            case 4:
                                f = new ArcSegmentData(1, e);
                                break;
                            case 2:
                                f = new PolyBezierSegmentData(1, e);
                                break;
                            case 1:
                                f = new BezierSegmentData(1, e);
                                break;
                        }
                        _this.segments.add(f);
                    }
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(PathFigureData.prototype, "startPoint", {
        get: function () {
            return this._startPoint;
        },
        set: function (a) {
            this._startPoint = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathFigureData.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        set: function (a) {
            this._segments = a;
        },
        enumerable: true,
        configurable: true
    });
    PathFigureData.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.u("{");
        if (this.startPoint != null) {
            a.u("startPoint: { x: " + this.startPoint.x + ", y: " + this.startPoint.y + "}, ");
        }
        a.u("segments: [");
        for (var b = 0; b < this.segments.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this.segments._inner[b].serialize());
        }
        a.u("]");
        a.u("}");
        return a.toString();
    };
    PathFigureData.prototype.d = function (a) {
        if (this.startPoint != null) {
            this.startPoint = new PointData((this.startPoint.x - a.left) / a.width, (this.startPoint.y - a.top) / a.height);
        }
        for (var b = 0; b < this.segments.count; b++) {
            this.segments._inner[b].scaleByViewport(a);
        }
    };
    PathFigureData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        if (!b.ignoreFigureStartPoint) {
            c.add(new PointData(this.startPoint.x, this.startPoint.y));
        }
        for (var d = 0; d < this.segments.count; d++) {
            this.segments._inner[d].getPointsOverride(c, b);
        }
    };
    PathFigureData.$t = markType(PathFigureData, 'PathFigureData', Base.$, [IVisualData_$type]);
    return PathFigureData;
}(Base));
export { PathFigureData };
//# sourceMappingURL=PathFigureData.js.map
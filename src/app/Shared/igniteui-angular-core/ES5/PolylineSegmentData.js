/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SegmentData } from "./SegmentData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { markType } from "./type";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var PolylineSegmentData = /** @class */ (function (_super) {
    tslib_1.__extends(PolylineSegmentData, _super);
    function PolylineSegmentData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._points = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.points = new List$1(PointData.$, 0);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.points = new List$1(PointData.$, 0);
                    for (var d = 0; d < c._points.count; d++) {
                        _this.points.add(PointData.b(c._points._inner[d]));
                    }
                }
                break;
        }
        return _this;
    }
    PolylineSegmentData.prototype.get_type = function () {
        return "Polyline";
    };
    Object.defineProperty(PolylineSegmentData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolylineSegmentData.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (a) {
            this._points = a;
        },
        enumerable: true,
        configurable: true
    });
    PolylineSegmentData.prototype.a = function () {
        var a = new StringBuilder(0);
        a.u("points: [");
        for (var b = 0; b < this.points.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l("{ x: " + this.points._inner[b].x + ", y: " + this.points._inner[b].y + "}");
        }
        a.u("]");
        return a.toString();
    };
    PolylineSegmentData.prototype.scaleByViewport = function (a) {
        for (var b = 0; b < this.points.count; b++) {
            this.points._inner[b] = new PointData((this.points._inner[b].x - a.left) / a.width, (this.points._inner[b].y - a.top) / a.height);
        }
    };
    PolylineSegmentData.prototype.getPointsOverride = function (a, b) {
        for (var c = 0; c < this.points.count; c++) {
            a.add(new PointData(this.points._inner[c].x, this.points._inner[c].y));
        }
    };
    PolylineSegmentData.$t = markType(PolylineSegmentData, 'PolylineSegmentData', SegmentData.$);
    return PolylineSegmentData;
}(SegmentData));
export { PolylineSegmentData };
//# sourceMappingURL=PolylineSegmentData.js.map
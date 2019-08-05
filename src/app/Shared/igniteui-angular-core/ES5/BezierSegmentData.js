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
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
var BezierSegmentData = /** @class */ (function (_super) {
    tslib_1.__extends(BezierSegmentData, _super);
    function BezierSegmentData(a) {
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
                    _this.points.add(PointData.b(c.e));
                    _this.points.add(PointData.b(c.f));
                    _this.points.add(PointData.b(c.g));
                }
                break;
        }
        return _this;
    }
    BezierSegmentData.prototype.get_type = function () {
        return "Bezier";
    };
    Object.defineProperty(BezierSegmentData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierSegmentData.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (a) {
            this._points = a;
        },
        enumerable: true,
        configurable: true
    });
    BezierSegmentData.prototype.a = function () {
        var a = new StringBuilder(0);
        a.u("points: [");
        for (var b = 0; b < this.points.count; b++) {
            if (this.points._inner[b] == null) {
                break;
            }
            if (b != 0) {
                a.l(", ");
            }
            a.l("{ x: " + this.points._inner[b].x + ", y: " + this.points._inner[b].y + "}");
        }
        a.u("]");
        return a.toString();
    };
    BezierSegmentData.prototype.scaleByViewport = function (a) {
        for (var b = 0; b < this.points.count; b++) {
            if (this.points._inner[b] == null) {
                break;
            }
            this.points._inner[b] = new PointData((this.points._inner[b].x - a.left) / a.width, (this.points._inner[b].y - a.top) / a.height);
        }
    };
    BezierSegmentData.prototype.getPointsOverride = function (a, b) {
        for (var c = 0; c < this.points.count; c++) {
            a.add(new PointData(this.points._inner[c].x, this.points._inner[c].y));
        }
    };
    BezierSegmentData.$t = markType(BezierSegmentData, 'BezierSegmentData', SegmentData.$);
    return BezierSegmentData;
}(SegmentData));
export { BezierSegmentData };
//# sourceMappingURL=BezierSegmentData.js.map
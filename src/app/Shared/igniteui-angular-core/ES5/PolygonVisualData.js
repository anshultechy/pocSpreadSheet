/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { markType } from "./type";
import { AppearanceHelper } from "./AppearanceHelper";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var PolygonVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(PolygonVisualData, _super);
    function PolygonVisualData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 1, "polygon1") || this;
                    _this._points = null;
                    _this.points = new List$1(PointData.$, 0);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                    _this._points = null;
                    _this.points = new List$1(PointData.$, 0);
                    for (var e = 0; e < d.aj.count; e++) {
                        _this.points.add(PointData.b(d.aj._inner[e]));
                    }
                    AppearanceHelper.p(_this.appearance, d);
                }
                break;
        }
        return _this;
    }
    PolygonVisualData.prototype.get_type = function () {
        return "Polygon";
    };
    Object.defineProperty(PolygonVisualData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonVisualData.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (a) {
            this._points = a;
        },
        enumerable: true,
        configurable: true
    });
    PolygonVisualData.prototype.e = function () {
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
    PolygonVisualData.prototype.scaleByViewport = function (a) {
        _super.prototype.scaleByViewport.call(this, a);
        for (var b = 0; b < this.points.count; b++) {
            this.points._inner[b] = new PointData((this.points._inner[b].x - a.left) / a.width, (this.points._inner[b].y - a.top) / a.height);
        }
    };
    PolygonVisualData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        for (var d = 0; d < this.points.count; d++) {
            c.add(this.points._inner[d]);
        }
    };
    PolygonVisualData.$t = markType(PolygonVisualData, 'PolygonVisualData', PrimitiveVisualData.$);
    return PolygonVisualData;
}(PrimitiveVisualData));
export { PolygonVisualData };
//# sourceMappingURL=PolygonVisualData.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SegmentData } from "./SegmentData";
import { PointData } from "./PointData";
import { markType } from "./type";
/**
 * @hidden
 */
var LineSegmentData = /** @class */ (function (_super) {
    tslib_1.__extends(LineSegmentData, _super);
    function LineSegmentData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._point = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.point = new PointData(NaN, NaN);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.point = PointData.b(c.c);
                }
                break;
        }
        return _this;
    }
    LineSegmentData.prototype.get_type = function () {
        return "Line";
    };
    Object.defineProperty(LineSegmentData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSegmentData.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (a) {
            this._point = a;
        },
        enumerable: true,
        configurable: true
    });
    LineSegmentData.prototype.a = function () {
        return "point: { x: " + this.point.x + ", y: " + this.point.y + "}";
    };
    LineSegmentData.prototype.scaleByViewport = function (a) {
        this.point = new PointData((this.point.x - a.left) / a.width, (this.point.y - a.top) / a.height);
    };
    LineSegmentData.prototype.getPointsOverride = function (a, b) {
        a.add(new PointData(this.point.x, this.point.y));
    };
    LineSegmentData.$t = markType(LineSegmentData, 'LineSegmentData', SegmentData.$);
    return LineSegmentData;
}(SegmentData));
export { LineSegmentData };
//# sourceMappingURL=LineSegmentData.js.map
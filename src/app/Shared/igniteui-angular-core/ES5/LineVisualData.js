/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { AppearanceHelper } from "./AppearanceHelper";
import { markType } from "./type";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
var LineVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(LineVisualData, _super);
    function LineVisualData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 1, "line1") || this;
                    _this._x1 = 0;
                    _this._y1 = 0;
                    _this._x2 = 0;
                    _this._y2 = 0;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                    _this._x1 = 0;
                    _this._y1 = 0;
                    _this._x2 = 0;
                    _this._y2 = 0;
                    _this.x1 = d.aj;
                    _this.y1 = d.al;
                    _this.x2 = d.ak;
                    _this.y2 = d.am;
                    AppearanceHelper.p(_this.appearance, d);
                }
                break;
        }
        return _this;
    }
    LineVisualData.prototype.get_type = function () {
        return "Line";
    };
    Object.defineProperty(LineVisualData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineVisualData.prototype, "x1", {
        get: function () {
            return this._x1;
        },
        set: function (a) {
            this._x1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineVisualData.prototype, "y1", {
        get: function () {
            return this._y1;
        },
        set: function (a) {
            this._y1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineVisualData.prototype, "x2", {
        get: function () {
            return this._x2;
        },
        set: function (a) {
            this._x2 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineVisualData.prototype, "y2", {
        get: function () {
            return this._y2;
        },
        set: function (a) {
            this._y2 = a;
        },
        enumerable: true,
        configurable: true
    });
    LineVisualData.prototype.e = function () {
        return "x1: " + this.x1 + ", y1: " + this.y1 + ", x2: " + this.x2 + ", y2: " + this.y2;
    };
    LineVisualData.prototype.scaleByViewport = function (a) {
        _super.prototype.scaleByViewport.call(this, a);
        this.x1 = (this.x1 - a.left) / a.width;
        this.y1 = (this.y1 - a.top) / a.height;
    };
    LineVisualData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.x1, this.y1));
        c.add(new PointData(this.x2, this.y2));
    };
    LineVisualData.$t = markType(LineVisualData, 'LineVisualData', PrimitiveVisualData.$);
    return LineVisualData;
}(PrimitiveVisualData));
export { LineVisualData };
//# sourceMappingURL=LineVisualData.js.map
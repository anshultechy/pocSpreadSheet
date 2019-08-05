/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, markType, PointUtil } from "./type";
import { IVisualData_$type } from "./IVisualData";
/**
 * @hidden
 */
var PointData = /** @class */ (function (_super) {
    tslib_1.__extends(PointData, _super);
    function PointData(a, b) {
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        _this.x = a;
        _this.y = b;
        return _this;
    }
    Object.defineProperty(PointData.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointData.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    PointData.prototype.serialize = function () {
        return "{ x: " + this.x + ", y: " + this.y + "}";
    };
    PointData.b = function (a) {
        var b = new PointData(a.x, a.y);
        return b;
    };
    PointData.prototype.g = function () {
        var a = PointUtil.create();
        a.x = this.x;
        a.y = this.y;
        return a;
    };
    PointData.prototype.equals = function (a) {
        var b = typeCast(PointData.$, a);
        if (b == null) {
            return false;
        }
        return b.x == this.x && b.y == this.y;
    };
    PointData.prototype.getHashCode = function () {
        return ((this.x) * 397) ^ (this.y);
    };
    Object.defineProperty(PointData, "empty", {
        get: function () {
            return new PointData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        },
        enumerable: true,
        configurable: true
    });
    PointData.$t = markType(PointData, 'PointData', Base.$, [IVisualData_$type]);
    return PointData;
}(Base));
export { PointData };
//# sourceMappingURL=PointData.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { Size } from "./Size";
/**
 * @hidden
 */
var SizeData = /** @class */ (function (_super) {
    tslib_1.__extends(SizeData, _super);
    function SizeData(a, b) {
        var _this = _super.call(this) || this;
        _this._width = 0;
        _this._height = 0;
        _this.width = a;
        _this.height = b;
        return _this;
    }
    Object.defineProperty(SizeData.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeData.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    SizeData.prototype.serialize = function () {
        return "{ width: " + this.width + ", height: " + this.height + "}";
    };
    SizeData.b = function (a) {
        var b = new SizeData(a.width, a.height);
        return b;
    };
    SizeData.prototype.e = function () {
        var a = new Size(1, this.width, this.height);
        return a;
    };
    Object.defineProperty(SizeData, "empty", {
        get: function () {
            return new SizeData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
        },
        enumerable: true,
        configurable: true
    });
    SizeData.$t = markType(SizeData, 'SizeData', Base.$, [IVisualData_$type]);
    return SizeData;
}(Base));
export { SizeData };
//# sourceMappingURL=SizeData.js.map
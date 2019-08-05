/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { markType } from "./type";
import { AppearanceHelper } from "./AppearanceHelper";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
var RectangleVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(RectangleVisualData, _super);
    function RectangleVisualData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 1, "rect1") || this;
                    _this._width = 0;
                    _this._height = 0;
                    _this._radiusX = 0;
                    _this._radiusY = 0;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                    _this._width = 0;
                    _this._height = 0;
                    _this._radiusX = 0;
                    _this._radiusY = 0;
                    _this.width = d.width;
                    _this.height = d.height;
                    _this.radiusX = d.al;
                    _this.radiusY = d.am;
                    AppearanceHelper.p(_this.appearance, d);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(RectangleVisualData.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleVisualData.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleVisualData.prototype, "radiusX", {
        get: function () {
            return this._radiusX;
        },
        set: function (a) {
            this._radiusX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleVisualData.prototype, "radiusY", {
        get: function () {
            return this._radiusY;
        },
        set: function (a) {
            this._radiusY = a;
        },
        enumerable: true,
        configurable: true
    });
    RectangleVisualData.prototype.e = function () {
        return "width: " + this.width + ", height: " + this.height + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
    };
    RectangleVisualData.prototype.get_type = function () {
        return "Rectangle";
    };
    Object.defineProperty(RectangleVisualData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    RectangleVisualData.prototype.scaleByViewport = function (a) {
        _super.prototype.scaleByViewport.call(this, a);
        this.width = this.width / a.width;
        this.height = this.height / a.height;
    };
    RectangleVisualData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop));
        c.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop));
        c.add(new PointData(this.appearance.canvasLeft + this.width, this.appearance.canvasTop + this.height));
        c.add(new PointData(this.appearance.canvasLeft, this.appearance.canvasTop + this.height));
    };
    RectangleVisualData.$t = markType(RectangleVisualData, 'RectangleVisualData', PrimitiveVisualData.$);
    return RectangleVisualData;
}(PrimitiveVisualData));
export { RectangleVisualData };
//# sourceMappingURL=RectangleVisualData.js.map
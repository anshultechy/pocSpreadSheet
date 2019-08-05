/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { GeometryData } from "./GeometryData";
import { markType } from "./type";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
/**
 * @hidden
 */
var RectangleGeometryData = /** @class */ (function (_super) {
    tslib_1.__extends(RectangleGeometryData, _super);
    function RectangleGeometryData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._x = 0;
        _this._y = 0;
        _this._width = 0;
        _this._height = 0;
        return _this;
    }
    RectangleGeometryData.prototype.get_type = function () {
        return "Rectangle";
    };
    Object.defineProperty(RectangleGeometryData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleGeometryData.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleGeometryData.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleGeometryData.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleGeometryData.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    RectangleGeometryData.prototype.a = function () {
        return "x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height;
    };
    RectangleGeometryData.prototype.scaleByViewport = function (a) {
        this.x = (this.x - a.left) / a.width;
        this.y = (this.y - a.top) / a.height;
        this.width = this.width / a.width;
        this.height = this.height / a.height;
    };
    RectangleGeometryData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.x, this.y));
        c.add(new PointData(this.x + this.width, this.y));
        c.add(new PointData(this.x + this.width, this.y + this.height));
        c.add(new PointData(this.x, this.y + this.height));
    };
    RectangleGeometryData.$t = markType(RectangleGeometryData, 'RectangleGeometryData', GeometryData.$);
    return RectangleGeometryData;
}(GeometryData));
export { RectangleGeometryData };
//# sourceMappingURL=RectangleGeometryData.js.map
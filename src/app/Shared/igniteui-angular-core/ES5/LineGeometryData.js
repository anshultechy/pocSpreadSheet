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
var LineGeometryData = /** @class */ (function (_super) {
    tslib_1.__extends(LineGeometryData, _super);
    function LineGeometryData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._x1 = 0;
        _this._y1 = 0;
        _this._x2 = 0;
        _this._y2 = 0;
        return _this;
    }
    LineGeometryData.prototype.get_type = function () {
        return "Line";
    };
    Object.defineProperty(LineGeometryData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineGeometryData.prototype, "x1", {
        get: function () {
            return this._x1;
        },
        set: function (a) {
            this._x1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineGeometryData.prototype, "y1", {
        get: function () {
            return this._y1;
        },
        set: function (a) {
            this._y1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineGeometryData.prototype, "x2", {
        get: function () {
            return this._x2;
        },
        set: function (a) {
            this._x2 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineGeometryData.prototype, "y2", {
        get: function () {
            return this._y2;
        },
        set: function (a) {
            this._y2 = a;
        },
        enumerable: true,
        configurable: true
    });
    LineGeometryData.prototype.a = function () {
        return "x1: " + this.x1 + ", y1: " + this.y1 + ", x2: " + this.x2 + ", y2:" + this.y2;
    };
    LineGeometryData.prototype.scaleByViewport = function (a) {
        this.x1 = (this.x1 - a.left) / a.width;
        this.y1 = (this.y1 - a.top) / a.height;
        this.x2 = (this.x2 - a.left) / a.width;
        this.y2 = (this.y2 - a.top) / a.height;
    };
    LineGeometryData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.x1, this.y1));
        c.add(new PointData(this.x2, this.y2));
    };
    LineGeometryData.$t = markType(LineGeometryData, 'LineGeometryData', GeometryData.$);
    return LineGeometryData;
}(GeometryData));
export { LineGeometryData };
//# sourceMappingURL=LineGeometryData.js.map
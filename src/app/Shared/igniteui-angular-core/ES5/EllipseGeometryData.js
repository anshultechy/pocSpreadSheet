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
var EllipseGeometryData = /** @class */ (function (_super) {
    tslib_1.__extends(EllipseGeometryData, _super);
    function EllipseGeometryData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._centerX = 0;
        _this._centerY = 0;
        _this._radiusX = 0;
        _this._radiusY = 0;
        return _this;
    }
    EllipseGeometryData.prototype.get_type = function () {
        return "Ellipse";
    };
    Object.defineProperty(EllipseGeometryData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipseGeometryData.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (a) {
            this._centerX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipseGeometryData.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (a) {
            this._centerY = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipseGeometryData.prototype, "radiusX", {
        get: function () {
            return this._radiusX;
        },
        set: function (a) {
            this._radiusX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipseGeometryData.prototype, "radiusY", {
        get: function () {
            return this._radiusY;
        },
        set: function (a) {
            this._radiusY = a;
        },
        enumerable: true,
        configurable: true
    });
    EllipseGeometryData.prototype.a = function () {
        return "centerX: " + this.centerX + ", centerY: " + this.centerY + ", radiusX: " + this.radiusX + ", radiusY: " + this.radiusY;
    };
    EllipseGeometryData.prototype.scaleByViewport = function (a) {
        this.centerX = (this.centerX - a.left) / a.width;
        this.centerY = (this.centerY - a.top) / a.height;
        this.radiusX = this.radiusX / a.width;
        this.radiusY = this.radiusY / a.height;
    };
    EllipseGeometryData.prototype.getPointsOverride = function (a, b) {
        var c = new List$1(PointData.$, 0);
        a.add(c);
        c.add(new PointData(this.centerX, this.centerY));
    };
    EllipseGeometryData.$t = markType(EllipseGeometryData, 'EllipseGeometryData', GeometryData.$);
    return EllipseGeometryData;
}(GeometryData));
export { EllipseGeometryData };
//# sourceMappingURL=EllipseGeometryData.js.map
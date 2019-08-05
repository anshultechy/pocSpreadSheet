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
var ArcSegmentData = /** @class */ (function (_super) {
    tslib_1.__extends(ArcSegmentData, _super);
    function ArcSegmentData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._point = null;
        _this._isLargeArc = false;
        _this._isCounterClockwise = false;
        _this._sizeX = 0;
        _this._sizeY = 0;
        _this._rotationAngle = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.point = new PointData(NaN, NaN);
                    _this.isLargeArc = false;
                    _this.isCounterClockwise = true;
                    _this.rotationAngle = 0;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.point = PointData.b(c.e);
                    _this.isLargeArc = c.b;
                    _this.isCounterClockwise = c.d == 0;
                    _this.sizeX = c.f.width;
                    _this.sizeY = c.f.height;
                    _this.rotationAngle = c.c;
                }
                break;
        }
        return _this;
    }
    ArcSegmentData.prototype.get_type = function () {
        return "Arc";
    };
    Object.defineProperty(ArcSegmentData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (a) {
            this._point = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "isLargeArc", {
        get: function () {
            return this._isLargeArc;
        },
        set: function (a) {
            this._isLargeArc = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "isCounterClockwise", {
        get: function () {
            return this._isCounterClockwise;
        },
        set: function (a) {
            this._isCounterClockwise = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "sizeX", {
        get: function () {
            return this._sizeX;
        },
        set: function (a) {
            this._sizeX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "sizeY", {
        get: function () {
            return this._sizeY;
        },
        set: function (a) {
            this._sizeY = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcSegmentData.prototype, "rotationAngle", {
        get: function () {
            return this._rotationAngle;
        },
        set: function (a) {
            this._rotationAngle = a;
        },
        enumerable: true,
        configurable: true
    });
    ArcSegmentData.prototype.a = function () {
        return "point: { x: " + this.point.x + ", y: " + this.point.y + " }, isLargeArc: " + (this.isLargeArc ? "true" : "false") + ", isCounterClockwise: " + (this.isCounterClockwise ? "true" : "false") + ", sizeX: " + this.sizeX + ", sizeY: " + this.sizeY + ", rotationAngle: " + this.rotationAngle;
    };
    ArcSegmentData.prototype.scaleByViewport = function (a) {
        this.point = new PointData((this.point.x - a.left) / a.width, (this.point.y - a.top) / a.height);
        this.sizeX = this.sizeX / a.width;
        this.sizeY = this.sizeY / a.height;
    };
    ArcSegmentData.prototype.getPointsOverride = function (a, b) {
        a.add(new PointData(this.point.x, this.point.y));
    };
    ArcSegmentData.$t = markType(ArcSegmentData, 'ArcSegmentData', SegmentData.$);
    return ArcSegmentData;
}(SegmentData));
export { ArcSegmentData };
//# sourceMappingURL=ArcSegmentData.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var PrimitiveAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(PrimitiveAppearanceData, _super);
    function PrimitiveAppearanceData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._stroke = null;
        _this._strokeExtended = null;
        _this._fill = null;
        _this._fillExtended = null;
        _this._strokeThickness = 0;
        _this._isVisible = false;
        _this._opacity = 0;
        _this._canvasLeft = 0;
        _this._canvasTop = 0;
        _this._canvaZIndex = 0;
        _this._dashArray = null;
        _this._dashCap = 0;
        return _this;
    }
    Object.defineProperty(PrimitiveAppearanceData.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (a) {
            this._stroke = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "strokeExtended", {
        get: function () {
            return this._strokeExtended;
        },
        set: function (a) {
            this._strokeExtended = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (a) {
            this._fill = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "fillExtended", {
        get: function () {
            return this._fillExtended;
        },
        set: function (a) {
            this._fillExtended = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "strokeThickness", {
        get: function () {
            return this._strokeThickness;
        },
        set: function (a) {
            this._strokeThickness = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (a) {
            this._isVisible = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (a) {
            this._opacity = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "canvasLeft", {
        get: function () {
            return this._canvasLeft;
        },
        set: function (a) {
            this._canvasLeft = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "canvasTop", {
        get: function () {
            return this._canvasTop;
        },
        set: function (a) {
            this._canvasTop = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "canvaZIndex", {
        get: function () {
            return this._canvaZIndex;
        },
        set: function (a) {
            this._canvaZIndex = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "dashArray", {
        get: function () {
            return this._dashArray;
        },
        set: function (a) {
            this._dashArray = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrimitiveAppearanceData.prototype, "dashCap", {
        get: function () {
            return this._dashCap;
        },
        set: function (a) {
            this._dashCap = a;
        },
        enumerable: true,
        configurable: true
    });
    PrimitiveAppearanceData.prototype.m = function (a) {
        this.canvasLeft = (this.canvasLeft - a.left) / a.width;
        this.canvasTop = (this.canvasTop - a.top) / a.height;
    };
    PrimitiveAppearanceData.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.u("{");
        a.u("stroke: " + (this.stroke != null ? this.stroke.serialize() : "null") + ", ");
        a.u("fill: " + (this.fill != null ? this.fill.serialize() : "null") + ", ");
        a.u("strokeExtended: " + (this.strokeExtended != null ? this.strokeExtended.serialize() : "null") + ", ");
        a.u("fillExtended: " + (this.fillExtended != null ? this.fillExtended.serialize() : "null") + ", ");
        a.u("strokeThickness: " + this.strokeThickness + ", ");
        a.u("isVisible: " + (this.isVisible ? "true" : "false") + ", ");
        a.u("opacity: " + this.opacity + ", ");
        a.u("canvasLeft: " + this.canvasLeft + ", ");
        a.u("canvasTop: " + this.canvasTop + ", ");
        a.u("canvasZIndex: " + this.canvaZIndex + ", ");
        a.u("dashArray: null, ");
        a.u("dashCap: " + this.dashCap);
        a.u("}");
        return a.toString();
    };
    PrimitiveAppearanceData.$t = markType(PrimitiveAppearanceData, 'PrimitiveAppearanceData', Base.$, [IVisualData_$type]);
    return PrimitiveAppearanceData;
}(Base));
export { PrimitiveAppearanceData };
//# sourceMappingURL=PrimitiveAppearanceData.js.map
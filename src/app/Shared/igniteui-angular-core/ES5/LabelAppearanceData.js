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
import { stringReplace } from "./string";
/**
 * @hidden
 */
var LabelAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(LabelAppearanceData, _super);
    function LabelAppearanceData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._text = null;
        _this._horizontalAlignment = null;
        _this._verticalAlignment = null;
        _this._textAlignment = null;
        _this._textWrapping = null;
        _this._textPosition = null;
        _this._labelBrush = null;
        _this._labelBrushExtended = null;
        _this._angle = 0;
        _this._opacity = 0;
        _this._visibility = false;
        _this._font = null;
        _this._fontFamily = null;
        _this._fontSize = 0;
        _this._fontWeight = null;
        _this._fontStyle = null;
        _this._fontStretch = null;
        _this._marginLeft = 0;
        _this._marginRight = 0;
        _this._marginTop = 0;
        _this._marginBottom = 0;
        return _this;
    }
    Object.defineProperty(LabelAppearanceData.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (a) {
            this._text = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "horizontalAlignment", {
        get: function () {
            return this._horizontalAlignment;
        },
        set: function (a) {
            this._horizontalAlignment = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "verticalAlignment", {
        get: function () {
            return this._verticalAlignment;
        },
        set: function (a) {
            this._verticalAlignment = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "textAlignment", {
        get: function () {
            return this._textAlignment;
        },
        set: function (a) {
            this._textAlignment = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "textWrapping", {
        get: function () {
            return this._textWrapping;
        },
        set: function (a) {
            this._textWrapping = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "textPosition", {
        get: function () {
            return this._textPosition;
        },
        set: function (a) {
            this._textPosition = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "labelBrush", {
        get: function () {
            return this._labelBrush;
        },
        set: function (a) {
            this._labelBrush = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "labelBrushExtended", {
        get: function () {
            return this._labelBrushExtended;
        },
        set: function (a) {
            this._labelBrushExtended = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (a) {
            this._angle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (a) {
            this._opacity = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "visibility", {
        get: function () {
            return this._visibility;
        },
        set: function (a) {
            this._visibility = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (a) {
            this._font = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (a) {
            this._fontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (a) {
            this._fontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (a) {
            this._fontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (a) {
            this._fontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "fontStretch", {
        get: function () {
            return this._fontStretch;
        },
        set: function (a) {
            this._fontStretch = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "marginLeft", {
        get: function () {
            return this._marginLeft;
        },
        set: function (a) {
            this._marginLeft = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "marginRight", {
        get: function () {
            return this._marginRight;
        },
        set: function (a) {
            this._marginRight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "marginTop", {
        get: function () {
            return this._marginTop;
        },
        set: function (a) {
            this._marginTop = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelAppearanceData.prototype, "marginBottom", {
        get: function () {
            return this._marginBottom;
        },
        set: function (a) {
            this._marginBottom = a;
        },
        enumerable: true,
        configurable: true
    });
    LabelAppearanceData.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.u("{");
        a.u("text: \"" + (this.text != null ? this.text : "") + "\", ");
        if (this.textAlignment != null) {
            a.u("textAlignment: \"" + this.textAlignment + "\", ");
        }
        if (this.textWrapping != null) {
            a.u("textWrapping: \"" + this.textWrapping + "\", ");
        }
        a.u("labelBrush: " + (this.labelBrush != null ? this.labelBrush.serialize() : "null") + ", ");
        a.u("labelBrushExtended: " + (this.labelBrushExtended != null ? this.labelBrushExtended.serialize() : "null") + ", ");
        a.u("angle: " + this.angle + ", ");
        a.u("marginLeft: " + this.marginLeft + ", ");
        a.u("marginRight: " + this.marginRight + ", ");
        a.u("marginTop: " + this.marginTop + ", ");
        a.u("marginBottom: " + this.marginBottom + ", ");
        a.u("opacity: " + this.opacity + ", ");
        a.u("visibility: " + (this.visibility ? "true" : "false") + ", ");
        if (this.horizontalAlignment != null) {
            a.u("horizontalAlignment: \"" + this.horizontalAlignment + "\", ");
        }
        if (this.verticalAlignment != null) {
            a.u("verticalAlignment: \"" + this.verticalAlignment + "\", ");
        }
        if (this.font != null) {
            a.u("font: \"" + this.font + "\",");
        }
        if (this.fontFamily != null) {
            a.u("fontFamily: \"" + stringReplace(this.fontFamily, "\"", "'") + "\",");
        }
        if (this.fontWeight != null) {
            a.u("fontWeight: \"" + this.fontWeight + "\",");
        }
        if (this.fontStyle != null) {
            a.u("fontStyle: \"" + this.fontStyle + "\",");
        }
        if (this.fontStretch != null) {
            a.u("fontStretch: \"" + this.fontStretch + "\",");
        }
        a.u("fontSize: " + this.fontSize);
        a.u("}");
        return a.toString();
    };
    LabelAppearanceData.$t = markType(LabelAppearanceData, 'LabelAppearanceData', Base.$, [IVisualData_$type]);
    return LabelAppearanceData;
}(Base));
export { LabelAppearanceData };
//# sourceMappingURL=LabelAppearanceData.js.map
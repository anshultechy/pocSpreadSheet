/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { stringReplace } from "./string";
/**
 * @hidden
 */
export class LabelAppearanceData extends Base {
    constructor() {
        super(...arguments);
        this._text = null;
        this._horizontalAlignment = null;
        this._verticalAlignment = null;
        this._textAlignment = null;
        this._textWrapping = null;
        this._textPosition = null;
        this._labelBrush = null;
        this._labelBrushExtended = null;
        this._angle = 0;
        this._opacity = 0;
        this._visibility = false;
        this._font = null;
        this._fontFamily = null;
        this._fontSize = 0;
        this._fontWeight = null;
        this._fontStyle = null;
        this._fontStretch = null;
        this._marginLeft = 0;
        this._marginRight = 0;
        this._marginTop = 0;
        this._marginBottom = 0;
    }
    get text() {
        return this._text;
    }
    set text(a) {
        this._text = a;
    }
    get horizontalAlignment() {
        return this._horizontalAlignment;
    }
    set horizontalAlignment(a) {
        this._horizontalAlignment = a;
    }
    get verticalAlignment() {
        return this._verticalAlignment;
    }
    set verticalAlignment(a) {
        this._verticalAlignment = a;
    }
    get textAlignment() {
        return this._textAlignment;
    }
    set textAlignment(a) {
        this._textAlignment = a;
    }
    get textWrapping() {
        return this._textWrapping;
    }
    set textWrapping(a) {
        this._textWrapping = a;
    }
    get textPosition() {
        return this._textPosition;
    }
    set textPosition(a) {
        this._textPosition = a;
    }
    get labelBrush() {
        return this._labelBrush;
    }
    set labelBrush(a) {
        this._labelBrush = a;
    }
    get labelBrushExtended() {
        return this._labelBrushExtended;
    }
    set labelBrushExtended(a) {
        this._labelBrushExtended = a;
    }
    get angle() {
        return this._angle;
    }
    set angle(a) {
        this._angle = a;
    }
    get opacity() {
        return this._opacity;
    }
    set opacity(a) {
        this._opacity = a;
    }
    get visibility() {
        return this._visibility;
    }
    set visibility(a) {
        this._visibility = a;
    }
    get font() {
        return this._font;
    }
    set font(a) {
        this._font = a;
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(a) {
        this._fontFamily = a;
    }
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(a) {
        this._fontSize = a;
    }
    get fontWeight() {
        return this._fontWeight;
    }
    set fontWeight(a) {
        this._fontWeight = a;
    }
    get fontStyle() {
        return this._fontStyle;
    }
    set fontStyle(a) {
        this._fontStyle = a;
    }
    get fontStretch() {
        return this._fontStretch;
    }
    set fontStretch(a) {
        this._fontStretch = a;
    }
    get marginLeft() {
        return this._marginLeft;
    }
    set marginLeft(a) {
        this._marginLeft = a;
    }
    get marginRight() {
        return this._marginRight;
    }
    set marginRight(a) {
        this._marginRight = a;
    }
    get marginTop() {
        return this._marginTop;
    }
    set marginTop(a) {
        this._marginTop = a;
    }
    get marginBottom() {
        return this._marginBottom;
    }
    set marginBottom(a) {
        this._marginBottom = a;
    }
    serialize() {
        let a = new StringBuilder(0);
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
    }
}
LabelAppearanceData.$t = markType(LabelAppearanceData, 'LabelAppearanceData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=LabelAppearanceData.js.map
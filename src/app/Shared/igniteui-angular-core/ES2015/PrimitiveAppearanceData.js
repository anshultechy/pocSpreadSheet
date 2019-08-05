/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class PrimitiveAppearanceData extends Base {
    constructor() {
        super(...arguments);
        this._stroke = null;
        this._strokeExtended = null;
        this._fill = null;
        this._fillExtended = null;
        this._strokeThickness = 0;
        this._isVisible = false;
        this._opacity = 0;
        this._canvasLeft = 0;
        this._canvasTop = 0;
        this._canvaZIndex = 0;
        this._dashArray = null;
        this._dashCap = 0;
    }
    get stroke() {
        return this._stroke;
    }
    set stroke(a) {
        this._stroke = a;
    }
    get strokeExtended() {
        return this._strokeExtended;
    }
    set strokeExtended(a) {
        this._strokeExtended = a;
    }
    get fill() {
        return this._fill;
    }
    set fill(a) {
        this._fill = a;
    }
    get fillExtended() {
        return this._fillExtended;
    }
    set fillExtended(a) {
        this._fillExtended = a;
    }
    get strokeThickness() {
        return this._strokeThickness;
    }
    set strokeThickness(a) {
        this._strokeThickness = a;
    }
    get isVisible() {
        return this._isVisible;
    }
    set isVisible(a) {
        this._isVisible = a;
    }
    get opacity() {
        return this._opacity;
    }
    set opacity(a) {
        this._opacity = a;
    }
    get canvasLeft() {
        return this._canvasLeft;
    }
    set canvasLeft(a) {
        this._canvasLeft = a;
    }
    get canvasTop() {
        return this._canvasTop;
    }
    set canvasTop(a) {
        this._canvasTop = a;
    }
    get canvaZIndex() {
        return this._canvaZIndex;
    }
    set canvaZIndex(a) {
        this._canvaZIndex = a;
    }
    get dashArray() {
        return this._dashArray;
    }
    set dashArray(a) {
        this._dashArray = a;
    }
    get dashCap() {
        return this._dashCap;
    }
    set dashCap(a) {
        this._dashCap = a;
    }
    m(a) {
        this.canvasLeft = (this.canvasLeft - a.left) / a.width;
        this.canvasTop = (this.canvasTop - a.top) / a.height;
    }
    serialize() {
        let a = new StringBuilder(0);
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
    }
}
PrimitiveAppearanceData.$t = markType(PrimitiveAppearanceData, 'PrimitiveAppearanceData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=PrimitiveAppearanceData.js.map
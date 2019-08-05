/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { LegendBaseDescription } from "./LegendBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class LegendDescription extends LegendBaseDescription {
    constructor() {
        super();
        this.w = null;
        this.s = null;
        this.t = null;
        this.u = null;
        this.v = null;
    }
    get width() {
        return this.w;
    }
    set width(a) {
        this.w = a;
        this.e("Width");
    }
    get height() {
        return this.s;
    }
    set height(a) {
        this.s = a;
        this.e("Height");
    }
    get_type() {
        return "Legend";
    }
    get orientation() {
        return this.t;
    }
    set orientation(a) {
        this.t = a;
        this.e("Orientation");
    }
    get textColor() {
        return this.u;
    }
    set textColor(a) {
        this.u = a;
        this.e("TextColor");
    }
    get textStyle() {
        return this.v;
    }
    set textStyle(a) {
        this.v = a;
        this.e("TextStyle");
    }
}
LegendDescription.$t = markType(LegendDescription, 'LegendDescription', LegendBaseDescription.$);
//# sourceMappingURL=LegendDescription.js.map
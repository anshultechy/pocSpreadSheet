/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class LinearGraphRangeDescription extends Description {
    constructor() {
        super();
        this.u = null;
        this.t = null;
        this.v = null;
        this.k = 0;
        this.f = 0;
        this.h = 0;
        this.g = 0;
        this.j = 0;
        this.i = 0;
        this.l = 0;
    }
    get_type() {
        return "LinearGraphRange";
    }
    get type() {
        return this.get_type();
    }
    get name() {
        return this.u;
    }
    set name(a) {
        this.u = a;
        this.e("Name");
    }
    get brush() {
        return this.t;
    }
    set brush(a) {
        this.t = a;
        this.e("Brush");
    }
    get outline() {
        return this.v;
    }
    set outline(a) {
        this.v = a;
        this.e("Outline");
    }
    get startValue() {
        return this.k;
    }
    set startValue(a) {
        this.k = a;
        this.e("StartValue");
    }
    get endValue() {
        return this.f;
    }
    set endValue(a) {
        this.f = a;
        this.e("EndValue");
    }
    get innerStartExtent() {
        return this.h;
    }
    set innerStartExtent(a) {
        this.h = a;
        this.e("InnerStartExtent");
    }
    get innerEndExtent() {
        return this.g;
    }
    set innerEndExtent(a) {
        this.g = a;
        this.e("InnerEndExtent");
    }
    get outerStartExtent() {
        return this.j;
    }
    set outerStartExtent(a) {
        this.j = a;
        this.e("OuterStartExtent");
    }
    get outerEndExtent() {
        return this.i;
    }
    set outerEndExtent(a) {
        this.i = a;
        this.e("OuterEndExtent");
    }
    get strokeThickness() {
        return this.l;
    }
    set strokeThickness(a) {
        this.l = a;
        this.e("StrokeThickness");
    }
}
LinearGraphRangeDescription.$t = markType(LinearGraphRangeDescription, 'LinearGraphRangeDescription', Description.$);
//# sourceMappingURL=LinearGraphRangeDescription.js.map
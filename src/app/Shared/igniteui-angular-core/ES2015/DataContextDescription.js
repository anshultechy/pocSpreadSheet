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
export class DataContextDescription extends Description {
    constructor() {
        super();
        this.k = null;
        this.h = null;
        this.m = null;
        this.j = null;
        this.i = null;
        this.f = 0;
        this.l = null;
    }
    get_type() {
        return "DataContext";
    }
    get type() {
        return this.get_type();
    }
    get itemRef() {
        return this.k;
    }
    set itemRef(a) {
        this.k = a;
        this.e("ItemRef");
    }
    get actualItemBrush() {
        return this.h;
    }
    set actualItemBrush(a) {
        this.h = a;
        this.e("ActualItemBrush");
    }
    get outline() {
        return this.m;
    }
    set outline(a) {
        this.m = a;
        this.e("Outline");
    }
    get itemLabelRef() {
        return this.j;
    }
    set itemLabelRef(a) {
        this.j = a;
        this.e("ItemLabelRef");
    }
    get itemBrush() {
        return this.i;
    }
    set itemBrush(a) {
        this.i = a;
        this.e("ItemBrush");
    }
    get thickness() {
        return this.f;
    }
    set thickness(a) {
        this.f = a;
        this.e("Thickness");
    }
    get legendLabelRef() {
        return this.l;
    }
    set legendLabelRef(a) {
        this.l = a;
        this.e("LegendLabelRef");
    }
}
DataContextDescription.$t = markType(DataContextDescription, 'DataContextDescription', Description.$);
//# sourceMappingURL=DataContextDescription.js.map
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
export class CalloutStyleUpdatingEventArgsDescription extends Description {
    constructor() {
        super();
        this.o = null;
        this.p = null;
        this.k = null;
        this.f = null;
        this.j = null;
        this.n = null;
        this.m = null;
        this.l = null;
        this.h = 0;
    }
    get_type() {
        return "CalloutStyleUpdatingEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get xValueRef() {
        return this.o;
    }
    set xValueRef(a) {
        this.o = a;
        this.e("XValueRef");
    }
    get yValueRef() {
        return this.p;
    }
    set yValueRef(a) {
        this.p = a;
        this.e("YValueRef");
    }
    get itemRef() {
        return this.k;
    }
    set itemRef(a) {
        this.k = a;
        this.e("ItemRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get background() {
        return this.j;
    }
    set background(a) {
        this.j = a;
        this.e("Background");
    }
    get textColor() {
        return this.n;
    }
    set textColor(a) {
        this.n = a;
        this.e("TextColor");
    }
    get outline() {
        return this.m;
    }
    set outline(a) {
        this.m = a;
        this.e("Outline");
    }
    get leaderBrush() {
        return this.l;
    }
    set leaderBrush(a) {
        this.l = a;
        this.e("LeaderBrush");
    }
    get strokeThickness() {
        return this.h;
    }
    set strokeThickness(a) {
        this.h = a;
        this.e("StrokeThickness");
    }
}
CalloutStyleUpdatingEventArgsDescription.$t = markType(CalloutStyleUpdatingEventArgsDescription, 'CalloutStyleUpdatingEventArgsDescription', Description.$);
//# sourceMappingURL=CalloutStyleUpdatingEventArgsDescription.js.map
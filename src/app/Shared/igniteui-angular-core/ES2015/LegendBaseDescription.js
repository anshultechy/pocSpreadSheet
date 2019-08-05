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
export class LegendBaseDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.i = null;
        this.j = null;
        this.g = null;
        this.h = null;
        this.k = null;
    }
    get background() {
        return this.f;
    }
    set background(a) {
        this.f = a;
        this.e("Background");
    }
    get_type() {
        return "LegendBase";
    }
    get type() {
        return this.get_type();
    }
    get LegendItemMouseLeftButtonDownRef() {
        return this.i;
    }
    set LegendItemMouseLeftButtonDownRef(a) {
        this.i = a;
        this.e("LegendItemMouseLeftButtonDownRef");
    }
    get LegendItemMouseLeftButtonUpRef() {
        return this.j;
    }
    set LegendItemMouseLeftButtonUpRef(a) {
        this.j = a;
        this.e("LegendItemMouseLeftButtonUpRef");
    }
    get LegendItemMouseEnterRef() {
        return this.g;
    }
    set LegendItemMouseEnterRef(a) {
        this.g = a;
        this.e("LegendItemMouseEnterRef");
    }
    get LegendItemMouseLeaveRef() {
        return this.h;
    }
    set LegendItemMouseLeaveRef(a) {
        this.h = a;
        this.e("LegendItemMouseLeaveRef");
    }
    get LegendItemMouseMoveRef() {
        return this.k;
    }
    set LegendItemMouseMoveRef(a) {
        this.k = a;
        this.e("LegendItemMouseMoveRef");
    }
}
LegendBaseDescription.$t = markType(LegendBaseDescription, 'LegendBaseDescription', Description.$);
//# sourceMappingURL=LegendBaseDescription.js.map
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
export class HighlightingInfoDescription extends Description {
    constructor() {
        super();
        this.m = 0;
        this.l = 0;
        this.p = null;
        this.j = 0;
        this.h = false;
        this.f = null;
    }
    get_type() {
        return "HighlightingInfo";
    }
    get type() {
        return this.get_type();
    }
    get startIndex() {
        return this.m;
    }
    set startIndex(a) {
        this.m = a;
        this.e("StartIndex");
    }
    get endIndex() {
        return this.l;
    }
    set endIndex(a) {
        this.l = a;
        this.e("EndIndex");
    }
    get state() {
        return this.p;
    }
    set state(a) {
        this.p = a;
        this.e("State");
    }
    get progress() {
        return this.j;
    }
    set progress(a) {
        this.j = a;
        this.e("Progress");
    }
    get isMarker() {
        return this.h;
    }
    set isMarker(a) {
        this.h = a;
        this.e("IsMarker");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
}
HighlightingInfoDescription.$t = markType(HighlightingInfoDescription, 'HighlightingInfoDescription', Description.$);
//# sourceMappingURL=HighlightingInfoDescription.js.map
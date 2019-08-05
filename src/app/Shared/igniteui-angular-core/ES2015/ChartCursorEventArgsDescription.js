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
export class ChartCursorEventArgsDescription extends Description {
    constructor() {
        super();
        this.j = null;
        this.f = null;
        this.h = null;
    }
    get_type() {
        return "ChartCursorEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get itemRef() {
        return this.j;
    }
    set itemRef(a) {
        this.j = a;
        this.e("ItemRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get seriesViewer() {
        return this.h;
    }
    set seriesViewer(a) {
        this.h = a;
        this.e("SeriesViewer");
    }
}
ChartCursorEventArgsDescription.$t = markType(ChartCursorEventArgsDescription, 'ChartCursorEventArgsDescription', Description.$);
//# sourceMappingURL=ChartCursorEventArgsDescription.js.map
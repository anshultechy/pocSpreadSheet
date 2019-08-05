/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SeriesDescription } from "./SeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class FinancialSeriesDescription extends SeriesDescription {
    constructor() {
        super();
        this.b0 = null;
        this.b6 = null;
        this.b7 = null;
        this.b1 = null;
        this.by = null;
        this.bz = null;
        this.bx = null;
        this.b5 = null;
        this.bs = false;
        this.b2 = null;
        this.bt = false;
        this.bw = null;
        this.b3 = null;
        this.b4 = null;
    }
    get_type() {
        return "FinancialSeries";
    }
    get negativeBrush() {
        return this.b0;
    }
    set negativeBrush(a) {
        this.b0 = a;
        this.e("NegativeBrush");
    }
    get xAxisRef() {
        return this.b6;
    }
    set xAxisRef(a) {
        this.b6 = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.b7;
    }
    set yAxisRef(a) {
        this.b7 = a;
        this.e("YAxisRef");
    }
    get openMemberPath() {
        return this.b1;
    }
    set openMemberPath(a) {
        this.b1 = a;
        this.e("OpenMemberPath");
    }
    get highMemberPath() {
        return this.by;
    }
    set highMemberPath(a) {
        this.by = a;
        this.e("HighMemberPath");
    }
    get lowMemberPath() {
        return this.bz;
    }
    set lowMemberPath(a) {
        this.bz = a;
        this.e("LowMemberPath");
    }
    get closeMemberPath() {
        return this.bx;
    }
    set closeMemberPath(a) {
        this.bx = a;
        this.e("CloseMemberPath");
    }
    get volumeMemberPath() {
        return this.b5;
    }
    set volumeMemberPath(a) {
        this.b5 = a;
        this.e("VolumeMemberPath");
    }
    get isCustomCategoryStyleAllowed() {
        return this.bs;
    }
    set isCustomCategoryStyleAllowed(a) {
        this.bs = a;
        this.e("IsCustomCategoryStyleAllowed");
    }
    get transitionInMode() {
        return this.b2;
    }
    set transitionInMode(a) {
        this.b2 = a;
        this.e("TransitionInMode");
    }
    get isTransitionInEnabled() {
        return this.bt;
    }
    set isTransitionInEnabled(a) {
        this.bt = a;
        this.e("IsTransitionInEnabled");
    }
    get AssigningCategoryStyleRef() {
        return this.bw;
    }
    set AssigningCategoryStyleRef(a) {
        this.bw = a;
        this.e("AssigningCategoryStyleRef");
    }
    get TypicalRef() {
        return this.b3;
    }
    set TypicalRef(a) {
        this.b3 = a;
        this.e("TypicalRef");
    }
    get TypicalBasedOnRef() {
        return this.b4;
    }
    set TypicalBasedOnRef(a) {
        this.b4 = a;
        this.e("TypicalBasedOnRef");
    }
}
FinancialSeriesDescription.$t = markType(FinancialSeriesDescription, 'FinancialSeriesDescription', SeriesDescription.$);
//# sourceMappingURL=FinancialSeriesDescription.js.map
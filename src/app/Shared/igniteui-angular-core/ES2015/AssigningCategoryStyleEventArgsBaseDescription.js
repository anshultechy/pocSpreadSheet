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
export class AssigningCategoryStyleEventArgsBaseDescription extends Description {
    constructor() {
        super();
        this.aa = 0;
        this.z = 0;
        this.q = new Date();
        this.p = new Date();
        this.ae = null;
        this.ad = null;
        this.af = null;
        this.u = 0;
        this.f = null;
        this.t = 0;
        this.v = 0;
        this.i = false;
        this.h = false;
        this.j = false;
        this.k = false;
    }
    get_type() {
        return "AssigningCategoryStyleEventArgsBase";
    }
    get type() {
        return this.get_type();
    }
    get startIndex() {
        return this.aa;
    }
    set startIndex(a) {
        this.aa = a;
        this.e("StartIndex");
    }
    get endIndex() {
        return this.z;
    }
    set endIndex(a) {
        this.z = a;
        this.e("EndIndex");
    }
    get startDate() {
        return this.q;
    }
    set startDate(a) {
        this.q = a;
        this.e("StartDate");
    }
    get endDate() {
        return this.p;
    }
    set endDate(a) {
        this.p = a;
        this.e("EndDate");
    }
    get getItemsRef() {
        return this.ae;
    }
    set getItemsRef(a) {
        this.ae = a;
        this.e("GetItemsRef");
    }
    get fill() {
        return this.ad;
    }
    set fill(a) {
        this.ad = a;
        this.e("Fill");
    }
    get stroke() {
        return this.af;
    }
    set stroke(a) {
        this.af = a;
        this.e("Stroke");
    }
    get opacity() {
        return this.u;
    }
    set opacity(a) {
        this.u = a;
        this.e("Opacity");
    }
    get highlightingInfo() {
        return this.f;
    }
    set highlightingInfo(a) {
        this.f = a;
        this.e("HighlightingInfo");
    }
    get maxAllSeriesHighlightingProgress() {
        return this.t;
    }
    set maxAllSeriesHighlightingProgress(a) {
        this.t = a;
        this.e("MaxAllSeriesHighlightingProgress");
    }
    get sumAllSeriesHighlightingProgress() {
        return this.v;
    }
    set sumAllSeriesHighlightingProgress(a) {
        this.v = a;
        this.e("SumAllSeriesHighlightingProgress");
    }
    get highlightingHandled() {
        return this.i;
    }
    set highlightingHandled(a) {
        this.i = a;
        this.e("HighlightingHandled");
    }
    get hasDateRange() {
        return this.h;
    }
    set hasDateRange(a) {
        this.h = a;
        this.e("HasDateRange");
    }
    get isNegativeShape() {
        return this.j;
    }
    set isNegativeShape(a) {
        this.j = a;
        this.e("IsNegativeShape");
    }
    get isThumbnail() {
        return this.k;
    }
    set isThumbnail(a) {
        this.k = a;
        this.e("IsThumbnail");
    }
}
AssigningCategoryStyleEventArgsBaseDescription.$t = markType(AssigningCategoryStyleEventArgsBaseDescription, 'AssigningCategoryStyleEventArgsBaseDescription', Description.$);
//# sourceMappingURL=AssigningCategoryStyleEventArgsBaseDescription.js.map
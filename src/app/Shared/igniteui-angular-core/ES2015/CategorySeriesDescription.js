/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CategorySeriesDescription extends MarkerSeriesDescription {
    constructor() {
        super();
        this.b7 = false;
        this.b6 = false;
        this.b9 = false;
        this.cg = null;
        this.b8 = false;
        this.cf = null;
        this.ce = null;
    }
    get_type() {
        return "CategorySeries";
    }
    get isCustomCategoryStyleAllowed() {
        return this.b7;
    }
    set isCustomCategoryStyleAllowed(a) {
        this.b7 = a;
        this.e("IsCustomCategoryStyleAllowed");
    }
    get isCustomCategoryMarkerStyleAllowed() {
        return this.b6;
    }
    set isCustomCategoryMarkerStyleAllowed(a) {
        this.b6 = a;
        this.e("IsCustomCategoryMarkerStyleAllowed");
    }
    get useHighMarkerFidelity() {
        return this.b9;
    }
    set useHighMarkerFidelity(a) {
        this.b9 = a;
        this.e("UseHighMarkerFidelity");
    }
    get transitionInMode() {
        return this.cg;
    }
    set transitionInMode(a) {
        this.cg = a;
        this.e("TransitionInMode");
    }
    get isTransitionInEnabled() {
        return this.b8;
    }
    set isTransitionInEnabled(a) {
        this.b8 = a;
        this.e("IsTransitionInEnabled");
    }
    get AssigningCategoryStyleRef() {
        return this.cf;
    }
    set AssigningCategoryStyleRef(a) {
        this.cf = a;
        this.e("AssigningCategoryStyleRef");
    }
    get AssigningCategoryMarkerStyleRef() {
        return this.ce;
    }
    set AssigningCategoryMarkerStyleRef(a) {
        this.ce = a;
        this.e("AssigningCategoryMarkerStyleRef");
    }
}
CategorySeriesDescription.$t = markType(CategorySeriesDescription, 'CategorySeriesDescription', MarkerSeriesDescription.$);
//# sourceMappingURL=CategorySeriesDescription.js.map
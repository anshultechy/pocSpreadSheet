/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AssigningCategoryStyleEventArgsBaseDescription } from "./AssigningCategoryStyleEventArgsBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class AssigningCategoryStyleEventArgsDescription extends AssigningCategoryStyleEventArgsBaseDescription {
    constructor() {
        super();
        this.am = 0;
        this.ak = 0;
        this.al = 0;
    }
    get_type() {
        return "AssigningCategoryStyleEventArgs";
    }
    get strokeThickness() {
        return this.am;
    }
    set strokeThickness(a) {
        this.am = a;
        this.e("StrokeThickness");
    }
    get radiusX() {
        return this.ak;
    }
    set radiusX(a) {
        this.ak = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.al;
    }
    set radiusY(a) {
        this.al = a;
        this.e("RadiusY");
    }
}
AssigningCategoryStyleEventArgsDescription.$t = markType(AssigningCategoryStyleEventArgsDescription, 'AssigningCategoryStyleEventArgsDescription', AssigningCategoryStyleEventArgsBaseDescription.$);
//# sourceMappingURL=AssigningCategoryStyleEventArgsDescription.js.map
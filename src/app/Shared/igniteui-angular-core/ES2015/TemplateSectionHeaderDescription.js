/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SectionHeaderDescription } from "./SectionHeaderDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TemplateSectionHeaderDescription extends SectionHeaderDescription {
    constructor() {
        super();
        this.bm = null;
    }
    get_type() {
        return "TemplateSectionHeader";
    }
    get CellUpdatingRef() {
        return this.bm;
    }
    set CellUpdatingRef(a) {
        this.bm = a;
        this.e("CellUpdatingRef");
    }
}
TemplateSectionHeaderDescription.$t = markType(TemplateSectionHeaderDescription, 'TemplateSectionHeaderDescription', SectionHeaderDescription.$);
//# sourceMappingURL=TemplateSectionHeaderDescription.js.map
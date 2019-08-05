/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TemplateHeaderCellInfoDescription extends TemplateCellInfoDescription {
    constructor() {
        super();
        this.c4 = false;
    }
    get_type() {
        return "TemplateHeaderCellInfo";
    }
    get isFilterUIVisible() {
        return this.c4;
    }
    set isFilterUIVisible(a) {
        this.c4 = a;
        this.e("IsFilterUIVisible");
    }
}
TemplateHeaderCellInfoDescription.$t = markType(TemplateHeaderCellInfoDescription, 'TemplateHeaderCellInfoDescription', TemplateCellInfoDescription.$);
//# sourceMappingURL=TemplateHeaderCellInfoDescription.js.map
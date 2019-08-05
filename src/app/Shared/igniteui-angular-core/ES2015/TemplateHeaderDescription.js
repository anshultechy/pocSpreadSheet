/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HeaderDescription } from "./HeaderDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TemplateHeaderDescription extends HeaderDescription {
    constructor() {
        super();
        this.bi = null;
    }
    get_type() {
        return "TemplateHeader";
    }
    get CellUpdatingRef() {
        return this.bi;
    }
    set CellUpdatingRef(a) {
        this.bi = a;
        this.e("CellUpdatingRef");
    }
}
TemplateHeaderDescription.$t = markType(TemplateHeaderDescription, 'TemplateHeaderDescription', HeaderDescription.$);
//# sourceMappingURL=TemplateHeaderDescription.js.map
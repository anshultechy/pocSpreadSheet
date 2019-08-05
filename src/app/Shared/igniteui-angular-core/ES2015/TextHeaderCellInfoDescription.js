/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TextCellInfoDescription } from "./TextCellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TextHeaderCellInfoDescription extends TextCellInfoDescription {
    constructor() {
        super();
        this.c4 = false;
    }
    get_type() {
        return "TextHeaderCellInfo";
    }
    get isFilterUIVisible() {
        return this.c4;
    }
    set isFilterUIVisible(a) {
        this.c4 = a;
        this.e("IsFilterUIVisible");
    }
}
TextHeaderCellInfoDescription.$t = markType(TextHeaderCellInfoDescription, 'TextHeaderCellInfoDescription', TextCellInfoDescription.$);
//# sourceMappingURL=TextHeaderCellInfoDescription.js.map
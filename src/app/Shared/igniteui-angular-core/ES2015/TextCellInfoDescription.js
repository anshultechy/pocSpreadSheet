/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TextCellInfoDescription extends CellInfoDescription {
    constructor() {
        super();
        this.c2 = null;
    }
    get_type() {
        return "TextCellInfo";
    }
    get textValue() {
        return this.c2;
    }
    set textValue(a) {
        this.c2 = a;
        this.e("TextValue");
    }
}
TextCellInfoDescription.$t = markType(TextCellInfoDescription, 'TextCellInfoDescription', CellInfoDescription.$);
//# sourceMappingURL=TextCellInfoDescription.js.map
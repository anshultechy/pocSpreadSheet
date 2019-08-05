/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
import { Nullable$1, markType } from "../../igniteui-angular-core/ES2015/type";
import { HorizontalTextAlignment_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class IGFormattedTextParagraph extends IGFormattedTextSpan {
    constructor() {
        super(...arguments);
        this.k = Nullable$1.toNullable(HorizontalTextAlignment_$type, null);
    }
    c() {
        if (super.c()) {
            return true;
        }
        return nullableNotEquals(this.k, null);
    }
}
IGFormattedTextParagraph.$t = markType(IGFormattedTextParagraph, 'IGFormattedTextParagraph', IGFormattedTextSpan.$);
//# sourceMappingURL=IGFormattedTextParagraph.js.map

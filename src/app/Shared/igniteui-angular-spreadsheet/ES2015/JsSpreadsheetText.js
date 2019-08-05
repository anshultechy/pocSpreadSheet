/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetText } from "./SpreadsheetText";
import { typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class JsSpreadsheetText extends SpreadsheetText {
    constructor() {
        super(...arguments);
        this.c = 0;
        this.d = 0;
        this.e = null;
    }
    equals(a) {
        let b = typeCast(JsSpreadsheetText.$, a);
        return b != null && b.e == this.e && b.c == this.c && b.d == this.d;
    }
    get_a() {
        return this.c;
    }
    get a() {
        return this.get_a();
    }
    get_b() {
        return this.d;
    }
    get b() {
        return this.get_b();
    }
}
JsSpreadsheetText.$t = markType(JsSpreadsheetText, 'JsSpreadsheetText', SpreadsheetText.$);
//# sourceMappingURL=JsSpreadsheetText.js.map
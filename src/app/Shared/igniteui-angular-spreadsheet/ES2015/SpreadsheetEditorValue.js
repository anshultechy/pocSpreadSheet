/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetEditorValue_$type } from "./ISpreadsheetEditorValue";
/**
 * @hidden
 */
export class SpreadsheetEditorValue extends Base {
    constructor(a, b) {
        super();
        this.b = null;
        this.a = null;
        this.b = a;
        this.a = b;
    }
    get editCellFormat() {
        return this.a;
    }
    get unformattedText() {
        return this.b;
    }
    createDocument() {
        return null;
    }
}
SpreadsheetEditorValue.$t = markType(SpreadsheetEditorValue, 'SpreadsheetEditorValue', Base.$, [ISpreadsheetEditorValue_$type]);
//# sourceMappingURL=SpreadsheetEditorValue.js.map
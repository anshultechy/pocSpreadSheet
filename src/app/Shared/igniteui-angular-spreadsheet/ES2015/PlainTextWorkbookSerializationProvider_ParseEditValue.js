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
export class PlainTextWorkbookSerializationProvider_ParseEditValue extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
        this.b = null;
    }
    createDocument() {
        return null;
    }
    get unformattedText() {
        return this.b;
    }
    get editCellFormat() {
        return this.a;
    }
}
PlainTextWorkbookSerializationProvider_ParseEditValue.$t = markType(PlainTextWorkbookSerializationProvider_ParseEditValue, 'PlainTextWorkbookSerializationProvider_ParseEditValue', Base.$, [ISpreadsheetEditorValue_$type]);
//# sourceMappingURL=PlainTextWorkbookSerializationProvider_ParseEditValue.js.map
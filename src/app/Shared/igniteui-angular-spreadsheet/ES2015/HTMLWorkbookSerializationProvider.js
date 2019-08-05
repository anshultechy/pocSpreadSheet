/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WorkbookSerializationProviderBase } from "./WorkbookSerializationProviderBase";
import { DataFormats } from "../../igniteui-angular-core/ES2015/DataFormats";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class HTMLWorkbookSerializationProvider extends WorkbookSerializationProviderBase {
    constructor() {
        super(0, DataFormats.b);
    }
    c(a) {
        return false;
    }
    d(a) {
        return false;
    }
}
HTMLWorkbookSerializationProvider.$t = markType(HTMLWorkbookSerializationProvider, 'HTMLWorkbookSerializationProvider', WorkbookSerializationProviderBase.$);
//# sourceMappingURL=HTMLWorkbookSerializationProvider.js.map
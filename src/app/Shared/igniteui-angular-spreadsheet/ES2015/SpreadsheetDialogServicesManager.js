/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetDialogServicesManager_$type } from "./ISpreadsheetDialogServicesManager";
import { SpreadsheetDialogFontsService } from "./SpreadsheetDialogFontsService";
/**
 * @hidden
 */
export class SpreadsheetDialogServicesManager extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
    }
    get fontsService() {
        if (null == this.a) {
            this.a = new SpreadsheetDialogFontsService();
        }
        return this.a;
    }
}
SpreadsheetDialogServicesManager.$t = markType(SpreadsheetDialogServicesManager, 'SpreadsheetDialogServicesManager', Base.$, [ISpreadsheetDialogServicesManager_$type]);
//# sourceMappingURL=SpreadsheetDialogServicesManager.js.map
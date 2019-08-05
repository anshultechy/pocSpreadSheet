/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { Localization } from "../../igniteui-angular-core/ES2015/Localization";
/**
 * @hidden
 */
export class UndoUtils extends Base {
    static a(a) {
        return Localization.c("undo", a);
    }
    static b(a, ...b) {
        return Localization.c("undo", a, ...b);
    }
}
UndoUtils.$t = markType(UndoUtils, 'UndoUtils');
//# sourceMappingURL=UndoUtils.js.map
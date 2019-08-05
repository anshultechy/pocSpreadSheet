/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EditModeWorkbookFont } from "./EditModeWorkbookFont";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class EditModeWorkbookFont$1 extends EditModeWorkbookFont {
    constructor($tEditor, a) {
        super(a);
        this.$tEditor = null;
        this.$tEditor = $tEditor;
        this.$type = this.$type.specialize(this.$tEditor);
    }
    get _z() {
        return this._j;
    }
}
EditModeWorkbookFont$1.$t = markType(EditModeWorkbookFont$1, 'EditModeWorkbookFont$1', EditModeWorkbookFont.$);
//# sourceMappingURL=EditModeWorkbookFont$1.js.map

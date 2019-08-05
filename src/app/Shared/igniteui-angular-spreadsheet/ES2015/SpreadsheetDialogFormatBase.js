/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetDialogFormatBase extends Base {
    constructor() {
        super(...arguments);
        this.propertyChanged = null;
    }
    _a(a) {
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    }
}
SpreadsheetDialogFormatBase.$t = markType(SpreadsheetDialogFormatBase, 'SpreadsheetDialogFormatBase', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=SpreadsheetDialogFormatBase.js.map
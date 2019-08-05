/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetDialog_$type } from "./ISpreadsheetDialog";
import { NotImplementedException } from "../../igniteui-angular-core/ES2015/NotImplementedException";
/**
 * @hidden
 */
export class IgDialogWrapper extends Base {
    constructor(a) {
        super();
        this.b = null;
        this.c = 0;
        this.closing = null;
        this.closed = null;
        this.b = a;
    }
    close(a) {
        this.c++;
        try {
            throw new NotImplementedException(0);
        }
        finally {
            this.c--;
        }
    }
    e(a, b) {
        throw new NotImplementedException(0);
        return null;
    }
    d(a, b) {
        throw new NotImplementedException(0);
        return null;
    }
    static a(a, b, c = false) {
        let d = new IgDialogWrapper(a);
        throw new NotImplementedException(0);
        return d;
    }
}
IgDialogWrapper.$t = markType(IgDialogWrapper, 'IgDialogWrapper', Base.$, [ISpreadsheetDialog_$type]);
//# sourceMappingURL=IgDialogWrapper.js.map
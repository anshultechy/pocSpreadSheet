/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WorkbookDataObjectPastingEventArgs extends WorkbookDataObjectEventArgs {
    constructor(a, b, c) {
        super(c);
        this._f = null;
        this._d = null;
        this._f = a;
        this._d = b;
    }
    get _dataObject() {
        return this._f;
    }
    set _dataObject(a) {
        if (this._f != a) {
            if (a == null) {
                throw new ArgumentNullException(1);
            }
            this._f = a;
        }
    }
    get _formatToApply() {
        return this._d;
    }
    set _formatToApply(a) {
        this._d = a;
    }
}
WorkbookDataObjectPastingEventArgs.$t = markType(WorkbookDataObjectPastingEventArgs, 'WorkbookDataObjectPastingEventArgs', WorkbookDataObjectEventArgs.$);
//# sourceMappingURL=WorkbookDataObjectPastingEventArgs.js.map
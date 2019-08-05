/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WorkbookDataObjectEventArgs extends EventArgs {
    constructor(a) {
        super();
        this._cancel_1 = false;
        this._isDragDrop_1 = false;
        this._isDragDrop = a;
    }
    get _cancel() {
        return this._cancel_1;
    }
    set _cancel(a) {
        this._cancel_1 = a;
    }
    get _isDragDrop() {
        return this._isDragDrop_1;
    }
    set _isDragDrop(a) {
        this._isDragDrop_1 = a;
    }
}
WorkbookDataObjectEventArgs.$t = markType(WorkbookDataObjectEventArgs, 'WorkbookDataObjectEventArgs', EventArgs.$);
//# sourceMappingURL=WorkbookDataObjectEventArgs.js.map
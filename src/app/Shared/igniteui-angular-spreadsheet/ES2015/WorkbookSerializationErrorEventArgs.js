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
export class WorkbookSerializationErrorEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._exception_1 = null;
        this._isLoading_1 = false;
        this._isLoading = a;
        this._exception = b;
    }
    get _exception() {
        return this._exception_1;
    }
    set _exception(a) {
        this._exception_1 = a;
    }
    get _isLoading() {
        return this._isLoading_1;
    }
    set _isLoading(a) {
        this._isLoading_1 = a;
    }
}
WorkbookSerializationErrorEventArgs.$t = markType(WorkbookSerializationErrorEventArgs, 'WorkbookSerializationErrorEventArgs', EventArgs.$);
//# sourceMappingURL=WorkbookSerializationErrorEventArgs.js.map
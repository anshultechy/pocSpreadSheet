/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { CoreUtilities } from "./CoreUtilities";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WorkbookDataObjectCopyingEventArgs extends WorkbookDataObjectEventArgs {
    constructor(a, b) {
        super(b);
        this._dataObject_1 = null;
        CoreUtilities.z(a, "dataObject");
        this._dataObject = a;
    }
    get _dataObject() {
        return this._dataObject_1;
    }
    set _dataObject(a) {
        this._dataObject_1 = a;
    }
}
WorkbookDataObjectCopyingEventArgs.$t = markType(WorkbookDataObjectCopyingEventArgs, 'WorkbookDataObjectCopyingEventArgs', WorkbookDataObjectEventArgs.$);
//# sourceMappingURL=WorkbookDataObjectCopyingEventArgs.js.map
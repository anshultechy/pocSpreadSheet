/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { CoreUtilities } from "./CoreUtilities";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WorkbookDataObjectCopyingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectCopyingEventArgs, _super);
    function WorkbookDataObjectCopyingEventArgs(a, b) {
        var _this = _super.call(this, b) || this;
        _this._dataObject_1 = null;
        CoreUtilities.z(a, "dataObject");
        _this._dataObject = a;
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectCopyingEventArgs.prototype, "_dataObject", {
        get: function () {
            return this._dataObject_1;
        },
        set: function (a) {
            this._dataObject_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectCopyingEventArgs.$t = markType(WorkbookDataObjectCopyingEventArgs, 'WorkbookDataObjectCopyingEventArgs', WorkbookDataObjectEventArgs.$);
    return WorkbookDataObjectCopyingEventArgs;
}(WorkbookDataObjectEventArgs));
export { WorkbookDataObjectCopyingEventArgs };
//# sourceMappingURL=WorkbookDataObjectCopyingEventArgs.js.map

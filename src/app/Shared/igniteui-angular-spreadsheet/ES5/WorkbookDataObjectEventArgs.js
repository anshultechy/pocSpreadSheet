/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WorkbookDataObjectEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectEventArgs, _super);
    function WorkbookDataObjectEventArgs(a) {
        var _this = _super.call(this) || this;
        _this._cancel_1 = false;
        _this._isDragDrop_1 = false;
        _this._isDragDrop = a;
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectEventArgs.prototype, "_cancel", {
        get: function () {
            return this._cancel_1;
        },
        set: function (a) {
            this._cancel_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectEventArgs.prototype, "_isDragDrop", {
        get: function () {
            return this._isDragDrop_1;
        },
        set: function (a) {
            this._isDragDrop_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectEventArgs.$t = markType(WorkbookDataObjectEventArgs, 'WorkbookDataObjectEventArgs', EventArgs.$);
    return WorkbookDataObjectEventArgs;
}(EventArgs));
export { WorkbookDataObjectEventArgs };
//# sourceMappingURL=WorkbookDataObjectEventArgs.js.map

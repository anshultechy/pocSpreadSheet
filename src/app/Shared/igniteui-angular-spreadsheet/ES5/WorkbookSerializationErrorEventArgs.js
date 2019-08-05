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
var WorkbookSerializationErrorEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSerializationErrorEventArgs, _super);
    function WorkbookSerializationErrorEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._exception_1 = null;
        _this._isLoading_1 = false;
        _this._isLoading = a;
        _this._exception = b;
        return _this;
    }
    Object.defineProperty(WorkbookSerializationErrorEventArgs.prototype, "_exception", {
        get: function () {
            return this._exception_1;
        },
        set: function (a) {
            this._exception_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookSerializationErrorEventArgs.prototype, "_isLoading", {
        get: function () {
            return this._isLoading_1;
        },
        set: function (a) {
            this._isLoading_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookSerializationErrorEventArgs.$t = markType(WorkbookSerializationErrorEventArgs, 'WorkbookSerializationErrorEventArgs', EventArgs.$);
    return WorkbookSerializationErrorEventArgs;
}(EventArgs));
export { WorkbookSerializationErrorEventArgs };
//# sourceMappingURL=WorkbookSerializationErrorEventArgs.js.map

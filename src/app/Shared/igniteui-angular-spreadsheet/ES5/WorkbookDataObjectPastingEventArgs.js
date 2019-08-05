/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WorkbookDataObjectEventArgs } from "./WorkbookDataObjectEventArgs";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WorkbookDataObjectPastingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectPastingEventArgs, _super);
    function WorkbookDataObjectPastingEventArgs(a, b, c) {
        var _this = _super.call(this, c) || this;
        _this._f = null;
        _this._d = null;
        _this._f = a;
        _this._d = b;
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectPastingEventArgs.prototype, "_dataObject", {
        get: function () {
            return this._f;
        },
        set: function (a) {
            if (this._f != a) {
                if (a == null) {
                    throw new ArgumentNullException(1);
                }
                this._f = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectPastingEventArgs.prototype, "_formatToApply", {
        get: function () {
            return this._d;
        },
        set: function (a) {
            this._d = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectPastingEventArgs.$t = markType(WorkbookDataObjectPastingEventArgs, 'WorkbookDataObjectPastingEventArgs', WorkbookDataObjectEventArgs.$);
    return WorkbookDataObjectPastingEventArgs;
}(WorkbookDataObjectEventArgs));
export { WorkbookDataObjectPastingEventArgs };
//# sourceMappingURL=WorkbookDataObjectPastingEventArgs.js.map

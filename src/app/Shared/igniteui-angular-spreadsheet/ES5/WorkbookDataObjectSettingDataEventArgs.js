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
var WorkbookDataObjectSettingDataEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectSettingDataEventArgs, _super);
    function WorkbookDataObjectSettingDataEventArgs(a, b, c) {
        var _this = _super.call(this, c) || this;
        _this._dataObject_1 = null;
        _this._format_1 = null;
        CoreUtilities.z(a, "dataObject");
        CoreUtilities.z(b, "format");
        _this._dataObject = a;
        _this._format = b;
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectSettingDataEventArgs.prototype, "_dataObject", {
        get: function () {
            return this._dataObject_1;
        },
        set: function (a) {
            this._dataObject_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectSettingDataEventArgs.prototype, "_format", {
        get: function () {
            return this._format_1;
        },
        set: function (a) {
            this._format_1 = a;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectSettingDataEventArgs.$t = markType(WorkbookDataObjectSettingDataEventArgs, 'WorkbookDataObjectSettingDataEventArgs', WorkbookDataObjectEventArgs.$);
    return WorkbookDataObjectSettingDataEventArgs;
}(WorkbookDataObjectEventArgs));
export { WorkbookDataObjectSettingDataEventArgs };
//# sourceMappingURL=WorkbookDataObjectSettingDataEventArgs.js.map

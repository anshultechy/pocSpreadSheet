/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var AsyncDataSourcePageTaskHolder = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncDataSourcePageTaskHolder, _super);
    function AsyncDataSourcePageTaskHolder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._task = null;
        return _this;
    }
    Object.defineProperty(AsyncDataSourcePageTaskHolder.prototype, "task", {
        get: function () {
            return this._task;
        },
        set: function (a) {
            this._task = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncDataSourcePageTaskHolder.$t = markType(AsyncDataSourcePageTaskHolder, 'AsyncDataSourcePageTaskHolder');
    return AsyncDataSourcePageTaskHolder;
}(Base));
export { AsyncDataSourcePageTaskHolder };
//# sourceMappingURL=AsyncDataSourcePageTaskHolder.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetHyperlinkExecutingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetHyperlinkExecutingEventArgs, _super);
    function SpreadsheetHyperlinkExecutingEventArgs(a) {
        var _this = _super.call(this, 0) || this;
        _this._c = null;
        _this._workingDirectory = null;
        _this._c = a;
        return _this;
    }
    Object.defineProperty(SpreadsheetHyperlinkExecutingEventArgs.prototype, "hyperlink", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetHyperlinkExecutingEventArgs.prototype, "workingDirectory", {
        get: function () {
            return this._workingDirectory;
        },
        set: function (a) {
            this._workingDirectory = a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetHyperlinkExecutingEventArgs.$t = markType(SpreadsheetHyperlinkExecutingEventArgs, 'SpreadsheetHyperlinkExecutingEventArgs', CancelEventArgs.$);
    return SpreadsheetHyperlinkExecutingEventArgs;
}(CancelEventArgs));
export { SpreadsheetHyperlinkExecutingEventArgs };
//# sourceMappingURL=SpreadsheetHyperlinkExecutingEventArgs.js.map

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var ErrorMessageDisplayingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorMessageDisplayingEventArgs, _super);
    function ErrorMessageDisplayingEventArgs(a) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.errorMessage = a;
        return _this;
    }
    Object.defineProperty(ErrorMessageDisplayingEventArgs.prototype, "errorMessage", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
        },
        enumerable: true,
        configurable: true
    });
    ErrorMessageDisplayingEventArgs.$t = markType(ErrorMessageDisplayingEventArgs, 'ErrorMessageDisplayingEventArgs', EventArgs.$);
    return ErrorMessageDisplayingEventArgs;
}(EventArgs));
export { ErrorMessageDisplayingEventArgs };
//# sourceMappingURL=ErrorMessageDisplayingEventArgs.js.map
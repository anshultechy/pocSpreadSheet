/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
var UploadStringCompletedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(UploadStringCompletedEventArgs, _super);
    function UploadStringCompletedEventArgs(a, b, c, d) {
        var _this = _super.call(this, b, c, d) || this;
        _this.i = null;
        _this.i = a;
        return _this;
    }
    Object.defineProperty(UploadStringCompletedEventArgs.prototype, "result", {
        get: function () {
            this.h();
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    UploadStringCompletedEventArgs.$t = markType(UploadStringCompletedEventArgs, 'UploadStringCompletedEventArgs', AsyncCompletedEventArgs.$);
    return UploadStringCompletedEventArgs;
}(AsyncCompletedEventArgs));
export { UploadStringCompletedEventArgs };
//# sourceMappingURL=UploadStringCompletedEventArgs.js.map
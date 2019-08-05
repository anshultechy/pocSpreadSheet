/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Control } from "./Control";
import { markType } from "./type";
/**
 * @hidden
 */
var ContentControl = /** @class */ (function (_super) {
    tslib_1.__extends(ContentControl, _super);
    function ContentControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._content = null;
        _this.ah = null;
        return _this;
    }
    Object.defineProperty(ContentControl.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (a) {
            this._content = a;
        },
        enumerable: true,
        configurable: true
    });
    ContentControl.$t = markType(ContentControl, 'ContentControl', Control.$);
    return ContentControl;
}(Control));
export { ContentControl };
//# sourceMappingURL=ContentControl.js.map
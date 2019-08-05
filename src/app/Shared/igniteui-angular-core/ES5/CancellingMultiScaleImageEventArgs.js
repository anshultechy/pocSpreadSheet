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
var CancellingMultiScaleImageEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(CancellingMultiScaleImageEventArgs, _super);
    function CancellingMultiScaleImageEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._uri = null;
        _this._image = null;
        return _this;
    }
    Object.defineProperty(CancellingMultiScaleImageEventArgs.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (a) {
            this._uri = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CancellingMultiScaleImageEventArgs.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (a) {
            this._image = a;
        },
        enumerable: true,
        configurable: true
    });
    CancellingMultiScaleImageEventArgs.$t = markType(CancellingMultiScaleImageEventArgs, 'CancellingMultiScaleImageEventArgs', EventArgs.$);
    return CancellingMultiScaleImageEventArgs;
}(EventArgs));
export { CancellingMultiScaleImageEventArgs };
//# sourceMappingURL=CancellingMultiScaleImageEventArgs.js.map
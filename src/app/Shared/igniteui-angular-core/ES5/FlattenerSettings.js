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
var FlattenerSettings = /** @class */ (function (_super) {
    tslib_1.__extends(FlattenerSettings, _super);
    function FlattenerSettings() {
        var _this = _super.call(this) || this;
        _this._chunkingAmount = 0;
        _this.chunkingAmount = 3000;
        return _this;
    }
    Object.defineProperty(FlattenerSettings, "instance", {
        get: function () {
            if (FlattenerSettings.a == null) {
                FlattenerSettings.a = new FlattenerSettings();
            }
            return FlattenerSettings.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlattenerSettings.prototype, "chunkingAmount", {
        get: function () {
            return this._chunkingAmount;
        },
        set: function (a) {
            this._chunkingAmount = a;
        },
        enumerable: true,
        configurable: true
    });
    FlattenerSettings.$t = markType(FlattenerSettings, 'FlattenerSettings');
    FlattenerSettings.a = null;
    return FlattenerSettings;
}(Base));
export { FlattenerSettings };
//# sourceMappingURL=FlattenerSettings.js.map
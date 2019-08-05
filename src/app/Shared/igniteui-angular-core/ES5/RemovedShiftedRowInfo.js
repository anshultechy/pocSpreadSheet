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
var RemovedShiftedRowInfo = /** @class */ (function (_super) {
    tslib_1.__extends(RemovedShiftedRowInfo, _super);
    function RemovedShiftedRowInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        _this._item = null;
        return _this;
    }
    Object.defineProperty(RemovedShiftedRowInfo.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (a) {
            this._item = a;
        },
        enumerable: true,
        configurable: true
    });
    RemovedShiftedRowInfo.$t = markType(RemovedShiftedRowInfo, 'RemovedShiftedRowInfo');
    return RemovedShiftedRowInfo;
}(Base));
export { RemovedShiftedRowInfo };
//# sourceMappingURL=RemovedShiftedRowInfo.js.map
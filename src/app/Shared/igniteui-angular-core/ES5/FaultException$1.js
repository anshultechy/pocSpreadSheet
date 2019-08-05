/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FaultException } from "./FaultException";
import { markType } from "./type";
/**
 * @hidden
 */
var FaultException$1 = /** @class */ (function (_super) {
    tslib_1.__extends(FaultException$1, _super);
    function FaultException$1($tDetail, a, b, c, d) {
        var _this = _super.call(this, b, c, d) || this;
        _this.$tDetail = null;
        _this._detail = null;
        _this.$tDetail = $tDetail;
        _this.$type = _this.$type.specialize(_this.$tDetail);
        _this.detail = a;
        return _this;
    }
    Object.defineProperty(FaultException$1.prototype, "detail", {
        get: function () {
            return this._detail;
        },
        set: function (a) {
            this._detail = a;
        },
        enumerable: true,
        configurable: true
    });
    FaultException$1.$t = markType(FaultException$1, 'FaultException$1', FaultException.$);
    return FaultException$1;
}(FaultException));
export { FaultException$1 };
//# sourceMappingURL=FaultException$1.js.map
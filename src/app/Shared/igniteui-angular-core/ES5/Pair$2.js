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
var Pair$2 = /** @class */ (function (_super) {
    tslib_1.__extends(Pair$2, _super);
    function Pair$2($t1, $t2, a, b) {
        var _this = _super.call(this) || this;
        _this.$t1 = null;
        _this.$t2 = null;
        _this.a = null;
        _this.b = null;
        _this.$t1 = $t1;
        _this.$t2 = $t2;
        _this.$type = _this.$type.specialize(_this.$t1, _this.$t2);
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Pair$2.$t = markType(Pair$2, 'Pair$2');
    return Pair$2;
}(Base));
export { Pair$2 };
//# sourceMappingURL=Pair$2.js.map
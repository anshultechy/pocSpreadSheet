/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, getBoxIfEnum, markType } from "./type";
/**
 * @hidden
 */
var Tuple$3 = /** @class */ (function (_super) {
    tslib_1.__extends(Tuple$3, _super);
    function Tuple$3($t1, $t2, $t3, a, b, c) {
        var _this = _super.call(this) || this;
        _this.$t1 = null;
        _this.$t2 = null;
        _this.$t3 = null;
        _this.c = null;
        _this.d = null;
        _this.e = null;
        _this.$t1 = $t1;
        _this.$t2 = $t2;
        _this.$t3 = $t3;
        _this.$type = _this.$type.specialize(_this.$t1, _this.$t2, _this.$t3);
        _this.c = a;
        _this.d = b;
        _this.e = c;
        return _this;
    }
    Tuple$3.prototype.equals = function (a) {
        var b = typeCast(Tuple$3.$.specialize(this.$t1, this.$t2, this.$t3), a);
        return b != null && Base.equalsStatic(getBoxIfEnum(this.$t1, this.c), getBoxIfEnum(this.$t1, b.c)) && Base.equalsStatic(getBoxIfEnum(this.$t2, this.d), getBoxIfEnum(this.$t2, b.d)) && Base.equalsStatic(getBoxIfEnum(this.$t3, this.e), getBoxIfEnum(this.$t3, b.e));
    };
    Tuple$3.prototype.getHashCode = function () {
        var a = 0;
        if (getBoxIfEnum(this.$t1, this.c) != null) {
            a = Base.getHashCodeStatic(this.c);
        }
        if (getBoxIfEnum(this.$t2, this.d) != null) {
            a = a ^ Base.getHashCodeStatic(this.d) << 8;
        }
        if (getBoxIfEnum(this.$t3, this.e) != null) {
            a = a ^ Base.getHashCodeStatic(this.e) << 16;
        }
        return a;
    };
    Tuple$3.$t = markType(Tuple$3, 'Tuple$3');
    return Tuple$3;
}(Base));
export { Tuple$3 };
//# sourceMappingURL=Tuple$3.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCastObjTo$t, markType, IComparable$1_$type, typeCast } from "./type";
import { IComparer_$type } from "./IComparer";
import { IComparer$1_$type } from "./IComparer$1";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
var Comparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Comparer$1, _super);
    function Comparer$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Comparer$1.defaultComparerValue = function ($t) {
        return new DefaultComparer$1($t);
    };
    Comparer$1.a = function ($t, a) {
        return null;
    };
    Comparer$1.prototype.compareObject = function (a, b) {
        return this.compare(typeCastObjTo$t(this.$t, a), typeCastObjTo$t(this.$t, b));
    };
    Comparer$1.$t = markType(Comparer$1, 'Comparer$1', Base.$, [IComparer_$type, IComparer$1_$type.specialize(0)]);
    return Comparer$1;
}(Base));
export { Comparer$1 };
/**
 * @hidden
 */
var DefaultComparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultComparer$1, _super);
    function DefaultComparer$1($t) {
        var _this = _super.call(this, $t) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    DefaultComparer$1.prototype.compare = function (a, b) {
        var c = typeCast(IComparable$1_$type.specialize(this.$t), a);
        if (c != null) {
            return CompareUtil.compareTo(c, b);
        }
        var d = typeCast(IComparable$1_$type.specialize(this.$t), b);
        if (d != null) {
            return -CompareUtil.compareTo(d, a);
        }
        return (Base.compare(a, b));
    };
    DefaultComparer$1.$t = markType(DefaultComparer$1, 'DefaultComparer$1', Comparer$1.$.specialize(0));
    return DefaultComparer$1;
}(Comparer$1));
export { DefaultComparer$1 };
//# sourceMappingURL=Comparer$1_combined.js.map
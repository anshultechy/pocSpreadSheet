/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEqualityComparer_$type, IEqualityComparer$1_$type, typeCastObjTo$t, markType, getBoxIfEnum } from "./type";
/**
 * @hidden
 */
var EqualityComparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(EqualityComparer$1, _super);
    function EqualityComparer$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    EqualityComparer$1.defaultEqualityComparerValue = function ($t) {
        return new DefaultEqualityComparer$1($t);
    };
    EqualityComparer$1.prototype.equalsC = function (a, b) {
        return this.equalsC(typeCastObjTo$t(this.$t, a), typeCastObjTo$t(this.$t, b));
    };
    EqualityComparer$1.prototype.getHashCodeC = function (a) {
        return this.getHashCodeC(typeCastObjTo$t(this.$t, a));
    };
    EqualityComparer$1.$t = markType(EqualityComparer$1, 'EqualityComparer$1', Base.$, [IEqualityComparer_$type, IEqualityComparer$1_$type.specialize(0)]);
    return EqualityComparer$1;
}(Base));
export { EqualityComparer$1 };
/**
 * @hidden
 */
var DefaultEqualityComparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEqualityComparer$1, _super);
    function DefaultEqualityComparer$1($t) {
        var _this = _super.call(this, $t) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    DefaultEqualityComparer$1.prototype.equalsC = function (a, b) {
        return Base.equalsStatic(getBoxIfEnum(this.$t, a), getBoxIfEnum(this.$t, b));
    };
    DefaultEqualityComparer$1.prototype.getHashCodeC = function (a) {
        return Base.getHashCodeStatic(a);
    };
    DefaultEqualityComparer$1.$t = markType(DefaultEqualityComparer$1, 'DefaultEqualityComparer$1', EqualityComparer$1.$.specialize(0));
    return DefaultEqualityComparer$1;
}(EqualityComparer$1));
export { DefaultEqualityComparer$1 };
//# sourceMappingURL=EqualityComparer$1_combined.js.map
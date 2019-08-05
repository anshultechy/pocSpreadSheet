/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, typeCastObjTo$t, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var TypedEnumerable_Enumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(TypedEnumerable_Enumerator$1, _super);
    function TypedEnumerable_Enumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a;
        return _this;
    }
    TypedEnumerable_Enumerator$1.prototype.reset = function () {
        this.a.reset();
    };
    TypedEnumerable_Enumerator$1.prototype.moveNext = function () {
        return this.a.moveNext();
    };
    Object.defineProperty(TypedEnumerable_Enumerator$1.prototype, "current", {
        get: function () {
            return typeCastObjTo$t(this.$t, this.a.currentObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypedEnumerable_Enumerator$1.prototype, "currentObject", {
        get: function () {
            return getBoxIfEnum(this.$t, this.current);
        },
        enumerable: true,
        configurable: true
    });
    TypedEnumerable_Enumerator$1.prototype.dispose = function () {
    };
    TypedEnumerable_Enumerator$1.$t = markType(TypedEnumerable_Enumerator$1, 'TypedEnumerable_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return TypedEnumerable_Enumerator$1;
}(Base));
export { TypedEnumerable_Enumerator$1 };
//# sourceMappingURL=TypedEnumerable_Enumerator$1.js.map

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, markType, getEnumeratorObject } from "../../igniteui-angular-core/ES5/type";
import { TypedEnumerable_Enumerator$1 } from "./TypedEnumerable_Enumerator$1";
/**
 * @hidden
 */
var TypedEnumerable$1 = /** @class */ (function (_super) {
    tslib_1.__extends(TypedEnumerable$1, _super);
    function TypedEnumerable$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a || new Array(0);
        return _this;
    }
    TypedEnumerable$1.prototype.b = function (a) {
        this.a = a || new Array(0);
    };
    TypedEnumerable$1.prototype.getEnumerator = function () {
        return new TypedEnumerable_Enumerator$1(this.$t, getEnumeratorObject(this.a));
    };
    TypedEnumerable$1.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    TypedEnumerable$1.$t = markType(TypedEnumerable$1, 'TypedEnumerable$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
    return TypedEnumerable$1;
}(Base));
export { TypedEnumerable$1 };
//# sourceMappingURL=TypedEnumerable$1.js.map

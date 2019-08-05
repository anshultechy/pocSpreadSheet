/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, markType, getEnumerator } from "./type";
import { GenericEnumerator$1 } from "./GenericEnumerator$1";
/**
 * @hidden
 */
var GenericEnumerable$1 = /** @class */ (function (_super) {
    tslib_1.__extends(GenericEnumerable$1, _super);
    function GenericEnumerable$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a;
        return _this;
    }
    GenericEnumerable$1.prototype.getEnumerator = function () {
        return new GenericEnumerator$1(this.$t, getEnumerator(this.a()));
    };
    GenericEnumerable$1.prototype.getEnumeratorObject = function () {
        return new GenericEnumerator$1(this.$t, getEnumerator(this.a()));
    };
    GenericEnumerable$1.$t = markType(GenericEnumerable$1, 'GenericEnumerable$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
    return GenericEnumerable$1;
}(Base));
export { GenericEnumerable$1 };
//# sourceMappingURL=GenericEnumerable$1.js.map
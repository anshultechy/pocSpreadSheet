/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Comparer$1 } from "../../igniteui-angular-core/ES5/Comparer$1";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ComparisonComparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ComparisonComparer$1, _super);
    function ComparisonComparer$1($t, a) {
        var _this = _super.call(this, $t) || this;
        _this.$t = null;
        _this._c = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this._c = a;
        return _this;
    }
    ComparisonComparer$1.prototype.compare = function (a, b) {
        return this._c(a, b);
    };
    ComparisonComparer$1.$t = markType(ComparisonComparer$1, 'ComparisonComparer$1', Comparer$1.$.specialize(0));
    return ComparisonComparer$1;
}(Comparer$1));
export { ComparisonComparer$1 };
//# sourceMappingURL=ComparisonComparer$1.js.map

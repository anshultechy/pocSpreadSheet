/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES5/IComparer$1";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { CoreUtilities } from "./CoreUtilities";
import { boolCompare } from "../../igniteui-angular-core/ES5/bool";
/**
 * @hidden
 */
var PositionOrderHelper_DefaultMeasureComparer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(PositionOrderHelper_DefaultMeasureComparer$1, _super);
    function PositionOrderHelper_DefaultMeasureComparer$1($tChild, a) {
        var _this = _super.call(this) || this;
        _this.$tChild = null;
        _this._a = null;
        _this.$tChild = $tChild;
        _this.$type = _this.$type.specialize(_this.$tChild);
        _this._a = a;
        return _this;
    }
    PositionOrderHelper_DefaultMeasureComparer$1.prototype.compare = function (a, b) {
        if (a == b) {
            return 0;
        }
        var c = CoreUtilities.g(a.after) || CoreUtilities.g(a.before);
        var d = CoreUtilities.g(b.after) || CoreUtilities.g(b.before);
        if (c != d) {
            return boolCompare(d, c);
        }
        return Base.compareSimple(this._a.indexOf(a), this._a.indexOf(b));
    };
    PositionOrderHelper_DefaultMeasureComparer$1.$t = markType(PositionOrderHelper_DefaultMeasureComparer$1, 'PositionOrderHelper_DefaultMeasureComparer$1', Base.$, [IComparer$1_$type.specialize(ISupportPositioning_$type)]);
    return PositionOrderHelper_DefaultMeasureComparer$1;
}(Base));
export { PositionOrderHelper_DefaultMeasureComparer$1 };
//# sourceMappingURL=PositionOrderHelper_DefaultMeasureComparer$1.js.map

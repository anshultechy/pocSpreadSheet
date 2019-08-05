/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES5/IComparer$1";
import { IntRange } from "./IntRange";
/**
 * @hidden
 */
var IntRange_StartComparerImpl = /** @class */ (function (_super) {
    tslib_1.__extends(IntRange_StartComparerImpl, _super);
    function IntRange_StartComparerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntRange_StartComparerImpl.prototype.compare = function (a, b) {
        return Base.compareSimple(a._i, b._i);
    };
    IntRange_StartComparerImpl.$t = markType(IntRange_StartComparerImpl, 'IntRange_StartComparerImpl', Base.$, [IComparer$1_$type.specialize(IntRange.$)]);
    return IntRange_StartComparerImpl;
}(Base));
export { IntRange_StartComparerImpl };
//# sourceMappingURL=IntRange_StartComparerImpl.js.map

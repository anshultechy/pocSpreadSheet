/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { stringEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var PositionOrderHelper_EmptySortPosition$1 = /** @class */ (function (_super) {
    tslib_1.__extends(PositionOrderHelper_EmptySortPosition$1, _super);
    function PositionOrderHelper_EmptySortPosition$1($tChild) {
        var _this = _super.call(this) || this;
        _this.$tChild = null;
        _this.$tChild = $tChild;
        _this.$type = _this.$type.specialize(_this.$tChild);
        return _this;
    }
    Object.defineProperty(PositionOrderHelper_EmptySortPosition$1.prototype, "after", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositionOrderHelper_EmptySortPosition$1.prototype, "before", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositionOrderHelper_EmptySortPosition$1.prototype, "key", {
        get: function () {
            return stringEmpty();
        },
        enumerable: true,
        configurable: true
    });
    PositionOrderHelper_EmptySortPosition$1.$t = markType(PositionOrderHelper_EmptySortPosition$1, 'PositionOrderHelper_EmptySortPosition$1', Base.$, [ISupportPositioning_$type]);
    return PositionOrderHelper_EmptySortPosition$1;
}(Base));
export { PositionOrderHelper_EmptySortPosition$1 };
//# sourceMappingURL=PositionOrderHelper_EmptySortPosition$1.js.map

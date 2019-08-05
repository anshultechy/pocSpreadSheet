/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ElementLayer } from "./ElementLayer";
import { CoreUtilities } from "./CoreUtilities";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ElementLayer$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayer$1, _super);
    function ElementLayer$1($tViewModel, a, b, c) {
        var _this = _super.call(this, c, b) || this;
        _this.$tViewModel = null;
        _this._i = null;
        _this.$tViewModel = $tViewModel;
        _this.$type = _this.$type.specialize(_this.$tViewModel);
        CoreUtilities.y(a);
        _this._i = a;
        return _this;
    }
    Object.defineProperty(ElementLayer$1.prototype, "_j", {
        get: function () {
            return this._i;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayer$1.$t = markType(ElementLayer$1, 'ElementLayer$1', ElementLayer.$);
    return ElementLayer$1;
}(ElementLayer));
export { ElementLayer$1 };
//# sourceMappingURL=ElementLayer$1.js.map

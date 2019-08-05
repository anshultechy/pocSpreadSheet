/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ElementLayerView } from "./ElementLayerView";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ElementLayerViewSingle = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayerViewSingle, _super);
    function ElementLayerViewSingle() {
        var _this = _super.call(this) || this;
        _this.a = null;
        return _this;
    }
    ElementLayerViewSingle.prototype.attach = function (a) {
        this.a = a;
    };
    ElementLayerViewSingle.prototype.detach = function (a) {
        this.a = null;
    };
    Object.defineProperty(ElementLayerViewSingle.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayerViewSingle.$t = markType(ElementLayerViewSingle, 'ElementLayerViewSingle', ElementLayerView.$);
    return ElementLayerViewSingle;
}(ElementLayerView));
export { ElementLayerViewSingle };
//# sourceMappingURL=ElementLayerViewSingle.js.map

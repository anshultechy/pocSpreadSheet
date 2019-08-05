/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var SortDescriptionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SortDescriptionDescription, _super);
    function SortDescriptionDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    SortDescriptionDescription.prototype.get_type = function () {
        return "SortDescription";
    };
    Object.defineProperty(SortDescriptionDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescriptionDescription.prototype, "propertyName", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("PropertyName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescriptionDescription.prototype, "direction", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Direction");
        },
        enumerable: true,
        configurable: true
    });
    SortDescriptionDescription.$t = markType(SortDescriptionDescription, 'SortDescriptionDescription', Description.$);
    return SortDescriptionDescription;
}(Description));
export { SortDescriptionDescription };
//# sourceMappingURL=SortDescriptionDescription.js.map
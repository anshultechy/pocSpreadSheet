/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FragmentBaseDescription } from "./FragmentBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ColumnFragmentDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnFragmentDescription, _super);
    function ColumnFragmentDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = 0;
        _this.c5 = 0;
        return _this;
    }
    ColumnFragmentDescription.prototype.get_type = function () {
        return "ColumnFragment";
    };
    Object.defineProperty(ColumnFragmentDescription.prototype, "radiusX", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnFragmentDescription.prototype, "radiusY", {
        get: function () {
            return this.c5;
        },
        set: function (a) {
            this.c5 = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    ColumnFragmentDescription.$t = markType(ColumnFragmentDescription, 'ColumnFragmentDescription', FragmentBaseDescription.$);
    return ColumnFragmentDescription;
}(FragmentBaseDescription));
export { ColumnFragmentDescription };
//# sourceMappingURL=ColumnFragmentDescription.js.map
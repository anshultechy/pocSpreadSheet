/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TemplateHeaderCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateHeaderCellInfoDescription, _super);
    function TemplateHeaderCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = false;
        return _this;
    }
    TemplateHeaderCellInfoDescription.prototype.get_type = function () {
        return "TemplateHeaderCellInfo";
    };
    Object.defineProperty(TemplateHeaderCellInfoDescription.prototype, "isFilterUIVisible", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("IsFilterUIVisible");
        },
        enumerable: true,
        configurable: true
    });
    TemplateHeaderCellInfoDescription.$t = markType(TemplateHeaderCellInfoDescription, 'TemplateHeaderCellInfoDescription', TemplateCellInfoDescription.$);
    return TemplateHeaderCellInfoDescription;
}(TemplateCellInfoDescription));
export { TemplateHeaderCellInfoDescription };
//# sourceMappingURL=TemplateHeaderCellInfoDescription.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SectionHeaderDescription } from "./SectionHeaderDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TemplateSectionHeaderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateSectionHeaderDescription, _super);
    function TemplateSectionHeaderDescription() {
        var _this = _super.call(this) || this;
        _this.bm = null;
        return _this;
    }
    TemplateSectionHeaderDescription.prototype.get_type = function () {
        return "TemplateSectionHeader";
    };
    Object.defineProperty(TemplateSectionHeaderDescription.prototype, "CellUpdatingRef", {
        get: function () {
            return this.bm;
        },
        set: function (a) {
            this.bm = a;
            this.e("CellUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    TemplateSectionHeaderDescription.$t = markType(TemplateSectionHeaderDescription, 'TemplateSectionHeaderDescription', SectionHeaderDescription.$);
    return TemplateSectionHeaderDescription;
}(SectionHeaderDescription));
export { TemplateSectionHeaderDescription };
//# sourceMappingURL=TemplateSectionHeaderDescription.js.map
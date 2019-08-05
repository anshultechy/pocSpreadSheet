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
var TemplateSectionHeaderCellUpdatingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateSectionHeaderCellUpdatingEventArgsDescription, _super);
    function TemplateSectionHeaderCellUpdatingEventArgsDescription() {
        return _super.call(this) || this;
    }
    TemplateSectionHeaderCellUpdatingEventArgsDescription.prototype.get_type = function () {
        return "TemplateSectionHeaderCellUpdatingEventArgs";
    };
    Object.defineProperty(TemplateSectionHeaderCellUpdatingEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    TemplateSectionHeaderCellUpdatingEventArgsDescription.$t = markType(TemplateSectionHeaderCellUpdatingEventArgsDescription, 'TemplateSectionHeaderCellUpdatingEventArgsDescription', Description.$);
    return TemplateSectionHeaderCellUpdatingEventArgsDescription;
}(Description));
export { TemplateSectionHeaderCellUpdatingEventArgsDescription };
//# sourceMappingURL=TemplateSectionHeaderCellUpdatingEventArgsDescription.js.map
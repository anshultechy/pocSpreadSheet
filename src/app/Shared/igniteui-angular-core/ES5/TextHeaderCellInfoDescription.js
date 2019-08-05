/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TextCellInfoDescription } from "./TextCellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TextHeaderCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TextHeaderCellInfoDescription, _super);
    function TextHeaderCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = false;
        return _this;
    }
    TextHeaderCellInfoDescription.prototype.get_type = function () {
        return "TextHeaderCellInfo";
    };
    Object.defineProperty(TextHeaderCellInfoDescription.prototype, "isFilterUIVisible", {
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
    TextHeaderCellInfoDescription.$t = markType(TextHeaderCellInfoDescription, 'TextHeaderCellInfoDescription', TextCellInfoDescription.$);
    return TextHeaderCellInfoDescription;
}(TextCellInfoDescription));
export { TextHeaderCellInfoDescription };
//# sourceMappingURL=TextHeaderCellInfoDescription.js.map
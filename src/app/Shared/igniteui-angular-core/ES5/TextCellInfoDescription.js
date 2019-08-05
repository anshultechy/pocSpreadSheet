/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TextCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TextCellInfoDescription, _super);
    function TextCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c2 = null;
        return _this;
    }
    TextCellInfoDescription.prototype.get_type = function () {
        return "TextCellInfo";
    };
    Object.defineProperty(TextCellInfoDescription.prototype, "textValue", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("TextValue");
        },
        enumerable: true,
        configurable: true
    });
    TextCellInfoDescription.$t = markType(TextCellInfoDescription, 'TextCellInfoDescription', CellInfoDescription.$);
    return TextCellInfoDescription;
}(CellInfoDescription));
export { TextCellInfoDescription };
//# sourceMappingURL=TextCellInfoDescription.js.map
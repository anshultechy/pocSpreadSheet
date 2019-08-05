/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
import { Nullable$1, markType } from "../../igniteui-angular-core/ES5/type";
import { HorizontalTextAlignment_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var IGFormattedTextParagraph = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextParagraph, _super);
    function IGFormattedTextParagraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.k = Nullable$1.toNullable(HorizontalTextAlignment_$type, null);
        return _this;
    }
    IGFormattedTextParagraph.prototype.c = function () {
        if (_super.prototype.c.call(this)) {
            return true;
        }
        return nullableNotEquals(this.k, null);
    };
    IGFormattedTextParagraph.$t = markType(IGFormattedTextParagraph, 'IGFormattedTextParagraph', IGFormattedTextSpan.$);
    return IGFormattedTextParagraph;
}(IGFormattedTextSpan));
export { IGFormattedTextParagraph };
//# sourceMappingURL=IGFormattedTextParagraph.js.map

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TextColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TextColumnDescription, _super);
    function TextColumnDescription() {
        return _super.call(this) || this;
    }
    TextColumnDescription.prototype.get_type = function () {
        return "TextColumn";
    };
    TextColumnDescription.$t = markType(TextColumnDescription, 'TextColumnDescription', ColumnDescription.$);
    return TextColumnDescription;
}(ColumnDescription));
export { TextColumnDescription };
//# sourceMappingURL=TextColumnDescription.js.map
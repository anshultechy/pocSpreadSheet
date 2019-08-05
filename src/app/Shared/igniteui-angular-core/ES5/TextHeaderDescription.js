/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HeaderDescription } from "./HeaderDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TextHeaderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TextHeaderDescription, _super);
    function TextHeaderDescription() {
        return _super.call(this) || this;
    }
    TextHeaderDescription.prototype.get_type = function () {
        return "TextHeader";
    };
    TextHeaderDescription.$t = markType(TextHeaderDescription, 'TextHeaderDescription', HeaderDescription.$);
    return TextHeaderDescription;
}(HeaderDescription));
export { TextHeaderDescription };
//# sourceMappingURL=TextHeaderDescription.js.map
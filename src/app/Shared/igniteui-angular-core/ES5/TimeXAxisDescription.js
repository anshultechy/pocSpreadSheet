/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TimeAxisBaseDescription } from "./TimeAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TimeXAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TimeXAxisDescription, _super);
    function TimeXAxisDescription() {
        return _super.call(this) || this;
    }
    TimeXAxisDescription.prototype.get_type = function () {
        return "TimeXAxis";
    };
    TimeXAxisDescription.$t = markType(TimeXAxisDescription, 'TimeXAxisDescription', TimeAxisBaseDescription.$);
    return TimeXAxisDescription;
}(TimeAxisBaseDescription));
export { TimeXAxisDescription };
//# sourceMappingURL=TimeXAxisDescription.js.map
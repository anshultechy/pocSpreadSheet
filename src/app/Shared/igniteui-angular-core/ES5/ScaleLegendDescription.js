/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { LegendBaseDescription } from "./LegendBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ScaleLegendDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScaleLegendDescription, _super);
    function ScaleLegendDescription() {
        return _super.call(this) || this;
    }
    ScaleLegendDescription.prototype.get_type = function () {
        return "ScaleLegend";
    };
    ScaleLegendDescription.$t = markType(ScaleLegendDescription, 'ScaleLegendDescription', LegendBaseDescription.$);
    return ScaleLegendDescription;
}(LegendBaseDescription));
export { ScaleLegendDescription };
//# sourceMappingURL=ScaleLegendDescription.js.map
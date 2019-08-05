/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ScatterSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterSeriesDescription, _super);
    function ScatterSeriesDescription() {
        return _super.call(this) || this;
    }
    ScatterSeriesDescription.prototype.get_type = function () {
        return "ScatterSeries";
    };
    ScatterSeriesDescription.$t = markType(ScatterSeriesDescription, 'ScatterSeriesDescription', ScatterBaseDescription.$);
    return ScatterSeriesDescription;
}(ScatterBaseDescription));
export { ScatterSeriesDescription };
//# sourceMappingURL=ScatterSeriesDescription.js.map
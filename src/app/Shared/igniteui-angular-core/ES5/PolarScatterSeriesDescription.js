/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PolarBaseDescription } from "./PolarBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PolarScatterSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PolarScatterSeriesDescription, _super);
    function PolarScatterSeriesDescription() {
        return _super.call(this) || this;
    }
    PolarScatterSeriesDescription.prototype.get_type = function () {
        return "PolarScatterSeries";
    };
    PolarScatterSeriesDescription.$t = markType(PolarScatterSeriesDescription, 'PolarScatterSeriesDescription', PolarBaseDescription.$);
    return PolarScatterSeriesDescription;
}(PolarBaseDescription));
export { PolarScatterSeriesDescription };
//# sourceMappingURL=PolarScatterSeriesDescription.js.map
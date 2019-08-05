/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { StepLineSeriesDescription } from "./StepLineSeriesDescription";
/**
 * @hidden
 */
var StepLineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StepLineSeriesDescriptionMetadata, _super);
    function StepLineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepLineSeriesDescriptionMetadata.b = function (a) {
        if (StepLineSeriesDescriptionMetadata.a == null) {
            StepLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StepLineSeriesDescriptionMetadata.c(a, StepLineSeriesDescriptionMetadata.a);
        }
    };
    StepLineSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    };
    StepLineSeriesDescriptionMetadata.d = function (a) {
        StepLineSeriesDescriptionMetadata.b(a);
        a.n("StepLineSeries", function () { return new StepLineSeriesDescription(); });
        a.m("StepLineSeries", StepLineSeriesDescriptionMetadata.a);
    };
    StepLineSeriesDescriptionMetadata.$t = markType(StepLineSeriesDescriptionMetadata, 'StepLineSeriesDescriptionMetadata');
    StepLineSeriesDescriptionMetadata.a = null;
    return StepLineSeriesDescriptionMetadata;
}(Base));
export { StepLineSeriesDescriptionMetadata };
//# sourceMappingURL=StepLineSeriesDescriptionMetadata.js.map
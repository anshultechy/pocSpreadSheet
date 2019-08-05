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
import { StepAreaSeriesDescription } from "./StepAreaSeriesDescription";
/**
 * @hidden
 */
var StepAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StepAreaSeriesDescriptionMetadata, _super);
    function StepAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepAreaSeriesDescriptionMetadata.b = function (a) {
        if (StepAreaSeriesDescriptionMetadata.a == null) {
            StepAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StepAreaSeriesDescriptionMetadata.c(a, StepAreaSeriesDescriptionMetadata.a);
        }
    };
    StepAreaSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    };
    StepAreaSeriesDescriptionMetadata.d = function (a) {
        StepAreaSeriesDescriptionMetadata.b(a);
        a.n("StepAreaSeries", function () { return new StepAreaSeriesDescription(); });
        a.m("StepAreaSeries", StepAreaSeriesDescriptionMetadata.a);
    };
    StepAreaSeriesDescriptionMetadata.$t = markType(StepAreaSeriesDescriptionMetadata, 'StepAreaSeriesDescriptionMetadata');
    StepAreaSeriesDescriptionMetadata.a = null;
    return StepAreaSeriesDescriptionMetadata;
}(Base));
export { StepAreaSeriesDescriptionMetadata };
//# sourceMappingURL=StepAreaSeriesDescriptionMetadata.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalRangeCategorySeriesDescriptionMetadata } from "./HorizontalRangeCategorySeriesDescriptionMetadata";
import { RangeAreaSeriesDescription } from "./RangeAreaSeriesDescription";
/**
 * @hidden
 */
var RangeAreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RangeAreaSeriesDescriptionMetadata, _super);
    function RangeAreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeAreaSeriesDescriptionMetadata.b = function (a) {
        if (RangeAreaSeriesDescriptionMetadata.a == null) {
            RangeAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RangeAreaSeriesDescriptionMetadata.c(a, RangeAreaSeriesDescriptionMetadata.a);
        }
    };
    RangeAreaSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalRangeCategorySeriesDescriptionMetadata.c(a, b);
    };
    RangeAreaSeriesDescriptionMetadata.d = function (a) {
        RangeAreaSeriesDescriptionMetadata.b(a);
        a.n("RangeAreaSeries", function () { return new RangeAreaSeriesDescription(); });
        a.m("RangeAreaSeries", RangeAreaSeriesDescriptionMetadata.a);
    };
    RangeAreaSeriesDescriptionMetadata.$t = markType(RangeAreaSeriesDescriptionMetadata, 'RangeAreaSeriesDescriptionMetadata');
    RangeAreaSeriesDescriptionMetadata.a = null;
    return RangeAreaSeriesDescriptionMetadata;
}(Base));
export { RangeAreaSeriesDescriptionMetadata };
//# sourceMappingURL=RangeAreaSeriesDescriptionMetadata.js.map
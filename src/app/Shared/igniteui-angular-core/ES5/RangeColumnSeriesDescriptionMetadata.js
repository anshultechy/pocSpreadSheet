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
import { RangeColumnSeriesDescription } from "./RangeColumnSeriesDescription";
/**
 * @hidden
 */
var RangeColumnSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RangeColumnSeriesDescriptionMetadata, _super);
    function RangeColumnSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeColumnSeriesDescriptionMetadata.b = function (a) {
        if (RangeColumnSeriesDescriptionMetadata.a == null) {
            RangeColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RangeColumnSeriesDescriptionMetadata.c(a, RangeColumnSeriesDescriptionMetadata.a);
        }
    };
    RangeColumnSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalRangeCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    RangeColumnSeriesDescriptionMetadata.d = function (a) {
        RangeColumnSeriesDescriptionMetadata.b(a);
        a.n("RangeColumnSeries", function () { return new RangeColumnSeriesDescription(); });
        a.m("RangeColumnSeries", RangeColumnSeriesDescriptionMetadata.a);
    };
    RangeColumnSeriesDescriptionMetadata.$t = markType(RangeColumnSeriesDescriptionMetadata, 'RangeColumnSeriesDescriptionMetadata');
    RangeColumnSeriesDescriptionMetadata.a = null;
    return RangeColumnSeriesDescriptionMetadata;
}(Base));
export { RangeColumnSeriesDescriptionMetadata };
//# sourceMappingURL=RangeColumnSeriesDescriptionMetadata.js.map
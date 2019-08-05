/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { VerticalAnchoredCategorySeriesDescriptionMetadata } from "./VerticalAnchoredCategorySeriesDescriptionMetadata";
import { BarSeriesDescription } from "./BarSeriesDescription";
/**
 * @hidden
 */
var BarSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BarSeriesDescriptionMetadata, _super);
    function BarSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarSeriesDescriptionMetadata.b = function (a) {
        if (BarSeriesDescriptionMetadata.a == null) {
            BarSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BarSeriesDescriptionMetadata.c(a, BarSeriesDescriptionMetadata.a);
        }
    };
    BarSeriesDescriptionMetadata.c = function (a, b) {
        VerticalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    BarSeriesDescriptionMetadata.d = function (a) {
        BarSeriesDescriptionMetadata.b(a);
        a.n("BarSeries", function () { return new BarSeriesDescription(); });
        a.m("BarSeries", BarSeriesDescriptionMetadata.a);
    };
    BarSeriesDescriptionMetadata.$t = markType(BarSeriesDescriptionMetadata, 'BarSeriesDescriptionMetadata');
    BarSeriesDescriptionMetadata.a = null;
    return BarSeriesDescriptionMetadata;
}(Base));
export { BarSeriesDescriptionMetadata };
//# sourceMappingURL=BarSeriesDescriptionMetadata.js.map
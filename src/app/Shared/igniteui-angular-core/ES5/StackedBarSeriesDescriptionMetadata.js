/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { VerticalStackedSeriesBaseDescriptionMetadata } from "./VerticalStackedSeriesBaseDescriptionMetadata";
import { StackedBarSeriesDescription } from "./StackedBarSeriesDescription";
/**
 * @hidden
 */
var StackedBarSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StackedBarSeriesDescriptionMetadata, _super);
    function StackedBarSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedBarSeriesDescriptionMetadata.b = function (a) {
        if (StackedBarSeriesDescriptionMetadata.a == null) {
            StackedBarSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedBarSeriesDescriptionMetadata.c(a, StackedBarSeriesDescriptionMetadata.a);
        }
    };
    StackedBarSeriesDescriptionMetadata.c = function (a, b) {
        VerticalStackedSeriesBaseDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    StackedBarSeriesDescriptionMetadata.d = function (a) {
        StackedBarSeriesDescriptionMetadata.b(a);
        a.n("StackedBarSeries", function () { return new StackedBarSeriesDescription(); });
        a.m("StackedBarSeries", StackedBarSeriesDescriptionMetadata.a);
    };
    StackedBarSeriesDescriptionMetadata.$t = markType(StackedBarSeriesDescriptionMetadata, 'StackedBarSeriesDescriptionMetadata');
    StackedBarSeriesDescriptionMetadata.a = null;
    return StackedBarSeriesDescriptionMetadata;
}(Base));
export { StackedBarSeriesDescriptionMetadata };
//# sourceMappingURL=StackedBarSeriesDescriptionMetadata.js.map
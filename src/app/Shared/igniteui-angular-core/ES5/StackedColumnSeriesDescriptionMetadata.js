/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalStackedSeriesBaseDescriptionMetadata } from "./HorizontalStackedSeriesBaseDescriptionMetadata";
import { StackedColumnSeriesDescription } from "./StackedColumnSeriesDescription";
/**
 * @hidden
 */
var StackedColumnSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StackedColumnSeriesDescriptionMetadata, _super);
    function StackedColumnSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedColumnSeriesDescriptionMetadata.b = function (a) {
        if (StackedColumnSeriesDescriptionMetadata.a == null) {
            StackedColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedColumnSeriesDescriptionMetadata.c(a, StackedColumnSeriesDescriptionMetadata.a);
        }
    };
    StackedColumnSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalStackedSeriesBaseDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    StackedColumnSeriesDescriptionMetadata.d = function (a) {
        StackedColumnSeriesDescriptionMetadata.b(a);
        a.n("StackedColumnSeries", function () { return new StackedColumnSeriesDescription(); });
        a.m("StackedColumnSeries", StackedColumnSeriesDescriptionMetadata.a);
    };
    StackedColumnSeriesDescriptionMetadata.$t = markType(StackedColumnSeriesDescriptionMetadata, 'StackedColumnSeriesDescriptionMetadata');
    StackedColumnSeriesDescriptionMetadata.a = null;
    return StackedColumnSeriesDescriptionMetadata;
}(Base));
export { StackedColumnSeriesDescriptionMetadata };
//# sourceMappingURL=StackedColumnSeriesDescriptionMetadata.js.map
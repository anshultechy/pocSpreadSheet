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
import { StackedLineSeriesDescription } from "./StackedLineSeriesDescription";
/**
 * @hidden
 */
var StackedLineSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StackedLineSeriesDescriptionMetadata, _super);
    function StackedLineSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedLineSeriesDescriptionMetadata.b = function (a) {
        if (StackedLineSeriesDescriptionMetadata.a == null) {
            StackedLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedLineSeriesDescriptionMetadata.c(a, StackedLineSeriesDescriptionMetadata.a);
        }
    };
    StackedLineSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalStackedSeriesBaseDescriptionMetadata.c(a, b);
    };
    StackedLineSeriesDescriptionMetadata.d = function (a) {
        StackedLineSeriesDescriptionMetadata.b(a);
        a.n("StackedLineSeries", function () { return new StackedLineSeriesDescription(); });
        a.m("StackedLineSeries", StackedLineSeriesDescriptionMetadata.a);
    };
    StackedLineSeriesDescriptionMetadata.$t = markType(StackedLineSeriesDescriptionMetadata, 'StackedLineSeriesDescriptionMetadata');
    StackedLineSeriesDescriptionMetadata.a = null;
    return StackedLineSeriesDescriptionMetadata;
}(Base));
export { StackedLineSeriesDescriptionMetadata };
//# sourceMappingURL=StackedLineSeriesDescriptionMetadata.js.map
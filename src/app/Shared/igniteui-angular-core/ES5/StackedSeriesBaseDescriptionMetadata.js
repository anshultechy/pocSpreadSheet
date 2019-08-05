/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSeriesCreatedEventArgsDescriptionMetadata } from "./StackedSeriesCreatedEventArgsDescriptionMetadata";
import { CategorySeriesDescriptionMetadata } from "./CategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
var StackedSeriesBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSeriesBaseDescriptionMetadata, _super);
    function StackedSeriesBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedSeriesBaseDescriptionMetadata.b = function (a) {
        if (StackedSeriesBaseDescriptionMetadata.a == null) {
            StackedSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedSeriesBaseDescriptionMetadata.c(a, StackedSeriesBaseDescriptionMetadata.a);
            StackedSeriesCreatedEventArgsDescriptionMetadata.d(a);
        }
    };
    StackedSeriesBaseDescriptionMetadata.c = function (a, b) {
        CategorySeriesDescriptionMetadata.c(a, b);
        b.item("AutoGenerateSeries", "Boolean");
        b.item("ReverseLegendOrder", "Boolean");
        b.item("SeriesCreatedRef", "EventRef::seriesCreated");
        StackedSeriesBaseDescriptionMetadata.e(a, b);
    };
    StackedSeriesBaseDescriptionMetadata.d = function (a) {
        StackedSeriesBaseDescriptionMetadata.b(a);
        a.m("StackedSeriesBase", StackedSeriesBaseDescriptionMetadata.a);
    };
    StackedSeriesBaseDescriptionMetadata.e = function (a, b) {
        b.item("Series", "Collection:StackedFragmentSeries:StackedSeriesCollection:StackedFragmentSeries");
    };
    StackedSeriesBaseDescriptionMetadata.$t = markType(StackedSeriesBaseDescriptionMetadata, 'StackedSeriesBaseDescriptionMetadata');
    StackedSeriesBaseDescriptionMetadata.a = null;
    return StackedSeriesBaseDescriptionMetadata;
}(Base));
export { StackedSeriesBaseDescriptionMetadata };
//# sourceMappingURL=StackedSeriesBaseDescriptionMetadata.js.map
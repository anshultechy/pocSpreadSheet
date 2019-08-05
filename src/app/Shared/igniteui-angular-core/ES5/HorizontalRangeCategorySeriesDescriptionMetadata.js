/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RangeCategorySeriesDescriptionMetadata } from "./RangeCategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
var HorizontalRangeCategorySeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalRangeCategorySeriesDescriptionMetadata, _super);
    function HorizontalRangeCategorySeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalRangeCategorySeriesDescriptionMetadata.b = function (a) {
        if (HorizontalRangeCategorySeriesDescriptionMetadata.a == null) {
            HorizontalRangeCategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HorizontalRangeCategorySeriesDescriptionMetadata.c(a, HorizontalRangeCategorySeriesDescriptionMetadata.a);
        }
    };
    HorizontalRangeCategorySeriesDescriptionMetadata.c = function (a, b) {
        RangeCategorySeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
    };
    HorizontalRangeCategorySeriesDescriptionMetadata.d = function (a) {
        HorizontalRangeCategorySeriesDescriptionMetadata.b(a);
        a.m("HorizontalRangeCategorySeries", HorizontalRangeCategorySeriesDescriptionMetadata.a);
    };
    HorizontalRangeCategorySeriesDescriptionMetadata.$t = markType(HorizontalRangeCategorySeriesDescriptionMetadata, 'HorizontalRangeCategorySeriesDescriptionMetadata');
    HorizontalRangeCategorySeriesDescriptionMetadata.a = null;
    return HorizontalRangeCategorySeriesDescriptionMetadata;
}(Base));
export { HorizontalRangeCategorySeriesDescriptionMetadata };
//# sourceMappingURL=HorizontalRangeCategorySeriesDescriptionMetadata.js.map
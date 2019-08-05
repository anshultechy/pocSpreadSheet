/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredCategorySeriesDescriptionMetadata } from "./AnchoredCategorySeriesDescriptionMetadata";
/**
 * @hidden
 */
var HorizontalAnchoredCategorySeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalAnchoredCategorySeriesDescriptionMetadata, _super);
    function HorizontalAnchoredCategorySeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalAnchoredCategorySeriesDescriptionMetadata.b = function (a) {
        if (HorizontalAnchoredCategorySeriesDescriptionMetadata.a == null) {
            HorizontalAnchoredCategorySeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, HorizontalAnchoredCategorySeriesDescriptionMetadata.a);
        }
    };
    HorizontalAnchoredCategorySeriesDescriptionMetadata.c = function (a, b) {
        AnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
    };
    HorizontalAnchoredCategorySeriesDescriptionMetadata.d = function (a) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.b(a);
        a.m("HorizontalAnchoredCategorySeries", HorizontalAnchoredCategorySeriesDescriptionMetadata.a);
    };
    HorizontalAnchoredCategorySeriesDescriptionMetadata.$t = markType(HorizontalAnchoredCategorySeriesDescriptionMetadata, 'HorizontalAnchoredCategorySeriesDescriptionMetadata');
    HorizontalAnchoredCategorySeriesDescriptionMetadata.a = null;
    return HorizontalAnchoredCategorySeriesDescriptionMetadata;
}(Base));
export { HorizontalAnchoredCategorySeriesDescriptionMetadata };
//# sourceMappingURL=HorizontalAnchoredCategorySeriesDescriptionMetadata.js.map
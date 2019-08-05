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
import { WaterfallSeriesDescription } from "./WaterfallSeriesDescription";
/**
 * @hidden
 */
var WaterfallSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(WaterfallSeriesDescriptionMetadata, _super);
    function WaterfallSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterfallSeriesDescriptionMetadata.b = function (a) {
        if (WaterfallSeriesDescriptionMetadata.a == null) {
            WaterfallSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            WaterfallSeriesDescriptionMetadata.c(a, WaterfallSeriesDescriptionMetadata.a);
        }
    };
    WaterfallSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("NegativeBrush", "Brush");
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
        b.item("NegativeOutline", "Brush");
    };
    WaterfallSeriesDescriptionMetadata.d = function (a) {
        WaterfallSeriesDescriptionMetadata.b(a);
        a.n("WaterfallSeries", function () { return new WaterfallSeriesDescription(); });
        a.m("WaterfallSeries", WaterfallSeriesDescriptionMetadata.a);
    };
    WaterfallSeriesDescriptionMetadata.$t = markType(WaterfallSeriesDescriptionMetadata, 'WaterfallSeriesDescriptionMetadata');
    WaterfallSeriesDescriptionMetadata.a = null;
    return WaterfallSeriesDescriptionMetadata;
}(Base));
export { WaterfallSeriesDescriptionMetadata };
//# sourceMappingURL=WaterfallSeriesDescriptionMetadata.js.map
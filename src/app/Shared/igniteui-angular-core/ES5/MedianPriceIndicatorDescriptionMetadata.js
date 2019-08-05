/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ItemwiseStrategyBasedIndicatorDescriptionMetadata } from "./ItemwiseStrategyBasedIndicatorDescriptionMetadata";
import { MedianPriceIndicatorDescription } from "./MedianPriceIndicatorDescription";
/**
 * @hidden
 */
var MedianPriceIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(MedianPriceIndicatorDescriptionMetadata, _super);
    function MedianPriceIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MedianPriceIndicatorDescriptionMetadata.b = function (a) {
        if (MedianPriceIndicatorDescriptionMetadata.a == null) {
            MedianPriceIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MedianPriceIndicatorDescriptionMetadata.c(a, MedianPriceIndicatorDescriptionMetadata.a);
        }
    };
    MedianPriceIndicatorDescriptionMetadata.c = function (a, b) {
        ItemwiseStrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    MedianPriceIndicatorDescriptionMetadata.d = function (a) {
        MedianPriceIndicatorDescriptionMetadata.b(a);
        a.n("MedianPriceIndicator", function () { return new MedianPriceIndicatorDescription(); });
        a.m("MedianPriceIndicator", MedianPriceIndicatorDescriptionMetadata.a);
    };
    MedianPriceIndicatorDescriptionMetadata.$t = markType(MedianPriceIndicatorDescriptionMetadata, 'MedianPriceIndicatorDescriptionMetadata');
    MedianPriceIndicatorDescriptionMetadata.a = null;
    return MedianPriceIndicatorDescriptionMetadata;
}(Base));
export { MedianPriceIndicatorDescriptionMetadata };
//# sourceMappingURL=MedianPriceIndicatorDescriptionMetadata.js.map
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
import { PointSeriesDescription } from "./PointSeriesDescription";
/**
 * @hidden
 */
var PointSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PointSeriesDescriptionMetadata, _super);
    function PointSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointSeriesDescriptionMetadata.b = function (a) {
        if (PointSeriesDescriptionMetadata.a == null) {
            PointSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PointSeriesDescriptionMetadata.c(a, PointSeriesDescriptionMetadata.a);
        }
    };
    PointSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    };
    PointSeriesDescriptionMetadata.d = function (a) {
        PointSeriesDescriptionMetadata.b(a);
        a.n("PointSeries", function () { return new PointSeriesDescription(); });
        a.m("PointSeries", PointSeriesDescriptionMetadata.a);
    };
    PointSeriesDescriptionMetadata.$t = markType(PointSeriesDescriptionMetadata, 'PointSeriesDescriptionMetadata');
    PointSeriesDescriptionMetadata.a = null;
    return PointSeriesDescriptionMetadata;
}(Base));
export { PointSeriesDescriptionMetadata };
//# sourceMappingURL=PointSeriesDescriptionMetadata.js.map
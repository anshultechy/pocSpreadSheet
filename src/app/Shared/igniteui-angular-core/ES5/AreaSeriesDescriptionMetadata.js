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
import { AreaSeriesDescription } from "./AreaSeriesDescription";
/**
 * @hidden
 */
var AreaSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AreaSeriesDescriptionMetadata, _super);
    function AreaSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AreaSeriesDescriptionMetadata.b = function (a) {
        if (AreaSeriesDescriptionMetadata.a == null) {
            AreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AreaSeriesDescriptionMetadata.c(a, AreaSeriesDescriptionMetadata.a);
        }
    };
    AreaSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    };
    AreaSeriesDescriptionMetadata.d = function (a) {
        AreaSeriesDescriptionMetadata.b(a);
        a.n("AreaSeries", function () { return new AreaSeriesDescription(); });
        a.m("AreaSeries", AreaSeriesDescriptionMetadata.a);
    };
    AreaSeriesDescriptionMetadata.$t = markType(AreaSeriesDescriptionMetadata, 'AreaSeriesDescriptionMetadata');
    AreaSeriesDescriptionMetadata.a = null;
    return AreaSeriesDescriptionMetadata;
}(Base));
export { AreaSeriesDescriptionMetadata };
//# sourceMappingURL=AreaSeriesDescriptionMetadata.js.map
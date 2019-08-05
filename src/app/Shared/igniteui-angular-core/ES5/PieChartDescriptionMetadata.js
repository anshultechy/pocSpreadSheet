/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PieChartBaseDescriptionMetadata } from "./PieChartBaseDescriptionMetadata";
import { PieChartDescription } from "./PieChartDescription";
/**
 * @hidden
 */
var PieChartDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartDescriptionMetadata, _super);
    function PieChartDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieChartDescriptionMetadata.e = function (a, b) {
        b.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamPieChart");
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
        b.item("LegendRef", "(w:Legend)DataRef:String");
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
    };
    PieChartDescriptionMetadata.b = function (a) {
        if (PieChartDescriptionMetadata.a == null) {
            PieChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieChartDescriptionMetadata.c(a, PieChartDescriptionMetadata.a);
        }
    };
    PieChartDescriptionMetadata.c = function (a, b) {
        PieChartBaseDescriptionMetadata.c(a, b);
        PieChartDescriptionMetadata.e(a, b);
    };
    PieChartDescriptionMetadata.d = function (a) {
        PieChartDescriptionMetadata.b(a);
        a.n("PieChart", function () { return new PieChartDescription(); });
        a.m("PieChart", PieChartDescriptionMetadata.a);
    };
    PieChartDescriptionMetadata.$t = markType(PieChartDescriptionMetadata, 'PieChartDescriptionMetadata');
    PieChartDescriptionMetadata.a = null;
    return PieChartDescriptionMetadata;
}(Base));
export { PieChartDescriptionMetadata };
//# sourceMappingURL=PieChartDescriptionMetadata.js.map
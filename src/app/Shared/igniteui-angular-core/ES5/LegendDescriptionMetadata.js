/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { LegendDescription } from "./LegendDescription";
/**
 * @hidden
 */
var LegendDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LegendDescriptionMetadata, _super);
    function LegendDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegendDescriptionMetadata.e = function (a, b) {
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
    };
    LegendDescriptionMetadata.b = function (a) {
        if (LegendDescriptionMetadata.a == null) {
            LegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendDescriptionMetadata.c(a, LegendDescriptionMetadata.a);
        }
    };
    LegendDescriptionMetadata.c = function (a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
        b.item("Orientation", "ExportedType:string:LegendOrientation");
        b.item("TextColor", "String");
        b.item("TextStyle", "String");
        LegendDescriptionMetadata.e(a, b);
    };
    LegendDescriptionMetadata.d = function (a) {
        LegendDescriptionMetadata.b(a);
        a.n("Legend", function () { return new LegendDescription(); });
        a.m("Legend", LegendDescriptionMetadata.a);
    };
    LegendDescriptionMetadata.$t = markType(LegendDescriptionMetadata, 'LegendDescriptionMetadata');
    LegendDescriptionMetadata.a = null;
    return LegendDescriptionMetadata;
}(Base));
export { LegendDescriptionMetadata };
//# sourceMappingURL=LegendDescriptionMetadata.js.map
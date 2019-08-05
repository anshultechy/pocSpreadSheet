/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescription } from "./CustomPaletteColorScaleDescription";
/**
 * @hidden
 */
var CustomPaletteColorScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CustomPaletteColorScaleDescriptionMetadata, _super);
    function CustomPaletteColorScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPaletteColorScaleDescriptionMetadata.b = function (a) {
        if (CustomPaletteColorScaleDescriptionMetadata.a == null) {
            CustomPaletteColorScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomPaletteColorScaleDescriptionMetadata.c(a, CustomPaletteColorScaleDescriptionMetadata.a);
        }
    };
    CustomPaletteColorScaleDescriptionMetadata.c = function (a, b) {
        ColorScaleDescriptionMetadata.c(a, b);
        b.item("MinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("Palette", "ColorCollection:string");
        b.item("InterpolationMode", "ExportedType:string:ColorScaleInterpolationMode");
    };
    CustomPaletteColorScaleDescriptionMetadata.d = function (a) {
        CustomPaletteColorScaleDescriptionMetadata.b(a);
        a.n("CustomPaletteColorScale", function () { return new CustomPaletteColorScaleDescription(); });
        a.m("CustomPaletteColorScale", CustomPaletteColorScaleDescriptionMetadata.a);
    };
    CustomPaletteColorScaleDescriptionMetadata.$t = markType(CustomPaletteColorScaleDescriptionMetadata, 'CustomPaletteColorScaleDescriptionMetadata');
    CustomPaletteColorScaleDescriptionMetadata.a = null;
    return CustomPaletteColorScaleDescriptionMetadata;
}(Base));
export { CustomPaletteColorScaleDescriptionMetadata };
//# sourceMappingURL=CustomPaletteColorScaleDescriptionMetadata.js.map
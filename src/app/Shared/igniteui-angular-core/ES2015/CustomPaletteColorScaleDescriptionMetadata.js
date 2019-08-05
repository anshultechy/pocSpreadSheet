/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescription } from "./CustomPaletteColorScaleDescription";
/**
 * @hidden
 */
export class CustomPaletteColorScaleDescriptionMetadata extends Base {
    static b(a) {
        if (CustomPaletteColorScaleDescriptionMetadata.a == null) {
            CustomPaletteColorScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomPaletteColorScaleDescriptionMetadata.c(a, CustomPaletteColorScaleDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ColorScaleDescriptionMetadata.c(a, b);
        b.item("MinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("Palette", "ColorCollection:string");
        b.item("InterpolationMode", "ExportedType:string:ColorScaleInterpolationMode");
    }
    static d(a) {
        CustomPaletteColorScaleDescriptionMetadata.b(a);
        a.n("CustomPaletteColorScale", () => new CustomPaletteColorScaleDescription());
        a.m("CustomPaletteColorScale", CustomPaletteColorScaleDescriptionMetadata.a);
    }
}
CustomPaletteColorScaleDescriptionMetadata.$t = markType(CustomPaletteColorScaleDescriptionMetadata, 'CustomPaletteColorScaleDescriptionMetadata');
CustomPaletteColorScaleDescriptionMetadata.a = null;
//# sourceMappingURL=CustomPaletteColorScaleDescriptionMetadata.js.map
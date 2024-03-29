/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { CustomPaletteBrushScaleDescription } from "./CustomPaletteBrushScaleDescription";
/**
 * @hidden
 */
export class CustomPaletteBrushScaleDescriptionMetadata extends Base {
    static b(a) {
        if (CustomPaletteBrushScaleDescriptionMetadata.a == null) {
            CustomPaletteBrushScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomPaletteBrushScaleDescriptionMetadata.c(a, CustomPaletteBrushScaleDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        BrushScaleDescriptionMetadata.c(a, b);
        b.item("BrushSelectionMode", "ExportedType:string:BrushSelectionMode");
    }
    static d(a) {
        CustomPaletteBrushScaleDescriptionMetadata.b(a);
        a.n("CustomPaletteBrushScale", () => new CustomPaletteBrushScaleDescription());
        a.m("CustomPaletteBrushScale", CustomPaletteBrushScaleDescriptionMetadata.a);
    }
}
CustomPaletteBrushScaleDescriptionMetadata.$t = markType(CustomPaletteBrushScaleDescriptionMetadata, 'CustomPaletteBrushScaleDescriptionMetadata');
CustomPaletteBrushScaleDescriptionMetadata.a = null;
//# sourceMappingURL=CustomPaletteBrushScaleDescriptionMetadata.js.map
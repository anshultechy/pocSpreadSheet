/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { CustomPaletteBrushScaleDescription } from "./CustomPaletteBrushScaleDescription";
/**
 * @hidden
 */
var CustomPaletteBrushScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CustomPaletteBrushScaleDescriptionMetadata, _super);
    function CustomPaletteBrushScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPaletteBrushScaleDescriptionMetadata.b = function (a) {
        if (CustomPaletteBrushScaleDescriptionMetadata.a == null) {
            CustomPaletteBrushScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomPaletteBrushScaleDescriptionMetadata.c(a, CustomPaletteBrushScaleDescriptionMetadata.a);
        }
    };
    CustomPaletteBrushScaleDescriptionMetadata.c = function (a, b) {
        BrushScaleDescriptionMetadata.c(a, b);
        b.item("BrushSelectionMode", "ExportedType:string:BrushSelectionMode");
    };
    CustomPaletteBrushScaleDescriptionMetadata.d = function (a) {
        CustomPaletteBrushScaleDescriptionMetadata.b(a);
        a.n("CustomPaletteBrushScale", function () { return new CustomPaletteBrushScaleDescription(); });
        a.m("CustomPaletteBrushScale", CustomPaletteBrushScaleDescriptionMetadata.a);
    };
    CustomPaletteBrushScaleDescriptionMetadata.$t = markType(CustomPaletteBrushScaleDescriptionMetadata, 'CustomPaletteBrushScaleDescriptionMetadata');
    CustomPaletteBrushScaleDescriptionMetadata.a = null;
    return CustomPaletteBrushScaleDescriptionMetadata;
}(Base));
export { CustomPaletteBrushScaleDescriptionMetadata };
//# sourceMappingURL=CustomPaletteBrushScaleDescriptionMetadata.js.map
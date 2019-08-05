/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var CellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CellInfoDescriptionMetadata, _super);
    function CellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellInfoDescriptionMetadata.b = function (a) {
        if (CellInfoDescriptionMetadata.a == null) {
            CellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CellInfoDescriptionMetadata.c(a, CellInfoDescriptionMetadata.a);
        }
    };
    CellInfoDescriptionMetadata.c = function (a, b) {
        b.item("StyleKey", "String");
        b.item("DataRow", "Number:int");
        b.item("IsPositionDirty", "Boolean");
        b.item("IsSizeDirty", "Boolean");
        b.item("IsContentDirty", "Boolean");
        b.item("IsLayerDirty", "Boolean");
        b.item("IsStateDirty", "Boolean");
        b.item("IsDataDirty", "Boolean");
        b.item("IsPlaceholdContentNeeded", "Boolean");
        b.item("ActionManager", "ExportedType");
        b.item("IsRowPinned", "Boolean");
        b.item("IsRowSticky", "Boolean");
        b.item("IsLastStickyRow", "Boolean");
        b.item("RowItemRef", "(w:RowItem,wf:RowItem)DataRef");
        b.item("X", "Number:double");
        b.item("Y", "Number:double");
        b.item("SnappedX", "Number:int");
        b.item("SnappedY", "Number:int");
        b.item("ContentOpacity", "Number:double");
        b.item("Opacity", "Number:double");
        b.item("ActualOpacity", "Number:double");
        b.item("Height", "Number:int");
        b.item("Width", "Number:int");
        b.item("IsSelected", "Boolean");
        b.item("SelectedStatus", "Number:double");
        b.item("HorizontalAlignment", "ExportedType:string:CellContentHorizontalAlignment");
        b.item("VerticalAlignment", "ExportedType:string:CellContentVerticalAlignment");
        b.item("Background", "Brush");
        b.item("Border", "Brush");
        b.item("ActualBackground", "Brush");
        b.item("ActualBorder", "Brush");
        b.item("SelectedBackground", "Brush");
        b.item("StickyRowBackground", "Brush");
        b.item("PinnedRowBackground", "Brush");
        b.item("LastStickyRowBackground", "Brush");
        b.item("PinnedRowOpacity", "Number:double");
        b.item("OriginalValueRef", "(w:OriginalValue,wf:OriginalValue)DataRef");
        b.item("RenderValue", "String");
        b.item("TextColor", "Brush");
        b.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:font/FontFamilyTransform)String");
        b.item("FontSize", "(w:FontSize,wf:FontSize,web:font/FontSizeTransform)Number:double");
        b.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontFamily/FontStyleTransform,web:font/FontStyleTransform)String");
        b.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontFamily/FontWeightTransform,web:font/FontWeightTransform)String");
        b.item("LineBreakMode", "ExportedType:string:TextCellLineBreakMode");
        b.item("VirtualizationPercentage", "Number:double");
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
        b.item("ActualPaddingLeft", "Number:int");
        b.item("ActualPaddingTop", "Number:int");
        b.item("ActualPaddingRight", "Number:int");
        b.item("ActualPaddingBottom", "Number:int");
        b.item("BorderLeftWidth", "Number:int");
        b.item("BorderTopWidth", "Number:int");
        b.item("BorderRightWidth", "Number:int");
        b.item("BorderBottomWidth", "Number:int");
        b.item("ActualBorderLeftWidth", "Number:int");
        b.item("ActualBorderTopWidth", "Number:int");
        b.item("ActualBorderRightWidth", "Number:int");
        b.item("ActualBorderBottomWidth", "Number:int");
        b.item("SortDirection", "ExportedType:string:ColumnSortDirection");
    };
    CellInfoDescriptionMetadata.d = function (a) {
        CellInfoDescriptionMetadata.b(a);
        a.m("CellInfo", CellInfoDescriptionMetadata.a);
    };
    CellInfoDescriptionMetadata.$t = markType(CellInfoDescriptionMetadata, 'CellInfoDescriptionMetadata');
    CellInfoDescriptionMetadata.a = null;
    return CellInfoDescriptionMetadata;
}(Base));
export { CellInfoDescriptionMetadata };
//# sourceMappingURL=CellInfoDescriptionMetadata.js.map
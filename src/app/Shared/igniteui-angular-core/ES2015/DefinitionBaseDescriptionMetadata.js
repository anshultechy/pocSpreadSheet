/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataBindingEventArgsDescriptionMetadata } from "./DataBindingEventArgsDescriptionMetadata";
import { CellStyleRequestedEventArgsDescriptionMetadata } from "./CellStyleRequestedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
export class DefinitionBaseDescriptionMetadata extends Base {
    static b(a) {
        if (DefinitionBaseDescriptionMetadata.a == null) {
            DefinitionBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DefinitionBaseDescriptionMetadata.c(a, DefinitionBaseDescriptionMetadata.a);
            DataBindingEventArgsDescriptionMetadata.d(a);
            CellStyleRequestedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Background", "Brush");
        b.item("Border", "Brush");
        b.item("ActualBorder", "Brush");
        b.item("BorderLeftWidth", "Number:int");
        b.item("BorderTopWidth", "Number:int");
        b.item("BorderRightWidth", "Number:int");
        b.item("BorderBottomWidth", "Number:int");
        b.item("ActualBackground", "Brush");
        b.item("StickyRowBackground", "Brush");
        b.item("ActualStickyRowBackground", "Brush");
        b.item("PinnedRowBackground", "Brush");
        b.item("ActualPinnedRowBackground", "Brush");
        b.item("LastStickyRowBackground", "Brush");
        b.item("ActualLastStickyRowBackground", "Brush");
        b.item("ContentOpacity", "Number:double");
        b.item("HorizontalAlignment", "ExportedType:string:CellContentHorizontalAlignment");
        b.item("VerticalAlignment", "ExportedType:string:CellContentVerticalAlignment");
        b.item("LineBreakMode", "ExportedType:string:TextCellLineBreakMode");
        b.item("ActualLineBreakMode", "ExportedType:string:TextCellLineBreakMode");
        b.item("TextColor", "Brush");
        b.item("ActualTextColor", "Brush");
        b.item("PinnedRowOpacity", "Number:double");
        b.item("ActualPinnedRowOpacity", "Number:double");
        b.item("FontFamily", "(w:FontFamily/FontFamilyTransform,wf:FontFamily,web:textStyle/FontFamilyTransform)String");
        b.item("FontSize", "(w:FontSize,wf:FontSize,web:textStyle/FontSizeTransform)Number:double");
        b.item("FontStyle", "(w:FontStyle/FontStyleTransform,wf:FontFamily/FontStyleTransform,web:textStyle/FontStyleTransform)String");
        b.item("FontWeight", "(w:FontWeight/FontWeightTransform,wf:FontFamily/FontWeightTransform,web:textStyle/FontWeightTransform)String");
        b.item("DataBindingRef", "EventRef::dataBinding");
        b.item("DataBoundRef", "EventRef::dataBound");
        b.item("CellStyleKeyRequestedRef", "EventRef::cellStyleKeyRequested");
    }
    static d(a) {
        DefinitionBaseDescriptionMetadata.b(a);
        a.m("DefinitionBase", DefinitionBaseDescriptionMetadata.a);
    }
}
DefinitionBaseDescriptionMetadata.$t = markType(DefinitionBaseDescriptionMetadata, 'DefinitionBaseDescriptionMetadata');
DefinitionBaseDescriptionMetadata.a = null;
//# sourceMappingURL=DefinitionBaseDescriptionMetadata.js.map
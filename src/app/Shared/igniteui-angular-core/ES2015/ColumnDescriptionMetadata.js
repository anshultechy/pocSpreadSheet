/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridColumnAnimationSettingsDescriptionMetadata } from "./GridColumnAnimationSettingsDescriptionMetadata";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
/**
 * @hidden
 */
export class ColumnDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnDescriptionMetadata.a == null) {
            ColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnDescriptionMetadata.c(a, ColumnDescriptionMetadata.a);
            GridColumnAnimationSettingsDescriptionMetadata.d(a);
            ColumnFilterConditionDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
        b.item("Name", "String");
        b.item("PropertyPath", "String");
        b.item("HeaderText", "String");
        b.item("ActualHeaderText", "String");
        b.item("SelectedBackground", "Brush");
        b.item("ActualSelectedBackground", "Brush");
        b.item("AnimationSettings", "ExportedType");
        b.item("MinWidth", "Number:double");
        b.item("IsFromMarkup", "Boolean");
        b.item("IsAutoGenerated", "Boolean");
        b.item("Filter", "ExportedType");
        b.item("IsFilteringEnabled", "Boolean");
        b.item("IsHidden", "Boolean");
        b.item("ShouldRemoveWhenHidden", "Boolean");
        b.item("SortDirection", "ExportedType:string:ColumnSortDirection");
    }
    static d(a) {
        ColumnDescriptionMetadata.b(a);
        a.m("Column", ColumnDescriptionMetadata.a);
    }
}
ColumnDescriptionMetadata.$t = markType(ColumnDescriptionMetadata, 'ColumnDescriptionMetadata');
ColumnDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnDescriptionMetadata.js.map
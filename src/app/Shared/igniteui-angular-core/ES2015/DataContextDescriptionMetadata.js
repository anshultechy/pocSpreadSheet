/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataContextDescription } from "./DataContextDescription";
/**
 * @hidden
 */
export class DataContextDescriptionMetadata extends Base {
    static b(a) {
        if (DataContextDescriptionMetadata.a == null) {
            DataContextDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataContextDescriptionMetadata.c(a, DataContextDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("ActualItemBrush", "Brush");
        b.item("Outline", "Brush");
        b.item("ItemLabelRef", "(w:ItemLabel,wf:ItemLabel)DataRef");
        b.item("ItemBrush", "Brush");
        b.item("Thickness", "Number:double");
        b.item("LegendLabelRef", "(w:LegendLabel,wf:LegendLabel)DataRef");
    }
    static d(a) {
        DataContextDescriptionMetadata.b(a);
        a.n("DataContext", () => new DataContextDescription());
        a.m("DataContext", DataContextDescriptionMetadata.a);
    }
}
DataContextDescriptionMetadata.$t = markType(DataContextDescriptionMetadata, 'DataContextDescriptionMetadata');
DataContextDescriptionMetadata.a = null;
//# sourceMappingURL=DataContextDescriptionMetadata.js.map
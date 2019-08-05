/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellStyleRequestedEventArgsDescription } from "./CellStyleRequestedEventArgsDescription";
/**
 * @hidden
 */
export class CellStyleRequestedEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CellStyleRequestedEventArgsDescriptionMetadata.a == null) {
            CellStyleRequestedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CellStyleRequestedEventArgsDescriptionMetadata.c(a, CellStyleRequestedEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("StyleKey", "String");
        b.item("ResolvedValueRef", "(w:ResolvedValue,wf:ResolvedValue)DataRef");
        b.item("RowNumber", "Number:int");
    }
    static d(a) {
        CellStyleRequestedEventArgsDescriptionMetadata.b(a);
        a.n("CellStyleRequestedEventArgs", () => new CellStyleRequestedEventArgsDescription());
        a.m("CellStyleRequestedEventArgs", CellStyleRequestedEventArgsDescriptionMetadata.a);
    }
}
CellStyleRequestedEventArgsDescriptionMetadata.$t = markType(CellStyleRequestedEventArgsDescriptionMetadata, 'CellStyleRequestedEventArgsDescriptionMetadata');
CellStyleRequestedEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CellStyleRequestedEventArgsDescriptionMetadata.js.map
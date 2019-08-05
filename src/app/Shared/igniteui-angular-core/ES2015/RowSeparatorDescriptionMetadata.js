/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { RowSeparatorDescription } from "./RowSeparatorDescription";
/**
 * @hidden
 */
export class RowSeparatorDescriptionMetadata extends Base {
    static b(a) {
        if (RowSeparatorDescriptionMetadata.a == null) {
            RowSeparatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RowSeparatorDescriptionMetadata.c(a, RowSeparatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        RowSeparatorDescriptionMetadata.b(a);
        a.n("RowSeparator", () => new RowSeparatorDescription());
        a.m("RowSeparator", RowSeparatorDescriptionMetadata.a);
    }
}
RowSeparatorDescriptionMetadata.$t = markType(RowSeparatorDescriptionMetadata, 'RowSeparatorDescriptionMetadata');
RowSeparatorDescriptionMetadata.a = null;
//# sourceMappingURL=RowSeparatorDescriptionMetadata.js.map
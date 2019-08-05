/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PrimaryKeyValueDescription } from "./PrimaryKeyValueDescription";
/**
 * @hidden
 */
export class PrimaryKeyValueDescriptionMetadata extends Base {
    static b(a) {
        if (PrimaryKeyValueDescriptionMetadata.a == null) {
            PrimaryKeyValueDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PrimaryKeyValueDescriptionMetadata.c(a, PrimaryKeyValueDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        PrimaryKeyValueDescriptionMetadata.b(a);
        a.n("PrimaryKeyValue", () => new PrimaryKeyValueDescription());
        a.m("PrimaryKeyValue", PrimaryKeyValueDescriptionMetadata.a);
    }
}
PrimaryKeyValueDescriptionMetadata.$t = markType(PrimaryKeyValueDescriptionMetadata, 'PrimaryKeyValueDescriptionMetadata');
PrimaryKeyValueDescriptionMetadata.a = null;
//# sourceMappingURL=PrimaryKeyValueDescriptionMetadata.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalculatedColumnDescription } from "./CalculatedColumnDescription";
/**
 * @hidden
 */
export class CalculatedColumnDescriptionMetadata extends Base {
    static b(a) {
        if (CalculatedColumnDescriptionMetadata.a == null) {
            CalculatedColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalculatedColumnDescriptionMetadata.c(a, CalculatedColumnDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        CalculatedColumnDescriptionMetadata.b(a);
        a.n("CalculatedColumn", () => new CalculatedColumnDescription());
        a.m("CalculatedColumn", CalculatedColumnDescriptionMetadata.a);
    }
}
CalculatedColumnDescriptionMetadata.$t = markType(CalculatedColumnDescriptionMetadata, 'CalculatedColumnDescriptionMetadata');
CalculatedColumnDescriptionMetadata.a = null;
//# sourceMappingURL=CalculatedColumnDescriptionMetadata.js.map
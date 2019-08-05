/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { RowSeparatorInfoDescription } from "./RowSeparatorInfoDescription";
/**
 * @hidden
 */
export class RowSeparatorInfoDescriptionMetadata extends Base {
    static b(a) {
        if (RowSeparatorInfoDescriptionMetadata.a == null) {
            RowSeparatorInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RowSeparatorInfoDescriptionMetadata.c(a, RowSeparatorInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
    }
    static d(a) {
        RowSeparatorInfoDescriptionMetadata.b(a);
        a.n("RowSeparatorInfo", () => new RowSeparatorInfoDescription());
        a.m("RowSeparatorInfo", RowSeparatorInfoDescriptionMetadata.a);
    }
}
RowSeparatorInfoDescriptionMetadata.$t = markType(RowSeparatorInfoDescriptionMetadata, 'RowSeparatorInfoDescriptionMetadata');
RowSeparatorInfoDescriptionMetadata.a = null;
//# sourceMappingURL=RowSeparatorInfoDescriptionMetadata.js.map
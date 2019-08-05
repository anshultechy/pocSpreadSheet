/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnExchangerDescription } from "./ColumnExchangerDescription";
/**
 * @hidden
 */
export class ColumnExchangerDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnExchangerDescriptionMetadata.a == null) {
            ColumnExchangerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnExchangerDescriptionMetadata.c(a, ColumnExchangerDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("TargetIndex", "Number:int");
    }
    static d(a) {
        ColumnExchangerDescriptionMetadata.b(a);
        a.n("ColumnExchanger", () => new ColumnExchangerDescription());
        a.m("ColumnExchanger", ColumnExchangerDescriptionMetadata.a);
    }
}
ColumnExchangerDescriptionMetadata.$t = markType(ColumnExchangerDescriptionMetadata, 'ColumnExchangerDescriptionMetadata');
ColumnExchangerDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnExchangerDescriptionMetadata.js.map
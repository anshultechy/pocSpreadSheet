/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialOverlayDescriptionMetadata } from "./FinancialOverlayDescriptionMetadata";
import { PriceChannelOverlayDescription } from "./PriceChannelOverlayDescription";
/**
 * @hidden
 */
export class PriceChannelOverlayDescriptionMetadata extends Base {
    static b(a) {
        if (PriceChannelOverlayDescriptionMetadata.a == null) {
            PriceChannelOverlayDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PriceChannelOverlayDescriptionMetadata.c(a, PriceChannelOverlayDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FinancialOverlayDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    }
    static d(a) {
        PriceChannelOverlayDescriptionMetadata.b(a);
        a.n("PriceChannelOverlay", () => new PriceChannelOverlayDescription());
        a.m("PriceChannelOverlay", PriceChannelOverlayDescriptionMetadata.a);
    }
}
PriceChannelOverlayDescriptionMetadata.$t = markType(PriceChannelOverlayDescriptionMetadata, 'PriceChannelOverlayDescriptionMetadata');
PriceChannelOverlayDescriptionMetadata.a = null;
//# sourceMappingURL=PriceChannelOverlayDescriptionMetadata.js.map
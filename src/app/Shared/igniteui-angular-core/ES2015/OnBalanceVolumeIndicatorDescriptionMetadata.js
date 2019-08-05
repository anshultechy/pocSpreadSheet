/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { OnBalanceVolumeIndicatorDescription } from "./OnBalanceVolumeIndicatorDescription";
/**
 * @hidden
 */
export class OnBalanceVolumeIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (OnBalanceVolumeIndicatorDescriptionMetadata.a == null) {
            OnBalanceVolumeIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            OnBalanceVolumeIndicatorDescriptionMetadata.c(a, OnBalanceVolumeIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        OnBalanceVolumeIndicatorDescriptionMetadata.b(a);
        a.n("OnBalanceVolumeIndicator", () => new OnBalanceVolumeIndicatorDescription());
        a.m("OnBalanceVolumeIndicator", OnBalanceVolumeIndicatorDescriptionMetadata.a);
    }
}
OnBalanceVolumeIndicatorDescriptionMetadata.$t = markType(OnBalanceVolumeIndicatorDescriptionMetadata, 'OnBalanceVolumeIndicatorDescriptionMetadata');
OnBalanceVolumeIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=OnBalanceVolumeIndicatorDescriptionMetadata.js.map
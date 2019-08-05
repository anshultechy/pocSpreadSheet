/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType, NotSupportedException } from "./type";
import { stringIsNullOrEmpty } from "./string";
import { stringFormat1 } from "./stringExtended";
/**
 * @hidden
 */
export class Localization extends Base {
    static register(a, b) {
        if (Localization.b == null) {
            Localization.b = {};
        }
        Localization.b[a] = b;
    }
    static c(a, b, ...c) {
        let d;
        if (Localization.a != null) {
            d = Localization.a(a, b);
        }
        else {
            let e = null;
            if (Localization.b != null) {
                e = Localization.b[a];
            }
            if (e != null) {
                d = (e[b]);
            }
            else {
                throw new NotSupportedException(1, "string override must be specified for localization");
            }
        }
        if (stringIsNullOrEmpty(d)) {
            d = "";
        }
        else if (c != null && c.length > 0) {
            d = stringFormat1(d, ...c);
        }
        return d;
    }
}
Localization.$t = markType(Localization, 'Localization');
Localization.a = null;
Localization.b = null;
//# sourceMappingURL=Localization.js.map
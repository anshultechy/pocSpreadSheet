/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { DataObject } from "../../igniteui-angular-core/ES2015/DataObject";
import { Clipboard } from "../../igniteui-angular-core/ES2015/Clipboard";
import { DataFormats } from "../../igniteui-angular-core/ES2015/DataFormats";
/**
 * @hidden
 */
export class ClipboardHelper extends Base {
    static d() {
        return new DataObject();
    }
    static e() {
        return Clipboard.c();
    }
    static c(a, b) {
        Clipboard.a(a, b);
        return true;
    }
    static b(a, b) {
        let c = ClipboardHelper.a(a, b, DataFormats.d);
        c = ClipboardHelper.a(a, b, DataFormats.a) || c;
        c = ClipboardHelper.a(a, b, DataFormats.b) || c;
        return c;
    }
    static a(a, b, c) {
        try {
            if (a.getDataPresent(c)) {
                b.setData(c, a.getData(c));
                return true;
            }
        }
        catch (d) {
        }
        return false;
    }
}
ClipboardHelper.$t = markType(ClipboardHelper, 'ClipboardHelper');
//# sourceMappingURL=ClipboardHelper.js.map

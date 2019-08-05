/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { DataObject } from "../../igniteui-angular-core/ES5/DataObject";
import { Clipboard } from "../../igniteui-angular-core/ES5/Clipboard";
import { DataFormats } from "../../igniteui-angular-core/ES5/DataFormats";
/**
 * @hidden
 */
var ClipboardHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ClipboardHelper, _super);
    function ClipboardHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardHelper.d = function () {
        return new DataObject();
    };
    ClipboardHelper.e = function () {
        return Clipboard.c();
    };
    ClipboardHelper.c = function (a, b) {
        Clipboard.a(a, b);
        return true;
    };
    ClipboardHelper.b = function (a, b) {
        var c = ClipboardHelper.a(a, b, DataFormats.d);
        c = ClipboardHelper.a(a, b, DataFormats.a) || c;
        c = ClipboardHelper.a(a, b, DataFormats.b) || c;
        return c;
    };
    ClipboardHelper.a = function (a, b, c) {
        try {
            if (a.getDataPresent(c)) {
                b.setData(c, a.getData(c));
                return true;
            }
        }
        catch (d) {
        }
        return false;
    };
    ClipboardHelper.$t = markType(ClipboardHelper, 'ClipboardHelper');
    return ClipboardHelper;
}(Base));
export { ClipboardHelper };
//# sourceMappingURL=ClipboardHelper.js.map

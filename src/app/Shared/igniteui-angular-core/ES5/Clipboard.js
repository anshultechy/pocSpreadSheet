/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var Clipboard = /** @class */ (function (_super) {
    tslib_1.__extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.c = function () {
        return Clipboard.b;
    };
    Clipboard.a = function (a, b) {
        if (b === void 0) { b = false; }
        Clipboard.b = a;
    };
    Clipboard.$t = markType(Clipboard, 'Clipboard');
    Clipboard.b = null;
    return Clipboard;
}(Base));
export { Clipboard };
//# sourceMappingURL=Clipboard.js.map
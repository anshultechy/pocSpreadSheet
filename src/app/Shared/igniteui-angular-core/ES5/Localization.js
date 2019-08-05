/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType, NotSupportedException } from "./type";
import { stringIsNullOrEmpty } from "./string";
import { stringFormat1 } from "./stringExtended";
/**
 * @hidden
 */
var Localization = /** @class */ (function (_super) {
    tslib_1.__extends(Localization, _super);
    function Localization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Localization.register = function (a, b) {
        if (Localization.b == null) {
            Localization.b = {};
        }
        Localization.b[a] = b;
    };
    Localization.c = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        var d;
        if (Localization.a != null) {
            d = Localization.a(a, b);
        }
        else {
            var e = null;
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
            d = stringFormat1.apply(void 0, tslib_1.__spread([d], c));
        }
        return d;
    };
    Localization.$t = markType(Localization, 'Localization');
    Localization.a = null;
    Localization.b = null;
    return Localization;
}(Base));
export { Localization };
//# sourceMappingURL=Localization.js.map
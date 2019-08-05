/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Type, markType } from "./type";
/**
 * @hidden
 */
var Activator = /** @class */ (function (_super) {
    tslib_1.__extends(Activator, _super);
    function Activator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activator.createInstance = function (a) {
        return null;
    };
    Activator.c = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        return null;
    };
    Activator.createInstance$1 = function ($t) {
        return Type.getDefaultValue($t);
    };
    Activator.$t = markType(Activator, 'Activator');
    return Activator;
}(Base));
export { Activator };
//# sourceMappingURL=Activator.js.map
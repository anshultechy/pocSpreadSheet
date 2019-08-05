/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
var AngleSimplifier = /** @class */ (function (_super) {
    tslib_1.__extends(AngleSimplifier, _super);
    function AngleSimplifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AngleSimplifier.a = function (a) {
        if (isNaN_(a) || isInfinity(a)) {
            return a;
        }
        while (a > 360) {
            a -= 360;
        }
        while (a < 0) {
            a += 360;
        }
        return a;
    };
    AngleSimplifier.$t = markType(AngleSimplifier, 'AngleSimplifier');
    return AngleSimplifier;
}(Base));
export { AngleSimplifier };
//# sourceMappingURL=AngleSimplifier.js.map
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
var Environment = /** @class */ (function (_super) {
    tslib_1.__extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Environment, "newLine", {
        get: function () {
            return "\n";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment, "b", {
        get: function () {
            try {
                throw new Error();
            }
            catch (a) {
                return (a.stack);
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Environment.$t = markType(Environment, 'Environment');
    return Environment;
}(Base));
export { Environment };
//# sourceMappingURL=Environment.js.map
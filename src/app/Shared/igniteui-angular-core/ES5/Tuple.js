/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Tuple$2 } from "./Tuple$2";
import { Tuple$3 } from "./Tuple$3";
/**
 * @hidden
 */
var Tuple = /** @class */ (function (_super) {
    tslib_1.__extends(Tuple, _super);
    function Tuple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tuple.a = function ($t1, $t2, a, b) {
        return new Tuple$2($t1, $t2, a, b);
    };
    Tuple.b = function ($t1, $t2, $t3, a, b, c) {
        return new Tuple$3($t1, $t2, $t3, a, b, c);
    };
    Tuple.$t = markType(Tuple, 'Tuple');
    return Tuple;
}(Base));
export { Tuple };
//# sourceMappingURL=Tuple.js.map
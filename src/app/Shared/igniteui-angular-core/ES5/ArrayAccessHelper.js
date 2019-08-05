/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, Array_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var ArrayAccessHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayAccessHelper, _super);
    function ArrayAccessHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayAccessHelper.b = function (values_) {
        var a = (Array.isArray(values_) ? values_ : null);
        return a;
    };
    ArrayAccessHelper.c = function (values_) {
        var a = (Array.isArray(values_) ? values_ : null);
        return a;
    };
    ArrayAccessHelper.a = function (a) {
        if (typeCast(List$1.$.specialize(Array_$type), a) !== null) {
            return a.asArray();
        }
        return null;
    };
    ArrayAccessHelper.$t = markType(ArrayAccessHelper, 'ArrayAccessHelper');
    return ArrayAccessHelper;
}(Base));
export { ArrayAccessHelper };
//# sourceMappingURL=ArrayAccessHelper.js.map
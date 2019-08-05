/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable_$type, markType, getEnumeratorObject } from "./type";
import { AbstractEnumerator } from "./AbstractEnumerator";
/**
 * @hidden
 */
var AbstractEnumerable = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractEnumerable, _super);
    function AbstractEnumerable(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    AbstractEnumerable.prototype.getEnumeratorObject = function () {
        return new AbstractEnumerator(getEnumeratorObject(this.a()));
    };
    AbstractEnumerable.$t = markType(AbstractEnumerable, 'AbstractEnumerable', Base.$, [IEnumerable_$type]);
    return AbstractEnumerable;
}(Base));
export { AbstractEnumerable };
//# sourceMappingURL=AbstractEnumerable.js.map
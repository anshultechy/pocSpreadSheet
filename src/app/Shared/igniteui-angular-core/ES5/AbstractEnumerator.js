/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator_$type, markType } from "./type";
/**
 * @hidden
 */
var AbstractEnumerator = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractEnumerator, _super);
    function AbstractEnumerator(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    Object.defineProperty(AbstractEnumerator.prototype, "currentObject", {
        get: function () {
            return this.a.currentObject;
        },
        enumerable: true,
        configurable: true
    });
    AbstractEnumerator.prototype.moveNext = function () {
        return this.a.moveNext();
    };
    AbstractEnumerator.prototype.reset = function () {
        this.a.reset();
    };
    AbstractEnumerator.$t = markType(AbstractEnumerator, 'AbstractEnumerator', Base.$, [IEnumerator_$type]);
    return AbstractEnumerator;
}(Base));
export { AbstractEnumerator };
//# sourceMappingURL=AbstractEnumerator.js.map
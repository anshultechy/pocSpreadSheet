/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, getBoxIfEnum, markType } from "./type";
/**
 * @hidden
 */
var GenericEnumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(GenericEnumerator$1, _super);
    function GenericEnumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a;
        return _this;
    }
    Object.defineProperty(GenericEnumerator$1.prototype, "current", {
        get: function () {
            return this.a.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericEnumerator$1.prototype, "currentObject", {
        get: function () {
            return getBoxIfEnum(this.$t, this.a.current);
        },
        enumerable: true,
        configurable: true
    });
    GenericEnumerator$1.prototype.moveNext = function () {
        return this.a.moveNext();
    };
    GenericEnumerator$1.prototype.reset = function () {
        this.a.reset();
    };
    GenericEnumerator$1.prototype.dispose = function () {
    };
    GenericEnumerator$1.$t = markType(GenericEnumerator$1, 'GenericEnumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return GenericEnumerator$1;
}(Base));
export { GenericEnumerator$1 };
//# sourceMappingURL=GenericEnumerator$1.js.map
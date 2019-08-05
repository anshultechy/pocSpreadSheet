/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, typeCastObjTo$t, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
var ReverseArrayEnumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ReverseArrayEnumerator$1, _super);
    function ReverseArrayEnumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.b = 0;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a;
        _this.b = a.count;
        return _this;
    }
    Object.defineProperty(ReverseArrayEnumerator$1.prototype, "current", {
        get: function () {
            return typeCastObjTo$t(this.$t, this.a.item(this.b));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReverseArrayEnumerator$1.prototype, "currentObject", {
        get: function () {
            return this.a.item(this.b);
        },
        enumerable: true,
        configurable: true
    });
    ReverseArrayEnumerator$1.prototype.moveNext = function () {
        this.b--;
        return this.b >= 0;
    };
    ReverseArrayEnumerator$1.prototype.reset = function () {
        this.b = this.a.count;
    };
    ReverseArrayEnumerator$1.prototype.dispose = function () {
        throw new NotImplementedException(0);
    };
    ReverseArrayEnumerator$1.$t = markType(ReverseArrayEnumerator$1, 'ReverseArrayEnumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return ReverseArrayEnumerator$1;
}(Base));
export { ReverseArrayEnumerator$1 };
//# sourceMappingURL=ReverseArrayEnumerator$1.js.map
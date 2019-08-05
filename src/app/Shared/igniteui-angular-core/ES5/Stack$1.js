/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, Type, getBoxIfEnum, typeCastObjTo$t, markType } from "./type";
import { arrayListCreate } from "./array";
import { ReverseArrayEnumerator$1 } from "./ReverseArrayEnumerator$1";
/**
 * @hidden
 */
var Stack$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Stack$1, _super);
    function Stack$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.c = arrayListCreate();
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Stack$1.prototype.h = function (a) {
        this.c.add(getBoxIfEnum(this.$t, a));
    };
    Stack$1.prototype.d = function () {
        if (this.c.count < 1) {
            return Type.getDefaultValue(this.$t);
        }
        return typeCastObjTo$t(this.$t, this.c.item(this.c.count - 1));
    };
    Stack$1.prototype.e = function () {
        var a = this.c.item(this.c.count - 1);
        this.c.removeAt(this.c.count - 1);
        return typeCastObjTo$t(this.$t, a);
    };
    Object.defineProperty(Stack$1.prototype, "f", {
        get: function () {
            return this.c.count;
        },
        enumerable: true,
        configurable: true
    });
    Stack$1.prototype.g = function () {
        this.c.clear();
    };
    Stack$1.prototype.b = function (a) {
        return this.c.contains(getBoxIfEnum(this.$t, a));
    };
    Stack$1.prototype.getEnumeratorObject = function () {
        return new ReverseArrayEnumerator$1(this.$t, this.c);
    };
    Stack$1.prototype.getEnumerator = function () {
        return new ReverseArrayEnumerator$1(this.$t, this.c);
    };
    Stack$1.prototype.a = function () {
        var a = this.c.count;
        var b = new Array(a);
        for (var c = 0; c < a; c++) {
            b[c] = typeCastObjTo$t(this.$t, this.c.item(a - (c + 1)));
        }
        return b;
    };
    Stack$1.$t = markType(Stack$1, 'Stack$1', Base.$, [IEnumerable$1_$type.specialize(0)]);
    return Stack$1;
}(Base));
export { Stack$1 };
//# sourceMappingURL=Stack$1.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, ICollection$1_$type, getBoxIfEnum, fromEn, markType, getEnumeratorObject } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
var Dictionary_EnumerableCollection$3 = /** @class */ (function (_super) {
    tslib_1.__extends(Dictionary_EnumerableCollection$3, _super);
    function Dictionary_EnumerableCollection$3($tKey, $tValue, $t, a, b, c) {
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.$t = null;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue, _this.$t);
        _this.c = b;
        _this.b = c;
        _this.a = a;
        return _this;
    }
    Object.defineProperty(Dictionary_EnumerableCollection$3.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary_EnumerableCollection$3.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary_EnumerableCollection$3.prototype.add = function (a) {
        throw new InvalidOperationException(0);
    };
    Dictionary_EnumerableCollection$3.prototype.clear = function () {
        throw new InvalidOperationException(0);
    };
    Dictionary_EnumerableCollection$3.prototype.contains = function (a) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEn(this.c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (Base.equalsStatic(getBoxIfEnum(this.$t, b), getBoxIfEnum(this.$t, a))) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    Dictionary_EnumerableCollection$3.prototype.copyTo = function (a, b) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEn(this.c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                a[b++] = c;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Dictionary_EnumerableCollection$3.prototype.remove = function (a) {
        throw new InvalidOperationException(0);
    };
    Dictionary_EnumerableCollection$3.prototype.getEnumerator = function () {
        return getEnumeratorObject(this.c);
    };
    Dictionary_EnumerableCollection$3.prototype.getEnumeratorObject = function () {
        return getEnumeratorObject(this.c);
    };
    Dictionary_EnumerableCollection$3.$t = markType(Dictionary_EnumerableCollection$3, 'Dictionary_EnumerableCollection$3', Base.$, [ICollection$1_$type.specialize(2)]);
    return Dictionary_EnumerableCollection$3;
}(Base));
export { Dictionary_EnumerableCollection$3 };
//# sourceMappingURL=Dictionary_EnumerableCollection$3.js.map
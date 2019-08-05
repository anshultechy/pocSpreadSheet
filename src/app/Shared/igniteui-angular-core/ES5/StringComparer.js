/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEqualityComparer_$type, IEqualityComparer$1_$type, typeCast, String_$type, markType } from "./type";
import { IComparer_$type } from "./IComparer";
import { IComparer$1_$type } from "./IComparer$1";
import { CultureInfo } from "./culture";
import { stringCompare1 } from "./stringExtended";
/**
 * @hidden
 */
var StringComparer = /** @class */ (function (_super) {
    tslib_1.__extends(StringComparer, _super);
    function StringComparer(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.h = c;
                }
                break;
        }
        return _this;
    }
    StringComparer.prototype.compareObject = function (a, b) {
        return stringCompare1(typeCast(String_$type, a), typeCast(String_$type, b), this.h);
    };
    StringComparer.prototype.compare = function (a, b) {
        return stringCompare1(a, b, this.h);
    };
    StringComparer.a = function (a, b) {
        if (a.name == CultureInfo.invariantCulture.name) {
            return b ? StringComparer.e : StringComparer.d;
        }
        return b ? StringComparer.c : StringComparer.b;
    };
    StringComparer.prototype.equalsC = function (a, b) {
        return this.compare(a, b) == 0;
    };
    StringComparer.prototype.getHashCodeC = function (a) {
        if (a == null) {
            return 0;
        }
        switch (this.h) {
            case 0:
            case 2:
            case 4: return Base.getHashCodeStatic(a);
            case 1: return Base.getHashCodeStatic(a.toLowerCase());
            case 3:
            case 5: return Base.getHashCodeStatic(a.toLowerCase());
            default: return 0;
        }
    };
    StringComparer.$t = markType(StringComparer, 'StringComparer', Base.$, [IComparer_$type, IEqualityComparer_$type, IComparer$1_$type.specialize(String_$type), IEqualityComparer$1_$type.specialize(String_$type)]);
    StringComparer.b = new StringComparer(1, 0);
    StringComparer.c = new StringComparer(1, 1);
    StringComparer.d = new StringComparer(1, 2);
    StringComparer.e = new StringComparer(1, 3);
    StringComparer.f = new StringComparer(1, 4);
    StringComparer.g = new StringComparer(1, 5);
    return StringComparer;
}(Base));
export { StringComparer };
//# sourceMappingURL=StringComparer.js.map
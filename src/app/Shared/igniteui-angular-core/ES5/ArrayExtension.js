/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, getBoxIfEnum, Type, markType } from "./type";
import { Random } from "./Random";
import { intDivide } from "./number";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
var ArrayExtension = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayExtension, _super);
    function ArrayExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayExtension.shuffle$1 = function ($t, a) {
        if (a != null) {
            var b = new Random(0);
            for (var c = a.count - 1; c > 0; --c) {
                var d = b.next1(c);
                var e = a.item(c);
                a.item(c, a.item(d));
                a.item(d, e);
            }
        }
    };
    ArrayExtension.insertionIndex$1 = function ($t, a, b) {
        var c = -1;
        var d = 0;
        var e = a.count;
        while (c == -1) {
            if (e <= d) {
                c = d;
            }
            else {
                var f = intDivide((d + e), 2);
                switch (Math.sign(CompareUtil.compareToObject(b, getBoxIfEnum($t, a.item(f))))) {
                    case -1:
                        e = f;
                        break;
                    case 0:
                        c = f;
                        break;
                    case 1:
                        d = f + 1;
                        break;
                }
            }
        }
        return c;
    };
    ArrayExtension.insertionIndex$11 = function ($t, a, b, c) {
        var d = -1;
        var e = 0;
        var f = a.count;
        while (d == -1) {
            if (f <= e) {
                d = e;
            }
            else {
                var g = intDivide((e + f), 2);
                switch (Math.sign(b(c, a.item(g)))) {
                    case -1:
                        f = g;
                        break;
                    case 0:
                        d = g;
                        break;
                    case 1:
                        e = g + 1;
                        break;
                }
            }
        }
        return d;
    };
    ArrayExtension.binarySearch$11 = function ($t, a, b) {
        var c = 0;
        var d = a.count - 1;
        while (c <= d) {
            var e = (c + ((d - c) >> 1));
            var f = b(a.item(e));
            if (f < 0) {
                d = e - 1;
            }
            else if (f > 0) {
                c = e + 1;
            }
            else {
                return e;
            }
        }
        return ~c;
    };
    ArrayExtension.binarySearch$1 = function ($t, a, b) {
        var c = 0;
        var d = a.count - 1;
        while (c <= d) {
            var e = (c + ((d - c) >> 1));
            var f = b(a.item(e));
            if (f < 0) {
                d = e - 1;
            }
            else if (f > 0) {
                c = e + 1;
            }
            else {
                return e;
            }
        }
        return ~c;
    };
    ArrayExtension.getModulus$1 = function ($t, a, b) {
        if (a == null) {
            return Type.getDefaultValue($t);
        }
        if (a.count == 0) {
            return Type.getDefaultValue($t);
        }
        return a.item(b % a.count);
    };
    ArrayExtension.$t = markType(ArrayExtension, 'ArrayExtension');
    return ArrayExtension;
}(Base));
export { ArrayExtension };
//# sourceMappingURL=ArrayExtension.js.map
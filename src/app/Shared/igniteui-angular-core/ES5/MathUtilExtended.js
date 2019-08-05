/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { truncate, log10 } from "./number";
/**
 * @hidden
 */
var MathUtilExtended = /** @class */ (function (_super) {
    tslib_1.__extends(MathUtilExtended, _super);
    function MathUtilExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathUtilExtended.d = function (a) {
        if (a <= 0) {
            return NaN;
        }
        var b = [57.156235665862923, -59.597960355475493, 14.136097974741746, -0.49191381609762019, 3.3994649984811891E-05, 4.6523628927048578E-05, -9.8374475304879565E-05, 0.00015808870322491249, -0.00021026444172410488, 0.00021743961811521265, -0.00016431810653676389, 8.441822398385275E-05, -2.6190838401581408E-05, 3.6899182659531625E-06];
        var c = a;
        var d = (a + 0.5) * Math.log(a + 5.2421875) - (a + 5.2421875);
        var e = 0.99999999999999711;
        for (var f = 0; f < 14; f++) {
            e += b[f] / ++c;
        }
        return d + Math.log(2.5066282746310007 * e / a);
    };
    MathUtilExtended.j = function (a, b, c) {
        var d = truncate(Math.floor(a)) & 255;
        var e = truncate(Math.floor(b)) & 255;
        var f = truncate(Math.floor(c)) & 255;
        a -= Math.floor(a);
        b -= Math.floor(b);
        c -= Math.floor(c);
        var g = MathUtilExtended.c(a);
        var h = MathUtilExtended.c(b);
        var i = MathUtilExtended.c(c);
        var j = MathUtilExtended.a[d] + e;
        var k = MathUtilExtended.a[j] + f;
        var l = MathUtilExtended.a[j + 1] + f;
        var m = MathUtilExtended.a[d + 1] + e;
        var n = MathUtilExtended.a[m] + f;
        var o = MathUtilExtended.a[m + 1] + f;
        return MathUtilExtended.f(i, MathUtilExtended.f(h, MathUtilExtended.f(g, MathUtilExtended.e(MathUtilExtended.a[k], a, b, c), MathUtilExtended.e(MathUtilExtended.a[n], a - 1, b, c)), MathUtilExtended.f(g, MathUtilExtended.e(MathUtilExtended.a[l], a, b - 1, c), MathUtilExtended.e(MathUtilExtended.a[o], a - 1, b - 1, c))), MathUtilExtended.f(h, MathUtilExtended.f(g, MathUtilExtended.e(MathUtilExtended.a[k + 1], a, b, c - 1), MathUtilExtended.e(MathUtilExtended.a[n + 1], a - 1, b, c - 1)), MathUtilExtended.f(g, MathUtilExtended.e(MathUtilExtended.a[l + 1], a, b - 1, c - 1), MathUtilExtended.e(MathUtilExtended.a[o + 1], a - 1, b - 1, c - 1))));
    };
    MathUtilExtended.c = function (a) {
        return a * a * a * (a * (a * 6 - 15) + 10);
    };
    MathUtilExtended.f = function (a, b, c) {
        return b + a * (c - b);
    };
    MathUtilExtended.e = function (a, b, c, d) {
        var e = a & 15;
        var f = e < 8 ? b : c;
        var g = e < 4 ? c : e == 12 || e == 14 ? b : d;
        return ((e & 1) == 0 ? f : -f) + ((e & 2) == 0 ? g : -g);
    };
    MathUtilExtended.h = function (a) {
        if (a == 0) {
            return 0;
        }
        if (a < 0) {
            return -MathUtilExtended.g(-a);
        }
        var b = truncate(Math.floor(log10(a)));
        var c = a / MathUtilExtended.b(10, b);
        var d = c < 2 ? 1 : (c < 5 ? 2 : (c < 10 ? 5 : 10));
        return d * MathUtilExtended.b(10, b);
    };
    MathUtilExtended.i = function (a) {
        if (a == 0) {
            return 0;
        }
        if (a < 0) {
            return -MathUtilExtended.i(-a);
        }
        var b = truncate(Math.floor(log10(a)));
        var c = a / MathUtilExtended.b(10, b);
        var d = c < 1 ? 1 : (c < 3 ? 2 : (c < 7 ? 5 : 10));
        return d * MathUtilExtended.b(10, b);
    };
    MathUtilExtended.g = function (a) {
        if (a == 0) {
            return 0;
        }
        if (a < 0) {
            return -MathUtilExtended.h(-a);
        }
        var b = truncate(Math.floor(log10(a)));
        var c = a / MathUtilExtended.b(10, b);
        var d = c <= 1 ? 1 : (c <= 2 ? 2 : (c <= 5 ? 5 : 10));
        return d * MathUtilExtended.b(10, b);
    };
    MathUtilExtended.b = function (a, b) {
        var c = 1;
        for (; b > 0; --b) {
            c *= a;
        }
        for (; b < 0; ++b) {
            c /= a;
        }
        return c;
    };
    MathUtilExtended.$t = markType(MathUtilExtended, 'MathUtilExtended');
    MathUtilExtended.a = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
    return MathUtilExtended;
}(Base));
export { MathUtilExtended };
//# sourceMappingURL=MathUtilExtended.js.map
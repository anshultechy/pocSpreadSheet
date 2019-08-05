/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { CommandMap_KeyMapping } from "./CommandMap_KeyMapping";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { CommandMap_Requirement } from "./CommandMap_Requirement";
import { LongValue } from "./LongValue";
import { CommandMap } from "./CommandMap";
/**
 * @hidden
 */
var SpreadsheetCommandBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCommandBuilder, _super);
    function SpreadsheetCommandBuilder() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.f = null;
        _this.f = new List$1(CommandMap_KeyMapping.$, 0);
        _this.d = new Dictionary$2(Number_$type, CommandMap_Requirement.$, 0);
        return _this;
    }
    SpreadsheetCommandBuilder.prototype.n = function () {
        this.i(8, 4, 1, 0);
        this.i(8, 65536, 139);
        this.i(8, 32768, 141);
        this.i(8, 4, 143);
        this.i(0, 65536, 138);
        this.i(0, 32768, 140);
        this.i(0, 4, 142);
        this.h(512 | 2097152, 1, 2, 0, 202);
        this.h(0, 0, 2, 8, 200, 199);
        this.i(0, 2, 4, 5, 2, 3, 87, 88, 71, 72, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 62, 63, 64, 40, 67, 80, 83, 81, 82, 84, 167, 168, 66, 65);
        this.i(33554432, 2, 93);
        this.i(16777216, 2, 94);
        this.h(0, 1, 2, 0, 148, 149, 150);
        this.h(8388608, 1, 2, 0, 119, 120, 121, 161, 160, 163, 162, 126, 125);
        this.h(512, 1, 2, 0, 156, 157, 159);
        this.h(8388608, 0, 2, 0, 198);
        this.h(512 | 8388608, 1, 2, 0, 127, 128, 129, 130, 133, 132, 122, 131, 124, 123);
        this.h(512 | 134217728, 1, 2, 0, 145);
        this.h(512 | 67108864, 1, 2, 0, 147);
        this.h(512 | 536870912, 1, 2, 0, 144);
        this.h(512 | 268435456, 1, 2, 0, 146);
        this.h(512 | 524288 | 2097152, 1, 2, 0, 153, 155);
        this.h(512 | 262144 | 2097152, 1, 2, 0, 152, 154);
        this.h(512, 1, 2, 0, 115, 116, 118, 117, 134, 135, 137, 136, 166, 165);
        this.h(512 | 16777216, 1, 2, 0, 89, 90);
        this.h(512 | 33554432, 1, 2, 0, 91, 92);
        this.h(512 | 2097152, 1, 2, 0, 97, 95, 96, 98);
        this.i(0, 2, 8, 9, 7, 6, 12, 13, 10, 11, 16, 17, 14, 15, 21, 20, 19, 18, 31, 35, 30, 32);
        this.i(0, 2, 24, 25, 22, 23, 26, 27, 28, 29);
        this.i(32, 0, 36);
        this.i(0, 32, 37);
        this.h(512 | 1048576, 0, 1, 2, 99);
        this.h(512 | 1048576, 1, 1, 2, 100);
        this.h(512 | 1048576, 1, 1, 4, 114);
        this.h(512 | 1048576, 1, 1, 0, 113);
        this.i(0, 2, 101, 102, 103, 104, 111);
        this.i(0, 131072, 112);
        this.h(131072 | 512, 1, 2, 0, 164, 170, 171);
        this.i(0, 2 | 8192, 106, 107, 109);
        this.i(0, 2 | 16384, 105, 108, 110);
        this.h(512, 1, 2, 0, 201, 73, 74, 79);
        this.i(0, 512, 151, 78, 75, 76, 77);
        this.i(64, 0, 68);
        this.i(128, 0, 69);
        this.i(256, 0, 70);
        this.h(0, 1, 1024, 0, 86);
        this.h(0, 1, 2048, 0, 85);
        this.g(0, 1, 172, 173);
        this.h(512 | 131072 | 2097152, 16, 0, 8, 176, 177, 179, 184);
        this.h(512 | 131072 | 2097152, 16 | 128, 0, 8, 174, 175, 178);
        this.h(512 | 131072, 0, 0, 8, 180, 181, 182);
        this.h(512 | 131072 | 2097152, 0, 0, 8, 183);
        this.h(512 | 131072, 32, 0, 0, 187, 186, 203);
        this.h(512 | 131072, 16 | 32, 0, 0, 195, 197, 196);
        this.h(512 | 131072, 16 | 64, 0, 0, 185);
        this.h(512 | 131072, 64, 2, 0, 188, 189, 190, 192, 193, 194, 191);
    };
    SpreadsheetCommandBuilder.prototype.i = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        this.h.apply(this, tslib_1.__spread([a, 0, b, 0], c));
    };
    SpreadsheetCommandBuilder.prototype.g = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        this.h.apply(this, tslib_1.__spread([0, a, 0, b], c));
    };
    SpreadsheetCommandBuilder.prototype.h = function (a, b, c, d) {
        var e = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            e[_i - 4] = arguments[_i];
        }
        var f = new LongValue(0);
        f.j = a;
        f.i = b;
        var g = new LongValue(0);
        g.j = c;
        g.i = d;
        this.j.apply(this, tslib_1.__spread([f, g], e));
    };
    SpreadsheetCommandBuilder.prototype.j = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        var d = new CommandMap_Requirement(a, b);
        for (var f = 0; f < c.length; f++) {
            var e = c[f];
            this.d.item(e, d);
        }
    };
    SpreadsheetCommandBuilder.prototype.m = function () {
        var a = 1;
        var b = 4 | 2;
        var c = 4 | a;
        var d = 2;
        var e = a;
        var f = 4;
        var g = 0;
        var h = 86;
        var i = 87;
        var j = SpreadsheetCommandBuilder.c;
        var k = new LongValue(1, 0, 8);
        var l = new LongValue(1, 0, 1);
        var m = new LongValue(1, 2, 0);
        var n = new LongValue(1, 16, 0);
        var o = new LongValue(1, 32, 0);
        var p = o.e(128);
        var q = new LongValue(1, 512, 0);
        var r = new LongValue(1, 8, 0);
        var s = new LongValue(1, 4194304, 0);
        var t = new LongValue(1, 256, 0);
        var u = new LongValue(1, 4096, 0);
        var v = new LongValue(1, 128, 0);
        var w = v.e(8);
        var x = new LongValue(1, (16 | 128), 0);
        var y = x.d(1);
        var z = new LongValue(1, 512, 1);
        var aa = new LongValue(1, 32, 1);
        var ab = aa.e(1073741824);
        var ac = ab.e(16);
        var ad = ac.e(8);
        var ae = new LongValue(1, 1073741824, 1);
        var af = ae.e(8);
        var ag = ae.e(128);
        var ah = ag.e(8);
        var ai = new LongValue(1, (16 | 1073741824), 1);
        var aj = ai.e(128);
        var ak = aj.e((4194304 | 256));
        var al = aj.e(32);
        var am = al.e(4194304);
        var an = am.e(8);
        var ao = l.e(4194304);
        var ap = ao.d(8);
        var aq = ao.d(256);
        var ar = k.d(256);
        var as = new LongValue(1, 0, 128);
        this.l(70, 63, f, m, j);
        this.l(68, 63, f, t, j);
        this.l(69, 63, g, m, j);
        this.l(68, 63, g, v, j);
        this.l(68, 8, g, j, z);
        this.l(68, 15, f, t, ae);
        this.l(68, 17, f, t, ae);
        this.l(68, 14, f, t, ae);
        this.l(68, 16, f, t, ae);
        this.l(68, 10, f, t, ae);
        this.l(68, 11, f, t, ae);
        this.l(68, 13, f, t, ae);
        this.l(68, 12, f, t, ae);
        this.l(36, 12, g, j, ak);
        this.l(37, 12, g, j, y);
        this.l(36, 12, f, j, ai);
        this.l(37, 12, f, j, ai);
        this.k(201, 17, e);
        this.k(73, 57, g);
        this.k(78, 8, g);
        this.k(76, 3, d);
        this.k(77, 3, b);
        this.l(75, 3, g, j, u);
        this.k(151, 57, g);
        this.k(172, 8, g);
        this.k(173, 3, g);
        this.k(173, 3, f);
        this.k(173, 3, d);
        this.k(173, 2, g);
        this.k(173, 2, f);
        this.k(173, 2, d);
        this.k(79, 19, g);
        this.k(185, 41, b);
        this.k(156, i, b);
        this.k(156, 79, d);
        this.k(157, 88, d);
        this.k(157, 80, d);
        this.l(7, 14, g, j, al);
        this.l(6, 16, g, j, al);
        this.l(8, 15, g, j, al);
        this.l(9, 17, g, j, al);
        this.l(42, 14, f, j, ac);
        this.l(41, 16, f, j, ac);
        this.l(43, 15, f, j, ac);
        this.l(44, 17, f, j, ac);
        this.l(42, 14, g, v, ac);
        this.l(41, 16, g, v, ac);
        this.l(43, 15, g, v, ac);
        this.l(44, 17, g, v, ac);
        this.l(14, 14, d, j, aj);
        this.l(15, 16, d, j, aj);
        this.l(16, 15, d, j, aj);
        this.l(17, 17, d, j, aj);
        this.l(49, 14, b, j, ae);
        this.l(50, 16, b, j, ae);
        this.l(51, 15, b, j, ae);
        this.l(52, 17, b, j, ae);
        this.l(49, 14, d, v, ai);
        this.l(50, 16, d, v, ai);
        this.l(51, 15, d, v, ai);
        this.l(52, 17, d, v, ai);
        this.l(2, 2, g, j, ap);
        this.l(3, 2, f, j, ap);
        this.l(2, 2, g, k, aq);
        this.l(3, 2, f, k, aq);
        this.l(199, 2, g, ar, ao);
        this.l(200, 2, f, ar, ao);
        this.l(81, 16, d | e, j, ae);
        this.l(82, 14, d | e, j, ae);
        this.l(84, 1, f, j, z, true);
        this.l(83, 83, e, j, z);
        this.l(80, 84, d, j, z);
        this.k(159, h, d);
        this.l(66, 9, d, j, ae);
        this.l(65, 9, f, j, ae);
        var at = q;
        this.l(86, 55, d, SpreadsheetCommandBuilder.c, at);
        this.l(85, 54, d, SpreadsheetCommandBuilder.c, at);
        this.k(198, 21, d);
        this.k(119, 22, d);
        this.k(119, 31, d);
        this.k(120, 23, d);
        this.k(120, 38, d);
        this.k(160, 24, d);
        this.k(160, 50, d);
        this.k(121, 25, d);
        this.k(101, 11, d);
        this.k(102, 10, d);
        this.k(103, 11, b);
        this.k(104, 10, b);
        this.k(100, 66, f);
        this.k(100, 56, c);
        this.k(89, 20, d);
        this.k(90, 20, b);
        this.k(91, 29, d);
        this.k(92, 29, b);
        this.l(87, 3, g, u, aa);
        this.l(88, 3, f, u, aa);
        this.l(18, 11, g, j, aj);
        this.l(19, 10, g, j, aj);
        this.l(21, 10, e, j, aj);
        this.l(20, 11, e, j, aj);
        this.l(53, 11, f, j, ai);
        this.l(54, 10, f, j, ai);
        this.l(56, 10, c, j, ai);
        this.l(55, 11, c, j, ai);
        this.l(53, 11, g, v, ai);
        this.l(54, 10, g, v, ai);
        this.l(56, 10, e, v, ai);
        this.l(55, 11, e, v, ai);
        this.l(32, 13, d, j, ah);
        this.l(30, 13, g, j, an);
        this.l(34, 13, d, r, ag);
        this.l(33, 13, g, r, am);
        this.l(59, 13, b, j, af);
        this.l(57, 13, f, j, ad);
        this.l(59, 13, d, v, af);
        this.l(57, 13, g, v, ad);
        this.l(61, 13, b, r, ae);
        this.l(60, 13, f, r, ac);
        this.l(61, 13, d, w, ae);
        this.l(60, 13, g, w, ac);
        this.l(167, 13, g, s, al);
        this.l(168, 12, g, s, al);
        this.l(6, 2, g, s, l);
        this.l(7, 2, f, s, l);
        this.l(38, 12, d, j, ag);
        this.l(63, 12, b, j, ae);
        this.l(63, 12, d, v, ae);
        this.l(64, 12, g, v, ai);
        this.l(40, 30, d, j, z);
        this.l(40, 9, b, j, z);
        this.l(22, 14, g, n, ab);
        this.l(23, 16, g, n, ab);
        this.l(24, 15, g, n, ab);
        this.l(25, 17, g, n, ab);
        this.l(26, 14, d, n, ae);
        this.l(27, 16, d, n, ae);
        this.l(28, 15, d, n, ae);
        this.l(29, 17, d, n, ae);
        this.l(29, 11, g, n, ae);
        this.l(28, 10, g, n, ae);
        this.l(26, 10, a, n, ae);
        this.l(27, 11, a, n, ae);
        this.l(31, 13, g, n, ab);
        this.l(35, 12, g, n, ae);
        this.l(58, 13, f, n, ab);
        this.l(62, 12, f, n, ae);
        this.l(14, 14, g, o, ag, true);
        this.l(15, 16, g, o, ag, true);
        this.l(16, 15, g, o, ag, true);
        this.l(17, 17, g, o, ag, true);
        this.l(38, 13, g, o, ag, true);
        this.l(39, 3, g, o, ae, true);
        this.l(49, 14, f, o, ai, true);
        this.l(50, 16, f, o, ai, true);
        this.l(51, 15, f, o, ai, true);
        this.l(52, 17, f, o, ai, true);
        this.l(63, 13, f, o, ae, true);
        this.l(64, 3, f, o, ae, true);
        this.l(49, 14, g, p, ai, true);
        this.l(50, 16, g, p, ai, true);
        this.l(51, 15, g, p, ai, true);
        this.l(52, 17, g, p, ai, true);
        this.l(63, 13, g, p, ae, true);
    };
    SpreadsheetCommandBuilder.prototype.k = function (a, b, c) {
        this.l(a, b, c, SpreadsheetCommandBuilder.c, SpreadsheetCommandBuilder.c, false);
    };
    SpreadsheetCommandBuilder.prototype.l = function (a, b, c, d, e, f) {
        if (f === void 0) { f = false; }
        e = e.e(-2147483648);
        this.f.add(new CommandMap_KeyMapping(a, e, d, b, c, 15 & ~c));
        if (f) {
            this.l(37, b, c, d, e, false);
        }
    };
    SpreadsheetCommandBuilder.e = function () {
        var a = new SpreadsheetCommandBuilder();
        a.n();
        return a.d;
    };
    SpreadsheetCommandBuilder.a = function () {
        var a = new SpreadsheetCommandBuilder();
        a.m();
        return a.f.toArray();
    };
    SpreadsheetCommandBuilder.b = function () {
        var a = new SpreadsheetCommandBuilder();
        a.n();
        a.m();
        return new CommandMap(a.f.toArray(), a.d);
    };
    SpreadsheetCommandBuilder.$t = markType(SpreadsheetCommandBuilder, 'SpreadsheetCommandBuilder');
    SpreadsheetCommandBuilder.c = new LongValue(0);
    return SpreadsheetCommandBuilder;
}(Base));
export { SpreadsheetCommandBuilder };
//# sourceMappingURL=SpreadsheetCommandBuilder.js.map

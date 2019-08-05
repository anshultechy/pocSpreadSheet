/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { RendererContainer } from "./RendererContainer";
import { SpreadsheetDialogUtilities } from "./SpreadsheetDialogUtilities";
import { NumericAxisBase } from "igniteui-angular-charts/ES5/NumericAxisBase";

import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { stringContains, stringEmpty } from "../../igniteui-angular-core/ES5/string";
import { trimEnd } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var ChartElementPlatformHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ChartElementPlatformHelper, _super);
    function ChartElementPlatformHelper(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.l = null;
        _this.b = null;
        _this.a = a;
        _this.l = new List$1(RendererContainer.$, 0);
        _this.b = b;
        return _this;
    }
    ChartElementPlatformHelper.prototype.c = function (a, b, c, d, e, f) {
        if (d === void 0) { d = false; }
        if (e === void 0) { e = 3; }
        if (f === void 0) { f = 3; }
        var g = this.m(a, b);
        if (null == g) {
            return false;
        }
        return true;
    };
    ChartElementPlatformHelper.prototype.s = function (a, b, c, d, e, f, g, h, i, j, k) {
        if (d === void 0) { d = false; }
        if (e === void 0) { e = 0; }
        if (f === void 0) { f = 0; }
        if (g === void 0) { g = 1; }
        if (h === void 0) { h = 1; }
        if (i === void 0) { i = 3; }
        if (j === void 0) { j = 3; }
        if (k === void 0) { k = 0; }
        if (this.f(a)) {
            if (a.tagName.toLowerCase() != "div") {
                return;
            }
        }
        var l = this.m(b, a);
        if (null == l) {
            return;
        }
        var m = this.q(l);
        switch (i) {
            case 0:
                m += " justify-self: start;";
                break;
            case 2:
                m += " justify-self: end;";
                break;
            case 3:
                m += " justify-self: stretch;";
                break;
            case 1:
                m += " justify-self: center;";
                break;
        }
        switch (j) {
            case 0:
                m += " align-self: start;";
                break;
            case 2:
                m += " align-self: end;";
                break;
            case 3:
                m += " align-self: stretch;";
                break;
            case 1:
                m += " align-self: center;";
                break;
        }
        var n = SpreadsheetDialogUtilities.j(e + 1, g, f + 1, h, m + " display: block;");
        l.setAttribute("style", n);
    };
    ChartElementPlatformHelper.prototype.d = function (a, b) {
        var c = typeCast(RendererContainer.$, b);
        if (null == c) {
            return false;
        }
        a.clearRefValues(c.container);
        return true;
    };
    ChartElementPlatformHelper.prototype.t = function (a) {
        if (false == this.f(a)) {
            return;
        }
        if (a.tagName.toLowerCase() != "div") {
            return;
        }
        var b = a;
        for (var c = b.children.length; c > 0; c--) {
            b.removeChild(b.children.item(c - 1));
        }
    };
    ChartElementPlatformHelper.prototype.u = function (a) {
    };
    ChartElementPlatformHelper.prototype.n = function () {
        return null;
    };
    ChartElementPlatformHelper.prototype.e = function (a) {
        var b = typeCast(RendererContainer.$, a);
        return b.isReady;
    };
    ChartElementPlatformHelper.prototype.o = function (a) {
        var b = this.a.createRendererContainer();
        this.l.add(b);
        a = b.isReady;
        b.onReady = this.b;
        return {
            ret: b,
            p0: a
        };
    };
    ChartElementPlatformHelper.prototype.p = function () {
        return document.createElement("div");
    };
    ChartElementPlatformHelper.prototype.v = function (a, b, c, d) {
        this.g(a, b, c, (function (e) { return d(null, e); }));
    };
    ChartElementPlatformHelper.prototype.w = function (a, b, c, d) {
        this.g(a, b, c, (function (e, f) {
            var g = e.bd;
            if (null == g) {
                return;
            }
            var h = Enumerable.af(NumericAxisBase.$, Enumerable.l(NumericAxisBase.$, Enumerable.u(Axis.$, g.axes, function (i) { return stringContains(i.name, "Primary"); })));
            var i = Enumerable.af(NumericAxisBase.$, Enumerable.l(NumericAxisBase.$, Enumerable.u(Axis.$, g.axes, function (j) { return stringContains(j.name, "Secondary"); })));
            if (h != null && i != null && h.j1 != 0 && i.j1 != 0) {
                var j = h.j3;
                var k = h.j2;
                var l = h.j1;
                var m = l / (k - j);
                var n = i.j3;
                var o = i.j2;
                var p = i.j1;
                p = m * (o - n);
                var q = d(p, false);
                var r = (o - n) * q / p;
                o = n + r;
                i.kb = n;
                i.j7 = p;
                i.ka = o;
            }
        }));
    };
    ChartElementPlatformHelper.prototype.g = function (a, b, c, d) {
        var e = typeCast(RendererContainer.$, b);
        if (null == e) {
            return false;
        }
        a.provideRefValue(e.container, c, d);
        return true;
    };
    ChartElementPlatformHelper.prototype.h = function (a, b) {
        var c = null;
        if (this.f(b)) {
            c = b;
        }
        else {
            return false;
        }
        var d = null;
        if (this.f(a)) {
            d = a;
        }
        else if (typeCast(RendererContainer.$, a) !== null) {
            d = a.containerElement;
        }
        else {
        }
        if (null == d) {
            return false;
        }
        c.removeChild(d);
        return true;
    };
    ChartElementPlatformHelper.prototype.i = function (a, b, c) {
        var d = typeCast(RendererContainer.$, b);
        if (null == d) {
            return false;
        }
        a.removeRefValue(d.container, c);
        return true;
    };
    ChartElementPlatformHelper.prototype.x = function (a, b, c) {
        var d = typeCast(RendererContainer.$, c);
        if (null == d) {
            return;
        }
        a.render(b, d.container);
    };
    ChartElementPlatformHelper.prototype.j = function (a, b, c, d, e) {
        return false;
    };
    ChartElementPlatformHelper.prototype.k = function (a, b, c) {
        if (false == (this.f(a) && a.tagName.toLowerCase() == "div")) {
            return false;
        }
        var d = function (e) {
            var f = stringEmpty();
            for (var h = 0; h < e.length; h++) {
                var g = e[h];
                if (g.e) {
                    f += g.i.toString() + "px ";
                }
                else if (g.g) {
                    f += "minmax(0," + g.i.toString() + "fr) ";
                }
                else if (g.f) {
                    f += "auto ";
                }
            }
            return trimEnd(f);
        };
        var e = a;
        var f = SpreadsheetDialogUtilities.k(d(b), d(c), "0px", "height: 100%; box-sizing: border-box; ");
        e.setAttribute("style", f);
        return false;
    };
    ChartElementPlatformHelper.prototype.m = function (a, b) {
        var c = null;
        if (this.f(b)) {
            c = b;
        }
        else if (typeCast(RendererContainer.$, b) !== null) {
            c = b.containerElement;
        }
        else {
            return null;
        }
        var d = null;
        if (this.f(a)) {
            d = a;
        }
        else if (typeCast(RendererContainer.$, a) !== null) {
            d = a.containerElement;
        }
        else {
        }
        if (null == d) {
            return null;
        }
        c.appendChild(d);
        return d;
    };
    ChartElementPlatformHelper.prototype.q = function (a) {
        var b = a.getAttribute("style");
        if (null == b) {
            return stringEmpty();
        }
        return b;
    };
    ChartElementPlatformHelper.prototype.f = function (a) {
        var b = a.toString().toLowerCase();
        return stringContains(b, "element") || stringContains(b, "html");
    };
    ChartElementPlatformHelper.$t = markType(ChartElementPlatformHelper, 'ChartElementPlatformHelper');
    return ChartElementPlatformHelper;
}(Base));
export { ChartElementPlatformHelper };
//# sourceMappingURL=ChartElementPlatformHelper.js.map

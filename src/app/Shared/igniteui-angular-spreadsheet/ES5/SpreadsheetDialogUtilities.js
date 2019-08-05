/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType, EnumUtil } from "../../igniteui-angular-core/ES5/type";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { IndexOutOfRangeException } from "../../igniteui-angular-core/ES5/IndexOutOfRangeException";
import { stringSplit, stringCompare1 } from "../../igniteui-angular-core/ES5/stringExtended";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var SpreadsheetDialogUtilities = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetDialogUtilities, _super);
    function SpreadsheetDialogUtilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpreadsheetDialogUtilities.c = function (a, b, c, d) {
        var e = document.createElement("label");
        d = document.createElement("input");
        d.type = "checkbox";
        d.id = a;
        e.appendChild(d);
        var f = document.createElement("text");
        f.innerText = b;
        d.accessKey = c;
        e.appendChild(f);
        return {
            ret: e,
            p3: d
        };
    };
    SpreadsheetDialogUtilities.d = function (a, b, c, d, e) {
        var f = document.createElement("label");
        e = document.createElement("input");
        e.name = b;
        e.type = "radio";
        e.id = a;
        f.appendChild(e);
        var g = document.createElement("text");
        g.innerText = c;
        e.accessKey = d;
        f.appendChild(g);
        return {
            ret: f,
            p4: e
        };
    };
    SpreadsheetDialogUtilities.l = function (a) {
        while (a.children.length > 0) {
            a.removeChild(a.children.item(0));
        }
    };
    SpreadsheetDialogUtilities.a = function () {
        return SpreadsheetDialogUtilities.b("button");
    };
    SpreadsheetDialogUtilities.b = function (a) {
        var b = document.createElement("button");
        b.type = a;
        return b;
    };
    SpreadsheetDialogUtilities.k = function (a, b, c, d) {
        if (d === void 0) { d = null; }
        var e = new StringBuilder(0);
        e.l("display: -ms-grid; ");
        var f = stringSplit(a, [" "], 1);
        var g = stringSplit(b, [" "], 1);
        e.l("-ms-grid-rows: ");
        for (var i = 0; i < f.length; i++) {
            var h = f[i];
            e.l(h);
            e.l(" ");
            e.l(c);
            e.l(" ");
        }
        e.l(";");
        e.l("-ms-grid-columns: ");
        for (var k = 0; k < g.length; k++) {
            var j = g[k];
            e.l(j);
            e.l(" ");
            e.l(c);
            e.l(" ");
        }
        e.l(";");
        e.l("display: grid; ");
        e.l("grid-template-rows: ");
        e.l(a);
        e.l("; ");
        e.l("grid-template-columns: ");
        e.l(b);
        e.l("; ");
        if (false == stringIsNullOrEmpty(c)) {
            e.l("grid-gap: ");
            e.l(c);
            e.l("; ");
        }
        if (false == stringIsNullOrEmpty(d)) {
            e.l(d);
        }
        return e.toString();
    };
    SpreadsheetDialogUtilities.j = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        var f = new StringBuilder(0);
        f.l("grid-row: ");
        f.l(a.toString());
        if (b > 1) {
            f.l("/span ");
            f.l(b.toString());
        }
        f.l("; ");
        f.l("grid-column: ");
        f.l(c.toString());
        if (d > 1) {
            f.l("/span ");
            f.l(d.toString());
        }
        f.l("; ");
        var g = a + (a - 1);
        var h = (b * 2) - 1;
        var i = c + (c - 1);
        var j = (d * 2) - 1;
        f.l("-ms-grid-row: ");
        f.l(g.toString());
        f.l("; ");
        if (h > 1) {
            f.l("-ms-grid-row-span: ");
            f.l(h.toString());
            f.l("; ");
        }
        f.l("-ms-grid-column: ");
        f.l(i.toString());
        f.l("; ");
        if (j > 1) {
            f.l("-ms-grid-column-span: ");
            f.l(j.toString());
            f.l("; ");
        }
        if (false == stringIsNullOrEmpty(e)) {
            f.l(e);
        }
        return f.toString();
    };
    SpreadsheetDialogUtilities.e = function (a, b) {
        if (stringCompare1(a.id, b, 2) == 0) {
            return a;
        }
        var c = a.parentElement;
        if (null == c) {
            return null;
        }
        return SpreadsheetDialogUtilities.e(c, b);
    };
    SpreadsheetDialogUtilities.f = function () {
        var a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.height = "100px";
        a.setAttribute("MsOverflowStyle", "scrollbar");
        document.body.appendChild(a);
        var b = a.offsetHeight;
        a.style.overflow = "scroll";
        var c = document.createElement("div");
        c.style.height = "100%";
        a.appendChild(c);
        var d = c.offsetHeight;
        a.parentNode.removeChild(a);
        return b - d;
    };
    SpreadsheetDialogUtilities.g = function () {
        var a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.width = "100px";
        a.setAttribute("MsOverflowStyle", "scrollbar");
        document.body.appendChild(a);
        var b = a.offsetWidth;
        a.style.overflow = "scroll";
        var c = document.createElement("div");
        c.style.width = "100%";
        a.appendChild(c);
        var d = c.offsetWidth;
        a.parentNode.removeChild(a);
        return b - d;
    };
    SpreadsheetDialogUtilities.h = function (a) {
        var b = a.selectedIndex;
        var c = a.options.item(b);
        if (null == c) {
            return null;
        }
        var d = c.getAttribute("value");
        return d;
    };
    SpreadsheetDialogUtilities.i = function (a, b) {
        var c = a.selectedIndex;
        var d = a.options.item(c);
        if (null != d) {
            return EnumUtil.parse(b, d.value.toString(), true);
        }
        return null;
    };
    SpreadsheetDialogUtilities.m = function (a, b, c) {
        if (c == a.children.length) {
            a.appendChild(b);
        }
        else if (c >= 0) {
            var d = a.children.item(c);
            a.insertBefore(b, d);
        }
        else {
            throw new IndexOutOfRangeException(0);
        }
    };
    SpreadsheetDialogUtilities.n = function (a, b) {
        SpreadsheetDialogUtilities.o(a, b, null);
    };
    SpreadsheetDialogUtilities.o = function (a, b, c) {
        var e_1, _a;
        SpreadsheetDialogUtilities.l(a);
        var d = b;
        try {
            for (var _b = tslib_1.__values(fromEnum(d)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var f = document.createElement("option");
                f.innerText = e.displayText;
                f.setAttribute("value", e.dataValue);
                if (null != c) {
                    var g = c(e);
                    if (null != g) {
                        f.insertBefore(g, f.firstChild);
                    }
                }
                a.appendChild(f);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SpreadsheetDialogUtilities.$t = markType(SpreadsheetDialogUtilities, 'SpreadsheetDialogUtilities');
    return SpreadsheetDialogUtilities;
}(Base));
export { SpreadsheetDialogUtilities };
//# sourceMappingURL=SpreadsheetDialogUtilities.js.map

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { IGFormattedTextElement } from "./IGFormattedTextElement";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { IGFormattedTextParagraph } from "./IGFormattedTextParagraph";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
import { typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
/**
 * @hidden
 */
var IGFormattedTextDocument = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextDocument, _super);
    function IGFormattedTextDocument() {
        var _this = _super.call(this) || this;
        _this.h = new List$1(IGFormattedTextParagraph.$, 0);
        _this.i = new StringBuilder(0);
        return _this;
    }
    IGFormattedTextDocument.prototype.c = function () {
        return _super.prototype.c.call(this) || IGFormattedTextElement.d(IGFormattedTextParagraph.$, this.h);
    };
    IGFormattedTextDocument.prototype.g = function () {
        var a = null;
        var b = this.n(a, this.h);
        a = b.p0;
        return a;
    };
    IGFormattedTextDocument.prototype.n = function (a, b) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var d = typeCast(IGFormattedTextRun.$, c);
                if (d != null) {
                    if (a == null) {
                        a = new IGFormattedTextSettings();
                        a._aa(d.a);
                    }
                    else {
                        a._w(d.a);
                    }
                }
                else {
                    var e = typeCast(IGFormattedTextSpan.$, c);
                    if (e != null) {
                        var f = this.n(a, e.h);
                        a = f.p0;
                    }
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
        return {
            p0: a
        };
    };
    IGFormattedTextDocument.prototype.l = function (a) {
        a(this.a);
        IGFormattedTextDocument.m(a, this.h);
    };
    IGFormattedTextDocument.m = function (a, b) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                a(c.a);
                var d = typeCast(IGFormattedTextSpan.$, c);
                if (d != null) {
                    IGFormattedTextDocument.m(a, d.h);
                }
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
    IGFormattedTextDocument.prototype.j = function (a, b, c) {
        IGFormattedTextDocument.k(a, b, c, this.h);
    };
    IGFormattedTextDocument.k = function (a, b, c, d) {
        var e_3, _a;
        var e = false;
        var f = a + b - 1;
        try {
            for (var _b = tslib_1.__values(fromEnum(d)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var g = _c.value;
                if (!e) {
                    if (g.b(a)) {
                        e = true;
                    }
                }
                if (e) {
                    if (f < g.f) {
                        return;
                    }
                    var h = typeCast(IGFormattedTextRun.$, g);
                    if (h != null) {
                        c(h);
                    }
                    else {
                        var i = typeCast(IGFormattedTextSpan.$, g);
                        if (i != null) {
                            IGFormattedTextDocument.k(a, b, c, i.h);
                        }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    IGFormattedTextDocument.prototype.o = function () {
        var e_4, _a;
        var a = this.i;
        var b = a.c;
        if (b > 0) {
            try {
                for (var _b = tslib_1.__values(fromEnum(this.h)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    c.i();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            var d = this.h._inner[this.h.count - 1].g();
            if (d != null) {
                var e = typeCast(IGFormattedTextRun.$, d.h._inner[d.h.count - 1]);
                if (e.e > 0) {
                    var f = false;
                    if (a.item(e.f) == '\r') {
                        f = e.e == 1 || (e.e == 2 && a.item(e.f + 1) == '\n');
                    }
                    else if (a.item(e.f) == '\n') {
                        f = e.e == 1;
                    }
                    if (f) {
                        d.h.removeAt(d.h.count - 1);
                        a.y(b - e.e, e.e);
                    }
                    else {
                        var g = e.f + e.e - 1;
                        if (a.item(g) == '\r') {
                            e.e -= 1;
                        }
                        else if (a.item(g) == '\n' && e.e > 1 && a.item(g - 1) == '\r') {
                            e.e -= 2;
                        }
                    }
                }
            }
        }
    };
    IGFormattedTextDocument.prototype.p = function () {
        IGFormattedTextDocument.q(this.h, this.a);
    };
    IGFormattedTextDocument.q = function (a, b) {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                c.a._aa(b);
                if (typeCast(IGFormattedTextSpan.$, c) !== null) {
                    IGFormattedTextDocument.q(c.h, c.a);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    IGFormattedTextDocument.prototype.r = function (a, b) {
        var e_6, _a;
        var c = a + b - 1;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.h)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (d.b(a) || d.b(c)) {
                    d.j(a, c);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    IGFormattedTextDocument.$t = markType(IGFormattedTextDocument, 'IGFormattedTextDocument', IGFormattedTextElement.$);
    return IGFormattedTextDocument;
}(IGFormattedTextElement));
export { IGFormattedTextDocument };
//# sourceMappingURL=IGFormattedTextDocument.js.map

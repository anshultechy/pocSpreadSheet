/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { stringIsNullOrEmpty, stringEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var TextAnalyzer = /** @class */ (function (_super) {
    tslib_1.__extends(TextAnalyzer, _super);
    function TextAnalyzer(a, b, c) {
        var _this = _super.call(this) || this;
        _this.n = null;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.k = null;
        _this.m = null;
        _this.l = null;
        _this.n = a;
        _this.b = b;
        _this.d = Math.max(0, _this.j - (b + c));
        _this.c = c;
        return _this;
    }
    TextAnalyzer.a = function (a, b, c, d, e) {
        var f = a.length;
        var g = b + c <= f;
        if (g) {
            return new TextAnalyzer(a, b, f - c - b);
        }
        return new TextAnalyzer(a, d, e);
    };
    TextAnalyzer.prototype.toString = function () {
        var a = new StringBuilder(0);
        a.l("'");
        a.l(this.n);
        a.l("' (");
        a.l(this.o);
        a.l(",");
        a.l(this.p);
        a.l(",");
        a.l(this.q);
        a.l(")");
        return a.toString();
    };
    Object.defineProperty(TextAnalyzer.prototype, "e", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "o", {
        get: function () {
            if (this.k == null) {
                if (stringIsNullOrEmpty(this.n)) {
                    this.k = stringEmpty();
                }
                else if (this.e == 0 || this.e > this.j) {
                    this.k = stringEmpty();
                }
                else {
                    this.k = this.n.substr(0, this.e);
                }
            }
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "p", {
        get: function () {
            if (this.l == null) {
                if (stringIsNullOrEmpty(this.n)) {
                    this.l = stringEmpty();
                }
                else if (this.f == 0 || this.e + this.f > this.j) {
                    this.l = stringEmpty();
                }
                else {
                    this.l = this.n.substr(this.e, this.f);
                }
            }
            return this.l;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "f", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "g", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "h", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "i", {
        get: function () {
            return Math.max(-1, this.j - this.h);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "q", {
        get: function () {
            if (this.m == null) {
                if (stringIsNullOrEmpty(this.n)) {
                    this.m = stringEmpty();
                }
                else if (this.h == 0 || this.h > this.j) {
                    this.m = stringEmpty();
                }
                else {
                    this.m = this.n.substr(this.j - this.h, this.h);
                }
            }
            return this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextAnalyzer.prototype, "j", {
        get: function () {
            return this.n.length;
        },
        enumerable: true,
        configurable: true
    });
    TextAnalyzer.$t = markType(TextAnalyzer, 'TextAnalyzer');
    return TextAnalyzer;
}(Base));
export { TextAnalyzer };
//# sourceMappingURL=TextAnalyzer.js.map

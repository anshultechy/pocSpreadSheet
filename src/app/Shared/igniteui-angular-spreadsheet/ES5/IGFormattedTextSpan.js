/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { IGFormattedTextElement } from "./IGFormattedTextElement";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { typeCast, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var IGFormattedTextSpan = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextSpan, _super);
    function IGFormattedTextSpan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.h = new List$1(IGFormattedTextElement.$, 0);
        return _this;
    }
    IGFormattedTextSpan.prototype.c = function () {
        return _super.prototype.c.call(this) || IGFormattedTextElement.d(IGFormattedTextElement.$, this.h);
    };
    IGFormattedTextSpan.prototype.g = function () {
        if (this.h.count == 0) {
            return this;
        }
        var a = typeCast(IGFormattedTextSpan.$, this.h._inner[this.h.count - 1]);
        if (a == null) {
            return this;
        }
        return a.g();
    };
    IGFormattedTextSpan.prototype.i = function () {
        for (var a = this.h.count - 1; a >= 0; a--) {
            var b = this.h._inner[a];
            var c = typeCast(IGFormattedTextSpan.$, b);
            if (c != null) {
                c.i();
                if (c.h.count == 0) {
                    this.h.removeAt(a);
                }
            }
        }
    };
    IGFormattedTextSpan.prototype.j = function (a, b) {
        for (var c = 0; c < this.h.count; c++) {
            var d = this.h._inner[c];
            if (d.b(a) || d.b(b)) {
                var e = typeCast(IGFormattedTextSpan.$, d);
                if (e != null) {
                    e.j(a, b);
                }
                else {
                    var f = typeCast(IGFormattedTextRun.$, d);
                    if (f != null) {
                        if (f.f < a) {
                            var g = f.e;
                            f.e = a - f.f;
                            var h = new IGFormattedTextRun();
                            h.f = a;
                            h.e = g - f.e;
                            h.a._aa(f.a);
                            f = h;
                            c++;
                            this.h.insert(c, f);
                        }
                        if (b < f.f + f.e - 1) {
                            var i = f.e;
                            f.e = b - f.f + 1;
                            var j = new IGFormattedTextRun();
                            j.f = b + 1;
                            j.e = i - f.e;
                            j.a._aa(f.a);
                            f = j;
                            c++;
                            this.h.insert(c, f);
                        }
                    }
                }
            }
        }
    };
    IGFormattedTextSpan.$t = markType(IGFormattedTextSpan, 'IGFormattedTextSpan', IGFormattedTextElement.$);
    return IGFormattedTextSpan;
}(IGFormattedTextElement));
export { IGFormattedTextSpan };
//# sourceMappingURL=IGFormattedTextSpan.js.map

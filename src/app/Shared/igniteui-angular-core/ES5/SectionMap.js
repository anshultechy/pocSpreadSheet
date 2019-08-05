/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { List$1 } from "./List$1";
import { SectionData } from "./SectionData";
import { SectionDataStartIndexComparer } from "./SectionDataStartIndexComparer";
import { SectionDataUndisplacedStartIndexComparer } from "./SectionDataUndisplacedStartIndexComparer";
import { SectionSearchData } from "./SectionSearchData";
/**
 * @hidden
 */
var SectionMap = /** @class */ (function (_super) {
    tslib_1.__extends(SectionMap, _super);
    function SectionMap() {
        var _this = _super.call(this) || this;
        _this.a = new SectionData();
        _this.g = new SectionDataStartIndexComparer();
        _this.h = new SectionDataUndisplacedStartIndexComparer();
        _this.m = new List$1(SectionData.$, 0);
        _this.j = new SectionSearchData();
        _this.i = new SectionSearchData();
        return _this;
    }
    Object.defineProperty(SectionMap.prototype, "n", {
        get: function () {
            return this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionMap.prototype, "o", {
        get: function () {
            return this.m._inner[this.m.count - 1].e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionMap.prototype, "l", {
        get: function () {
            return this.n.count > 0;
        },
        enumerable: true,
        configurable: true
    });
    SectionMap.prototype.k = function (a, b, c) {
        if (a >= 0 && a < this.m.count) {
            var d = this.m._inner[a];
            if (b >= d.g && b <= d.e) {
                c.c++;
                if (c.c >= c.a.length) {
                    c.c = 0;
                }
                c.b[c.c] = a;
                c.a[c.c] = d;
                return true;
            }
        }
        return false;
    };
    SectionMap.prototype.d = function (a) {
        return this.e(a, this.g, this.j);
    };
    SectionMap.prototype.e = function (a, b, c) {
        if (c.a == null) {
            c.a = new Array(5);
            c.b = new Array(5);
            for (var d = 0; d < c.a.length; d++) {
                c.a[d] = null;
                c.b[d] = -1;
            }
        }
        if (c.a[c.c] != null) {
            if (a >= c.a[c.c].g && a <= c.a[c.c].e) {
                return c.a[c.c];
            }
            for (var e = 0; e < c.a.length; e++) {
                if (c.a[e] != null) {
                    if (a >= c.a[e].g && a <= c.a[e].e) {
                        c.c = e;
                        return c.a[c.c];
                    }
                }
            }
            var f = c.b[c.c] + 1;
            if (this.k(f, a, c)) {
                return c.a[c.c];
            }
            f = c.b[c.c] - 1;
            if (this.k(f, a, c)) {
                return c.a[c.c];
            }
        }
        this.a.g = a;
        var g = this.m.g(this.a, b);
        if (g < 0) {
            g = ~g;
            g--;
        }
        if (this.k(g, a, c)) {
            return c.a[c.c];
        }
        if (this.k(g + 1, a, c)) {
            return c.a[c.c];
        }
        if (this.k(g - 1, a, c)) {
            return c.a[c.c];
        }
        return null;
    };
    SectionMap.prototype.p = function () {
        this.m.clear();
        this.j.a = null;
        this.i.a = null;
    };
    SectionMap.prototype.v = function (a, b, c) {
        for (var d = a.f + 1; d < this.m.count; d++) {
            var e = this.m._inner[d];
            e.c += c;
            e.g += b;
            e.e += b;
        }
    };
    SectionMap.prototype.u = function (a, b, c) {
        for (var d = a.f; d < this.m.count; d++) {
            var e = this.m._inner[d];
            e.c += c;
            e.g += b;
            e.e += b;
            e.f = d;
        }
    };
    SectionMap.prototype.r = function (a) {
        if (this.m.count == 0) {
            return;
        }
        var b = this.m._inner[this.m.count - 1];
        b.e = a;
    };
    SectionMap.prototype.y = function (a, b, c, d) {
        var e = new SectionData();
        e.g = a;
        e.a = d;
        e.f = this.m.count;
        if (this.m.count > 0) {
            e.c = this.m._inner[this.m.count - 1].c;
        }
        var f = new Array(d.length);
        for (var g = 0; g < f.length; g++) {
            f[g] = b.getItemProperty(c, d[g]);
        }
        e.b = f;
        this.m.add(e);
    };
    SectionMap.prototype.w = function (a, b, c) {
        for (var d = a.f + 1; d < this.m.count; d++) {
            this.m._inner[d].f = d;
            this.m._inner[d].c += c;
            this.m._inner[d].g += b;
            this.m._inner[d].e += b;
        }
    };
    SectionMap.prototype.t = function (a, b) {
        this.m.insert(a, b);
    };
    SectionMap.prototype.x = function (a) {
        if (this.j != null) {
            var b = this.j;
            SectionMap.q(a, b);
        }
        if (this.i != null) {
            var c = this.i;
            SectionMap.q(a, c);
        }
        this.m.removeAt(a);
    };
    SectionMap.q = function (a, b) {
        if (b.a != null) {
            for (var c = 0; c < b.a.length; c++) {
                if (b.a[c] != null) {
                    if (b.a[c].f == a) {
                        b.a[c] = null;
                    }
                }
            }
        }
    };
    SectionMap.prototype.c = function () {
        return this.m._inner[this.m.count - 1];
    };
    SectionMap.prototype.b = function () {
        return this.m._inner[0];
    };
    SectionMap.prototype.s = function () {
        this.m._inner[this.m.count - 1].c++;
    };
    SectionMap.prototype.f = function (a) {
        return this.e(a, this.h, this.i);
    };
    SectionMap.$t = markType(SectionMap, 'SectionMap');
    return SectionMap;
}(Base));
export { SectionMap };
//# sourceMappingURL=SectionMap.js.map
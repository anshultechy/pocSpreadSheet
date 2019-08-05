/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { LinkedList$1 } from "./LinkedList$1";
import { QuadTreeForceVector } from "./QuadTreeForceVector";
/**
 * @hidden
 */
var QuadTree = /** @class */ (function (_super) {
    tslib_1.__extends(QuadTree, _super);
    function QuadTree(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.f = 0;
        _this.i = 0;
        _this.b = new QuadTreeNode();
        _this.b.b = _this;
        _this.b.c = new QuadTreeBoundingBox();
        var e = Math.max(a, b);
        _this.b.c.b = e / 2;
        _this.b.c.c = e / 2;
        _this.b.c.e = e / 2;
        _this.b.c.d = e / 2;
        _this.f = d;
        _this.i = c;
        return _this;
    }
    QuadTree.prototype.c = function (a) {
        return this.b.i(a);
    };
    QuadTree.prototype.d = function (a) {
        return this.b.k(a);
    };
    QuadTree.prototype.e = function (a) {
        var b = new List$1(QuadTreeNode.$, 0);
        this.b.x(a, b);
        return b;
    };
    QuadTree.prototype.j = function () {
        this.b.w();
    };
    QuadTree.prototype.k = function () {
        this.b.z();
    };
    QuadTree.prototype.g = function () {
        return this.h(this.b, new HashSet$1(QuadTreeBoundingBox.$, 0));
    };
    QuadTree.prototype.h = function (a, b) {
        if (a.j) {
            var c = 0;
            var d = a.l.c;
            while (d != null) {
                if (!b.contains(d.c)) {
                    c += 1;
                    b.add_1(d.c);
                }
                d = d.a;
            }
            return c;
        }
        var e = this.h(a.f, b);
        e += this.h(a.e, b);
        e += this.h(a.h, b);
        e += this.h(a.g, b);
        return e;
    };
    QuadTree.prototype.a = function (a, b, c) {
        return this.b.d(a, b, c);
    };
    QuadTree.$t = markType(QuadTree, 'QuadTree');
    return QuadTree;
}(Base));
export { QuadTree };
/**
 * @hidden
 */
var QuadTreeNode = /** @class */ (function (_super) {
    tslib_1.__extends(QuadTreeNode, _super);
    function QuadTreeNode() {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.l = null;
        _this.t = 0;
        _this.c = null;
        _this.q = 0;
        _this.a = null;
        _this.m = 0;
        _this.n = 0;
        _this.o = 0;
        _this.m = 0;
        _this.n = 0;
        _this.o = 0;
        _this.l = new LinkedList$1(QuadTreeBoundingBox.$);
        _this.a = new Array(4);
        _this.c = new QuadTreeBoundingBox();
        for (var a = 0; a < 4; a++) {
            _this.a[a] = null;
        }
        return _this;
    }
    QuadTreeNode.prototype.k = function (a) {
        if (!this.c.a(a)) {
            return false;
        }
        var b = this.f == null && this.e == null && this.h == null && this.g == null;
        if (b) {
            var c = this.l.c;
            while (c != null) {
                if (c.c == a) {
                    this.l.h(c);
                    this.t--;
                    return true;
                }
                c = c.a;
            }
            return false;
        }
        this.f.k(a);
        this.e.k(a);
        this.h.k(a);
        this.g.k(a);
        return false;
    };
    Object.defineProperty(QuadTreeNode.prototype, "j", {
        get: function () {
            return this.f == null && this.e == null && this.h == null && this.g == null;
        },
        enumerable: true,
        configurable: true
    });
    QuadTreeNode.prototype.x = function (a, b) {
        if (!this.c.a(a)) {
            return;
        }
        if (this.j) {
            b.add(this);
            return;
        }
        this.f.x(a, b);
        this.e.x(a, b);
        this.h.x(a, b);
        this.g.x(a, b);
    };
    QuadTreeNode.prototype.w = function () {
        if (this.f != null) {
            this.f.w();
        }
        if (this.e != null) {
            this.e.w();
        }
        if (this.h != null) {
            this.h.w();
        }
        if (this.g != null) {
            this.h.w();
        }
        if (this.f.j && this.f.t == 0 && this.e.j && this.e.t == 0 && this.h.j && this.h.t == 0 && this.g.j && this.g.t == 0) {
            this.f = this.e = this.h = this.g = null;
            return;
        }
    };
    QuadTreeNode.prototype.i = function (a) {
        if (!this.c.a(a)) {
            return false;
        }
        var b = this.f == null && this.e == null && this.h == null && this.g == null;
        if (b && this.t < this.b.f) {
            this.l.f(a);
            this.t++;
            return true;
        }
        else if (b && this.q < this.b.i) {
            this.y();
        }
        else if (b) {
            this.l.f(a);
            this.t++;
            return true;
        }
        var c = this.f.i(a);
        c = this.e.i(a) || c;
        c = this.h.i(a) || c;
        c = this.g.i(a) || c;
        return c;
    };
    QuadTreeNode.prototype.y = function () {
        this.f = new QuadTreeNode();
        this.e = new QuadTreeNode();
        this.h = new QuadTreeNode();
        this.g = new QuadTreeNode();
        var a = this.c.e / 2;
        this.f.c.b = this.c.b - a;
        this.f.c.c = this.c.c - a;
        this.e.c.b = this.c.b + a;
        this.e.c.c = this.c.c - a;
        this.h.c.b = this.c.b - a;
        this.h.c.c = this.c.c + a;
        this.g.c.b = this.c.b + a;
        this.g.c.c = this.c.c + a;
        for (var b = 0; b < 4; b++) {
            this.a[b].q = this.q + 1;
            this.a[b].c.e = a;
            this.a[b].c.d = a;
            this.a[b].b = this.b;
        }
        var c = this.l.c;
        while (c != null) {
            var d = c.c;
            this.f.i(d);
            this.e.i(d);
            this.h.i(d);
            this.g.i(d);
            c = c.a;
        }
        this.l.g();
        this.t = 0;
    };
    QuadTreeNode.prototype.z = function () {
        if (this.j) {
            var a = 0;
            var b = 0;
            var c = this.l.c;
            while (c != null) {
                var d = c.c;
                a += d.b;
                b += d.c;
                c = c.a;
            }
            if (this.t == 0) {
                this.m = 0;
                this.n = 0;
                this.o = 0;
            }
            else {
                this.m = a / this.t;
                this.n = b / this.t;
                this.o = this.t;
            }
        }
        else {
            this.f.z();
            this.h.z();
            this.e.z();
            this.g.z();
            var e = 0;
            var f = 0;
            var g = 0;
            for (var h = 0; h < 4; h++) {
                g += this.a[h].o;
                e += this.a[h].m * this.a[h].o;
                f += this.a[h].n * this.a[h].o;
            }
            if (this.o > 0) {
                this.m = e / g;
                this.n = f / g;
            }
            this.o = g;
        }
    };
    QuadTreeNode.prototype.d = function (a, b, c) {
        var d = Math.sqrt((a - this.m) * (a - this.m) + (b - this.n) * (b - this.n));
        var e = this.c.e * 2;
        if (e / d < c || this.j) {
            var f_1 = (a - this.m) * this.o / (d * d);
            var g_1 = (b - this.n) * this.o / (d * d);
            return ((function () {
                var $ret = new QuadTreeForceVector();
                $ret.a = f_1;
                $ret.b = g_1;
                return $ret;
            })());
        }
        else {
            var h_1 = 0;
            var i_1 = 0;
            for (var j = 0; j < 4; j++) {
                var k = this.a[j].d(a, b, c);
                h_1 += k.a;
                i_1 += k.b;
            }
            return ((function () {
                var $ret = new QuadTreeForceVector();
                $ret.a = h_1;
                $ret.b = i_1;
                return $ret;
            })());
        }
    };
    Object.defineProperty(QuadTreeNode.prototype, "f", {
        get: function () {
            return this.a[0];
        },
        set: function (a) {
            this.a[0] = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadTreeNode.prototype, "e", {
        get: function () {
            return this.a[1];
        },
        set: function (a) {
            this.a[1] = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadTreeNode.prototype, "h", {
        get: function () {
            return this.a[2];
        },
        set: function (a) {
            this.a[2] = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadTreeNode.prototype, "g", {
        get: function () {
            return this.a[3];
        },
        set: function (a) {
            this.a[3] = a;
        },
        enumerable: true,
        configurable: true
    });
    QuadTreeNode.$t = markType(QuadTreeNode, 'QuadTreeNode');
    return QuadTreeNode;
}(Base));
export { QuadTreeNode };
//# sourceMappingURL=QuadTree_combined.js.map
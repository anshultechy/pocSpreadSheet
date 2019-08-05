/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { DescriptionTreeAction } from "./DescriptionTreeAction";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { Dictionary$2 } from "./Dictionary$2";
import { DescriptionTreeReconciler_TreeModeData } from "./DescriptionTreeReconciler_TreeModeData";
/**
 * @hidden
 */
var DescriptionTreeReconciler = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionTreeReconciler, _super);
    function DescriptionTreeReconciler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionTreeReconciler.b = function (a, b) {
        var c = new List$1(DescriptionTreeAction.$, 0);
        if (a == null && b == null) {
            return c;
        }
        if (a != null && b == null) {
            var d = new DescriptionTreeAction();
            d.a = 4;
            d.e = 0;
            d.g = a;
            d.c = null;
            d.i = null;
            c.add(d);
            return c;
        }
        if (a == null && b != null) {
            var e = new DescriptionTreeAction();
            e.a = 2;
            e.e = 0;
            e.f = b;
            e.c = null;
            e.i = null;
            c.add(e);
            return c;
        }
        if (b.h != a.h) {
            var f = new DescriptionTreeAction();
            f.a = 3;
            f.e = 0;
            f.g = a;
            f.f = b;
            f.c = null;
            f.i = null;
            c.add(f);
            return c;
        }
        DescriptionTreeReconciler.f(c, a, b);
        return c;
    };
    DescriptionTreeReconciler.f = function (a, b, c) {
        c.f = b.f;
        var d = DescriptionTreeReconciler.d(b);
        var e = DescriptionTreeReconciler.d(c);
        var f = new List$1(DescriptionPropertyValue.$, 0);
        var g = new List$1(DescriptionPropertyValue.$, 0);
        var h = new List$1(DescriptionPropertyValue.$, 0);
        for (var i = 0; i < d.count; i++) {
            var j = d._inner[i];
            if (c.b(j.c)) {
                if (!Base.equalsStatic(j, c.a(j.c))) {
                    var k = c.a(j.c);
                    if (typeCast(DescriptionTreeNode.$, j.b) !== null && typeCast(DescriptionTreeNode.$, k.b) !== null) {
                        var l = j.b;
                        var m = k.b;
                        if (l.h == m.h) {
                            DescriptionTreeReconciler.f(a, l, m);
                        }
                        else {
                            h.add(c.a(j.c));
                        }
                    }
                    else {
                        h.add(c.a(j.c));
                    }
                }
            }
            else {
                f.add(j);
            }
        }
        for (var n = 0; n < e.count; n++) {
            var o = e._inner[n];
            if (!b.b(o.c)) {
                g.add(o);
            }
        }
        for (var p = 0; p < f.count; p++) {
            var q = f._inner[p];
            var r = new DescriptionTreeAction();
            r.b = b;
            r.a = 1;
            r.i = q.c;
            r.c = q.a;
            r.g = q.b;
            a.add(r);
        }
        for (var s = 0; s < g.count; s++) {
            var t = g._inner[s];
            var u = new DescriptionTreeAction();
            u.b = b;
            u.a = 0;
            u.i = t.c;
            u.c = t.a;
            u.f = t.b;
            u.g = null;
            a.add(u);
        }
        for (var v = 0; v < h.count; v++) {
            var w = h._inner[v];
            var x = b.a(w.c).b;
            var y = w.b;
            if (!Base.equalsStatic(y, x)) {
                var z = new DescriptionTreeAction();
                z.b = b;
                z.a = 0;
                z.i = w.c;
                z.c = w.a;
                z.f = w.b;
                z.g = b.a(w.c).b;
                a.add(z);
            }
        }
        var aa = DescriptionTreeReconciler.c(b);
        var ab = DescriptionTreeReconciler.c(c);
        var ac = new List$1(DescriptionPropertyValue.$, 0);
        var ad = new List$1(DescriptionPropertyValue.$, 0);
        var ae = new List$1(DescriptionPropertyValue.$, 0);
        for (var af = 0; af < aa.count; af++) {
            var ag = aa._inner[af];
            if (c.b(ag.c)) {
                if (!DescriptionTreeReconciler.a(ag.b, c.a(ag.c).b)) {
                    ae.add(c.a(ag.c));
                }
                else {
                    var ah = ag.b;
                    var ai = c.a(ag.c).b;
                    for (var aj = 0; aj < ah.length; aj++) {
                        var ak = ah[aj];
                        var al = ai[aj];
                        if (typeCast(DescriptionTreeNode.$, ak) !== null && typeCast(DescriptionTreeNode.$, al) !== null) {
                            var am = ak;
                            var an = al;
                            if (am.h == an.h) {
                                DescriptionTreeReconciler.f(a, am, an);
                            }
                            else {
                                var ao = new DescriptionTreeAction();
                                ao.i = ag.c;
                                ao.c = ag.a;
                                ao.b = b;
                                ao.a = 3;
                                ao.e = aj;
                                ao.d = aj;
                                ao.g = am;
                                ao.f = an;
                                a.add(ao);
                            }
                        }
                        else {
                            if (!Base.equalsStatic(ak, al)) {
                                var ap = new DescriptionTreeAction();
                                ap.i = ag.c;
                                ap.c = ag.a;
                                ap.b = b;
                                ap.a = 3;
                                ap.e = aj;
                                ap.d = aj;
                                ap.g = ak;
                                ap.f = al;
                                a.add(ap);
                            }
                        }
                    }
                }
            }
            else {
                ac.add(ag);
            }
        }
        for (var aq = 0; aq < ab.count; aq++) {
            var ar = ab._inner[aq];
            if (!b.b(ar.c)) {
                ad.add(ar);
            }
        }
        for (var as = 0; as < ac.count; as++) {
            var at = ac._inner[as];
            var au = new DescriptionTreeAction();
            au.b = b;
            au.i = at.c;
            au.c = at.a;
            au.a = 5;
            au.g = at.b;
            a.add(au);
        }
        for (var av = 0; av < ad.count; av++) {
            var aw = ad._inner[av];
            var ax = new DescriptionTreeAction();
            ax.b = b;
            ax.i = aw.c;
            ax.c = aw.a;
            ax.a = 0;
            ax.g = null;
            ax.f = aw.b;
            a.add(ax);
        }
        for (var ay = 0; ay < ae.count; ay++) {
            DescriptionTreeReconciler.g(a, b, c, b.a(ae._inner[ay].c), ae._inner[ay]);
        }
    };
    DescriptionTreeReconciler.e = function (a) {
        if (a == null) {
            return "UNKOWN";
        }
        if (!a.b("Type")) {
            return "UNKOWN";
        }
        return a.a("Type").b;
    };
    DescriptionTreeReconciler.g = function (a, b, c, d, e) {
        var f = false;
        var g = d.b;
        var h = e.b;
        if (g.length > 0) {
            if (typeCast(DescriptionTreeNode.$, g[0]) !== null) {
                var i = g[0];
                if (i.b("Name") && i.a("Name") != null) {
                    f = true;
                }
            }
        }
        if (h.length > 0) {
            if (typeCast(DescriptionTreeNode.$, h[0]) !== null) {
                var j = h[0];
                if (j.b("Name") && j.a("Name") != null) {
                    f = true;
                }
            }
        }
        if (f) {
            var k = new Dictionary$2(String_$type, DescriptionTreeReconciler_TreeModeData.$, 0);
            var l = new List$1(DescriptionTreeReconciler_TreeModeData.$, 0);
            var m = new Dictionary$2(String_$type, DescriptionTreeReconciler_TreeModeData.$, 0);
            var n = new List$1(DescriptionTreeReconciler_TreeModeData.$, 0);
            var o = 0;
            for (var p = 0; p < g.length; p++) {
                var q = new DescriptionTreeReconciler_TreeModeData();
                q.a = g[p];
                q.d = p;
                q.f = q.a.b("Name") ? q.a.a("Name").b : null;
                if (q.f == null) {
                    q.f = "BADKEY_" + o.toString();
                    o++;
                }
                l.add(q);
                k.addItem(q.f, q);
            }
            for (var r = 0; r < h.length; r++) {
                var s = new DescriptionTreeReconciler_TreeModeData();
                s.a = h[r];
                s.d = r;
                s.f = s.a.b("Name") ? s.a.a("Name").b : null;
                if (s.f == null) {
                    s.f = "BADKEY_" + o.toString();
                    o++;
                }
                n.add(s);
                m.addItem(s.f, s);
            }
            for (var t = 0; t < l.count; t++) {
                var u = l._inner[t];
                if (!m.containsKey(u.f) || (m.containsKey(u.f) && DescriptionTreeReconciler.e(u.a) != DescriptionTreeReconciler.e(m.item(u.f).a))) {
                    u.c = true;
                }
            }
            for (var v = 0; v < n.count; v++) {
                var w = n._inner[v];
                if (!k.containsKey(w.f) || (k.containsKey(w.f) && DescriptionTreeReconciler.e(w.a) != DescriptionTreeReconciler.e(k.item(w.f).a))) {
                    w.b = true;
                }
                else {
                    k.item(w.f).e = v;
                }
            }
            for (var x = 0; x < l.count; x++) {
                var y = l._inner[x];
                if (y.c) {
                    var z = new DescriptionTreeAction();
                    z.i = e.c;
                    z.b = b;
                    z.c = e.a;
                    z.e = y.d;
                    z.a = 4;
                    z.g = y.a;
                    a.add(z);
                    for (var aa = x + 1; aa < l.count; aa++) {
                        var ab = l._inner[aa];
                        ab.d--;
                    }
                }
            }
            for (var ac = 0; ac < n.count; ac++) {
                var ad = n._inner[ac];
                if (ad.b) {
                    var ae = new DescriptionTreeAction();
                    ae.i = e.c;
                    ae.b = b;
                    ae.c = e.a;
                    ae.d = ac;
                    ae.a = 2;
                    ae.f = h[ac];
                    a.add(ae);
                    for (var af = 0; af < l.count; af++) {
                        var ag = l._inner[af];
                        if (!ag.c && ag.d >= ac) {
                            ag.d++;
                        }
                    }
                }
                else {
                    var ah = k.item(ad.f);
                    if (ah.d == ah.e) {
                        DescriptionTreeReconciler.f(a, ah.a, ad.a);
                        continue;
                    }
                    var ai = new DescriptionTreeAction();
                    ai.i = e.c;
                    ai.b = b;
                    ai.c = e.a;
                    ai.e = ah.d;
                    ai.a = 4;
                    ai.g = ah.a;
                    a.add(ai);
                    for (var aj = 0; aj < l.count; aj++) {
                        var ak = l._inner[aj];
                        if (!ak.c && ak.a != ah.a && ak.d >= ah.d) {
                            ak.d--;
                        }
                    }
                    ai = new DescriptionTreeAction();
                    ai.i = e.c;
                    ai.b = b;
                    ai.c = e.a;
                    ai.d = ah.e;
                    ai.a = 2;
                    ai.f = ah.a;
                    a.add(ai);
                    ah.d = ah.e;
                    for (var al = 0; al < l.count; al++) {
                        var am = l._inner[al];
                        if (!am.c && am.a != ah.a && am.d >= ah.d) {
                            am.d++;
                        }
                    }
                    DescriptionTreeReconciler.f(a, ah.a, ad.a);
                }
            }
        }
        else {
            var an = Math.max(g.length, h.length);
            for (var ao = 0; ao < an; ao++) {
                if (ao >= g.length) {
                    var ap = new DescriptionTreeAction();
                    ap.i = e.c;
                    ap.b = b;
                    ap.c = e.a;
                    ap.d = ao;
                    ap.a = 2;
                    ap.f = h[ao];
                    a.add(ap);
                }
                else if (ao >= h.length) {
                    var aq = new DescriptionTreeAction();
                    aq.i = e.c;
                    aq.b = b;
                    aq.c = e.a;
                    aq.e = h.length;
                    aq.a = 4;
                    aq.g = g[ao];
                    a.add(aq);
                }
                else {
                    var ar = g[ao];
                    var as = h[ao];
                    if (typeCast(DescriptionTreeNode.$, ar) !== null && typeCast(DescriptionTreeNode.$, as) !== null) {
                        var at = ar;
                        var au = as;
                        if (at.h == au.h) {
                            DescriptionTreeReconciler.f(a, at, au);
                        }
                        else {
                            var av = new DescriptionTreeAction();
                            av.i = e.c;
                            av.b = b;
                            av.c = e.a;
                            av.e = ao;
                            av.a = 3;
                            av.g = g[ao];
                            av.f = h[ao];
                            a.add(av);
                        }
                    }
                    else {
                        if (!Base.equalsStatic(ar, as)) {
                            var aw = new DescriptionTreeAction();
                            aw.i = e.c;
                            aw.b = b;
                            aw.c = e.a;
                            aw.e = ao;
                            aw.a = 3;
                            aw.g = g[ao];
                            aw.f = h[ao];
                            a.add(aw);
                        }
                    }
                }
            }
        }
    };
    DescriptionTreeReconciler.a = function (a, b) {
        var c = a;
        var d = b;
        if (c.length != d.length) {
            return false;
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            var g = d[e];
            if (typeCast(DescriptionTreeNode.$, f) !== null && !(typeCast(DescriptionTreeNode.$, g) !== null)) {
                return false;
            }
            if (!(typeCast(DescriptionTreeNode.$, f) !== null) && typeCast(DescriptionTreeNode.$, g) !== null) {
                return false;
            }
            if (typeCast(DescriptionTreeNode.$, f) !== null) {
                var h = f;
                var i = g;
                if (h.h != i.h) {
                    return false;
                }
                var j = h.b("Name") ? h.a("Name").b : null;
                var k = i.b("Name") ? i.a("Name").b : null;
                if (!Base.equalsStatic(j, k)) {
                    return false;
                }
            }
            else {
                if (!Base.equalsStatic(f, g)) {
                    return false;
                }
            }
        }
        return true;
    };
    DescriptionTreeReconciler.d = function (a) {
        var b = new List$1(DescriptionPropertyValue.$, 0);
        var c = a.e();
        for (var d = 0; d < c.count; d++) {
            var e = c._inner[d];
            if (e.a != null && e.a.knownType != 10 && e.a.knownType != 9) {
                b.add(e);
            }
        }
        return b;
    };
    DescriptionTreeReconciler.c = function (a) {
        var b = new List$1(DescriptionPropertyValue.$, 0);
        var c = a.e();
        for (var d = 0; d < c.count; d++) {
            var e = c._inner[d];
            if (e.a != null && (e.a.knownType == 10 || e.a.knownType == 9)) {
                b.add(e);
            }
        }
        return b;
    };
    DescriptionTreeReconciler.$t = markType(DescriptionTreeReconciler, 'DescriptionTreeReconciler');
    return DescriptionTreeReconciler;
}(Base));
export { DescriptionTreeReconciler };
//# sourceMappingURL=DescriptionTreeReconciler.js.map
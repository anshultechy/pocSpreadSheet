/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class DescriptionTreeReconciler extends Base {
    static b(a, b) {
        let c = new List$1(DescriptionTreeAction.$, 0);
        if (a == null && b == null) {
            return c;
        }
        if (a != null && b == null) {
            let d = new DescriptionTreeAction();
            d.a = 4;
            d.e = 0;
            d.g = a;
            d.c = null;
            d.i = null;
            c.add(d);
            return c;
        }
        if (a == null && b != null) {
            let e = new DescriptionTreeAction();
            e.a = 2;
            e.e = 0;
            e.f = b;
            e.c = null;
            e.i = null;
            c.add(e);
            return c;
        }
        if (b.h != a.h) {
            let f = new DescriptionTreeAction();
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
    }
    static f(a, b, c) {
        c.f = b.f;
        let d = DescriptionTreeReconciler.d(b);
        let e = DescriptionTreeReconciler.d(c);
        let f = new List$1(DescriptionPropertyValue.$, 0);
        let g = new List$1(DescriptionPropertyValue.$, 0);
        let h = new List$1(DescriptionPropertyValue.$, 0);
        for (let i = 0; i < d.count; i++) {
            let j = d._inner[i];
            if (c.b(j.c)) {
                if (!Base.equalsStatic(j, c.a(j.c))) {
                    let k = c.a(j.c);
                    if (typeCast(DescriptionTreeNode.$, j.b) !== null && typeCast(DescriptionTreeNode.$, k.b) !== null) {
                        let l = j.b;
                        let m = k.b;
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
        for (let n = 0; n < e.count; n++) {
            let o = e._inner[n];
            if (!b.b(o.c)) {
                g.add(o);
            }
        }
        for (let p = 0; p < f.count; p++) {
            let q = f._inner[p];
            let r = new DescriptionTreeAction();
            r.b = b;
            r.a = 1;
            r.i = q.c;
            r.c = q.a;
            r.g = q.b;
            a.add(r);
        }
        for (let s = 0; s < g.count; s++) {
            let t = g._inner[s];
            let u = new DescriptionTreeAction();
            u.b = b;
            u.a = 0;
            u.i = t.c;
            u.c = t.a;
            u.f = t.b;
            u.g = null;
            a.add(u);
        }
        for (let v = 0; v < h.count; v++) {
            let w = h._inner[v];
            let x = b.a(w.c).b;
            let y = w.b;
            if (!Base.equalsStatic(y, x)) {
                let z = new DescriptionTreeAction();
                z.b = b;
                z.a = 0;
                z.i = w.c;
                z.c = w.a;
                z.f = w.b;
                z.g = b.a(w.c).b;
                a.add(z);
            }
        }
        let aa = DescriptionTreeReconciler.c(b);
        let ab = DescriptionTreeReconciler.c(c);
        let ac = new List$1(DescriptionPropertyValue.$, 0);
        let ad = new List$1(DescriptionPropertyValue.$, 0);
        let ae = new List$1(DescriptionPropertyValue.$, 0);
        for (let af = 0; af < aa.count; af++) {
            let ag = aa._inner[af];
            if (c.b(ag.c)) {
                if (!DescriptionTreeReconciler.a(ag.b, c.a(ag.c).b)) {
                    ae.add(c.a(ag.c));
                }
                else {
                    let ah = ag.b;
                    let ai = c.a(ag.c).b;
                    for (let aj = 0; aj < ah.length; aj++) {
                        let ak = ah[aj];
                        let al = ai[aj];
                        if (typeCast(DescriptionTreeNode.$, ak) !== null && typeCast(DescriptionTreeNode.$, al) !== null) {
                            let am = ak;
                            let an = al;
                            if (am.h == an.h) {
                                DescriptionTreeReconciler.f(a, am, an);
                            }
                            else {
                                let ao = new DescriptionTreeAction();
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
                                let ap = new DescriptionTreeAction();
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
        for (let aq = 0; aq < ab.count; aq++) {
            let ar = ab._inner[aq];
            if (!b.b(ar.c)) {
                ad.add(ar);
            }
        }
        for (let as = 0; as < ac.count; as++) {
            let at = ac._inner[as];
            let au = new DescriptionTreeAction();
            au.b = b;
            au.i = at.c;
            au.c = at.a;
            au.a = 5;
            au.g = at.b;
            a.add(au);
        }
        for (let av = 0; av < ad.count; av++) {
            let aw = ad._inner[av];
            let ax = new DescriptionTreeAction();
            ax.b = b;
            ax.i = aw.c;
            ax.c = aw.a;
            ax.a = 0;
            ax.g = null;
            ax.f = aw.b;
            a.add(ax);
        }
        for (let ay = 0; ay < ae.count; ay++) {
            DescriptionTreeReconciler.g(a, b, c, b.a(ae._inner[ay].c), ae._inner[ay]);
        }
    }
    static e(a) {
        if (a == null) {
            return "UNKOWN";
        }
        if (!a.b("Type")) {
            return "UNKOWN";
        }
        return a.a("Type").b;
    }
    static g(a, b, c, d, e) {
        let f = false;
        let g = d.b;
        let h = e.b;
        if (g.length > 0) {
            if (typeCast(DescriptionTreeNode.$, g[0]) !== null) {
                let i = g[0];
                if (i.b("Name") && i.a("Name") != null) {
                    f = true;
                }
            }
        }
        if (h.length > 0) {
            if (typeCast(DescriptionTreeNode.$, h[0]) !== null) {
                let j = h[0];
                if (j.b("Name") && j.a("Name") != null) {
                    f = true;
                }
            }
        }
        if (f) {
            let k = new Dictionary$2(String_$type, DescriptionTreeReconciler_TreeModeData.$, 0);
            let l = new List$1(DescriptionTreeReconciler_TreeModeData.$, 0);
            let m = new Dictionary$2(String_$type, DescriptionTreeReconciler_TreeModeData.$, 0);
            let n = new List$1(DescriptionTreeReconciler_TreeModeData.$, 0);
            let o = 0;
            for (let p = 0; p < g.length; p++) {
                let q = new DescriptionTreeReconciler_TreeModeData();
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
            for (let r = 0; r < h.length; r++) {
                let s = new DescriptionTreeReconciler_TreeModeData();
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
            for (let t = 0; t < l.count; t++) {
                let u = l._inner[t];
                if (!m.containsKey(u.f) || (m.containsKey(u.f) && DescriptionTreeReconciler.e(u.a) != DescriptionTreeReconciler.e(m.item(u.f).a))) {
                    u.c = true;
                }
            }
            for (let v = 0; v < n.count; v++) {
                let w = n._inner[v];
                if (!k.containsKey(w.f) || (k.containsKey(w.f) && DescriptionTreeReconciler.e(w.a) != DescriptionTreeReconciler.e(k.item(w.f).a))) {
                    w.b = true;
                }
                else {
                    k.item(w.f).e = v;
                }
            }
            for (let x = 0; x < l.count; x++) {
                let y = l._inner[x];
                if (y.c) {
                    let z = new DescriptionTreeAction();
                    z.i = e.c;
                    z.b = b;
                    z.c = e.a;
                    z.e = y.d;
                    z.a = 4;
                    z.g = y.a;
                    a.add(z);
                    for (let aa = x + 1; aa < l.count; aa++) {
                        let ab = l._inner[aa];
                        ab.d--;
                    }
                }
            }
            for (let ac = 0; ac < n.count; ac++) {
                let ad = n._inner[ac];
                if (ad.b) {
                    let ae = new DescriptionTreeAction();
                    ae.i = e.c;
                    ae.b = b;
                    ae.c = e.a;
                    ae.d = ac;
                    ae.a = 2;
                    ae.f = h[ac];
                    a.add(ae);
                    for (let af = 0; af < l.count; af++) {
                        let ag = l._inner[af];
                        if (!ag.c && ag.d >= ac) {
                            ag.d++;
                        }
                    }
                }
                else {
                    let ah = k.item(ad.f);
                    if (ah.d == ah.e) {
                        DescriptionTreeReconciler.f(a, ah.a, ad.a);
                        continue;
                    }
                    let ai = new DescriptionTreeAction();
                    ai.i = e.c;
                    ai.b = b;
                    ai.c = e.a;
                    ai.e = ah.d;
                    ai.a = 4;
                    ai.g = ah.a;
                    a.add(ai);
                    for (let aj = 0; aj < l.count; aj++) {
                        let ak = l._inner[aj];
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
                    for (let al = 0; al < l.count; al++) {
                        let am = l._inner[al];
                        if (!am.c && am.a != ah.a && am.d >= ah.d) {
                            am.d++;
                        }
                    }
                    DescriptionTreeReconciler.f(a, ah.a, ad.a);
                }
            }
        }
        else {
            let an = Math.max(g.length, h.length);
            for (let ao = 0; ao < an; ao++) {
                if (ao >= g.length) {
                    let ap = new DescriptionTreeAction();
                    ap.i = e.c;
                    ap.b = b;
                    ap.c = e.a;
                    ap.d = ao;
                    ap.a = 2;
                    ap.f = h[ao];
                    a.add(ap);
                }
                else if (ao >= h.length) {
                    let aq = new DescriptionTreeAction();
                    aq.i = e.c;
                    aq.b = b;
                    aq.c = e.a;
                    aq.e = h.length;
                    aq.a = 4;
                    aq.g = g[ao];
                    a.add(aq);
                }
                else {
                    let ar = g[ao];
                    let as = h[ao];
                    if (typeCast(DescriptionTreeNode.$, ar) !== null && typeCast(DescriptionTreeNode.$, as) !== null) {
                        let at = ar;
                        let au = as;
                        if (at.h == au.h) {
                            DescriptionTreeReconciler.f(a, at, au);
                        }
                        else {
                            let av = new DescriptionTreeAction();
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
                            let aw = new DescriptionTreeAction();
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
    }
    static a(a, b) {
        let c = a;
        let d = b;
        if (c.length != d.length) {
            return false;
        }
        for (let e = 0; e < c.length; e++) {
            let f = c[e];
            let g = d[e];
            if (typeCast(DescriptionTreeNode.$, f) !== null && !(typeCast(DescriptionTreeNode.$, g) !== null)) {
                return false;
            }
            if (!(typeCast(DescriptionTreeNode.$, f) !== null) && typeCast(DescriptionTreeNode.$, g) !== null) {
                return false;
            }
            if (typeCast(DescriptionTreeNode.$, f) !== null) {
                let h = f;
                let i = g;
                if (h.h != i.h) {
                    return false;
                }
                let j = h.b("Name") ? h.a("Name").b : null;
                let k = i.b("Name") ? i.a("Name").b : null;
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
    }
    static d(a) {
        let b = new List$1(DescriptionPropertyValue.$, 0);
        let c = a.e();
        for (let d = 0; d < c.count; d++) {
            let e = c._inner[d];
            if (e.a != null && e.a.knownType != 10 && e.a.knownType != 9) {
                b.add(e);
            }
        }
        return b;
    }
    static c(a) {
        let b = new List$1(DescriptionPropertyValue.$, 0);
        let c = a.e();
        for (let d = 0; d < c.count; d++) {
            let e = c._inner[d];
            if (e.a != null && (e.a.knownType == 10 || e.a.knownType == 9)) {
                b.add(e);
            }
        }
        return b;
    }
}
DescriptionTreeReconciler.$t = markType(DescriptionTreeReconciler, 'DescriptionTreeReconciler');
//# sourceMappingURL=DescriptionTreeReconciler.js.map
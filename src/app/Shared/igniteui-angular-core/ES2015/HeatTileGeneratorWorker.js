/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { truncate, isNaN_, logBase } from "./number";
/**
 * @hidden
 */
export class HeatTileGeneratorWorker extends Base {
    constructor(a) {
        super();
        this.f = null;
        this.a = null;
        this.n = 0;
        this.o = 0;
        this.p = 0;
        this.w = null;
        this.u = 0;
        this.h = false;
        this.r = 0;
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.l = 0;
        this._completedSink = null;
        this.f = a;
        HeatTileGeneratorWorker.s++;
        if (HeatTileGeneratorWorker.s == 0x7FFFFFFFFFFFFFFF) {
            HeatTileGeneratorWorker.s = 0;
        }
        this.r = HeatTileGeneratorWorker.s;
    }
    get t() {
        return this.r;
    }
    get g() {
        return this.f;
    }
    doWork() {
        let a = this.g.blurRadius;
        let b = a;
        let c = this.g.maxBlurRadius;
        let d = this.g.scaler;
        this.n = this.g.x;
        this.o = this.g.y;
        this.p = this.g.z;
        if (this.g.useBlurRadiusAdjustedForZoom && this.p > 0) {
            let e = Math.sqrt(1 * 1 + 1 * 1) * Math.pow(2, this.p - 1);
            b = a * e;
        }
        if (!isNaN_(c)) {
            if (b > c) {
                b = c;
            }
        }
        let f = this.g.xValues;
        let g = this.g.yValues;
        let h = this.g.values;
        let i = this.g.xValues.length;
        let j = this.g.yValues.length;
        let k;
        let l;
        let m;
        let n;
        let o;
        let p;
        let q;
        let r = this.g.minimumVisibleLongitude;
        let s = this.g.maximumVisibleLongitude;
        let t = this.g.minimumVisibleLatitude;
        let u = this.g.maximumVisibleLatitude;
        let v = this.q(this.g.tileViewport, b);
        let w = this.c(v, b);
        let x = Math.abs(d.t(0, this.g.window, this.g.tileViewport) - d.t(b, this.g.window, this.g.tileViewport));
        let y = Math.abs(d.u(0, this.g.window, this.g.tileViewport) - d.u(b, this.g.window, this.g.tileViewport));
        let z;
        let aa;
        let ab = new List$1(Number_$type, 0);
        let ac = new List$1(Number_$type, 0);
        let ad = new List$1(Number_$type, 0);
        for (let ae = 0; ae < i; ae++) {
            k = f[ae];
            l = g[ae];
            m = h[ae];
            n = k - y;
            o = k + y;
            p = l - x;
            q = l + x;
            if (o < r || q < t || p > u || n > s) {
                continue;
            }
            ab.add(k);
            ac.add(l);
            ad.add(m);
        }
        let af = this.d(this.g.tileViewport);
        let ag = this.b(this.g.tileViewport);
        let ah = truncate(this.g.tileViewport.width);
        let ai = ac.count;
        d.v(ac, this.g.window, this.g.tileViewport);
        d.w(ab, this.g.window, this.g.tileViewport);
        let aj;
        let ak;
        let al;
        let am;
        for (let an = 0; an < ai; an++) {
            z = truncate(Math.floor(ab._inner[an] - b));
            aa = truncate(Math.floor(ac._inner[an] - b));
            for (let ao = z; ao < z + v; ao++) {
                for (let ap = aa; ap < aa + v; ap++) {
                    aj = ao - z;
                    ak = ap - aa;
                    if (ao < 0 || ao > (ah - 1) || ap < 0 || ap > (ah - 1)) {
                        continue;
                    }
                    al = w[ak * v + aj];
                    am = ad._inner[an] * al;
                    ag[ap * ah + ao] = ag[ap * ah + ao] + am;
                }
            }
        }
        let aq = ag.length;
        let ar = -1.7976931348623157E+308;
        let as = 1.7976931348623157E+308;
        let at;
        if (!isNaN_(this.g.globalMinimum) && !isNaN_(this.g.globalMaximum) && this.g.useGlobalMinMax && !this.g.testRun) {
            as = this.g.globalMinimum;
            ar = this.g.globalMaximum;
            if (!isNaN_(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!isNaN_(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        else if (!isNaN_(this.g.minimumValue) && !isNaN_(this.g.maximumValue)) {
            as = this.g.minimumValue;
            ar = this.g.maximumValue;
        }
        else {
            let au = -1;
            let av = -1;
            for (let aw = 0; aw < aq; aw++) {
                at = ag[aw];
                if (at > 0) {
                    if (at > ar) {
                        ar = at;
                        au = aw;
                    }
                    if (at < as) {
                        as = at;
                        av = aw;
                    }
                }
            }
            let ax = truncate(Math.floor(au / ah));
            let ay = au % ah;
            let az = truncate(Math.floor(av / ah));
            let a0 = av % ah;
            this.g.globalMinimum = as;
            this.g.globalMaximum = ar;
            let a1 = 0;
            let a2 = 0;
            let a3 = 0;
            let a4 = 0;
            let a5 = 0;
            let a6 = 0;
            for (let a7 = 0; a7 < ai; a7++) {
                z = truncate(Math.floor(ab._inner[a7] - b));
                aa = truncate(Math.floor(ac._inner[a7] - b));
                for (let a8 = z; a8 < z + v; a8++) {
                    for (let a9 = aa; a9 < aa + v; a9++) {
                        aj = a8 - z;
                        ak = a9 - aa;
                        if (a8 < 0 || a8 > (ah - 1) || a9 < 0 || a9 > (ah - 1)) {
                            continue;
                        }
                        if (a8 == ay && a9 == ax) {
                            a1++;
                            a3 = a3 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a4 = a4 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                        if (a8 == a0 && a9 == az) {
                            a2++;
                            a5 = a5 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a6 = a6 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                    }
                }
            }
            this.i = a3 / a1;
            this.j = a4 / a1;
            this.k = a5 / a2;
            this.l = a6 / a2;
            if (!isNaN_(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!isNaN_(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        if (!this.g.testRun) {
            this.x(af, ag, ar, as);
            this.a = af;
        }
        this.z();
    }
    x(a, b, c, d) {
        let e;
        let f = b.length;
        if (this.g.useLogarithmicScale) {
            if (d <= 0) {
                d = 0;
            }
            else {
                d = logBase(d, this.g.logarithmBase);
            }
            if (c <= 0) {
                c = 0;
            }
            else {
                c = logBase(c, this.g.logarithmBase);
            }
        }
        let g = 0;
        let h = c - d;
        if (isNaN_(h) || h <= 0) {
            h = 1;
        }
        let i;
        let j;
        let k;
        let l;
        let m = this.g.useLogarithmicScale;
        let n = this.g.logarithmBase;
        if (this.g.scaleColors != null) {
            let o = new Array(this.g.scaleColors.length);
            let p = new Array(this.g.scaleColors.length);
            let q = new Array(this.g.scaleColors.length);
            let r = new Array(this.g.scaleColors.length);
            let s = new Array(this.g.scaleColors.length);
            let t = new Array(this.g.scaleColors.length);
            let u = new Array(this.g.scaleColors.length);
            let v = new Array(this.g.scaleColors.length);
            let w = new Array(this.g.scaleColors.length);
            let x = new Array(this.g.scaleColors.length);
            let y = new Array(this.g.scaleColors.length);
            let z = new Array(this.g.scaleColors.length);
            let aa = this.g.scaleColorOffsets;
            if (aa == null || aa.length != this.g.scaleColors.length) {
                aa = new Array(this.g.scaleColors.length);
                if (aa.length == 1) {
                    aa[0] = 0;
                }
                else {
                    for (let ab = 0; ab < this.g.scaleColors.length; ab++) {
                        aa[ab] = ab / (this.g.scaleColors.length - 1);
                    }
                }
            }
            for (let ac = 0; ac < this.g.scaleColors.length; ac++) {
                o[ac] = this.g.scaleColors[ac].l;
                q[ac] = this.g.scaleColors[ac].o;
                s[ac] = this.g.scaleColors[ac].n;
                u[ac] = this.g.scaleColors[ac].m;
                if (ac < this.g.scaleColors.length - 1) {
                    p[ac] = this.g.scaleColors[ac + 1].l;
                    r[ac] = this.g.scaleColors[ac + 1].o;
                    t[ac] = this.g.scaleColors[ac + 1].n;
                    v[ac] = this.g.scaleColors[ac + 1].m;
                }
                else {
                    p[ac] = this.g.scaleColors[ac].l;
                    r[ac] = this.g.scaleColors[ac].o;
                    t[ac] = this.g.scaleColors[ac].n;
                    v[ac] = this.g.scaleColors[ac].m;
                }
                w[ac] = p[ac] - o[ac];
                x[ac] = r[ac] - q[ac];
                y[ac] = t[ac] - s[ac];
                z[ac] = v[ac] - u[ac];
            }
            for (let ad = 0; ad < f; ad++) {
                e = b[ad];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    if (e <= 0) {
                        e = 0;
                    }
                    else {
                        e = logBase(e, n);
                    }
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                let ae = 0;
                for (let af = 0; af < aa.length; af++) {
                    if (aa[af] >= g) {
                        ae = af - 1;
                        break;
                    }
                }
                if (ae > aa.length - 2) {
                    ae = aa.length - 2;
                }
                if (ae < 0) {
                    ae = 0;
                }
                g = (g - aa[ae]) / (aa[ae + 1] - aa[ae]);
                i = truncate(Math.floor(o[ae] + g * (w[ae])));
                j = truncate(Math.floor(q[ae] + g * (x[ae])));
                k = truncate(Math.floor(s[ae] + g * (y[ae])));
                l = truncate(Math.floor(u[ae] + g * (z[ae])));
                a[4 * ad] = i;
                a[4 * ad + 1] = j;
                a[4 * ad + 2] = k;
                a[4 * ad + 3] = l;
            }
        }
        else {
            let ag = this.g.minimumColor.l;
            let ah = this.g.maximumColor.l;
            let ai = this.g.minimumColor.o;
            let aj = this.g.maximumColor.o;
            let ak = this.g.minimumColor.n;
            let al = this.g.maximumColor.n;
            let am = this.g.minimumColor.m;
            let an = this.g.maximumColor.m;
            let ao = ah - ag;
            let ap = aj - ai;
            let aq = al - ak;
            let ar = an - am;
            for (let as = 0; as < f; as++) {
                e = b[as];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    e = logBase(e, n);
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                i = truncate(Math.floor(ag + g * (ao)));
                j = truncate(Math.floor(ai + g * (ap)));
                k = truncate(Math.floor(ak + g * (aq)));
                l = truncate(Math.floor(am + g * (ar)));
                a[4 * as] = i;
                a[4 * as + 1] = j;
                a[4 * as + 2] = k;
                a[4 * as + 3] = l;
            }
        }
    }
    b(a) {
        let b = new Array(truncate(a.width) * truncate(a.height));
        for (let c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    }
    d(a) {
        let b = new Array(truncate(a.width) * truncate(a.height) * 4);
        for (let c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    }
    c(a, b) {
        let c = new Array(a * a);
        for (let d = 0; d < c.length; d++) {
            c[d] = 0;
        }
        let e = a / 2;
        let f = a / 2;
        for (let g = 0; g < a; g++) {
            for (let h = 0; h < a; h++) {
                let i = Math.sqrt(Math.pow(g - f, 2) + Math.pow(h - f, 2));
                if (i > e) {
                    c[h * a + g] = 0;
                }
                else {
                    c[h * a + g] = e - i;
                }
            }
        }
        let j = 0;
        let k = -1.7976931348623157E+308;
        let l = 1.7976931348623157E+308;
        for (let m = 0; m < a; m++) {
            for (let n = 0; n < a; n++) {
                let o = c[n * a + m];
                if (o == 0) {
                    continue;
                }
                j += o;
                k = o > k ? o : k;
                l = o < l ? o : l;
            }
        }
        for (let p = 0; p < a; p++) {
            for (let q = 0; q < a; q++) {
                let r = c[q * a + p];
                if (r == 0) {
                    continue;
                }
                let s = (r - l) / (k - l);
                c[q * a + p] = 0.01 + s * (0.99);
            }
        }
        c[truncate(f) * a + truncate(f)] = 1;
        return c;
    }
    q(a, b) {
        return truncate(Math.floor(b * 2));
    }
    z() {
        if (this.completedSink == null) {
            return;
        }
        this.completedSink.onCompleted(((() => {
            let $ret = new HeatTileImageCreatedEventArgs();
            $ret.url = this.w;
            $ret.x = this.n;
            $ret.y = this.o;
            $ret.z = this.p;
            $ret.globalMinimumValue = this.g.globalMinimum;
            $ret.globalMaximumValue = this.g.globalMaximum;
            $ret.globalMaximumValueLongitude = this.j;
            $ret.globalMaximumValueLatitude = this.i;
            $ret.globalMinimumValueLongitude = this.l;
            $ret.globalMinimumValueLatitude = this.k;
            $ret.imageData = this.a;
            $ret.image = this.g.image;
            return $ret;
        })()));
    }
    get completedSink() {
        return this._completedSink;
    }
    set completedSink(a) {
        this._completedSink = a;
    }
}
HeatTileGeneratorWorker.$t = markType(HeatTileGeneratorWorker, 'HeatTileGeneratorWorker');
HeatTileGeneratorWorker.v = {};
HeatTileGeneratorWorker.s = 0;
HeatTileGeneratorWorker.m = 0;
//# sourceMappingURL=HeatTileGeneratorWorker.js.map
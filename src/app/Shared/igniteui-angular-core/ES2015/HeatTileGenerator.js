/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Number_$type, Delegate_$type, markType } from "./type";
import { ITileGenerator_$type } from "./ITileGenerator";
import { Color } from "./Color";
import { HeatTileScaler } from "./HeatTileScaler";
import { Rect } from "./Rect";
import { HeatTileGeneratorWorkerManager } from "./HeatTileGeneratorWorkerManager";
import { Dictionary$2 } from "./Dictionary$2";
import { Tuple$2 } from "./Tuple$2";
import { List$1 } from "./List$1";
import { TileImageZoomChangingEventArgs } from "./TileImageZoomChangingEventArgs";
import { TileWorkSettings } from "./TileWorkSettings";
import { truncate, isNaN_ } from "./number";
/**
 * @hidden
 */
export class HeatTileGenerator extends Base {
    constructor() {
        super();
        this.m = new HeatTileScaler();
        this.bz = new Rect(0, 0, 0, 256, 256);
        this.l = new HeatTileGeneratorWorkerManager();
        this.e = null;
        this.d = null;
        this.c = null;
        this.bw = new Color();
        this.bv = new Color();
        this.b = null;
        this.a = null;
        this.ac = 0;
        this.am = NaN;
        this.p = false;
        this.q = false;
        this.r = false;
        this.ao = NaN;
        this.an = NaN;
        this.al = 10;
        this.s = false;
        this.t = true;
        this.a0 = null;
        this.ax = null;
        this.ad = NaN;
        this.ag = NaN;
        this.aw = {};
        this.au = -1;
        this.ay = {};
        this.ak = 0;
        this.aj = 0;
        this.z = new Dictionary$2(String_$type, Tuple$2.$.specialize(Number_$type, Number_$type), 0);
        this.aa = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        this.ah = 0;
        this.ai = 0;
        this.ae = 0;
        this.af = 0;
        this.n = false;
        this.ab = new List$1(Delegate_$type, 0);
        this.o = false;
        this.m = new HeatTileScaler();
    }
    get k() {
        return this.e;
    }
    set k(a) {
        let b = this.e;
        this.e = a;
        if (this.e != b) {
            this.br("YValues", b, this.e);
        }
    }
    get j() {
        return this.d;
    }
    set j(a) {
        let b = this.d;
        this.d = a;
        if (this.d != b) {
            this.br("XValues", b, this.d);
        }
    }
    get i() {
        return this.c;
    }
    set i(a) {
        let b = this.c;
        this.c = a;
        if (this.c != b) {
            this.br("Values", b, this.c);
        }
    }
    get by() {
        return this.bw;
    }
    set by(a) {
        let b = this.bw;
        this.bw = a;
        if (Color.d(this.bw, b)) {
            this.br("MinimumColor", b, this.bw);
        }
    }
    get bx() {
        return this.bv;
    }
    set bx(a) {
        let b = this.bv;
        this.bv = a;
        if (Color.d(this.bv, b)) {
            this.br("MaximumColor", b, this.bv);
        }
    }
    get scaleColors() {
        return this.b;
    }
    set scaleColors(a) {
        let b = this.b;
        this.b = a;
        if (this.b != b) {
            this.br("ScaleColors", b, this.b);
        }
    }
    get g() {
        return this.a;
    }
    set g(a) {
        let b = this.a;
        this.a = a;
        if (this.a != b) {
            this.br("ScaleColorOffsets", b, this.a);
        }
    }
    get ap() {
        return this.ac;
    }
    set ap(a) {
        let b = this.ac;
        this.ac = a;
        if (this.ac != b) {
            this.br("BlurRadius", b, this.ac);
        }
    }
    get ar() {
        return this.am;
    }
    set ar(a) {
        let b = this.am;
        this.am = a;
        if (this.am != b) {
            this.br("MaxBlurRadius", b, this.am);
        }
    }
    get u() {
        return this.p;
    }
    set u(a) {
        let b = this.p;
        this.p = a;
        if (this.p != b) {
            this.br("UseBlurRadiusAdjustedForZoom", b, this.p);
        }
    }
    get v() {
        return this.q;
    }
    set v(a) {
        let b = this.q;
        this.q = a;
        if (this.q != b) {
            this.br("UseGlobalMinMax", b, this.q);
        }
    }
    get w() {
        return this.r;
    }
    set w(a) {
        let b = this.r;
        this.r = a;
        if (this.r != b) {
            this.br("UseGlobalMinMaxAdjustedForZoom", b, this.r);
        }
    }
    get at() {
        return this.ao;
    }
    set at(a) {
        let b = this.ao;
        this.ao = a;
        if (this.ao != b) {
            this.br("MinimumValue", b, this.ao);
        }
    }
    get as() {
        return this.an;
    }
    set as(a) {
        let b = this.an;
        this.an = a;
        if (this.an != b) {
            this.br("MaximumValue", b, this.an);
        }
    }
    get aq() {
        return this.al;
    }
    set aq(a) {
        let b = this.al;
        this.al = a;
        if (this.al != b) {
            this.br("LogarithmBase", b, this.al);
        }
    }
    get x() {
        return this.s;
    }
    set x(a) {
        let b = this.s;
        this.s = a;
        if (this.s != b) {
            this.br("UseLogarithmicScale", b, this.s);
        }
    }
    get y() {
        return this.t;
    }
    set y(a) {
        let b = this.t;
        this.t = a;
        if (this.t != b) {
            this.br("UseWebWorkers", b, this.t);
        }
    }
    get bi() {
        return this.a0;
    }
    set bi(a) {
        let b = this.a0;
        this.a0 = a;
        if (this.a0 != b) {
            this.br("WebWorkerScriptPath", b, this.a0);
        }
    }
    get az() {
        return this.ax;
    }
    set az(a) {
        let b = this.ax;
        this.ax = a;
        if (this.ax != b) {
            this.br("WebWorkerInstance", b, this.ax);
        }
    }
    bo() {
        this.e = null;
        this.d = null;
        this.c = null;
        this.l.w();
    }
    br(a, b, c) {
        this.bs(a, b, c);
    }
    bs(a, b, c) {
        switch (a) {
            case "XValues":
            case "YValues":
            case "Values":
                this.bq();
                break;
            case "UseWebWorkers":
                this.l.e = this.y;
                break;
            case "WebWorkerScriptPath":
                this.l.p = this.bi;
                break;
            case "WebWorkerInstance":
                this.l.n = this.az;
                break;
        }
    }
    getTile(a, b, c, d, e, f, g) {
        this.getTile1(a, b, c, d, e, f, g, false);
    }
    getTile1(a, b, c, d, e, f, g, h) {
        let i = NaN;
        let j = NaN;
        if (!h && this.v && (isNaN_(this.ag) || isNaN_(this.ad))) {
            let k = false;
            if ((isNaN_(this.ag) || isNaN_(this.ad)) && !this.n) {
                k = true;
                this.n = true;
            }
            else {
                this.ab.add(() => this.bm(a, b, c, h, j, i, d, e, f, g));
                return;
            }
            if (k) {
                let l = 1.7976931348623157E+308;
                let m = -1.7976931348623157E+308;
                let n = 0;
                let o = 0;
                let p = 0;
                let q = 0;
                this.getTile1(0, 0, 0, (r, s) => {
                    let t = s;
                    l = t.globalMinimumValue;
                    m = t.globalMaximumValue;
                    n = t.globalMinimumValueLongitude;
                    o = t.globalMinimumValueLatitude;
                    p = t.globalMaximumValueLongitude;
                    q = t.globalMaximumValueLatitude;
                    let u = new Rect(0, 0, 0, 1, 1);
                    let v = this.bz;
                    i = l;
                    j = m;
                    let w = new List$1(Delegate_$type, 0);
                    this.ag = i;
                    this.ad = j;
                    this.ah = o;
                    this.ai = n;
                    this.ae = q;
                    this.af = p;
                    for (let x = 0; x < this.ab.count; x++) {
                        w.add(this.ab._inner[x]);
                    }
                    this.ab.clear();
                    this.bm(a, b, c, h, j, i, d, e, f, g);
                    for (let y = 0; y < w.count; y++) {
                        w._inner[y]();
                    }
                }, (r, s) => {
                }, (r, s) => {
                }, g, true);
                return;
            }
            else {
                i = this.ag;
                j = this.ad;
            }
        }
        else {
            i = this.ag;
            j = this.ad;
        }
        this.bm(a, b, c, h, j, i, d, e, f, g);
    }
    cancelTile(a, b, c) {
        this.l.s(a, b, c);
    }
    bm(a, b, c, d, e, f, g, h, i, j) {
        this.bn(a, b, c, d, i, () => {
            if (this.w && !d) {
                if (a > 0 && this.z.containsKey(a.toString())) {
                    let k = this.z.item(a.toString());
                    e = k.c;
                    f = k.d;
                }
            }
            let l = this.b0(a, b, c);
            let m = new TileWorkSettings();
            m.window = l;
            m.z = a;
            m.x = b;
            m.y = c;
            m.globalMinimum = f;
            m.globalMaximum = e;
            m.useGlobalMinMax = this.v;
            m.minimumValue = this.at;
            m.maximumValue = this.as;
            m.useLogarithmicScale = this.x;
            m.logarithmBase = this.aq;
            if (m.logarithmBase <= 0) {
                m.logarithmBase = 10;
            }
            m.tileViewport = this.bz;
            m.maximumColor = this.bx;
            m.minimumColor = this.by;
            m.scaler = this.m;
            m.values = this.c;
            m.blurRadius = this.ap;
            if (m.blurRadius <= 0) {
                m.blurRadius = 1;
            }
            m.useBlurRadiusAdjustedForZoom = this.u;
            m.maxBlurRadius = this.ar;
            if (m.maxBlurRadius <= 0) {
                m.maxBlurRadius = 1;
            }
            m.values = this.i;
            m.scaleColors = this.scaleColors;
            m.scaleColorOffsets = this.g;
            m.minimumVisibleLatitude = this.m.i(l, this.bz);
            m.maximumVisibleLatitude = this.m.g(l, this.bz);
            m.minimumVisibleLongitude = this.m.j(l, this.bz);
            m.maximumVisibleLongitude = this.m.h(l, this.bz);
            m.yValues = this.e;
            m.xValues = this.d;
            if (this.c == null && this.e != null) {
                this.c = new Array(this.e.length);
                for (let n = 0; n < this.e.length; n++) {
                    this.c[n] = 1;
                }
                m.values = this.c;
            }
            if (!this.o) {
                this.o = true;
                m.isNewData = true;
            }
            m.image = j;
            m.testRun = d;
            this.l.y(m, (o, p) => {
                p.url = this.a2(p.imageData);
                p.imageData = this.f(p.imageData);
                g(this, p);
            }, h);
        });
    }
    bn(a, b, c, d, e, f) {
        let g = false;
        g = this.au != a;
        if (!g || d) {
            f();
            return;
        }
        let h = false;
        let i = false;
        if (a != this.au) {
            if (this.z.containsKey(a.toString()) && !isNaN_(this.z.item(a.toString()).c) && !isNaN_(this.z.item(a.toString()).d)) {
                this.au = a;
                e(this, ((() => {
                    let $ret = new TileImageZoomChangingEventArgs();
                    $ret.z = a;
                    $ret.x = b;
                    $ret.y = c;
                    return $ret;
                })()));
                h = true;
            }
            else if (this.z.containsKey(a.toString())) {
                if (a > 0 && this.w) {
                    let j;
                    if (this.aa.containsKey(a.toString())) {
                        j = this.aa.item(a.toString());
                    }
                    else {
                        j = new List$1(Delegate_$type, 0);
                        this.aa.addItem(a.toString(), j);
                    }
                    j.add(f);
                }
            }
            else {
                if (a > 0 && this.w) {
                    this.z.addItem(a.toString(), new Tuple$2(Number_$type, Number_$type, NaN, NaN));
                    i = true;
                }
            }
        }
        if (i) {
            if (a > 0 && this.w) {
                this.bt(a, f);
            }
        }
        if (h) {
            f();
        }
    }
    a2(a) {
        if (a == null) {
            return null;
        }
        let b = document.createElement("canvas");
        b.setAttribute("width", "256");
        b.setAttribute("height", "256");
        let c = b.getContext("2d");
        let d = c.getImageData(0, 0, 256, 256);
        let e = d.data;
        let f = e.length / 4;
        for (let g = 0; g < f; g++) {
            let h = a[g * 4];
            let i = a[g * 4 + 1];
            let j = a[g * 4 + 2];
            let k = a[g * 4 + 3];
            e[g * 4] = i;
            e[g * 4 + 1] = j;
            e[g * 4 + 2] = k;
            e[g * 4 + 3] = h;
        }
        c.putImageData(d, 0, 0);
        let ele_ = b;
        return (ele_.toDataURL());
    }
    f(a) {
        if (a == null) {
            return null;
        }
        return a;
    }
    bt(a, b) {
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = new Rect(0, 0, 0, 256 * Math.pow(2, a), 256 * Math.pow(2, a));
        let h = new Rect(0, 0, 0, 1, 1);
        let i = this.m.s(this.af, h, g);
        let j = this.m.r(this.ae, h, g);
        let k = this.m.s(this.ai, h, g);
        let l = this.m.r(this.ah, h, g);
        c = truncate(Math.floor(k / 256));
        d = truncate(Math.floor(l / 256));
        e = truncate(Math.floor(i / 256));
        f = truncate(Math.floor(j / 256));
        let m = 0;
        let n = 0;
        this.getTile1(a, c, d, (o, p) => {
            let q = p;
            m = q.globalMinimumValue;
            n = q.globalMaximumValue;
            if (e != c && f != d) {
                this.getTile1(a, e, f, (r, s) => {
                    let t = s;
                    n = t.globalMaximumValue;
                    this.bu(a, n, m, b);
                }, (r, s) => {
                }, (r, s) => {
                }, null, true);
            }
            else {
                this.bu(a, n, m, b);
            }
        }, (o, p) => {
        }, (o, p) => {
        }, null, true);
    }
    bu(a, b, c, d) {
        if (b < this.aj) {
            b = this.aj;
        }
        if (isNaN_(c) || c > this.ak) {
            c = this.ak;
        }
        let e = new List$1(Delegate_$type, 0);
        this.z.item(a.toString(), new Tuple$2(Number_$type, Number_$type, b, c));
        if (this.aa.containsKey(a.toString())) {
            let f = this.aa.item(a.toString());
            for (let g = 0; g < f.count; g++) {
                e.add(f._inner[g]);
            }
        }
        this.aa.removeItem(a.toString());
        this.au = a;
        d();
        for (let h = 0; h < e.count; h++) {
            e._inner[h]();
        }
    }
    b0(a, b, c) {
        let d = truncate(Math.pow(2, a)) * 256;
        let e = (b * 256) / d;
        let f = (c * 256) / d;
        let g = 256 / d;
        let h = 256 / d;
        return new Rect(0, e, f, g, h);
    }
    bq() {
        let a = -1.7976931348623157E+308;
        let b = 1.7976931348623157E+308;
        if (this.c != null) {
            for (let c = 0; c < this.c.length; c++) {
                let d = this.c[c];
                a = d > a ? d : a;
                b = d < b ? d : b;
            }
        }
        let e = this.ak = b * 0.01;
        this.aj = a;
        this.o = false;
    }
}
HeatTileGenerator.$t = markType(HeatTileGenerator, 'HeatTileGenerator', Base.$, [ITileGenerator_$type]);
//# sourceMappingURL=HeatTileGenerator.js.map
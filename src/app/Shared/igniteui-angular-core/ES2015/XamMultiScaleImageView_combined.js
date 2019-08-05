/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, Delegate_$type, Type, markType, typeCast, INotifyPropertyChanged_$type, PropertyChangedEventArgs, EventArgs, Point_$type } from "./type";
import { ISchedulableRender_$type } from "./ISchedulableRender";
import { List$1 } from "./List$1";
import { Image } from "./Image";
import { RenderingContext } from "./RenderingContext";
import { Dictionary$2 } from "./Dictionary$2";
import { Tile } from "./Tile";
import { Rect } from "./Rect";
import { CanvasRenderScheduler } from "./CanvasRenderScheduler";
import { StackPool$1 } from "./StackPool$1";
import { WriteableBitmap } from "./WriteableBitmap";
import { Uri } from "./Uri";
import { CancellingMultiScaleImageEventArgs } from "./CancellingMultiScaleImageEventArgs";
import { DownloadingMultiScaleImageEventArgs } from "./DownloadingMultiScaleImageEventArgs";
import { CanvasViewRenderer } from "./CanvasViewRenderer";
import { truncate, intDivide, logBase } from "./number";
import { DependencyObject } from "./DependencyObject";
import { Control } from "./Control";
import { DependencyProperty } from "./DependencyProperty";
import { IEasingFunction_$type } from "./IEasingFunction";
import { LRUCache$2 } from "./LRUCache$2";
import { TilePositionComparer } from "./TilePositionComparer";
import { Convert } from "./Convert";
import { MathUtil } from "./MathUtil";
import { PropertyMetadata } from "./PropertyMetadata";
import { dateNow } from "./date";
/**
 * @hidden
 */
export class XamMultiScaleImageView extends Base {
    constructor(a) {
        super();
        this.b = null;
        this.h = null;
        this.g = new Dictionary$2(Base.$, List$1.$.specialize(Delegate_$type), 0);
        this.j = new List$1(Tile.$, 0);
        this.i = new List$1(Tile.$, 0);
        this.p = -1;
        this.o = -1;
        this.k = null;
        this.m = null;
        this.c = null;
        this._isDirty = false;
        this.au = Rect.empty;
        this.l = null;
        this.b = a;
        this.b.ag.l(this);
        this.h = new List$1(Image.$, 0);
        this.b.ap = ((() => {
            let $ret = new StackPool$1(Image.$);
            $ret.j = runOn(this, this.at);
            $ret.b = runOn(this, this.y);
            $ret.c = runOn(this, this.aa);
            $ret.d = runOn(this, this.z);
            return $ret;
        })());
        for (let b = 0; b < 4; ++b) {
            this.i.add(null);
        }
    }
    at() {
        return new Image();
    }
    y(a) {
        this.h.add(a);
    }
    aa(a) {
        this.h.remove(a);
    }
    z(a) {
    }
    ao(a, b, c) {
        a.n = b;
        a.o = c;
    }
    r(a) {
        for (let b = 0; b < this.i.count; ++b) {
            if (a == this.i._inner[b]) {
                if (a.h != null && a.h.ac != null) {
                    let c = a.h.ac;
                    let d = c.c;
                    let e = this.b.ao.r(a.e + 8, a.c, a.d);
                    if (e != null) {
                        let f = ((() => {
                            let $ret = new CancellingMultiScaleImageEventArgs();
                            $ret.uri = e.value;
                            $ret.image = d;
                            return $ret;
                        })());
                        this.b.bl(f);
                    }
                    if (this.g.containsKey(d)) {
                        let g = this.g.item(d);
                        for (let h = 0; h < g.count; h++) {
                            g._inner[h]();
                        }
                        g.clear();
                        this.g.removeItem(d);
                    }
                }
                this.i._inner[b] = null;
                this.q();
                return;
            }
        }
        for (let i = 0; i < this.j.count; ++i) {
            if (this.j._inner[i] == a) {
                this.j.removeAt(i);
                break;
            }
        }
    }
    u(a) {
        this.j.add(a);
        this.j.aa((b, c) => {
            let d = 0;
            let e = 0;
            if (b.g != null) {
                d = b.g.ac.b;
            }
            if (c.g != null) {
                e = c.g.ac.b;
            }
            if (d < e) {
                return -1;
            }
            else if (d > e) {
                return 1;
            }
            return 0;
        });
        this.q();
    }
    q() {
        let index_ = -1;
        if (this.j.count > 0) {
            for (let a = 0; a < this.i.count; ++a) {
                if (this.i._inner[a] == null) {
                    index_ = a;
                    break;
                }
            }
        }
        if (index_ >= 0) {
            this.i._inner[index_] = this.j._inner[0];
            let b = new WriteableBitmap(this.b.ao.m, this.b.ao.k);
            this.i._inner[index_].h.ac = b;
            let ele_ = this.l.createElement("img");
            let c = ele_.getNativeElement();
            b.c = c;
            let self_ = this;
            let d = new List$1(Delegate_$type, 0);
            this.g.addItem(c, d);
            d.add(ele_.listen("load", (e) => this.ab(e, index_)));
            d.add(ele_.listen("readystatechange", (e) => this.ab(e, index_)));
            d.add(ele_.listen("error", (e) => this.ac(e, index_)));
            this.j.removeAt(0);
            let e = this.b.ao.r(this.i._inner[index_].e + 8, this.i._inner[index_].c, this.i._inner[index_].d);
            if (e == null) {
                return;
            }
            let f = e.value;
            let g = ((() => {
                let $ret = new DownloadingMultiScaleImageEventArgs();
                $ret.uri = f;
                $ret.image = c;
                return $ret;
            })());
            this.b.bm(g);
            f = g.uri;
            if (f != null) {
                c.src = f;
            }
        }
    }
    ab(a, b) {
        let e_ = a.originalEvent;
        let img_ = (e_.target);
        let c = (img_.complete || (img_.readyState == 'complete' && e_.type == 'readystatechange'));
        if (c) {
            this.downloadCompleted(a, b);
        }
    }
    ac(a, b) {
        this.downloadError(a, b);
    }
    downloadError(a, b) {
        let c = this.i._inner[b];
        this.i._inner[b] = null;
        if (c != null && c.h != null && c.h.ac != null) {
            let e_ = a.originalEvent;
            let d = (e_.target);
            if (this.g.containsKey(d)) {
                let e = this.g.item(d);
                for (let f = 0; f < e.count; f++) {
                    e._inner[f]();
                }
                e.clear();
                this.g.removeItem(d);
            }
        }
        this.q();
        this.ad();
    }
    downloadCompleted(a, b) {
        let c = this.i._inner[b];
        let d = true;
        if (c != null && c.h != null && c.h.ac != null) {
            d = false;
            let ele_ = c.h.ac.c;
            if (!ele_.complete) {
                d = true;
            }
            if ((ele_.width == 0 && ele_.height == 0)) {
                d = true;
            }
        }
        this.i._inner[b] = null;
        if (d) {
            this.q();
            this.ad();
            return;
        }
        let e_ = a.originalEvent;
        let e = (e_.target);
        if (this.g.containsKey(e)) {
            let f = this.g.item(e);
            for (let g = 0; g < f.count; g++) {
                f._inner[g]();
            }
            f.clear();
            this.g.removeItem(e);
        }
        this.b.bf(c, c.h.ac);
        if (c.h != null) {
            this.b.b1(c);
        }
        this.q();
        this.ad();
    }
    a(a, b, c, d) {
        let e = new WriteableBitmap(a, a);
        e.c = b.c;
        if (!b.d.isEmpty) {
            c += truncate(Math.round(b.d.left));
            d += truncate(Math.round(b.d.top));
        }
        e.d = new Rect(0, c, d, a, a);
        return e;
    }
    am(a) {
        a.s = 0;
    }
    an(a) {
        a.s = 1;
    }
    f() {
        return true;
    }
    s(a) {
        if (this.b.al != null) {
            this.b.al.deferredRefresh();
        }
        else {
            if (this.k != null) {
                this.k.setTimeout(a, 0);
            }
            else {
                window.setTimeout(a, 0);
            }
        }
    }
    aq() {
        if (this.p == -1) {
            this.p = window.setInterval(runOn(this.b, this.b.b0), 50);
        }
    }
    as() {
        if (this.p != -1) {
            window.clearInterval(this.p);
            this.p = -1;
        }
    }
    ap() {
        if (this.o == -1) {
            this.o = window.setInterval(runOn(this.b, this.b.bi), 50);
        }
    }
    ar() {
        if (this.o != -1) {
            window.clearInterval(this.o);
            this.o = -1;
        }
    }
    t() {
        if (this.p != -1) {
            this.ar();
            this.b.bp();
        }
    }
    ae(a) {
        this.k = a;
        this.k.rootWrapper.setStyleProperty("position", "relative");
        this.m = this.k.createElement("canvas");
        this.m.setStyleProperty("position", "absolute");
        this.m.setStyleProperty("top", "0px");
        this.m.setStyleProperty("left", "0px");
        this.k.append(this.m);
        this.c = new RenderingContext(new CanvasViewRenderer(), this.k.get2DCanvasContext(this.m));
        this.af(this.k.rootWrapper.width(), this.k.rootWrapper.height());
    }
    af(a, b) {
        this.m.setAttribute("width", truncate((a * this.b.a2)).toString());
        this.m.setAttribute("height", truncate((b * this.b.a2)).toString());
        this.m.setStyleProperty("width", a.toString() + "px");
        this.m.setStyleProperty("height", b.toString() + "px");
        this.b.cb = new Rect(0, 0, 0, a, b);
        this.b.bw();
    }
    aj() {
        this.ad();
    }
    get index() {
        return 0;
    }
    postRender() {
    }
    get isDirty() {
        return this._isDirty;
    }
    set isDirty(a) {
        this._isDirty = a;
    }
    ad() {
        if (this.c == null) {
            return;
        }
        if (!this.isDirty) {
            this.isDirty = true;
            this.b.ag.n();
        }
    }
    undirty(a) {
        this.isDirty = false;
        this.ak();
    }
    ak() {
        if (this.c == null) {
            return;
        }
        if (this.c.d && this.b.a2 != 1) {
            this.c.z();
            this.c.aa(this.b.a2, this.b.a2);
        }
        if (!this.au.isEmpty) {
            this.c.k(this.au.left, this.au.top, this.au.width, this.au.height);
        }
        this.au = this.b.cb;
        for (let a = 0; a < this.h.count; a++) {
            let b = this.h._inner[a];
            if (b.s == 0) {
                this.al(b);
            }
        }
        for (let c = 0; c < this.h.count; c++) {
            let d = this.h._inner[c];
            if (d.s == 1) {
                this.al(d);
            }
        }
        if (this.c.d && this.b.a2 != 1) {
            this.c.y();
        }
        this.b.bk();
        this.b.bn();
    }
    d() {
        let a = true;
        for (let b = 0; b < this.i.count; b++) {
            if (this.i._inner[b] != null) {
                a = false;
            }
        }
        return a;
    }
    al(a) {
        if (this.c == null) {
            return;
        }
        let b = a.ac;
        let c = a._opacity;
        if (b == null || b.c == null) {
            return;
        }
        if (this.e(b.c)) {
            return;
        }
        if (!b.d.isEmpty) {
            if (b.d.width < 1 || b.d.height < 1) {
                return;
            }
            this.c.n(b.c, c, b.d.left, b.d.top, b.d.width, b.d.height, Math.round(a.n + this.b.cb.left), Math.round(a.o + this.b.cb.top), a.width, a.height);
        }
        else {
            this.c.m(b.c, c, Math.round(a.n + this.b.cb.left), Math.round(a.o + this.b.cb.top), a.width, a.height);
        }
    }
    e(a) {
        let img_ = a;
        if (!img_.complete) {
            return true;
        }
        if ((img_.width == 0 && img_.height == 0)) {
            return true;
        }
        return false;
    }
    x() {
        this.ad();
    }
    ag(a) {
        this.c = a;
        this.ad();
    }
    ah(a) {
        this.l = a;
    }
    ai(a) {
        this.b.cb = a;
        this.b.bw();
    }
    preRender() {
    }
    isValid() {
        return true;
    }
}
XamMultiScaleImageView.$t = markType(XamMultiScaleImageView, 'XamMultiScaleImageView', Base.$, [ISchedulableRender_$type]);
/**
 * @hidden
 */
export class XamMultiScaleTileSource extends DependencyObject {
    constructor(a, b, c, d, e) {
        super();
        this.o = 0;
        this.n = 0;
        this.m = 0;
        this.k = 0;
        this.l = 0;
        this.j = null;
        this.o = a;
        this.n = b;
        this.m = c;
        this.k = d;
        this.l = e;
    }
    get q() {
        return this.o;
    }
    set q(a) {
        this.o = a;
        this.t(0, 0, 0, 0);
    }
    get p() {
        return this.n;
    }
    set p(a) {
        this.n = a;
        this.t(0, 0, 0, 0);
    }
    r(a, b, c) {
        let d = new List$1(Base.$, 0);
        this.s(a, b, c, d);
        let e = null;
        if (d.count > 0) {
            e = typeCast(Uri.$, d._inner[0]);
        }
        return e;
    }
    t(a, b, c, d) {
        if (this.j != null) {
            this.j.bj(a, b, c, d);
        }
    }
}
XamMultiScaleTileSource.$t = markType(XamMultiScaleTileSource, 'XamMultiScaleTileSource', DependencyObject.$);
/**
 * @hidden
 */
export class XamMultiScaleImage extends Control {
    constructor() {
        super();
        this.ap = null;
        this.an = null;
        this.ak = null;
        this.b8 = null;
        this.a0 = 0;
        this.propertyChanged = null;
        this.a8 = 0;
        this.a9 = 0;
        this.ay = new Date();
        this.b9 = null;
        this.a1 = 0;
        this.aw = new List$1(Tile.$, 0);
        this.au = false;
        this.aq = new LRUCache$2(Tile.$, WriteableBitmap.$, 1, 0x7FFFFFFF, new TilePositionComparer());
        this.ax = new List$1(Tile.$, 0);
        this.imageTilesReady = null;
        this.as = false;
        this.cb = null;
        this.ag = null;
        this.imagesChanged = null;
        this.downloadingImage = null;
        this.cancellingImage = null;
        this.az = 1;
        this.cb = Rect.empty;
        this.ag = new CanvasRenderScheduler();
        this.an = new XamMultiScaleImageView(this);
        this.ab = XamMultiScaleImage.$;
        this.b8 = this.ca;
        this.a0 = this.a3;
    }
    get al() {
        return this.ak;
    }
    set al(a) {
        if (this.ak != null) {
            this.ak.unRegister(this);
        }
        this.ak = a;
        if (this.ak != null) {
            this.ak.register(this, runOn(this, this.bx));
        }
    }
    bo(a, b, c) {
        let d = new PropertyChangedEventArgs(a);
        if (this.propertyChanged != null) {
            this.propertyChanged(this, d);
        }
        switch (a) {
            case XamMultiScaleImage.$$p[0]:
                if (this.ao != null) {
                    this.ao.j = this;
                }
                this.bv();
                this.by();
                this.bw();
                break;
            case XamMultiScaleImage.$$p[3]:
                this.bz();
                break;
            case XamMultiScaleImage.$$p[4]:
                this.bz();
                break;
            case XamMultiScaleImage.$$p[2]:
                if (!this.av) {
                    this.an.t();
                }
                break;
        }
    }
    by() {
        this.b2();
        if (this.ao != null) {
            this.a8 = Convert.toInt32(logBase(this.ao.m, 2));
            this.a9 = Convert.toInt32(logBase(this.ao.q, 2));
        }
    }
    bj(a, b, c, d) {
        this.bv();
        this.by();
        this.bw();
    }
    bz() {
        if (this.av) {
            this.ay = dateNow();
            this.b9 = this.b8;
            this.a1 = this.a0;
            this.an.aq();
        }
        else {
            this.b8 = this.ca;
            this.a0 = this.a3;
            this.bw();
        }
    }
    b0() {
        let a = 2;
        let b = dateNow().getTime() - this.ay.getTime();
        let c = b / 1000;
        let d = MathUtil.b((c) / a, 0, 1);
        let e = this.aj != null ? this.aj.ease(d) : d;
        let f = 1 - e;
        this.a0 = this.a1 * f + this.a3 * e;
        this.b8 = { $type: Point_$type, x: this.b9.x * f + this.ca.x * e, y: this.b9.y * f + this.ca.y * e };
        if (d >= 1) {
            this.an.as();
        }
        else {
        }
        this.bw();
    }
    a6(a, b, c) {
        for (let d = 0; d < this.aw.count; ++d) {
            if (this.aw._inner[d].c == a && this.aw._inner[d].d == b && this.aw._inner[d].e == c) {
                return d;
            }
        }
        return -1;
    }
    bx(a) {
        this.au = false;
        this.as = false;
        if (this.ao == null || !this.an.f() || this.cb.width == 0 || this.cb.height == 0) {
            return;
        }
        let b = truncate(Math.ceil(this.cb.width / this.ao.m));
        let c = truncate(Math.max(1, Math.floor(-logBase(this.a0 / b, 2))));
        if (c >= this.a9 - 8) {
            c = (this.a9 - 8) - 1;
        }
        let d = truncate(Math.round(Math.pow(2, c)));
        let e = this.a0;
        let f = this.cb.height * e / this.cb.width;
        let g = this.ao.q / Math.pow(2, c);
        let h = this.ao.p / Math.pow(2, c);
        let i = Math.max(truncate(Math.floor((this.b8.x * this.ao.q) / g)), 0);
        let j = Math.min(truncate(Math.ceil(((this.b8.x + e) * this.ao.q) / g)), d);
        let k = Math.max(truncate(Math.floor((this.b8.y * this.ao.p) / h)), 0);
        let l = Math.min(truncate(Math.ceil(((this.b8.y + f) * this.ao.q) / h)), d);
        let m = ((i * g) - (this.b8.x * this.ao.q)) / g;
        let n = ((k * h) - (this.b8.y * this.ao.p)) / h;
        let o = (e * this.ao.q / g) * (this.ao.m / this.cb.width);
        let p = new List$1(Tile.$, 0);
        for (let q = i; q < j; ++q) {
            for (let r = k; r < l; ++r) {
                let s = this.a6(q, r, c);
                if (s >= 0) {
                    p.add(this.aw._inner[s]);
                    this.aw.removeAt(s);
                }
                else {
                    p.add(((() => {
                        let $ret = new Tile();
                        $ret.c = q;
                        $ret.d = r;
                        $ret.e = c;
                        return $ret;
                    })()));
                }
            }
        }
        this.ap.f = true;
        this.b2();
        this.aw = p;
        for (let t = 0; t < this.aw.count; ++t) {
            if (this.aw._inner[t].h == null) {
                this.aw._inner[t].h = this.ap.a();
                this.aw._inner[t].h._opacity = 1;
                this.an.am(this.aw._inner[t].h);
                let u = this.am(this.aw._inner[t]);
                if (u != null) {
                    this.aw._inner[t].h.ac = u;
                }
                else {
                    let v = null;
                    let w = ((() => {
                        let $ret = new Tile();
                        $ret.c = this.aw._inner[t].c;
                        $ret.d = this.aw._inner[t].d;
                        $ret.e = this.aw._inner[t].e;
                        return $ret;
                    })());
                    while (w.e >= 0 && v == null) {
                        w.c = w.c >> 1;
                        w.d = w.d >> 1;
                        w.e = w.e - 1;
                        v = this.am(w);
                    }
                    if (v != null) {
                        let x = truncate(Math.pow(2, this.aw._inner[t].e - w.e));
                        let y = intDivide(256, x);
                        let z = y * (this.aw._inner[t].c % x);
                        let aa = y * (this.aw._inner[t].d % x);
                        this.aw._inner[t].g = this.ap.a();
                        this.aw._inner[t].g._opacity = 1;
                        this.an.an(this.aw._inner[t].g);
                        u = this.an.a(y, v, z, aa);
                        this.aw._inner[t].g.ac = u;
                    }
                    this.an.u(this.aw._inner[t]);
                }
            }
            let ab = this.ao.m / o;
            let ac = this.ao.k / o;
            let ad = (this.aw._inner[t].c - i + m) * ab;
            let ae = (this.aw._inner[t].d - k + n) * ac;
            this.aw._inner[t].h.width = ab + 0.5;
            this.aw._inner[t].h.height = ac + 0.5;
            this.an.ao(this.aw._inner[t].h, ad, ae);
            if (this.aw._inner[t].g != null) {
                this.aw._inner[t].g.width = ab + 0.5;
                this.aw._inner[t].g.height = ac + 0.5;
                this.an.ao(this.aw._inner[t].g, ad, ae);
            }
        }
        this.ap.f = false;
        this.an.aj();
    }
    bw() {
        if (this.ao == null || !this.an.f() || this.cb.width == 0 || this.cb.height == 0) {
            return;
        }
        if (this.au) {
            return;
        }
        this.au = true;
        this.an.s(runOn(this, this.bx));
    }
    b2() {
        for (let a = 0; a < this.aw.count; ++a) {
            this.an.r(this.aw._inner[a]);
            this.bg(this.aw._inner[a]);
            if (this.aw._inner[a].h != null) {
                this.ap.n(this.aw._inner[a].h);
                this.aw._inner[a].h.ac = null;
                this.aw._inner[a].h = null;
            }
        }
    }
    bv() {
        this.ar.i();
    }
    am(a) {
        return this.ar.item(a);
    }
    bf(a, b) {
        this.ar.item(a, b);
    }
    get ar() {
        return this.aq;
    }
    set ar(a) {
        this.aq = a;
    }
    at() {
        return this.ax.count != 0;
    }
    bk() {
        let a = true;
        if (this.at()) {
            a = false;
        }
        if (!this.an.d()) {
            a = false;
        }
        if (a && !this.as) {
            if (this.imageTilesReady != null) {
                this.imageTilesReady(this, new EventArgs());
            }
        }
        this.as = a;
    }
    b1(a) {
        if (a.g != null) {
            a.b = dateNow();
            this.ax.add(a);
            this.an.ap();
        }
        else {
            this.bk();
        }
    }
    bg(a) {
        if (a.g != null) {
            this.ap.n(a.g);
            a.g.ac = null;
            a.g = null;
            for (let b = 0; b < this.ax.count; ++b) {
                if (this.ax._inner[b] == a) {
                    this.ax.removeAt(b);
                    break;
                }
            }
            if (this.ax.count == 0) {
                this.an.ar();
            }
        }
    }
    bi() {
        let a = dateNow();
        let b = 0.5;
        for (let c = 0; c < this.ax.count;) {
            let d = a.getTime() - this.ax._inner[c].b.getTime();
            let e = d / 1000;
            let f = (e) / b;
            f = MathUtil.b(f, 0, 1);
            this.ax._inner[c].g._opacity = 1 - f;
            if (f >= 1) {
                this.ap.n(this.ax._inner[c].g);
                this.ax._inner[c].g.ac = null;
                this.ax._inner[c].g = null;
                this.ax.removeAt(c);
            }
            else {
                ++c;
            }
            this.an.x();
        }
        if (this.ax.count == 0) {
            this.an.ar();
        }
    }
    bp() {
        this.a0 = this.a3;
        this.b8 = this.ca;
        this.bw();
    }
    br(a) {
        let b = a;
        this.ag.j(b);
        this.an.ae(a);
    }
    bs(a) {
        this.an.ag(a);
    }
    bt(a) {
        this.an.ah(a);
    }
    bu(a) {
        this.an.ai(a);
    }
    bn() {
        if (this.imagesChanged != null) {
            this.imagesChanged(this, new EventArgs());
        }
    }
    bh() {
        this.au = false;
    }
    bm(a) {
        if (this.downloadingImage != null) {
            this.downloadingImage(this, a);
        }
    }
    bl(a) {
        if (this.cancellingImage != null) {
            this.cancellingImage(this, a);
        }
    }
    get a2() {
        return this.az;
    }
    bq(a) {
        this.az = a;
    }
    get a7() {
        return this.ar.h;
    }
    set a7(a) {
        let b = a != this.a7;
        if (b) {
            this.ar = new LRUCache$2(Tile.$, WriteableBitmap.$, 1, a, new TilePositionComparer());
        }
    }
}
XamMultiScaleImage.$t = markType(XamMultiScaleImage, 'XamMultiScaleImage', Control.$, [INotifyPropertyChanged_$type]);
Type.dep(DependencyProperty, PropertyMetadata, XamMultiScaleImage, 'bo', ['Source:ao:b3', [XamMultiScaleTileSource.$, null], 'SpringsEasingFunction:aj:b4', [IEasingFunction_$type, null], 'UseSprings:av:b5', [0, false], 'ViewportOrigin:ca:b6', [Point_$type, { $type: Point_$type, x: 0, y: 0 }], 'ViewportWidth:a3:b7', [1, 1]]);
//# sourceMappingURL=XamMultiScaleImageView_combined.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Number_$type, runOn, typeGetValue, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { DataSourceVelocityTracker } from "./DataSourceVelocityTracker";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
import { truncate } from "./number";
/**
 * @hidden
 */
export class PagePredictionEngine extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
        this.s = 0;
        this.u = 0;
        this.x = -1;
        this.t = -1;
        this.y = 500;
        this.r = 1000;
        this.v = 8;
        this.d = null;
        this.f = null;
        this.w = 0;
        this.propertyChanged = null;
        this.i = false;
        this.h = false;
        this.g = new FastIterationDictionary$2(Base.$, Number_$type, 0);
        this.p = new List$1(Number_$type, 0);
        this.o = new List$1(Number_$type, 0);
        this.c = new DataSourceVelocityTracker();
        this.q = 0;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        let b = this.a;
        this.a = a;
        if (b != this.a) {
            this.ay("ExecutionContext", b, this.a);
        }
    }
    get aa() {
        return this.s;
    }
    set aa(a) {
        let b = this.s;
        this.s = a;
        if (b != this.s) {
            this.ay("FirstVisibleIndexRequested", b, this.s);
        }
    }
    get ae() {
        return this.u;
    }
    set ae(a) {
        let b = this.u;
        this.u = a;
        if (b != this.u) {
            this.ay("LastVisibleIndexRequested", b, this.u);
        }
    }
    get ag() {
        return this.x;
    }
    set ag(a) {
        let b = this.x;
        this.x = a;
        if (b != this.x) {
            this.ay("PageSize", b, this.x);
        }
    }
    get ab() {
        return this.t;
    }
    set ab(a) {
        let b = this.t;
        this.t = a;
        if (b != this.t) {
            this.ay("FullCount", b, this.t);
        }
    }
    get ah() {
        return this.y;
    }
    set ah(a) {
        let b = this.y;
        this.y = a;
        if (b != this.y) {
            this.ay(PagePredictionEngine.aq, b, this.y);
        }
    }
    get z() {
        return this.r;
    }
    set z(a) {
        let b = this.r;
        this.r = a;
        if (b != this.r) {
            this.ay("FetchAheadMilliseconds", b, this.r);
        }
    }
    get af() {
        return this.v;
    }
    set af(a) {
        let b = this.v;
        this.v = a;
        if (b != this.v) {
            this.ay("MaximumPageCandidates", b, this.v);
        }
    }
    get e() {
        return this.d;
    }
    set e(a) {
        let b = this.d;
        this.d = a;
        if (b != this.d) {
            this.ay("PageCandidatesSink", b, this.d);
        }
    }
    ay(a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.az(a, b, c);
    }
    az(a, b, c) {
        switch (a) {
            case "FirstVisibleIndexRequested":
            case "LastVisibleIndexRequested":
                this.aw();
                break;
            case "ExecutionContext":
                this.ax();
                break;
            case "FullCount":
                this.a2();
                break;
            case "PageSize":
                this.a2();
                break;
        }
    }
    a2() {
        this.c.h();
        this.q = 0;
        let a = new List$1(Number_$type, 0);
        for (let b = 0; b < this.g.q.count; b++) {
            if (this.g.p._inner[b]) {
                continue;
            }
            a.add(this.g.q._inner[b]);
        }
        for (let c = 0; c < a.count; c++) {
            this.a1(a._inner[c]);
        }
        if (this.ab > 0 && this.ag > 0) {
            this.w = truncate(Math.ceil(this.ab / this.ag));
        }
    }
    ax() {
        this.au();
    }
    au() {
        if (this.i) {
            return;
        }
        if (this.b != null) {
            this.i = true;
            this.b.enqueueAction(runOn(this, this.av));
        }
    }
    av() {
        this.i = false;
        this.a4();
    }
    a4() {
        if (this.t == -1 || this.x == -1) {
            return;
        }
        this.at();
        this.a5();
        this.a6();
        if (this.q != 0) {
            this.as();
        }
    }
    a3() {
        this.h = false;
        this.a4();
    }
    as() {
        if (this.h) {
            return;
        }
        if (this.b != null) {
            this.h = true;
            this.b.executeDelayed(runOn(this, this.a3), 0);
        }
    }
    a6() {
        let a = this.ac();
        let b = this.ad();
        let c = true;
        let d;
        for (let e = a; e <= b; e++) {
            d = e;
            c = this.j(d, 2);
        }
        if (this.q > 0) {
            d = b;
            while (c) {
                d++;
                c = this.j(d, 1);
            }
        }
        else if (this.q < 0) {
            d = a;
            while (c) {
                d--;
                c = this.j(d, 1);
            }
        }
        this.a0();
    }
    a0() {
        this.o.clear();
        let a = this.g.o;
        let b = this.g.o.count;
        let c = this.g.p;
        for (let d = 0; d < b; d++) {
            if (c._inner[d]) {
                continue;
            }
            let e = typeGetValue(a._inner[d]);
            this.o.add(e);
        }
        for (let f = 0; f < this.o.count; f++) {
            this.j(this.o._inner[f], 1);
        }
    }
    j(a, b) {
        if (a < 0 || a > this.w) {
            return false;
        }
        if (this.l(a)) {
            this.a1(a);
            return false;
        }
        if (this.m(a, this.z)) {
            this.a1(a);
            return false;
        }
        if (this.n()) {
            this.a1(a);
            return false;
        }
        this.ar(a, b);
        return true;
    }
    ar(a, b) {
        if (!this.g.d(a)) {
            if (this.d != null) {
                if (this.d.addCandidate(a, b)) {
                    this.g.s(a, a);
                }
            }
        }
    }
    a1(a) {
        if (this.g.d(a)) {
            this.g.f(a);
            if (this.d != null) {
                this.d.removeCandidate(a);
            }
        }
    }
    n() {
        return this.g.r >= this.af;
    }
    m(a, b) {
        let c = b / 1000;
        let d = c * this.q;
        if (this.k(a)) {
            return false;
        }
        if (d > 0) {
            let e = d + this.ae;
            if (e >= (a * this.ag)) {
                return false;
            }
        }
        else {
            let f = this.aa + d;
            if (f <= ((a * this.ag) + this.ag)) {
                return false;
            }
        }
        return true;
    }
    k(a) {
        let b = a * this.ag;
        let c = b + this.ag;
        if (this.ae < b || this.aa > c) {
            return false;
        }
        return true;
    }
    l(a) {
        let b = this.ah / 1000;
        let c = b * this.q;
        if (c > 0) {
            let d = c + this.aa;
            if (d > (a * this.ag) + this.ag) {
                return true;
            }
        }
        else {
            let e = this.ae + c;
            if (e < (a * this.ag)) {
                return true;
            }
        }
        return false;
    }
    ac() {
        return truncate(Math.floor(this.aa / this.ag));
    }
    ad() {
        return truncate(Math.floor(this.ae / this.ag));
    }
    a5() {
        this.q = this.c.j().y;
    }
    at() {
        this.c.i({ $type: Point_$type, x: 0, y: this.aa });
    }
    aw() {
        if (this.b != null) {
            this.b.enqueueAction(runOn(this, this.a4));
        }
    }
}
PagePredictionEngine.$t = markType(PagePredictionEngine, 'PagePredictionEngine', Base.$, [INotifyPropertyChanged_$type]);
PagePredictionEngine.aq = "PageVisibilityDisplayThresholdMilliseconds";
//# sourceMappingURL=PagePredictionEngine.js.map
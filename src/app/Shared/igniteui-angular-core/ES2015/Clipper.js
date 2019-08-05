/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { LeftClipper } from "./LeftClipper";
import { BottomClipper } from "./BottomClipper";
import { RightClipper } from "./RightClipper";
import { TopClipper } from "./TopClipper";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class Clipper extends Base {
    constructor(a, ..._rest) {
        super();
        this.g = null;
        this.b = null;
        this.h = null;
        this.c = null;
        this.a = null;
        this.d = null;
        this.e = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.c = ((() => {
                        let $ret = new LeftClipper();
                        $ret.m = c.left;
                        $ret.d = d;
                        return $ret;
                    })());
                    this.a = ((() => {
                        let $ret = new BottomClipper();
                        $ret.m = c.bottom;
                        $ret.d = d;
                        return $ret;
                    })());
                    this.d = ((() => {
                        let $ret = new RightClipper();
                        $ret.m = c.right;
                        $ret.d = d;
                        return $ret;
                    })());
                    this.e = ((() => {
                        let $ret = new TopClipper();
                        $ret.m = c.top;
                        $ret.d = d;
                        return $ret;
                    })());
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    this.c = !isNaN_(c) ? ((() => {
                        let $ret = new LeftClipper();
                        $ret.m = c;
                        $ret.d = g;
                        return $ret;
                    })()) : null;
                    this.a = !isNaN_(d) ? ((() => {
                        let $ret = new BottomClipper();
                        $ret.m = d;
                        $ret.d = g;
                        return $ret;
                    })()) : null;
                    this.d = !isNaN_(e) ? ((() => {
                        let $ret = new RightClipper();
                        $ret.m = e;
                        $ret.d = g;
                        return $ret;
                    })()) : null;
                    this.e = !isNaN_(f) ? ((() => {
                        let $ret = new TopClipper();
                        $ret.m = f;
                        $ret.d = g;
                        return $ret;
                    })()) : null;
                }
                break;
        }
    }
    get i() {
        return this.h;
    }
    set i(a) {
        if (this.b != null) {
            this.b.clear();
        }
        this.b = null;
        this.h = a;
        let b = this.h;
        if (this.c != null) {
            this.c.i = b;
            b = this.c;
            this.b = this.c;
        }
        if (this.a != null) {
            this.a.i = b;
            b = this.a;
            this.a._nextClipper = this.b;
            this.b = this.a;
        }
        if (this.d != null) {
            this.d.i = b;
            b = this.d;
            this.d._nextClipper = this.b;
            this.b = this.d;
        }
        if (this.e != null) {
            this.e.i = b;
            b = this.e;
            this.e._nextClipper = this.b;
            this.b = this.e;
        }
        this.g = b;
    }
    j(a) {
        this.g.add(a);
    }
    k(a, b) {
        let c = a;
        let d = a.count;
        let e = new Array(4);
        e[0] = this.e;
        e[1] = this.d;
        e[2] = this.a;
        e[3] = this.c;
        let f = 0;
        let g = 0;
        let h = 0;
        let i = 0;
        if (this.e != null) {
            f = this.e.m;
        }
        if (this.d != null) {
            g = this.d.m;
        }
        if (this.a != null) {
            h = this.a.m;
        }
        if (this.c != null) {
            i = this.c.m;
        }
        let j = false;
        let k;
        let l = e.length;
        let m = l + 1;
        let n = null;
        let o;
        let p;
        let q = 0;
        let r = new Array(16);
        let s = 0;
        let t = new Array(16);
        let u = 0;
        let v = 1;
        let w;
        let x;
        if (b) {
            u = d - 1;
            v = -1;
        }
        for (let y = u; y < d && y >= 0; y += v) {
            o = c.item(y);
            r[q] = o;
            q++;
            for (k = 0; k < m; k++) {
                if (k < l) {
                    n = e[k];
                    if (n == null) {
                        continue;
                    }
                }
                for (p = 0; p < q; p++) {
                    o = r[p];
                    x = o.x;
                    w = o.y;
                    if (k >= l) {
                        this.h.add(o);
                        continue;
                    }
                    j = (k == 0 && w >= f) || (k == 1 && x <= g) || (k == 2 && w <= h) || (k == 3 && x >= i);
                    if (n.c) {
                        n.c = false;
                        n.j = o;
                    }
                    else {
                        if (true) {
                            if (j) {
                                if (!n.g) {
                                    t[s] = n.k(n.l, o);
                                    s++;
                                }
                                else {
                                    if (!n.d && !n.f) {
                                        t[s] = n.l;
                                        s++;
                                        n.f = true;
                                    }
                                }
                                t[s] = o;
                                s++;
                            }
                            else {
                                if (n.g) {
                                    if (!n.d && !n.f) {
                                        t[s] = n.l;
                                        s++;
                                        n.f = true;
                                    }
                                    t[s] = n.k(n.l, o);
                                    s++;
                                }
                            }
                        }
                    }
                    n.l = o;
                    n.g = j;
                }
                let z = r;
                r = t;
                t = z;
                q = s;
                s = 0;
            }
        }
    }
    get f() {
        return (this.c == null || this.c.d) && (this.a == null || this.a.d) && (this.d == null || this.d.d) && (this.e == null || this.e.d);
    }
    set f(a) {
        if (this.c != null) {
            this.c.d = a;
        }
        if (this.a != null) {
            this.a.d = a;
        }
        if (this.d != null) {
            this.d.d = a;
        }
        if (this.e != null) {
            this.e.d = a;
        }
    }
}
Clipper.$t = markType(Clipper, 'Clipper');
//# sourceMappingURL=Clipper.js.map
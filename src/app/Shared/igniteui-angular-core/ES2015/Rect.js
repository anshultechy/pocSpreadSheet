/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class Rect extends Base {
    constructor(a, ..._rest) {
        super();
        this.s = 0;
        this.t = 0;
        this.r = 0;
        this.n = 0;
        this.q = 0;
        this.o = 0;
        this.p = 0;
        this.m = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    this.top = d;
                    this.left = c;
                    this.width = e;
                    this.height = f;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    this.top = d;
                    this.left = c;
                    this.width = e.width;
                    this.height = e.height;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.top = Math.min(c.y, d.y);
                    this.left = Math.min(c.x, d.x);
                    this.width = Math.max(Math.max(c.x, d.x) - this.left, 0);
                    this.height = Math.max(Math.max(c.y, d.y) - this.top, 0);
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.top = c.y;
                    this.left = c.x;
                    this.width = d.width;
                    this.height = d.height;
                }
                break;
            case 4:
                {
                    this.top = 0;
                    this.left = 0;
                    this.width = 0;
                    this.height = 0;
                }
                break;
        }
    }
    get x() {
        return this.s;
    }
    set x(a) {
        this.s = a;
        this.o = this.s;
        this.p = this.o + this.r;
    }
    get y() {
        return this.t;
    }
    set y(a) {
        this.t = a;
        this.q = this.t;
        this.m = this.q + this.n;
    }
    get width() {
        return this.r;
    }
    set width(a) {
        this.r = a;
        this.p = this.o + this.r;
    }
    get height() {
        return this.n;
    }
    set height(a) {
        this.n = a;
        this.m = this.q + this.n;
    }
    get top() {
        return this.q;
    }
    set top(a) {
        this.q = a;
        this.y = this.q;
    }
    get left() {
        return this.o;
    }
    set left(a) {
        this.o = a;
        this.x = this.o;
    }
    get right() {
        return this.p;
    }
    set right(a) {
        this.p = a;
        this.r = this.p - this.o;
    }
    get bottom() {
        return this.m;
    }
    set bottom(a) {
        this.m = a;
        this.n = this.m - this.q;
    }
    get isEmpty() {
        return this.r < 0;
    }
    static get empty() {
        return new Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    }
    equals1(a) {
        if (Rect.l_op_Equality(a, null)) {
            return false;
        }
        if (a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height) {
            return true;
        }
        return false;
    }
    d(a, b) {
        return a >= this.s && a - this.r <= this.s && b >= this.t && b - this.n <= this.t;
    }
    containsLocation(a, b) {
        return !this.isEmpty && this.d(a, b);
    }
    containsPoint(a) {
        return this.containsLocation(a.x, a.y);
    }
    containsRect(a) {
        return !this.isEmpty && !a.isEmpty && (this.s <= a.s && this.t <= a.t && this.s + this.r >= a.s + a.r) && this.t + this.n >= a.t + a.n;
    }
    inflate(a, b) {
        this.x -= a;
        this.y -= b;
        this.width += a * 2;
        this.height += b * 2;
        if (this.r < 0 || this.n < 0) {
            this.af();
        }
    }
    af() {
        this.top = Number.POSITIVE_INFINITY;
        this.left = Number.POSITIVE_INFINITY;
        this.width = Number.NEGATIVE_INFINITY;
        this.height = Number.NEGATIVE_INFINITY;
    }
    intersectsWith(a) {
        if (this.isEmpty || a.isEmpty) {
            return false;
        }
        return a.left < this.right && this.left < a.right && a.top < this.bottom && this.top < a.bottom;
    }
    intersect(a) {
        if (!this.intersectsWith(a)) {
            this.af();
        }
        else {
            let b = Math.max(this.x, a.x);
            let c = Math.max(this.y, a.y);
            let d = Math.min(this.x + this.width, a.x + a.width) - b;
            let e = Math.min(this.y + this.height, a.y + a.height) - c;
            if (d < 0) {
                d = 0;
            }
            if (e < 0) {
                e = 0;
            }
            this.r = d;
            this.n = e;
            this.s = b;
            this.t = c;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
        }
    }
    union(a) {
        if (this.isEmpty) {
            this.s = a.x;
            this.t = a.y;
            this.r = a.width;
            this.n = a.height;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
            return;
        }
        if (!a.isEmpty) {
            let b = Math.min(this.x, a.x);
            let c = Math.min(this.y, a.y);
            let d = this.width;
            let e = this.height;
            if (a.width == Number.POSITIVE_INFINITY || this.width == Number.POSITIVE_INFINITY) {
                d = Number.POSITIVE_INFINITY;
            }
            else {
                let f = Math.max(this.right, a.right);
                d = f - b;
            }
            if (a.height == Number.POSITIVE_INFINITY || this.height == Number.POSITIVE_INFINITY) {
                e = Number.POSITIVE_INFINITY;
            }
            else {
                let g = Math.max(this.bottom, a.bottom);
                e = g - c;
            }
            this.s = b;
            this.t = c;
            this.r = d;
            this.n = e;
            this.o = this.s;
            this.q = this.t;
            this.p = this.o + this.r;
            this.m = this.q + this.n;
        }
    }
    equals(a) {
        if (a == null) {
            return super.equals(a);
        }
        let b = a;
        return b.left == this.left && b.top == this.top && b.width == this.width && b.height == this.height;
    }
    getHashCode() {
        return (this.s) ^ (this.t) ^ (this.r) ^ (this.n);
    }
    copy() {
        return new Rect(0, this.x, this.y, this.width, this.height);
    }
    static l_op_Equality(a, b) {
        if (a == null) {
            return b == null;
        }
        else if (b == null) {
            return false;
        }
        return a.s == b.s && a.t == b.t && a.r == b.r && a.n == b.n;
    }
    static l_op_Inequality(a, b) {
        if (a == null) {
            return b != null;
        }
        else if (b == null) {
            return true;
        }
        return a.s != b.s || a.t != b.t || a.r != b.r || a.n != b.n;
    }
}
Rect.$t = markType(Rect, 'Rect');
//# sourceMappingURL=Rect.js.map
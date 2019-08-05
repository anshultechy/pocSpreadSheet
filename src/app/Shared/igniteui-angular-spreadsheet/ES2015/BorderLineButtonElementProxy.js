/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, EventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
import { BorderLineButtonElementProxy_BorderLineButtonControlResources } from "./BorderLineButtonElementProxy_BorderLineButtonControlResources";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { Colors } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { truncate, intDivide } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class BorderLineButtonElementProxy extends Base {
    constructor(a, b, c, d, e, f) {
        super();
        this.aa = null;
        this.ac = 10;
        this.x = false;
        this.v = false;
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 1;
        this.f = 1;
        this.g = 1;
        this.h = 1;
        this.r = 0;
        this.ak = new Color();
        this.al = new Color();
        this.u = null;
        this.t = null;
        this.w = false;
        if (null == BorderLineButtonElementProxy.q) {
            BorderLineButtonElementProxy.q = new BorderLineButtonElementProxy_BorderLineButtonControlResources();
        }
        this.aa = document.createElement("canvas");
        this.aa.id = a;
        this.z = b;
        this.s = c;
        this.w = d;
        this.ak = d ? BorderLineButtonElementProxy.q.c : BorderLineButtonElementProxy.q.d;
        this.al = BorderLineButtonElementProxy.q.h;
        this.u = e;
        this.t = f;
        this.ae();
    }
    get i() {
        return this.a;
    }
    set i(a) {
        if (this.a != a) {
            this.a = a;
            this.ah();
        }
    }
    get s() {
        return this.r;
    }
    set s(a) {
        if (a != this.r) {
            this.r = a;
            switch (this.r) {
                case 0: break;
                case 1:
                    this.n = 2;
                    this.p = 2;
                    this.o = 2;
                    this.i = 2;
                    break;
                case 2:
                    this.l = 2;
                    this.m = 2;
                    break;
                case 3:
                    this.i = 2;
                    break;
                case 4:
                    this.l = 0;
                    this.m = 0;
                    this.j = 2;
                    break;
                case 5:
                    this.l = 0;
                    this.m = 0;
                    this.k = 2;
                    break;
                case 6:
                    this.l = 2;
                    break;
                case 7:
                    this.m = 2;
                    break;
                case 8:
                    this.n = 2;
                    break;
                case 9:
                    this.o = 2;
                    break;
                case 10:
                    this.p = 2;
                    break;
            }
        }
    }
    get ab() {
        return this.aa;
    }
    get y() {
        return this.v;
    }
    set y(a) {
        if (this.v != a) {
            this.v = a;
            this.ah();
        }
    }
    get z() {
        return this.x;
    }
    set z(a) {
        this.x = a;
    }
    get j() {
        return this.b;
    }
    set j(a) {
        if (this.b != a) {
            this.b = a;
            this.ah();
        }
    }
    get k() {
        return this.c;
    }
    set k(a) {
        if (this.c != a) {
            this.c = a;
            this.ah();
        }
    }
    get l() {
        return this.d;
    }
    set l(a) {
        if (this.d != a) {
            this.d = a;
            this.ah();
        }
    }
    get m() {
        return this.e;
    }
    set m(a) {
        if (this.e != a) {
            this.e = a;
            this.ah();
        }
    }
    get n() {
        return this.f;
    }
    set n(a) {
        if (this.f != a) {
            this.f = a;
            this.ah();
        }
    }
    get o() {
        return this.g;
    }
    set o(a) {
        if (this.g != a) {
            this.g = a;
            this.ah();
        }
    }
    get p() {
        return this.h;
    }
    set p(a) {
        if (this.h != a) {
            this.h = a;
            this.ah();
        }
    }
    ae() {
        let a = (b) => {
            if (false == this.w) {
                let c = b.button;
                this.al = c == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                this.ah();
            }
        };
        this.aa.addEventListener("mouseenter", a, false);
        let b = (c) => {
            if (false == this.w) {
                this.al = BorderLineButtonElementProxy.q.h;
                this.ah();
            }
        };
        this.aa.addEventListener("mouseleave", b, false);
        let c = (d) => {
            if (false == this.w) {
                let e = d.button;
                this.al = e == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                this.ah();
            }
        };
        this.aa.addEventListener("mousedown", c, false);
        let d = (e) => {
            if (false == this.w) {
                let f = e.button;
                this.al = f == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                this.ah();
                if (this.z) {
                    this.y = !this.y;
                    this.aj(EventArgs.empty);
                }
                else {
                    this.ai(EventArgs.empty);
                }
            }
        };
        this.aa.addEventListener("mouseup", d, false);
    }
    af(a, b, c, d, e, f) {
        a.beginPath();
        a.lineWidth = 1;
        a.moveTo(c, d);
        a.lineTo(e, f);
        a.strokeStyle = b.colorString;
        a.stroke();
    }
    ag(a, b, c, d, e, f) {
        a.fillStyle = b.colorString;
        a.fillRect(c, d, e, f);
    }
    am(a) {
        if (a == 1) {
            return BorderLineButtonElementProxy.q.b;
        }
        if (a == 2) {
            return BorderLineButtonElementProxy.q.a;
        }
        return Colors.r;
    }
    ah() {
        let a = this.aa.getContext("2d");
        let b = new Rect(0, 0, 0, this.aa.width, this.aa.height);
        let c = new Color();
        if (this.z) {
            if (this.y) {
                c = BorderLineButtonElementProxy.q.f;
            }
            else {
                c = this.al;
            }
        }
        else {
            c = this.al;
        }
        this.ag(a, c, truncate(b.left), truncate(b.top), truncate(b.width), truncate(b.height));
        b.inflate(-this.ac, -this.ac);
        this.ag(a, this.ak, truncate(b.left), truncate(b.top), truncate(b.width), truncate(b.height));
        let d = new Color();
        d = this.am(this.n);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left), truncate(b.top), truncate(b.left), truncate(b.bottom));
        }
        d = this.am(this.p);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left), truncate(b.top), truncate(b.right), truncate(b.top));
        }
        d = this.am(this.o);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.right), truncate(b.top), truncate(b.right), truncate(b.bottom));
        }
        d = this.am(this.i);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left), truncate(b.bottom), truncate(b.right), truncate(b.bottom));
        }
        d = this.am(this.k);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left), truncate(b.bottom), truncate(b.right), truncate(b.top));
        }
        d = this.am(this.j);
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left), truncate(b.top), truncate(b.right), truncate(b.bottom));
        }
        d = this.am(this.l);
        let e = truncate(b.top) + (intDivide((truncate(b.bottom) - truncate(b.top)), 2));
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left) + 1, e, truncate(b.right) - 1, e);
        }
        d = this.am(this.m);
        let f = truncate(b.left) + (intDivide((truncate(b.right) - truncate(b.left)), 2));
        if (Color.d(Colors.r, d)) {
            this.af(a, d, f, truncate(b.top) + 1, f, truncate(b.bottom) - 1);
        }
    }
    ai(a) {
        if (this.t != null) {
            this.t(this);
        }
    }
    aj(a) {
        if (this.u != null) {
            this.u(this);
        }
    }
}
BorderLineButtonElementProxy.$t = markType(BorderLineButtonElementProxy, 'BorderLineButtonElementProxy');
BorderLineButtonElementProxy.q = null;
//# sourceMappingURL=BorderLineButtonElementProxy.js.map

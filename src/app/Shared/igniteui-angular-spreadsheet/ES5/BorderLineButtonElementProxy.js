/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, EventArgs, markType } from "../../igniteui-angular-core/ES5/type";
import { BorderLineButtonElementProxy_BorderLineButtonControlResources } from "./BorderLineButtonElementProxy_BorderLineButtonControlResources";
import { Color } from "../../igniteui-angular-core/ES5/Color";
import { Colors } from "../../igniteui-angular-excel/ES5/excel.core";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { truncate, intDivide } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var BorderLineButtonElementProxy = /** @class */ (function (_super) {
    tslib_1.__extends(BorderLineButtonElementProxy, _super);
    function BorderLineButtonElementProxy(a, b, c, d, e, f) {
        var _this = _super.call(this) || this;
        _this.aa = null;
        _this.ac = 10;
        _this.x = false;
        _this.v = false;
        _this.a = 1;
        _this.b = 0;
        _this.c = 0;
        _this.d = 1;
        _this.e = 1;
        _this.f = 1;
        _this.g = 1;
        _this.h = 1;
        _this.r = 0;
        _this.ak = new Color();
        _this.al = new Color();
        _this.u = null;
        _this.t = null;
        _this.w = false;
        if (null == BorderLineButtonElementProxy.q) {
            BorderLineButtonElementProxy.q = new BorderLineButtonElementProxy_BorderLineButtonControlResources();
        }
        _this.aa = document.createElement("canvas");
        _this.aa.id = a;
        _this.z = b;
        _this.s = c;
        _this.w = d;
        _this.ak = d ? BorderLineButtonElementProxy.q.c : BorderLineButtonElementProxy.q.d;
        _this.al = BorderLineButtonElementProxy.q.h;
        _this.u = e;
        _this.t = f;
        _this.ae();
        return _this;
    }
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "i", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            if (this.a != a) {
                this.a = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "s", {
        get: function () {
            return this.r;
        },
        set: function (a) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "ab", {
        get: function () {
            return this.aa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "y", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            if (this.v != a) {
                this.v = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "z", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "j", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            if (this.b != a) {
                this.b = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "k", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            if (this.c != a) {
                this.c = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "l", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            if (this.d != a) {
                this.d = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "m", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            if (this.e != a) {
                this.e = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "n", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            if (this.f != a) {
                this.f = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "o", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            if (this.g != a) {
                this.g = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BorderLineButtonElementProxy.prototype, "p", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            if (this.h != a) {
                this.h = a;
                this.ah();
            }
        },
        enumerable: true,
        configurable: true
    });
    BorderLineButtonElementProxy.prototype.ae = function () {
        var _this = this;
        var a = function (b) {
            if (false == _this.w) {
                var c_1 = b.button;
                _this.al = c_1 == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                _this.ah();
            }
        };
        this.aa.addEventListener("mouseenter", a, false);
        var b = function (c) {
            if (false == _this.w) {
                _this.al = BorderLineButtonElementProxy.q.h;
                _this.ah();
            }
        };
        this.aa.addEventListener("mouseleave", b, false);
        var c = function (d) {
            if (false == _this.w) {
                var e = d.button;
                _this.al = e == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                _this.ah();
            }
        };
        this.aa.addEventListener("mousedown", c, false);
        var d = function (e) {
            if (false == _this.w) {
                var f = e.button;
                _this.al = f == 1 ? BorderLineButtonElementProxy.q.g : BorderLineButtonElementProxy.q.f;
                _this.ah();
                if (_this.z) {
                    _this.y = !_this.y;
                    _this.aj(EventArgs.empty);
                }
                else {
                    _this.ai(EventArgs.empty);
                }
            }
        };
        this.aa.addEventListener("mouseup", d, false);
    };
    BorderLineButtonElementProxy.prototype.af = function (a, b, c, d, e, f) {
        a.beginPath();
        a.lineWidth = 1;
        a.moveTo(c, d);
        a.lineTo(e, f);
        a.strokeStyle = b.colorString;
        a.stroke();
    };
    BorderLineButtonElementProxy.prototype.ag = function (a, b, c, d, e, f) {
        a.fillStyle = b.colorString;
        a.fillRect(c, d, e, f);
    };
    BorderLineButtonElementProxy.prototype.am = function (a) {
        if (a == 1) {
            return BorderLineButtonElementProxy.q.b;
        }
        if (a == 2) {
            return BorderLineButtonElementProxy.q.a;
        }
        return Colors.r;
    };
    BorderLineButtonElementProxy.prototype.ah = function () {
        var a = this.aa.getContext("2d");
        var b = new Rect(0, 0, 0, this.aa.width, this.aa.height);
        var c = new Color();
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
        var d = new Color();
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
        var e = truncate(b.top) + (intDivide((truncate(b.bottom) - truncate(b.top)), 2));
        if (Color.d(Colors.r, d)) {
            this.af(a, d, truncate(b.left) + 1, e, truncate(b.right) - 1, e);
        }
        d = this.am(this.m);
        var f = truncate(b.left) + (intDivide((truncate(b.right) - truncate(b.left)), 2));
        if (Color.d(Colors.r, d)) {
            this.af(a, d, f, truncate(b.top) + 1, f, truncate(b.bottom) - 1);
        }
    };
    BorderLineButtonElementProxy.prototype.ai = function (a) {
        if (this.t != null) {
            this.t(this);
        }
    };
    BorderLineButtonElementProxy.prototype.aj = function (a) {
        if (this.u != null) {
            this.u(this);
        }
    };
    BorderLineButtonElementProxy.$t = markType(BorderLineButtonElementProxy, 'BorderLineButtonElementProxy');
    BorderLineButtonElementProxy.q = null;
    return BorderLineButtonElementProxy;
}(Base));
export { BorderLineButtonElementProxy };
//# sourceMappingURL=BorderLineButtonElementProxy.js.map

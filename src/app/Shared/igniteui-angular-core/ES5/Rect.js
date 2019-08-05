/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var Rect = /** @class */ (function (_super) {
    tslib_1.__extends(Rect, _super);
    function Rect(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.s = 0;
        _this.t = 0;
        _this.r = 0;
        _this.n = 0;
        _this.q = 0;
        _this.o = 0;
        _this.p = 0;
        _this.m = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this.top = d;
                    _this.left = c;
                    _this.width = e;
                    _this.height = f;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.top = d;
                    _this.left = c;
                    _this.width = e.width;
                    _this.height = e.height;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.top = Math.min(c.y, d.y);
                    _this.left = Math.min(c.x, d.x);
                    _this.width = Math.max(Math.max(c.x, d.x) - _this.left, 0);
                    _this.height = Math.max(Math.max(c.y, d.y) - _this.top, 0);
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.top = c.y;
                    _this.left = c.x;
                    _this.width = d.width;
                    _this.height = d.height;
                }
                break;
            case 4:
                {
                    _this.top = 0;
                    _this.left = 0;
                    _this.width = 0;
                    _this.height = 0;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Rect.prototype, "x", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.o = this.s;
            this.p = this.o + this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.q = this.t;
            this.m = this.q + this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.p = this.o + this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.m = this.q + this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "top", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.y = this.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "left", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.x = this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.r = this.p - this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.n = this.m - this.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "isEmpty", {
        get: function () {
            return this.r < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect, "empty", {
        get: function () {
            return new Rect(0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.equals1 = function (a) {
        if (Rect.l_op_Equality(a, null)) {
            return false;
        }
        if (a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height) {
            return true;
        }
        return false;
    };
    Rect.prototype.d = function (a, b) {
        return a >= this.s && a - this.r <= this.s && b >= this.t && b - this.n <= this.t;
    };
    Rect.prototype.containsLocation = function (a, b) {
        return !this.isEmpty && this.d(a, b);
    };
    Rect.prototype.containsPoint = function (a) {
        return this.containsLocation(a.x, a.y);
    };
    Rect.prototype.containsRect = function (a) {
        return !this.isEmpty && !a.isEmpty && (this.s <= a.s && this.t <= a.t && this.s + this.r >= a.s + a.r) && this.t + this.n >= a.t + a.n;
    };
    Rect.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += a * 2;
        this.height += b * 2;
        if (this.r < 0 || this.n < 0) {
            this.af();
        }
    };
    Rect.prototype.af = function () {
        this.top = Number.POSITIVE_INFINITY;
        this.left = Number.POSITIVE_INFINITY;
        this.width = Number.NEGATIVE_INFINITY;
        this.height = Number.NEGATIVE_INFINITY;
    };
    Rect.prototype.intersectsWith = function (a) {
        if (this.isEmpty || a.isEmpty) {
            return false;
        }
        return a.left < this.right && this.left < a.right && a.top < this.bottom && this.top < a.bottom;
    };
    Rect.prototype.intersect = function (a) {
        if (!this.intersectsWith(a)) {
            this.af();
        }
        else {
            var b = Math.max(this.x, a.x);
            var c = Math.max(this.y, a.y);
            var d = Math.min(this.x + this.width, a.x + a.width) - b;
            var e = Math.min(this.y + this.height, a.y + a.height) - c;
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
    };
    Rect.prototype.union = function (a) {
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
            var b = Math.min(this.x, a.x);
            var c = Math.min(this.y, a.y);
            var d = this.width;
            var e = this.height;
            if (a.width == Number.POSITIVE_INFINITY || this.width == Number.POSITIVE_INFINITY) {
                d = Number.POSITIVE_INFINITY;
            }
            else {
                var f = Math.max(this.right, a.right);
                d = f - b;
            }
            if (a.height == Number.POSITIVE_INFINITY || this.height == Number.POSITIVE_INFINITY) {
                e = Number.POSITIVE_INFINITY;
            }
            else {
                var g = Math.max(this.bottom, a.bottom);
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
    };
    Rect.prototype.equals = function (a) {
        if (a == null) {
            return _super.prototype.equals.call(this, a);
        }
        var b = a;
        return b.left == this.left && b.top == this.top && b.width == this.width && b.height == this.height;
    };
    Rect.prototype.getHashCode = function () {
        return (this.s) ^ (this.t) ^ (this.r) ^ (this.n);
    };
    Rect.prototype.copy = function () {
        return new Rect(0, this.x, this.y, this.width, this.height);
    };
    Rect.l_op_Equality = function (a, b) {
        if (a == null) {
            return b == null;
        }
        else if (b == null) {
            return false;
        }
        return a.s == b.s && a.t == b.t && a.r == b.r && a.n == b.n;
    };
    Rect.l_op_Inequality = function (a, b) {
        if (a == null) {
            return b != null;
        }
        else if (b == null) {
            return true;
        }
        return a.s != b.s || a.t != b.t || a.r != b.r || a.n != b.n;
    };
    Rect.$t = markType(Rect, 'Rect');
    return Rect;
}(Base));
export { Rect };
//# sourceMappingURL=Rect.js.map
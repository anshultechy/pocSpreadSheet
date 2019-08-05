/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES5/type";
import { isInfinity } from "../../igniteui-angular-core/ES5/number";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var ScrollBarInfoMediator = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollBarInfoMediator, _super);
    function ScrollBarInfoMediator(a) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.a = null;
        _this.i = false;
        _this.f = null;
        _this.e = null;
        _this.c = a;
        var b = _this.c;
        b.propertyChanged = delegateCombine(b.propertyChanged, runOn(_this, _this.o));
        return _this;
    }
    Object.defineProperty(ScrollBarInfoMediator.prototype, "j", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarInfoMediator.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            if (a != this.a) {
                var b = this.a;
                this.a = a;
                if (b != null) {
                    b.setOnValueChangeCallback(null);
                }
                if (this.a != null) {
                    this.l();
                    this.a.setOnValueChangeCallback(runOn(this, this.n));
                }
                this.m(b, a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarInfoMediator.prototype, "g", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarInfoMediator.prototype, "h", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollBarInfoMediator.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    ScrollBarInfoMediator.prototype.k = function () {
        var a = this.c;
        a.propertyChanged = delegateRemove(a.propertyChanged, runOn(this, this.o));
        this.b = null;
    };
    ScrollBarInfoMediator.prototype.l = function () {
        var a = this.a;
        if (a == null) {
            return;
        }
        if (this.i) {
            return;
        }
        try {
            this.i = true;
            a.initialize(this.c._ab, this.c._aa, isInfinity(this.c._af) ? this.c._aa : this.c._af, this.c._ac, this.c._z, this.c._ae);
            this.p();
            this.q();
        }
        finally {
            this.i = false;
        }
    };
    ScrollBarInfoMediator.prototype.m = function (a, b) {
    };
    ScrollBarInfoMediator.prototype.n = function (a) {
        if (this.a != null && !this.i) {
            this.c._ac = a;
        }
    };
    ScrollBarInfoMediator.prototype.o = function (a, b) {
        if (this.a != null) {
            if (stringIsNullOrEmpty(b.propertyName)) {
                this.l();
            }
            else {
                switch (b.propertyName) {
                    case "Minimum":
                        this.a.setMinimum(this.c._ab);
                        break;
                    case "Maximum":
                    case "ScrollableExtent":
                        this.a.setMaximum(this.c._aa);
                        break;
                    case "Viewport":
                        this.a.setViewportSize(this.c._af);
                        break;
                    case "Offset":
                        this.a.setValue(this.c._ac);
                        break;
                    case "ComputedScrollBarIsEnabled":
                        this.p();
                        break;
                    case "ComputedScrollBarVisibility":
                        this.q();
                        break;
                    case "Extent":
                    case "LargeChange": break;
                    case "LargeChangeResolved":
                        this.a.setLargeChange(this.c._z);
                        break;
                    case "SmallChange":
                        this.a.setSmallChange(this.c._ae);
                        break;
                    case "IsRangeChangeSuspended":
                    case "ScrollBarVisibility": break;
                    default: break;
                }
            }
        }
    };
    ScrollBarInfoMediator.prototype.p = function () {
        if (this.e != null) {
            this.e();
        }
        else if (this.a != null) {
            this.a.setIsEnabled(this.c._g);
        }
    };
    ScrollBarInfoMediator.prototype.q = function () {
        if (this.f != null) {
            this.f();
        }
        else if (this.a != null) {
            this.a.setIsVisible(this.c._h);
        }
    };
    ScrollBarInfoMediator.$t = markType(ScrollBarInfoMediator, 'ScrollBarInfoMediator');
    return ScrollBarInfoMediator;
}(Base));
export { ScrollBarInfoMediator };
//# sourceMappingURL=ScrollBarInfoMediator.js.map

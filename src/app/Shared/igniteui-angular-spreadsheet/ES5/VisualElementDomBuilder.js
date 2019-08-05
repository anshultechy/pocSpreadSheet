/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, String_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { IVisualElementVisitor_$type } from "./IVisualElementVisitor";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
import { isNaN_ } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var VisualElementDomBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElementDomBuilder, _super);
    function VisualElementDomBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualElementDomBuilder.prototype.get_n = function () {
        return "ui-tooltip";
    };
    Object.defineProperty(VisualElementDomBuilder.prototype, "n", {
        get: function () {
            return this.get_n();
        },
        enumerable: true,
        configurable: true
    });
    VisualElementDomBuilder.prototype.get_m = function () {
        return "ui-tooltip-body";
    };
    Object.defineProperty(VisualElementDomBuilder.prototype, "m", {
        get: function () {
            return this.get_m();
        },
        enumerable: true,
        configurable: true
    });
    VisualElementDomBuilder.prototype.get_o = function () {
        return "ui-tooltip-title";
    };
    Object.defineProperty(VisualElementDomBuilder.prototype, "o", {
        get: function () {
            return this.get_o();
        },
        enumerable: true,
        configurable: true
    });
    VisualElementDomBuilder.p = function (a, b) {
        if (b === void 0) { b = null; }
        VisualElementDomBuilder.q(a, "div", b, true, true);
    };
    VisualElementDomBuilder.q = function (a, b, c, d, e) {
        var f = a._parent.a7;
        a.a7 = VisualElementDomBuilder.d(f, b, c, d, e);
    };
    VisualElementDomBuilder.d = function (a, b, c, d, e) {
        if (a == null) {
            return null;
        }
        var f = a.createElement(b);
        if (c != null) {
            f.addClass(c);
        }
        var g = a.getSubRenderer(f);
        if (d) {
            f.setRawStyleProperty("position", "absolute");
        }
        if (e) {
            f.setRawStyleProperty("overflow", "hidden");
        }
        a.append(f);
        return g;
    };
    VisualElementDomBuilder.prototype.r = function (a) {
        if (a.a7 == null) {
            switch (a.bx) {
                case "TextBox":
                    VisualElementDomBuilder.q(a, "textarea", this.h(a), true, false);
                    a.a7.rootWrapper.listen("input", function (b) {
                        var c = (b.originalEvent.target);
                        var d = (c.value);
                        a.co = d;
                        a.cp();
                    });
                    break;
                case "ComboBox":
                    {
                        VisualElementDomBuilder.q(a, "select", null, true, false);
                        a.a7.rootWrapper.listen("change", function (b) {
                            var c = (b.originalEvent.target);
                            var d = (c.selectedIndex);
                            a.co = d < 0 ? null : (c.options[d].text);
                            a.cq();
                        });
                    }
                    break;
                case "ToolTip":
                    VisualElementDomBuilder.p(a, this.n);
                    VisualElementDomBuilder.q(a.cg, "div", this.o, false, false);
                    VisualElementDomBuilder.q(a.cf, "div", this.m, false, false);
                    break;
                case "ScrollBar":
                case "ScrollBarFarButton":
                case "ScrollBarFarTrack":
                case "ScrollBarNearButton":
                case "ScrollBarNearTrack":
                case "ScrollBarThumb":
                    VisualElementDomBuilder.p(a, this.g(a));
                    break;
                default:
                case "Button":
                case "RepeatButton":
                case "ToggleButton":
                case "Line":
                    VisualElementDomBuilder.p(a);
                    break;
            }
        }
    };
    VisualElementDomBuilder.prototype.g = function (a) {
        return null;
    };
    VisualElementDomBuilder.prototype.h = function (a) {
        return null;
    };
    VisualElementDomBuilder.prototype.s = function (a) {
        var e_1, _a;
        if (a.ch) {
            a.ch = false;
            var b = a.a7.rootWrapper;
            this.y(a);
            if (a.ck != null) {
                a.ci = false;
                try {
                    for (var _b = tslib_1.__values(fromEnum(a.ck)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var c = _c.value;
                        var d = a.a7.createElement("option");
                        if (c == a.co) {
                            d.setAttribute("selected", "true");
                        }
                        d.setText(c);
                        d.listen("click", function (e) {
                            a.co = (e.target.text);
                            a.cq();
                        });
                        b.append(d);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        if (a.ci) {
            a.ci = false;
            var e = a.a7.rootWrapper.getNativeElement();
            if (a.ck != null && a.ck.count > 0 && !stringIsNullOrEmpty(a.co)) {
                e.value = a.co;
            }
            else {
                e.selectedIndex = -1;
            }
        }
    };
    VisualElementDomBuilder.prototype.t = function (a) {
        if (a.cg) {
            a.a7.rootWrapper.setRawStyleProperty("background-color", a.ci);
        }
    };
    VisualElementDomBuilder.prototype.u = function (a) {
        if (a.ci) {
            a.ci = false;
            var b = stringIsNullOrEmpty(a.co) ? "" : a.co;
            var c = a.a7.rootWrapper;
            if (c.getProperty("value") != b) {
                c.setProperty(VisualElementDomBuilder.l, b);
            }
        }
        if (a.ch) {
            a.ch = false;
            a.a7.rootWrapper.setProperty("rows", a.cl);
        }
    };
    VisualElementDomBuilder.prototype.v = function (a) {
        if (a.ck) {
            a.ck = false;
            if (a.cl) {
                a.a7.rootWrapper.removeClass("Off");
            }
            else {
                a.a7.rootWrapper.addClass("Off");
            }
        }
    };
    VisualElementDomBuilder.prototype.w = function (a) {
        if (a.cj) {
            a.cj = false;
            a.cf.a7.rootWrapper.setText(a.cq != null ? a.cq : "");
        }
        if (a.ck) {
            a.ck = false;
            a.cg.a7.rootWrapper.setText(a.cr != null ? a.cr : "");
        }
    };
    VisualElementDomBuilder.prototype.x = function (a) {
        var b = a.a7.rootWrapper;
        if (!a.u) {
            b.addClass("ui-state-disabled");
        }
        else {
            b.removeClass("ui-state-disabled");
        }
    };
    VisualElementDomBuilder.prototype.y = function (a) {
        var b = a.a7.rootWrapper;
        for (var c = 0, d = b.getChildCount(); c < d; c++) {
            var e = b.getChildAt(c);
            e.unlistenAll();
        }
        b.removeChildren();
    };
    VisualElementDomBuilder.prototype.z = function (a) {
        a.a7.rootWrapper.unlistenAll();
        a.a7.rootWrapper.remove();
        a.ap = null;
        a.a7 = null;
    };
    VisualElementDomBuilder.prototype.visitElement = function (a) {
        if (a.ab) {
            if (a.a7 != null) {
                this.z(a);
            }
            a.b8();
            a.bz();
            return false;
        }
        else {
            if (a.a7 == null) {
                this.r(a);
                if (a.x && a.a7 != null) {
                    a.a7.rootWrapper.addClass("ui-state-default");
                }
                if (a.h != null && a.a7 != null) {
                    var b = a.a7.rootWrapper;
                    b.setRawStyleProperty("margin", "0px");
                    b.setRawStyleProperty("padding", "0px");
                }
            }
            if (a.a7 != null) {
                var c = a.a7.rootWrapper;
                if (a.q) {
                    a.q = false;
                    var d = a.ax;
                    var e = a.a2;
                    if (a._parent != null) {
                        var f = a._parent.h;
                        if (f != null) {
                            d -= f.a.b;
                            e -= f.a.c;
                        }
                    }
                    VisualElementDomBuilder.aa(a, "left", d + "px");
                    VisualElementDomBuilder.aa(a, "top", e + "px");
                    var g = isNaN_(a.a3) ? "auto" : a.a3 + "px";
                    var h = isNaN_(a.av) ? "auto" : a.av + "px";
                    VisualElementDomBuilder.aa(a, "width", g);
                    VisualElementDomBuilder.aa(a, "height", h);
                }
                if (a.r) {
                    a.r = false;
                    c.setRawStyleProperty("z-index", a.bu == 0 ? "auto" : a.bu);
                }
                if (a.k) {
                    a.k = false;
                    var i = a.bw != null ? a.bw : "";
                    c.setRawStyleProperty("cursor", i);
                }
                if (a.m) {
                    a.m = false;
                    this.x(a);
                }
                if (a.x) {
                    if (a.p) {
                        a.p = false;
                        if (a.y) {
                            c.addClass("ui-state-hover");
                        }
                        else {
                            c.removeClass("ui-state-hover");
                        }
                    }
                    if (a.n) {
                        a.n = false;
                        if (a.s) {
                            c.addClass("ui-state-active");
                        }
                        else {
                            c.removeClass("ui-state-active");
                        }
                    }
                }
                switch (a.bx) {
                    case "ToolTip":
                        this.w(a);
                        break;
                    case "TextBox":
                        this.u(a);
                        break;
                    case "ToggleButton":
                        this.v(a);
                        break;
                    case "ComboBox":
                        this.s(a);
                        break;
                    case "Line":
                        this.t(a);
                        break;
                }
                if (a.o) {
                    a.o = false;
                    if (a.ac) {
                        c.show();
                    }
                    else {
                        c.hide();
                    }
                }
            }
        }
        var j = a.l;
        a.l = false;
        a.j = false;
        return j;
    };
    VisualElementDomBuilder.aa = function (a, b, c) {
        if (a != null && a.a7 != null) {
            if (a.ap == null) {
                a.ap = new Dictionary$2(String_$type, Base.$, 0);
            }
            if (a.ap.item(b) != c) {
                a.ap.item(b, c);
                a.a7.rootWrapper.setRawStyleProperty(b, c);
            }
        }
    };
    VisualElementDomBuilder.$t = markType(VisualElementDomBuilder, 'VisualElementDomBuilder', Base.$, [IVisualElementVisitor_$type]);
    VisualElementDomBuilder.c = (window && (window.navigator.userAgent.indexOf('MSIE') > -1 || !!window.navigator.userAgent.match(/trident/i)));
    VisualElementDomBuilder.a = (window && window.navigator.userAgent.indexOf('Edge') > -1);
    VisualElementDomBuilder.b = (window && window.mozInnerScreenX !== undefined);
    VisualElementDomBuilder.l = VisualElementDomBuilder.c ? "textContent" : "value";
    return VisualElementDomBuilder;
}(Base));
export { VisualElementDomBuilder };
//# sourceMappingURL=VisualElementDomBuilder.js.map

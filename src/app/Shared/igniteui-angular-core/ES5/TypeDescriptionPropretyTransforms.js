/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Delegate_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { stringReplace } from "./string";
/**
 * @hidden
 */
var TypeDescriptionPropretyTransforms = /** @class */ (function (_super) {
    tslib_1.__extends(TypeDescriptionPropretyTransforms, _super);
    function TypeDescriptionPropretyTransforms() {
        var _this = _super.call(this) || this;
        _this.a = new Dictionary$2(String_$type, Delegate_$type, 0);
        _this.a.item("VisibilityToBooleanTransform", function (a, b) {
            if (a.toString().toLowerCase() == "visible") {
                return true;
            }
            return false;
        });
        _this.a.item("FontFamilyTransform", function (a, b) {
            var c = _this.e(b);
            var d = _this.d(b);
            var e = _this.f(b);
            var f = a;
            if (f == null) {
                f = "Verdana";
            }
            return c + " " + e + " " + d + " " + f;
        });
        _this.a.item("FontStyleTransform", function (a, b) {
            var c = _this.c(b);
            var d = _this.d(b);
            var e = _this.f(b);
            var f = a;
            if (f == null) {
                f = "normal";
            }
            return f + " " + e + " " + d + " " + c;
        });
        _this.a.item("FontSizeTransform", function (a, b) {
            var c = _this.c(b);
            var d = _this.e(b);
            var e = _this.f(b);
            var f = a != null ? a.toString() + "px" : null;
            if (f == null) {
                f = "14px";
            }
            return d + " " + e + " " + f + " " + c;
        });
        _this.a.item("FontWeightTransform", function (a, b) {
            var c = _this.c(b);
            var d = _this.d(b);
            var e = _this.e(b);
            var f = a;
            if (f == null) {
                f = "normal";
            }
            f = f.toLowerCase();
            return e + " " + f + " " + d + " " + c;
        });
        return _this;
    }
    TypeDescriptionPropretyTransforms.prototype.c = function (a) {
        var b = stringReplace(stringReplace(stringReplace(a.i, "Style", "Family"), "Weight", "Family"), "Size", "Family");
        var c = "Verdana";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "Verdana";
            }
        }
        return c;
    };
    TypeDescriptionPropretyTransforms.prototype.e = function (a) {
        var b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Style"), "Weight", "Style"), "Size", "Style");
        var c = "normal";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "normal";
            }
        }
        return c;
    };
    TypeDescriptionPropretyTransforms.prototype.d = function (a) {
        var b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Size"), "Weight", "Size"), "Style", "Size");
        var c = "14px";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "14px";
            }
            else {
                c = c.toString() + "px";
            }
        }
        return c;
    };
    TypeDescriptionPropretyTransforms.prototype.f = function (a) {
        var b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Weight"), "Size", "Weight"), "Style", "Weight");
        var c = "normal";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "normal";
            }
            c = c.toLowerCase();
        }
        return c;
    };
    TypeDescriptionPropretyTransforms.prototype.b = function (a, b, c) {
        var d = c.c;
        if (d == null) {
            return b;
        }
        var e = d.h(a);
        if (e != null && this.a.containsKey(e)) {
            var f = this.a.item(e);
            return f(b, c);
        }
        return b;
    };
    TypeDescriptionPropretyTransforms.$t = markType(TypeDescriptionPropretyTransforms, 'TypeDescriptionPropretyTransforms');
    return TypeDescriptionPropretyTransforms;
}(Base));
export { TypeDescriptionPropretyTransforms };
//# sourceMappingURL=TypeDescriptionPropretyTransforms.js.map
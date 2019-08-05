/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { stringContains, stringReplace } from "./string";
/**
 * @hidden
 */
var CssHelper = /** @class */ (function (_super) {
    tslib_1.__extends(CssHelper, _super);
    function CssHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssHelper.getDisoveryElement = function (a) {
        var b = a.createElement("fakediscoveryelement");
        b.setStyleProperty("box-sizing", "content-box");
        return b;
    };
    CssHelper.getDefaultValue = function (a) {
        if (a == "color" || a == "border-color" || a == "border-top-color" || a == "border-left-color" || a == "border-right-color" || a == "border-bottom-color" || a == "background-color" || a == "outline-color") {
            return "rgb(3, 2, 1)";
        }
        else if (a == "margin-left" || a == "margin-top" || a == "margin-right" || a == "margin-bottom") {
            return "-4321px";
        }
        else if (a == "vertical-align") {
            return "baseline";
        }
        else if (a == "opacity") {
            return "0.888";
        }
        else if (a == "background-image") {
            return "none";
        }
        else if (a == "text-align") {
            return "justify";
        }
        else if (a == "visibility") {
            return "hidden";
        }
        else if (CssHelper.c(a)) {
            return "4321px";
        }
        return "DEFAULT";
    };
    CssHelper.numberOfClasses = function (a, b, c) {
        var d = CssHelper.getDefaultValue(c);
        var e = 1;
        var f = false;
        while (!f && e < 500) {
            var g = b + e.toString();
            a.addClass(g);
            var h = a.getStyleProperty(c);
            if (h == d) {
                break;
            }
            e++;
        }
        return e;
    };
    CssHelper.getPropertyValue1 = function (a, b, c) {
        if (b != null) {
            a.addClass(b);
        }
        var ret_ = a.getStyleProperty(c);
        if (b != null) {
            a.removeClass(b);
        }
        if (c == "opacity") {
            ret_ = (Math.round(1000.0 * +ret_) / 1000.0).toString();
        }
        if (CssHelper.a(ret_, CssHelper.getDefaultValue(c), c)) {
            return null;
        }
        return ret_;
    };
    CssHelper.getPropertyValue = function (a, b) {
        return CssHelper.getPropertyValue1(a, null, b);
    };
    CssHelper.a = function (a, b, c) {
        if (a == b) {
            return true;
        }
        if (CssHelper.c(c) && a != null && stringContains(a, "px")) {
            var d = stringReplace(a, "px", "");
            var e = parseFloat(d);
            if (Math.abs(Math.round(e) - 4321) < 2) {
                return true;
            }
            return false;
        }
        else if (CssHelper.b(c) && a != null && stringContains(a, "px")) {
            var f = stringReplace(a, "px", "");
            var g = parseFloat(f);
            if (Math.abs(Math.round(g) + 4321) < 2) {
                return true;
            }
            return false;
        }
        else {
            return a == b;
        }
    };
    CssHelper.c = function (a) {
        return a == "width" || a == "height" || a == "border-top-width" || a == "border-left-width" || a == "border-right-width" || a == "border-bottom-width" || a == "border-width" || a == "border-radius" || a == "padding" || a == "padding-top" || a == "padding-left" || a == "padding-bottom" || a == "padding-right" || a == "border-top-left-radius";
    };
    CssHelper.b = function (a) {
        return a == "margin-top" || a == "margin-left" || a == "margin-right" || a == "margin-bottom";
    };
    CssHelper.getValuesForClassCollection = function (a, b, c) {
        var d = new List$1(List$1.$.specialize(String_$type), 0);
        var e = 1;
        var f = false;
        while (!f && e < 500) {
            var g = b + e.toString();
            a.addClass(g);
            var h = new List$1(String_$type, 0);
            for (var i = 0; i < c.count; i++) {
                var j = c._inner[i];
                var k = CssHelper.getDefaultValue(j);
                var l = a.getStyleProperty(j);
                if (CssHelper.a(l, k, j)) {
                    f = true;
                    break;
                }
                h.add(l);
            }
            a.removeClass(g);
            if (!f) {
                d.add(h);
            }
            e++;
        }
        return d;
    };
    CssHelper.$t = markType(CssHelper, 'CssHelper');
    CssHelper.defaultMarginValue = "-4321px";
    CssHelper.defaultColorValue = "rgb(3, 2, 1)";
    CssHelper.defaultBackgroundImageValue = "none";
    CssHelper.defaultTextAlignValue = "justify";
    CssHelper.defaultVerticalAlignValue = "baseline";
    CssHelper.defaultOpacityValue = "0.888";
    CssHelper.defaultVisibilityValue = "hidden";
    CssHelper.defaultWidthHeightValue = "4321px";
    CssHelper.maxClasses = 500;
    return CssHelper;
}(Base));
export { CssHelper };
//# sourceMappingURL=CssHelper.js.map
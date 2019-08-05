/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { stringStartsWith } from "../../igniteui-angular-core/ES5/string";
import { tryParseInt32_1 } from "../../igniteui-angular-core/ES5/numberExtended";
import { ShapeGuideFormula } from "./ShapeGuideFormula";
import { stringSplit } from "../../igniteui-angular-core/ES5/stringExtended";
import { tryParseNumber } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var ShapeGuideVariables = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuideVariables, _super);
    function ShapeGuideVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = 0;
        _this.e = 0;
        _this.b = new Dictionary$2(String_$type, ShapeGuide.$, 0);
        _this.a = new Dictionary$2(String_$type, Number_$type, 0);
        return _this;
    }
    ShapeGuideVariables.prototype.c = function (a) {
        var _this = this;
        var b;
        if (!((function () { var c = _this.a.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            b = this.d(a);
            this.a.item(a, b);
        }
        return b;
    };
    ShapeGuideVariables.prototype.g = function (a, b) {
        this.a.item(a, b);
    };
    ShapeGuideVariables.prototype.d = function (a) {
        var _this = this;
        switch (a) {
            case "w":
            case "r": return this.f;
            case "h":
            case "b": return this.e;
            case "l": return 0;
            case "t": return 0;
            case "3cd4": return 16200000;
            case "3cd8": return 8100000;
            case "5cd8": return 13500000;
            case "7cd8": return 18900000;
            case "cd2": return 10800000;
            case "cd4": return 5400000;
            case "cd8": return 2700000;
            case "hc": return this.f / 2;
            case "hd2": return this.e / 2;
            case "hd3": return this.e / 3;
            case "hd4": return this.e / 4;
            case "hd5": return this.e / 5;
            case "hd6": return this.e / 6;
            case "hd8": return this.e / 8;
            case "ls": return Math.max(this.f, this.e);
            case "ss": return Math.min(this.f, this.e);
            case "ssd2": return this.c("ss") / 2;
            case "ssd4": return this.c("ss") / 4;
            case "ssd6": return this.c("ss") / 6;
            case "ssd8": return this.c("ss") / 8;
            case "vc": return this.e / 2;
            case "wd2": return this.f / 2;
            case "wd4": return this.f / 4;
            case "wd5": return this.f / 5;
            case "wd6": return this.f / 6;
            case "wd8": return this.f / 8;
            case "wd10": return this.f / 10;
            case "dx": return this.f;
            case "dy": return this.e;
            default:
                var b_1;
                if (!((function () { var c = _this.b.tryGetValue(a, b_1); b_1 = c.p1; return c.ret; })())) {
                    if (a.length > 2) {
                        if (stringStartsWith(a, "wd") || stringStartsWith(a, "hd")) {
                            var c_1;
                            if (((function () { var d = tryParseInt32_1(a.substr(2), c_1); c_1 = d.p1; return d.ret; })())) {
                                var d = stringStartsWith(a, "wd") ? this.f : this.e;
                                return d / c_1;
                            }
                        }
                        else if (stringStartsWith(a, "ssd")) {
                            var e_1;
                            if (((function () { var f = tryParseInt32_1(a.substr(3), e_1); e_1 = f.p1; return f.ret; })())) {
                                return this.c("ss") / e_1;
                            }
                        }
                    }
                    return parseFloat(a);
                }
                return b_1.b(this);
        }
    };
    ShapeGuideVariables.$t = markType(ShapeGuideVariables, 'ShapeGuideVariables');
    return ShapeGuideVariables;
}(Base));
export { ShapeGuideVariables };
/**
 * @hidden
 */
var ShapeGuide = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuide, _super);
    function ShapeGuide(a) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.c = a;
        return _this;
    }
    ShapeGuide.a = function (a, b) {
        var c = stringSplit(b, [' '], 1);
        var d = c[0];
        switch (c.length) {
            case 2:
                {
                    if (d == "val") {
                        var e_2;
                        if (((function () { var f = tryParseNumber(c[1], e_2); e_2 = f.p1; return f.ret; })())) {
                            return new ShapeGuide_ConstantShapeGuide(a, e_2);
                        }
                    }
                    return new ShapeGuide_ShapeGuide1(a, c[1], ShapeGuideFormula.j(d));
                }
            case 3:
                {
                    return new ShapeGuide_ShapeGuide2(a, c[1], c[2], ShapeGuideFormula.k(d));
                }
            case 4:
                {
                    return new ShapeGuide_ShapeGuide3(a, c[1], c[2], c[3], ShapeGuideFormula.l(d));
                }
            case 0:
            case 1:
                {
                    return new ShapeGuide_ConstantShapeGuide(a, NaN);
                }
            default:
                {
                    return new ShapeGuide_ShapeGuide3(a, c[1], c[2], c[3], ShapeGuideFormula.l(d));
                }
        }
    };
    ShapeGuide.$t = markType(ShapeGuide, 'ShapeGuide');
    return ShapeGuide;
}(Base));
export { ShapeGuide };
/**
 * @hidden
 */
var ShapeGuide_ConstantShapeGuide = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuide_ConstantShapeGuide, _super);
    function ShapeGuide_ConstantShapeGuide(a, b) {
        var _this = _super.call(this, a) || this;
        _this.d = 0;
        _this.d = b;
        return _this;
    }
    ShapeGuide_ConstantShapeGuide.prototype.b = function (a) {
        return this.d;
    };
    ShapeGuide_ConstantShapeGuide.$t = markType(ShapeGuide_ConstantShapeGuide, 'ShapeGuide_ConstantShapeGuide', ShapeGuide.$);
    return ShapeGuide_ConstantShapeGuide;
}(ShapeGuide));
export { ShapeGuide_ConstantShapeGuide };
/**
 * @hidden
 */
var ShapeGuide_ShapeGuide1 = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuide_ShapeGuide1, _super);
    function ShapeGuide_ShapeGuide1(a, b, c) {
        var _this = _super.call(this, a) || this;
        _this.e = null;
        _this.d = null;
        _this.e = b;
        _this.d = c;
        return _this;
    }
    ShapeGuide_ShapeGuide1.prototype.b = function (a) {
        var b = a.c(this.e);
        return this.d(b);
    };
    ShapeGuide_ShapeGuide1.$t = markType(ShapeGuide_ShapeGuide1, 'ShapeGuide_ShapeGuide1', ShapeGuide.$);
    return ShapeGuide_ShapeGuide1;
}(ShapeGuide));
export { ShapeGuide_ShapeGuide1 };
/**
 * @hidden
 */
var ShapeGuide_ShapeGuide2 = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuide_ShapeGuide2, _super);
    function ShapeGuide_ShapeGuide2(a, b, c, d) {
        var _this = _super.call(this, a) || this;
        _this.e = null;
        _this.f = null;
        _this.d = null;
        _this.e = b;
        _this.f = c;
        _this.d = d;
        return _this;
    }
    ShapeGuide_ShapeGuide2.prototype.b = function (a) {
        var b = a.c(this.e);
        var c = a.c(this.f);
        return this.d(b, c);
    };
    ShapeGuide_ShapeGuide2.$t = markType(ShapeGuide_ShapeGuide2, 'ShapeGuide_ShapeGuide2', ShapeGuide.$);
    return ShapeGuide_ShapeGuide2;
}(ShapeGuide));
export { ShapeGuide_ShapeGuide2 };
/**
 * @hidden
 */
var ShapeGuide_ShapeGuide3 = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuide_ShapeGuide3, _super);
    function ShapeGuide_ShapeGuide3(a, b, c, d, e) {
        var _this = _super.call(this, a) || this;
        _this.e = null;
        _this.f = null;
        _this.g = null;
        _this.d = null;
        _this.e = b;
        _this.f = c;
        _this.g = d;
        _this.d = e;
        return _this;
    }
    ShapeGuide_ShapeGuide3.prototype.b = function (a) {
        var b = a.c(this.e);
        var c = a.c(this.f);
        var d = a.c(this.g);
        return this.d(b, c, d);
    };
    ShapeGuide_ShapeGuide3.$t = markType(ShapeGuide_ShapeGuide3, 'ShapeGuide_ShapeGuide3', ShapeGuide.$);
    return ShapeGuide_ShapeGuide3;
}(ShapeGuide));
export { ShapeGuide_ShapeGuide3 };
//# sourceMappingURL=ShapeGuideVariables_combined.js.map

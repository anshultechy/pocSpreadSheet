/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { stringStartsWith } from "../../igniteui-angular-core/ES2015/string";
import { tryParseInt32_1 } from "../../igniteui-angular-core/ES2015/numberExtended";
import { ShapeGuideFormula } from "./ShapeGuideFormula";
import { stringSplit } from "../../igniteui-angular-core/ES2015/stringExtended";
import { tryParseNumber } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class ShapeGuideVariables extends Base {
    constructor() {
        super(...arguments);
        this.f = 0;
        this.e = 0;
        this.b = new Dictionary$2(String_$type, ShapeGuide.$, 0);
        this.a = new Dictionary$2(String_$type, Number_$type, 0);
    }
    c(a) {
        let b;
        if (!((() => { let c = this.a.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            b = this.d(a);
            this.a.item(a, b);
        }
        return b;
    }
    g(a, b) {
        this.a.item(a, b);
    }
    d(a) {
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
                let b;
                if (!((() => { let c = this.b.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
                    if (a.length > 2) {
                        if (stringStartsWith(a, "wd") || stringStartsWith(a, "hd")) {
                            let c;
                            if (((() => { let d = tryParseInt32_1(a.substr(2), c); c = d.p1; return d.ret; })())) {
                                let d = stringStartsWith(a, "wd") ? this.f : this.e;
                                return d / c;
                            }
                        }
                        else if (stringStartsWith(a, "ssd")) {
                            let e;
                            if (((() => { let f = tryParseInt32_1(a.substr(3), e); e = f.p1; return f.ret; })())) {
                                return this.c("ss") / e;
                            }
                        }
                    }
                    return parseFloat(a);
                }
                return b.b(this);
        }
    }
}
ShapeGuideVariables.$t = markType(ShapeGuideVariables, 'ShapeGuideVariables');
/**
 * @hidden
 */
export class ShapeGuide extends Base {
    constructor(a) {
        super();
        this.c = null;
        this.c = a;
    }
    static a(a, b) {
        let c = stringSplit(b, [' '], 1);
        let d = c[0];
        switch (c.length) {
            case 2:
                {
                    if (d == "val") {
                        let e;
                        if (((() => { let f = tryParseNumber(c[1], e); e = f.p1; return f.ret; })())) {
                            return new ShapeGuide_ConstantShapeGuide(a, e);
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
    }
}
ShapeGuide.$t = markType(ShapeGuide, 'ShapeGuide');
/**
 * @hidden
 */
export class ShapeGuide_ConstantShapeGuide extends ShapeGuide {
    constructor(a, b) {
        super(a);
        this.d = 0;
        this.d = b;
    }
    b(a) {
        return this.d;
    }
}
ShapeGuide_ConstantShapeGuide.$t = markType(ShapeGuide_ConstantShapeGuide, 'ShapeGuide_ConstantShapeGuide', ShapeGuide.$);
/**
 * @hidden
 */
export class ShapeGuide_ShapeGuide1 extends ShapeGuide {
    constructor(a, b, c) {
        super(a);
        this.e = null;
        this.d = null;
        this.e = b;
        this.d = c;
    }
    b(a) {
        let b = a.c(this.e);
        return this.d(b);
    }
}
ShapeGuide_ShapeGuide1.$t = markType(ShapeGuide_ShapeGuide1, 'ShapeGuide_ShapeGuide1', ShapeGuide.$);
/**
 * @hidden
 */
export class ShapeGuide_ShapeGuide2 extends ShapeGuide {
    constructor(a, b, c, d) {
        super(a);
        this.e = null;
        this.f = null;
        this.d = null;
        this.e = b;
        this.f = c;
        this.d = d;
    }
    b(a) {
        let b = a.c(this.e);
        let c = a.c(this.f);
        return this.d(b, c);
    }
}
ShapeGuide_ShapeGuide2.$t = markType(ShapeGuide_ShapeGuide2, 'ShapeGuide_ShapeGuide2', ShapeGuide.$);
/**
 * @hidden
 */
export class ShapeGuide_ShapeGuide3 extends ShapeGuide {
    constructor(a, b, c, d, e) {
        super(a);
        this.e = null;
        this.f = null;
        this.g = null;
        this.d = null;
        this.e = b;
        this.f = c;
        this.g = d;
        this.d = e;
    }
    b(a) {
        let b = a.c(this.e);
        let c = a.c(this.f);
        let d = a.c(this.g);
        return this.d(b, c, d);
    }
}
ShapeGuide_ShapeGuide3.$t = markType(ShapeGuide_ShapeGuide3, 'ShapeGuide_ShapeGuide3', ShapeGuide.$);
//# sourceMappingURL=ShapeGuideVariables_combined.js.map
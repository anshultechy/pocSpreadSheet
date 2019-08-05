/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetDialogFormatCategory } from "./SpreadsheetDialogFormatCategory";
import { delegateCombine, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { Regex } from "../../igniteui-angular-core/ES2015/Regex";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { stringContains, stringEmpty, stringReplace, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class SpreadsheetDialogFormatCategoryEx extends SpreadsheetDialogFormatCategory {
    constructor() {
        super();
        this.propertyChanged = delegateCombine(this.propertyChanged, (a, b) => {
            if (b.propertyName == "DecimalPlaces") {
                this._ai();
            }
        });
    }
    _ai() {
        let a = new Regex(0, "\\" + "." + "(\\d+)?");
        let b = new Regex(0, "((\\d+[,]\\d+))|(\\d+)|([#]+[0]+[,]?([#]+)?)");
        let c = new StringBuilder(0);
        let d = new StringBuilder(0);
        if (this._y > 0) {
            c.l(".");
            d.l(".");
            for (let e = 0; e < this._y; e++) {
                c.l("1");
                d.l("0");
            }
        }
        for (let f of fromEnum(this._w)) {
            if (!stringContains(f._g, ".") && this._y > 0) {
                let g = stringEmpty();
                let h = stringEmpty();
                if (this._r) {
                    let i = this._ah(f._g, g, h);
                    g = i.p1;
                    h = i.p2;
                }
                else {
                    g = f._g;
                }
                let j = b.i(g);
                if (j.d > 0) {
                    f._g = stringReplace(g, j.g, j.g + c.toString()) + h;
                }
                g = stringEmpty();
                h = stringEmpty();
                if (this._r) {
                    let k = this._ah(f._e, g, h);
                    g = k.p1;
                    h = k.p2;
                }
                else {
                    g = f._e;
                }
                let l = b.i(g);
                while (null != l) {
                    if (false == stringIsNullOrEmpty(l.g)) {
                        f._e = stringReplace(g, l.g, l.g + d.toString()) + h;
                    }
                    let m = l.o();
                    if (null != m) {
                        if (l.g == m.g) {
                            break;
                        }
                        l = m;
                    }
                }
                continue;
            }
            let n = a.i(f._g);
            if (n.d > 0) {
                f._g = stringReplace(f._g, n.g, c.toString());
            }
            let o = a.i(f._e);
            if (n.d > 0) {
                f._e = stringReplace(f._e, o.g, d.toString());
            }
        }
    }
    _ah(a, b, c) {
        let d = a.split('E');
        b = d[0];
        c = "E" + d[1];
        return {
            p1: b,
            p2: c
        };
    }
}
SpreadsheetDialogFormatCategoryEx.$t = markType(SpreadsheetDialogFormatCategoryEx, 'SpreadsheetDialogFormatCategoryEx', SpreadsheetDialogFormatCategory.$);
//# sourceMappingURL=SpreadsheetDialogFormatCategoryEx.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, typeGetValue, markType } from "./type";
import { IComparer$1_$type } from "./IComparer$1";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { boolCompare } from "./bool";
import { dateMinValue } from "./date";
import { CompareUtil } from "./compareUtil";
import { stringCompare } from "./string";
/**
 * @hidden
 */
export class DataSourcePropertiesComparer extends Base {
    constructor(a, b, c, d) {
        super();
        this.e = null;
        this.b = null;
        this.a = null;
        this.g = 0;
        this.f = null;
        this.d = null;
        this.c = null;
        this.b = a;
        if (this.b != null) {
            this.g = this.b.length;
        }
        this.a = b;
        this.e = d;
        this.f = d.actualSchema;
        if (this.b != null) {
            this.d = new Array(this.g);
        }
        this.c = c;
        if (this.c == null) {
            this.c = new Array(this.g);
        }
        let e = new Dictionary$2(String_$type, DataSourceSchemaPropertyType_$type, 0);
        for (let f = 0; f < this.f.propertyNames.length; f++) {
            e.item(this.f.propertyNames[f], this.f.propertyTypes[f]);
        }
        if (this.b != null) {
            for (let g = 0; g < this.b.length; g++) {
                if (e.containsKey(this.b[g])) {
                    this.d[g] = e.item(this.b[g]);
                }
                else {
                    this.d[g] = d.resolveSchemaPropertyType(this.b[g]);
                }
            }
        }
    }
    compare(a, b) {
        if (this.b == null) {
            if (a == b) {
                return 0;
            }
            return -1;
        }
        let c = null;
        let d = null;
        let e = null;
        let f = null;
        let x_ = a;
        if ((x_ != null && x_.$$isSpecialRow !== undefined)) {
            e = x_;
        }
        let y_ = b;
        if ((y_ != null && y_.$$isSpecialRow !== undefined)) {
            f = y_;
        }
        let g = null;
        let h = false;
        let i = this.g;
        for (let j = 0; j < i; j++) {
            g = this.b[j];
            h = this.a[j] == 1;
            if (e != null) {
                c = e.getValue(g);
            }
            else {
                c = this.e.getItemProperty(a, g);
            }
            if (f != null) {
                d = f.getValue(g);
            }
            else {
                d = this.e.getItemProperty(b, g);
            }
            let k = this.j(c, d, h, this.d[j], this.c[j]);
            if (k != 0) {
                return k;
            }
        }
        return 0;
    }
    h(a, b) {
        if (this.b == null) {
            for (let c = 0; c < a.length; c++) {
                if (a[c] != b[c]) {
                    return -1;
                }
            }
            return 0;
        }
        let d = null;
        let e = null;
        let f = false;
        let g = this.g;
        for (let h = 0; h < g; h++) {
            f = this.a[h] == 1;
            d = a[h];
            e = b[h];
            let i = this.j(d, e, f, this.d[h], this.c[h]);
            if (i != 0) {
                return i;
            }
        }
        return 0;
    }
    i(a, b) {
        if (this.b == null) {
            if (b.length == 1) {
                if (a == b[0]) {
                    return 0;
                }
            }
            return -1;
        }
        let c = null;
        let d = null;
        let e = null;
        let f = false;
        let g = this.g;
        for (let h = 0; h < g; h++) {
            e = this.b[h];
            f = this.a[h] == 1;
            c = this.e.getItemProperty(a, e);
            d = b[h];
            let i = this.j(c, d, f, this.d[h], this.c[h]);
            if (i != 0) {
                return i;
            }
        }
        return 0;
    }
    j(a, b, c, d, e) {
        if (c) {
            let f = a;
            a = b;
            b = f;
        }
        let g = 0;
        switch (d) {
            case 2:
                a = a == null ? false : a;
                b = b == null ? false : b;
                g = boolCompare(a, b);
                break;
            case 8:
                a = a == null ? dateMinValue() : a;
                b = b == null ? dateMinValue() : b;
                let xVal_ = a;
                let yVal_ = b;
                xVal_ = +xVal_;
                yVal_ = +yVal_;
                let h = typeGetValue(xVal_);
                let i = typeGetValue(yVal_);
                g = Base.compareSimple(h, i);
                break;
            case 5:
                a = a == null ? -1.7976931348623157E+308 : a;
                b = b == null ? -1.7976931348623157E+308 : b;
                g = Base.compareSimple(a, b);
                break;
            case 10:
                a = a == null ? 0 : a;
                b = b == null ? 0 : b;
                g = Base.compareSimple(a, b);
                break;
            case 6:
                a = a == null ? -7.9228162514264338E+28 : a;
                b = b == null ? -7.9228162514264338E+28 : b;
                g = Base.compareSimple(a, b);
                break;
            case 7:
                a = a == null ? -3.4028230607370965E+38 : a;
                b = b == null ? -3.4028230607370965E+38 : b;
                g = Base.compareSimple(b, b);
                break;
            case 1:
                a = a == null ? -2147483648 : a;
                b = b == null ? -2147483648 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 3:
                a = a == null ? -9.2233720368547758E+18 : a;
                b = b == null ? -9.2233720368547758E+18 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 11:
                if (e) {
                    let j = a;
                    let k = b;
                    if (j != null) {
                        g = CompareUtil.compareToObject(j, k);
                    }
                    else if (k != null) {
                        g = -1;
                    }
                    else {
                        g = 0;
                    }
                }
                else {
                    a = a == null ? "" : a;
                    b = b == null ? "" : b;
                    g = stringCompare(a.toString(), b.toString());
                }
                break;
            case 4:
                a = a == null ? -32768 : a;
                b = b == null ? -32768 : b;
                g = Base.compareSimple((typeGetValue(a)), typeGetValue(b));
                break;
            case 0:
                a = a == null ? "" : a;
                b = b == null ? "" : b;
                g = stringCompare(a, b);
                break;
        }
        return g;
    }
}
DataSourcePropertiesComparer.$t = markType(DataSourcePropertiesComparer, 'DataSourcePropertiesComparer', Base.$, [IComparer$1_$type.specialize(Base.$)]);
//# sourceMappingURL=DataSourcePropertiesComparer.js.map
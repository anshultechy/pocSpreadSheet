/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, EnumUtil, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { List$1 } from "./List$1";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
/**
 * @hidden
 */
export class SimpleScatterSeriesRule extends Base {
    constructor() {
        super();
        this._priority = 0;
        this._monotonicCheckAmount = 0;
        this.priority = 9;
        this.monotonicCheckAmount = 10000;
    }
    get priority() {
        return this._priority;
    }
    set priority(a) {
        this._priority = a;
    }
    get monotonicCheckAmount() {
        return this._monotonicCheckAmount;
    }
    set monotonicCheckAmount(a) {
        this._monotonicCheckAmount = a;
    }
    evaluate(a) {
        let b = a.analyzer.getAllNumericProperties();
        if (b.length == 0) {
            return;
        }
        let c = a.getCurrentDataSource().actualCount;
        let d = new List$1(String_$type, 0);
        for (let e = 0; e < b.length; e++) {
            d.add(b[e]);
        }
        let f = this.c(d);
        let g = this.d(d);
        let h = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (1)));
        let i = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (2)));
        if (h.length > 0 && i.length > 0 && h.length == i.length) {
            f.clear();
            g.clear();
            d.clear();
            for (let j = 0; j < h.length; j++) {
                f.add(h[j]);
                g.add(i[j]);
            }
        }
        let k = 0;
        for (k = 0; k < Math.min(f.count, g.count); k++) {
            let l = new Array(2);
            l[0] = f._inner[k];
            l[1] = g._inner[k];
            let m = a.analyzer.getTitleString(null, l);
            this.f(a, f._inner[k], g._inner[k], m);
        }
        for (; k < f.count; k++) {
            d.add(f._inner[k]);
        }
        for (; k < g.count; k++) {
            d.add(g._inner[k]);
        }
        for (let n = 0; n < d.count; n += 2) {
            if (n + 1 >= d.count) {
                continue;
            }
            let o = new Array(2);
            o[0] = d._inner[n];
            o[1] = d._inner[n + 1];
            let p = a.analyzer.getTitleString(null, o);
            this.f(a, d._inner[n], d._inner[n + 1], p);
        }
    }
    d(a) {
        let b = new List$1(String_$type, 0);
        for (let c = 0; c < a.count; c++) {
            if (this.b(a._inner[c])) {
                b.add(a._inner[c]);
                a.removeAt(c);
                c--;
            }
        }
        return b;
    }
    b(a) {
        if (Base.equalsStatic(a.toLowerCase(), "y") || Base.equalsStatic(a.toLowerCase(), "yvalue")) {
            return true;
        }
        return false;
    }
    c(a) {
        let b = new List$1(String_$type, 0);
        for (let c = 0; c < a.count; c++) {
            if (this.a(a._inner[c])) {
                b.add(a._inner[c]);
                a.removeAt(c);
                c--;
            }
        }
        return b;
    }
    a(a) {
        if (Base.equalsStatic(a.toLowerCase(), "x") || Base.equalsStatic(a.toLowerCase(), "xvalue")) {
            return true;
        }
        return false;
    }
    f(a, b, c, d) {
        let e = new DataSeries();
        e.name = b + "_" + c;
        if (d != null) {
            e.title = d;
        }
        else {
            e.title = b + " - " + c;
            e.title = a.analyzer.expandCamelCasedWords(e.title);
        }
        let f = new DataSeriesMemberPathHint();
        f.intent = 1;
        f.path = b;
        let g = new DataSeriesMemberPathHint();
        g.intent = 2;
        g.path = c;
        e.addMemberPathHint(f);
        e.addMemberPathHint(g);
        let h = a.getCurrentDataSource();
        let i = h.actualCount;
        if (i > this.monotonicCheckAmount) {
            e.suggestedSeries = 11;
        }
        else {
            if (a.analyzer.isMonotonic(h, b, this.monotonicCheckAmount)) {
                e.suggestedSeries = 12;
            }
            else {
                e.suggestedSeries = 11;
            }
        }
        e.suggestedPrimaryAxis = 1;
        e.suggestedSecondaryAxis = 1;
        a.addDataSeries(e, this);
    }
}
SimpleScatterSeriesRule.$t = markType(SimpleScatterSeriesRule, 'SimpleScatterSeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
//# sourceMappingURL=SimpleScatterSeriesRule.js.map
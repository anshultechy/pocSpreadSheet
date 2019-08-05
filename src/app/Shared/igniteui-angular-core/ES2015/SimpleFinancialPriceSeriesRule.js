/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, EnumUtil, String_$type, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { List$1 } from "./List$1";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { truncate } from "./number";
import { stringJoin } from "./string";
/**
 * @hidden
 */
export class SimpleFinancialPriceSeriesRule extends Base {
    constructor() {
        super();
        this._priority = 0;
        this._distinctCheckThreshold = 0;
        this.priority = 10;
        this.distinctCheckThreshold = 50000;
    }
    get priority() {
        return this._priority;
    }
    set priority(a) {
        this._priority = a;
    }
    get distinctCheckThreshold() {
        return this._distinctCheckThreshold;
    }
    set distinctCheckThreshold(a) {
        this._distinctCheckThreshold = a;
    }
    e(a, b) {
        for (let c of fromEnum(b)) {
            if (a.contains(c)) {
                a.remove(c);
            }
        }
    }
    static d(a, b) {
        let c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (17)));
        if (c.length > 0) {
            return c[0];
        }
        return (((d) => d != null ? d : a.analyzer.getFirstDateTimeProperty())(a.analyzer.getFirstDistinctDateTimeProperty(b)));
    }
    static b(a, b) {
        let c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (17)));
        if (c.length > 0) {
            return c[0];
        }
        c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (16)));
        if (c.length > 0) {
            return c[0];
        }
        return (((d) => d != null ? d : (((e) => e != null ? e : (((f) => f != null ? f : a.analyzer.getFirstStringProperty())(a.analyzer.getFirstDistinctMonotonicNumericProperty(b))))(a.analyzer.getFirstDistinctStringProperty(b))))(a.analyzer.getFirstDistinctDateTimeProperty(b)));
    }
    evaluate(a) {
        let b = SimpleFinancialPriceSeriesRule.d(a, this.distinctCheckThreshold);
        let c = SimpleFinancialPriceSeriesRule.b(a, this.distinctCheckThreshold);
        let d = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (11))));
        let e = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (12))));
        let f = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (13))));
        let g = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (14))));
        let h = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (15))));
        let i = Math.min(d.count, Math.min(e.count, Math.min(f.count, g.count)));
        if (i == 0) {
            let j = new List$1(String_$type, 1, a.analyzer.getAllNumericProperties());
            for (let k of fromEnum(j)) {
                if (Base.equalsStatic(k.toLowerCase(), "open")) {
                    d.add(k);
                    continue;
                }
                if (Base.equalsStatic(k.toLowerCase(), "high")) {
                    e.add(k);
                    continue;
                }
                if (Base.equalsStatic(k.toLowerCase(), "low")) {
                    f.add(k);
                    continue;
                }
                if (Base.equalsStatic(k.toLowerCase(), "close")) {
                    g.add(k);
                    continue;
                }
                if (Base.equalsStatic(k.toLowerCase(), "volume")) {
                    h.add(k);
                    continue;
                }
            }
            this.e(j, d);
            this.e(j, e);
            this.e(j, f);
            this.e(j, g);
            this.e(j, h);
            let l = d.count + e.count + f.count + g.count + j.count;
            if (l == 0) {
                return;
            }
            i = l <= 4 ? 1 : truncate(Math.floor(l / 5));
            let m = [d, e, f, g, h];
            let n = 0;
            while (j.count > 0) {
                m[n++ % m.length].add(j._inner[0]);
                j.removeAt(0);
            }
        }
        let o = this.c(a.getCurrentDataSource());
        for (let p = 0; p < i; p++) {
            a.pushParentTitle(i == 1 ? o : o + (p + 1));
            let q = d.count > p ? d._inner[p] : null;
            let r = e.count > p ? e._inner[p] : null;
            let s = f.count > p ? f._inner[p] : null;
            let t = g.count > p ? g._inner[p] : null;
            let u = ((() => {
                let $ret = new DataSeries();
                $ret.name = stringJoin("_", q, r, s, t);
                $ret.title = a.analyzer.getTitleString(null, [q, r, s, t]);
                $ret.suggestedSeries = 20;
                $ret.suggestedPrimaryAxis = 0;
                $ret.suggestedSecondaryAxis = 1;
                return $ret;
            })());
            u.addMemberPathHint(((() => {
                let $ret = new DataSeriesMemberPathHint();
                $ret.intent = 11;
                $ret.path = q;
                return $ret;
            })()));
            u.addMemberPathHint(((() => {
                let $ret = new DataSeriesMemberPathHint();
                $ret.intent = 12;
                $ret.path = r;
                return $ret;
            })()));
            u.addMemberPathHint(((() => {
                let $ret = new DataSeriesMemberPathHint();
                $ret.intent = 13;
                $ret.path = s;
                return $ret;
            })()));
            u.addMemberPathHint(((() => {
                let $ret = new DataSeriesMemberPathHint();
                $ret.intent = 14;
                $ret.path = t;
                return $ret;
            })()));
            if (h.count > p) {
                u.addMemberPathHint(((() => {
                    let $ret = new DataSeriesMemberPathHint();
                    $ret.intent = 15;
                    $ret.path = h._inner[p];
                    return $ret;
                })()));
            }
            if (b != null) {
                u.addMemberPathHint(((() => {
                    let $ret = new DataSeriesMemberPathHint();
                    $ret.intent = 17;
                    $ret.path = b;
                    return $ret;
                })()));
            }
            u.addMemberPathHint(((() => {
                let $ret = new DataSeriesMemberPathHint();
                $ret.intent = 16;
                $ret.path = c;
                return $ret;
            })()));
            a.addDataSeries(u, this);
            a.popParentTitle();
        }
    }
    c(a) {
        let b = a == null ? null : a.dataSource;
        if (b == null) {
            return null;
        }
        let c = (typeof b.title === 'function');
        return c ? (b.title()) : (b.title) ? (b.title) : null;
    }
}
SimpleFinancialPriceSeriesRule.$t = markType(SimpleFinancialPriceSeriesRule, 'SimpleFinancialPriceSeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
//# sourceMappingURL=SimpleFinancialPriceSeriesRule.js.map
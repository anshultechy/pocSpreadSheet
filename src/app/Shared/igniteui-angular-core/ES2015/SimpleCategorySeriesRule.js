/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, EnumUtil, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
/**
 * @hidden
 */
export class SimpleCategorySeriesRule extends Base {
    constructor() {
        super();
        this._priority = 0;
        this._useColumnThreshold = 0;
        this._distinctCheckThreshold = 0;
        this.priority = 10;
        this.distinctCheckThreshold = 50000;
        this.useColumnThreshold = 30;
    }
    get priority() {
        return this._priority;
    }
    set priority(a) {
        this._priority = a;
    }
    get useColumnThreshold() {
        return this._useColumnThreshold;
    }
    set useColumnThreshold(a) {
        this._useColumnThreshold = a;
    }
    get distinctCheckThreshold() {
        return this._distinctCheckThreshold;
    }
    set distinctCheckThreshold(a) {
        this._distinctCheckThreshold = a;
    }
    static c(a, b) {
        let c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (16)));
        if (c.length > 0) {
            return c[0];
        }
        return (((d) => d != null ? d : (((e) => e != null ? e : (((f) => f != null ? f : a.analyzer.getFirstStringProperty())(a.analyzer.getFirstDistinctMonotonicNumericProperty(b))))(a.analyzer.getFirstDistinctDateTimeProperty(b))))(a.analyzer.getFirstDistinctStringProperty(b)));
    }
    evaluate(a) {
        let b = SimpleCategorySeriesRule.c(a, this.distinctCheckThreshold);
        let c = null;
        let d = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (0)));
        if (d.length > 0) {
            c = d;
        }
        if (c == null) {
            c = a.analyzer.getAllNumericProperties();
        }
        if (c == null || c.length == 0) {
            return;
        }
        let e = a.getCurrentDataSource().actualCount;
        for (let f = 0; f < c.length; f++) {
            if (c[f] == b && c.length > 1) {
                continue;
            }
            let g = new Array(1);
            g[0] = c[f];
            let h = a.analyzer.getTitleString(null, g);
            let i = new DataSeries();
            let j = new DataSeriesMemberPathHint();
            j.intent = 0;
            j.path = c[f];
            let k = new DataSeriesMemberPathHint();
            k.intent = 16;
            k.path = b;
            i.addMemberPathHint(j);
            i.addMemberPathHint(k);
            if (e > this.useColumnThreshold) {
                i.suggestedSeries = 0;
            }
            else {
                i.suggestedSeries = 1;
            }
            this.d(i, a);
            i.suggestedPrimaryAxis = 0;
            i.suggestedSecondaryAxis = 1;
            i.name = c[f];
            if (h != null) {
                i.title = h;
            }
            else {
                i.title = c[f];
                i.title = a.analyzer.expandCamelCasedWords(i.title);
            }
            a.addDataSeries(i, this);
        }
    }
    d(a, b) {
        if (!b.hasValidType(a)) {
            a.suggestedSeries = 0;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 1;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 2;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 6;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 7;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 4;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 5;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 10;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 8;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 0;
        }
    }
}
SimpleCategorySeriesRule.$t = markType(SimpleCategorySeriesRule, 'SimpleCategorySeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
//# sourceMappingURL=SimpleCategorySeriesRule.js.map
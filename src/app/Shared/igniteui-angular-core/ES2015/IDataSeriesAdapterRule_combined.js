/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Type, Base, String_$type, fromEnum, markType, IEnumerable_$type, typeCast, Array_$type, runOn, EnumUtil, Number_$type, typeGetValue, INotifyPropertyChanged_$type, PropertyChangedEventArgs, delegateCombine, delegateRemove } from "./type";
import { DataSeriesCollection } from "./DataSeriesCollection";
import { Stack$1 } from "./Stack$1";
import { IDataSourceLocalDataProvider_$type } from "./IDataSourceLocalDataProvider";
import { HashSet$1 } from "./HashSet$1";
import { DataSeriesType_$type } from "./DataSeriesType";
import { DataSeries } from "./DataSeries";
import { List$1 } from "./List$1";
import { Matcher } from "./Matcher";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { stringIsNullOrEmpty, stringReplace, stringEmpty } from "./string";
import { dateMinValue } from "./date";
import { IDataSourceDataProviderUpdateNotifier_$type } from "./IDataSourceDataProviderUpdateNotifier";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export let IDataSeriesAdapterRule_$type = new Type(null, 'IDataSeriesAdapterRule');
/**
 * @hidden
 */
export class DataSeriesAdapterRunContext extends Base {
    constructor(a) {
        super();
        this.g = null;
        this._analyzer = null;
        this.h = null;
        this.m = null;
        this.o = null;
        this.n = null;
        this.b = null;
        this.a = null;
        this.l = null;
        this.g = a;
        this.analyzer = new DataSeriesDataProviderAnalyzer(this);
        this.analyzer.includedProperties = this.g.includedProperties;
        this.analyzer.excludedProperties = this.g.excludedProperties;
        this.h = new DataSeriesCollection();
        this.m = new Stack$1(IDataSourceLocalDataProvider_$type);
        this.o = new Stack$1(String_$type);
        this.n = new Stack$1(String_$type);
        this.b = this.g.includedProperties;
        this.a = this.g.excludedProperties;
        this.l = null;
        if (this.g.supportedSeriesTypes != null) {
            this.l = new HashSet$1(DataSeriesType_$type, 0);
            for (let b = 0; b < this.g.supportedSeriesTypes.length; b++) {
                this.l.add_1(this.g.supportedSeriesTypes[b]);
            }
        }
    }
    get analyzer() {
        return this._analyzer;
    }
    set analyzer(a) {
        this._analyzer = a;
    }
    getSubProvider(a, b) {
        let c = this.g.l(a);
        this.pushDataSource(c);
        this.pushPath(b);
        return c;
    }
    popSubProvider() {
        this.popDataSource();
        this.popPath();
    }
    w(a, b) {
        return this.g.v(a, b);
    }
    recurseRules(a, b, c) {
        this.g.al(this, a, b, c);
    }
    get includedProperties() {
        return this.b;
    }
    get excludedProperties() {
        return this.a;
    }
    getCurrentDataSource() {
        return this.m.d();
    }
    pushDataSource(a) {
        this.m.h(a);
    }
    hasValidType(a) {
        if (this.l == null) {
            return true;
        }
        if (this.l.contains(a.suggestedSeries)) {
            return true;
        }
        return false;
    }
    popDataSource() {
        return this.m.e();
    }
    getCurrentPathSegment() {
        return this.o.d();
    }
    getCurrentPath() {
        let a = "";
        let b = true;
        for (let c of fromEnum(this.o)) {
            if (b) {
                b = false;
            }
            else {
                a += ".";
            }
            a += c;
        }
        return a;
    }
    getParentTitle() {
        if (this.n.f == 0) {
            return null;
        }
        return this.n.d();
    }
    pushPath(a) {
        this.o.h(a);
    }
    popPath() {
        return this.o.e();
    }
    pushParentTitle(a) {
        this.n.h(a);
    }
    popParentTitle() {
        return this.n.e();
    }
    ab(a, b) {
        if (a.priority == -1) {
            a.priority = b.priority;
        }
        if (a.dataPath == null) {
            a.dataPath = this.getCurrentPath();
        }
        if (a.data == null) {
            a.data = this.getCurrentDataSource().dataSource;
        }
    }
    addDataSeries(a, b) {
        this.ab(a, b);
        this.h.add(a);
    }
    removeDataSeries(a) {
        this.h.remove(a);
    }
    insertDataSeries(a, b, c) {
        this.ab(b, c);
        this.h.insert(a, b);
    }
    clearDataSeries() {
        this.h.clear();
    }
    getDataSeriesCount() {
        return this.h.count;
    }
    getDataSeriesAt(a) {
        return this.h._inner[a];
    }
}
DataSeriesAdapterRunContext.$t = markType(DataSeriesAdapterRunContext, 'DataSeriesAdapterRunContext');
/**
 * @hidden
 */
export class DataSeriesDataProviderAnalyzer extends Base {
    constructor(a) {
        super();
        this.p = null;
        this.b = null;
        this.a = null;
        this.s = false;
        this.r = false;
        this.ak = new HashSet$1(String_$type, 0);
        this.am = new List$1(Matcher.$, 0);
        this.aj = new HashSet$1(String_$type, 0);
        this.al = new List$1(Matcher.$, 0);
        this.p = a;
    }
    get includedProperties() {
        return this.b;
    }
    set includedProperties(a) {
        this.b = a;
        this.ak.clear();
        if (this.b == null) {
            this.s = false;
        }
        else {
            this.s = true;
            let d = this.b;
            for (let c = 0; c < d.length; c++) {
                let b = d[c];
                if (Matcher.a(b)) {
                    this.am.add(new Matcher(b));
                }
                else {
                    this.ak.add_1(b);
                }
            }
        }
    }
    get excludedProperties() {
        return this.a;
    }
    set excludedProperties(a) {
        this.a = a;
        this.aj.clear();
        if (this.a == null) {
            this.r = false;
        }
        else {
            this.r = true;
            let d = this.a;
            for (let c = 0; c < d.length; c++) {
                let b = d[c];
                if (Matcher.a(b)) {
                    this.al.add(new Matcher(b));
                }
                else {
                    this.aj.add_1(b);
                }
            }
        }
    }
    getParentTitle() {
        return this.p.getParentTitle();
    }
    shouldIncludeProperty(a, b) {
        if (!stringIsNullOrEmpty(b)) {
            a = b + "." + a;
        }
        if (this.s && !this.ak.contains(a) && !this.y(a)) {
            return false;
        }
        if (this.r && (this.aj.contains(a) || this.u(a))) {
            return false;
        }
        return true;
    }
    u(a) {
        for (let b = 0; b < this.al.count; b++) {
            if (this.al._inner[b].b(a)) {
                return true;
            }
        }
        return false;
    }
    y(a) {
        for (let b = 0; b < this.am.count; b++) {
            if (this.am._inner[b].b(a)) {
                return true;
            }
        }
        return false;
    }
    expandCamelCasedWords(a) {
        if (a == null) {
            return null;
        }
        a = stringReplace(stringReplace(a, "[", ""), "]", "");
        let b = new List$1(String_$type, 0);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            let e = a.charAt(d);
            let f = e.toUpperCase();
            let g = e.toLowerCase();
            if (d == 0) {
                e = f;
            }
            let h = (c == 0 && b.count > 0);
            let i = (c > 1);
            if (f == e) {
                if (h) {
                    b.add(' ');
                }
                c++;
            }
            else if (g == e) {
                if (i) {
                    b.insert(b.count - 1, ' ');
                }
                c = 0;
            }
            else {
                c = 0;
            }
            b.add(e);
        }
        let j = stringEmpty();
        for (let k = 0; k < b.count; k++) {
            j += b._inner[k];
        }
        return j;
    }
    hasStringProperties() {
        return this.getAllStringProperties().length > 0;
    }
    getAllStringProperties() {
        return this.n((a) => a == 0, null);
    }
    isCollection(a) {
        if (typeCast(IEnumerable_$type, a) !== null || typeCast(Array_$type, a) !== null) {
            return true;
        }
        return false;
    }
    getAllPropertiesWithName(a) {
        return this.n(null, (b) => b == a);
    }
    getAllNumericProperties() {
        return this.n(runOn(this, this.ae), null);
    }
    getAllObjectProperties() {
        return this.n(runOn(this, this.af), null);
    }
    getAllCollectionProperties() {
        let a = this.getAllObjectProperties();
        if (a.length == 0) {
            return new Array(0);
        }
        let b = this.p.getCurrentDataSource();
        let c = new List$1(String_$type, 0);
        for (let d = 0; d < b.actualCount; d++) {
            if (this.isCollection(b.getItemAtIndex(d))) {
                c.add(b.actualSchema.propertyNames[d]);
            }
        }
        return c.toArray();
    }
    getFirstNumericProperty() {
        let a = this.getAllNumericProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    }
    hasNumericProperties() {
        return this.getAllNumericProperties().length > 0;
    }
    ab(a) {
        if (a == 8 || a == 9) {
            return true;
        }
        return false;
    }
    q(a) {
        let b = this.p.getCurrentDataSource();
        if (b == null) {
            return 11;
        }
        let c = b.actualSchema;
        if (c == null) {
            return 11;
        }
        let d = -1;
        for (let e = 0; e < c.propertyNames.length; e++) {
            if (Base.equalsStatic(c.propertyNames[e], a)) {
                d = e;
                break;
            }
        }
        if (d == -1) {
            return 11;
        }
        return c.propertyTypes[d];
    }
    n(a, b) {
        let c = this.p.getCurrentDataSource();
        let d = c.actualSchema;
        if (d == null) {
            return new Array(0);
        }
        let e = this.p.getCurrentPath();
        let f = 0;
        for (let g = 0; g < d.propertyTypes.length; g++) {
            if ((a == null || a(d.propertyTypes[g])) && (b == null || b(d.propertyNames[g])) && this.ai(d.propertyDataIntents, g) && this.shouldIncludeProperty(d.propertyNames[g], e)) {
                f++;
            }
        }
        let h = new Array(f);
        f = 0;
        for (let i = 0; i < d.propertyTypes.length; i++) {
            if ((a == null || a(d.propertyTypes[i])) && (b == null || b(d.propertyNames[i])) && this.ai(d.propertyDataIntents, i) && this.shouldIncludeProperty(d.propertyNames[i], e)) {
                h[f] = d.propertyNames[i];
                f++;
            }
        }
        return h;
    }
    ai(a, b) {
        if (a == null) {
            return true;
        }
        return !this.t(a, b, "DontPlot");
    }
    t(a, b, c) {
        if (a == null) {
            return false;
        }
        for (let d = 0; d < a[b].length; d++) {
            let e = a[b][d];
            if (Base.equalsStatic(e.toLowerCase(), c.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    getAllPropertiesWithIntent(a) {
        return this.i(a, false, false);
    }
    getAllPropertiesWithValuelessIntent(a) {
        return this.i(a, true, false);
    }
    getPropertyIntentValue(a, b) {
        let c = this.p.getCurrentDataSource();
        if (c == null) {
            return null;
        }
        let d = c.actualSchema;
        if (d == null) {
            return null;
        }
        let e = d.propertyDataIntents;
        if (e == null || d.propertyNames == null) {
            return null;
        }
        for (let f = 0; f < d.propertyNames.length; f++) {
            if (d.propertyNames[f] != null && Base.equalsStatic(d.propertyNames[f], b)) {
                for (let g = 0; g < e[f].length; g++) {
                    let h = e[f][g];
                    let i = h.split('/');
                    if (i.length == 2 && i[0] != null && Base.equalsStatic(i[0], a)) {
                        return i[1];
                    }
                }
            }
        }
        return null;
    }
    getAllPropertiesWithValuedIntent(a) {
        return this.i(a, false, true);
    }
    i(a, b, c) {
        let d = this.p.getCurrentDataSource();
        if (d == null) {
            return new Array(0);
        }
        let e = d.actualSchema;
        if (e == null) {
            return new Array(0);
        }
        let f = e.propertyDataIntents;
        if (f == null || e.propertyNames == null) {
            return new Array(0);
        }
        let g = 0;
        for (let h = 0; h < e.propertyNames.length; h++) {
            for (let i = 0; i < f[h].length; i++) {
                let j = f[h][i];
                let k = j.split('/');
                if (b && k.length > 1) {
                    continue;
                }
                if (c && k.length < 2) {
                    continue;
                }
                if (Base.equalsStatic(a.toLowerCase(), k[0].toLowerCase())) {
                    g++;
                }
            }
        }
        let l = new Array(g);
        g = 0;
        for (let m = 0; m < e.propertyNames.length; m++) {
            for (let n = 0; n < f[m].length; n++) {
                let o = f[m][n];
                let p = o.split('/');
                if (b && p.length > 1) {
                    continue;
                }
                if (c && p.length < 2) {
                    continue;
                }
                if (Base.equalsStatic(a.toLowerCase(), o.toLowerCase())) {
                    l[g] = e.propertyNames[m];
                    g++;
                }
            }
        }
        return l;
    }
    getAllDateTimeProperties() {
        return this.n(runOn(this, this.ab), null);
    }
    getFirstDateTimeProperty() {
        let a = this.getAllDateTimeProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    }
    getFirstStringProperty() {
        let a = this.getAllStringProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    }
    hasDateTimeProperties() {
        return this.getAllDateTimeProperties().length > 0;
    }
    ae(a) {
        return a == 1 || a == 3 || a == 4 || a == 7 || a == 5 || a == 6 || a == 10;
    }
    af(a) {
        return a == 11;
    }
    isMonotonic(a, b, c) {
        if (a == null) {
            return false;
        }
        let d = false;
        let e = false;
        let f = a.actualCount;
        for (let g = 0; g < Math.min(f, c); g++) {
            if (g == 0) {
                continue;
            }
            let h = this.an(a.getItemValue(a.getItemAtIndex(g - 1), b));
            let i = this.an(a.getItemValue(a.getItemAtIndex(g), b));
            if (!e && h != i) {
                d = i > h;
                e = true;
            }
            if (h == i) {
                continue;
            }
            if (e) {
                let j = i > h;
                if (j != d) {
                    return false;
                }
            }
        }
        return true;
    }
    aw(a, b, c) {
        let d = this.p.getCurrentDataSource();
        let e = d.actualSchema;
        if (e == null) {
            return null;
        }
        let f = this.n(b, null);
        if (f.length == 0) {
            return null;
        }
        if (d.actualCount > a) {
            return null;
        }
        for (let g = 0; g < f.length; g++) {
            if (c(f[g], this.q(f[g]))) {
                return f[g];
            }
        }
        return null;
    }
    getFirstDistinctStringProperty(a) {
        return this.aw(a, (b) => b == 0, runOn(this, this.ag));
    }
    getFirstDistinctNumericProperty(a) {
        return this.aw(a, runOn(this, this.ae), runOn(this, this.ad));
    }
    getFirstDistinctMonotonicNumericProperty(a) {
        let b = this.p.getCurrentDataSource();
        return this.aw(a, runOn(this, this.ae), (c, d) => this.ad(c, d) && this.isMonotonic(b, c, a));
    }
    getFirstDistinctDateTimeProperty(a) {
        return this.aw(a, runOn(this, this.ab), runOn(this, this.aa));
    }
    getFirstStringPropertyPreferringDistinct(a) {
        let b = this.getFirstDistinctStringProperty(a);
        if (b != null) {
            return b;
        }
        let c = this.getAllStringProperties();
        if (c.length == 0) {
            return null;
        }
        return c[0];
    }
    getTitleString(a, b) {
        let c = this.p.getCurrentDataSource();
        let d = null;
        if (d == null && b != null) {
            let e = null;
            for (let f = 0; f < b.length; f++) {
                let g = this.getPropertyIntentValue(EnumUtil.getName(DataSeriesIntent_$type, (10)), b[f]);
                if (d == null) {
                    d = g;
                    e = g;
                }
                else {
                    if (g != null) {
                        if (g.trim().length > 0 && g != e) {
                            d += " - " + g;
                        }
                        e = g;
                    }
                }
            }
        }
        if (d == null) {
            let h = this.getAllPropertiesWithValuelessIntent(EnumUtil.getName(DataSeriesIntent_$type, (10)));
            if (h != null && h.length > 0) {
                d = h[0];
                d = this.aq(a, c, d);
            }
        }
        if (d == null) {
            if (this.getParentTitle() != null) {
                d = this.getParentTitle();
            }
        }
        if (d == null && a != null) {
            let i = this.getAllStringProperties();
            for (let k = 0; k < i.length; k++) {
                let j = i[k];
                if (j != null && (Base.equalsStatic(j.toLowerCase(), "label") || Base.equalsStatic(j.toLowerCase(), "title"))) {
                    d = j;
                }
            }
            if (d != null) {
                d = this.aq(a, c, d);
            }
        }
        return d;
    }
    aq(a, b, c) {
        if (a != null) {
            let d = b.getItemValue(a, c);
            if (d != null) {
                c = d.toString();
            }
        }
        else {
            c = this.getNonNullPropertyValue(c).toString();
        }
        return c;
    }
    getNonNullPropertyValue(a) {
        let b = this.p.getCurrentDataSource();
        for (let c = 0; c < b.actualCount; c++) {
            let d = b.getItemValue(b.getItemAtIndex(c), a);
            if (d != null) {
                return d;
            }
        }
        return null;
    }
    ag(a, b) {
        let c = this.p.getCurrentDataSource();
        let d = new HashSet$1(String_$type, 0);
        for (let e = 0; e < c.actualCount; e++) {
            let f = c.getItemValue(c.getItemAtIndex(e), a);
            let g = f;
            if (d.contains(g)) {
                return false;
            }
            d.add_1(g);
        }
        return true;
    }
    aa(a, b) {
        let c = this.p.getCurrentDataSource();
        let d = new HashSet$1(Number_$type, 0);
        for (let e = 0; e < c.actualCount; e++) {
            let f;
            let g = c.getItemValue(c.getItemAtIndex(e), a);
            if (g == null) {
                f = dateMinValue();
            }
            else {
                f = g;
            }
            if (d.contains(f.getTime())) {
                return false;
            }
            d.add_1(f.getTime());
        }
        return true;
    }
    an(value_) {
        return (+value_);
    }
    ad(a, b) {
        let c = this.p.getCurrentDataSource();
        if (b == 4 || b == 1 || b == 3) {
            let d = new HashSet$1(Number_$type, 0);
            for (let e = 0; e < c.actualCount; e++) {
                let f;
                let g = c.getItemValue(c.getItemAtIndex(e), a);
                if (g == null) {
                    f = -9.2233720368547758E+18;
                }
                else {
                    f = typeGetValue(g);
                }
                if (d.contains(f)) {
                    return false;
                }
                d.add_1(f);
            }
            return true;
        }
        if (b == 7 || b == 5 || b == 6) {
            let h = new HashSet$1(Number_$type, 0);
            for (let i = 0; i < c.actualCount; i++) {
                let j;
                let k = c.getItemValue(c.getItemAtIndex(i), a);
                if (k == null) {
                    j = NaN;
                }
                else {
                    j = this.an(k);
                }
                if (h.contains(j)) {
                    return false;
                }
                h.add_1(j);
            }
            return true;
        }
        return false;
    }
}
DataSeriesDataProviderAnalyzer.$t = markType(DataSeriesDataProviderAnalyzer, 'DataSeriesDataProviderAnalyzer');
/**
 * @hidden
 */
export class DataSeriesAdapterUpdateNotifier extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.b = null;
        this.a = a;
        this.b = b;
    }
    notifyClearItems() {
        this.a.ae(this.b);
    }
    notifyInsertItem(a, b) {
        this.a.af(this.b, a, b);
    }
    notifyRemoveItem(a, b) {
        this.a.ag(this.b, a, b);
    }
    notifySetItem(a, b, c) {
        this.a.ah(this.b, a, b, c);
    }
}
DataSeriesAdapterUpdateNotifier.$t = markType(DataSeriesAdapterUpdateNotifier, 'DataSeriesAdapterUpdateNotifier', Base.$, [IDataSourceDataProviderUpdateNotifier_$type]);
/**
 * @hidden
 */
export class DataSeriesAdapterRuleCollection extends ObservableCollection$1 {
    constructor() {
        super(IDataSeriesAdapterRule_$type, 0);
    }
}
DataSeriesAdapterRuleCollection.$t = markType(DataSeriesAdapterRuleCollection, 'DataSeriesAdapterRuleCollection', ObservableCollection$1.$.specialize(IDataSeriesAdapterRule_$type));
/**
 * @hidden
 */
export class DataSeriesAdapterRemovingDuplicatesEventArgs extends Base {
    constructor() {
        super(...arguments);
        this.b = null;
        this.d = null;
        this.e = null;
        this.a = null;
        this.c = false;
    }
}
DataSeriesAdapterRemovingDuplicatesEventArgs.$t = markType(DataSeriesAdapterRemovingDuplicatesEventArgs, 'DataSeriesAdapterRemovingDuplicatesEventArgs');
/**
 * @hidden
 */
export class DataSeriesAdapterRunEventArgs extends Base {
    constructor() {
        super(...arguments);
        this.a = null;
        this.b = false;
    }
}
DataSeriesAdapterRunEventArgs.$t = markType(DataSeriesAdapterRunEventArgs, 'DataSeriesAdapterRunEventArgs');
/**
 * @hidden
 */
export class DataSeriesAdapterImplementation extends Base {
    constructor() {
        super();
        this.q = null;
        this.r = null;
        this.n = new Dictionary$2(Base.$, IDataSourceLocalDataProvider_$type, 0);
        this.o = null;
        this.propertyChanged = null;
        this.c = null;
        this.b = null;
        this.a = null;
        this._rules = null;
        this._dataSeries = null;
        this.m = false;
        this.removingUnsupported = null;
        this.removingDuplicates = null;
        this.rules = new DataSeriesAdapterRuleCollection();
        this.dataSeries = new DataSeriesCollection();
        this.ai(this.rules);
        let a = this.rules;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(this, this.ap));
    }
    v(a, b) {
        let c = stringEmpty();
        if (this.q != null) {
            c = this.q(a);
        }
        if (stringIsNullOrEmpty(c)) {
            return b;
        }
        return c;
    }
    ai(a) {
    }
    ap(a, b) {
        this.refresh();
    }
    get g() {
        return this.r;
    }
    get itemsSource() {
        return this.o;
    }
    set itemsSource(a) {
        let b = this.o;
        this.o = a;
        if (b != this.o) {
            this.ad("ItemsSource", b, this.o);
        }
    }
    get supportedSeriesTypes() {
        return this.c;
    }
    set supportedSeriesTypes(a) {
        let b = this.c;
        this.c = a;
        if (b != this.c) {
            this.ad("SupportedSeriesTypes", b, this.c);
        }
    }
    get includedProperties() {
        return this.b;
    }
    set includedProperties(a) {
        let b = this.b;
        this.b = a;
        if (b != this.b) {
            this.ad("IncludedProperties", b, this.b);
        }
    }
    get excludedProperties() {
        return this.a;
    }
    set excludedProperties(a) {
        let b = this.a;
        this.a = a;
        if (b != this.a) {
            this.ad("ExcludedProperties", b, this.a);
        }
    }
    get rules() {
        return this._rules;
    }
    set rules(a) {
        this._rules = a;
    }
    get dataSeries() {
        return this._dataSeries;
    }
    set dataSeries(a) {
        this._dataSeries = a;
    }
    ad(a, b, c) {
        this.aj(a, b, c);
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    }
    aj(a, b, c) {
        switch (a) {
            case "ItemsSource":
                this.refresh();
                break;
            case "SupportedSeriesTypes":
                this.refresh();
                break;
            case "IncludedProperties":
                this.refresh();
                break;
            case "ExcludedProperties":
                this.refresh();
                break;
        }
    }
    refresh() {
        this.m = true;
        this.y();
        let a = new DataSeriesAdapterRunContext(this);
        let b = this.l(this.itemsSource);
        this.x(b, null, false);
        a.pushDataSource(b);
        this.ar(a);
        this.at(a);
        this.m = false;
    }
    y() {
        for (let a of fromEnum(this.n.keys)) {
            let b = this.n.item(a);
            b.updateNotifier = null;
            b.schemaChanged = delegateRemove(b.schemaChanged, runOn(this, this.ak));
        }
        this.n.clear();
    }
    at(a) {
        this.ao(a);
        this.an(a);
        this.as(a);
    }
    ao(a) {
        let b = true;
        if (this.removingUnsupported != null) {
            let c = ((() => {
                let $ret = new DataSeriesAdapterRunEventArgs();
                $ret.a = a;
                return $ret;
            })());
            this.removingUnsupported(this, c);
            b = !c.b;
        }
        if (b) {
            if (this.supportedSeriesTypes == null) {
                return;
            }
            let d = new HashSet$1(DataSeriesType_$type, 0);
            for (let e = 0; e < this.supportedSeriesTypes.length; e++) {
                d.add_1(this.supportedSeriesTypes[e]);
            }
            for (let f = a.getDataSeriesCount() - 1; f >= 0; f--) {
                let g = a.getDataSeriesAt(f);
                if (!d.contains(g.suggestedSeries)) {
                    a.removeDataSeries(g);
                }
            }
        }
    }
    as(a) {
        let b = 0;
        for (; b < Math.min(this.dataSeries.count, a.getDataSeriesCount()); b++) {
            if (!this.dataSeries._inner[b].equals(a.getDataSeriesAt(b))) {
                this.dataSeries.removeAt(b);
                b--;
            }
        }
        for (; b < a.getDataSeriesCount(); b++) {
            this.dataSeries.insert(b, a.getDataSeriesAt(b));
        }
        for (; b < this.dataSeries.count; b++) {
            this.dataSeries.removeAt(b);
            b--;
        }
    }
    an(a) {
        let b = new Dictionary$2(String_$type, List$1.$.specialize(DataSeries.$), 0);
        for (let c = 0; c < a.getDataSeriesCount(); c++) {
            let d = a.getDataSeriesAt(c);
            let e = d.i();
            for (let f = 0; f < e.count; f++) {
                if (e.item(f).intent == 16 || e.item(f).intent == 17) {
                    continue;
                }
                let g = (d.dataPath != null ? (d.dataPath + ".") : "") + e.item(f).path;
                if (e.item(f).intent == 25) {
                    g = e.item(f).path;
                }
                if (!b.containsKey(g)) {
                    b.item(g, new List$1(DataSeries.$, 0));
                }
                b.item(g).add(d);
            }
        }
        for (let h of fromEnum(b.keys)) {
            if (b.item(h).count > 1) {
                let i = new Array(b.item(h).count);
                let j = b.item(h);
                let k = j.count;
                for (let l = 0; l < k; l++) {
                    i[l] = j._inner[l];
                }
                let m = true;
                if (this.removingDuplicates != null) {
                    let n = ((() => {
                        let $ret = new DataSeriesAdapterRemovingDuplicatesEventArgs();
                        $ret.e = h;
                        $ret.b = a;
                        $ret.a = i;
                        return $ret;
                    })());
                    m = !n.c;
                }
                if (m) {
                    let o = -1;
                    let p = null;
                    j = b.item(h);
                    k = j.count;
                    for (let q = 0; q < k; q++) {
                        let r = j._inner[q];
                        if (r.priority > o) {
                            o = r.priority;
                            p = r;
                        }
                    }
                    for (let s = 0; s < k; s++) {
                        let t = j._inner[s];
                        if (t != p) {
                            a.removeDataSeries(t);
                        }
                    }
                }
            }
        }
    }
    ar(a) {
        for (let b = 0; b < this.rules.count; b++) {
            this.aq(a, this.rules._inner[b]);
        }
    }
    aq(a, b) {
        b.evaluate(a);
    }
    l(a) {
        if (a != null && this.n.containsKey(a)) {
            return this.n.item(a);
        }
        return this.g.getDataProvider(a);
    }
    al(a, b, c, d) {
        let e = this.l(b);
        this.x(e, a.getCurrentDataSource(), d);
        a.pushDataSource(e);
        a.pushPath(c);
        this.ar(a);
        a.popPath();
        a.popDataSource();
    }
    x(a, b, c) {
        if (a.dataSource != null) {
            this.n.addItem(a.dataSource, a);
        }
        a.schemaChanged = delegateCombine(a.schemaChanged, runOn(this, this.ak));
        if (b != null) {
            let d = new DataSeriesAdapterUpdateNotifier(this, a);
            b.updateNotifier = d;
        }
        if (c) {
            let e = new DataSeriesAdapterUpdateNotifier(this, a);
            a.updateNotifier = e;
        }
    }
    ak(a, b) {
        if (!this.m) {
            this.refresh();
        }
    }
    ae(a) {
        this.refresh();
    }
    af(a, b, c) {
        this.refresh();
    }
    ag(a, b, c) {
        this.refresh();
    }
    ah(a, b, c, d) {
        this.refresh();
    }
    notifyClearItems(a) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyClearItems();
        }
    }
    notifyInsertItem(a, b, c) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyInsertItem(b, c);
        }
    }
    notifyRemoveItem(a, b, c) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyRemoveItem(b, c);
        }
    }
    notifySetItem(a, b, c, d) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifySetItem(b, c, d);
        }
    }
}
DataSeriesAdapterImplementation.$t = markType(DataSeriesAdapterImplementation, 'DataSeriesAdapterImplementation', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=IDataSeriesAdapterRule_combined.js.map
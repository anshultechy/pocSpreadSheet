/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
export var IDataSeriesAdapterRule_$type = new Type(null, 'IDataSeriesAdapterRule');
/**
 * @hidden
 */
var DataSeriesAdapterRunContext = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterRunContext, _super);
    function DataSeriesAdapterRunContext(a) {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this._analyzer = null;
        _this.h = null;
        _this.m = null;
        _this.o = null;
        _this.n = null;
        _this.b = null;
        _this.a = null;
        _this.l = null;
        _this.g = a;
        _this.analyzer = new DataSeriesDataProviderAnalyzer(_this);
        _this.analyzer.includedProperties = _this.g.includedProperties;
        _this.analyzer.excludedProperties = _this.g.excludedProperties;
        _this.h = new DataSeriesCollection();
        _this.m = new Stack$1(IDataSourceLocalDataProvider_$type);
        _this.o = new Stack$1(String_$type);
        _this.n = new Stack$1(String_$type);
        _this.b = _this.g.includedProperties;
        _this.a = _this.g.excludedProperties;
        _this.l = null;
        if (_this.g.supportedSeriesTypes != null) {
            _this.l = new HashSet$1(DataSeriesType_$type, 0);
            for (var b = 0; b < _this.g.supportedSeriesTypes.length; b++) {
                _this.l.add_1(_this.g.supportedSeriesTypes[b]);
            }
        }
        return _this;
    }
    Object.defineProperty(DataSeriesAdapterRunContext.prototype, "analyzer", {
        get: function () {
            return this._analyzer;
        },
        set: function (a) {
            this._analyzer = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesAdapterRunContext.prototype.getSubProvider = function (a, b) {
        var c = this.g.l(a);
        this.pushDataSource(c);
        this.pushPath(b);
        return c;
    };
    DataSeriesAdapterRunContext.prototype.popSubProvider = function () {
        this.popDataSource();
        this.popPath();
    };
    DataSeriesAdapterRunContext.prototype.w = function (a, b) {
        return this.g.v(a, b);
    };
    DataSeriesAdapterRunContext.prototype.recurseRules = function (a, b, c) {
        this.g.al(this, a, b, c);
    };
    Object.defineProperty(DataSeriesAdapterRunContext.prototype, "includedProperties", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterRunContext.prototype, "excludedProperties", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesAdapterRunContext.prototype.getCurrentDataSource = function () {
        return this.m.d();
    };
    DataSeriesAdapterRunContext.prototype.pushDataSource = function (a) {
        this.m.h(a);
    };
    DataSeriesAdapterRunContext.prototype.hasValidType = function (a) {
        if (this.l == null) {
            return true;
        }
        if (this.l.contains(a.suggestedSeries)) {
            return true;
        }
        return false;
    };
    DataSeriesAdapterRunContext.prototype.popDataSource = function () {
        return this.m.e();
    };
    DataSeriesAdapterRunContext.prototype.getCurrentPathSegment = function () {
        return this.o.d();
    };
    DataSeriesAdapterRunContext.prototype.getCurrentPath = function () {
        var e_1, _a;
        var a = "";
        var b = true;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.o)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (b) {
                    b = false;
                }
                else {
                    a += ".";
                }
                a += c;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return a;
    };
    DataSeriesAdapterRunContext.prototype.getParentTitle = function () {
        if (this.n.f == 0) {
            return null;
        }
        return this.n.d();
    };
    DataSeriesAdapterRunContext.prototype.pushPath = function (a) {
        this.o.h(a);
    };
    DataSeriesAdapterRunContext.prototype.popPath = function () {
        return this.o.e();
    };
    DataSeriesAdapterRunContext.prototype.pushParentTitle = function (a) {
        this.n.h(a);
    };
    DataSeriesAdapterRunContext.prototype.popParentTitle = function () {
        return this.n.e();
    };
    DataSeriesAdapterRunContext.prototype.ab = function (a, b) {
        if (a.priority == -1) {
            a.priority = b.priority;
        }
        if (a.dataPath == null) {
            a.dataPath = this.getCurrentPath();
        }
        if (a.data == null) {
            a.data = this.getCurrentDataSource().dataSource;
        }
    };
    DataSeriesAdapterRunContext.prototype.addDataSeries = function (a, b) {
        this.ab(a, b);
        this.h.add(a);
    };
    DataSeriesAdapterRunContext.prototype.removeDataSeries = function (a) {
        this.h.remove(a);
    };
    DataSeriesAdapterRunContext.prototype.insertDataSeries = function (a, b, c) {
        this.ab(b, c);
        this.h.insert(a, b);
    };
    DataSeriesAdapterRunContext.prototype.clearDataSeries = function () {
        this.h.clear();
    };
    DataSeriesAdapterRunContext.prototype.getDataSeriesCount = function () {
        return this.h.count;
    };
    DataSeriesAdapterRunContext.prototype.getDataSeriesAt = function (a) {
        return this.h._inner[a];
    };
    DataSeriesAdapterRunContext.$t = markType(DataSeriesAdapterRunContext, 'DataSeriesAdapterRunContext');
    return DataSeriesAdapterRunContext;
}(Base));
export { DataSeriesAdapterRunContext };
/**
 * @hidden
 */
var DataSeriesDataProviderAnalyzer = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesDataProviderAnalyzer, _super);
    function DataSeriesDataProviderAnalyzer(a) {
        var _this = _super.call(this) || this;
        _this.p = null;
        _this.b = null;
        _this.a = null;
        _this.s = false;
        _this.r = false;
        _this.ak = new HashSet$1(String_$type, 0);
        _this.am = new List$1(Matcher.$, 0);
        _this.aj = new HashSet$1(String_$type, 0);
        _this.al = new List$1(Matcher.$, 0);
        _this.p = a;
        return _this;
    }
    Object.defineProperty(DataSeriesDataProviderAnalyzer.prototype, "includedProperties", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
            this.ak.clear();
            if (this.b == null) {
                this.s = false;
            }
            else {
                this.s = true;
                var d = this.b;
                for (var c = 0; c < d.length; c++) {
                    var b = d[c];
                    if (Matcher.a(b)) {
                        this.am.add(new Matcher(b));
                    }
                    else {
                        this.ak.add_1(b);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesDataProviderAnalyzer.prototype, "excludedProperties", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
            this.aj.clear();
            if (this.a == null) {
                this.r = false;
            }
            else {
                this.r = true;
                var d = this.a;
                for (var c = 0; c < d.length; c++) {
                    var b = d[c];
                    if (Matcher.a(b)) {
                        this.al.add(new Matcher(b));
                    }
                    else {
                        this.aj.add_1(b);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesDataProviderAnalyzer.prototype.getParentTitle = function () {
        return this.p.getParentTitle();
    };
    DataSeriesDataProviderAnalyzer.prototype.shouldIncludeProperty = function (a, b) {
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
    };
    DataSeriesDataProviderAnalyzer.prototype.u = function (a) {
        for (var b = 0; b < this.al.count; b++) {
            if (this.al._inner[b].b(a)) {
                return true;
            }
        }
        return false;
    };
    DataSeriesDataProviderAnalyzer.prototype.y = function (a) {
        for (var b = 0; b < this.am.count; b++) {
            if (this.am._inner[b].b(a)) {
                return true;
            }
        }
        return false;
    };
    DataSeriesDataProviderAnalyzer.prototype.expandCamelCasedWords = function (a) {
        if (a == null) {
            return null;
        }
        a = stringReplace(stringReplace(a, "[", ""), "]", "");
        var b = new List$1(String_$type, 0);
        var c = 0;
        for (var d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            var f = e.toUpperCase();
            var g = e.toLowerCase();
            if (d == 0) {
                e = f;
            }
            var h = (c == 0 && b.count > 0);
            var i = (c > 1);
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
        var j = stringEmpty();
        for (var k = 0; k < b.count; k++) {
            j += b._inner[k];
        }
        return j;
    };
    DataSeriesDataProviderAnalyzer.prototype.hasStringProperties = function () {
        return this.getAllStringProperties().length > 0;
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllStringProperties = function () {
        return this.n(function (a) { return a == 0; }, null);
    };
    DataSeriesDataProviderAnalyzer.prototype.isCollection = function (a) {
        if (typeCast(IEnumerable_$type, a) !== null || typeCast(Array_$type, a) !== null) {
            return true;
        }
        return false;
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllPropertiesWithName = function (a) {
        return this.n(null, function (b) { return b == a; });
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllNumericProperties = function () {
        return this.n(runOn(this, this.ae), null);
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllObjectProperties = function () {
        return this.n(runOn(this, this.af), null);
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllCollectionProperties = function () {
        var a = this.getAllObjectProperties();
        if (a.length == 0) {
            return new Array(0);
        }
        var b = this.p.getCurrentDataSource();
        var c = new List$1(String_$type, 0);
        for (var d = 0; d < b.actualCount; d++) {
            if (this.isCollection(b.getItemAtIndex(d))) {
                c.add(b.actualSchema.propertyNames[d]);
            }
        }
        return c.toArray();
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstNumericProperty = function () {
        var a = this.getAllNumericProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    };
    DataSeriesDataProviderAnalyzer.prototype.hasNumericProperties = function () {
        return this.getAllNumericProperties().length > 0;
    };
    DataSeriesDataProviderAnalyzer.prototype.ab = function (a) {
        if (a == 8 || a == 9) {
            return true;
        }
        return false;
    };
    DataSeriesDataProviderAnalyzer.prototype.q = function (a) {
        var b = this.p.getCurrentDataSource();
        if (b == null) {
            return 11;
        }
        var c = b.actualSchema;
        if (c == null) {
            return 11;
        }
        var d = -1;
        for (var e = 0; e < c.propertyNames.length; e++) {
            if (Base.equalsStatic(c.propertyNames[e], a)) {
                d = e;
                break;
            }
        }
        if (d == -1) {
            return 11;
        }
        return c.propertyTypes[d];
    };
    DataSeriesDataProviderAnalyzer.prototype.n = function (a, b) {
        var c = this.p.getCurrentDataSource();
        var d = c.actualSchema;
        if (d == null) {
            return new Array(0);
        }
        var e = this.p.getCurrentPath();
        var f = 0;
        for (var g = 0; g < d.propertyTypes.length; g++) {
            if ((a == null || a(d.propertyTypes[g])) && (b == null || b(d.propertyNames[g])) && this.ai(d.propertyDataIntents, g) && this.shouldIncludeProperty(d.propertyNames[g], e)) {
                f++;
            }
        }
        var h = new Array(f);
        f = 0;
        for (var i = 0; i < d.propertyTypes.length; i++) {
            if ((a == null || a(d.propertyTypes[i])) && (b == null || b(d.propertyNames[i])) && this.ai(d.propertyDataIntents, i) && this.shouldIncludeProperty(d.propertyNames[i], e)) {
                h[f] = d.propertyNames[i];
                f++;
            }
        }
        return h;
    };
    DataSeriesDataProviderAnalyzer.prototype.ai = function (a, b) {
        if (a == null) {
            return true;
        }
        return !this.t(a, b, "DontPlot");
    };
    DataSeriesDataProviderAnalyzer.prototype.t = function (a, b, c) {
        if (a == null) {
            return false;
        }
        for (var d = 0; d < a[b].length; d++) {
            var e = a[b][d];
            if (Base.equalsStatic(e.toLowerCase(), c.toLowerCase())) {
                return true;
            }
        }
        return false;
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllPropertiesWithIntent = function (a) {
        return this.i(a, false, false);
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllPropertiesWithValuelessIntent = function (a) {
        return this.i(a, true, false);
    };
    DataSeriesDataProviderAnalyzer.prototype.getPropertyIntentValue = function (a, b) {
        var c = this.p.getCurrentDataSource();
        if (c == null) {
            return null;
        }
        var d = c.actualSchema;
        if (d == null) {
            return null;
        }
        var e = d.propertyDataIntents;
        if (e == null || d.propertyNames == null) {
            return null;
        }
        for (var f = 0; f < d.propertyNames.length; f++) {
            if (d.propertyNames[f] != null && Base.equalsStatic(d.propertyNames[f], b)) {
                for (var g = 0; g < e[f].length; g++) {
                    var h = e[f][g];
                    var i = h.split('/');
                    if (i.length == 2 && i[0] != null && Base.equalsStatic(i[0], a)) {
                        return i[1];
                    }
                }
            }
        }
        return null;
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllPropertiesWithValuedIntent = function (a) {
        return this.i(a, false, true);
    };
    DataSeriesDataProviderAnalyzer.prototype.i = function (a, b, c) {
        var d = this.p.getCurrentDataSource();
        if (d == null) {
            return new Array(0);
        }
        var e = d.actualSchema;
        if (e == null) {
            return new Array(0);
        }
        var f = e.propertyDataIntents;
        if (f == null || e.propertyNames == null) {
            return new Array(0);
        }
        var g = 0;
        for (var h = 0; h < e.propertyNames.length; h++) {
            for (var i = 0; i < f[h].length; i++) {
                var j = f[h][i];
                var k = j.split('/');
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
        var l = new Array(g);
        g = 0;
        for (var m = 0; m < e.propertyNames.length; m++) {
            for (var n = 0; n < f[m].length; n++) {
                var o = f[m][n];
                var p = o.split('/');
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
    };
    DataSeriesDataProviderAnalyzer.prototype.getAllDateTimeProperties = function () {
        return this.n(runOn(this, this.ab), null);
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstDateTimeProperty = function () {
        var a = this.getAllDateTimeProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstStringProperty = function () {
        var a = this.getAllStringProperties();
        if (a.length == 0) {
            return null;
        }
        return a[0];
    };
    DataSeriesDataProviderAnalyzer.prototype.hasDateTimeProperties = function () {
        return this.getAllDateTimeProperties().length > 0;
    };
    DataSeriesDataProviderAnalyzer.prototype.ae = function (a) {
        return a == 1 || a == 3 || a == 4 || a == 7 || a == 5 || a == 6 || a == 10;
    };
    DataSeriesDataProviderAnalyzer.prototype.af = function (a) {
        return a == 11;
    };
    DataSeriesDataProviderAnalyzer.prototype.isMonotonic = function (a, b, c) {
        if (a == null) {
            return false;
        }
        var d = false;
        var e = false;
        var f = a.actualCount;
        for (var g = 0; g < Math.min(f, c); g++) {
            if (g == 0) {
                continue;
            }
            var h = this.an(a.getItemValue(a.getItemAtIndex(g - 1), b));
            var i = this.an(a.getItemValue(a.getItemAtIndex(g), b));
            if (!e && h != i) {
                d = i > h;
                e = true;
            }
            if (h == i) {
                continue;
            }
            if (e) {
                var j = i > h;
                if (j != d) {
                    return false;
                }
            }
        }
        return true;
    };
    DataSeriesDataProviderAnalyzer.prototype.aw = function (a, b, c) {
        var d = this.p.getCurrentDataSource();
        var e = d.actualSchema;
        if (e == null) {
            return null;
        }
        var f = this.n(b, null);
        if (f.length == 0) {
            return null;
        }
        if (d.actualCount > a) {
            return null;
        }
        for (var g = 0; g < f.length; g++) {
            if (c(f[g], this.q(f[g]))) {
                return f[g];
            }
        }
        return null;
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstDistinctStringProperty = function (a) {
        return this.aw(a, function (b) { return b == 0; }, runOn(this, this.ag));
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstDistinctNumericProperty = function (a) {
        return this.aw(a, runOn(this, this.ae), runOn(this, this.ad));
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstDistinctMonotonicNumericProperty = function (a) {
        var _this = this;
        var b = this.p.getCurrentDataSource();
        return this.aw(a, runOn(this, this.ae), function (c, d) { return _this.ad(c, d) && _this.isMonotonic(b, c, a); });
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstDistinctDateTimeProperty = function (a) {
        return this.aw(a, runOn(this, this.ab), runOn(this, this.aa));
    };
    DataSeriesDataProviderAnalyzer.prototype.getFirstStringPropertyPreferringDistinct = function (a) {
        var b = this.getFirstDistinctStringProperty(a);
        if (b != null) {
            return b;
        }
        var c = this.getAllStringProperties();
        if (c.length == 0) {
            return null;
        }
        return c[0];
    };
    DataSeriesDataProviderAnalyzer.prototype.getTitleString = function (a, b) {
        var c = this.p.getCurrentDataSource();
        var d = null;
        if (d == null && b != null) {
            var e = null;
            for (var f = 0; f < b.length; f++) {
                var g = this.getPropertyIntentValue(EnumUtil.getName(DataSeriesIntent_$type, (10)), b[f]);
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
            var h = this.getAllPropertiesWithValuelessIntent(EnumUtil.getName(DataSeriesIntent_$type, (10)));
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
            var i = this.getAllStringProperties();
            for (var k = 0; k < i.length; k++) {
                var j = i[k];
                if (j != null && (Base.equalsStatic(j.toLowerCase(), "label") || Base.equalsStatic(j.toLowerCase(), "title"))) {
                    d = j;
                }
            }
            if (d != null) {
                d = this.aq(a, c, d);
            }
        }
        return d;
    };
    DataSeriesDataProviderAnalyzer.prototype.aq = function (a, b, c) {
        if (a != null) {
            var d = b.getItemValue(a, c);
            if (d != null) {
                c = d.toString();
            }
        }
        else {
            c = this.getNonNullPropertyValue(c).toString();
        }
        return c;
    };
    DataSeriesDataProviderAnalyzer.prototype.getNonNullPropertyValue = function (a) {
        var b = this.p.getCurrentDataSource();
        for (var c = 0; c < b.actualCount; c++) {
            var d = b.getItemValue(b.getItemAtIndex(c), a);
            if (d != null) {
                return d;
            }
        }
        return null;
    };
    DataSeriesDataProviderAnalyzer.prototype.ag = function (a, b) {
        var c = this.p.getCurrentDataSource();
        var d = new HashSet$1(String_$type, 0);
        for (var e = 0; e < c.actualCount; e++) {
            var f = c.getItemValue(c.getItemAtIndex(e), a);
            var g = f;
            if (d.contains(g)) {
                return false;
            }
            d.add_1(g);
        }
        return true;
    };
    DataSeriesDataProviderAnalyzer.prototype.aa = function (a, b) {
        var c = this.p.getCurrentDataSource();
        var d = new HashSet$1(Number_$type, 0);
        for (var e = 0; e < c.actualCount; e++) {
            var f = void 0;
            var g = c.getItemValue(c.getItemAtIndex(e), a);
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
    };
    DataSeriesDataProviderAnalyzer.prototype.an = function (value_) {
        return (+value_);
    };
    DataSeriesDataProviderAnalyzer.prototype.ad = function (a, b) {
        var c = this.p.getCurrentDataSource();
        if (b == 4 || b == 1 || b == 3) {
            var d = new HashSet$1(Number_$type, 0);
            for (var e = 0; e < c.actualCount; e++) {
                var f = void 0;
                var g = c.getItemValue(c.getItemAtIndex(e), a);
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
            var h = new HashSet$1(Number_$type, 0);
            for (var i = 0; i < c.actualCount; i++) {
                var j = void 0;
                var k = c.getItemValue(c.getItemAtIndex(i), a);
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
    };
    DataSeriesDataProviderAnalyzer.$t = markType(DataSeriesDataProviderAnalyzer, 'DataSeriesDataProviderAnalyzer');
    return DataSeriesDataProviderAnalyzer;
}(Base));
export { DataSeriesDataProviderAnalyzer };
/**
 * @hidden
 */
var DataSeriesAdapterUpdateNotifier = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterUpdateNotifier, _super);
    function DataSeriesAdapterUpdateNotifier(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    DataSeriesAdapterUpdateNotifier.prototype.notifyClearItems = function () {
        this.a.ae(this.b);
    };
    DataSeriesAdapterUpdateNotifier.prototype.notifyInsertItem = function (a, b) {
        this.a.af(this.b, a, b);
    };
    DataSeriesAdapterUpdateNotifier.prototype.notifyRemoveItem = function (a, b) {
        this.a.ag(this.b, a, b);
    };
    DataSeriesAdapterUpdateNotifier.prototype.notifySetItem = function (a, b, c) {
        this.a.ah(this.b, a, b, c);
    };
    DataSeriesAdapterUpdateNotifier.$t = markType(DataSeriesAdapterUpdateNotifier, 'DataSeriesAdapterUpdateNotifier', Base.$, [IDataSourceDataProviderUpdateNotifier_$type]);
    return DataSeriesAdapterUpdateNotifier;
}(Base));
export { DataSeriesAdapterUpdateNotifier };
/**
 * @hidden
 */
var DataSeriesAdapterRuleCollection = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterRuleCollection, _super);
    function DataSeriesAdapterRuleCollection() {
        return _super.call(this, IDataSeriesAdapterRule_$type, 0) || this;
    }
    DataSeriesAdapterRuleCollection.$t = markType(DataSeriesAdapterRuleCollection, 'DataSeriesAdapterRuleCollection', ObservableCollection$1.$.specialize(IDataSeriesAdapterRule_$type));
    return DataSeriesAdapterRuleCollection;
}(ObservableCollection$1));
export { DataSeriesAdapterRuleCollection };
/**
 * @hidden
 */
var DataSeriesAdapterRemovingDuplicatesEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterRemovingDuplicatesEventArgs, _super);
    function DataSeriesAdapterRemovingDuplicatesEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = null;
        _this.d = null;
        _this.e = null;
        _this.a = null;
        _this.c = false;
        return _this;
    }
    DataSeriesAdapterRemovingDuplicatesEventArgs.$t = markType(DataSeriesAdapterRemovingDuplicatesEventArgs, 'DataSeriesAdapterRemovingDuplicatesEventArgs');
    return DataSeriesAdapterRemovingDuplicatesEventArgs;
}(Base));
export { DataSeriesAdapterRemovingDuplicatesEventArgs };
/**
 * @hidden
 */
var DataSeriesAdapterRunEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterRunEventArgs, _super);
    function DataSeriesAdapterRunEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.b = false;
        return _this;
    }
    DataSeriesAdapterRunEventArgs.$t = markType(DataSeriesAdapterRunEventArgs, 'DataSeriesAdapterRunEventArgs');
    return DataSeriesAdapterRunEventArgs;
}(Base));
export { DataSeriesAdapterRunEventArgs };
/**
 * @hidden
 */
var DataSeriesAdapterImplementation = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapterImplementation, _super);
    function DataSeriesAdapterImplementation() {
        var _this = _super.call(this) || this;
        _this.q = null;
        _this.r = null;
        _this.n = new Dictionary$2(Base.$, IDataSourceLocalDataProvider_$type, 0);
        _this.o = null;
        _this.propertyChanged = null;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        _this._rules = null;
        _this._dataSeries = null;
        _this.m = false;
        _this.removingUnsupported = null;
        _this.removingDuplicates = null;
        _this.rules = new DataSeriesAdapterRuleCollection();
        _this.dataSeries = new DataSeriesCollection();
        _this.ai(_this.rules);
        var a = _this.rules;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(_this, _this.ap));
        return _this;
    }
    DataSeriesAdapterImplementation.prototype.v = function (a, b) {
        var c = stringEmpty();
        if (this.q != null) {
            c = this.q(a);
        }
        if (stringIsNullOrEmpty(c)) {
            return b;
        }
        return c;
    };
    DataSeriesAdapterImplementation.prototype.ai = function (a) {
    };
    DataSeriesAdapterImplementation.prototype.ap = function (a, b) {
        this.refresh();
    };
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "g", {
        get: function () {
            return this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "itemsSource", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            var b = this.o;
            this.o = a;
            if (b != this.o) {
                this.ad("ItemsSource", b, this.o);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "supportedSeriesTypes", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            var b = this.c;
            this.c = a;
            if (b != this.c) {
                this.ad("SupportedSeriesTypes", b, this.c);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "includedProperties", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            var b = this.b;
            this.b = a;
            if (b != this.b) {
                this.ad("IncludedProperties", b, this.b);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "excludedProperties", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            var b = this.a;
            this.a = a;
            if (b != this.a) {
                this.ad("ExcludedProperties", b, this.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        set: function (a) {
            this._rules = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSeriesAdapterImplementation.prototype, "dataSeries", {
        get: function () {
            return this._dataSeries;
        },
        set: function (a) {
            this._dataSeries = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesAdapterImplementation.prototype.ad = function (a, b, c) {
        this.aj(a, b, c);
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    };
    DataSeriesAdapterImplementation.prototype.aj = function (a, b, c) {
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
    };
    DataSeriesAdapterImplementation.prototype.refresh = function () {
        this.m = true;
        this.y();
        var a = new DataSeriesAdapterRunContext(this);
        var b = this.l(this.itemsSource);
        this.x(b, null, false);
        a.pushDataSource(b);
        this.ar(a);
        this.at(a);
        this.m = false;
    };
    DataSeriesAdapterImplementation.prototype.y = function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.n.keys)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                var b = this.n.item(a);
                b.updateNotifier = null;
                b.schemaChanged = delegateRemove(b.schemaChanged, runOn(this, this.ak));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.n.clear();
    };
    DataSeriesAdapterImplementation.prototype.at = function (a) {
        this.ao(a);
        this.an(a);
        this.as(a);
    };
    DataSeriesAdapterImplementation.prototype.ao = function (a) {
        var b = true;
        if (this.removingUnsupported != null) {
            var c = ((function () {
                var $ret = new DataSeriesAdapterRunEventArgs();
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
            var d = new HashSet$1(DataSeriesType_$type, 0);
            for (var e = 0; e < this.supportedSeriesTypes.length; e++) {
                d.add_1(this.supportedSeriesTypes[e]);
            }
            for (var f = a.getDataSeriesCount() - 1; f >= 0; f--) {
                var g = a.getDataSeriesAt(f);
                if (!d.contains(g.suggestedSeries)) {
                    a.removeDataSeries(g);
                }
            }
        }
    };
    DataSeriesAdapterImplementation.prototype.as = function (a) {
        var b = 0;
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
    };
    DataSeriesAdapterImplementation.prototype.an = function (a) {
        var e_3, _a;
        var b = new Dictionary$2(String_$type, List$1.$.specialize(DataSeries.$), 0);
        for (var c = 0; c < a.getDataSeriesCount(); c++) {
            var d = a.getDataSeriesAt(c);
            var e = d.i();
            for (var f = 0; f < e.count; f++) {
                if (e.item(f).intent == 16 || e.item(f).intent == 17) {
                    continue;
                }
                var g = (d.dataPath != null ? (d.dataPath + ".") : "") + e.item(f).path;
                if (e.item(f).intent == 25) {
                    g = e.item(f).path;
                }
                if (!b.containsKey(g)) {
                    b.item(g, new List$1(DataSeries.$, 0));
                }
                b.item(g).add(d);
            }
        }
        var _loop_1 = function (h) {
            if (b.item(h).count > 1) {
                var i_1 = new Array(b.item(h).count);
                var j = b.item(h);
                var k = j.count;
                for (var l = 0; l < k; l++) {
                    i_1[l] = j._inner[l];
                }
                var m = true;
                if (this_1.removingDuplicates != null) {
                    var n = ((function () {
                        var $ret = new DataSeriesAdapterRemovingDuplicatesEventArgs();
                        $ret.e = h;
                        $ret.b = a;
                        $ret.a = i_1;
                        return $ret;
                    })());
                    m = !n.c;
                }
                if (m) {
                    var o = -1;
                    var p = null;
                    j = b.item(h);
                    k = j.count;
                    for (var q = 0; q < k; q++) {
                        var r = j._inner[q];
                        if (r.priority > o) {
                            o = r.priority;
                            p = r;
                        }
                    }
                    for (var s = 0; s < k; s++) {
                        var t = j._inner[s];
                        if (t != p) {
                            a.removeDataSeries(t);
                        }
                    }
                }
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(fromEnum(b.keys)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var h = _c.value;
                _loop_1(h);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    DataSeriesAdapterImplementation.prototype.ar = function (a) {
        for (var b = 0; b < this.rules.count; b++) {
            this.aq(a, this.rules._inner[b]);
        }
    };
    DataSeriesAdapterImplementation.prototype.aq = function (a, b) {
        b.evaluate(a);
    };
    DataSeriesAdapterImplementation.prototype.l = function (a) {
        if (a != null && this.n.containsKey(a)) {
            return this.n.item(a);
        }
        return this.g.getDataProvider(a);
    };
    DataSeriesAdapterImplementation.prototype.al = function (a, b, c, d) {
        var e = this.l(b);
        this.x(e, a.getCurrentDataSource(), d);
        a.pushDataSource(e);
        a.pushPath(c);
        this.ar(a);
        a.popPath();
        a.popDataSource();
    };
    DataSeriesAdapterImplementation.prototype.x = function (a, b, c) {
        if (a.dataSource != null) {
            this.n.addItem(a.dataSource, a);
        }
        a.schemaChanged = delegateCombine(a.schemaChanged, runOn(this, this.ak));
        if (b != null) {
            var d = new DataSeriesAdapterUpdateNotifier(this, a);
            b.updateNotifier = d;
        }
        if (c) {
            var e = new DataSeriesAdapterUpdateNotifier(this, a);
            a.updateNotifier = e;
        }
    };
    DataSeriesAdapterImplementation.prototype.ak = function (a, b) {
        if (!this.m) {
            this.refresh();
        }
    };
    DataSeriesAdapterImplementation.prototype.ae = function (a) {
        this.refresh();
    };
    DataSeriesAdapterImplementation.prototype.af = function (a, b, c) {
        this.refresh();
    };
    DataSeriesAdapterImplementation.prototype.ag = function (a, b, c) {
        this.refresh();
    };
    DataSeriesAdapterImplementation.prototype.ah = function (a, b, c, d) {
        this.refresh();
    };
    DataSeriesAdapterImplementation.prototype.notifyClearItems = function (a) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyClearItems();
        }
    };
    DataSeriesAdapterImplementation.prototype.notifyInsertItem = function (a, b, c) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyInsertItem(b, c);
        }
    };
    DataSeriesAdapterImplementation.prototype.notifyRemoveItem = function (a, b, c) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifyRemoveItem(b, c);
        }
    };
    DataSeriesAdapterImplementation.prototype.notifySetItem = function (a, b, c, d) {
        if (this.n.containsKey(a)) {
            this.n.item(a).notifySetItem(b, c, d);
        }
    };
    DataSeriesAdapterImplementation.$t = markType(DataSeriesAdapterImplementation, 'DataSeriesAdapterImplementation', Base.$, [INotifyPropertyChanged_$type]);
    return DataSeriesAdapterImplementation;
}(Base));
export { DataSeriesAdapterImplementation };
//# sourceMappingURL=IDataSeriesAdapterRule_combined.js.map
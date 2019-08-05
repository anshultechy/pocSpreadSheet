/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList_$type, runOn, String_$type, typeCast, Array_$type, markType } from "./type";
import { IDataSourceLocalDataProvider_$type } from "./IDataSourceLocalDataProvider";
import { DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { DefaultDataSourceSchema } from "./DefaultDataSourceSchema";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { Dictionary$2 } from "./Dictionary$2";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { stringStartsWith } from "./string";
/**
 * @hidden
 */
var DataSourceLocalDataProvider = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceLocalDataProvider, _super);
    function DataSourceLocalDataProvider() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.i = null;
        _this.d = null;
        _this.t = null;
        _this.schemaChanged = null;
        _this.o = new Dictionary$2(String_$type, FastReflectionHelper.$, 0);
        _this.g = null;
        _this.r = null;
        _this.m = false;
        _this.f = null;
        _this.e = null;
        _this.l = false;
        _this.a = null;
        _this.k = false;
        _this.j = new SortDescriptionCollection();
        _this.j.n(runOn(_this, _this.af));
        return _this;
    }
    DataSourceLocalDataProvider.prototype.af = function (a, b) {
        this.queueAutoRefresh();
    };
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "dataSource", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            var b = this.t;
            this.t = a;
            if (b != this.t) {
                this.ab("ItemsSource", b, this.t);
            }
        },
        enumerable: true,
        configurable: true
    });
    DataSourceLocalDataProvider.prototype.getItemAtIndex = function (a) {
        if (this.r == null) {
            return null;
        }
        if (this.m) {
            return this.r[a];
        }
        return this.r.item(a);
    };
    DataSourceLocalDataProvider.prototype.getItemValue = function (a, b) {
        this.y();
        var c;
        var d = this.o.tryGetValue(b, c);
        c = d.p1;
        if (c == null) {
            return null;
        }
        var val_ = c.getPropertyValue(a);
        if ((val_ === undefined)) {
            return null;
        }
        return val_;
    };
    DataSourceLocalDataProvider.prototype.y = function () {
        if (this.g == null) {
            this.g = this.actualSchema;
            if (this.schemaChanged != null) {
                this.schemaChanged(this, new DataSourceDataProviderSchemaChangedEventArgs(this.g, this.actualCount));
            }
        }
    };
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "actualCount", {
        get: function () {
            if (this.r == null) {
                return 0;
            }
            if (this.m) {
                return (this.r.length);
            }
            return this.r.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "actualSchema", {
        get: function () {
            if (this.g == null) {
                if (this.r == null) {
                    this.g = new DefaultDataSourceSchema([], [], null, null);
                }
                else {
                    this.g = this.h();
                }
            }
            return this.g;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceLocalDataProvider.prototype.h = function () {
        var a = this.u();
        if (a == null) {
            return new DefaultDataSourceSchema([], [], null, null);
        }
        this.o.clear();
        var b = new List$1(String_$type, 0);
        var c = new HashSet$1(String_$type, 0);
        var d = new List$1(DataSourceSchemaPropertyType_$type, 0);
        var e = new List$1(List$1.$.specialize(String_$type), 0);
        var f = this.p(a);
        for (var g = 0; g < f.count; g++) {
            var h = f._inner[g];
            if (stringStartsWith(h, "_")) {
                continue;
            }
            if (h == "$hashCode") {
                continue;
            }
            if (c.contains(h)) {
                continue;
            }
            else {
                b.add(h);
                c.add_1(h);
                this.o.addItem(h, new FastReflectionHelper(false, h));
                d.add(this.b(a, h));
                e.add(this.q(a, h));
            }
        }
        var i = new Array(e.count);
        for (var j = 0; j < e.count; j++) {
            i[j] = e._inner[j].toArray();
        }
        return new DefaultDataSourceSchema(b.toArray(), d.toArray(), null, i);
    };
    DataSourceLocalDataProvider.prototype.resolveSchemaPropertyType = function (a) {
        var b = a.split('.');
        if (b.length == 1) {
            for (var c = 0; c < this.actualSchema.propertyNames.length; c++) {
                if (this.actualSchema.propertyNames[c] == b[0]) {
                    return this.actualSchema.propertyTypes[c];
                }
            }
            return 11;
        }
        else {
            var d = this.u();
            var e = this.getItemValue(d, a);
            if (e == null) {
                return 11;
            }
            else {
                return DataSourceLocalDataProvider.c(e);
            }
        }
    };
    DataSourceLocalDataProvider.prototype.p = function (schemaItem_) {
        var propertyKey_ = null;
        var ret_ = new List$1(String_$type, 0);
        var exclusions_ = {};
        for (propertyKey_ in schemaItem_) {
            if (!isNaN(propertyKey_)) {
                continue;
            }
            if (!exclusions_.hasOwnProperty(propertyKey_)) {
                ret_.add(propertyKey_);
            }
        }
        ;
        return ret_;
    };
    DataSourceLocalDataProvider.prototype.aa = function (a, item_, propertyName_, b) {
        if ((item_.__dataIntents !== undefined)) {
            if ((item_.__dataIntents[propertyName_] !== undefined)) {
                this.z(a, item_, propertyName_);
            }
            var selfName_ = "self." + propertyName_;
            if (!b && (item_.__dataIntents[selfName_] !== undefined)) {
                this.z(a, item_, selfName_);
            }
            var selfName2_ = "self_" + propertyName_;
            if (!b && (item_.__dataIntents[selfName2_] !== undefined)) {
                this.z(a, item_, selfName2_);
            }
        }
    };
    DataSourceLocalDataProvider.prototype.z = function (a, item_, propertyName_) {
        var b = item_.__dataIntents[propertyName_];
        if (typeCast(Array_$type, b) !== null) {
            var c = b;
            for (var d = 0; d < c.length; d++) {
                if (c[d] != null) {
                    a.add(c[d].toString());
                }
            }
        }
    };
    DataSourceLocalDataProvider.prototype.q = function (item_, propertyName_) {
        var a = new List$1(String_$type, 0);
        var list_ = this.r;
        var dataIntents_ = null;
        this.aa(a, item_, propertyName_, false);
        this.aa(a, list_, propertyName_, true);
        return a;
    };
    DataSourceLocalDataProvider.prototype.b = function (item_, propertyName_) {
        if (item_ == null) {
            return 11;
        }
        if ((item_[propertyName_] == undefined)) {
            return 11;
        }
        var value_ = item_[propertyName_];
        return DataSourceLocalDataProvider.c(value_);
    };
    DataSourceLocalDataProvider.c = function (value_) {
        if (value_ == null) {
            return 11;
        }
        if ((typeof value_ == 'number')) {
            return 5;
        }
        if ((typeof value_ == 'boolean')) {
            return 2;
        }
        if ((typeof value_ == 'string')) {
            return 0;
        }
        if ((typeof value_ == 'object')) {
            if ((value_ instanceof Date)) {
                return 8;
            }
        }
        return 11;
    };
    DataSourceLocalDataProvider.prototype.u = function () {
        var a = 0;
        if (this.m) {
            a = (this.r.length);
        }
        else {
            a = this.r.count;
        }
        for (var b = 0; b < a; b++) {
            var c = void 0;
            if (this.m) {
                c = this.r[b];
            }
            else {
                c = this.r.item(b);
            }
            if (c != null) {
                return c;
            }
        }
        return null;
    };
    DataSourceLocalDataProvider.prototype.ab = function (a, b, c) {
        this.ac(a, b, c);
    };
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "s", {
        get: function () {
            return this.r;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceLocalDataProvider.prototype.ac = function (a, b, c) {
        switch (a) {
            case "ItemsSource":
                this.g = null;
                if (this.dataSource != null) {
                    this.m = false;
                    if (typeCast(Array_$type, this.dataSource) !== null) {
                        this.m = true;
                        this.r = this.dataSource;
                    }
                    else if (typeCast(IList_$type, this.dataSource) !== null) {
                        this.r = this.dataSource;
                    }
                }
                else {
                    this.r = null;
                }
                this.y();
                break;
            case "DeferAutoRefresh":
                if (!c) {
                    this.queueAutoRefresh();
                }
                break;
        }
    };
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "executionContext", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "n", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceLocalDataProvider.prototype.notifySetItem = function (a, b, c) {
        if (this.n) {
            if (this.m) {
                this.r[a] = c;
            }
            else {
                this.r.item(a, c);
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifySetItem(a, b, c);
        }
    };
    DataSourceLocalDataProvider.prototype.notifyClearItems = function () {
        if (this.n) {
            if (this.m) {
                this.r.length = 0;
            }
            else {
                this.r.clear();
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyClearItems();
        }
    };
    DataSourceLocalDataProvider.prototype.notifyInsertItem = function (a, b) {
        if (this.n) {
            if (this.m) {
                this.r.splice(a, 0, b);
            }
            else {
                this.r.insert(a, b);
            }
        }
        var c = 0;
        if (this.m) {
            c = (this.r.length);
        }
        else {
            c = this.r.count;
        }
        if (this.r != null && c == 1 && (this.actualSchema == null || this.actualSchema.propertyNames.length == 0)) {
            this.g = null;
            this.y();
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyInsertItem(a, b);
        }
    };
    DataSourceLocalDataProvider.prototype.notifyRemoveItem = function (a, b) {
        if (this.n) {
            if (this.m) {
                this.r.splice(a, 1);
            }
            else {
                this.r.remove(a);
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyRemoveItem(a, b);
        }
    };
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "updateNotifier", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "deferAutoRefresh", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            var b = this.l;
            this.l = a;
            if (this.l != b) {
                this.ab("DeferAutoRefresh", b, this.l);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "isSortingSupported", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "isFilteringSupported", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "sortDescriptions", {
        get: function () {
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "filterExpressions", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "notifyUsingSourceIndexes", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "propertiesRequested", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "isItemIndexLookupSupported", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "isKeyIndexLookupSupported", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "isGroupingSupported", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceLocalDataProvider.prototype, "groupDescriptions", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceLocalDataProvider.prototype.queueAutoRefresh = function () {
        if (this.deferAutoRefresh) {
            return;
        }
        if (this.k) {
            return;
        }
        if (this.executionContext != null) {
            this.k = true;
            this.executionContext.enqueueAction(runOn(this, this.x));
        }
    };
    DataSourceLocalDataProvider.prototype.x = function () {
        if (this.deferAutoRefresh) {
            this.k = false;
            return;
        }
        if (!this.k) {
            return;
        }
        this.k = false;
        this.ad();
    };
    DataSourceLocalDataProvider.prototype.ad = function () {
        this.ae();
    };
    DataSourceLocalDataProvider.prototype.ae = function () {
    };
    DataSourceLocalDataProvider.prototype.flushAutoRefresh = function () {
        this.x();
    };
    DataSourceLocalDataProvider.prototype.refresh = function () {
        this.ad();
    };
    DataSourceLocalDataProvider.prototype.indexOfItem = function (a) {
        if (this.r == null) {
            return -1;
        }
        return this.r.indexOf(a);
    };
    DataSourceLocalDataProvider.prototype.indexOfKey = function (a) {
        return -1;
    };
    DataSourceLocalDataProvider.$t = markType(DataSourceLocalDataProvider, 'DataSourceLocalDataProvider', Base.$, [IDataSourceLocalDataProvider_$type]);
    return DataSourceLocalDataProvider;
}(Base));
export { DataSourceLocalDataProvider };
//# sourceMappingURL=DataSourceLocalDataProvider.js.map
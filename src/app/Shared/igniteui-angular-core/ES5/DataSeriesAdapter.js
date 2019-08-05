/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Delegate_$type, runOn, delegateCombine, markType } from "./type";
import { IExternalDataSeriesAdapter_$type } from "./IExternalDataSeriesAdapter";
import { DataSeriesAdapterImplementation } from "./DataSeriesAdapterImplementation";
import { List$1 } from "./List$1";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
/**
 * @hidden
 */
var DataSeriesAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(DataSeriesAdapter, _super);
    function DataSeriesAdapter() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.f = new List$1(Delegate_$type, 0);
        _this.e = new DataSeriesAdapterImplementation();
        _this.e.r = _this;
        var a = _this.e.dataSeries;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(_this, _this.j));
        return _this;
    }
    DataSeriesAdapter.prototype.j = function (a, b) {
        for (var c = 0; c < this.f.count; c++) {
            this.f._inner[c](this, this.a());
        }
    };
    Object.defineProperty(DataSeriesAdapter.prototype, "i", {
        get: function () {
            return this.e.itemsSource;
        },
        set: function (a) {
            this.e.itemsSource = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSeriesAdapter.prototype.getDataProvider = function (a) {
        return ((function () {
            var $ret = new DataSourceLocalDataProvider();
            $ret.dataSource = a;
            return $ret;
        })());
    };
    DataSeriesAdapter.prototype.l = function (a) {
        this.f.add(a);
    };
    DataSeriesAdapter.prototype.x = function (a) {
        this.f.remove(a);
    };
    DataSeriesAdapter.prototype.k = function (a) {
        this.e.dataSeries.add(a);
    };
    DataSeriesAdapter.prototype.v = function (a) {
        this.e.dataSeries.remove(a);
    };
    DataSeriesAdapter.prototype.w = function (a) {
        this.e.dataSeries.removeAt(a);
    };
    DataSeriesAdapter.prototype.c = function (a) {
        return this.e.dataSeries._inner[a];
    };
    DataSeriesAdapter.prototype.a = function () {
        var a = new Array(this.e.dataSeries.count);
        for (var b = 0; b < this.e.dataSeries.count; b++) {
            a[b] = this.e.dataSeries._inner[b];
        }
        return a;
    };
    DataSeriesAdapter.prototype.n = function () {
        this.e.dataSeries.clear();
    };
    DataSeriesAdapter.prototype.p = function (a, b) {
        this.e.dataSeries.insert(a, b);
    };
    DataSeriesAdapter.prototype.g = function () {
        return this.e.dataSeries.count;
    };
    DataSeriesAdapter.prototype.m = function (a) {
        this.e.rules.add(a);
    };
    DataSeriesAdapter.prototype.y = function (a) {
        this.e.rules.remove(a);
    };
    DataSeriesAdapter.prototype.z = function (a) {
        this.e.rules.removeAt(a);
    };
    DataSeriesAdapter.prototype.d = function (a) {
        return this.e.rules._inner[a];
    };
    DataSeriesAdapter.prototype.o = function () {
        this.e.rules.clear();
    };
    DataSeriesAdapter.prototype.q = function (a, b) {
        this.e.rules.insert(a, b);
    };
    DataSeriesAdapter.prototype.h = function () {
        return this.e.rules.count;
    };
    DataSeriesAdapter.prototype.b = function () {
        var a = new Array(this.e.rules.count);
        for (var b = 0; b < this.e.rules.count; b++) {
            a[b] = this.e.rules._inner[b];
        }
        return a;
    };
    DataSeriesAdapter.prototype.r = function (a) {
        this.e.notifyClearItems(a);
    };
    DataSeriesAdapter.prototype.s = function (a, b, c) {
        this.e.notifyInsertItem(a, b, c);
    };
    DataSeriesAdapter.prototype.t = function (a, b, c) {
        this.e.notifyRemoveItem(a, b, c);
    };
    DataSeriesAdapter.prototype.u = function (a, b, c, d) {
        this.e.notifySetItem(a, b, c, d);
    };
    DataSeriesAdapter.$t = markType(DataSeriesAdapter, 'DataSeriesAdapter', Base.$, [IExternalDataSeriesAdapter_$type]);
    return DataSeriesAdapter;
}(Base));
export { DataSeriesAdapter };
//# sourceMappingURL=DataSeriesAdapter.js.map
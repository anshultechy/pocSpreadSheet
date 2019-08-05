/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount_$type } from "./IDataSourceSupportsCount";
import { Base, Type, markType } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
/**
 * @hidden
 */
export var IDataSourceDataProvider_$type = new Type(null, 'IDataSourceDataProvider', null, [ISupportsDataChangeNotifications_$type, IDataSourceSupportsCount_$type]);
/**
 * @hidden
 */
export var IFilterExpression_$type = new Type(null, 'IFilterExpression');
/**
 * @hidden
 */
var FilterExpressionCollection = /** @class */ (function (_super) {
    tslib_1.__extends(FilterExpressionCollection, _super);
    function FilterExpressionCollection() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.f = null;
        _this.f = new SyncableObservableCollection$1(IFilterExpression_$type);
        return _this;
    }
    Object.defineProperty(FilterExpressionCollection.prototype, "syncTarget", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            if (a == null) {
                this.f.syncTarget = null;
                this.a = null;
                return;
            }
            this.a = a;
            this.f.syncTarget = this.a.f;
        },
        enumerable: true,
        configurable: true
    });
    FilterExpressionCollection.prototype.add = function (a) {
        return this.f.add(a);
    };
    FilterExpressionCollection.prototype.insert = function (a, b) {
        this.f.add1(a, b);
    };
    FilterExpressionCollection.prototype.clear = function () {
        this.f.clear();
    };
    FilterExpressionCollection.prototype.get = function (a) {
        return this.f.get(a);
    };
    FilterExpressionCollection.prototype.indexOf = function (a) {
        return this.f.indexOf(a);
    };
    FilterExpressionCollection.prototype.remove = function (a) {
        return this.f.remove1(a);
    };
    FilterExpressionCollection.prototype.removeAt = function (a) {
        return this.f.remove(a);
    };
    FilterExpressionCollection.prototype.set = function (a, b) {
        return this.f.set(a, b);
    };
    FilterExpressionCollection.prototype.size = function () {
        return this.f.size();
    };
    Object.defineProperty(FilterExpressionCollection.prototype, "onChanged", {
        get: function () {
            return this.f.f;
        },
        set: function (a) {
            this.f.f = a;
        },
        enumerable: true,
        configurable: true
    });
    FilterExpressionCollection.prototype.m = function (a) {
        this.f.addListener(a);
    };
    FilterExpressionCollection.prototype.p = function (a) {
        this.f.removeListener(a);
    };
    Object.defineProperty(FilterExpressionCollection.prototype, "j", {
        get: function () {
            return this.f.all;
        },
        enumerable: true,
        configurable: true
    });
    FilterExpressionCollection.$t = markType(FilterExpressionCollection, 'FilterExpressionCollection');
    return FilterExpressionCollection;
}(Base));
export { FilterExpressionCollection };
//# sourceMappingURL=IDataSourceDataProvider_combined.js.map
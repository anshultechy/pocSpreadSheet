import { FilterExpressionCollection as FilterExpressionCollection_internal } from "./FilterExpressionCollection";
/**
 * Represents a colleciton of filter expressions.
*/
var FilterExpressionCollection = /** @class */ (function () {
    function FilterExpressionCollection() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    FilterExpressionCollection.prototype.createImplementation = function () {
        return new FilterExpressionCollection_internal();
    };
    Object.defineProperty(FilterExpressionCollection.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    FilterExpressionCollection.prototype.onImplementationCreated = function () {
    };
    FilterExpressionCollection.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(FilterExpressionCollection.prototype, "syncTarget", {
        get: function () {
            if (this.i.syncTarget == null) {
                return null;
            }
            if (!this.i.syncTarget.externalObject) {
                var e = new FilterExpressionCollection();
                e._implementation = this.i.syncTarget;
                this.i.syncTarget.externalObject = e;
            }
            return this.i.syncTarget.externalObject;
        },
        set: function (v) {
            v == null ? this.i.syncTarget = null : this.i.syncTarget = v.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterExpressionCollection.prototype, "onChanged", {
        get: function () {
            return this.i.onChanged;
        },
        set: function (v) {
            this.i.onChanged = v;
        },
        enumerable: true,
        configurable: true
    });
    FilterExpressionCollection.prototype.add = function (item) {
        var iv = this.i.add(item);
        return (iv);
    };
    FilterExpressionCollection.prototype.insert = function (index, item) {
        this.i.insert(index, item);
    };
    FilterExpressionCollection.prototype.clear = function () {
        this.i.clear();
    };
    FilterExpressionCollection.prototype.get = function (index) {
        var iv = this.i.get(index);
        return (iv);
    };
    FilterExpressionCollection.prototype.indexOf = function (item) {
        var iv = this.i.indexOf(item);
        return (iv);
    };
    FilterExpressionCollection.prototype.remove = function (item) {
        var iv = this.i.remove(item);
        return (iv);
    };
    FilterExpressionCollection.prototype.removeAt = function (index) {
        var iv = this.i.removeAt(index);
        return (iv);
    };
    FilterExpressionCollection.prototype.set = function (index, value) {
        var iv = this.i.set(index, value);
        return (iv);
    };
    FilterExpressionCollection.prototype.size = function () {
        var iv = this.i.size();
        return (iv);
    };
    return FilterExpressionCollection;
}());
export { FilterExpressionCollection };
//# sourceMappingURL=igx-filter-expression-collection.js.map
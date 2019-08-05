import * as tslib_1 from "tslib";
var IgCollection = /** @class */ (function () {
    function IgCollection() {
        this._isIgxCollection = true;
        this._inner = null;
        this._innerColl = null;
        this._innerColl = this._createInnerColl();
    }
    IgCollection.prototype.item = function (index, value) {
        if (this._innerColl != null) {
            return this._innerColl.get(index);
        }
        else {
            if (value) {
                var innerValue = null;
                if (value._implementation) {
                    innerValue = value._implementation;
                }
                else {
                    innerValue = value;
                }
                this._inner.item(index, innerValue);
                return value;
            }
            else {
                var item = this._inner.item(index);
                item = this._toExternal(item);
                return item;
            }
        }
    };
    IgCollection.prototype.indexOf = function (item) {
        if (this._innerColl != null) {
            return this._innerColl.indexOf(item);
        }
        else {
            var actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.indexOf(actualItem);
        }
    };
    IgCollection.prototype.insert = function (index, item) {
        if (this._innerColl != null) {
            this._innerColl.add1(index, item);
        }
        else {
            var actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            this._inner.insert(index, actualItem);
        }
    };
    IgCollection.prototype.removeAt = function (index) {
        if (this._innerColl != null) {
            this._innerColl.remove(index);
        }
        else {
            this._inner.removeAt(index);
        }
    };
    Object.defineProperty(IgCollection.prototype, "count", {
        get: function () {
            if (this._innerColl != null) {
                return this._innerColl.size();
            }
            else {
                return this._inner.count;
            }
        },
        enumerable: true,
        configurable: true
    });
    IgCollection.prototype.add = function (item) {
        if (this._innerColl != null) {
            this._innerColl.add(item);
        }
        else {
            var actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            this._inner.add(actualItem);
        }
    };
    IgCollection.prototype.clear = function () {
        if (this._innerColl != null) {
            this._innerColl.clear();
        }
        else {
            this._inner.clear();
        }
    };
    IgCollection.prototype.contains = function (item) {
        if (this._innerColl != null) {
            return this._innerColl.all.contains(item);
        }
        else {
            var actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.contains(actualItem);
        }
    };
    IgCollection.prototype.remove = function (item) {
        if (this._innerColl != null) {
            return this._innerColl.remove1(item);
        }
        else {
            var actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.remove(actualItem);
        }
    };
    IgCollection.prototype.toArray = function () {
        var arr = [];
        for (var i = 0; i < this.count; i++) {
            arr[i] = this.item(i);
        }
        return arr;
    };
    IgCollection.prototype[Symbol.iterator] = function () {
        var i, item;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < this.count)) return [3 /*break*/, 4];
                    item = this.item(i);
                    return [4 /*yield*/, item];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    IgCollection.prototype._setSyncTarget = function (list) {
        if (this._innerColl != null) {
            this._innerColl.syncTarget = list;
        }
    };
    IgCollection.prototype._fromInner = function (inner) {
        this._inner = inner;
        if (this._innerColl) {
            this._createFrom = this._innerColl.createFrom;
            this._createTo = this._innerColl.createTo;
        }
        this._innerColl = null;
        return this;
    };
    IgCollection.prototype._toExternal = function (item) {
        if (!item) {
            return null;
        }
        var ext = item.externalObject;
        if (ext) {
            return ext;
        }
        if (this._createFrom) {
            ext = this._createFrom(item);
        }
        if (!ext) {
            return item;
        }
        return ext;
    };
    IgCollection.prototype._ensureOuter = function (item) {
        return item;
    };
    IgCollection.prototype._splitOuter = function (item) {
        if (item == null) {
            return [];
        }
        if (item.indexOf(",") == -1) {
            return [item];
        }
        var parts = item.split(",");
        for (var i = 0; i < parts.length; i++) {
            if (parts[i]) {
                parts[i] = parts[i].trim();
            }
        }
        return parts;
    };
    IgCollection.prototype._fromOuter = function (outer) {
        if (outer._isIgxCollection) {
            return outer;
        }
        if (Array.isArray(outer)) {
            for (var i = 0; i < outer.length; i++) {
                this.add(this._ensureOuter(outer[i]));
            }
            return this;
        }
        var split = this._splitOuter(outer);
        for (var i = 0; i < split.length; i++) {
            this.add(this._ensureOuter(split[i]));
        }
        return this;
    };
    return IgCollection;
}());
export { IgCollection };
//# sourceMappingURL=IgCollection.js.map
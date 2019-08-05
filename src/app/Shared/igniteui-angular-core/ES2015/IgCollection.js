export class IgCollection {
    constructor() {
        this._isIgxCollection = true;
        this._inner = null;
        this._innerColl = null;
        this._innerColl = this._createInnerColl();
    }
    item(index, value) {
        if (this._innerColl != null) {
            return this._innerColl.get(index);
        }
        else {
            if (value) {
                let innerValue = null;
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
                let item = this._inner.item(index);
                item = this._toExternal(item);
                return item;
            }
        }
    }
    indexOf(item) {
        if (this._innerColl != null) {
            return this._innerColl.indexOf(item);
        }
        else {
            let actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.indexOf(actualItem);
        }
    }
    insert(index, item) {
        if (this._innerColl != null) {
            this._innerColl.add1(index, item);
        }
        else {
            let actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            this._inner.insert(index, actualItem);
        }
    }
    removeAt(index) {
        if (this._innerColl != null) {
            this._innerColl.remove(index);
        }
        else {
            this._inner.removeAt(index);
        }
    }
    get count() {
        if (this._innerColl != null) {
            return this._innerColl.size();
        }
        else {
            return this._inner.count;
        }
    }
    add(item) {
        if (this._innerColl != null) {
            this._innerColl.add(item);
        }
        else {
            let actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            this._inner.add(actualItem);
        }
    }
    clear() {
        if (this._innerColl != null) {
            this._innerColl.clear();
        }
        else {
            this._inner.clear();
        }
    }
    contains(item) {
        if (this._innerColl != null) {
            return this._innerColl.all.contains(item);
        }
        else {
            let actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.contains(actualItem);
        }
    }
    remove(item) {
        if (this._innerColl != null) {
            return this._innerColl.remove1(item);
        }
        else {
            let actualItem = item;
            if (actualItem._implementation) {
                actualItem = actualItem._implementation;
            }
            return this._inner.remove(actualItem);
        }
    }
    toArray() {
        let arr = [];
        for (let i = 0; i < this.count; i++) {
            arr[i] = this.item(i);
        }
        return arr;
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.count; i++) {
            let item = this.item(i);
            yield item;
        }
    }
    _setSyncTarget(list) {
        if (this._innerColl != null) {
            this._innerColl.syncTarget = list;
        }
    }
    _fromInner(inner) {
        this._inner = inner;
        if (this._innerColl) {
            this._createFrom = this._innerColl.createFrom;
            this._createTo = this._innerColl.createTo;
        }
        this._innerColl = null;
        return this;
    }
    _toExternal(item) {
        if (!item) {
            return null;
        }
        let ext = item.externalObject;
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
    }
    _ensureOuter(item) {
        return item;
    }
    _splitOuter(item) {
        if (item == null) {
            return [];
        }
        if (item.indexOf(",") == -1) {
            return [item];
        }
        let parts = item.split(",");
        for (let i = 0; i < parts.length; i++) {
            if (parts[i]) {
                parts[i] = parts[i].trim();
            }
        }
        return parts;
    }
    _fromOuter(outer) {
        if (outer._isIgxCollection) {
            return outer;
        }
        if (Array.isArray(outer)) {
            for (let i = 0; i < outer.length; i++) {
                this.add(this._ensureOuter(outer[i]));
            }
            return this;
        }
        let split = this._splitOuter(outer);
        for (let i = 0; i < split.length; i++) {
            this.add(this._ensureOuter(split[i]));
        }
        return this;
    }
}
//# sourceMappingURL=IgCollection.js.map
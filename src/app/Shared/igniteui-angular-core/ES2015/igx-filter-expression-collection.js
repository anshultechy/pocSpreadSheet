import { FilterExpressionCollection as FilterExpressionCollection_internal } from "./FilterExpressionCollection";
/**
 * Represents a colleciton of filter expressions.
*/
export class FilterExpressionCollection {
    createImplementation() {
        return new FilterExpressionCollection_internal();
    }
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    get syncTarget() {
        if (this.i.syncTarget == null) {
            return null;
        }
        if (!this.i.syncTarget.externalObject) {
            let e = new FilterExpressionCollection();
            e._implementation = this.i.syncTarget;
            this.i.syncTarget.externalObject = e;
        }
        return this.i.syncTarget.externalObject;
    }
    set syncTarget(v) {
        v == null ? this.i.syncTarget = null : this.i.syncTarget = v.i;
    }
    get onChanged() {
        return this.i.onChanged;
    }
    set onChanged(v) {
        this.i.onChanged = v;
    }
    add(item) {
        let iv = this.i.add(item);
        return (iv);
    }
    insert(index, item) {
        this.i.insert(index, item);
    }
    clear() {
        this.i.clear();
    }
    get(index) {
        let iv = this.i.get(index);
        return (iv);
    }
    indexOf(item) {
        let iv = this.i.indexOf(item);
        return (iv);
    }
    remove(item) {
        let iv = this.i.remove(item);
        return (iv);
    }
    removeAt(index) {
        let iv = this.i.removeAt(index);
        return (iv);
    }
    set(index, value) {
        let iv = this.i.set(index, value);
        return (iv);
    }
    size() {
        let iv = this.i.size();
        return (iv);
    }
}
//# sourceMappingURL=igx-filter-expression-collection.js.map
import { DataContext as DataContext_internal } from "../../igniteui-angular-core/ES2015/DataContext";
import { brushToString, stringToBrush } from "../../igniteui-angular-core/ES2015/componentUtil";
export class DataContext {
    createImplementation() {
        return new DataContext_internal();
    }
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
    get series() {
        return this.i.series.externalObject;
    }
    set series(v) {
        if (v == null) {
            this.i.series = null;
            return;
        }
        this.i.series = v.i;
    }
    /**
 * Gets the item that is in context.
*/
    get item() {
        return this.i.item;
    }
    set item(v) {
        this.i.item = v;
    }
    /**
     * Gets the actual resolved brush in use for the item that is in context.
    */
    get actualItemBrush() {
        return brushToString(this.i.actualItemBrush);
    }
    set actualItemBrush(v) {
        this.i.actualItemBrush = stringToBrush(v);
    }
    /**
     * Gets the outline in use for the item in context.
    */
    get outline() {
        return brushToString(this.i.outline);
    }
    set outline(v) {
        this.i.outline = stringToBrush(v);
    }
    /**
     * Gets the label in use for the item in context, if available.
    */
    get itemLabel() {
        return this.i.itemLabel;
    }
    set itemLabel(v) {
        this.i.itemLabel = v;
    }
    /**
     * Gets the potential brush in usage for the item in context.
    */
    get itemBrush() {
        return brushToString(this.i.itemBrush);
    }
    set itemBrush(v) {
        this.i.itemBrush = stringToBrush(v);
    }
    /**
     * Gets the thickness of the item in context.
    */
    get thickness() {
        return this.i.thickness;
    }
    set thickness(v) {
        this.i.thickness = +v;
    }
    /**
     * Gets the legend label to use for the item in context, if available.
    */
    get legendLabel() {
        return this.i.legendLabel;
    }
    set legendLabel(v) {
        this.i.legendLabel = v;
    }
}
//# sourceMappingURL=igx-data-context.js.map
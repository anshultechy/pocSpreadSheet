import { DataContext as DataContext_internal } from "../../igniteui-angular-core/ES5/DataContext";
import { brushToString, stringToBrush } from "../../igniteui-angular-core/ES5/componentUtil";
var DataContext = /** @class */ (function () {
    function DataContext() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    DataContext.prototype.createImplementation = function () {
        return new DataContext_internal();
    };
    Object.defineProperty(DataContext.prototype, "i", {
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    DataContext.prototype.onImplementationCreated = function () {
    };
    Object.defineProperty(DataContext.prototype, "series", {
        get: function () {
            return this.i.series.externalObject;
        },
        set: function (v) {
            if (v == null) {
                this.i.series = null;
                return;
            }
            this.i.series = v.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "item", {
        /**
     * Gets the item that is in context.
    */
        get: function () {
            return this.i.item;
        },
        set: function (v) {
            this.i.item = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "actualItemBrush", {
        /**
         * Gets the actual resolved brush in use for the item that is in context.
        */
        get: function () {
            return brushToString(this.i.actualItemBrush);
        },
        set: function (v) {
            this.i.actualItemBrush = stringToBrush(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "outline", {
        /**
         * Gets the outline in use for the item in context.
        */
        get: function () {
            return brushToString(this.i.outline);
        },
        set: function (v) {
            this.i.outline = stringToBrush(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "itemLabel", {
        /**
         * Gets the label in use for the item in context, if available.
        */
        get: function () {
            return this.i.itemLabel;
        },
        set: function (v) {
            this.i.itemLabel = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "itemBrush", {
        /**
         * Gets the potential brush in usage for the item in context.
        */
        get: function () {
            return brushToString(this.i.itemBrush);
        },
        set: function (v) {
            this.i.itemBrush = stringToBrush(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "thickness", {
        /**
         * Gets the thickness of the item in context.
        */
        get: function () {
            return this.i.thickness;
        },
        set: function (v) {
            this.i.thickness = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "legendLabel", {
        /**
         * Gets the legend label to use for the item in context, if available.
        */
        get: function () {
            return this.i.legendLabel;
        },
        set: function (v) {
            this.i.legendLabel = v;
        },
        enumerable: true,
        configurable: true
    });
    return DataContext;
}());
export { DataContext };
//# sourceMappingURL=igx-data-context.js.map

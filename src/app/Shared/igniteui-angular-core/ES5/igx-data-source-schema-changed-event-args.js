/**
 * Provides information about a schema change event that has occurred.
*/
var DataSourceSchemaChangedEventArgs = /** @class */ (function () {
    function DataSourceSchemaChangedEventArgs() {
    }
    Object.defineProperty(DataSourceSchemaChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceSchemaChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    DataSourceSchemaChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(DataSourceSchemaChangedEventArgs.prototype, "schema", {
        /**
         * Gets the new schema that has been provided.
        */
        get: function () {
            return this.i.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceSchemaChangedEventArgs.prototype, "count", {
        /**
         * Gets the current full count of items in the data source.
        */
        get: function () {
            return this.i.count;
        },
        enumerable: true,
        configurable: true
    });
    return DataSourceSchemaChangedEventArgs;
}());
export { DataSourceSchemaChangedEventArgs };
//# sourceMappingURL=igx-data-source-schema-changed-event-args.js.map
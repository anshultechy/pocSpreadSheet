/**
 * Provides information about a schema change event.
*/
var DataSourceDataProviderSchemaChangedEventArgs = /** @class */ (function () {
    function DataSourceDataProviderSchemaChangedEventArgs() {
    }
    Object.defineProperty(DataSourceDataProviderSchemaChangedEventArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceDataProviderSchemaChangedEventArgs.prototype.onImplementationCreated = function () {
    };
    DataSourceDataProviderSchemaChangedEventArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(DataSourceDataProviderSchemaChangedEventArgs.prototype, "schema", {
        /**
         * Represents the current schema for the data provider.
        */
        get: function () {
            return this.i.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceDataProviderSchemaChangedEventArgs.prototype, "count", {
        /**
         * Represents the current full count for the data provider. May be -1 if this information is not available yet.
        */
        get: function () {
            return this.i.count;
        },
        enumerable: true,
        configurable: true
    });
    return DataSourceDataProviderSchemaChangedEventArgs;
}());
export { DataSourceDataProviderSchemaChangedEventArgs };
//# sourceMappingURL=igx-data-source-data-provider-schema-changed-event-args.js.map
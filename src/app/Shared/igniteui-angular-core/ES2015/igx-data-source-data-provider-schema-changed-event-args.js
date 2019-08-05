/**
 * Provides information about a schema change event.
*/
export class DataSourceDataProviderSchemaChangedEventArgs {
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Represents the current schema for the data provider.
    */
    get schema() {
        return this.i.schema;
    }
    /**
     * Represents the current full count for the data provider. May be -1 if this information is not available yet.
    */
    get count() {
        return this.i.count;
    }
}
//# sourceMappingURL=igx-data-source-data-provider-schema-changed-event-args.js.map
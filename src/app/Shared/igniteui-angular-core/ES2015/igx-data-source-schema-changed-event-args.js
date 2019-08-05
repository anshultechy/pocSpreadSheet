/**
 * Provides information about a schema change event that has occurred.
*/
export class DataSourceSchemaChangedEventArgs {
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
     * Gets the new schema that has been provided.
    */
    get schema() {
        return this.i.schema;
    }
    /**
     * Gets the current full count of items in the data source.
    */
    get count() {
        return this.i.count;
    }
}
//# sourceMappingURL=igx-data-source-schema-changed-event-args.js.map
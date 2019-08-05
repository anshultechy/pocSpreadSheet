/**
 * EventArgs class for property updated events.
*/
export class PropertyUpdatedEventArgs {
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
     * Name of the property being updated.
    */
    get propertyName() {
        return this.i.propertyName;
    }
    set propertyName(v) {
        this.i.propertyName = v;
    }
    /**
     * Old or previous value of the property being updated.
    */
    get oldValue() {
        return this.i.oldValue;
    }
    set oldValue(v) {
        this.i.oldValue = v;
    }
    /**
     * New or current value of the property being updated.
    */
    get newValue() {
        return this.i.newValue;
    }
    set newValue(v) {
        this.i.newValue = v;
    }
}
//# sourceMappingURL=igx-property-updated-event-args.js.map
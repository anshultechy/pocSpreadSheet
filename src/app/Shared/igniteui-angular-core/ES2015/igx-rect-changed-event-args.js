import { fromRect, toRect } from "./componentUtil";
/**
 * Provides data for rectangle changed events.
*/
export class RectChangedEventArgs {
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
     * Gets the rectangle before the change.
    */
    get oldRect() {
        return fromRect(this.i.oldRect);
    }
    set oldRect(v) {
        this.i.oldRect = toRect(v);
    }
    /**
     * Gets the new rectangle.
    */
    get newRect() {
        return fromRect(this.i.newRect);
    }
    set newRect(v) {
        this.i.newRect = toRect(v);
    }
}
//# sourceMappingURL=igx-rect-changed-event-args.js.map
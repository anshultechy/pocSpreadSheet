import { Style as Style_internal } from "./Style";
/**
 * A class that exposes style realted properties.
*/
export class Style {
    createImplementation() {
        return new Style_internal();
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
}
//# sourceMappingURL=igx-style.js.map
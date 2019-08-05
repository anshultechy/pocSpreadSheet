import { Style as Style_internal } from "./Style";
/**
 * A class that exposes style realted properties.
*/
export declare class Style {
    protected createImplementation(): Style_internal;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: Style_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
}

import { CancellingMultiScaleImageEventArgs as CancellingMultiScaleImageEventArgs_internal } from "./CancellingMultiScaleImageEventArgs";
export declare class CancellingMultiScaleImageEventArgs {
    protected createImplementation(): CancellingMultiScaleImageEventArgs_internal;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: CancellingMultiScaleImageEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    uri: string;
}

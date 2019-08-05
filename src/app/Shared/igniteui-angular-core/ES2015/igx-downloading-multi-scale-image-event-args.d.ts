import { DownloadingMultiScaleImageEventArgs as DownloadingMultiScaleImageEventArgs_internal } from "./DownloadingMultiScaleImageEventArgs";
export declare class DownloadingMultiScaleImageEventArgs {
    protected createImplementation(): DownloadingMultiScaleImageEventArgs_internal;
    protected _implementation: any;
    readonly i: DownloadingMultiScaleImageEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    image: HTMLImageElement;
    uri: string;
}
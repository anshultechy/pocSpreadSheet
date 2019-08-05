import { IgxGridForOfDirective } from './for_of.directive';
export declare class IgxForOfSyncService {
    private _master;
    /**
     * @hidden
     */
    isMaster(directive: IgxGridForOfDirective<any>): boolean;
    /**
     * @hidden
     */
    setMaster(directive: IgxGridForOfDirective<any>, forced?: boolean): void;
    /**
     * @hidden
     */
    resetMaster(): void;
    /**
     * @hidden
     */
    sizesCache(dir: string): number[];
    /**
     * @hidden
     */
    chunkSize(dir: string): number;
}
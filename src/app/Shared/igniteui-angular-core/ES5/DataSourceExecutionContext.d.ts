import { Base, Type } from "./type";
import { IDataSourceExecutionContext } from "./IDataSourceExecutionContext";
/**
 * @hidden
 */
export declare class DataSourceExecutionContext extends Base implements IDataSourceExecutionContext {
    static $t: Type;
    private _requestAnimationFrame;
    private requestAnimationFrame;
    constructor();
    enqueueAction(a: () => void): void;
    execute(a: () => void): void;
    executeDelayed(a: () => void, b: number): void;
}
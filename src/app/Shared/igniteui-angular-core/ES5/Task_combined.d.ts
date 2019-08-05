import { Base, BaseError, Type } from "./type";
import { PromiseWrapper, PromiseFactory } from "./promise";
import { AggregateException } from "./AggregateException";
import { TaskStatus } from "./TaskStatus";
/**
 * @hidden
 */
export declare class Task extends Base {
    static $t: Type;
    c: PromiseWrapper;
    b: boolean;
    a: AggregateException;
    constructor(a: number, b: PromiseWrapper);
    constructor(a: number, b: PromiseWrapper, c: any);
    constructor(a: number, ..._rest: any[]);
    readonly g: TaskStatus;
    d: any;
    e(a: (arg1: Task) => void): Task;
    f<TNewResult>($tNewResult: Type, a: (arg1: Task) => TNewResult): Task$1<TNewResult>;
}
/**
 * @hidden
 */
export declare class Task$1<TResult> extends Task {
    static $t: Type;
    protected $tResult: Type;
    constructor($tResult: Type, a: PromiseWrapper, b: any);
    private h;
    private l;
    readonly m: TResult;
    i(a: (arg1: Task$1<TResult>) => void): Task;
    j<TNewResult>($tNewResult: Type, a: (arg1: Task$1<TResult>) => TNewResult): Task$1<TNewResult>;
    private k;
}
/**
 * @hidden
 */
export declare class TaskCompletionSource$1<TResult> extends Base {
    static $t: Type;
    protected $tResult: Type;
    a: PromiseFactory;
    constructor($tResult: Type, a: number);
    constructor($tResult: Type, a: number, b: any);
    constructor($tResult: Type, a: number, ..._rest: any[]);
    c(): void;
    d(a: BaseError): void;
    e(a: TResult): void;
    b: Task$1<TResult>;
}
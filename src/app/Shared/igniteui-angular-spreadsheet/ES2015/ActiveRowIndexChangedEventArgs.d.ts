import { EventArgs, Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class ActiveRowIndexChangedEventArgs extends EventArgs {
    static $t: Type;
    private _d;
    private _b;
    constructor(a: Nullable$1<number>, b: Nullable$1<number>);
    readonly _oldActiveRowIndex: Nullable$1<number>;
    readonly _newActiveRowIndex: Nullable$1<number>;
}

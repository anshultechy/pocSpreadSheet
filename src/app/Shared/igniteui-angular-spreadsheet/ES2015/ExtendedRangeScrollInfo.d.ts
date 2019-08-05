import { ScrollInfo } from "./ScrollInfo";
import { Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class ExtendedRangeScrollInfo extends ScrollInfo {
    static $t: Type;
    private _av;
    private _aw;
    _aq(a: number): void;
    readonly _at: boolean;
    readonly _ax: Nullable$1<number>;
    _ay(): void;
    _az(a: number): void;
    _a0(a?: Nullable$1<number>): void;
    protected abstract _au(a: number): number;
}

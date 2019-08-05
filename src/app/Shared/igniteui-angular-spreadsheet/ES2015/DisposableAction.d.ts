import { Base, IDisposable, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class DisposableAction extends Base implements IDisposable {
    static $t: Type;
    private _a;
    constructor(a: () => void);
    dispose(): void;
    _c(): void;
    readonly _b: boolean;
}

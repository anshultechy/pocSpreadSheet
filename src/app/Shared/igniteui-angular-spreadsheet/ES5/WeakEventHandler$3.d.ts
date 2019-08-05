import { Base, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class WeakEventHandler$3<TInstance, TEventSource, TEventArgs> extends Base {
    static $t: Type;
    protected $tInstance: Type;
    protected $tEventSource: Type;
    protected $tEventArgs: Type;
    private readonly h;
    private readonly g;
    constructor($tInstance: Type, $tEventSource: Type, $tEventArgs: Type, a: TInstance, b: TEventSource, c: (arg1: TInstance, arg2: any, arg3: TEventArgs) => void, d: (arg1: WeakEventHandler$3<TInstance, TEventSource, TEventArgs>, arg2: TEventSource) => void);
    readonly a: TEventSource;
    readonly b: TInstance;
    private d;
    private c;
    f(a: any, b: TEventArgs): void;
    e(): void;
}

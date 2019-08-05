import { Base, IList$1, IEnumerable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISupportPositioning } from "./ISupportPositioning";
/**
 * @hidden
 */
export declare class PositionOrderHelper$1<TChild> extends Base {
    static $t: Type;
    protected $tChild: Type;
    private a;
    private b;
    private d;
    private e;
    constructor($tChild: Type, a: IList$1<TChild>, b: (arg1: TChild) => ISupportPositioning);
    private f;
    c(): IEnumerable$1<TChild>;
}

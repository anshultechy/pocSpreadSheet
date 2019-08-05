import { Base, IList$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IComparer$1 } from "../../igniteui-angular-core/ES5/IComparer$1";
import { ISupportPositioning } from "./ISupportPositioning";
/**
 * @hidden
 */
export declare class PositionOrderHelper_DefaultMeasureComparer$1<TChild> extends Base implements IComparer$1<ISupportPositioning> {
    static $t: Type;
    protected $tChild: Type;
    private _a;
    constructor($tChild: Type, a: IList$1<ISupportPositioning>);
    compare(a: ISupportPositioning, b: ISupportPositioning): number;
}

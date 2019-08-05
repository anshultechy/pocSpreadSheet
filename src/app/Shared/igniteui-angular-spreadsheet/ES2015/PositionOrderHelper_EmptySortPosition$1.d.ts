import { Base, IEnumerable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { ISupportPositioning } from "./ISupportPositioning";
/**
 * @hidden
 */
export declare class PositionOrderHelper_EmptySortPosition$1<TChild> extends Base implements ISupportPositioning {
    static $t: Type;
    protected $tChild: Type;
    constructor($tChild: Type);
    readonly after: IEnumerable$1<string>;
    readonly before: IEnumerable$1<string>;
    readonly key: string;
}

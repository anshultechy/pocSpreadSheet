import { ElementLayer } from "./ElementLayer";
import { IElementLayerView } from "./IElementLayerView";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class ElementLayer$1<TViewModel> extends ElementLayer {
    static $t: Type;
    protected $tViewModel: Type;
    private readonly _i;
    constructor($tViewModel: Type, a: TViewModel, b: IElementLayerView, c: ElementLayerInfo);
    readonly _j: TViewModel;
}

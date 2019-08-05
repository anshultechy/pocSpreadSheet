import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { IElementLayerContainer$1 } from "./IElementLayerContainer$1";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ElementLayer$1 } from "./ElementLayer$1";
import { ElementLayerInfo } from "./ElementLayerInfo";
/**
 * @hidden
 */
export declare class ElementLayerManager$1<TViewModel> extends Base {
    static $t: Type;
    protected $tViewModel: Type;
    private readonly b;
    private readonly g;
    private e;
    private c;
    private f;
    constructor($tViewModel: Type, a: TViewModel, b: (arg1: TViewModel) => List$1<ElementLayer$1<TViewModel>>);
    readonly d: IElementLayerContainer$1<TViewModel>;
    a(a: ElementLayerInfo): ElementLayer$1<TViewModel>;
    k(a?: (arg1: ElementLayerInfo) => boolean): void;
    i(a: IElementLayerContainer$1<TViewModel>): void;
    private h;
    private j;
}

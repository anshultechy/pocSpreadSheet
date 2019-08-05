import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { IgSize } from "../../igniteui-angular-core/ES2015/IgSize";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export interface ILayerRenderer {
    onUnloaded(): void;
    invalidateLayout(): void;
    invalidateRender(): void;
    measure(availableSize: IgSize): void;
    _measure$i(a: Size): void;
    arrange(finalSize: IgSize): void;
    _arrange$i(a: Size): void;
}
/**
 * @hidden
 */
export declare let ILayerRenderer_$type: Type;

import { Size } from "../../igniteui-angular-core/ES5/Size";
import { IgSize } from "../../igniteui-angular-core/ES5/IgSize";
import { Type } from "../../igniteui-angular-core/ES5/type";
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

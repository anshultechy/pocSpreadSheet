import { CanvasGestureDOMEventProxy } from "../../igniteui-angular-core/ES5/CanvasGestureDOMEventProxy";
import { Type } from "../../igniteui-angular-core/ES5/type";
import { NormalizedEvent, DomWrapper, DomRenderer } from "../../igniteui-angular-core/ES5/dom";
/**
 * @hidden
 */
export declare class CustomDOMEventProxy extends CanvasGestureDOMEventProxy {
    static $t: Type;
    constructor(a: DomWrapper, b: DomRenderer, c: boolean);
    _dz: (arg1: NormalizedEvent) => boolean;
    protected cl(a: NormalizedEvent): void;
    protected cm(a: NormalizedEvent): void;
}

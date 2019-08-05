import { Base, IDisposable, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class RendererContainer extends Base implements IDisposable {
    static $t: Type;
    private _f;
    private _a;
    constructor(a: () => void);
    dispose(): void;
    private _onReady;
    onReady: () => void;
    private _isDisposed;
    isDisposed: boolean;
    private _isReady;
    isReady: boolean;
    private _container;
    container: any;
    private _e;
    containerElement: HTMLElement;
    initialize(a: any, b: HTMLElement): void;
}

import { SpreadsheetPaneLayerObserver } from "./SpreadsheetPaneLayerObserver";
import { SpreadsheetPane } from "./SpreadsheetPane";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class PaneBackgroundLayerObserver extends SpreadsheetPaneLayerObserver {
    static $t: Type;
    private _g;
    constructor(a: SpreadsheetPane, b: () => void);
    protected _d(a: any, b: string, c: any): void;
    dispose(): void;
}

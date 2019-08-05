import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { SpreadsheetCursor } from "./SpreadsheetCursor";
import { SpreadsheetToolTipContext } from "./SpreadsheetToolTipContext";
import { IgRect } from "../../igniteui-angular-core/ES2015/IgRect";
import { IgSize } from "../../igniteui-angular-core/ES2015/IgSize";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export interface ISpreadsheetInteractionManagerOwner {
    focusControlIfNeeded(): void;
    getRelativeSpreadsheetControlBounds(): IgRect;
    _getRelativeSpreadsheetControlBounds$i(): Rect;
    getLayerContainerSize(): IgSize;
    _getLayerContainerSize$i(): Size;
    hideToolTip(): void;
    isMouseOver(): boolean;
    isToolTipAllowed(): boolean;
    onCursorChanged(a: SpreadsheetCursor): void;
    showToolTip(a: SpreadsheetToolTipContext): void;
}
/**
 * @hidden
 */
export declare let ISpreadsheetInteractionManagerOwner_$type: Type;

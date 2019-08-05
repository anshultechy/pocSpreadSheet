import { ElementRef } from '@angular/core';
import { IgxGridBaseComponent } from './grid-base.component';
/** @hidden */
export declare class IgxRowEditTemplateDirective {
}
/** @hidden */
export declare class IgxRowEditTextDirective {
}
/** @hidden */
export declare class IgxRowEditActionsDirective {
}
/** @hidden */
export declare class IgxRowEditTabStopDirective {
    private grid;
    element: ElementRef;
    private currentCellIndex;
    private readonly allTabs;
    constructor(grid: IgxGridBaseComponent, element: ElementRef);
    handleTab(event: KeyboardEvent): void;
    handleEscape(event: KeyboardEvent): void;
    /**
     * Moves focus to first/last editable cell in the editable row and put the cell in edit mode.
     * If cell is out of view first scrolls to the cell
     * @param event keyboard event containing information about whether SHIFT key was pressed
     */
    private move;
    /**
     * Sets the cell in edit mode and focus its native element
     * @param cellIndex index of the cell to activate
     */
    private activateCell;
}

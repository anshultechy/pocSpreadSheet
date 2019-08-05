import { ElementRef } from '@angular/core';
import { IgxSummaryResult } from './grid-summary';
import { IgxColumnComponent } from '../column.component';
import { DataType } from '../../data-operations/data-util';
import { IgxGridSelectionService, ISelectionNode } from '../../core/grid-selection';
export declare class IgxSummaryCellComponent {
    private element;
    private selectionService;
    summaryResults: IgxSummaryResult[];
    column: IgxColumnComponent;
    firstCellIndentation: number;
    hasSummary: boolean;
    density: any;
    constructor(element: ElementRef, selectionService: IgxGridSelectionService);
    rowIndex: number;
    readonly visibleColumnIndex: number;
    tabindex: number;
    readonly describeby: string;
    focused: boolean;
    onFocus(): void;
    onBlur(): void;
    protected readonly selectionNode: ISelectionNode;
    dispatchEvent(event: KeyboardEvent): void;
    readonly width: string;
    readonly nativeElement: any;
    readonly columnDatatype: DataType;
    readonly itemHeight: number;
    /**
    * @hidden
    */
    readonly grid: any;
    private getRowElementByIndex;
    private isKeySupportedInCell;
    translateSummary(summary: IgxSummaryResult): string;
}
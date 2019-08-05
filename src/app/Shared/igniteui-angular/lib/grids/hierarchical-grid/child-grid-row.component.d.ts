import { ChangeDetectorRef, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { IgxSelectionAPIService } from '../../core/selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxRowIslandComponent } from './row-island.component';
export declare class IgxChildGridRowComponent implements AfterViewInit, OnInit {
    gridAPI: GridBaseAPIService<any>;
    private selectionAPI;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    /**
 * Returns whether the row is expanded.
 * ```typescript
 * const RowExpanded = this.grid1.rowList.first.expanded;
 * ```
 */
    expanded: boolean;
    layout: IgxRowIslandComponent;
    /**
     * @hidden
     */
    readonly parentHasScroll: boolean;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    parentGridID: string;
    /**
     *  The data passed to the row component.
     *
     * ```typescript
     * // get the row data for the first selected row
     * let selectedRowData = this.grid.selectedRows[0].rowData;
     * ```
     */
    rowData: any;
    /**
     * The index of the row.
     *
     * ```typescript
     * // get the index of the second selected row
     * let selectedRowIndex = this.grid.selectedRows[1].index;
     * ```
     */
    index: number;
    private hGrid;
    /**
     * @hidden
     */
    tabindex: number;
    /**
     * @hidden
     */
    role: string;
    /**
     * Get a reference to the grid that contains the selected row.
     *
     * ```typescript
     * handleRowSelection(event) {
     *  // the grid on which the onRowSelectionChange event was triggered
     *  const grid = event.row.grid;
     * }
     * ```
     *
     * ```html
     *  <igx-grid
     *    [data]="data"
     *    (onRowSelectionChange)="handleRowSelection($event)">
     *  </igx-grid>
     * ```
     */
    readonly parentGrid: any;
    readonly level: number;
    /**
     * The native DOM element representing the row. Could be null in certain environments.
     *
     * ```typescript
     * // get the nativeElement of the second selected row
     * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
     * ```
     */
    readonly nativeElement: any;
    constructor(gridAPI: GridBaseAPIService<any>, selectionAPI: IgxSelectionAPIService, element: ElementRef, cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    private _handleLayoutChanges;
}
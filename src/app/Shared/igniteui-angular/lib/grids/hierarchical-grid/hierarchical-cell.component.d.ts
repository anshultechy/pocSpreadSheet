import { IgxGridCellComponent } from '../cell.component';
import { GridBaseAPIService } from '../api.service';
import { ChangeDetectorRef, ElementRef, OnInit, NgZone } from '@angular/core';
import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export declare class IgxHierarchicalGridCellComponent extends IgxGridCellComponent implements OnInit {
    protected selectionService: IgxGridSelectionService;
    protected crudService: IgxGridCRUDService;
    gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>;
    selection: IgxHierarchicalSelectionAPIService;
    cdr: ChangeDetectorRef;
    private helement;
    protected zone: NgZone;
    protected hSelection: any;
    protected _rootGrid: any;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>, selection: IgxHierarchicalSelectionAPIService, cdr: ChangeDetectorRef, helement: ElementRef, zone: NgZone);
    ngOnInit(): void;
    private _getRootGrid;
    _clearAllHighlights(): void;
    /**
     * @hidden
     * @internal
     */
    onFocus(event: any): void;
    /**
     * @hidden
     * @internal
     */
    dispatchEvent(event: KeyboardEvent): void;
    protected persistFocusedCell(rowID: any): void;
}
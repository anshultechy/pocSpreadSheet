import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { IgxGridComponent } from './grid.component';
import { IgxRowComponent } from '../row.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export declare class IgxGridRowComponent extends IgxRowComponent<IgxGridComponent> {
    gridAPI: GridBaseAPIService<IgxGridComponent>;
    crudService: IgxGridCRUDService;
    selectionService: IgxGridSelectionService;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    constructor(gridAPI: GridBaseAPIService<IgxGridComponent>, crudService: IgxGridCRUDService, selectionService: IgxGridSelectionService, selection: IgxSelectionAPIService, element: ElementRef, cdr: ChangeDetectorRef);
    readonly hasColumnLayouts: boolean;
}
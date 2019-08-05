/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxChipsModule } from '../../chips/chips.module';
import { IgxGridModule } from '../grid/grid.module';
import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IgxHierarchicalRowComponent } from './hierarchical-row.component';
import { IgxGridHierarchicalPipe, IgxGridHierarchicalPagingPipe } from './hierarchical-grid.pipes';
import { IgxRowIslandComponent } from './row-island.component';
import { IgxChildGridRowComponent } from './child-grid-row.component';
import { IgxHierarchicalGridCellComponent } from './hierarchical-cell.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxRowIslandAPIService } from './row-island-api.service';
import { IgxSelectModule } from '../../select/index';
/**
 * @hidden
 */
export class IgxHierarchicalGridModule {
}
IgxHierarchicalGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IgxHierarchicalGridComponent,
                    IgxHierarchicalRowComponent,
                    IgxRowIslandComponent,
                    IgxChildGridRowComponent,
                    IgxHierarchicalGridCellComponent,
                    IgxGridHierarchicalPipe,
                    IgxGridHierarchicalPagingPipe
                ],
                exports: [
                    IgxGridModule,
                    IgxHierarchicalGridComponent,
                    IgxHierarchicalRowComponent,
                    IgxHierarchicalGridCellComponent,
                    IgxRowIslandComponent,
                    IgxChildGridRowComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    IgxChipsModule,
                    IgxGridModule,
                    IgxSelectModule
                ],
                providers: [
                    IgxRowIslandAPIService,
                    IgxHierarchicalSelectionAPIService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFtQ3JELE1BQU0sT0FBTyx5QkFBeUI7OztZQTlCckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiw0QkFBNEI7b0JBQzVCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLGdDQUFnQztvQkFDaEMsdUJBQXVCO29CQUN2Qiw2QkFBNkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLDRCQUE0QjtvQkFDNUIsMkJBQTJCO29CQUMzQixnQ0FBZ0M7b0JBQ2hDLHFCQUFxQjtvQkFDckIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO2lCQUNoQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsc0JBQXNCO29CQUN0QixrQ0FBa0M7aUJBQ25DO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWd4Q2hpcHNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGlwcy9jaGlwcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWd4R3JpZENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2dyaWQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ3hHcmlkTW9kdWxlIH0gZnJvbSAnLi4vZ3JpZC9ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsUm93Q29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkSGllcmFyY2hpY2FsUGlwZSwgSWd4R3JpZEhpZXJhcmNoaWNhbFBhZ2luZ1BpcGUgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLnBpcGVzJztcbmltcG9ydCB7IElneFJvd0lzbGFuZENvbXBvbmVudCB9IGZyb20gJy4vcm93LWlzbGFuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q2hpbGRHcmlkUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jaGlsZC1ncmlkLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4Um93SXNsYW5kQVBJU2VydmljZSB9IGZyb20gJy4vcm93LWlzbGFuZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RNb2R1bGUgfSBmcm9tICcuLi8uLi9zZWxlY3QvaW5kZXgnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCxcbiAgICBJZ3hIaWVyYXJjaGljYWxSb3dDb21wb25lbnQsXG4gICAgSWd4Um93SXNsYW5kQ29tcG9uZW50LFxuICAgIElneENoaWxkR3JpZFJvd0NvbXBvbmVudCxcbiAgICBJZ3hIaWVyYXJjaGljYWxHcmlkQ2VsbENvbXBvbmVudCxcbiAgICBJZ3hHcmlkSGllcmFyY2hpY2FsUGlwZSxcbiAgICBJZ3hHcmlkSGllcmFyY2hpY2FsUGFnaW5nUGlwZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWd4R3JpZE1vZHVsZSxcbiAgICBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50LFxuICAgIElneEhpZXJhcmNoaWNhbFJvd0NvbXBvbmVudCxcbiAgICBJZ3hIaWVyYXJjaGljYWxHcmlkQ2VsbENvbXBvbmVudCxcbiAgICBJZ3hSb3dJc2xhbmRDb21wb25lbnQsXG4gICAgSWd4Q2hpbGRHcmlkUm93Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSWd4Q2hpcHNNb2R1bGUsXG4gICAgSWd4R3JpZE1vZHVsZSxcbiAgICBJZ3hTZWxlY3RNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSWd4Um93SXNsYW5kQVBJU2VydmljZSxcbiAgICBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4SGllcmFyY2hpY2FsR3JpZE1vZHVsZSB7XG59XG4iXX0=
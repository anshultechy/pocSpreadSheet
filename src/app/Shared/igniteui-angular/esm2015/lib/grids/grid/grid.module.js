/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxGroupAreaDropDirective, IgxGroupByRowTemplateDirective } from './grid.directives';
import { IgxGridComponent } from './grid.component';
import { IgxGridPagingPipe, IgxGridGroupingPipe, IgxGridSortingPipe, IgxGridFilteringPipe } from './grid.pipes';
import { IgxGridGroupByRowComponent } from './groupby-row.component';
import { IgxGridRowComponent } from './grid-row.component';
import { IgxChipsModule } from '../../chips/chips.module';
import { IgxGridCommonModule } from '../grid-common.module';
import { DeprecateMethod } from '../../core/deprecateDecorators';
import { IgxGridSummaryPipe } from './grid.summary.pipe';
import { IgxSelectModule } from '../../select/index';
/**
 * @hidden
 */
export class IgxGridModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: IgxGridModule
        };
    }
}
IgxGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IgxGridComponent,
                    IgxGridRowComponent,
                    IgxGridGroupByRowComponent,
                    IgxGroupByRowTemplateDirective,
                    IgxGroupAreaDropDirective,
                    IgxGridGroupingPipe,
                    IgxGridPagingPipe,
                    IgxGridSortingPipe,
                    IgxGridFilteringPipe,
                    IgxGridSummaryPipe
                ],
                exports: [
                    IgxGridComponent,
                    IgxGridGroupByRowComponent,
                    IgxGridRowComponent,
                    IgxGroupByRowTemplateDirective,
                    IgxGroupAreaDropDirective,
                    IgxGridCommonModule,
                    IgxGridGroupingPipe,
                    IgxGridPagingPipe,
                    IgxGridSortingPipe,
                    IgxGridFilteringPipe,
                    IgxGridSummaryPipe
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    IgxChipsModule,
                    IgxGridCommonModule,
                    IgxSelectModule
                ]
            },] }
];
tslib_1.__decorate([
    DeprecateMethod('IgxGridModule.forRoot method is deprecated. Use IgxGridModule instead.'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], IgxGridModule, "forRoot", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNILHlCQUF5QixFQUN6Qiw4QkFBOEIsRUFDakMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3ZCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBdUNyRCxNQUFNLE9BQU8sYUFBYTs7OztJQUVqQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0gsUUFBUSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQXhDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLDhCQUE4QjtvQkFDOUIseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsMEJBQTBCO29CQUMxQixtQkFBbUI7b0JBQ25CLDhCQUE4QjtvQkFDOUIseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNoQjthQUNGOztBQUdDO0lBREMsZUFBZSxDQUFDLHdFQUF3RSxDQUFDOzs7O2tDQUt6RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICAgIElneEdyb3VwQXJlYURyb3BEaXJlY3RpdmUsXG4gICAgSWd4R3JvdXBCeVJvd1RlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vZ3JpZC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IElneEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgSWd4R3JpZFBhZ2luZ1BpcGUsXG4gICAgSWd4R3JpZEdyb3VwaW5nUGlwZSxcbiAgICBJZ3hHcmlkU29ydGluZ1BpcGUsXG4gICAgSWd4R3JpZEZpbHRlcmluZ1BpcGVcbn0gZnJvbSAnLi9ncmlkLnBpcGVzJztcbmltcG9ydCB7IElneEdyaWRHcm91cEJ5Um93Q29tcG9uZW50IH0gZnJvbSAnLi9ncm91cGJ5LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZFJvd0NvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElneENoaXBzTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hpcHMvY2hpcHMubW9kdWxlJztcbmltcG9ydCB7IElneEdyaWRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9ncmlkLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGVwcmVjYXRlTWV0aG9kIH0gZnJvbSAnLi4vLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcbmltcG9ydCB7IElneEdyaWRTdW1tYXJ5UGlwZSB9IGZyb20gJy4vZ3JpZC5zdW1tYXJ5LnBpcGUnO1xuaW1wb3J0IHsgSWd4U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vc2VsZWN0L2luZGV4JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIElneEdyaWRDb21wb25lbnQsXG4gICAgSWd4R3JpZFJvd0NvbXBvbmVudCxcbiAgICBJZ3hHcmlkR3JvdXBCeVJvd0NvbXBvbmVudCxcbiAgICBJZ3hHcm91cEJ5Um93VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4R3JvdXBBcmVhRHJvcERpcmVjdGl2ZSxcbiAgICBJZ3hHcmlkR3JvdXBpbmdQaXBlLFxuICAgIElneEdyaWRQYWdpbmdQaXBlLFxuICAgIElneEdyaWRTb3J0aW5nUGlwZSxcbiAgICBJZ3hHcmlkRmlsdGVyaW5nUGlwZSxcbiAgICBJZ3hHcmlkU3VtbWFyeVBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElneEdyaWRDb21wb25lbnQsXG4gICAgSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQsXG4gICAgSWd4R3JpZFJvd0NvbXBvbmVudCxcbiAgICBJZ3hHcm91cEJ5Um93VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4R3JvdXBBcmVhRHJvcERpcmVjdGl2ZSxcbiAgICBJZ3hHcmlkQ29tbW9uTW9kdWxlLFxuICAgIElneEdyaWRHcm91cGluZ1BpcGUsXG4gICAgSWd4R3JpZFBhZ2luZ1BpcGUsXG4gICAgSWd4R3JpZFNvcnRpbmdQaXBlLFxuICAgIElneEdyaWRGaWx0ZXJpbmdQaXBlLFxuICAgIElneEdyaWRTdW1tYXJ5UGlwZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElneENoaXBzTW9kdWxlLFxuICAgIElneEdyaWRDb21tb25Nb2R1bGUsXG4gICAgSWd4U2VsZWN0TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZE1vZHVsZSB7XG4gIEBEZXByZWNhdGVNZXRob2QoJ0lneEdyaWRNb2R1bGUuZm9yUm9vdCBtZXRob2QgaXMgZGVwcmVjYXRlZC4gVXNlIElneEdyaWRNb2R1bGUgaW5zdGVhZC4nKVxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmdNb2R1bGU6IElneEdyaWRNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=
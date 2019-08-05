/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxBadgeModule } from '../badge/badge.component';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxDatePickerModule } from '../date-picker/date-picker.component';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxFocusModule } from '../directives/focus/focus.directive';
import { IgxForOfModule } from '../directives/for-of/for_of.directive';
import { IgxTemplateOutletModule } from '../directives/template-outlet/template_outlet.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxTextHighlightModule } from '../directives/text-highlight/text-highlight.directive';
import { IgxTextSelectionModule } from '../directives/text-selection/text-selection.directive';
import { IgxToggleModule } from '../directives/toggle/toggle.directive';
import { IgxDropDownModule } from '../drop-down/index';
import { IgxIconModule } from '../icon/index';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { IgxGridCellComponent } from './cell.component';
import { IgxColumnComponent, IgxColumnGroupComponent, IgxColumnLayoutComponent } from './column.component';
import { IgxColumnHidingModule } from './column-hiding.component';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxGridToolbarComponent } from './grid-toolbar.component';
import { IgxGridFilteringCellComponent } from './filtering/grid-filtering-cell.component';
import { IgxGridFilteringRowComponent } from './filtering/grid-filtering-row.component';
import { IgxGridFooterComponent } from './grid-footer/grid-footer.component';
import { IgxCellEditorTemplateDirective, IgxCellFooterTemplateDirective, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnResizerDirective, IgxColumnMovingDragDirective, IgxColumnMovingDropDirective, IgxGridBodyDirective, IgxColumnMovingService, IgxFilterCellTemplateDirective, IgxResizeHandleDirective } from './grid.common';
import { IgxGridTransaction } from './grid-base.component';
import { IgxRowComponent } from './row.component';
import { IgxChipsModule } from '../chips/chips.module';
import { IgxDragDropModule } from '../directives/dragdrop/dragdrop.directive';
import { IgxButtonGroupModule } from '../buttonGroup/buttonGroup.component';
import { IgxColumnPinningModule } from './column-pinning.component';
import { IgxBaseTransactionService } from '../services/transaction/base-transaction';
import { IgxRowEditTemplateDirective, IgxRowEditActionsDirective, IgxRowEditTextDirective, IgxRowEditTabStopDirective } from './grid.rowEdit.directive';
import { IgxGridNavigationService } from './grid-navigation.service';
import { IgxGridHeaderGroupComponent } from './grid-header-group.component';
import { IgxColumnResizingService } from './grid-column-resizing.service';
import { IgxGridToolbarCustomContentDirective } from './grid-toolbar.component';
import { IgxSummaryRowComponent } from './summaries/summary-row.component';
import { IgxSummaryCellComponent } from './summaries/summary-cell.component';
import { IgxSummaryDataPipe } from './summaries/grid-root-summary.pipe';
import { IgxGridSelectionService } from '../core/grid-selection';
import { IgxGridSummaryService } from './summaries/grid-summary.service';
import { IgxProgressBarModule } from '../progressbar/progressbar.component';
import { IgxPaginatorModule } from '../paginator/paginator.component';
import { IgxFilterModule } from '../directives/filter/filter.directive';
import { IgxGridPipesModule } from './grid-pipes.module';
import { IgxGridExcelStyleFilteringModule } from './filtering/excel-style/grid.excel-style-filtering.module';
import { IgxGridDragSelectDirective } from './drag-select.directive';
import { IgxGridColumnResizerComponent } from './grid-column-resizer.component';
import { IgxRowDragModule } from './row-drag.directive';
/**
 * @hidden
 */
var IgxGridCommonModule = /** @class */ (function () {
    function IgxGridCommonModule() {
    }
    IgxGridCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IgxGridCellComponent,
                        IgxColumnComponent,
                        IgxColumnGroupComponent,
                        IgxColumnLayoutComponent,
                        IgxGridHeaderComponent,
                        IgxGridToolbarComponent,
                        IgxGridToolbarCustomContentDirective,
                        IgxCellFooterTemplateDirective,
                        IgxCellHeaderTemplateDirective,
                        IgxCellEditorTemplateDirective,
                        IgxCellTemplateDirective,
                        IgxRowEditTemplateDirective,
                        IgxRowEditActionsDirective,
                        IgxRowEditTextDirective,
                        IgxRowEditTabStopDirective,
                        IgxColumnResizerDirective,
                        IgxResizeHandleDirective,
                        IgxColumnMovingDragDirective,
                        IgxColumnMovingDropDirective,
                        IgxGridBodyDirective,
                        IgxGridFilteringCellComponent,
                        IgxGridFilteringRowComponent,
                        IgxSummaryDataPipe,
                        IgxRowComponent,
                        IgxGridHeaderGroupComponent,
                        IgxSummaryRowComponent,
                        IgxSummaryCellComponent,
                        IgxGridDragSelectDirective,
                        IgxGridColumnResizerComponent,
                        IgxFilterCellTemplateDirective,
                        IgxGridFooterComponent
                    ],
                    entryComponents: [
                        IgxColumnComponent,
                        IgxColumnGroupComponent,
                        IgxColumnLayoutComponent
                    ],
                    exports: [
                        IgxGridCellComponent,
                        IgxColumnComponent,
                        IgxColumnGroupComponent,
                        IgxColumnLayoutComponent,
                        IgxGridHeaderComponent,
                        IgxGridToolbarComponent,
                        IgxGridToolbarCustomContentDirective,
                        IgxCellFooterTemplateDirective,
                        IgxCellHeaderTemplateDirective,
                        IgxCellEditorTemplateDirective,
                        IgxCellTemplateDirective,
                        IgxRowEditTemplateDirective,
                        IgxRowEditActionsDirective,
                        IgxRowEditTextDirective,
                        IgxRowEditTabStopDirective,
                        IgxColumnResizerDirective,
                        IgxColumnMovingDragDirective,
                        IgxColumnMovingDropDirective,
                        IgxGridBodyDirective,
                        IgxRowComponent,
                        IgxSummaryDataPipe,
                        IgxButtonModule,
                        IgxDatePickerModule,
                        IgxIconModule,
                        IgxRippleModule,
                        IgxInputGroupModule,
                        IgxToggleModule,
                        IgxForOfModule,
                        IgxTemplateOutletModule,
                        IgxFocusModule,
                        IgxTextHighlightModule,
                        IgxTextSelectionModule,
                        IgxCheckboxModule,
                        IgxBadgeModule,
                        IgxChipsModule,
                        IgxDragDropModule,
                        IgxColumnHidingModule,
                        IgxDropDownModule,
                        IgxButtonGroupModule,
                        IgxColumnPinningModule,
                        IgxProgressBarModule,
                        IgxGridFilteringCellComponent,
                        IgxGridFilteringRowComponent,
                        IgxGridHeaderGroupComponent,
                        IgxSummaryRowComponent,
                        IgxSummaryCellComponent,
                        IgxGridDragSelectDirective,
                        IgxGridColumnResizerComponent,
                        IgxFilterModule,
                        IgxGridPipesModule,
                        IgxGridExcelStyleFilteringModule,
                        IgxFilterCellTemplateDirective,
                        IgxRowDragModule,
                        IgxPaginatorModule,
                        IgxGridFooterComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        IgxButtonModule,
                        IgxDatePickerModule,
                        IgxIconModule,
                        IgxRippleModule,
                        IgxInputGroupModule,
                        IgxToggleModule,
                        IgxForOfModule,
                        IgxTemplateOutletModule,
                        IgxFocusModule,
                        IgxTextHighlightModule,
                        IgxTextSelectionModule,
                        IgxCheckboxModule,
                        IgxBadgeModule,
                        IgxChipsModule,
                        IgxDragDropModule,
                        IgxColumnHidingModule,
                        IgxDropDownModule,
                        IgxButtonGroupModule,
                        IgxColumnPinningModule,
                        IgxProgressBarModule,
                        IgxFilterModule,
                        IgxGridPipesModule,
                        IgxGridExcelStyleFilteringModule,
                        IgxRowDragModule,
                        IgxPaginatorModule
                    ],
                    providers: [
                        IgxGridSelectionService,
                        IgxSelectionAPIService,
                        IgxColumnMovingService,
                        IgxGridNavigationService,
                        IgxColumnResizingService,
                        IgxGridSummaryService,
                        { provide: IgxGridTransaction, useClass: IgxBaseTransactionService }
                    ]
                },] }
    ];
    return IgxGridCommonModule;
}());
export { IgxGridCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb21tb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLWNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFDSCw4QkFBOEIsRUFDOUIsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQ3pCLDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0Qiw4QkFBOEIsRUFDOUIsd0JBQXdCLEVBQzNCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUNILDJCQUEyQixFQUMzQiwwQkFBMEIsRUFDMUIsdUJBQXVCLEVBQ3ZCLDBCQUEwQixFQUM3QixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUl4RDtJQUFBO0lBdUltQyxDQUFDOztnQkF2SW5DLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsb0NBQW9DO3dCQUNwQyw4QkFBOEI7d0JBQzlCLDhCQUE4Qjt3QkFDOUIsOEJBQThCO3dCQUM5Qix3QkFBd0I7d0JBQ3hCLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1QixvQkFBb0I7d0JBQ3BCLDZCQUE2Qjt3QkFDN0IsNEJBQTRCO3dCQUM1QixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQiw2QkFBNkI7d0JBQzdCLDhCQUE4Qjt3QkFDOUIsc0JBQXNCO3FCQUN6QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Isa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLG9DQUFvQzt3QkFDcEMsOEJBQThCO3dCQUM5Qiw4QkFBOEI7d0JBQzlCLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7d0JBQzNCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QiwwQkFBMEI7d0JBQzFCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1Qiw0QkFBNEI7d0JBQzVCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixjQUFjO3dCQUNkLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQiw2QkFBNkI7d0JBQzdCLDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQiw2QkFBNkI7d0JBQzdCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixnQ0FBZ0M7d0JBQ2hDLDhCQUE4Qjt3QkFDOUIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGdDQUFnQzt3QkFDaEMsZ0JBQWdCO3dCQUNoQixrQkFBa0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7cUJBQ3ZFO2lCQUNKOztJQUNrQywwQkFBQztDQUFBLEFBdklwQyxJQXVJb0M7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4Rm9jdXNNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2ZvY3VzL2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hGb3JPZk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4VGVtcGxhdGVPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RlbXBsYXRlLW91dGxldC90ZW1wbGF0ZV9vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4VGV4dEhpZ2hsaWdodE1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdGV4dC1oaWdobGlnaHQvdGV4dC1oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFRleHRTZWxlY3Rpb25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RleHQtc2VsZWN0aW9uL3RleHQtc2VsZWN0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hUb2dnbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneERyb3BEb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcC1kb3duL2luZGV4JztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElneElucHV0R3JvdXBNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCwgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQsIElneENvbHVtbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5IaWRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbHVtbi1oaWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkRmlsdGVyaW5nQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRGaWx0ZXJpbmdSb3dDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtZm9vdGVyL2dyaWQtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hDZWxsRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4Q2VsbEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneENlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hDb2x1bW5SZXNpemVyRGlyZWN0aXZlLFxuICAgIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUsXG4gICAgSWd4Q29sdW1uTW92aW5nRHJvcERpcmVjdGl2ZSxcbiAgICBJZ3hHcmlkQm9keURpcmVjdGl2ZSxcbiAgICBJZ3hDb2x1bW5Nb3ZpbmdTZXJ2aWNlLFxuICAgIElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hSZXNpemVIYW5kbGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9ncmlkLmNvbW1vbic7XG5pbXBvcnQgeyBJZ3hHcmlkVHJhbnNhY3Rpb24gfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElneENoaXBzTW9kdWxlIH0gZnJvbSAnLi4vY2hpcHMvY2hpcHMubW9kdWxlJztcbmltcG9ydCB7IElneERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9kcmFnZHJvcC9kcmFnZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4QnV0dG9uR3JvdXBNb2R1bGUgfSBmcm9tICcuLi9idXR0b25Hcm91cC9idXR0b25Hcm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUGlubmluZ01vZHVsZSB9IGZyb20gJy4vY29sdW1uLXBpbm5pbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElneEJhc2VUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi9iYXNlLXRyYW5zYWN0aW9uJztcbmltcG9ydCB7XG4gICAgSWd4Um93RWRpdFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRBY3Rpb25zRGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRUZXh0RGlyZWN0aXZlLFxuICAgIElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlXG59IGZyb20gJy4vZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL2dyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1oZWFkZXItZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbHVtblJlc2l6aW5nU2VydmljZSB9IGZyb20gJy4vZ3JpZC1jb2x1bW4tcmVzaXppbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkVG9vbGJhckN1c3RvbUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2dyaWQtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U3VtbWFyeVJvd0NvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyaWVzL3N1bW1hcnktcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTdW1tYXJ5Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyaWVzL3N1bW1hcnktY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U3VtbWFyeURhdGFQaXBlIH0gZnJvbSAnLi9zdW1tYXJpZXMvZ3JpZC1yb290LXN1bW1hcnkucGlwZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICcuLi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnLi4vcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9maWx0ZXIvZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hHcmlkUGlwZXNNb2R1bGUgfSBmcm9tICcuL2dyaWQtcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nTW9kdWxlIH0gZnJvbSAnLi9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcubW9kdWxlJztcbmltcG9ydCB7IElneEdyaWREcmFnU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLXNlbGVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZENvbHVtblJlc2l6ZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtY29sdW1uLXJlc2l6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0RyYWdNb2R1bGUgfSBmcm9tICcuL3Jvdy1kcmFnLmRpcmVjdGl2ZSc7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSWd4R3JpZENlbGxDb21wb25lbnQsXG4gICAgICAgIElneENvbHVtbkNvbXBvbmVudCxcbiAgICAgICAgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQsXG4gICAgICAgIElneENvbHVtbkxheW91dENvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZFRvb2xiYXJDb21wb25lbnQsXG4gICAgICAgIElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2VsbEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDZWxsSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSb3dFZGl0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneFJvd0VkaXRBY3Rpb25zRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSb3dFZGl0VGV4dERpcmVjdGl2ZSxcbiAgICAgICAgSWd4Um93RWRpdFRhYlN0b3BEaXJlY3RpdmUsXG4gICAgICAgIElneENvbHVtblJlc2l6ZXJEaXJlY3RpdmUsXG4gICAgICAgIElneFJlc2l6ZUhhbmRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29sdW1uTW92aW5nRHJvcERpcmVjdGl2ZSxcbiAgICAgICAgSWd4R3JpZEJvZHlEaXJlY3RpdmUsXG4gICAgICAgIElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50LFxuICAgICAgICBJZ3hHcmlkRmlsdGVyaW5nUm93Q29tcG9uZW50LFxuICAgICAgICBJZ3hTdW1tYXJ5RGF0YVBpcGUsXG4gICAgICAgIElneFJvd0NvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50LFxuICAgICAgICBJZ3hTdW1tYXJ5Um93Q29tcG9uZW50LFxuICAgICAgICBJZ3hTdW1tYXJ5Q2VsbENvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZERyYWdTZWxlY3REaXJlY3RpdmUsXG4gICAgICAgIElneEdyaWRDb2x1bW5SZXNpemVyQ29tcG9uZW50LFxuICAgICAgICBJZ3hGaWx0ZXJDZWxsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneEdyaWRGb290ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBJZ3hDb2x1bW5Db21wb25lbnQsXG4gICAgICAgIElneENvbHVtbkdyb3VwQ29tcG9uZW50LFxuICAgICAgICBJZ3hDb2x1bW5MYXlvdXRDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSWd4R3JpZENlbGxDb21wb25lbnQsXG4gICAgICAgIElneENvbHVtbkNvbXBvbmVudCxcbiAgICAgICAgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQsXG4gICAgICAgIElneENvbHVtbkxheW91dENvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgSWd4R3JpZFRvb2xiYXJDb21wb25lbnQsXG4gICAgICAgIElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2VsbEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDZWxsSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSb3dFZGl0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneFJvd0VkaXRBY3Rpb25zRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSb3dFZGl0VGV4dERpcmVjdGl2ZSxcbiAgICAgICAgSWd4Um93RWRpdFRhYlN0b3BEaXJlY3RpdmUsXG4gICAgICAgIElneENvbHVtblJlc2l6ZXJEaXJlY3RpdmUsXG4gICAgICAgIElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUsXG4gICAgICAgIElneENvbHVtbk1vdmluZ0Ryb3BEaXJlY3RpdmUsXG4gICAgICAgIElneEdyaWRCb2R5RGlyZWN0aXZlLFxuICAgICAgICBJZ3hSb3dDb21wb25lbnQsXG4gICAgICAgIElneFN1bW1hcnlEYXRhUGlwZSxcbiAgICAgICAgSWd4QnV0dG9uTW9kdWxlLFxuICAgICAgICBJZ3hEYXRlUGlja2VyTW9kdWxlLFxuICAgICAgICBJZ3hJY29uTW9kdWxlLFxuICAgICAgICBJZ3hSaXBwbGVNb2R1bGUsXG4gICAgICAgIElneElucHV0R3JvdXBNb2R1bGUsXG4gICAgICAgIElneFRvZ2dsZU1vZHVsZSxcbiAgICAgICAgSWd4Rm9yT2ZNb2R1bGUsXG4gICAgICAgIElneFRlbXBsYXRlT3V0bGV0TW9kdWxlLFxuICAgICAgICBJZ3hGb2N1c01vZHVsZSxcbiAgICAgICAgSWd4VGV4dEhpZ2hsaWdodE1vZHVsZSxcbiAgICAgICAgSWd4VGV4dFNlbGVjdGlvbk1vZHVsZSxcbiAgICAgICAgSWd4Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIElneEJhZGdlTW9kdWxlLFxuICAgICAgICBJZ3hDaGlwc01vZHVsZSxcbiAgICAgICAgSWd4RHJhZ0Ryb3BNb2R1bGUsXG4gICAgICAgIElneENvbHVtbkhpZGluZ01vZHVsZSxcbiAgICAgICAgSWd4RHJvcERvd25Nb2R1bGUsXG4gICAgICAgIElneEJ1dHRvbkdyb3VwTW9kdWxlLFxuICAgICAgICBJZ3hDb2x1bW5QaW5uaW5nTW9kdWxlLFxuICAgICAgICBJZ3hQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICAgICAgSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQsXG4gICAgICAgIElneEdyaWRGaWx0ZXJpbmdSb3dDb21wb25lbnQsXG4gICAgICAgIElneEdyaWRIZWFkZXJHcm91cENvbXBvbmVudCxcbiAgICAgICAgSWd4U3VtbWFyeVJvd0NvbXBvbmVudCxcbiAgICAgICAgSWd4U3VtbWFyeUNlbGxDb21wb25lbnQsXG4gICAgICAgIElneEdyaWREcmFnU2VsZWN0RGlyZWN0aXZlLFxuICAgICAgICBJZ3hHcmlkQ29sdW1uUmVzaXplckNvbXBvbmVudCxcbiAgICAgICAgSWd4RmlsdGVyTW9kdWxlLFxuICAgICAgICBJZ3hHcmlkUGlwZXNNb2R1bGUsXG4gICAgICAgIElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nTW9kdWxlLFxuICAgICAgICBJZ3hGaWx0ZXJDZWxsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneFJvd0RyYWdNb2R1bGUsXG4gICAgICAgIElneFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgSWd4R3JpZEZvb3RlckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBJZ3hCdXR0b25Nb2R1bGUsXG4gICAgICAgIElneERhdGVQaWNrZXJNb2R1bGUsXG4gICAgICAgIElneEljb25Nb2R1bGUsXG4gICAgICAgIElneFJpcHBsZU1vZHVsZSxcbiAgICAgICAgSWd4SW5wdXRHcm91cE1vZHVsZSxcbiAgICAgICAgSWd4VG9nZ2xlTW9kdWxlLFxuICAgICAgICBJZ3hGb3JPZk1vZHVsZSxcbiAgICAgICAgSWd4VGVtcGxhdGVPdXRsZXRNb2R1bGUsXG4gICAgICAgIElneEZvY3VzTW9kdWxlLFxuICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0TW9kdWxlLFxuICAgICAgICBJZ3hUZXh0U2VsZWN0aW9uTW9kdWxlLFxuICAgICAgICBJZ3hDaGVja2JveE1vZHVsZSxcbiAgICAgICAgSWd4QmFkZ2VNb2R1bGUsXG4gICAgICAgIElneENoaXBzTW9kdWxlLFxuICAgICAgICBJZ3hEcmFnRHJvcE1vZHVsZSxcbiAgICAgICAgSWd4Q29sdW1uSGlkaW5nTW9kdWxlLFxuICAgICAgICBJZ3hEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgSWd4QnV0dG9uR3JvdXBNb2R1bGUsXG4gICAgICAgIElneENvbHVtblBpbm5pbmdNb2R1bGUsXG4gICAgICAgIElneFByb2dyZXNzQmFyTW9kdWxlLFxuICAgICAgICBJZ3hGaWx0ZXJNb2R1bGUsXG4gICAgICAgIElneEdyaWRQaXBlc01vZHVsZSxcbiAgICAgICAgSWd4R3JpZEV4Y2VsU3R5bGVGaWx0ZXJpbmdNb2R1bGUsXG4gICAgICAgIElneFJvd0RyYWdNb2R1bGUsXG4gICAgICAgIElneFBhZ2luYXRvck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBJZ3hDb2x1bW5Nb3ZpbmdTZXJ2aWNlLFxuICAgICAgICBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIElneENvbHVtblJlc2l6aW5nU2VydmljZSxcbiAgICAgICAgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IElneEdyaWRUcmFuc2FjdGlvbiwgdXNlQ2xhc3M6IElneEJhc2VUcmFuc2FjdGlvblNlcnZpY2UgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZENvbW1vbk1vZHVsZSB7IH1cbiJdfQ==
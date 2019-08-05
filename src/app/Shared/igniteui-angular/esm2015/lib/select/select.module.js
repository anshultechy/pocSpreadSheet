/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxIconModule } from '../icon/index';
import { IgxDropDownModule } from './../drop-down/index';
import { IgxToggleModule } from './../directives/toggle/toggle.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxSelectComponent, IgxSelectToggleIconDirective } from './select.component';
import { IgxSelectItemComponent } from './select-item.component';
import { IgxSelectItemNavigationDirective } from './select-navigation.directive';
import { IgxSelectGroupComponent } from './select-group.component';
/**
 * @hidden
 */
export class IgxSelectModule {
}
IgxSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxSelectComponent, IgxSelectItemComponent, IgxSelectItemNavigationDirective,
                    IgxSelectToggleIconDirective, IgxSelectGroupComponent],
                exports: [IgxSelectComponent, IgxSelectItemComponent, IgxSelectItemNavigationDirective,
                    IgxSelectToggleIconDirective, IgxSelectGroupComponent],
                imports: [IgxRippleModule, CommonModule, IgxInputGroupModule, FormsModule, ReactiveFormsModule,
                    IgxToggleModule, IgxDropDownModule, IgxButtonModule, IgxIconModule],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBWW5FLE1BQU0sT0FBTyxlQUFlOzs7WUFUM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGdDQUFnQztvQkFDdkYsNEJBQTRCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGdDQUFnQztvQkFDakYsNEJBQTRCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtvQkFDMUYsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7Z0JBQ3ZFLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElneERyb3BEb3duTW9kdWxlIH0gZnJvbSAnLi8uLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4VG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi8uLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSWd4U2VsZWN0Q29tcG9uZW50LCBJZ3hTZWxlY3RUb2dnbGVJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElneFNlbGVjdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RJdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0LW5hdmlnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFNlbGVjdEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZ3JvdXAuY29tcG9uZW50JztcblxuLyoqIEBoaWRkZW4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4U2VsZWN0Q29tcG9uZW50LCBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50LCBJZ3hTZWxlY3RJdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgSWd4U2VsZWN0VG9nZ2xlSWNvbkRpcmVjdGl2ZSwgSWd4U2VsZWN0R3JvdXBDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJZ3hTZWxlY3RDb21wb25lbnQsIElneFNlbGVjdEl0ZW1Db21wb25lbnQsIElneFNlbGVjdEl0ZW1OYXZpZ2F0aW9uRGlyZWN0aXZlLFxuICAgICAgICAgSWd4U2VsZWN0VG9nZ2xlSWNvbkRpcmVjdGl2ZSwgSWd4U2VsZWN0R3JvdXBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtJZ3hSaXBwbGVNb2R1bGUsIENvbW1vbk1vZHVsZSwgSWd4SW5wdXRHcm91cE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIElneFRvZ2dsZU1vZHVsZSwgSWd4RHJvcERvd25Nb2R1bGUsIElneEJ1dHRvbk1vZHVsZSwgSWd4SWNvbk1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hTZWxlY3RNb2R1bGUgeyB9XG4iXX0=
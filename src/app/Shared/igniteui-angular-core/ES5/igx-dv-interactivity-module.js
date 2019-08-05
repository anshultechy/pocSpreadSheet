/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE: you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasGestureDOMEventProxy } from './CanvasGestureDOMEventProxy';
import { IgxTooltipContainerModule } from './igx-tooltip-container-module';
import { IgxSimpleDefaultTooltipComponent } from './igx-simple-default-tooltip-component';
import { TypeRegistrar } from "../../igniteui-angular-core/ES5/type";
var IgxDVInteractivityModule = /** @class */ (function () {
    function IgxDVInteractivityModule() {
        TypeRegistrar.register('CanvasGestureDOMEventProxy', CanvasGestureDOMEventProxy.$type);
        IgxSimpleDefaultTooltipComponent.register();
    }
    IgxDVInteractivityModule = tslib_1.__decorate([
        NgModule({
            declarations: [IgxSimpleDefaultTooltipComponent],
            exports: [IgxTooltipContainerModule,
                IgxSimpleDefaultTooltipComponent
            ],
            imports: [CommonModule, IgxTooltipContainerModule
            ],
            entryComponents: [IgxSimpleDefaultTooltipComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxDVInteractivityModule);
    return IgxDVInteractivityModule;
}());
export { IgxDVInteractivityModule };
//# sourceMappingURL=igx-dv-interactivity-module.js.map

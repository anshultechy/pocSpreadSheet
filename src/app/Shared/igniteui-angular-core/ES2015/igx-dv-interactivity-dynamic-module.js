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
import { IgxTooltipContainerDynamicModule } from './igx-tooltip-container-dynamic-module';
import { IgxSimpleDefaultTooltipComponent } from './igx-simple-default-tooltip-component';
import { TypeRegistrar } from "../../igniteui-angular-core/ES2015/type";
let IgxDVInteractivityDynamicModule = class IgxDVInteractivityDynamicModule {
    constructor() {
        TypeRegistrar.register('CanvasGestureDOMEventProxy', CanvasGestureDOMEventProxy.$type);
        IgxSimpleDefaultTooltipComponent.register();
    }
};
IgxDVInteractivityDynamicModule = tslib_1.__decorate([
    NgModule({
        declarations: [IgxSimpleDefaultTooltipComponent],
        exports: [IgxTooltipContainerDynamicModule,
            IgxSimpleDefaultTooltipComponent
        ],
        imports: [CommonModule, IgxTooltipContainerDynamicModule
        ],
        entryComponents: [IgxSimpleDefaultTooltipComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IgxDVInteractivityDynamicModule);
export { IgxDVInteractivityDynamicModule };
//# sourceMappingURL=igx-dv-interactivity-dynamic-module.js.map
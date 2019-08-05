/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxComponentRendererContainerComponent } from './igx-component-renderer-container-component';
import { TypeRegistrar } from './type';
let IgxComponentRendererContainerModule = class IgxComponentRendererContainerModule {
    constructor() {
        TypeRegistrar.registerCons("IgxComponentRendererContainerComponent", IgxComponentRendererContainerComponent);
    }
};
IgxComponentRendererContainerModule = tslib_1.__decorate([
    NgModule({
        declarations: [IgxComponentRendererContainerComponent],
        exports: [IgxComponentRendererContainerComponent],
        imports: [CommonModule],
        entryComponents: [IgxComponentRendererContainerComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IgxComponentRendererContainerModule);
export { IgxComponentRendererContainerModule };
//# sourceMappingURL=igx-component-renderer-container-module.js.map
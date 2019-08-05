/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxTemplateContentComponent } from './igx-template-content-component';
import { TypeRegistrar } from './type';
var IgxTemplateContentDynamicModule = /** @class */ (function () {
    function IgxTemplateContentDynamicModule() {
        TypeRegistrar.registerCons("IgxTemplateContentComponent", IgxTemplateContentComponent);
    }
    IgxTemplateContentDynamicModule = tslib_1.__decorate([
        NgModule({
            declarations: [IgxTemplateContentComponent],
            exports: [IgxTemplateContentComponent],
            imports: [CommonModule],
            entryComponents: [IgxTemplateContentComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxTemplateContentDynamicModule);
    return IgxTemplateContentDynamicModule;
}());
export { IgxTemplateContentDynamicModule };
//# sourceMappingURL=igx-template-content-dynamic-module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelCoreModule } from './igx-excel-core-module';
import { UltraCalcFunctionLoader } from './excel.functions';
var IgxExcelFunctionsModule = /** @class */ (function () {
    function IgxExcelFunctionsModule() {
        UltraCalcFunctionLoader.staticInit();
    }
    IgxExcelFunctionsModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [CommonModule, IgxExcelCoreModule],
            exports: [],
            entryComponents: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxExcelFunctionsModule);
    return IgxExcelFunctionsModule;
}());
export { IgxExcelFunctionsModule };
//# sourceMappingURL=igx-excel-functions-module.js.map
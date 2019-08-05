import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelCoreModule } from './igx-excel-core-module';
import { UltraCalcFunctionLoader } from './excel.functions';
let IgxExcelFunctionsModule = class IgxExcelFunctionsModule {
    constructor() {
        UltraCalcFunctionLoader.staticInit();
    }
};
IgxExcelFunctionsModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, IgxExcelCoreModule],
        exports: [],
        entryComponents: []
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IgxExcelFunctionsModule);
export { IgxExcelFunctionsModule };
//# sourceMappingURL=igx-excel-functions-module.js.map
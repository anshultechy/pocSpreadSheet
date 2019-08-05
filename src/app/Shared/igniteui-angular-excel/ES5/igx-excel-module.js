import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelCoreModule } from './igx-excel-core-module';
import { IgxExcelFunctionsModule } from './igx-excel-functions-module';
import { IgxExcelXlsxModule } from './igx-excel-xlsx-module';
import { IgxExcelXlsModule } from './igx-excel-xls-module';
var IgxExcelModule = /** @class */ (function () {
    function IgxExcelModule() {
    }
    IgxExcelModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [CommonModule, IgxExcelCoreModule, IgxExcelXlsModule, IgxExcelXlsxModule, IgxExcelFunctionsModule],
            exports: [],
            entryComponents: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxExcelModule);
    return IgxExcelModule;
}());
export { IgxExcelModule };
//# sourceMappingURL=igx-excel-module.js.map
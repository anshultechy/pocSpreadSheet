import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelCoreModule } from './igx-excel-core-module';
import { WorkbookLoadManagerExcel2007 } from './excel.openxml';
var IgxExcelXlsxModule = /** @class */ (function () {
    function IgxExcelXlsxModule() {
        WorkbookLoadManagerExcel2007.staticInit();
    }
    IgxExcelXlsxModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [CommonModule, IgxExcelCoreModule],
            exports: [],
            entryComponents: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxExcelXlsxModule);
    return IgxExcelXlsxModule;
}());
export { IgxExcelXlsxModule };
//# sourceMappingURL=igx-excel-xlsx-module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelCoreModule } from './igx-excel-core-module';
import { WorkbookLoadManagerExcel2003 } from './excel.biff8';
let IgxExcelXlsModule = class IgxExcelXlsModule {
    constructor() {
        WorkbookLoadManagerExcel2003.staticInit();
    }
};
IgxExcelXlsModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, IgxExcelCoreModule],
        exports: [],
        entryComponents: []
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IgxExcelXlsModule);
export { IgxExcelXlsModule };
//# sourceMappingURL=igx-excel-xls-module.js.map
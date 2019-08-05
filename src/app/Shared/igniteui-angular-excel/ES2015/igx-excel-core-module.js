import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelLocaleEn } from './ExcelLocaleEn';
import { DocumentsCoreLocaleEn } from './DocumentsCoreLocaleEn';
import { Localization } from "../../igniteui-angular-core/ES2015/Localization";
let IgxExcelCoreModule = class IgxExcelCoreModule {
    constructor() {
        Localization.register("documentsCore", new DocumentsCoreLocaleEn());
        Localization.register("excel", new ExcelLocaleEn());
    }
};
IgxExcelCoreModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule],
        exports: [],
        entryComponents: []
    }),
    tslib_1.__metadata("design:paramtypes", [])
], IgxExcelCoreModule);
export { IgxExcelCoreModule };
//# sourceMappingURL=igx-excel-core-module.js.map

import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelModule } from "../../igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetComponent } from './igx-spreadsheet-component';
import { SpreadsheetLocaleEn } from './SpreadsheetLocaleEn';
import { UndoLocaleEn } from './UndoLocaleEn';
import { Localization } from "../../igniteui-angular-core/ES5/Localization";
var IgxSpreadsheetModule = /** @class */ (function () {
    function IgxSpreadsheetModule() {
        Localization.register("undo", new UndoLocaleEn());
        Localization.register("spreadsheet", new SpreadsheetLocaleEn());
    }
    IgxSpreadsheetModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                IgxSpreadsheetComponent
            ],
            exports: [
                IgxSpreadsheetComponent
            ],
            imports: [CommonModule,
                IgxExcelModule
            ],
            entryComponents: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxSpreadsheetModule);
    return IgxSpreadsheetModule;
}());
export { IgxSpreadsheetModule };
//# sourceMappingURL=igx-spreadsheet-module.js.map

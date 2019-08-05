import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxSpreadsheetModule } from './Shared/igniteui-angular-spreadsheet/ES2015/igx-spreadsheet-module';
import { IgxExcelModule } from './Shared/igniteui-angular-excel/ES2015/igx-excel-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, IgxExcelModule,
        IgxSpreadsheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

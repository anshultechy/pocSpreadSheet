import { Component, OnInit, ViewChild } from "@angular/core";
 
import { IgxSpreadsheetComponent } from './Shared/igniteui-angular-spreadsheet/ES2015/igx-spreadsheet-component';
import { ExcelUtility } from './Shared/excel-utility';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("spreadsheet", { read: IgxSpreadsheetComponent,static:true })
   spreadsheet: IgxSpreadsheetComponent;
  public filteDialog: any;
  constructor() { }

  public ngOnInit() {

    const excelFile = "assets/Sample1.xlsx";
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;

      //var spreadsheet = new Spreadsheet();
      //spreadsheet.workbook = w;
      //spreadsheet.activeWorksheet = w.worksheets(0);
      //this.filteDialog = spreadsheet;
    });
  }
  //Export() {
  //  debugger;
  //  //filterText = "183";
  //  // var sheet = this.spreadsheet.workbook.worksheets(0).rows(1);
  //  var sheet = this.spreadsheet.workbook.worksheets(0);
  //  let expanseCol = 0;
  //  //for (var)
  //      //for (const key of sheet.rows(0).) {
  //      //    sheet.columns(expanseCol).width = 5000;
  //      //    sheet.(expanseCol, key);
  //      //    for (let i = 1; i < 20; i++) {
  //      //        const wr = expanseSheet.rows(i);
  //      //        if (key === "Year") {
  //      //            wr.setCellValue(expanseCol, 2010 + i);
  //      //        } else if (key === "Computers") {
  //      //            wr.setCellValue(expanseCol, this.getAmount(50000, 65000));
  //      //        } else if (key === "Research") {
  //      //            wr.setCellValue(expanseCol, this.getAmount(150000, 165000));
  //      //        } else if (key === "Travel") {
  //      //            wr.setCellValue(expanseCol, this.getAmount(20000, 25000));
  //      //        } else if (key === "Salary") {
  //      //            wr.setCellValue(expanseCol, this.getAmount(4000000, 450000));
  //      //        } else if (key === "Software") {
  //      //            wr.setCellValue(expanseCol, this.getAmount(100000, 150000));
  //      //        }
  //      //    }
  //      //    expanseCol++;
  //      //}
  //      //for (var i = 0; i < sheet._c7.maxCount; i++) {
  //      //    console.log(sheet.rows[i]);
  //      //}



  //     // let dial = new FilterDialogViewModel(1, this.spreadsheet.workbook.worksheets(0), 1, SpreadsheetFilterDialogOption.Contains);
  //      //var worksheet = this.spreadsheet.workbook.worksheets("Sheet1");
  //      //this.filteDialog.showFilterDialogForWorksheet(0, SpreadsheetFilterDialogOption.Contains);
  //      //worksheet.filterSettings.clearFilters();
  //      //worksheet.tables().clear();
  //      //var table = worksheet.tables().add('A1:D8', true);

  //      //var executed = $("#spreadsheet").igSpreadsheet("showFilterDialogForTable", table.columns(1));


  //  }
  Export() {

  }
  public openFile(input: HTMLInputElement): void {
    if (input.files == null || input.files.length === 0) {
      return;
    }

    console.log("Files:" + input.files[0].name);

    ExcelUtility.load(input.files[0]).then((w) => {
      this.spreadsheet.workbook = w;
    }, (e) => {
      console.error("Workbook Load Error:" + e);
    });
  }
}

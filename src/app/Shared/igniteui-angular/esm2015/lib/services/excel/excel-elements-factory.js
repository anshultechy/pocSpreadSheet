/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExcelFileTypes, ExcelFolderTypes } from './excel-enums';
import { AppFile, ContentTypesFile, CoreFile, RootRelsFile, SharedStringsFile, StyleFile, TablesFile, ThemeFile, WorkbookFile, WorkbookRelsFile, WorksheetFile, WorksheetRelsFile } from './excel-files';
import { DocPropsExcelFolder, RootExcelFolder, RootRelsExcelFolder, TablesExcelFolder, ThemeExcelFolder, WorksheetsExcelFolder, WorksheetsRelsExcelFolder, XLExcelFolder, XLRelsExcelFolder } from './excel-folders';
/**
 * @hidden
 */
export class ExcelElementsFactory {
    /**
     * @param {?} type
     * @return {?}
     */
    static getExcelFolder(type) {
        switch (type) {
            case ExcelFolderTypes.RootExcelFolder:
                return new RootExcelFolder();
            case ExcelFolderTypes.RootRelsExcelFolder:
                return new RootRelsExcelFolder();
            case ExcelFolderTypes.DocPropsExcelFolder:
                return new DocPropsExcelFolder();
            case ExcelFolderTypes.XLExcelFolder:
                return new XLExcelFolder();
            case ExcelFolderTypes.XLRelsExcelFolder:
                return new XLRelsExcelFolder();
            case ExcelFolderTypes.ThemeExcelFolder:
                return new ThemeExcelFolder();
            case ExcelFolderTypes.WorksheetsExcelFolder:
                return new WorksheetsExcelFolder();
            case ExcelFolderTypes.WorksheetsRelsExcelFolder:
                return new WorksheetsRelsExcelFolder();
            case ExcelFolderTypes.TablesExcelFolder:
                return new TablesExcelFolder();
            default:
                throw new Error('Unknown excel folder type!');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    static getExcelFile(type) {
        switch (type) {
            case ExcelFileTypes.RootRelsFile:
                return new RootRelsFile();
            case ExcelFileTypes.AppFile:
                return new AppFile();
            case ExcelFileTypes.CoreFile:
                return new CoreFile();
            case ExcelFileTypes.WorkbookRelsFile:
                return new WorkbookRelsFile();
            case ExcelFileTypes.ThemeFile:
                return new ThemeFile();
            case ExcelFileTypes.WorksheetFile:
                return new WorksheetFile();
            case ExcelFileTypes.StyleFile:
                return new StyleFile();
            case ExcelFileTypes.WorkbookFile:
                return new WorkbookFile();
            case ExcelFileTypes.ContentTypesFile:
                return new ContentTypesFile();
            case ExcelFileTypes.SharedStringsFile:
                return new SharedStringsFile();
            case ExcelFileTypes.WorksheetRelsFile:
                return new WorksheetRelsFile();
            case ExcelFileTypes.TablesFile:
                return new TablesFile();
            default:
                throw Error('Unknown excel file type!');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZWxlbWVudHMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXhjZWwvZXhjZWwtZWxlbWVudHMtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGNBQWMsRUFDZCxnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLFlBQVksRUFDWixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsYUFBYSxFQUNiLGlCQUFpQixFQUNwQixNQUFNLGlCQUFpQixDQUFDOzs7O0FBUXpCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRXRCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBc0I7UUFDL0MsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ2pDLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNqQyxLQUFLLGdCQUFnQixDQUFDLG1CQUFtQjtnQkFDckMsT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7WUFDckMsS0FBSyxnQkFBZ0IsQ0FBQyxtQkFBbUI7Z0JBQ3JDLE9BQU8sSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3JDLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsT0FBTyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQy9CLEtBQUssZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUNuQyxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUNuQyxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQjtnQkFDbEMsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDbEMsS0FBSyxnQkFBZ0IsQ0FBQyxxQkFBcUI7Z0JBQ3ZDLE9BQVEsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hDLEtBQUssZ0JBQWdCLENBQUMseUJBQXlCO2dCQUMzQyxPQUFPLElBQUkseUJBQXlCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDbkMsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDbkM7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQW9CO1FBQzNDLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxjQUFjLENBQUMsWUFBWTtnQkFDNUIsT0FBUSxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQy9CLEtBQUssY0FBYyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQVEsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMxQixLQUFLLGNBQWMsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7WUFDMUIsS0FBSyxjQUFjLENBQUMsZ0JBQWdCO2dCQUNoQyxPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUNsQyxLQUFLLGNBQWMsQ0FBQyxTQUFTO2dCQUN6QixPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7WUFDM0IsS0FBSyxjQUFjLENBQUMsYUFBYTtnQkFDN0IsT0FBTyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQy9CLEtBQUssY0FBYyxDQUFDLFNBQVM7Z0JBQ3pCLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMzQixLQUFLLGNBQWMsQ0FBQyxZQUFZO2dCQUM1QixPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7WUFDOUIsS0FBSyxjQUFjLENBQUMsZ0JBQWdCO2dCQUNoQyxPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUNsQyxLQUFLLGNBQWMsQ0FBQyxpQkFBaUI7Z0JBQ2pDLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ25DLEtBQUssY0FBYyxDQUFDLGlCQUFpQjtnQkFDakMsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDbkMsS0FBSyxjQUFjLENBQUMsVUFBVTtnQkFDMUIsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzVCO2dCQUNJLE1BQU0sS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV4Y2VsRmlsZVR5cGVzLFxuICAgIEV4Y2VsRm9sZGVyVHlwZXNcbn0gZnJvbSAnLi9leGNlbC1lbnVtcyc7XG5cbmltcG9ydCB7XG4gICAgQXBwRmlsZSxcbiAgICBDb250ZW50VHlwZXNGaWxlLFxuICAgIENvcmVGaWxlLFxuICAgIFJvb3RSZWxzRmlsZSxcbiAgICBTaGFyZWRTdHJpbmdzRmlsZSxcbiAgICBTdHlsZUZpbGUsXG4gICAgVGFibGVzRmlsZSxcbiAgICBUaGVtZUZpbGUsXG4gICAgV29ya2Jvb2tGaWxlLFxuICAgIFdvcmtib29rUmVsc0ZpbGUsXG4gICAgV29ya3NoZWV0RmlsZSxcbiAgICBXb3Jrc2hlZXRSZWxzRmlsZVxufSBmcm9tICcuL2V4Y2VsLWZpbGVzJztcblxuaW1wb3J0IHtcbiAgICBEb2NQcm9wc0V4Y2VsRm9sZGVyLFxuICAgIFJvb3RFeGNlbEZvbGRlcixcbiAgICBSb290UmVsc0V4Y2VsRm9sZGVyLFxuICAgIFRhYmxlc0V4Y2VsRm9sZGVyLFxuICAgIFRoZW1lRXhjZWxGb2xkZXIsXG4gICAgV29ya3NoZWV0c0V4Y2VsRm9sZGVyLFxuICAgIFdvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXIsXG4gICAgWExFeGNlbEZvbGRlcixcbiAgICBYTFJlbHNFeGNlbEZvbGRlclxufSBmcm9tICcuL2V4Y2VsLWZvbGRlcnMnO1xuXG5pbXBvcnQge1xuICAgIElFeGNlbEZpbGUsXG4gICAgSUV4Y2VsRm9sZGVyXG59IGZyb20gJy4vZXhjZWwtaW50ZXJmYWNlcyc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgRXhjZWxFbGVtZW50c0ZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRFeGNlbEZvbGRlcih0eXBlOiBFeGNlbEZvbGRlclR5cGVzKTogSUV4Y2VsRm9sZGVyIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuUm9vdEV4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUm9vdEV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuUm9vdFJlbHNFeGNlbEZvbGRlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJvb3RSZWxzRXhjZWxGb2xkZXIoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGb2xkZXJUeXBlcy5Eb2NQcm9wc0V4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9jUHJvcHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLlhMRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTEV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuWExSZWxzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTFJlbHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLlRoZW1lRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaGVtZUV4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuV29ya3NoZWV0c0V4Y2VsRm9sZGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IFdvcmtzaGVldHNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZvbGRlclR5cGVzLldvcmtzaGVldHNSZWxzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3Jrc2hlZXRzUmVsc0V4Y2VsRm9sZGVyKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRm9sZGVyVHlwZXMuVGFibGVzRXhjZWxGb2xkZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYWJsZXNFeGNlbEZvbGRlcigpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZXhjZWwgZm9sZGVyIHR5cGUhJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV4Y2VsRmlsZSh0eXBlOiBFeGNlbEZpbGVUeXBlcyk6IElFeGNlbEZpbGUge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuUm9vdFJlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IFJvb3RSZWxzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5BcHBGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IEFwcEZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuQ29yZUZpbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3JlRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5Xb3JrYm9va1JlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV29ya2Jvb2tSZWxzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5UaGVtZUZpbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaGVtZUZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuV29ya3NoZWV0RmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtzaGVldEZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuU3R5bGVGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3R5bGVGaWxlKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRmlsZVR5cGVzLldvcmtib29rRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmtib29rRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5Db250ZW50VHlwZXNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFR5cGVzRmlsZSgpO1xuICAgICAgICAgICAgY2FzZSBFeGNlbEZpbGVUeXBlcy5TaGFyZWRTdHJpbmdzRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNoYXJlZFN0cmluZ3NGaWxlKCk7XG4gICAgICAgICAgICBjYXNlIEV4Y2VsRmlsZVR5cGVzLldvcmtzaGVldFJlbHNGaWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV29ya3NoZWV0UmVsc0ZpbGUoKTtcbiAgICAgICAgICAgIGNhc2UgRXhjZWxGaWxlVHlwZXMuVGFibGVzRmlsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRhYmxlc0ZpbGUoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gZXhjZWwgZmlsZSB0eXBlIScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
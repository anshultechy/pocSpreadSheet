import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare const enum SpreadsheetStatesLow {
    HasWorkbook = 1,
    HasWorksheet = 2,
    HasMultiplePanes = 4,
    HasFrozenPanes = 8,
    HasScrollLock = 16,
    IsInEndMode = 32,
    IsInNormalSelectionMode = 64,
    IsInExtendedSelectionMode = 128,
    IsInAddToSelectionMode = 256,
    IsInEditMode = 512,
    CanUndo = 1024,
    CanRedo = 2048,
    EnterKeyNavigation = 4096,
    IsPreviousWorksheetTabOutOfView = 8192,
    IsNextWorksheetTabOutOfView = 16384,
    HasRowScrollRegionSplit = 32768,
    HasColumnScrollRegionSplit = 65536,
    HasMultipleSelectedWorksheets = 131072,
    HasRowsSelected = 262144,
    HasColumnsSelected = 524288,
    IsWorkbookProtected = 1048576,
    IsWorksheetProtected = 2097152,
    IsNavigatingUnlockedCellsOnly = 4194304,
    IsFormatCellsProtected = 8388608,
    IsFormatColumnsProtected = 16777216,
    IsFormatRowsProtected = 33554432,
    IsInsertColumnsProtected = 67108864,
    IsInsertRowsProtected = 134217728,
    IsDeleteColumnsProtected = 268435456,
    IsDeleteRowsProtected = 536870912,
    ArrowKeysNavigateWithinCell = 1073741824,
    IsInNameBox = -2147483648,
    All = 0
}
/**
 * @hidden
 */
export declare let SpreadsheetStatesLow_$type: Type;

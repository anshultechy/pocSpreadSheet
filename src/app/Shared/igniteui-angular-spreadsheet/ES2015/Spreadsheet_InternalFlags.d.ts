import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare const enum Spreadsheet_InternalFlags {
    NotifyCanExecuteChanged = 1,
    IsInitialized = 2,
    IsUndoEnabled = 4,
    IsVerifyingState = 8,
    NeedsCanUndoRedoVerification = 16,
    CanUndo = 32,
    CanRedo = 64,
    HasPendingChangeNotification = 128,
    ActiveTabChanged = 256,
    SelectedTabsChanged = 512,
    NeedsFormatChangeNotification = 1024,
    NeedsWorkbookDirtiedNotification = 2048,
    NeedsNameBoxValueVerification = 4096,
    NeedsFormulaBarValueVerification = 8192,
    VerifyIsRenamingWorksheet = 16384,
    IsInitializingZoomLevel = 32768,
    NeedsZoomLevelInitialization = 65536,
    IsInitializingShowHeaders = 131072,
    NeedsShowHeadersInitialization = 262144,
    IsInitializingShowGridlines = 524288,
    NeedsShowGridlinesInitialization = 1048576,
    IsInitializing = 2097152,
    IsInEditMode = 8388608,
    ActiveCellValue = 16777216,
    IsInitializingCellEditor = 33554432,
    NeedsInputMsgPosInitialization = 67108864,
    HasDeferredEvents = 134217728
}
/**
 * @hidden
 */
export declare let Spreadsheet_InternalFlags_$type: Type;
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare const enum SpreadsheetPaneManager_InternalFlags {
    HasVerticalScrollBar = 1,
    HasHorizontalScrollBar = 2,
    HasScrollBarChanged = 4,
    HasPaneSettingsChanged = 8,
    HasUsedRangeChanged = 16,
    HasRangeSizesChanged = 32,
    IsInitializingScrollInfo = 64,
    HasSingleSelectionWithAllRowsAndColumns = 128,
    IsVerifyingState = 256,
    HasSelectionChanged = 512,
    HasActiveCellChanged = 1024,
    HasFrozenPanes = 2048,
    HasResourceProviderChanged = 4096,
    HadCellValueChanged = 8192,
    IsVerifyPaneInfo = 16384,
    ProcessingPendingChanges = 32768,
    HasPendingChangeNotifications = 65536,
    HasZoomChanged = 131072,
    SkipNextScrollSnapshot = 262144,
    IsSelectionZoom = 524288,
    IsUpdatingExcelScrollOffsets = 1048576,
    NeedsExcelSelectionUpdate = 2097152,
    HasHeaderPropertiesChanged = 4194304,
    HasActiveTableChanged = 8388608,
    VerifyActiveCellPane = 16777216,
    VerifyActiveCellInputMessage = 33554432,
    HasValidationRulesChanged = 67108864,
    VerifyDropDownButtons = 134217728,
    VerifyChartState = 268435456,
    InitialFlags = 184550424
}
/**
 * @hidden
 */
export declare let SpreadsheetPaneManager_InternalFlags_$type: Type;

import { Base, Type, INotifyPropertyChanged, IList$1, PropertyChangedEventArgs, Nullable$1, IEnumerator$1, IEnumerable$1, IEnumerator, IDisposable, BaseError, Point, EventArgs, Stream, IEquatable$1 } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetChartElementInfo } from "./SpreadsheetChartElementInfo";
import { WorksheetChart, SortDirection, IconSortCondition, SortCondition, WorksheetTableColumn, FormatConditionIconSet, CellFill, WorkbookColorInfo, WorksheetSortType, WorksheetRegionAddress, WorksheetTable, Worksheet, WorksheetRegion, WorksheetRow, CellConditionalFormat, Workbook, CellIconInfo, IWorksheetCellFormat, WorksheetCellFormatData, IWorkbookFont, Sheet, FillPatternStyle, WorksheetCell, WorksheetProtectedSelectionMode, HorizontalCellAlignment, VerticalCellAlignment, FormatConditionIcon, ExcelComparisonOperator, RelativeDateRangeDuration, RelativeDateRangeOffset, DatePeriodFilterType, AverageFilterType, WorksheetShape, WorksheetHyperlink, WorksheetItemPosition, ShapeFill, ShapeOutline, FormattedText, ChartTextAreaBase, IGTextAlignment, FormattedString, ChartBorder, WorkbookStyle, BorderLineStyle, ScrollBars, IWorkbookOwner, WorksheetProtectionType, WorksheetCellFormatProxy, FontUnderlineStyle, FontSuperscriptSubscriptStyle, IChartObject, UnicodeCategory, Formula, WorksheetCellAddress, ChangeInfo, ExcelChangeAction, IChangeInfoContext, ChangeInfo$2, CellFormatValue, WorksheetVisibility, CustomView, CellBorderLineStyle, DiagonalBorders, WorksheetCellFormatOptions, CellFormatValueChangedOptions, TextMetricsProviderBase, ChartFillBase, HorizontalTextAlignment, ValueFormatter, WorkbookColorPalette, IconFilter, IFilterable, Filter, BuiltInStyleType, IGVerticalTextAlignment, HorizontalTitleAlignment, VerticalTitleAlignment, WorksheetProtectedRange, WorksheetMergedCellsRegion, TopOrBottomFilterType, ConditionalOperator, IMultiChartContext, WorkbookReferenceBase } from "../../igniteui-angular-excel/ES2015/excel.core";
import { SortDirectionWithCustomListOptions } from "./SortDirectionWithCustomListOptions";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { SpreadsheetSortDialogConditionType } from "./SpreadsheetSortDialogConditionType";
import { ComboBoxListItem } from "./ComboBoxListItem";
import { ObservableCollectionExtended$1 } from "./ObservableCollectionExtended$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Tuple$2 } from "../../igniteui-angular-core/ES2015/Tuple$2";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { SortContext } from "./SortContext";
import { ObservableCollection$1 } from "../../igniteui-angular-core/ES2015/ObservableCollection$1";
import { SortTargetResult } from "./SortTargetResult";
import { ActiveRowIndexChangedEventArgs } from "./ActiveRowIndexChangedEventArgs";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { HashSet$1 } from "../../igniteui-angular-core/ES2015/HashSet$1";
import { CellContentType } from "./CellContentType";
import { DomWrapper, DomRenderer, NormalizedEvent } from "../../igniteui-angular-core/ES2015/dom";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { VisualElement } from "./VisualElement";
import { Key } from "../../igniteui-angular-core/ES2015/Key";
import { ModifierKeys } from "../../igniteui-angular-core/ES2015/ModifierKeys";
import { DropDownItem } from "./DropDownItem";
import { SpreadsheetCell } from "./SpreadsheetCell";
import { SpreadsheetCellRange } from "./SpreadsheetCellRange";
import { ISpreadsheetEditorValue } from "./ISpreadsheetEditorValue";
import { SpreadsheetEditModeEnteringEventArgs } from "./SpreadsheetEditModeEnteringEventArgs";
import { SpreadsheetEditModeEnteredEventArgs } from "./SpreadsheetEditModeEnteredEventArgs";
import { SpreadsheetAction } from "./SpreadsheetAction";
import { SpreadsheetCellExitModeAction } from "./SpreadsheetCellExitModeAction";
import { SpreadsheetEditModeExitingEventArgs } from "./SpreadsheetEditModeExitingEventArgs";
import { SpreadsheetEditModeExitedEventArgs } from "./SpreadsheetEditModeExitedEventArgs";
import { SpreadsheetTransactionOperation } from "./SpreadsheetTransactionOperation";
import { SpreadsheetOperationResult } from "./SpreadsheetOperationResult";
import { MessageBoxResult } from "./MessageBoxResult";
import { SpreadsheetEditModeValidationErrorEventArgs } from "./SpreadsheetEditModeValidationErrorEventArgs";
import { SpreadsheetCellEditMode } from "./SpreadsheetCellEditMode";
import { SpreadsheetCellSelectionMode } from "./SpreadsheetCellSelectionMode";
import { MessageBoxButton } from "./MessageBoxButton";
import { MessageBoxImage } from "./MessageBoxImage";
import { Thickness } from "../../igniteui-angular-core/ES2015/Thickness";
import { TextBoxVisualElement } from "./TextBoxVisualElement";
import { IDataObject } from "../../igniteui-angular-core/ES2015/IDataObject";
import { SpreadsheetContextMenuSubItem } from "./SpreadsheetContextMenuSubItem";
import { SpreadsheetSpecialFilterMenuItems } from "./SpreadsheetSpecialFilterMenuItems";
import { SpreadsheetContextMenuArea } from "./SpreadsheetContextMenuArea";
import { LongValue } from "./LongValue";
import { SpreadsheetFilterDialogOption } from "./SpreadsheetFilterDialogOption";
import { SpreadsheetUserPromptTrigger } from "./SpreadsheetUserPromptTrigger";
import { ElementLayer$1 } from "./ElementLayer$1";
import { PropertyChangeNotifierExtended } from "./PropertyChangeNotifierExtended";
import { SpreadsheetImageBackground } from "./SpreadsheetImageBackground";
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { SpreadsheetCellRenderInfoArray } from "./SpreadsheetCellRenderInfoArray";
import { MDList$1 } from "./MDList$1";
import { SpreadsheetDropDownButton } from "./SpreadsheetDropDownButton";
import { SpreadsheetGridLinePen } from "./SpreadsheetGridLinePen";
import { MDBitArray } from "./MDBitArray";
import { IPropertyChangeListener } from "./IPropertyChangeListener";
import { IntRange } from "./IntRange";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { IPath2DCommandVisitor$2, CT_Path2DArcTo, CT_Path2DClose, CT_Path2DCubicBezierTo, CT_Path2DLineTo, CT_Path2DMoveTo, CT_Path2DQuadBezierTo, CT_Path2D, CT_CustomGeometry2D, CT_GeomGuideList, ST_AdjAngle, ST_AdjCoordinate, ST_Coordinate32 } from "../../igniteui-angular-excel/ES2015/documents.openxml";
import { ShapeGuideVariables } from "./ShapeGuideVariables";
import { ST_IconSetType } from "../../igniteui-angular-excel/ES2015/documents.core";
import { SpreadsheetMenuType } from "./SpreadsheetMenuType";
import { Brush } from "../../igniteui-angular-core/ES2015/Brush";
import { SpreadsheetResourceId } from "./SpreadsheetResourceId";
import { VisualElementDomBuilder } from "./VisualElementDomBuilder";
import { SpreadsheetCss } from "./SpreadsheetCss";
import { SpreadsheetMetricsCache } from "./SpreadsheetMetricsCache";
import { SpreadsheetActiveCellUpdateMode } from "./SpreadsheetActiveCellUpdateMode";
import { ISpreadsheetDialogServicesManager } from "./ISpreadsheetDialogServicesManager";
import { WorkbookDataObjectPastingEventArgs } from "./WorkbookDataObjectPastingEventArgs";
import { SpreadsheetSelectionContextMenuArea } from "./SpreadsheetSelectionContextMenuArea";
import { SpreadsheetDialogResult } from "./SpreadsheetDialogResult";
import { EditModeWorkbookFontInfo } from "./EditModeWorkbookFontInfo";
import { IgRect } from "../../igniteui-angular-core/ES2015/IgRect";
import { IgPoint } from "../../igniteui-angular-core/ES2015/IgPoint";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
import { SpreadsheetAreaLayoutManager_DragType } from "./SpreadsheetAreaLayoutManager_DragType";
import { SpreadsheetAreaLayoutManager_SheetLayerInfo$1 } from "./SpreadsheetAreaLayoutManager_SheetLayerInfo$1";
import { PixelConverter } from "./PixelConverter";
import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { IElementLayerContainer } from "./IElementLayerContainer";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
import { ScrollInfoOrientation } from "./ScrollInfoOrientation";
import { SpreadsheetCursor } from "./SpreadsheetCursor";
import { ScrollBarVisibilityCoordinator } from "./ScrollBarVisibilityCoordinator";
import { SpreadsheetHitTestResult } from "./SpreadsheetHitTestResult";
import { PaneSplitterType } from "./PaneSplitterType";
import { InputProxy } from "./InputProxy";
import { SpreadsheetPaneRowColumnSizingMode } from "./SpreadsheetPaneRowColumnSizingMode";
import { ButtonVisualElement } from "./ButtonVisualElement";
import { ISpreadsheetGraphics } from "./ISpreadsheetGraphics";
import { RendererElementLayer$2 } from "./RendererElementLayer$2";
import { ScrollBarVisualElement } from "./ScrollBarVisualElement";
import { RootVisualElement } from "./RootVisualElement";
import { ISpreadsheetInteractionManagerOwner } from "./ISpreadsheetInteractionManagerOwner";
import { SpreadsheetToolTipContext } from "./SpreadsheetToolTipContext";
import { IgSize } from "../../igniteui-angular-core/ES2015/IgSize";
import { IRendererElementLayerView$2 } from "./IRendererElementLayerView$2";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { PageStartScrollCache } from "./PageStartScrollCache";
import { ISpreadsheetResourceProvider } from "./ISpreadsheetResourceProvider";
import { SpreadsheetHeaderState } from "./SpreadsheetHeaderState";
import { RenderLayerType } from "./RenderLayerType";
import { SpreadsheetHeaderContentLayerBase_HeaderInfo$1 } from "./SpreadsheetHeaderContentLayerBase_HeaderInfo$1";
import { HeaderVisual } from "./HeaderVisual";
import { SpreadsheetText } from "./SpreadsheetText";
import { SpreadsheetDrawingOperation } from "./SpreadsheetDrawingOperation";
import { SpreadsheetDropDownButtonState } from "./SpreadsheetDropDownButtonState";
import { CellBorderPen } from "./CellBorderPen";
import { ElementLayerViewSingle } from "./ElementLayerViewSingle";
import { ILayerRenderer } from "./ILayerRenderer";
import { EventProxy } from "../../igniteui-angular-core/ES2015/EventProxy";
import { SpreadsheetEnterKeyNavigationDirection } from "./SpreadsheetEnterKeyNavigationDirection";
import { ReadOnlyNotifyCollection$1 } from "./ReadOnlyNotifyCollection$1";
import { UndoManager } from "./UndoManager";
import { SpreadsheetMouseOperation } from "./SpreadsheetMouseOperation";
import { ISpreadsheetDialog } from "./ISpreadsheetDialog";
import { SpreadsheetCommandExecutingEventArgs } from "./SpreadsheetCommandExecutingEventArgs";
import { SpreadsheetCommandExecutedEventArgs } from "./SpreadsheetCommandExecutedEventArgs";
import { Direction } from "./Direction";
import { FormatCellsDialogTab } from "./FormatCellsDialogTab";
import { FormatCellsDialogOptions } from "./FormatCellsDialogOptions";
import { FormatCellsDialogData } from "./FormatCellsDialogData";
import { WorkbookDataObjectCopyingEventArgs } from "./WorkbookDataObjectCopyingEventArgs";
import { WorkbookDataObjectSettingDataEventArgs } from "./WorkbookDataObjectSettingDataEventArgs";
import { WorkbookSerializationErrorEventArgs } from "./WorkbookSerializationErrorEventArgs";
import { IWorksheetUndoUnit } from "./IWorksheetUndoUnit";
import { UndoTransaction } from "./UndoTransaction";
import { SheetTabAction } from "./SheetTabAction";
import { Spreadsheet_InternalFlags } from "./Spreadsheet_InternalFlags";
import { SpreadsheetCellMergeOperation } from "./SpreadsheetCellMergeOperation";
import { LockedEditRangeInfoForOperation } from "./LockedEditRangeInfoForOperation";
import { SpreadsheetEditRangePasswordNeededEventArgs } from "./SpreadsheetEditRangePasswordNeededEventArgs";
import { LockedEditRangeInfoForWorksheet } from "./LockedEditRangeInfoForWorksheet";
import { WorkbookSerializationLoadOptions } from "./WorkbookSerializationLoadOptions";
import { SpreadsheetActiveCellChangedEventArgs } from "./SpreadsheetActiveCellChangedEventArgs";
import { SpreadsheetActiveTableChangedEventArgs } from "./SpreadsheetActiveTableChangedEventArgs";
import { SpreadsheetActiveWorksheetChangedEventArgs } from "./SpreadsheetActiveWorksheetChangedEventArgs";
import { SpreadsheetHyperlinkExecutingEventArgs } from "./SpreadsheetHyperlinkExecutingEventArgs";
import { SpreadsheetZoomOperation } from "./SpreadsheetZoomOperation";
import { SpreadsheetCellDropDownItemSelectingEventArgs } from "./SpreadsheetCellDropDownItemSelectingEventArgs";
import { SpreadsheetWorkbookDirtiedEventArgs } from "./SpreadsheetWorkbookDirtiedEventArgs";
import { RendererContainer } from "./RendererContainer";
import { SpreadsheetCellNavigationType } from "./SpreadsheetCellNavigationType";
import { SpreadsheetFilterByCell } from "./SpreadsheetFilterByCell";
import { ExcelCellFormatCategory } from "./ExcelCellFormatCategory";
import { SpreadsheetCellRangeBorders } from "./SpreadsheetCellRangeBorders";
import { LazyReadOnlyNotifyCollection$1 } from "./LazyReadOnlyNotifyCollection$1";
import { ISpreadsheetEditInfo } from "./ISpreadsheetEditInfo";
import { CustomDOMEventProxy } from "./CustomDOMEventProxy";
import { ComboBoxVisualElement } from "./ComboBoxVisualElement";
import { ToggleButtonVisualElement } from "./ToggleButtonVisualElement";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { SpreadsheetToolTipType } from "./SpreadsheetToolTipType";
import { CellDiagonalBorder } from "./CellDiagonalBorder";
import { MouseOperationState } from "./MouseOperationState";
import { MouseDownInProgressResult } from "./MouseDownInProgressResult";
import { SpreadsheetHeaderResizeType } from "./SpreadsheetHeaderResizeType";
import { ScrollInfoAmount } from "./ScrollInfoAmount";
import { SpreadsheetChartDataInfo } from "./SpreadsheetChartDataInfo";
import { ExtendedRangeScrollInfo } from "./ExtendedRangeScrollInfo";
import { SpreadsheetResolvedRenderFormat } from "./SpreadsheetResolvedRenderFormat";
import { WorkbookSerializationProviderBase } from "./WorkbookSerializationProviderBase";
import { CellRegionMapBase } from "./CellRegionMapBase";
import { WorkbookDataObjectLoadContext } from "./WorkbookDataObjectLoadContext";
import { WorkbookDataObjectSaveContext } from "./WorkbookDataObjectSaveContext";
import { TextReader } from "../../igniteui-angular-core/ES2015/TextReader";
import { TextWriter } from "../../igniteui-angular-core/ES2015/TextWriter";
import { UndoExecuteContext } from "./UndoExecuteContext";
import { UndoHistoryItemType } from "./UndoHistoryItemType";
import { WorkbookUndoUnitBase } from "./WorkbookUndoUnitBase";
import { AdjustableVisualElement } from "./AdjustableVisualElement";
import { VisualElementInputType } from "./VisualElementInputType";
import { FormatCellsDialogBorderInfo } from "./FormatCellsDialogBorderInfo";
import { SpreadsheetDialogFormatCategory } from "./SpreadsheetDialogFormatCategory";
import { SpreadsheetDialogFormat } from "./SpreadsheetDialogFormat";
import { CellBorderPresetType } from "./CellBorderPresetType";
import { CellBorderType } from "./CellBorderType";
import { SortCriteriaRow_RowElementPart } from "./SortCriteriaRow_RowElementPart";
import { ThemeColorPickerControlViewModel } from "./ThemeColorPickerControlViewModel";
import { DialogFontStyle } from "./DialogFontStyle";
import { ISpreadsheetDialogFormatsService } from "./ISpreadsheetDialogFormatsService";
/**
 * Defines a base class for spreadsheet chart adapters that creates and initializes a container element which contains the elements required to display the chart in a spreadsheet based on a [[WorksheetChart]] instance.
 */
export declare abstract class SpreadsheetChartAdapterBase extends Base {
    static $t: Type;
    /**
     * @hidden
     */
    abstract _a(a: WorksheetChart, b: Spreadsheet): SpreadsheetChartElementInfo;
    /**
     * @hidden
     */
    abstract _b(a: WorksheetChart): boolean;
}
/**
 * @hidden
 */
export declare class SortConditionWrapper extends Base implements INotifyPropertyChanged {
    static $t: Type;
    private _f;
    private _s;
    private _x;
    private _z;
    private _d;
    private _k;
    private _ab;
    private _ac;
    private _a;
    private _ae;
    private _b;
    private _c;
    private static _o;
    private static _ai;
    private static _ah;
    constructor(a: SortDialogViewModel, b: any, c: number);
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected _ak(a: string): void;
    toString(): string;
    private _aj;
    _ad(a: boolean): string;
    private _v;
    _al(a: number, b?: boolean): void;
    _am(): void;
    _an(): void;
    _j(): SortConditionWrapper;
    _u(): number;
    _n(a: SortCondition, b: SortDialogViewModel_ApplySortErrorInfo): {
        ret: boolean;
        p0: SortCondition;
        p1: SortDialogViewModel_ApplySortErrorInfo;
    };
    _af: string;
    readonly _l: SortDirection;
    readonly _i: Spreadsheet;
    private static readonly _p;
    _t: number;
    readonly _q: IList$1<ComboBoxListItem>;
    _aa: any;
    readonly _w: number;
    readonly _m: boolean;
    _y: number;
    _e: SortDirectionWithCustomListOptions;
    _g: SpreadsheetSortDialogConditionType;
    readonly _h: SpreadsheetSortDialogConditionType;
    readonly _r: IList$1<ComboBoxListItem>;
}
/**
 * @hidden
 */
export declare class SortDialogViewModel extends Base implements INotifyPropertyChanged {
    static $t: Type;
    private _d;
    private _n;
    private _ad;
    private _c;
    private _q;
    private _i;
    private _aq;
    private _aw;
    private _ai;
    private _ag;
    private _j;
    private _l;
    private _al;
    private _aa;
    private _o;
    private _s;
    private _a2;
    private _a;
    private _am;
    private _ao;
    private _r;
    constructor(a: Spreadsheet, b: SortTargetResult, c: (arg1: WorksheetRegionAddress) => void);
    _activeRowIndexChanged: (sender: any, e: ActiveRowIndexChangedEventArgs) => void;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    private static _v;
    private _h;
    private _br;
    private _bs;
    private _at;
    private _bt;
    private _bw;
    private _g;
    private _a6;
    private _a7;
    _au(): number;
    _av(a: WorksheetRegionAddress): number;
    _a8(a: string, ...b: any[]): string;
    private _ay;
    private _az;
    private _a9;
    _ae(a: SortConditionWrapper): boolean;
    private _af;
    private readonly _ac;
    private _bx;
    private _by;
    private _b3;
    private _b5;
    private _b6;
    private _b7;
    _b9(a: SortConditionWrapper): void;
    private _b8;
    private _ca;
    private _cb;
    private _cc;
    _cd(a: SortConditionWrapper): void;
    private _ce;
    _f(): SortConditionWrapper;
    _u(a: SortDialogViewModel_ApplySortErrorInfo): {
        ret: boolean;
        p0: SortDialogViewModel_ApplySortErrorInfo;
    };
    _bu(): void;
    _bv(): void;
    _bz(): void;
    _b0(): void;
    readonly _ak: boolean;
    protected _b1(a: Nullable$1<number>, b: Nullable$1<number>): void;
    protected _b2(a: string): void;
    readonly _k: WorksheetRegionAddress;
    readonly _m: WorksheetRegionAddress;
    readonly _e: Spreadsheet;
    _ax: Nullable$1<number>;
    readonly _a0: string;
    readonly _t: boolean;
    readonly _a1: string;
    readonly _w: boolean;
    readonly _x: boolean;
    readonly _y: boolean;
    readonly _z: boolean;
    _ab: boolean;
    _a3: string;
    readonly _an: ObservableCollection$1<ComboBoxListItem>;
    readonly _a4: string;
    readonly _a5: string;
    readonly _b: ObservableCollectionExtended$1<ComboBoxListItem>;
    readonly _ba: string;
    readonly _bb: string;
    _ah: boolean;
    _aj: boolean;
    readonly _bc: string;
    readonly _bd: string;
    readonly _be: string;
    readonly _bf: string;
    readonly _bg: string;
    readonly _ap: ObservableCollection$1<ComboBoxListItem>;
    readonly _ar: ObservableCollection$1<SortConditionWrapper>;
    readonly _bh: string;
    readonly _bi: string;
    readonly _bk: string;
    readonly _bj: string;
    readonly _bn: string;
    readonly _bo: string;
    readonly _bp: string;
    readonly _bl: string;
    readonly _bm: string;
    _p: WorksheetSortType;
    readonly _bq: string;
    private _b4;
}
/**
 * @hidden
 */
export declare class SortDialogViewModel_ApplySortErrorInfo extends Base {
    static $t: Type;
    constructor(a: number, b: string);
    constructor(a: number, b: SortConditionWrapper, c: string, d: string);
    constructor(a: number, ..._rest: any[]);
    a: SortConditionWrapper;
    d: string;
    c: string;
    readonly b: number;
}
/**
 * @hidden
 */
export declare class CellDropDown extends Base {
    static $t: Type;
    private readonly b;
    private a;
    private e;
    constructor(a: Spreadsheet);
    readonly c: boolean;
    f(): void;
    d(a: SpreadsheetPane, b: Rect, c: List$1<string>, d: number, e: (arg1: number) => void): boolean;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetCellEditManager extends Base {
    static $t: Type;
    private f;
    private a;
    private h;
    private m;
    private n;
    private w;
    private u;
    private s;
    private j;
    private aj;
    constructor(a: Spreadsheet);
    abstract readonly ac: boolean;
    abstract readonly ad: boolean;
    readonly i: SpreadsheetCell;
    readonly x: CellFill;
    readonly l: SpreadsheetCellEditInfo;
    readonly o: SpreadsheetCellRange;
    readonly p: SpreadsheetCellRange;
    protected readonly c: EditModeWorkbookFont;
    protected abstract readonly ah: boolean;
    readonly t: SpreadsheetPane;
    readonly v: SpreadsheetPaneManager;
    readonly g: Spreadsheet;
    protected abstract ak(): number;
    protected abstract aa(a: SpreadsheetPane): boolean;
    protected abstract b(): EditModeWorkbookFont;
    protected abstract as(a: string, b: boolean, c: boolean, d: boolean): void;
    protected am(): string;
    protected abstract e(): ISpreadsheetEditorValue;
    protected an(a: boolean): void;
    protected abstract ap(): void;
    protected abstract at(): void;
    protected ax(a: SpreadsheetCell, b: EditModeWorkbookFont): void;
    protected ay(): void;
    y(a: SpreadsheetCell, b: boolean, c?: string, d?: boolean, e?: boolean): boolean;
    private z;
    abstract ab(a: SpreadsheetAction): boolean;
    protected k(a: SpreadsheetPaneManager, b: SpreadsheetCell): SpreadsheetCellEditInfo;
    ae(a: SpreadsheetCellExitModeAction, b: boolean, c?: boolean, d?: boolean): boolean;
    private af;
    abstract ag(a: SpreadsheetAction, b: boolean): boolean;
    d(): ISpreadsheetEditorValue;
    al(): number;
    abstract ao(): void;
    abstract aq(): void;
    ar(): void;
    au(): void;
    abstract av(a: Point, b: boolean): void;
    aw(): void;
    abstract az(): void;
    ai(): boolean;
    private q;
    private r;
}
/**
 * @hidden
 */
export declare class JsCellEditManager extends SpreadsheetCellEditManager {
    static $t: Type;
    constructor(a: Spreadsheet);
    protected get_ac(): boolean;
    readonly ac: boolean;
    protected get_ad(): boolean;
    readonly ad: boolean;
    protected get_ah(): boolean;
    protected readonly ah: boolean;
    private a0;
    protected as(a: string, b: boolean, c: boolean, d: boolean): void;
    protected ap(): void;
    protected aa(a: SpreadsheetPane): boolean;
    protected ak(): number;
    protected b(): EditModeWorkbookFont;
    ab(a: SpreadsheetAction): boolean;
    protected at(): void;
    protected e(): ISpreadsheetEditorValue;
    ag(a: SpreadsheetAction, b?: boolean): boolean;
    ao(): void;
    aq(): void;
    av(a: Point, b: boolean): void;
    az(): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetMenuBuilder$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    protected readonly c: Spreadsheet;
    constructor($t: Type, a: Spreadsheet);
    protected af(a: string): string;
    protected abstract w(a: T): IEnumerable$1<T>;
    protected abstract x(a: T): Nullable$1<SpreadsheetAction>;
    protected abstract aq(a: T): string;
    protected abstract ab(a: T): Nullable$1<SpreadsheetContextMenuSubItem>;
    protected abstract l(a: boolean, b: boolean, c: WorkbookColorInfo): T;
    protected abstract m(a: boolean, b: boolean, c: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): T;
    protected abstract d(a: boolean, b: boolean, c: CellFill): T;
    protected abstract n(a: SpreadsheetAction): T;
    protected e(a: SpreadsheetAction, b: SpreadsheetContextMenuSubItem): T;
    protected abstract az(a: T, b: T): void;
    protected abstract a0(a: T): void;
    protected abstract o(): T;
    protected abstract p(a: SpreadsheetContextMenuSubItem, b: T[]): T;
    protected abstract q(a: T): boolean;
    protected abstract bb(a: T, b: boolean): void;
    protected abstract r(a: T): boolean;
    protected abstract bc(a: T, b: boolean): void;
    protected abstract s(a: T): boolean;
    protected abstract bd(a: T, b: boolean): void;
    protected abstract v(a: T): boolean;
    protected abstract be(a: T, b: string): void;
    protected as(a: SpreadsheetAction, b: SpreadsheetContextMenuSubItem): string;
    protected ar(a: SpreadsheetAction, b: SpreadsheetCell): string;
    protected at(a: SpreadsheetContextMenuSubItem): string;
    protected av(a: WorkbookColorInfo): string;
    private ax;
    protected au(a: CellFill): string;
    protected aw(a: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): string;
    private ay;
    protected abstract k(a: string, b: string): T;
    protected i(a: ExcelComparisonOperator, b: SpreadsheetContextMenuSubItem): T;
    private ao;
    protected j(a: RelativeDateRangeDuration, b: RelativeDateRangeOffset, c: SpreadsheetContextMenuSubItem): T;
    private ap;
    protected h(a: DatePeriodFilterType, b: number, c: SpreadsheetContextMenuSubItem): T;
    private an;
    protected g(a: SpreadsheetSpecialFilterMenuItems, b: SpreadsheetContextMenuSubItem): T;
    private am;
    protected f(a: SpreadsheetAction): T;
    a(): T[];
    private a1;
    b(a: SpreadsheetContextMenuArea): T[];
    protected z(a: string): Nullable$1<SpreadsheetSpecialFilterMenuItems>;
    protected aa(a: string): Nullable$1<ExcelComparisonOperator>;
    protected y(a: T): Nullable$1<SpreadsheetAction>;
    a4(a: IEnumerable$1<T>): void;
    a2(a: IEnumerable$1<T>, b: SpreadsheetCell): void;
    private a3;
    private a5;
    protected t(a: SpreadsheetContextMenuSubItem): boolean;
    protected a7(a: SpreadsheetAction, b: any): void;
    private a8;
    u(a: string): boolean;
    a6(a: boolean, b: any, c: SpreadsheetCell): void;
    a9(a: string, b: SpreadsheetCell): void;
    protected ba(a: T): void;
    private bf;
    private bg;
    bh(a: IEnumerable$1<T>): void;
}
/**
 * @hidden
 */
export declare class TsSpreadsheetMenuBuilder extends SpreadsheetMenuBuilder$1<DropDownItem> {
    static $t: Type;
    constructor(a: Spreadsheet);
    protected af(a: string): string;
    protected az(a: DropDownItem, b: DropDownItem): void;
    private bi;
    protected a0(a: DropDownItem): void;
    protected d(a: boolean, b: boolean, c: CellFill): DropDownItem;
    protected e(a: SpreadsheetAction, b: SpreadsheetContextMenuSubItem): DropDownItem;
    protected k(a: string, b: string): DropDownItem;
    protected l(a: boolean, b: boolean, c: WorkbookColorInfo): DropDownItem;
    protected m(a: boolean, b: boolean, c: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): DropDownItem;
    protected n(a: SpreadsheetAction): DropDownItem;
    protected o(): DropDownItem;
    protected p(a: SpreadsheetContextMenuSubItem, b: DropDownItem[]): DropDownItem;
    protected x(a: DropDownItem): Nullable$1<SpreadsheetAction>;
    protected aq(a: DropDownItem): string;
    protected q(a: DropDownItem): boolean;
    protected r(a: DropDownItem): boolean;
    protected s(a: DropDownItem): boolean;
    protected w(a: DropDownItem): IEnumerable$1<DropDownItem>;
    static readonly bj: Nullable$1<SpreadsheetContextMenuSubItem>;
    protected ab(a: DropDownItem): Nullable$1<SpreadsheetContextMenuSubItem>;
    protected v(a: DropDownItem): boolean;
    protected ba(a: DropDownItem): void;
    protected bb(a: DropDownItem, b: boolean): void;
    protected bc(a: DropDownItem, b: boolean): void;
    protected bd(a: DropDownItem, b: boolean): void;
    protected be(a: DropDownItem, b: string): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetTabEditManager extends Base {
    static $t: Type;
    private a;
    private d;
    constructor(a: Spreadsheet);
    abstract readonly i: boolean;
    readonly j: boolean;
    readonly b: Spreadsheet;
    protected readonly c: SpreadsheetTabInfo;
    e(): boolean;
    protected abstract f(a: SpreadsheetTabInfo): boolean;
    g(a: boolean, b: boolean, c: boolean): boolean;
    private h;
    protected abstract l(): string;
    protected abstract m(a: SpreadsheetTabInfo, b: string, c: number): void;
    protected abstract n(a: SpreadsheetTabInfo, b: boolean): void;
    protected abstract o(): void;
    protected abstract k(a: SpreadsheetTabInfo): boolean;
}
/**
 * @hidden
 */
export declare class JsTabEditManager extends SpreadsheetTabEditManager {
    static $t: Type;
    constructor(a: Spreadsheet);
    protected get_i(): boolean;
    readonly i: boolean;
    protected f(a: SpreadsheetTabInfo): boolean;
    private p;
    protected l(): string;
    protected m(a: SpreadsheetTabInfo, b: string, c: number): void;
    protected n(a: SpreadsheetTabInfo, b: boolean): void;
    protected k(a: SpreadsheetTabInfo): boolean;
    protected o(): void;
    q(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetShapeContainerElement extends VisualElement {
    static $t: Type;
    private cf;
    private cg;
    private cj;
    private ch;
    constructor(a: SpreadsheetPaneShapeLayer, b: VisualElement);
    protected b7(a: number, b: number, c: number, d: number): void;
    ck: number;
    ci: boolean;
}
/**
 * @hidden
 */
export declare abstract class ShapeVisualManager extends Base {
    static $t: Type;
    readonly b: SpreadsheetPane;
    private readonly a;
    private readonly c;
    private readonly g;
    private readonly h;
    constructor(a: SpreadsheetPane, b: boolean);
    e: boolean;
    readonly f: IList$1<SpreadsheetShape>;
    protected static k(a: SpreadsheetShape, b: HashSet$1<SpreadsheetShape>): any;
    n(): void;
    private static p;
    static q(a: Rect, b: Rect, c: boolean, d: boolean): Rect;
    private static r;
    private o;
    private l;
    private i;
    protected abstract d(a: SpreadsheetShape): boolean;
    protected abstract j(a: SpreadsheetShape, b: HashSet$1<SpreadsheetShape>): any;
    protected abstract m(a: SpreadsheetShape): void;
}
/**
 * @hidden
 */
export declare class PaneShapeVisualManager extends ShapeVisualManager {
    static $t: Type;
    private readonly t;
    private readonly s;
    constructor(a: SpreadsheetPaneShapeLayer, b: VisualElement);
    protected d(a: SpreadsheetShape): boolean;
    protected j(a: SpreadsheetShape, b: HashSet$1<SpreadsheetShape>): any;
    protected m(a: SpreadsheetShape): void;
}
/**
 * Provides information about a visualization of a group of rows and columns in a [[Worksheet]]
 */
export declare class SpreadsheetPane extends PropertyChangeNotifierExtended {
    static $t: Type;
    private readonly _x;
    private readonly _ad;
    private _m;
    private _ai;
    private _i;
    private _j;
    private _g;
    private _v;
    private _z;
    private _ab;
    private readonly _af;
    private _o;
    private _aj;
    private _ak;
    /**
     * @hidden
     */
    readonly _s: ISpreadsheetPaneOwner;
    private _ay;
    private _an;
    private _n;
    constructor(a: SpreadsheetRowScrollRegion, b: SpreadsheetColumnScrollRegion, c: (arg1: SpreadsheetPane) => SpreadsheetSelection, d: ISpreadsheetPaneOwner);
    /**
     * Returns the [[SpreadsheetColumnScrollRegion]] that contains the pane.
     */
    readonly columnScrollRegion: SpreadsheetColumnScrollRegion;
    /**
     * Returns the [[SpreadsheetRowScrollRegion]] that contains the pane.
     */
    readonly rowScrollRegion: SpreadsheetRowScrollRegion;
    /**
     * Returns an object that represents the selection within the pane.
     * <p class="body"><b>Note:</b> Only the selection of the active pane is rendered.</p>
     */
    readonly selection: SpreadsheetSelection;
    /**
     * Returns a range that represents the current visible range.
     */
    readonly visibleRange: SpreadsheetCellRange;
    /**
     * @hidden
     */
    readonly _ag: SpreadsheetSelection;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ac: SpreadsheetImageBackground;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _w: SpreadsheetCellRenderInfoArray;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ao: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _k: MDList$1<SpreadsheetCellValueInfo>;
    /**
     * @hidden
     */
    readonly _p: ObservableCollectionExtended$1<SpreadsheetCellValueInfo>;
    /**
     * @hidden
     */
    readonly _q: ObservableCollectionExtended$1<SpreadsheetDropDownButton>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _aa: SpreadsheetGridLinePen;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _al: boolean;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _l: MDList$1<WorksheetHyperlink>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _h: MDBitArray;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ap: any;
    /**
     * @hidden
     */
    readonly _r: ObservableCollectionExtended$1<SpreadsheetShape>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _am: boolean;
    /**
     * Used to ensure that a specified cell is fully in view within the [[visibleRange]].
     * @param cell The cell that is to be brought into view
     */
    scrollCellIntoView(cell: SpreadsheetCell): void;
    /**
     * Used to ensure that a specified cell is fully in view within the [[visibleRange]].
     * @param cellAddress The A1 style address of the cell that is to be brought into view
     */
    scrollCellIntoView(cellAddress: string): void;
    /**
     * @hidden
     */
    _scrollCellIntoView(a: SpreadsheetCell): void;
    /**
     * @hidden
     */
    _scrollCellIntoView1(a: string): void;
    /**
     * Used to ensure that a specified column is fully in view within the [[visibleRange]].
     * @param index 0 based index of the column to be brought into view.
     * @throws [[ArgumentOutOfRangeException]] The 'index' must be 0 or greater.
     */
    scrollColumnIntoView(index: number): void;
    /**
     * Used to ensure that a specified cell is fully in view within the [[visibleRange]].
     * @param range The cell range that is to be brought into view
     */
    scrollRangeIntoView(range: SpreadsheetCellRange): void;
    /**
     * Used to ensure that a specified cell is fully in view within the [[visibleRange]].
     * @param rangeAddress The A1 style address of the cell range that is to be brought into view
     */
    scrollRangeIntoView(rangeAddress: string): void;
    /**
     * @hidden
     */
    _scrollRangeIntoView(a: SpreadsheetCellRange): void;
    /**
     * @hidden
     */
    _scrollRangeIntoView1(a: string): void;
    /**
     * Used to ensure that a specified row is fully in view within the [[visibleRange]].
     * @param index 0 based index of the row to be brought into view.
     * @throws [[ArgumentOutOfRangeException]] The 'index' must be 0 or greater.
     */
    scrollRowIntoView(index: number): void;
    /**
     * @hidden
     */
    _t(a: Point): SpreadsheetCell;
    /**
     * @hidden
     */
    private _ar;
    /**
     * @hidden
     */
    private static _aq;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneShapeLayer extends ElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _k;
    private _l;
    constructor(a: SpreadsheetPane, b: SpreadsheetSingleLayerView);
    _g(a: Size): Rect;
    dispose(): void;
    _h(a: Size): Size;
}
/**
 * @hidden
 */
export declare abstract class ShapeGeometryPathBuilder extends Base implements IPath2DCommandVisitor$2<ShapeGuideVariables, boolean> {
    static $t: Type;
    protected a: number;
    protected b: number;
    protected readonly e: number;
    protected readonly f: number;
    protected readonly c: number;
    protected readonly d: number;
    constructor(a: number, b: number, c: number, d: number);
    protected abstract h(a: number, b: number, c: number, d: number, e: number, f: number): void;
    protected abstract i(): void;
    protected abstract j(a: number, b: number, c: number, d: number, e: number, f: number): void;
    protected abstract k(a: number, b: number): void;
    protected abstract l(a: number, b: number): void;
    protected m(a: number, b: number, c: number, d: number): void;
    protected static g(a: number, b: number, c: number): number;
    visitCT_Path2DArcTo(value: CT_Path2DArcTo, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DArcTo$i(a: CT_Path2DArcTo, b: ShapeGuideVariables): boolean;
    visitCT_Path2DClose(value: CT_Path2DClose, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DClose$i(a: CT_Path2DClose, b: ShapeGuideVariables): boolean;
    visitCT_Path2DCubicBezierTo(value: CT_Path2DCubicBezierTo, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DCubicBezierTo$i(a: CT_Path2DCubicBezierTo, b: ShapeGuideVariables): boolean;
    visitCT_Path2DLineTo(value: CT_Path2DLineTo, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DLineTo$i(a: CT_Path2DLineTo, b: ShapeGuideVariables): boolean;
    visitCT_Path2DMoveTo(value: CT_Path2DMoveTo, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DMoveTo$i(a: CT_Path2DMoveTo, b: ShapeGuideVariables): boolean;
    visitCT_Path2DQuadBezierTo(value: CT_Path2DQuadBezierTo, argument: ShapeGuideVariables): boolean;
    _visitCT_Path2DQuadBezierTo$i(a: CT_Path2DQuadBezierTo, b: ShapeGuideVariables): boolean;
}
/**
 * @hidden
 */
export declare class SvgPathCreator extends ShapeGeometryPathBuilder {
    static $t: Type;
    private readonly n;
    constructor(a: StringBuilder, b: number, c: number, d: number, e: number);
    protected h(a: number, b: number, c: number, d: number, e: number, f: number): void;
    protected i(): void;
    protected j(a: number, b: number, c: number, d: number, e: number, f: number): void;
    protected k(a: number, b: number): void;
    protected l(a: number, b: number): void;
    protected m(a: number, b: number, c: number, d: number): void;
    private o;
    private p;
}
/**
 * @hidden
 */
export declare class ShapeGeometry extends Base {
    static $t: Type;
    private static m;
    private static o;
    static t(a: StringBuilder, b: number, c: number, d: number, e: number, f: number, g: WorksheetShape): Rect;
    private static q;
    private readonly e;
    private readonly l;
    private readonly f;
    private readonly g;
    private static readonly a;
    private static readonly b;
    private static readonly c;
    private static readonly d;
    constructor(a: string, b: CT_CustomGeometry2D);
    static s<T>($t: Type, a: T, b: number, c: number, d: WorksheetShape, e: (arg1: T, arg2: Worksheet, arg3: CT_Path2D, arg4: ShapeGuideVariables, arg5: number, arg6: number, arg7: ShapeFill, arg8: ShapeOutline, arg9: ShapeFill) => void): Rect;
    static h(a: ShapeGuideVariables, b: ST_AdjAngle): number;
    static i(a: ShapeGuideVariables, b: ST_AdjCoordinate): number;
    static j(a: Nullable$1<ST_Coordinate32>, b: number): number;
    static k(a: ShapeGuideVariables, b: ST_AdjCoordinate): number;
    private static n;
    private static p;
    private r;
}
/**
 * @hidden
 */
export declare class SpreadsheetContextMenu extends Base {
    static $t: Type;
    private readonly b;
    private readonly e;
    private a;
    private static readonly f;
    private d;
    private c;
    constructor(a: Spreadsheet);
    l(a?: boolean): void;
    private o;
    m(): void;
    h(): boolean;
    i(a: SpreadsheetMenuType): boolean;
    g(a: Node): boolean;
    n(): void;
    j(a: SpreadsheetMenuType, b: VisualElement, c: Point, d?: SpreadsheetDropDownButton): boolean;
    k(a: Key, b: ModifierKeys, c: any): Nullable$1<boolean>;
}
/**
 * @hidden
 */
export declare class SpreadsheetMeasureHelper extends Base {
    static $t: Type;
    private readonly d;
    private k;
    private r;
    private q;
    private p;
    private n;
    private o;
    private m;
    private l;
    readonly a: Brush[];
    private readonly e;
    constructor(a: Spreadsheet);
    readonly s: DomWrapper;
    u(): void;
    private b;
    private c;
    private f;
    t(): HTMLImageElement;
    g(a: string, b: IWorkbookFont, c: Thickness, d: number, e: number): number;
    private ab;
    h(a: string, b: string): number;
    v(a: DomRenderer): void;
    i(a: string, b: IWorkbookFont, c: Thickness, d: number): number;
    j(a: SpreadsheetTabInfo, b?: string, c?: boolean): number;
    w(): void;
    private x;
    private y;
    aa(): void;
    private z;
}
/**
 * @hidden
 */
export interface ISpreadsheetView {
    beforeExecuteCommand(command: SpreadsheetAction, commandParameter: any, sourceElement: any): boolean | null;
    _beforeExecuteCommand$i(a: SpreadsheetAction, b: any, c: any): Nullable$1<boolean>;
    createRenderCache(): SpreadsheetRenderCache;
    readonly hasKeyboardFocusWithin: boolean;
    readonly isCellDropDownOpen: boolean;
    readonly isInNameBox: boolean;
    readonly isScrollLockToggled: boolean;
    readonly updateEditorValueMode: SpreadsheetActiveCellUpdateMode;
    addCellTextLocations(a: Dictionary$2<SpreadsheetCell, Rect>, b: SpreadsheetPane): void;
    createChartTitleElement(a: ChartTextAreaBase, b: any): any;
    closeMenu(): void;
    createCellEditManager(): SpreadsheetCellEditManager;
    createTabEditManager(): SpreadsheetTabEditManager;
    focus(): boolean;
    getLayoutManager(): SpreadsheetAreaLayoutManager;
    notifyCanExecuteChanged(): void;
    onDataObjectPasting(a: WorkbookDataObjectPastingEventArgs): void;
    onHasPendingChangeNotification(): void;
    onNameBoxValueChanged(): void;
    onNameBoxWidthChanged(): void;
    onSheetManagerChanged(a: SpreadsheetPaneManager, b: SpreadsheetPaneManager): void;
    onStateVerified(): void;
    remeasureRootPanel(): void;
    shouldIncludeClipboardFormat(a: IDataObject, b: string): boolean;
    shouldCopyToClipboard(a: IDataObject, b: boolean): boolean;
    showCellDropDown(pane: SpreadsheetPane, cellRect: IgRect, dropdownItems: List$1<string>, initialSelectedIndex: number, onSelectionCommitted: (arg1: number) => void): boolean;
    _showCellDropDown$i(a: SpreadsheetPane, b: Rect, c: List$1<string>, d: number, e: (arg1: number) => void): boolean;
    showSelectAllContextMenu(context: any, relativePoint: IgPoint): void;
    _showSelectAllContextMenu$i(a: any, b: Point): void;
    ShowPaneContextMenu(pane: SpreadsheetPane, area: SpreadsheetSelectionContextMenuArea, relativePoint: IgPoint): void;
    _ShowPaneContextMenu$i(a: SpreadsheetPane, b: SpreadsheetSelectionContextMenuArea, c: Point): void;
    ShowHeaderContextMenu(scrollRegion: SpreadsheetScrollRegion, relativePoint: IgPoint): void;
    _ShowHeaderContextMenu$i(a: SpreadsheetScrollRegion, b: Point): void;
    ShowTabContextMenu(tab: SpreadsheetTabInfo, point: IgPoint): void;
    _ShowTabContextMenu$i(a: SpreadsheetTabInfo, b: Point): void;
    showFilterMenu(a: SpreadsheetPane, b: SpreadsheetDropDownButton): boolean;
    showMessageBox(a: string, b: string, c: MessageBoxButton, d: MessageBoxImage, e: MessageBoxResult): MessageBoxResult;
    readonly usesLogicalPixels: boolean;
    verifyLayout(): void;
    showFilterDialog(a: FilterDialogViewModel): void;
    showTopOrBottomDialog(a: TopOrBottomDialogViewModel): void;
    showCustomSortDialog(a: SortDialogViewModel, b: () => void): void;
    showFormatCellsDialog(a: FormatCellsDialogViewModel, b: (arg1: SpreadsheetDialogResult) => void): void;
    readonly spreadsheetDialogServicesManager: ISpreadsheetDialogServicesManager;
    getRect(scrollRegion: SpreadsheetScrollRegion): IgRect;
    _getRect$i(a: SpreadsheetScrollRegion): Rect;
    getPaneRect(pane: SpreadsheetPane): IgRect;
    _getPaneRect$i(a: SpreadsheetPane): Rect;
    initializeEditFont(a: EditModeWorkbookFontInfo, b: boolean): void;
}
/**
 * @hidden
 */
export declare let ISpreadsheetView_$type: Type;
/**
 * @hidden
 */
export declare class SpreadsheetView extends Base implements ISpreadsheetView {
    static $t: Type;
    private readonly b;
    private a;
    constructor(a: Spreadsheet);
    beforeExecuteCommand(command: SpreadsheetAction, commandParameter: any, sourceElement: any): boolean | null;
    _beforeExecuteCommand$i(a: SpreadsheetAction, b: any, c: any): Nullable$1<boolean>;
    createChartTitleElement(a: ChartTextAreaBase, b: any): any;
    createRenderCache(): SpreadsheetRenderCache;
    readonly hasKeyboardFocusWithin: boolean;
    readonly isCellDropDownOpen: boolean;
    readonly isInNameBox: boolean;
    readonly isScrollLockToggled: boolean;
    readonly updateEditorValueMode: SpreadsheetActiveCellUpdateMode;
    addCellTextLocations(a: Dictionary$2<SpreadsheetCell, Rect>, b: SpreadsheetPane): void;
    closeMenu(): void;
    createCellEditManager(): SpreadsheetCellEditManager;
    createTabEditManager(): SpreadsheetTabEditManager;
    focus(): boolean;
    getLayoutManager(): SpreadsheetAreaLayoutManager;
    notifyCanExecuteChanged(): void;
    onDataObjectPasting(a: WorkbookDataObjectPastingEventArgs): void;
    onHasPendingChangeNotification(): void;
    onNameBoxValueChanged(): void;
    onNameBoxWidthChanged(): void;
    onSheetManagerChanged(a: SpreadsheetPaneManager, b: SpreadsheetPaneManager): void;
    onStateVerified(): void;
    remeasureRootPanel(): void;
    shouldIncludeClipboardFormat(a: IDataObject, b: string): boolean;
    shouldCopyToClipboard(a: IDataObject, b: boolean): boolean;
    showCellDropDown(pane: SpreadsheetPane, cellRect: IgRect, dropdownItems: List$1<string>, initialSelectedIndex: number, onSelectionCommitted: (arg1: number) => void): boolean;
    _showCellDropDown$i(a: SpreadsheetPane, b: Rect, c: List$1<string>, d: number, e: (arg1: number) => void): boolean;
    showSelectAllContextMenu(context: any, relativePoint: IgPoint): void;
    _showSelectAllContextMenu$i(a: any, b: Point): void;
    ShowPaneContextMenu(pane: SpreadsheetPane, area: SpreadsheetSelectionContextMenuArea, relativePoint: IgPoint): void;
    _ShowPaneContextMenu$i(a: SpreadsheetPane, b: SpreadsheetSelectionContextMenuArea, c: Point): void;
    ShowHeaderContextMenu(scrollRegion: SpreadsheetScrollRegion, relativePoint: IgPoint): void;
    _ShowHeaderContextMenu$i(a: SpreadsheetScrollRegion, b: Point): void;
    ShowTabContextMenu(tab: SpreadsheetTabInfo, point: IgPoint): void;
    _ShowTabContextMenu$i(a: SpreadsheetTabInfo, b: Point): void;
    showFilterMenu(a: SpreadsheetPane, b: SpreadsheetDropDownButton): boolean;
    showMessageBox(a: string, b: string, c: MessageBoxButton, d: MessageBoxImage, e: MessageBoxResult): MessageBoxResult;
    readonly usesLogicalPixels: boolean;
    verifyLayout(): void;
    showFilterDialog(a: FilterDialogViewModel): void;
    showTopOrBottomDialog(a: TopOrBottomDialogViewModel): void;
    showCustomSortDialog(a: SortDialogViewModel, b: () => void): void;
    showFormatCellsDialog(a: FormatCellsDialogViewModel, b: (arg1: SpreadsheetDialogResult) => void): void;
    readonly spreadsheetDialogServicesManager: ISpreadsheetDialogServicesManager;
    getRect(scrollRegion: SpreadsheetScrollRegion): IgRect;
    _getRect$i(a: SpreadsheetScrollRegion): Rect;
    getPaneRect(pane: SpreadsheetPane): IgRect;
    _getPaneRect$i(a: SpreadsheetPane): Rect;
    initializeEditFont(a: EditModeWorkbookFontInfo, b: boolean): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetAreaLayoutManager extends Base {
    static $t: Type;
    private b;
    private m;
    private v;
    private readonly g;
    private readonly f;
    private ao;
    private aq;
    private o;
    private ei;
    private ar;
    private d;
    private as;
    private at;
    private ep;
    private en;
    private w;
    private au;
    private t;
    private s;
    private et;
    private eo;
    private y;
    private a;
    constructor();
    protected readonly h: SpreadsheetAreaLayoutManager_RowColumnInfo;
    protected readonly e: SpreadsheetAreaLayoutManager_DragType;
    protected readonly aj: boolean;
    readonly ev: Size;
    protected readonly ap: List$1<SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>>;
    x: PixelConverter;
    protected readonly er: Rect;
    protected readonly i: SpreadsheetAreaLayoutManager_RowColumnInfo;
    n: SpreadsheetPaneManager;
    c: Spreadsheet;
    p: SpreadsheetTabManager;
    readonly be: number;
    private z;
    protected abstract cf(): void;
    protected abstract dw(): void;
    protected abstract cz(a: Size): void;
    protected abstract bv(a: Rect, b: Rect): void;
    protected abstract ay(): number;
    private aa;
    protected abstract cg(): void;
    protected abstract dx(): void;
    protected abstract c0(a: Size): void;
    protected abstract bw(a: Rect, b: Rect): void;
    private ab;
    private ai;
    protected abstract ch(): void;
    protected abstract dy(): void;
    protected abstract bz(a: Rect): void;
    protected abstract c2(a: Size): void;
    protected abstract cr(): void;
    protected abstract d9(a: string, b: string): void;
    protected abstract readonly a8: number;
    protected abstract readonly a7: number;
    protected abstract eq<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer): Rect;
    protected abstract q(a: SpreadsheetScrollRegion): IElementLayerContainer;
    protected abstract r(a: SpreadsheetPane): IElementLayerContainer;
    protected abstract dl<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer): void;
    protected abstract c3<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer, b: Size): void;
    protected abstract b0<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer, b: Rect): void;
    protected abstract u(a: ScrollInfoOrientation): IPlatformScrollBarAdapter;
    protected abstract dz(a: IPlatformScrollBarAdapter): void;
    protected abstract ct(a: IPlatformScrollBarAdapter, b: SpreadsheetScrollInfo): void;
    protected abstract b2(a: IPlatformScrollBarAdapter, b: Rect): void;
    protected abstract c5(a: IPlatformScrollBarAdapter, b: Size): void;
    protected abstract a0(a: IPlatformScrollBarAdapter): number;
    protected abstract az(a: IPlatformScrollBarAdapter): number;
    private ac;
    protected abstract ci(): void;
    protected abstract d1(): void;
    protected abstract b4(a: Rect): void;
    protected abstract c7(a: Size): void;
    protected abstract cy(): void;
    protected abstract cu(a: boolean, b: boolean, c: SpreadsheetScrollRegion, d: SpreadsheetScrollRegion): void;
    protected abstract cj(a: boolean): void;
    protected abstract d2(a: boolean): void;
    protected abstract b5(a: boolean, b: Rect): void;
    protected abstract c8(a: boolean, b: Size): void;
    protected abstract a1(a: boolean): number;
    protected abstract cl(a: boolean): void;
    protected abstract d4(a: boolean): void;
    protected abstract b7(a: boolean, b: Rect): void;
    protected abstract da(a: boolean, b: Size): void;
    private ad;
    protected abstract cv(a: Rect): void;
    protected abstract ck(): void;
    protected abstract d3(): void;
    protected abstract b6(a: Rect): void;
    protected abstract c9(a: Size): void;
    private ag;
    protected abstract co(): void;
    protected abstract d7(): void;
    protected abstract ca(a: Rect): void;
    protected abstract dd(a: Size): void;
    protected abstract readonly ba: number;
    protected abstract readonly bd: number;
    private ah;
    protected abstract cp(): void;
    protected abstract d8(): void;
    protected abstract cb(a: Rect): void;
    protected abstract de(a: Size): void;
    protected abstract readonly bb: number;
    protected abstract readonly bc: number;
    private ae;
    protected abstract cm(): void;
    protected abstract d5(): void;
    protected abstract b8(a: Rect): void;
    protected abstract db(a: Size): void;
    private af;
    protected abstract cn(): void;
    protected abstract d6(): void;
    protected abstract b9(a: Rect): void;
    protected abstract dc(a: Size): void;
    protected abstract readonly a9: number;
    protected abstract du(a: SpreadsheetTabManager, b: SpreadsheetTabManager): void;
    protected abstract dm(a: SpreadsheetPaneManager, b: SpreadsheetPaneManager): void;
    abstract cw(): void;
    abstract cx(): void;
    protected abstract cd(): void;
    protected abstract am(a: SpreadsheetCursor): boolean;
    protected abstract ek(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Point): Point;
    protected abstract el(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetScrollRegion>, b: Point): Point;
    protected abstract es(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Rect): Rect;
    protected abstract em(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Point): Point;
    protected abstract ej(a: Point): Point;
    private bt;
    protected df(a: Size): void;
    eu(a: Size): Size;
    private bu;
    private bx;
    private by;
    private b1;
    private b3;
    av(a: number, b: number): {
        ret: number;
        p0: number;
        p1: number;
    };
    private aw;
    cc(): void;
    private ce;
    protected cq(a: (arg1: IPlatformScrollBarAdapter) => void): void;
    protected j(): SpreadsheetCellRange;
    l(): SpreadsheetPane;
    ax(): number;
    protected a2(a: number): number;
    protected a3(a: number): number;
    k(a: Point): SpreadsheetHitTestResult;
    private cs;
    protected dg(a: Size): void;
    ew(a: Size): Size;
    private c1;
    private a5;
    private c4;
    private c6;
    private a6;
    dh(): void;
    protected di(a: SpreadsheetAreaLayoutManager_DragType, b: SpreadsheetAreaLayoutManager_DragType): void;
    dj(a: Point): void;
    dk(): void;
    ak(a: PaneSplitterType, b: InputProxy, c: Point): boolean;
    al(a: InputProxy): boolean;
    dq(a: InputProxy): void;
    dp(): void;
    private dn;
    private dr;
    protected dt(a: any, b: string, c: any): void;
    private static ds;
    private dv;
    private d0;
    private ea;
    eb(a: Point, b: Point): void;
    private ec;
    ed(a: boolean, b: boolean, c: Point): void;
    an(a: Point, b: Point): boolean;
    private ee;
    private ef;
    private eg;
    eh(): void;
}
/**
 * @hidden
 */
export declare abstract class VisualElementSpreadsheetAreaLayoutManager extends SpreadsheetAreaLayoutManager {
    static $t: Type;
    readonly ez: SpreadsheetAreaVisualElement;
    constructor(a: SpreadsheetAreaVisualElement);
    ey(a: SpreadsheetScrollRegion): VisualElement;
    ex(a: SpreadsheetPane): VisualElement;
    abstract readonly e0: SpreadsheetInplaceEditorElement;
    protected dg(a: Size): void;
    protected df(a: Size): void;
    e2: boolean;
    cw(): void;
    e3: boolean;
    cx(): void;
    e4(): void;
    abstract readonly e1: SpreadsheetTabItemAreaElement;
}
/**
 * @hidden
 */
export declare class JsSpreadsheetAreaLayoutManager extends VisualElementSpreadsheetAreaLayoutManager {
    static $t: Type;
    constructor(a: SpreadsheetAreaVisualElement);
    private fa;
    private fc;
    protected cf(): void;
    private fl;
    protected dw(): void;
    private fn;
    protected cz(a: Size): void;
    protected bv(a: Rect, b: Rect): void;
    protected ay(): number;
    private fb;
    protected cg(): void;
    protected dx(): void;
    protected c0(a: Size): void;
    protected bw(a: Rect, b: Rect): void;
    protected get_e0(): SpreadsheetInplaceEditorElement;
    readonly e0: SpreadsheetInplaceEditorElement;
    private fd;
    protected ch(): void;
    protected dy(): void;
    protected bz(a: Rect): void;
    protected c2(a: Size): void;
    protected cr(): void;
    protected d9(a: string, b: string): void;
    protected get_a8(): number;
    protected readonly a8: number;
    protected get_a7(): number;
    protected readonly a7: number;
    protected eq<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer): Rect;
    protected q(a: SpreadsheetScrollRegion): IElementLayerContainer;
    private fm;
    private fj;
    protected r(a: SpreadsheetPane): IElementLayerContainer;
    protected dl<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer): void;
    protected c3<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer, b: Size): void;
    protected b0<T extends ISupportPropertyChangeNotifications>($t: Type, a: IElementLayerContainer, b: Rect): void;
    protected u(a: ScrollInfoOrientation): IPlatformScrollBarAdapter;
    fk(a: ScrollBarVisualElement): void;
    protected dz(a: IPlatformScrollBarAdapter): void;
    protected ct(a: IPlatformScrollBarAdapter, b: SpreadsheetScrollInfo): void;
    protected b2(a: IPlatformScrollBarAdapter, b: Rect): void;
    protected c5(a: IPlatformScrollBarAdapter, b: Size): void;
    protected a0(a: IPlatformScrollBarAdapter): number;
    protected az(a: IPlatformScrollBarAdapter): number;
    private fh;
    protected ci(): void;
    protected d1(): void;
    protected b4(a: Rect): void;
    protected c7(a: Size): void;
    protected cy(): void;
    private ff;
    private fe;
    protected cu(a: boolean, b: boolean, c: SpreadsheetScrollRegion, d: SpreadsheetScrollRegion): void;
    protected cj(a: boolean): void;
    protected d2(a: boolean): void;
    protected b5(a: boolean, b: Rect): void;
    protected c8(a: boolean, b: Size): void;
    protected a1(a: boolean): number;
    private e6;
    private e5;
    protected cl(a: boolean): void;
    protected d4(a: boolean): void;
    protected b7(a: boolean, b: Rect): void;
    protected da(a: boolean, b: Size): void;
    private fg;
    protected cv(a: Rect): void;
    protected ck(): void;
    protected d3(): void;
    protected b6(a: Rect): void;
    protected c9(a: Size): void;
    private fi;
    protected co(): void;
    protected d7(): void;
    protected ca(a: Rect): void;
    protected dd(a: Size): void;
    protected get_ba(): number;
    protected readonly ba: number;
    protected get_bd(): number;
    protected readonly bd: number;
    protected get_e1(): SpreadsheetTabItemAreaElement;
    readonly e1: SpreadsheetTabItemAreaElement;
    private e9;
    protected cp(): void;
    protected d8(): void;
    protected cb(a: Rect): void;
    protected de(a: Size): void;
    protected get_bb(): number;
    protected readonly bb: number;
    protected get_bc(): number;
    protected readonly bc: number;
    private e7;
    protected cm(): void;
    protected d5(): void;
    protected b8(a: Rect): void;
    protected db(a: Size): void;
    private e8;
    protected cn(): void;
    protected d6(): void;
    protected b9(a: Rect): void;
    protected dc(a: Size): void;
    protected get_a9(): number;
    protected readonly a9: number;
    protected du(a: SpreadsheetTabManager, b: SpreadsheetTabManager): void;
    protected dm(a: SpreadsheetPaneManager, b: SpreadsheetPaneManager): void;
    protected cd(): void;
    protected di(a: SpreadsheetAreaLayoutManager_DragType, b: SpreadsheetAreaLayoutManager_DragType): void;
    protected am(a: SpreadsheetCursor): boolean;
    protected ek(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Point): Point;
    protected el(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetScrollRegion>, b: Point): Point;
    protected es(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Rect): Rect;
    protected em(a: SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetPane>, b: Point): Point;
    protected ej(a: Point): Point;
    protected dt(a: any, b: string, c: any): void;
    e4(): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetElementLayerContainer$1<T extends ISupportPropertyChangeNotifications> extends Base implements ISpreadsheetInteractionManagerOwner, IElementLayerContainer {
    static $t: Type;
    protected $t: Type;
    readonly e: SpreadsheetLayerContainerElement$1<T>;
    readonly b: T;
    readonly d: SpreadsheetInteractionManager$1<T>;
    private a;
    constructor($t: Type, a: SpreadsheetLayerContainerElement$1<T>, b: T);
    abstract c(): SpreadsheetInteractionManager$1<T>;
    f(a: Size): void;
    focusControlIfNeeded(): void;
    getRelativeSpreadsheetControlBounds(): IgRect;
    _getRelativeSpreadsheetControlBounds$i(): Rect;
    getLayerContainerSize(): IgSize;
    _getLayerContainerSize$i(): Size;
    hideToolTip(): void;
    isMouseOver(): boolean;
    isToolTipAllowed(): boolean;
    onCursorChanged(a: SpreadsheetCursor): void;
    showToolTip(a: SpreadsheetToolTipContext): void;
}
/**
 * @hidden
 */
export declare class PaneLayerContainer extends SpreadsheetElementLayerContainer$1<SpreadsheetPane> {
    static $t: Type;
    constructor(a: SpreadsheetLayerContainerElement$1<SpreadsheetPane>, b: SpreadsheetPane);
    c(): SpreadsheetInteractionManager$1<SpreadsheetPane>;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetRendererElementLayer$1<TViewModel> extends RendererElementLayer$2<TViewModel, ISpreadsheetGraphics> {
    static $t: Type;
    protected $tViewModel: Type;
    constructor($tViewModel: Type, a: TViewModel, b: IRendererElementLayerView$2<TViewModel, ISpreadsheetGraphics>, c: ElementLayerInfo);
    abstract readonly _s: SpreadsheetRenderCache;
}
/**
 * Base class for the object that represents a row or column of [[SpreadsheetPane]] instances.
 */
export declare abstract class SpreadsheetScrollRegion extends PropertyChangeNotifierExtended {
    static $t: Type;
    private readonly _w;
    private _cd;
    private _ca;
    private _bb;
    private _bc;
    private _a3;
    private _ao;
    private _a6;
    private _bd;
    private readonly _k;
    private _j;
    private _p;
    private _q;
    private _u;
    private _by;
    private _bz;
    private _b1;
    private _b2;
    private _b3;
    private _be;
    private _a5;
    private _a4;
    private _a9;
    private _ba;
    private _b0;
    private _ae;
    private _aa;
    private _y;
    private _n;
    private _cc;
    private _cb;
    private _ac;
    private _ck;
    private _g;
    private _h;
    private _cl;
    private _a7;
    private _cn;
    private _cm;
    private _an;
    private _ah;
    constructor();
    /**
     * @hidden
     */
    e(sender: any, property: string, extraInfo: any): void;
    /**
     * Returns the actual displayed width or height of the area.
     */
    /**
    * Returns the actual displayed width or height of the area.
    */
    actualExtent: number;
    /**
     * Returns the index of the last visible item including partially visible.
     */
    /**
    * Returns the index of the last visible item including partially visible.
    */
    endIndex: number;
    /**
     * Returns a boolean indicating if the area supports scrolling.
     */
    /**
    * Returns a boolean indicating if the area supports scrolling.
    */
    isFrozen: boolean;
    /**
     * Returns the index of the first visible item.
     */
    /**
    * Returns the index of the first visible item.
    */
    startIndex: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ab: SpreadsheetSelection;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _l: ObservableCollectionExtended$1<WorksheetItemPosition>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _z: SpreadsheetScrollRegion;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ap: boolean;
    /**
     * @hidden
     */
    _bg: number;
    /**
     * @hidden
     */
    _bh: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b4: (arg1: number) => number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b5: (arg1: number) => number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _r: PageStartScrollCache;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bi: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bj: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bk: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b6: (arg1: number) => string;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b7: (arg1: number) => WorksheetItemPosition;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b8: (arg1: number) => WorksheetItemPosition;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _b9: (arg1: number, arg2: number) => IList$1<WorksheetItemPosition>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _af: IWorkbookFont;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _co: Nullable$1<number>;
    /**
     * @hidden
     */
    abstract readonly _aw: boolean;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _cp: Nullable$1<number>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bp: number;
    /**
     * @hidden
     */
    readonly _m: ObservableCollectionExtended$1<WorksheetItemPosition>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ch: number;
    private _a8;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bq: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ci: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _s: PageStartScrollCache;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _cq: Nullable$1<number>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _br: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bs: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bt: number;
    /**
     * @hidden
     */
    readonly _bu: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _cr: Nullable$1<number>;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bv: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ad: ISpreadsheetResourceProvider;
    /**
     * @hidden
     */
    readonly _x: SpreadsheetScrollInfo;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ai: WorksheetProtectedSelectionMode;
    /**
     * @hidden
     */
    _ak: (arg1: number, arg2: number) => void;
    /**
     * @hidden
     */
    _am: (arg1: number, arg2: IntRange[]) => void;
    /**
     * @hidden
     */
    _al: (arg1: number) => void;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _o: ISpreadsheetPaneOwner;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _v: SpreadsheetPaneRowColumnSizingMode;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bw: number;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _bx: number;
    /**
     * @hidden
     */
    private static _aq;
    /**
     * @hidden
     */
    abstract _a0(): IList$1<IntRange>;
    /**
     * @hidden
     */
    _t(a: number): SpreadsheetHeaderState;
    /**
     * @hidden
     */
    _ag(a: number): WorksheetItemPosition;
    /**
     * @hidden
     */
    _cf(a: number): number;
    /**
     * @hidden
     */
    _aj(a: boolean): IntRange;
    /**
     * @hidden
     */
    _a1(a: number): IList$1<WorksheetItemPosition>;
    /**
     * @hidden
     */
    abstract _a2(): IList$1<IntRange>;
    /**
     * @hidden
     */
    _bl(): number;
    /**
     * @hidden
     */
    _i(a: boolean, b?: boolean): number[];
    /**
     * @hidden
     */
    _bm(a: WorksheetItemPosition, b: boolean, c?: boolean): number;
    /**
     * @hidden
     */
    _bn(a: number, b: boolean, c?: boolean): number;
    /**
     * @hidden
     */
    _bo(a: number, b: number): number;
    /**
     * @hidden
     */
    _cg(a: number, b: number): number;
    /**
     * @hidden
     */
    _ar(): boolean;
    /**
     * @hidden
     */
    _as(a: number): boolean;
    /**
     * @hidden
     */
    _au(a: number, b?: boolean): boolean;
    /**
     * @hidden
     */
    _av(a: number, b?: boolean): boolean;
    /**
     * @hidden
     */
    _ax(a: number): boolean;
    /**
     * @hidden
     */
    _ay(a: any): boolean;
    /**
     * @hidden
     */
    _az(a: number, b: WorksheetItemPosition): {
        ret: boolean;
        p1: WorksheetItemPosition;
    };
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetHeaderContentLayerBase$1<TVisual> extends SpreadsheetRendererElementLayer$1<SpreadsheetScrollRegion> {
    static $t: Type;
    protected $tVisual: Type;
    private _x;
    private _z;
    private _u;
    private readonly _y;
    constructor($tVisual: Type, a: SpreadsheetScrollRegion, b: IRendererElementLayerView$2<SpreadsheetScrollRegion, ISpreadsheetGraphics>, c: boolean);
    _g(a: Size): Rect;
    _h(a: Size): Size;
    protected _p(): void;
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    protected abstract _v(): SpreadsheetHeaderContentLayerBase_HeaderInfo$1<TVisual>;
    protected abstract _t(): TVisual;
    protected abstract _ab(a: SpreadsheetScrollRegion, b: SpreadsheetHeaderContentLayerBase_HeaderInfo$1<TVisual>, c: number, d: string): void;
    protected abstract _ad(): void;
    protected abstract _ac(): void;
    protected abstract _ae(): void;
    protected abstract _ah(): void;
    protected abstract _ai(a: TVisual): void;
    protected readonly _aa: IEnumerable$1<SpreadsheetHeaderContentLayerBase_HeaderInfo$1<TVisual>>;
    protected static _w<TVisual>($tVisual: Type, a: boolean, b: SpreadsheetHeaderState): SpreadsheetResourceId;
    private _ag;
    private _af;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderContentLayer extends SpreadsheetHeaderContentLayerBase$1<HeaderVisual> {
    static $t: Type;
    constructor(a: SpreadsheetScrollRegion, b: IRendererElementLayerView$2<SpreadsheetScrollRegion, ISpreadsheetGraphics>);
    protected _v(): SpreadsheetHeaderContentLayerBase_HeaderInfo$1<HeaderVisual>;
    protected _t(): HeaderVisual;
    protected _ab(a: SpreadsheetScrollRegion, b: SpreadsheetHeaderContentLayerBase_HeaderInfo$1<HeaderVisual>, c: number, d: string): void;
    protected _ad(): void;
    protected _ac(): void;
    protected _ae(): void;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected _ah(): void;
    protected _ai(a: HeaderVisual): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellValueInfo extends Base {
    static $t: Type;
    o(a: SpreadsheetCellValueInfo): boolean;
    an: any;
    d: CellConditionalFormat;
    h: WorksheetRow;
    w: number;
    af: number;
    ab: number;
    ak: number;
    x: number;
    ag: number;
    r: boolean;
    ao: any;
    ap: any;
    aa: number;
    ae: number;
    ad: number;
    am: Nullable$1<number>;
    al: Nullable$1<number>;
    i: boolean;
    v: number;
    ac: number;
    y: number;
    z: number;
    ah: number;
    ai: number;
    readonly aj: number;
    s: boolean;
    j: boolean;
    t: boolean;
    e: HorizontalCellAlignment;
    f: VerticalCellAlignment;
    g: WorkbookColorInfo;
    ar: Color;
    c: SpreadsheetText;
    u: number;
    a: AccountingUnderlineInfo;
    private b;
    n: boolean;
    k: boolean;
    q: boolean;
    l: boolean;
    p: boolean;
    private m;
    private aq;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetPaneCellValueLayerBase$1<TVisual> extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    protected $tVisual: Type;
    private readonly _u;
    private _x;
    private readonly _v;
    constructor($tVisual: Type, a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>, c: boolean);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected readonly _w: IEnumerable$1<SpreadsheetPaneCellValueLayerBase_CellInfo$1<TVisual>>;
    protected abstract _t(): TVisual;
    protected abstract _aa(a: TVisual, b: SpreadsheetCellValueInfo, c: number, d: number, e: number, f: number): void;
    protected abstract _ab(a: TVisual, b: number, c: number): void;
    protected abstract _af(): void;
    protected abstract _ag(a: TVisual): void;
    protected _z(a: List$1<SpreadsheetPaneCellValueLayerBase_CellInfo$1<TVisual>>, b: List$1<SpreadsheetCellValueInfo>, c: List$1<SpreadsheetPaneCellValueLayerBase_CellInfo$1<TVisual>>): void;
    private _ad;
    private _ac;
    protected _ae(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellValueElement extends VisualElement {
    static $t: Type;
    cv: string;
    ck: boolean;
    cr: number;
    cu: string;
    cp: number;
    co: number;
    ct: string;
    cq: number;
    cn: number;
    cs: string;
    cm: number;
    cl: number;
    private ci;
    private cf;
    ch: SpreadsheetPane;
    constructor(a: VisualElement, b: SpreadsheetPane);
    cg: SpreadsheetCellValueInfo;
    cj: boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneCellValueLayer extends SpreadsheetPaneCellValueLayerBase$1<SpreadsheetCellValueElement> {
    static $t: Type;
    static readonly _ai: PixelConverter;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    _g(a: Size): Rect;
    protected _t(): SpreadsheetCellValueElement;
    protected _z(a: List$1<SpreadsheetPaneCellValueLayerBase_CellInfo$1<SpreadsheetCellValueElement>>, b: List$1<SpreadsheetCellValueInfo>, c: List$1<SpreadsheetPaneCellValueLayerBase_CellInfo$1<SpreadsheetCellValueElement>>): void;
    protected _aa(a: SpreadsheetCellValueElement, b: SpreadsheetCellValueInfo, c: number, d: number, e: number, f: number): void;
    protected _ab(a: SpreadsheetCellValueElement, b: number, c: number): void;
    protected _af(): void;
    protected _ag(a: SpreadsheetCellValueElement): void;
    private readonly _ah;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneCellValueLayerBase_CellInfo$1<TVisual> extends Base {
    static $t: Type;
    protected $tVisual: Type;
    a: SpreadsheetCellValueInfo;
    readonly b: TVisual;
    constructor($tVisual: Type, a: SpreadsheetCellValueInfo, b: TVisual);
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneCellValueLayer_JsCellInfo extends SpreadsheetPaneCellValueLayerBase_CellInfo$1<SpreadsheetCellValueElement> {
    static $t: Type;
    private e;
    private d;
    constructor(a: SpreadsheetCellValueInfo, b: SpreadsheetCellValueElement);
    c(a: SpreadsheetCellValueInfo): SpreadsheetPaneCellValueLayer_JsCellInfo;
    f(a: SpreadsheetCellValueInfo): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetInstructionGraphics extends Base implements ISpreadsheetGraphics {
    static $t: Type;
    readonly a: VisualElement;
    readonly e: List$1<SpreadsheetDrawingOperation>;
    private readonly d;
    private b;
    constructor(a: VisualElement);
    g(a: JsSpreadsheetRenderCache): void;
    f(): void;
    private c;
    drawDropDownGlyph(a: SpreadsheetDropDownButtonState, b: number, c: number, d: number, e: number): void;
    drawEllipse(a: number, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawHeaderText(a: IWorkbookFont, b: string, c: number, d: number, e: SpreadsheetResourceId, f?: number): void;
    drawIcon(a: FormatConditionIcon, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
    drawLine3(a: SpreadsheetGridLinePen, b: number, c: number, d: number, e: number, f: number): void;
    drawLine4(penWidth: number, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine4$i(a: number, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine2(pen: CellBorderPen, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine2$i(a: CellBorderPen, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    drawLine(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawRectangle1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    drawRectangle(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    fillRectangle1(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number): void;
    fillRectangle5(a: WorkbookColorInfo, b: number, c: number, d: number, e: number): void;
    fillRectangle3(a: CellFill, b: number, c: number, d: number, e: number): void;
    fillRectangle4(a: WorkbookColorInfo, b: WorkbookColorInfo, c: boolean, d: number, e: number, f: number, g: number): void;
    fillRectangle(a: SpreadsheetImageBackground, b: number, c: number, d: number, e: number, f: number, g: number): void;
    fillRectangle2(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
    getFarPixelAdjustment(a: PixelConverter): number;
}
/**
 * @hidden
 */
export declare class SpreadsheetDrawingElementHelper extends Base {
    static $t: Type;
    static a(a: VisualElement, b: SpreadsheetInstructionGraphics, c: number): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetSingleLayerView extends ElementLayerViewSingle implements IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics> {
    static $t: Type;
    readonly c: VisualElement;
    constructor(a: VisualElement);
    d(): void;
    invalidateMeasure(): void;
    invalidateArrange(): void;
    createRenderer(): ILayerRenderer;
    releaseRenderer(a: ILayerRenderer): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetSingleLayerView_Renderer extends Base implements ILayerRenderer {
    static $t: Type;
    private a;
    constructor(a: SpreadsheetSingleLayerView);
    onUnloaded(): void;
    invalidateLayout(): void;
    invalidateRender(): void;
    measure(availableSize: IgSize): void;
    _measure$i(a: Size): void;
    arrange(finalSize: IgSize): void;
    _arrange$i(a: Size): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetSingleLayerElement extends VisualElement {
    static $t: Type;
    readonly cf: SpreadsheetSingleLayerView;
    constructor(a: VisualElement, b: string);
    bz(): void;
    protected b7(a: number, b: number, c: number, d: number): void;
    b5(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellValueLayerElement extends SpreadsheetSingleLayerElement {
    static $t: Type;
    readonly cg: VisualElement;
    private readonly cj;
    readonly ci: SpreadsheetInstructionGraphics;
    constructor(a: VisualElement);
    b5(): void;
    ch(a: SpreadsheetCellValueInfo): SpreadsheetCellValueElement;
    ck(a: SpreadsheetCellValueElement): void;
    cl(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetDrawingLayerElement extends SpreadsheetSingleLayerElement {
    static $t: Type;
    static readonly ch: PixelConverter;
    private readonly cg;
    constructor(a: VisualElement);
    protected b7(a: number, b: number, c: number, d: number): void;
}
/**
 * @hidden
 */
export declare class ScrollRegionLayerContainer extends SpreadsheetElementLayerContainer$1<SpreadsheetScrollRegion> {
    static $t: Type;
    constructor(a: SpreadsheetLayerContainerElement$1<SpreadsheetScrollRegion>, b: SpreadsheetScrollRegion);
    c(): SpreadsheetInteractionManager$1<SpreadsheetScrollRegion>;
}
/**
 * @hidden
 */
export declare class Spreadsheet extends PropertyChangeNotifierExtended {
    static $t: Type;
    private _az;
    private _e9;
    private _cc;
    private _i9;
    private _bg;
    private _bi;
    private _as;
    css: SpreadsheetCss;
    createRendererContainer: () => RendererContainer;
    readonly _a1: SpreadsheetMetricsCache;
    readonly _at: SpreadsheetContextMenu;
    private _cd;
    isDisabled: boolean;
    private _eb;
    brushes: Dictionary$2<SpreadsheetResourceId, Brush>;
    private _cj;
    isScrollLocked: boolean;
    readonly _bj: SpreadsheetVisualElementDomBuilder;
    readonly _fa: DomRenderer;
    private _height;
    height: number;
    private _width;
    width: number;
    readonly _a0: SpreadsheetMeasureHelper;
    readonly _ad: SpreadsheetAreaLayoutManager;
    readonly _bh: SpreadsheetVisualElement;
    readonly _ay: SpreadsheetInplaceEditorElement;
    _ja: Rect;
    readonly _c3: boolean;
    private _fm;
    _language: any;
    containerResized(): void;
    destroy(): void;
    executeCommand(a: SpreadsheetAction): boolean;
    flush(): void;
    onInitialized(): void;
    private _gq;
    private _ei;
    _ek: number;
    private _e8;
    provideContainer(a: any): void;
    scheduleArrange(): void;
    styleUpdated(): void;
    _ga(): void;
    _fb(a: string): DomWrapper;
    _m(): VisualElement;
    _o(a: SpreadsheetScrollRegion): VisualElement;
    _n(a: SpreadsheetPane): VisualElement;
    _di(): boolean;
    private _p;
    readonly _c6: boolean;
    _f7(): void;
    _d5(a: SpreadsheetPane, b: Rect, c: List$1<string>, d: number, e: (arg1: number) => void): boolean;
    _ha(a: string): void;
    _dy(a: Key, b: ModifierKeys, c: any): boolean;
    readonly _eg: List$1<Spreadsheet_ElementCommandInfo>;
    _h8(a: ButtonVisualElement, b: SpreadsheetAction): void;
    _r(a: HTMLElement, b: string, c?: boolean): ISpreadsheetDialog;
    _q(a: HTMLElement, b: string, c: () => void, d?: boolean): ISpreadsheetDialog;
    private _fx;
    _fy(a: boolean): void;
    _i5: IDataObject;
    private _g0;
    private _g1;
    private _s;
    private _t;
    _a7: SpreadsheetPaneManager;
    private _b1;
    private _ac;
    private _bs;
    private _j;
    private _b0;
    private _l;
    private _z;
    private _bq;
    private _ah;
    private _bb;
    private _b6;
    _b3: UndoManager;
    private _be;
    private _ab;
    private _ao;
    private _eh;
    private _aa;
    private _fe;
    private _y;
    private _a2;
    private _fu;
    private _ec;
    private _fl;
    constructor();
    private _ae;
    activeCell: SpreadsheetCell;
    activeCellAddress: string;
    private _al;
    _am: SpreadsheetCellRange;
    private _a4;
    activePane: SpreadsheetPane;
    private _a9;
    activeSelection: SpreadsheetSelection;
    readonly activeSelectionCellRangeFormat: SpreadsheetCellRangeFormat;
    private _by;
    activeTable: WorksheetTable;
    private _bv;
    activeWorksheet: Worksheet;
    private _b8;
    allowAddWorksheet: boolean;
    private _b9;
    allowDeleteWorksheet: boolean;
    private _ca;
    areGridlinesVisible: boolean;
    private _cb;
    areHeadersVisible: boolean;
    private _aj;
    cellEditMode: SpreadsheetCellEditMode;
    private _bm;
    chartAdapter: SpreadsheetChartAdapterBase;
    private _av;
    enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection;
    private _fd;
    fixedDecimalPlaceCount: number;
    private _ce;
    isEnterKeyNavigationEnabled: boolean;
    private _cf;
    isFixedDecimalEnabled: boolean;
    private _cg;
    isFormulaBarVisible: boolean;
    isInEditMode: boolean;
    private _ch;
    isInEndMode: boolean;
    private _ci;
    isRenamingWorksheet: boolean;
    private _ck;
    isUndoEnabled: boolean;
    private _ej;
    nameBoxWidth: number;
    readonly panes: ReadOnlyNotifyCollection$1<SpreadsheetPane>;
    _getPanesAsArray(): SpreadsheetPane[];
    private _aq;
    selectionMode: SpreadsheetCellSelectionMode;
    private _g;
    selectedWorksheets: Worksheet[];
    private _b4;
    undoManager: UndoManager;
    private _i6;
    validationInputMessagePosition: Point;
    private _hk;
    private _bt;
    workbook: Workbook;
    private _ff;
    zoomLevel: number;
    readonly _a5: SpreadsheetPane;
    readonly _ai: SpreadsheetCellEditManager;
    readonly _de: boolean;
    readonly _dg: boolean;
    readonly _dh: boolean;
    readonly _dn: boolean;
    _a3: SpreadsheetMouseOperation;
    readonly _ef: IList$1<string>;
    private _fp;
    _ft: string;
    _dr: boolean;
    _ds: boolean;
    readonly _b2: PixelConverter;
    private _bk;
    _bl: ISpreadsheetResourceProvider;
    readonly _a8: SpreadsheetPaneManager;
    readonly _bc: SpreadsheetTabEditManager;
    readonly _bd: SpreadsheetTabInfo;
    readonly _bf: SpreadsheetTabManager;
    _u: ISpreadsheetView;
    _v: ISpreadsheetView;
    private _w;
    private readonly _x;
    exportVisualData(): any;
    _hitTest(a: Point): SpreadsheetHitTestResult;
    showFilterDialogForWorksheet(a: number, b?: SpreadsheetFilterDialogOption): void;
    showFilterDialogForTable(a: WorksheetTableColumn, b?: SpreadsheetFilterDialogOption): void;
    showTopOrBottomDialogForWorksheet(a: number): void;
    showTopOrBottomDialogForTable(a: WorksheetTableColumn): void;
    _ii(a: SortTargetResult): void;
    _cl(a: SpreadsheetPane): boolean;
    _f0(): void;
    _f1(a: SpreadsheetPane, b: SpreadsheetCell, c: number, d: number, e: number, f: number): void;
    _cw(a: boolean, b: boolean): boolean;
    _cr(a: SpreadsheetAction, b: any, c?: boolean): boolean;
    _cq(a: SpreadsheetAction, b: any, c: LongValue, d?: boolean): boolean;
    _ct(a: boolean): boolean;
    _cv(a: SpreadsheetCellRange): boolean;
    _cu(a: SpreadsheetCell): boolean;
    _f8(): void;
    _ge(): void;
    _gf(): void;
    _cx(a: boolean, b?: boolean, c?: boolean): boolean;
    _gg(a: SpreadsheetCell): void;
    _gh(a: Point, b: SpreadsheetPane): void;
    _cz(a: SpreadsheetAction, b: any, c: any): boolean;
    _c0(a: SpreadsheetAction, b: any, c: any, d: LongValue): boolean;
    _c1(a: boolean): boolean;
    static _i7(a: SpreadsheetPane, b?: boolean): Point;
    _an(): SpreadsheetCellRange;
    _fr(a: IChartObject): string;
    _fs(a: string, ...b: any[]): string;
    _gn(): void;
    _dt(a: SpreadsheetCell): boolean;
    _g2(a: boolean, b: boolean): void;
    private _fc;
    private _e6;
    _g9(a: boolean): void;
    _dv(a: InputProxy, b: any): boolean;
    _dw(a: string, b?: boolean, c?: boolean): boolean;
    _du(a: SpreadsheetDropDownButton): boolean;
    _dz(a: SpreadsheetUserPromptInfo): boolean;
    _hi(): void;
    private _ho;
    _d0(a: Key, b: ModifierKeys): boolean;
    _d1(a: number, b: boolean): boolean;
    _hq(): void;
    _d2(a: string, b?: boolean): boolean;
    _ia(a?: boolean): void;
    _d4(a: SpreadsheetPane, b: SpreadsheetDropDownButton): boolean;
    _il(): void;
    _ir(): void;
    _d7(a: boolean): boolean;
    _is(): void;
    _i0(): void;
    private _fv;
    private _fw;
    private _fz;
    private _f2;
    private _cs;
    private _f3;
    _f5(a: UndoManager): void;
    _f6(a: UndoManager, b: Workbook): void;
    _f4(a: Sheet): void;
    private _gb;
    private _gd;
    _gi(a: SpreadsheetTransactionOperation, b: () => void, c?: SpreadsheetCellRange[], d?: boolean, e?: string, f?: boolean, g?: boolean): void;
    private _gj;
    private _fk;
    private _ag;
    _bo(a: SpreadsheetAction, b: any): LongValue;
    _bp(a: LongValue, b: any): LongValue;
    _c2(a: Spreadsheet_InternalFlags): boolean;
    private _br;
    private _bx;
    private _ee;
    private _gl;
    private _gm;
    private _go;
    private _gp;
    private static _c4;
    private static _c5;
    private _b7;
    private _c7;
    private static _dc;
    private static _dj;
    private static _dm;
    private static _dq;
    private _gr;
    private _gs;
    private _hm;
    private _dx;
    private _he;
    private static _hd;
    private static _hg;
    _hj<TContext extends IChangeInfoContext, TValue>($tContext: Type, $tValue: Type, a: TContext, b: ChangeInfo$2<TContext, TValue>): void;
    private _hn;
    private _hp;
    _hs(): void;
    private _ht;
    private _hy;
    private _h9;
    _ic<T>($t: Type, a: T, b: (arg1: WorksheetCellFormatProxy, arg2: T) => void, c: SpreadsheetTransactionOperation, d: CellFormatValue): void;
    private _id;
    private _ie;
    _d3(): boolean;
    private _ig;
    private _ih;
    private _im;
    private _d6;
    private _d8;
    private _d9;
    private _ea;
    private _iu;
    private _iv;
    private _it;
    private _iw;
    _ix(): void;
    private _iy;
    private _iz;
    private _i1;
    private _i2;
    private _i3;
    private _i4;
    actionExecuted: (sender: any, e: SpreadsheetCommandExecutedEventArgs) => void;
    _gt(v: SpreadsheetCommandExecutedEventArgs): void;
    actionExecuting: (sender: any, e: SpreadsheetCommandExecutingEventArgs) => void;
    _gu(v: SpreadsheetCommandExecutingEventArgs): void;
    _hu(v: SpreadsheetActiveCellChangedEventArgs): void;
    activeCellChanged: (sender: any, e: SpreadsheetActiveCellChangedEventArgs) => void;
    protected _gv(v: SpreadsheetActiveCellChangedEventArgs): void;
    _hv(v: SpreadsheetActivePaneChangedEventArgs): void;
    activePaneChanged: (sender: any, e: SpreadsheetActivePaneChangedEventArgs) => void;
    protected _gw(v: SpreadsheetActivePaneChangedEventArgs): void;
    _hw(v: SpreadsheetActiveTableChangedEventArgs): void;
    activeTableChanged: (sender: any, e: SpreadsheetActiveTableChangedEventArgs) => void;
    protected _gx(v: SpreadsheetActiveTableChangedEventArgs): void;
    _hx(v: SpreadsheetActiveWorksheetChangedEventArgs): void;
    activeWorksheetChanged: (sender: any, e: SpreadsheetActiveWorksheetChangedEventArgs) => void;
    protected _gy(v: SpreadsheetActiveWorksheetChangedEventArgs): void;
    private _gz;
    _cellDropDownItemSelecting: (sender: any, e: SpreadsheetCellDropDownItemSelectingEventArgs) => void;
    _h2(v: SpreadsheetEditModeExitingEventArgs): void;
    editModeExiting: (sender: any, e: SpreadsheetEditModeExitingEventArgs) => void;
    protected _g6(v: SpreadsheetEditModeExitingEventArgs): void;
    _h1(v: SpreadsheetEditModeExitedEventArgs): void;
    editModeExited: (sender: any, e: SpreadsheetEditModeExitedEventArgs) => void;
    protected _g5(v: SpreadsheetEditModeExitedEventArgs): void;
    _h0(v: SpreadsheetEditModeEnteringEventArgs): void;
    editModeEntering: (sender: any, e: SpreadsheetEditModeEnteringEventArgs) => void;
    protected _g4(v: SpreadsheetEditModeEnteringEventArgs): void;
    _hz(v: SpreadsheetEditModeEnteredEventArgs): void;
    editModeEntered: (sender: any, e: SpreadsheetEditModeEnteredEventArgs) => void;
    protected _g3(v: SpreadsheetEditModeEnteredEventArgs): void;
    _h3(v: SpreadsheetEditModeValidationErrorEventArgs): void;
    editModeValidationError: (sender: any, e: SpreadsheetEditModeValidationErrorEventArgs) => void;
    protected _g7(v: SpreadsheetEditModeValidationErrorEventArgs): void;
    _h4(v: SpreadsheetEditRangePasswordNeededEventArgs): void;
    editRangePasswordNeeded: (sender: any, e: SpreadsheetEditRangePasswordNeededEventArgs) => void;
    protected _g8(v: SpreadsheetEditRangePasswordNeededEventArgs): void;
    hyperlinkExecuting: (sender: any, e: SpreadsheetHyperlinkExecutingEventArgs) => void;
    protected _hb(v: SpreadsheetHyperlinkExecutingEventArgs): void;
    _h5(v: SpreadsheetSelectionChangedEventArgs): void;
    selectionChanged: (sender: any, e: SpreadsheetSelectionChangedEventArgs) => void;
    protected _hf(v: SpreadsheetSelectionChangedEventArgs): void;
    _h6(v: SpreadsheetUserPromptInfo): void;
    userPromptDisplaying: (sender: any, e: SpreadsheetUserPromptDisplayingEventArgs) => void;
    protected _hh(v: SpreadsheetUserPromptDisplayingEventArgs): void;
    _h7(): void;
    workbookDirtied: (sender: any, e: SpreadsheetWorkbookDirtiedEventArgs) => void;
    protected _hl(v: SpreadsheetWorkbookDirtiedEventArgs): void;
}
/**
 * @hidden
 */
export declare class Spreadsheet_ElementCommandInfo extends Base {
    static $t: Type;
    readonly a: VisualElement;
    readonly c: SpreadsheetAction;
    protected readonly b: Spreadsheet;
    constructor(a: VisualElement, b: SpreadsheetAction, c: Spreadsheet);
    protected d(a: any, b: EventArgs): void;
}
/**
 * @hidden
 */
export declare class Spreadsheet_ButtonElementCommandInfo extends Spreadsheet_ElementCommandInfo {
    static $t: Type;
    constructor(a: ButtonVisualElement, b: SpreadsheetAction, c: Spreadsheet);
    protected d(a: any, b: EventArgs): void;
    private e;
}
/**
 * @hidden
 */
export declare class Spreadsheet_WorkbookOwner extends Base implements IWorkbookOwner {
    static $t: Type;
    private a;
    constructor(a: Spreadsheet);
    readonly isUndoEnabled: boolean;
    onCellValueChange(a: WorksheetRow, b: number): void;
    _onChange$2$i<TContext extends IChangeInfoContext, TValue>($tContext: Type, $tValue: Type, a: TContext, b: boolean, c: TValue, d: TValue, e: ChangeInfo$2<TContext, TValue>): void;
    onConditionalFormatChange(a: WorksheetRegion): void;
    onCustomViewApplied(a: CustomView): void;
    onTransactionalChangeBegin(a: ExcelChangeAction, b: string): any;
    onTransactionalChangeEnd(a: any): void;
    onTransactionalChangeRollback(a: any): void;
    onSheetRemoving(a: Sheet): void;
}
/**
 * @hidden
 */
export declare abstract class RangeWorksheetCellFormatBase extends PropertyChangeNotifierExtended implements IWorksheetCellFormat {
    static $t: Type;
    private _aa;
    private _p;
    private _t;
    private _i;
    private _u;
    private _o;
    private _j;
    private _n;
    private _h;
    private _ah;
    private _ac;
    private _v;
    private _k;
    private _ae;
    private _w;
    private _l;
    private _ad;
    private _af;
    private _z;
    private _x;
    private _m;
    private _r;
    private _ag;
    constructor();
    alignment: HorizontalCellAlignment;
    bottomBorderColorInfo: WorkbookColorInfo;
    bottomBorderStyle: CellBorderLineStyle;
    diagonalBorderColorInfo: WorkbookColorInfo;
    diagonalBorders: DiagonalBorders;
    diagonalBorderStyle: CellBorderLineStyle;
    fill: CellFill;
    readonly font: IWorkbookFont;
    formatOptions: WorksheetCellFormatOptions;
    formatString: string;
    indent: number;
    readonly _ab: boolean;
    leftBorderColorInfo: WorkbookColorInfo;
    leftBorderStyle: CellBorderLineStyle;
    locked: boolean | null;
    _locked$i: Nullable$1<boolean>;
    rightBorderColorInfo: WorkbookColorInfo;
    rightBorderStyle: CellBorderLineStyle;
    rotation: number;
    shrinkToFit: boolean | null;
    _shrinkToFit$i: Nullable$1<boolean>;
    style: WorkbookStyle;
    topBorderColorInfo: WorkbookColorInfo;
    topBorderStyle: CellBorderLineStyle;
    verticalAlignment: VerticalCellAlignment;
    abstract readonly _s: Workbook;
    wrapText: boolean | null;
    _wrapText$i: Nullable$1<boolean>;
    abstract _ak(a: SpreadsheetCellRangeBorders, b: WorkbookColorInfo, c: CellBorderLineStyle): void;
    setFormatting(a: IWorksheetCellFormat): void;
    _ai(a?: boolean): void;
    _aj(): void;
    protected abstract _q(): IWorksheetCellFormat;
    _g<T>($t: Type, a: T): {
        ret: T;
        p0?: T;
    };
    abstract _al<T>($t: Type, a: (arg1: WorksheetCellFormatProxy, arg2: T) => void, b: T, c: CellFormatValue): void;
    private _am;
    private _an;
    static _y(a: Color): WorkbookColorInfo;
}
/**
 * @hidden
 */
export declare class Spreadsheet_SelectionWorksheetCellFormat extends RangeWorksheetCellFormatBase {
    static $t: Type;
    private _ao;
    constructor(a: Spreadsheet);
    protected _q(): IWorksheetCellFormat;
    _ak(a: SpreadsheetCellRangeBorders, b: WorkbookColorInfo, c: CellBorderLineStyle): void;
    _al<T>($t: Type, a: (arg1: WorksheetCellFormatProxy, arg2: T) => void, b: T, c: CellFormatValue): void;
    protected get__s(): Workbook;
    readonly _s: Workbook;
}
/**
 * @hidden
 */
export declare class Spreadsheet_NameBoxList extends LazyReadOnlyNotifyCollection$1<string> {
    static $t: Type;
    private _p;
    constructor(a: Spreadsheet);
    protected _o(a: IList$1<string>): void;
    _q(): void;
}
/**
 * @hidden
 */
export declare class Spreadsheet_SynchronizationSuspender extends Base implements IDisposable {
    static $t: Type;
    private _a;
    constructor(a: Spreadsheet);
    dispose(): void;
}
/**
 * @hidden
 */
export declare class Spreadsheet_CustomEditValueParser extends Base implements ISpreadsheetEditorValue, ISpreadsheetEditInfo {
    static $t: Type;
    private a;
    private readonly b;
    private readonly c;
    private e;
    constructor(a: Spreadsheet, b: WorksheetCellFormatData);
    d(a: string): any;
    readonly unformattedText: string;
    readonly editCellFormat: WorksheetCellFormatData;
    createDocument(): IGFormattedTextDocument;
    readonly workbook: Workbook;
    readonly isFixedDecimalEnabled: boolean;
    readonly fixedDecimalPlaceCount: number;
}
/**
 * @hidden
 */
export declare class Spreadsheet_NullView extends Base implements ISpreadsheetView {
    static $t: Type;
    private a;
    constructor(a: Spreadsheet);
    beforeExecuteCommand(command: SpreadsheetAction, commandParameter: any, sourceElement: any): boolean | null;
    _beforeExecuteCommand$i(a: SpreadsheetAction, b: any, c: any): Nullable$1<boolean>;
    createRenderCache(): SpreadsheetRenderCache;
    readonly isCellDropDownOpen: boolean;
    readonly isInNameBox: boolean;
    readonly isScrollLockToggled: boolean;
    readonly updateEditorValueMode: SpreadsheetActiveCellUpdateMode;
    addCellTextLocations(a: Dictionary$2<SpreadsheetCell, Rect>, b: SpreadsheetPane): void;
    closeMenu(): void;
    getLayoutManager(): SpreadsheetAreaLayoutManager;
    onSheetManagerChanged(a: SpreadsheetPaneManager, b: SpreadsheetPaneManager): void;
    remeasureRootPanel(): void;
    onNameBoxValueChanged(): void;
    onNameBoxWidthChanged(): void;
    readonly hasKeyboardFocusWithin: boolean;
    focus(): boolean;
    onHasPendingChangeNotification(): void;
    onDataObjectPasting(a: WorkbookDataObjectPastingEventArgs): void;
    notifyCanExecuteChanged(): void;
    onStateVerified(): void;
    shouldIncludeClipboardFormat(a: IDataObject, b: string): boolean;
    shouldCopyToClipboard(a: IDataObject, b: boolean): boolean;
    showCellDropDown(pane: SpreadsheetPane, cellRect: IgRect, dropdownItems: List$1<string>, initialSelectedIndex: number, onSelected: (arg1: number) => void): boolean;
    _showCellDropDown$i(a: SpreadsheetPane, b: Rect, c: List$1<string>, d: number, e: (arg1: number) => void): boolean;
    showSelectAllContextMenu(context: any, relativePoint: IgPoint): void;
    _showSelectAllContextMenu$i(a: any, b: Point): void;
    ShowPaneContextMenu(pane: SpreadsheetPane, area: SpreadsheetSelectionContextMenuArea, relativePoint: IgPoint): void;
    _ShowPaneContextMenu$i(a: SpreadsheetPane, b: SpreadsheetSelectionContextMenuArea, c: Point): void;
    ShowHeaderContextMenu(scrollRegion: SpreadsheetScrollRegion, relativePoint: IgPoint): void;
    _ShowHeaderContextMenu$i(a: SpreadsheetScrollRegion, b: Point): void;
    ShowTabContextMenu(tab: SpreadsheetTabInfo, relativePoint: IgPoint): void;
    _ShowTabContextMenu$i(a: SpreadsheetTabInfo, b: Point): void;
    showFilterMenu(a: SpreadsheetPane, b: SpreadsheetDropDownButton): boolean;
    createCellEditManager(): SpreadsheetCellEditManager;
    createTabEditManager(): SpreadsheetTabEditManager;
    showMessageBox(a: string, b: string, c: MessageBoxButton, d: MessageBoxImage, e: MessageBoxResult): MessageBoxResult;
    readonly usesLogicalPixels: boolean;
    verifyLayout(): void;
    showFilterDialog(a: FilterDialogViewModel): void;
    showTopOrBottomDialog(a: TopOrBottomDialogViewModel): void;
    showCustomSortDialog(a: SortDialogViewModel, b: () => void): void;
    showFormatCellsDialog(a: FormatCellsDialogViewModel, b: (arg1: SpreadsheetDialogResult) => void): void;
    readonly spreadsheetDialogServicesManager: ISpreadsheetDialogServicesManager;
    getRect(scrollRegion: SpreadsheetScrollRegion): IgRect;
    _getRect$i(a: SpreadsheetScrollRegion): Rect;
    getPaneRect(pane: SpreadsheetPane): IgRect;
    _getPaneRect$i(a: SpreadsheetPane): Rect;
    initializeEditFont(a: EditModeWorkbookFontInfo, b: boolean): void;
    createChartTitleElement(a: ChartTextAreaBase, b: any): any;
}
/**
 * @hidden
 */
export declare class Spreadsheet_NullCellEditManager extends SpreadsheetCellEditManager {
    static $t: Type;
    constructor(a: Spreadsheet);
    protected get_ac(): boolean;
    readonly ac: boolean;
    protected get_ad(): boolean;
    readonly ad: boolean;
    protected get_ah(): boolean;
    protected readonly ah: boolean;
    protected as(a: string, b: boolean, c: boolean, d: boolean): void;
    protected ap(): void;
    protected aa(a: SpreadsheetPane): boolean;
    protected ak(): number;
    protected b(): EditModeWorkbookFont;
    ab(a: SpreadsheetAction): boolean;
    protected at(): void;
    protected e(): ISpreadsheetEditorValue;
    ag(a: SpreadsheetAction, b?: boolean): boolean;
    ao(): void;
    aq(): void;
    av(a: Point, b: boolean): void;
    az(): void;
}
/**
 * @hidden
 */
export declare class Spreadsheet_NullTabEditManager extends SpreadsheetTabEditManager {
    static $t: Type;
    constructor(a: Spreadsheet);
    protected get_i(): boolean;
    readonly i: boolean;
    protected f(a: SpreadsheetTabInfo): boolean;
    protected l(): string;
    protected m(a: SpreadsheetTabInfo, b: string, c: number): void;
    protected n(a: SpreadsheetTabInfo, b: boolean): void;
    protected k(a: SpreadsheetTabInfo): boolean;
    protected o(): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetRenderCache extends Base {
    static $t: Type;
    private af;
    private readonly r;
    private readonly q;
    private f;
    private e;
    readonly p: boolean;
    static readonly ar: Color;
    constructor(a: boolean);
    protected readonly n: boolean;
    abstract readonly l: Workbook;
    ak(): void;
    a<T>($t: Type, a: boolean, b: T, c?: any): T;
    private b;
    private m;
    private i;
    private v;
    private s;
    private t;
    private ae;
    private u;
    x(a: Worksheet, b: number): number;
    w(a: Workbook, b: number, c: number): number;
    ab(a: number, b: Worksheet, c: number): number;
    al(): void;
    an(): void;
    static ai: string;
    ag(): Stream;
    k(): TextMetricsProviderBase;
    ad(): IDisposable;
    c<T>($t: Type, a: boolean, b?: any): T;
    private d;
    static aj: string;
    ah(): Stream;
    ao(): void;
    protected ap(a: any): void;
    aq(): void;
    abstract z(a: SpreadsheetScrollRegion, b: string): number;
    protected abstract y(a: IWorkbookFont, b: number, c: string): number;
    protected abstract aa(a: IWorkbookFont, b: number, c: string): number;
    protected abstract am(): void;
    abstract o(a: SpreadsheetResourceId): boolean;
    abstract j(): TextMetricsProviderBase;
    abstract ac(a: WorksheetCellFormatData, b: number): number;
    abstract g(a: FormattedString, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
    abstract h(a: string, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
}
/**
 * @hidden
 */
export declare class Spreadsheet_NullRenderCache extends SpreadsheetRenderCache {
    static $t: Type;
    private as;
    constructor();
    z(a: SpreadsheetScrollRegion, b: string): number;
    protected y(a: IWorkbookFont, b: number, c: string): number;
    protected aa(a: IWorkbookFont, b: number, c: string): number;
    protected am(): void;
    o(a: SpreadsheetResourceId): boolean;
    j(): TextMetricsProviderBase;
    g(a: FormattedString, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
    h(a: string, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
    ac(a: WorksheetCellFormatData, b: number): number;
    protected get_l(): Workbook;
    readonly l: Workbook;
}
/**
 * @hidden
 */
export declare class SpreadsheetDOMEventProxy extends CustomDOMEventProxy {
    static $t: Type;
    private static _d3;
    private readonly _d0;
    constructor(a: Spreadsheet, b: DomWrapper, c: DomRenderer);
    dl(a: any, b: string, c: List$1<() => void>): void;
    private _d1;
    private static _d2;
    private _d4;
    private _d5;
}
/**
 * @hidden
 */
export declare class SpreadsheetLayerContainerElement$1<T extends ISupportPropertyChangeNotifications> extends VisualElement {
    static $t: Type;
    protected $t: Type;
    private cf;
    constructor($t: Type, a: VisualElement, b: string);
    cg: SpreadsheetInteractionManager$1<T>;
    protected b7(a: number, b: number, c: number, d: number): void;
    ae(a: InputProxy): boolean;
    af(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ad(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
}
/**
 * @hidden
 */
export declare class CanvasSpreadsheetGraphics extends Base implements ISpreadsheetGraphics {
    static $t: Type;
    private readonly e;
    private readonly a;
    private readonly b;
    private h;
    private j;
    private d;
    constructor(ctx_: CanvasRenderingContext2D, a: JsSpreadsheetRenderCache);
    private c;
    drawIcon(a: FormatConditionIcon, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
    getFarPixelAdjustment(a: PixelConverter): number;
    fillRectangle3(a: CellFill, b: number, c: number, d: number, e: number): void;
    fillRectangle1(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number): void;
    drawLine(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawLine2(pen: CellBorderPen, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine2$i(a: CellBorderPen, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    drawLine4(penWidth: number, color: string | Color, dpiFactor: number, x1: number, y1: number, x2: number, y2: number): void;
    _drawLine4$i(a: number, b: Color, c: number, d: number, e: number, f: number, g: number): void;
    drawLine3(a: SpreadsheetGridLinePen, b: number, c: number, d: number, e: number, f: number): void;
    drawRectangle(a: CellBorderPen, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    drawRectangle1(a: CellBorderPen, b: WorkbookColorInfo, c: number, d: number, e: number, f: number, g: number): void;
    private drawRectangle2;
    fillRectangle2(a: SpreadsheetResourceId, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
    fillRectangle5(a: WorkbookColorInfo, b: number, c: number, d: number, e: number): void;
    drawEllipse(a: number, b: SpreadsheetResourceId, c: number, d: number, e: number, f: number, g: number): void;
    fillRectangle(a: SpreadsheetImageBackground, b: number, c: number, d: number, e: number, f: number, g: number): void;
    drawHeaderText(a: IWorkbookFont, b: string, c: number, d: number, e: SpreadsheetResourceId, f?: number): void;
    drawDropDownGlyph(a: SpreadsheetDropDownButtonState, b: number, c: number, d: number, e: number): void;
    private i;
    private f;
    private g;
    private drawLine5;
    private fillRectangle7;
    fillRectangle4(a: WorkbookColorInfo, b: WorkbookColorInfo, c: boolean, d: number, e: number, f: number, g: number): void;
    private fillRectangle6;
}
/**
 * @hidden
 */
export declare class SpreadsheetVisualElementDomBuilder extends VisualElementDomBuilder {
    static $t: Type;
    private readonly ab;
    private ac;
    static readonly ae: PixelConverter;
    constructor(a: Spreadsheet);
    protected r(a: VisualElement): void;
    protected g(a: VisualElement): string;
    protected s(a: ComboBoxVisualElement): void;
    protected v(a: ToggleButtonVisualElement): void;
    private bb;
    protected x(a: VisualElement): void;
    protected z(a: VisualElement): void;
    protected get_n(): string;
    protected get_m(): string;
    protected get_o(): string;
    visitElement(a: VisualElement): boolean;
    ad: SpreadsheetCss;
    private ap;
    static am(a: DomRenderer): any;
    private aq;
    private ar;
    static al(a: DomRenderer, b: SpreadsheetCss): DomWrapper;
    static as(a: any): void;
    private readonly ak;
    aj: List$1<string>;
    private at;
    private au;
    private a1;
    private a4;
    private a0;
    private av;
    private ax;
    private ay;
    private az;
    static a9(a: DomWrapper, b: Thickness): void;
    static a8(a: DomWrapper, b: IWorkbookFont, c: number): void;
    private aw;
    private a2;
    private a3;
    static a5(a: DomWrapper): void;
    static a7(a: DomWrapper): void;
    private a6;
    static ba(a: DomWrapper, b: string): void;
    af(a: SpreadsheetAction): boolean;
    private ag;
    private bc;
    ai(a: string): boolean;
    private ah;
}
/**
 * @hidden
 */
export declare class JsSpreadsheetRenderCache extends SpreadsheetRenderCache {
    static $t: Type;
    private readonly au;
    private a1;
    private a3;
    private as;
    private readonly ay;
    private readonly ax;
    private readonly aw;
    private readonly az;
    constructor(a: Spreadsheet);
    protected get_l(): Workbook;
    readonly l: Workbook;
    protected y(a: IWorkbookFont, b: number, c: string): number;
    protected aa(a: IWorkbookFont, b: number, c: string): number;
    z(a: SpreadsheetScrollRegion, b: string): number;
    protected am(): void;
    o(a: SpreadsheetResourceId): boolean;
    j(): TextMetricsProviderBase;
    ac(a: WorksheetCellFormatData, b: number): number;
    g(a: FormattedString, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
    h(a: string, b: WorksheetCellFormatData, c: number, d: IGTextAlignment, e: boolean, f: boolean, g: number, h: Color): SpreadsheetText;
    private static a9;
    private av;
    a5(a: IWorkbookFont, b?: number): string;
    static a7(a: IWorkbookFont, b: number): string;
    static a8(a: IWorkbookFont, b: number): string;
    private a4;
    private static readonly bc;
    private at;
    static a6(a: IGFormattedTextDocument, b: Workbook, c: number, d: boolean, e: number, f: string): string;
    a2(): HTMLImageElement;
    ba(a: SpreadsheetResourceId): string;
    private static bb;
}
/**
 * @hidden
 */
export declare class SpreadsheetUtilities extends Base {
    static $t: Type;
    static b2(a: Color): number;
    static b3(a: string, b: number): number;
    static a5(a: VisualElement, b: Node): boolean;
    static ch(a: Spreadsheet, b: (arg1: ISpreadsheetGraphics) => void, c: number, d: number): DomWrapper;
    static cf(a: Spreadsheet, b: FormatConditionIcon, c: number, d: number): DomWrapper;
    static ce(a: Spreadsheet, b: CellFill, c: number, d: number, e?: WorkbookColorInfo): DomWrapper;
    static cg(a: Spreadsheet, b: WorkbookColorInfo, c: number, d: number, e?: WorkbookColorInfo): DomWrapper;
    static c6(a: string, b: string, c: boolean): string;
    static c5(a: ChartFillBase, b: Workbook): string;
    static c4(a: ChartBorder, b: Workbook): string;
    static c9(a: HTMLElement): string;
    static bv(a: DomWrapper): IEnumerable$1<DomWrapper>;
    static dd(a: SpreadsheetAction): string;
    static de(a: SpreadsheetAction): string;
    static d7(a: Node): void;
    static c1(a: any): any;
    private static cd;
    static d8(a: DomWrapper, b: number, c: ChartBorder, d: number, e: Workbook): void;
    static eg(a: DomWrapper): void;
    static bf(a: UnicodeCategory): boolean;
    static bg(a: UnicodeCategory): boolean;
    static bi(a: DomWrapper): boolean;
    static bh(a: HTMLElement): boolean;
    static bj(a: HTMLElement, b: string): boolean;
    static ez(a: NormalizedEvent): void;
    static b7(a: number, b: number, c: number): number;
    static bk(a: HTMLElement, b: number, c: number): boolean;
    static cb(a: number, b: number, c: number): number;
    private static readonly a;
    static readonly bq: Dictionary$2<FillPatternStyle, number[][]>;
    static d3: Type;
    static d2: Type;
    static d5: Type;
    static d4: Type;
    static readonly cz: Nullable$1<boolean>;
    static d6(a: ISupportPropertyChangeNotifications, b: IPropertyChangeListener, c: boolean): void;
    private static ci;
    private static du;
    static c2(a: string): string;
    static c3(a: string, b: string): {
        ret: string;
        p1: string;
    };
    static a1(a: FormattedText): boolean;
    static a2(a: string): boolean;
    static a3(a: Workbook): boolean;
    private static j;
    static a4(a: WorksheetShape, b?: boolean): boolean;
    private static readonly bw;
    static cj(a: number, b: boolean): number;
    static a6(a: IList$1<IntRange>, b: number): boolean;
    static a7(a: CultureInfo, b: string, c: string): boolean;
    static ck(a: number): number;
    static b5(a: number): number;
    static b4(a: number): number;
    static e4(a: Rect): Rect;
    private static br;
    private static b;
    private static bs;
    static c(a: CellBorderPen): number[];
    static d(a: BorderLineStyle): number[];
    private static bo;
    private static bt;
    private static bp;
    private static bu;
    static dc(a: Color): string;
    static s(a: FormattedText, b: boolean): IGFormattedTextDocument;
    static r(a: FormattedString, b: IGTextAlignment, c: WorksheetCellFormatData, d: boolean): IGFormattedTextDocument;
    static q(a: FormattedString, b: IGTextAlignment, c: IWorkbookFont, d: boolean): IGFormattedTextDocument;
    static u(a: string, b: Workbook, c: IGTextAlignment, d: WorksheetCellFormatData, e: boolean): IGFormattedTextDocument;
    static t(a: string, b: Workbook, c: IGTextAlignment, d: IWorkbookFont, e: boolean): IGFormattedTextDocument;
    private static v;
    static e3(a: number, b: number): Point;
    static readonly cl: number;
    static n(a: Direction): Direction;
    private static c7;
    static c8(a: CultureInfo, b: boolean): string;
    static bm(a: CellBorderLineStyle, b: CellBorderLineStyle): boolean;
    static cm(a: CellBorderLineStyle): number;
    static cn(a: CellBorderLineStyle): number;
    private static bn;
    static p(a: number): ExcelCellFormatCategory;
    static aa(a: SpreadsheetSelection): SpreadsheetSelectionContextMenuArea;
    static k(a: WorksheetRow, b: number, c: string): {
        ret: CellContentType;
        p2: string;
    };
    private static co;
    static da(a: Spreadsheet, b: ExcelChangeAction, c: string): string;
    static db(a: Spreadsheet, b: SpreadsheetCell): string;
    static cp(a: CultureInfo): number;
    static df(a: any, b: Worksheet, c: WorksheetCellFormatData): string;
    static au(a: Workbook): WorkbookColorInfo;
    static av(a: string, b: WorkbookColorPalette): WorkbookColorInfo;
    static ap(a: any, b: WorksheetCellFormatData, c: Worksheet, d: WorksheetRow, e: number): HorizontalCellAlignment;
    static dg(a: WorksheetRow, b: number): string;
    static am(a: FormatConditionIconSet, b: Nullable$1<number>): FormatConditionIcon;
    static ao(a: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): FormatConditionIcon;
    static an(a: ST_IconSetType, b: Nullable$1<number>): FormatConditionIcon;
    static readonly d1: Tuple$2<FormatConditionIconSet, Nullable$1<number>>;
    static dx(a: CellIconInfo): Tuple$2<FormatConditionIconSet, Nullable$1<number>>;
    static dy(a: IconFilter): Tuple$2<FormatConditionIconSet, Nullable$1<number>>;
    static dz(a: IconSortCondition): Tuple$2<FormatConditionIconSet, Nullable$1<number>>;
    static dh(a: number, b: CultureInfo): string;
    static l(a: Worksheet, b: WorksheetRegionAddress, c: number, d: boolean): CellContentType;
    static by(a: WorksheetTableColumn): List$1<IFilterable>;
    static bx(a: Worksheet, b: number): List$1<IFilterable>;
    static b8(a: CellBorderPen, b: number): number;
    static cq(a: number): number;
    static cy(a: IList$1<IntRange>, b: number): Nullable$1<IntRange>;
    static e2(a: WorkbookColorInfo, b: Workbook, c?: boolean): Color;
    static di(a: Spreadsheet, b: string, ...c: any[]): string;
    static e(a: Workbook): Worksheet[];
    static a0(a: WorksheetShape): CT_GeomGuideList;
    static as(a: WorksheetShape): ShapeFill;
    static aj(a: WorksheetChart): ChartFillBase;
    static at(a: WorksheetShape): ShapeOutline;
    static ai(a: WorksheetChart): ChartBorder;
    static b9(a: WorksheetShape): number;
    static w(a: Worksheet, b: number, c: number): SortFilterAreaBase;
    static cr(a: boolean, b: SpreadsheetCellRange, c: Worksheet): number;
    static dk(a: boolean, b: Spreadsheet, c: SpreadsheetCell): string;
    static dj(a: boolean, b: Spreadsheet, c: CellContentType): string;
    static x(a: Workbook): Spreadsheet;
    static ah(a: WorksheetCellFormatProxy): CellFormatValueChangedOptions;
    static ag(a: WorksheetCellFormatData, b: Worksheet, c: WorksheetRow, d: number, e: boolean): ValueFormatter;
    static bz(a: Worksheet, b: number, c: CellContentType): {
        ret: List$1<any>;
        p2: CellContentType;
    };
    static b1(a: WorksheetTableColumn, b: CellContentType): {
        ret: List$1<any>;
        p1: CellContentType;
    };
    private static b0;
    static f(a: Worksheet, b: IList$1<SpreadsheetCellRange>): WorksheetRegion[];
    static a8(a: string, b: number, c: number): boolean;
    static cs(a: string, b: number): number;
    static ct(a: string, b: number, c: number): number;
    static d9(a: IGFormattedTextSettings, b: IWorkbookFont): void;
    static a9(a: SpreadsheetCellRange, b: WorksheetRegionAddress): boolean;
    static ba(a: FontUnderlineStyle): boolean;
    static bc(a: CellFill): boolean;
    static bb(a: string): boolean;
    static bd(a: string): boolean;
    static be(a: SpreadsheetToolTipType): boolean;
    static ea(a: string, b?: string, c?: string): void;
    private static cx;
    static eb(a: Worksheet, b: WorksheetRegionAddress[]): void;
    static ec(a: ISupportPropertyChangeNotifications, b: IPropertyChangeListener): void;
    static ed(a: Workbook, b: IGFormattedTextDocument, c: BuiltInStyleType, d: BuiltInStyleType): void;
    static ee(a: WorksheetCellFormatProxy, b: HorizontalCellAlignment): void;
    static ef(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static eh(a: WorksheetCellFormatProxy, b: DiagonalBorders): void;
    static ei(a: WorksheetCellFormatProxy, b: CellFill): void;
    static ej(a: WorksheetCellFormatProxy, b: WorkbookColorInfo): void;
    static ek(a: WorksheetCellFormatProxy, b: string): void;
    static el(a: WorksheetCellFormatProxy, b: number): void;
    static em(a: WorksheetCellFormatProxy, b: string): void;
    static en(a: WorksheetCellFormatProxy, b: number): void;
    static eo(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static ep(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static eq(a: string): void;
    static er(a: WorksheetCellFormatProxy, b: number): void;
    static es(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static et(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static eu(a: WorksheetCellFormatProxy, b: WorkbookStyle): void;
    static ev(a: WorksheetCellFormatProxy, b: FontSuperscriptSubscriptStyle): void;
    static ew(a: WorksheetCellFormatProxy, b: FontUnderlineStyle): void;
    static ex(a: WorksheetCellFormatProxy, b: VerticalCellAlignment): void;
    static ey(a: WorksheetCellFormatProxy, b: Nullable$1<boolean>): void;
    static bl(a: WorksheetShape): boolean;
    static dl(a: string): string;
    static i(a: CellBorderLineStyle): CellBorderPen;
    static m(a: DiagonalBorders): CellDiagonalBorder;
    static dn(a: Date, b: Worksheet): string;
    static dq(a: number, b: Worksheet): string;
    private static dv;
    static dp(a: Date, b: Worksheet): string;
    private static dr;
    private static dw;
    private static d0;
    static dt(a: Date, b: Worksheet): string;
    static ds(a: Date, b: Workbook): string;
    static c0(a: Nullable$1<boolean>): Nullable$1<boolean>;
    static aq(a: HorizontalCellAlignment, b: HorizontalCellAlignment): HorizontalCellAlignment;
    static al(a: FontUnderlineStyle, b: boolean): FontUnderlineStyle;
    static ak(a: FontUnderlineStyle, b: boolean): FontUnderlineStyle;
    static o(a: SpreadsheetEnterKeyNavigationDirection): Direction;
    static ac(a: HorizontalCellAlignment): IGTextAlignment;
    static af(a: VerticalCellAlignment): IGVerticalTextAlignment;
    static cc(a: number): number;
    static y(a: WorksheetCellAddress): SpreadsheetCell;
    static z(a: WorksheetRegionAddress): SpreadsheetCellRange;
    static g(a: IList$1<WorksheetRegionAddress>): SpreadsheetCellRange[];
    static ar(a: IGTextAlignment): HorizontalTextAlignment;
    static ab(a: HorizontalTitleAlignment): IGTextAlignment;
    static ad(a: HorizontalTextAlignment): IGTextAlignment;
    static ae(a: VerticalTitleAlignment): IGVerticalTextAlignment;
    static aw(a: SpreadsheetCell): WorksheetCellAddress;
    static ay(a: SpreadsheetCellRange): WorksheetRegionAddress;
    static ax(a: SpreadsheetCell): WorksheetRegionAddress;
    static az(a: number, b: number): WorksheetRegionAddress;
    static h(a: IList$1<SpreadsheetCellRange>): WorksheetRegionAddress[];
    static e1(a: Dictionary$2<Worksheet, WorksheetRegion[]>, b?: HashSet$1<string>): void;
    static e0(a: Worksheet, b: WorksheetRegionAddress[], c?: HashSet$1<string>): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellEditInfo extends Base {
    static $t: Type;
    readonly a: SpreadsheetCellValueInfo;
    readonly b: WorksheetCellFormatData;
    readonly c: boolean;
    constructor(a: SpreadsheetCellValueInfo, b: WorksheetCellFormatData, c: boolean);
}
/**
 * @hidden
 */
export declare class AccountingUnderlineInfo extends Base {
    static $t: Type;
    b: boolean;
    c: number;
    a: boolean;
    static d(a: number, b: boolean, c: Worksheet, d: SpreadsheetCellValueInfo, e: WorksheetCellFormatData): void;
}
/**
 * An object that represents the selected items within a [[Spreadsheet]]
 */
export declare class SpreadsheetSelection extends PropertyChangeNotifierExtended {
    static $t: Type;
    private readonly _l;
    private readonly _y;
    private readonly _k;
    private readonly _be;
    private readonly _g;
    private readonly _h;
    private readonly _i;
    private readonly _j;
    private _n;
    private _p;
    private _bl;
    private _aa;
    private _ab;
    private _w;
    private _bo;
    private _bn;
    private _bp;
    private _q;
    private readonly _ag;
    constructor(a: Spreadsheet, b: SpreadsheetPane, c: boolean);
    /**
     * @hidden
     */
    e(sender: any, property: string, extraInfo: any): void;
    /**
     * Returns the cell that represents the active cell.
     */
    readonly activeCell: SpreadsheetCell;
    /**
     * @hidden
     */
    readonly _r: SpreadsheetCellRange;
    /**
     * Returns the index of the selection group that contains the active cell.
     */
    readonly activeCellRangeIndex: number;
    /**
     * Returns a read-only collection of the ranges of cells that are selected.
     */
    readonly cellRanges: IList$1<SpreadsheetCellRange>;
    /**
     * Returns or sets a string containing the cell ranges in A1 cell reference mode.
     * <p class="note">
     * If there are multiple ranges then they are separated by the default union operator (',').
     * </p>
     */
    /**
    * Returns or sets a string containing the cell ranges in A1 cell reference mode.
    * <p class="note">
    * If there are multiple ranges then they are separated by the default union operator (',').
    * </p>
    */
    cellRangesAddress: string;
    /**
     * @hidden
     */
    readonly _bf: IList$1<IntRange>;
    /**
     * @hidden
     */
    readonly _bg: IList$1<IntRange>;
    /**
     * @hidden
     */
    readonly _al: boolean;
    /**
     * @hidden
     */
    readonly _am: boolean;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ac: IntRange;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _ad: IntRange;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _x: SpreadsheetCellSelectionMode;
    /**
     * @hidden
     */
    _av: boolean;
    /**
     * @hidden
     */
    readonly _ax: boolean;
    /**
     * @hidden
     */
    readonly _aw: boolean;
    /**
     * @hidden
     */
    readonly _z: SpreadsheetPane;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _v: SpreadsheetCellRange;
    /**
     * @hidden
     */
    readonly _bi: IList$1<IntRange>;
    /**
     * @hidden
     */
    readonly _bj: IList$1<IntRange>;
    /**
     * @hidden
     */
    readonly _m: Spreadsheet;
    /**
     * Adds a new cell range for the specified cell and makes it the active cell.
     * @param range The new range to add
     * @param activeCell The new active cell for which a new selection will be added. This must be a cell within 'range'.
     * @param extendRangeForMergedCells True to adjust the 'range' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @throws [[ArgumentException]] The 'activeCell' must be within the specified 'range'.
     */
    addActiveCellRange(range: SpreadsheetCellRange, activeCell: SpreadsheetCell, extendRangeForMergedCells?: boolean): boolean;
    /**
     * Adds a new cell range for the specified cell and makes it the active cell.
     * @param rangeAddress The new A1 address of the range to add
     * @param activeCellAddress The A1 address of the new active cell for which a new selection will be added. This must be a cell within 'rangeAddress'.
     * @param extendRangeForMergedCells True to adjust the 'rangeAddress' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @throws [[ArgumentException]] The 'activeCellAddress' must be within the specified 'rangeAddress'.
     */
    addActiveCellRange(rangeAddress: string, activeCellAddress: string, extendRangeForMergedCells?: boolean): boolean;
    /**
     * @hidden
     */
    _addActiveCellRange2(a: string, b: string, c?: boolean): boolean;
    /**
     * @hidden
     */
    _addActiveCellRange1(a: SpreadsheetCellRange, b: SpreadsheetCell, c?: boolean): boolean;
    /**
     * Adds a new range to the end of the [[cellRanges]]
     * @param range The range to be added
     * @param extendRangeForMergedCells True to adjust the 'range' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     */
    addCellRange(range: SpreadsheetCellRange, extendRangeForMergedCells?: boolean): void;
    /**
     * Adds a new range to the end of the [[cellRanges]]
     * @param rangeAddress The A1 address of the range to be added
     * @param extendRangeForMergedCells True to adjust the 'rangeAddress' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     */
    addCellRange(rangeAddress: string, extendRangeForMergedCells?: boolean): void;
    /**
     * @hidden
     */
    _addCellRange1(a: string, b?: boolean): void;
    /**
     * @hidden
     */
    _addCellRange(a: SpreadsheetCellRange, b?: boolean): void;
    /**
     * Resets the [[cellRanges]] to a single range containing only the [[activeCell]]
     */
    clearCellRanges(): boolean;
    /**
     * Replaces the range containing the [[activeCell]] with the specified range and using the specified cell as the new [[activeCell]].
     * @param range The new range that will replace the range at index [[activeCellRangeIndex]].
     * @param activeCell The new active cell from within that range.
     * @param extendRangeForMergedCells True to adjust the 'range' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @return A boolean indicating if the operation was performed.
     * @throws [[ArgumentException]] The 'activeCell' must be within the specified 'range'.
     */
    replaceActiveCellRange(range: SpreadsheetCellRange, activeCell: SpreadsheetCell, extendRangeForMergedCells?: boolean): boolean;
    /**
     * Replaces the range containing the [[activeCell]] with the specified range and using the specified cell as the new [[activeCell]].
     * @param rangeAddress The A1 address of the new range that will replace the range at index [[activeCellRangeIndex]].
     * @param activeCellAddress The A1 address of the new active cell from within that range.
     * @param extendRangeForMergedCells True to adjust the 'rangeAddress' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @return A boolean indicating if the operation was performed.
     * @throws [[ArgumentException]] The 'activeCellAddress' must be within the specified 'rangeAddress'.
     */
    replaceActiveCellRange(rangeAddress: string, activeCellAddress: string, extendRangeForMergedCells?: boolean): boolean;
    /**
     * @hidden
     */
    _replaceActiveCellRange2(a: string, b: string, c?: boolean): boolean;
    /**
     * @hidden
     */
    _replaceActiveCellRange1(a: SpreadsheetCellRange, b: SpreadsheetCell, c?: boolean): boolean;
    /**
     * Clears the current selection and uses the specified information to reinitialize the selection.
     * @param ranges The new selection ranges. There must be 1 or more ranges.
     * @param activeCell The cell to use for the [[activeCell]]. This must be within the specified 'ranges'.
     * @param newActiveRangeIndex The index of the range that contains the active cell.
     * @param extendRangeForMergedCells True to adjust the 'ranges' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @throws [[ArgumentNullException]] The 'ranges' cannot be null.
     * @throws [[ArgumentException]] The 'ranges' cannot be a 0 length array.
     * @throws [[ArgumentOutOfRangeException]] The 'newActiveRangeIndex' must be an index within the specified 'ranges'.
     * @throws [[ArgumentException]] The 'activeCell' must be within the range index specified by the 'newActiveRangeIndex'.
     */
    resetSelection(ranges: SpreadsheetCellRange[], activeCell: SpreadsheetCell, newActiveRangeIndex: number, extendRangeForMergedCells?: boolean): boolean;
    /**
     * Clears the current selection and uses the specified cell as the [[activeCell]] and specified range as the new selection.
     * @param range The new selection range
     * @param activeCell The cell to use for the [[activeCell]]. This must be within the specified 'range'.
     * @param extendRangeForMergedCells True to adjust the 'range' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @throws [[ArgumentException]] The 'activeCell' must be within the specified 'range'.
     */
    resetSelection(range: SpreadsheetCellRange, activeCell: SpreadsheetCell, extendRangeForMergedCells?: boolean): boolean;
    /**
     * Clears the current selection and uses the specified information to reinitialize the selection.
     * @param rangesAddress The new selection ranges. There must be 1 or more ranges.
     * @param activeCellAddress The cell to use for the [[activeCell]]. This must be within the specified 'rangesAddress'.
     * @param newActiveRangeIndex The index of the range that contains the active cell.
     * @param extendRangeForMergedCells True to adjust the 'rangesAddress' such that it contains any intersecting merged cells; otherwise false to use the range as it is.
     * @throws [[ArgumentException]] The 'rangesAddress' must contain at least 1 cell/range.
     * @throws [[ArgumentOutOfRangeException]] The 'newActiveRangeIndex' must be an index within the specified 'rangesAddress'.
     * @throws [[ArgumentException]] The 'activeCellAddress' must be within the range index specified by the 'newActiveRangeIndex'.
     */
    resetSelection(rangesAddress: string, activeCellAddress: string, newActiveRangeIndex: number, extendRangeForMergedCells?: boolean): boolean;
    /**
     * @hidden
     */
    _resetSelection2(a: SpreadsheetCellRange, b: SpreadsheetCell, c?: boolean): boolean;
    /**
     * @hidden
     */
    _resetSelection3(a: string, b: string, c: number, d?: boolean): boolean;
    /**
     * @hidden
     */
    _resetSelection(a: SpreadsheetCellRange[], b: SpreadsheetCell, c: number, d?: boolean): boolean;
    /**
     * Changes the [[activeCell]] and [[activeCellRangeIndex]] to the specified values.
     * @param cell The selected cell to change to the active cell
     * @param rangeIndex Optionally the index of the range in the [[cellRanges]] that contains the specified cell.
     */
    setActiveCell(cell: SpreadsheetCell, rangeIndex?: number): boolean;
    /**
     * Changes the [[activeCell]] and [[activeCellRangeIndex]] to the specified values.
     * @param cellAddress The A1 address of the selected cell to change to the active cell
     * @param rangeIndex Optionally the index of the range in the [[cellRanges]] that contains the specified cell.
     */
    setActiveCell(cellAddress: string, rangeIndex?: number): boolean;
    /**
     * @hidden
     */
    _setActiveCell1(a: string, b?: Nullable$1<number>): boolean;
    /**
     * @hidden
     */
    _setActiveCell(a: SpreadsheetCell, b?: Nullable$1<number>): boolean;
    /**
     * Deselect the cells in the specified range.
     * <p class="note"><b>Note:</b> if the specified range encompasses all the cells in the selection, the selection will be changed to only include the current [[activeCell]].</p>
     * @param range The range whose cells should be removed from the selection.
     */
    unselectRange(range: SpreadsheetCellRange): void;
    /**
     * @hidden
     */
    _ah(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _ao(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _ap(a: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    _bk(): IDisposable;
    /**
     * @hidden
     */
    _as(a: SpreadsheetCell, b?: boolean): boolean;
    /**
     * @hidden
     */
    _at(a: SpreadsheetCellRange, b?: boolean): boolean;
    /**
     * @hidden
     */
    _bt(a: SpreadsheetCellRange): {
        p0?: SpreadsheetCellRange;
    };
    /**
     * @hidden
     */
    _s(): SpreadsheetCellRange;
    /**
     * @hidden
     */
    _t(a: SpreadsheetCell): SpreadsheetCellRange;
    /**
     * @hidden
     */
    _u(a: boolean): SpreadsheetCellRange;
    /**
     * @hidden
     */
    _ay(a: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    _az(a: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    _a0(a: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    _a1(a: any): boolean;
    /**
     * @hidden
     */
    _a2(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _a3(): boolean;
    /**
     * @hidden
     */
    _bu(): void;
    /**
     * @hidden
     */
    _a4(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _a9(a: SpreadsheetCell): boolean;
    /**
     * @hidden
     */
    _bw(a: number, b: number): void;
    /**
     * @hidden
     */
    _by(): void;
    /**
     * @hidden
     */
    _bz(): void;
    /**
     * @hidden
     */
    private _ak;
    /**
     * @hidden
     */
    private _ar;
    /**
     * @hidden
     */
    private _ae;
    /**
     * @hidden
     */
    private _au;
    /**
     * @hidden
     */
    private _af;
    /**
     * @hidden
     */
    _aq(a: SpreadsheetCellRange): boolean;
    /**
     * @hidden
     */
    private _a7;
    /**
     * @hidden
     */
    private _bv;
}
/**
 * @hidden
 */
export declare class SelectionSnapshot extends Base implements IEquatable$1<SelectionSnapshot> {
    static $t: Type;
    readonly _a: SpreadsheetCellRange[];
    readonly _j: number;
    readonly _g: SpreadsheetCell;
    private _k;
    constructor(a: Worksheet, b: SpreadsheetCellRange[], c: SpreadsheetCell, d: number);
    readonly _h: Worksheet;
    static _d(a: Worksheet, b: SpreadsheetSelection): SelectionSnapshot;
    static _b(a: Worksheet, b: SpreadsheetCellRange): SelectionSnapshot;
    static _c(a: Worksheet, b: SpreadsheetCellRange, c: SpreadsheetCell): SelectionSnapshot;
    equals(a: SelectionSnapshot): boolean;
    _i(a: Worksheet, b: SpreadsheetSelection): boolean;
    _f(a: Worksheet, b: SpreadsheetCellRange, c: SpreadsheetCell, d: SpreadsheetCellSelectionMode): SelectionSnapshot;
    _e(a: Worksheet, b: SpreadsheetCellRange, c: SpreadsheetCellSelectionMode): SelectionSnapshot;
}
/**
 * @hidden
 */
export declare abstract class EditModeWorkbookFont extends PropertyChangeNotifierExtended implements IWorkbookFont {
    static $t: Type;
    private _k;
    private _g;
    private _h;
    private _i;
    constructor(a: SpreadsheetCellEditManager);
    bold: boolean | null;
    _bold$i: Nullable$1<boolean>;
    protected readonly _j: SpreadsheetCellEditManager;
    colorInfo: WorkbookColorInfo;
    protected readonly _l: string;
    height: number;
    italic: boolean | null;
    _italic$i: Nullable$1<boolean>;
    name: string;
    strikeout: boolean | null;
    _strikeout$i: Nullable$1<boolean>;
    superscriptSubscriptStyle: FontSuperscriptSubscriptStyle;
    underlineStyle: FontUnderlineStyle;
    abstract setFontFormatting(a: IWorkbookFont): void;
    _m(a?: boolean): void;
    _o(): void;
    protected abstract _n(a: EditModeWorkbookFontInfo): void;
    protected abstract _p(a: boolean): void;
    protected abstract _q(a: WorkbookColorInfo): void;
    protected abstract _r(a: number): void;
    protected abstract _s(a: boolean): void;
    protected abstract _t(a: string): void;
    protected abstract _u(a: boolean): void;
    protected abstract _v(a: FontSuperscriptSubscriptStyle): void;
    protected abstract _w(a: FontUnderlineStyle): void;
    private _x;
    private _y;
}
/**
 * @hidden
 */
export declare abstract class LockedEditRangeInfoForCellRange extends Base {
    static $t: Type;
    f(a: number, b: number): void;
    b(a: WorksheetRow, b: number, c: number): boolean;
    abstract c(a: number, b: number): boolean;
    abstract d(a: number, b: number): boolean;
    static a(a: LockedEditRangeInfoForWorksheet, b: number, c: number, d: number, e: number): LockedEditRangeInfoForCellRange;
    e(a: number, b: number): boolean;
}
/**
 * @hidden
 */
export declare class LockedEditRangeInfoForCellRange_WithRanges extends LockedEditRangeInfoForCellRange {
    static $t: Type;
    private readonly h;
    private readonly j;
    private readonly g;
    private i;
    constructor(a: LockedEditRangeInfoForWorksheet, b: List$1<WorksheetProtectedRange>, c: List$1<WorksheetProtectedRange>);
    f(a: number, b: number): void;
    c(a: number, b: number): boolean;
    d(a: number, b: number): boolean;
    private static k;
    e(a: number, b: number): boolean;
}
/**
 * @hidden
 */
export declare class LockedEditRangeInfoForCellRange_WithoutRanges extends LockedEditRangeInfoForCellRange {
    static $t: Type;
    static readonly g: LockedEditRangeInfoForCellRange;
    private readonly h;
    constructor(a: LockedEditRangeInfoForWorksheet);
    c(a: number, b: number): boolean;
    d(a: number, b: number): boolean;
    b(a: WorksheetRow, b: number, c: number): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetEditHelper extends Base implements ISpreadsheetEditInfo {
    static $t: Type;
    static readonly ae: any;
    static readonly ab: any;
    private static readonly b;
    private m;
    private z;
    private j;
    private i;
    private k;
    private a;
    private c;
    private y;
    private x;
    constructor(a: SpreadsheetPaneManager, b: SpreadsheetPane, c: SpreadsheetCell, d: boolean, e: number, f: (arg1: SpreadsheetUserPromptInfo) => boolean, g: (arg1: SpreadsheetTransactionOperation, arg2: () => SpreadsheetOperationResult, arg3: string, arg4: SpreadsheetCellRange[]) => SpreadsheetOperationResult);
    static ad(a: ParseEditValueCache, b: ISpreadsheetEditorValue, c: boolean, d: boolean, e: number): {
        ret: any;
        p4: number;
    };
    e(a: SpreadsheetCellExitModeAction, b: ISpreadsheetEditorValue, c: boolean, d: string, e: boolean): SpreadsheetOperationResult;
    static ak(a: WorksheetRow, b: number, c: WorksheetCellFormatData, d: any, e: number, f: boolean): void;
    private static ag;
    private static ah;
    static ai(a: WorksheetRow, b: number, c: number, d: WorksheetCellFormatData): void;
    private static n;
    private static l;
    private static ac;
    static aa(a: Formula, b: Worksheet, c: number, d: number): number;
    private static d;
    private aj;
    private static o;
    private static p;
    private static q;
    private static r;
    private static s;
    private static af;
    private static t;
    private static u;
    private static v;
    private static w;
    private f;
    private g;
    private h;
    readonly workbook: Workbook;
    readonly isFixedDecimalEnabled: boolean;
    readonly fixedDecimalPlaceCount: number;
}
/**
 * @hidden
 */
export declare class ParseEditValueCache extends Base {
    static $t: Type;
    readonly a: Workbook;
    readonly f: boolean;
    readonly j: number;
    readonly g: CultureInfo;
    private h;
    private k;
    private m;
    private q;
    private p;
    private l;
    private b;
    constructor(a: ISpreadsheetEditInfo);
    readonly n: string;
    readonly i: number;
    readonly o: string;
    c(a: string): boolean;
    e(a: string): boolean;
    private d;
}
/**
 * @hidden
 */
export declare class SpreadsheetActivePaneChangedEventArgs extends EventArgs {
    static $t: Type;
    private readonly _c;
    private readonly _b;
    constructor(a: SpreadsheetPane, b: SpreadsheetPane);
    readonly newValue: SpreadsheetPane;
    readonly oldValue: SpreadsheetPane;
}
/**
 * @hidden
 */
export declare class SpreadsheetSelectionChangedEventArgs extends EventArgs {
    static $t: Type;
    private _b;
    constructor(a: SpreadsheetPane);
    readonly pane: SpreadsheetPane;
}
/**
 * @hidden
 */
export declare class SpreadsheetUserPromptDisplayingEventArgs extends EventArgs {
    static $t: Type;
    private _b;
    constructor(a: SpreadsheetUserPromptInfo);
    readonly canCancel: boolean;
    cancel: boolean;
    caption: string;
    displayMessage: boolean;
    readonly exception: any;
    message: string;
    readonly trigger: SpreadsheetUserPromptTrigger;
}
/**
 * @hidden
 */
export declare abstract class SortFilterAreaBase extends Base {
    static $t: Type;
    private r;
    readonly a: CellContentType;
    abstract readonly g: boolean;
    abstract readonly b: Filter;
    abstract o(): IEnumerable$1<IFilterable>;
    abstract p(): IEnumerable$1<SortCondition>;
    abstract ag(a: SortCondition): void;
    abstract readonly q: number;
    abstract readonly d: WorksheetRegion;
    abstract readonly c: Worksheet;
    abstract s(a: AverageFilterType): void;
    abstract u(a: DatePeriodFilterType, b: number): void;
    abstract x(a: RelativeDateRangeOffset, b: RelativeDateRangeDuration): void;
    abstract y(a: TopOrBottomFilterType, b: number): void;
    abstract z(): void;
    abstract v(a: WorkbookColorInfo): void;
    abstract t(a: CellFill): void;
    abstract w(a: FormatConditionIconSet, b: Nullable$1<number>): void;
    protected abstract aa(): void;
    protected ab(a: CellContentType): void;
    abstract n(): boolean;
    ac(a: (arg1: CellFill) => void): void;
    ad(a: (arg1: WorkbookColorInfo) => void): void;
    af(a: (arg1: Tuple$2<FormatConditionIconSet, Nullable$1<number>>) => void): void;
    private ae;
    m(a: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): boolean;
    j(a: Tuple$2<FormatConditionIconSet, Nullable$1<number>>): boolean;
    l(a: WorkbookColorInfo): boolean;
    i(a: WorkbookColorInfo): boolean;
    private f;
    k(a: CellFill): boolean;
    h(a: CellFill): boolean;
    private e;
}
/**
 * @hidden
 */
export declare class WorksheetSortFilterArea extends SortFilterAreaBase {
    static $t: Type;
    private readonly ah;
    readonly ai: number;
    constructor(a: Worksheet, b: number);
    t(a: CellFill): void;
    v(a: WorkbookColorInfo): void;
    w(a: FormatConditionIconSet, b: Nullable$1<number>): void;
    s(a: AverageFilterType): void;
    u(a: DatePeriodFilterType, b: number): void;
    x(a: RelativeDateRangeOffset, b: RelativeDateRangeDuration): void;
    y(a: TopOrBottomFilterType, b: number): void;
    z(): void;
    protected get_q(): number;
    readonly q: number;
    protected get_d(): WorksheetRegion;
    readonly d: WorksheetRegion;
    protected aa(): void;
    protected get_g(): boolean;
    readonly g: boolean;
    protected get_b(): Filter;
    readonly b: Filter;
    o(): IEnumerable$1<IFilterable>;
    private _p;
    p(): IEnumerable$1<SortCondition>;
    n(): boolean;
    ag(a: SortCondition): void;
    protected get_c(): Worksheet;
    readonly c: Worksheet;
}
/**
 * @hidden
 */
export declare class TableSortFilterArea extends SortFilterAreaBase {
    static $t: Type;
    readonly ah: WorksheetTableColumn;
    constructor(a: WorksheetTableColumn);
    t(a: CellFill): void;
    v(a: WorkbookColorInfo): void;
    w(a: FormatConditionIconSet, b: Nullable$1<number>): void;
    s(a: AverageFilterType): void;
    u(a: DatePeriodFilterType, b: number): void;
    x(a: RelativeDateRangeOffset, b: RelativeDateRangeDuration): void;
    y(a: TopOrBottomFilterType, b: number): void;
    z(): void;
    protected get_q(): number;
    readonly q: number;
    protected get_d(): WorksheetRegion;
    readonly d: WorksheetRegion;
    protected aa(): void;
    protected get_g(): boolean;
    readonly g: boolean;
    protected get_b(): Filter;
    readonly b: Filter;
    o(): IEnumerable$1<IFilterable>;
    private _p;
    p(): IEnumerable$1<SortCondition>;
    ag(a: SortCondition): void;
    n(): boolean;
    protected get_c(): Worksheet;
    readonly c: Worksheet;
}
/**
 * @hidden
 */
export declare class PredefinedShapes extends Base {
    static $t: Type;
    private static a;
    private f;
    constructor();
    static readonly b: PredefinedShapes;
    c(a: CT_CustomGeometry2D): ShapeGeometry;
    d(a: string): ShapeGeometry;
    private static i;
    private static h;
    private j;
    private k;
    private l;
    private m;
    private n;
    private p;
    private o;
    private static e;
    private static g;
}
/**
 * @hidden
 */
export declare class FormatCellsDialogDataBuilder extends Base {
    static $t: Type;
    private readonly b;
    private readonly a;
    private j;
    private h;
    private readonly i;
    private k;
    private l;
    constructor(a: Worksheet[], b: SpreadsheetCellRange[]);
    static f(a: Worksheet[], b: SpreadsheetCellRange[]): FormatCellsDialogData;
    static g(a: Spreadsheet): FormatCellsDialogData;
    private static m;
    private n;
    private c;
    private o;
    private d;
    private p;
    private q;
    private e;
}
/**
 * @hidden
 */
export declare class SetFormatCellsDialogDataHelper extends Base {
    static $t: Type;
    e: SpreadsheetPaneManager;
    c: FormatCellsDialogData;
    b: FormatCellsDialogData;
    a: SpreadsheetCellRange[];
    f(): void;
    static g(a: IWorkbookFont, b: FormatCellsDialogData, c: FormatCellsDialogData): void;
    private h;
    private i;
    private d;
    private j;
    private k;
}
/**
 * @hidden
 */
export declare class RangeWorksheetCellFormatBase_RangeWorksheetCellFormatFont extends PropertyChangeNotifier implements IWorkbookFont {
    static $t: Type;
    private _g;
    private _e;
    private _f;
    private _h;
    private _j;
    private _i;
    private _c;
    private _d;
    private _b;
    constructor(a: RangeWorksheetCellFormatBase);
    bold: boolean | null;
    _bold$i: Nullable$1<boolean>;
    colorInfo: WorkbookColorInfo;
    height: number;
    italic: boolean | null;
    _italic$i: Nullable$1<boolean>;
    name: string;
    strikeout: boolean | null;
    _strikeout$i: Nullable$1<boolean>;
    superscriptSubscriptStyle: FontSuperscriptSubscriptStyle;
    underlineStyle: FontUnderlineStyle;
    setFontFormatting(a: IWorkbookFont): void;
    _k(a: IWorkbookFont): void;
}
/**
 * @hidden
 */
export declare class RangeWorksheetCellFormatBase_EmptyFormat extends RangeWorksheetCellFormatBase {
    static $t: Type;
    static readonly _ao: IWorksheetCellFormat;
    constructor();
    protected get__s(): Workbook;
    readonly _s: Workbook;
    protected _q(): IWorksheetCellFormat;
    _ak(a: SpreadsheetCellRangeBorders, b: WorkbookColorInfo, c: CellBorderLineStyle): void;
    _al<T>($t: Type, a: (arg1: WorksheetCellFormatProxy, arg2: T) => void, b: T, c: CellFormatValue): void;
}
/**
 * Returns and sets formatting information on a range of cells.
 */
export declare class SpreadsheetCellRangeFormat extends PropertyChangeNotifierExtended {
    static $t: Type;
    private _g;
    private _j;
    constructor(a: RangeWorksheetCellFormatBase);
    /**
     * @hidden
     */
    e(sender: any, property: string, extraInfo: any): void;
    /**
     * Gets or sets the horizontal alignment of the content in a cell.
     * The horizontal alignment of the content in a cell.
     * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the [[HorizontalCellAlignment]] enumeration.
     * @see [[verticalAlignment]]
     */
    /**
    * Gets or sets the horizontal alignment of the content in a cell.
    * The horizontal alignment of the content in a cell.
    * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the [[HorizontalCellAlignment]] enumeration.
    * @see [[verticalAlignment]]
    */
    alignment: HorizontalCellAlignment;
    /**
     * Gets or sets the fill of the cell.
     * The fill of the cell.
     * @see [[CellFill]]
     * @see [[CellFillPattern]]
     * @see [[CellFillLinearGradient]]
     * @see [[CellFillRectangularGradient]]
     */
    /**
    * Gets or sets the fill of the cell.
    * The fill of the cell.
    * @see [[CellFill]]
    * @see [[CellFillPattern]]
    * @see [[CellFillLinearGradient]]
    * @see [[CellFillRectangularGradient]]
    */
    fill: CellFill;
    /**
     * Gets or sets the default font formatting.
     * <p class="body">
     * This font formatting is just the default font used in the cell. This can be overridden by strings on a character by character basis by
     * using the [[FormattedString]] class.
     * </p>
     * The default font formatting.
     */
    readonly font: IWorkbookFont;
    /**
     * Gets or sets the number format string.
     * <p class="body">For more information on excel format strings, consult Microsoft Excel help.</p>
     * The number format string.
     * @throws [[ArgumentException]] The assigned value is an invalid format string and [[Workbook.validateFormatStrings]] is True.
     * @see [[Workbook.validateFormatStrings]]
     */
    /**
    * Gets or sets the number format string.
    * <p class="body">For more information on excel format strings, consult Microsoft Excel help.</p>
    * The number format string.
    * @throws [[ArgumentException]] The assigned value is an invalid format string and [[Workbook.validateFormatStrings]] is True.
    * @see [[Workbook.validateFormatStrings]]
    */
    formatString: string;
    /**
     * Gets or sets the indent in units of average character widths.
     * <p class="body">
     * A value of -1 indicates that the default value should be used.
     * </p>
     * The indent in units of average character widths or -1 to use the default indent.
     * @throws [[ArgumentOutOfRangeException]] The assigned value is not -1 and is outside the valid indent level range of 0 and 250.
     */
    /**
    * Gets or sets the indent in units of average character widths.
    * <p class="body">
    * A value of -1 indicates that the default value should be used.
    * </p>
    * The indent in units of average character widths or -1 to use the default indent.
    * @throws [[ArgumentOutOfRangeException]] The assigned value is not -1 and is outside the valid indent level range of 0 and 250.
    */
    indent: number;
    /**
     * Gets or sets the valid which indicates whether the cell is locked in protected mode.
     * <p class="body">The Locked valid is used in Excel file only if the associated [[Worksheet]] or [[Workbook]]
     * is protected. Otherwise the value is ignored.
     * </p>
     * The valid which indicates whether the cell is locked in protected mode.
     * @see */
    /**
    * Gets or sets the valid which indicates whether the cell is locked in protected mode.
    * <p class="body">The Locked valid is used in Excel file only if the associated [[Worksheet]] or [[Workbook]]
    * is protected. Otherwise the value is ignored.
    * </p>
    * The valid which indicates whether the cell is locked in protected mode.
    * @see */
    locked: boolean | null;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _locked$i: Nullable$1<boolean>;
    /**
     * Gets or sets the rotation of the cell content in degrees.
     * <p class="body">
     * Cell text rotation, in degrees; 0 – 90 is up 0 – 90 degrees, 91 – 180 is down 1 – 90 degrees, and 255 is vertical.
     * </p>
     * The rotation of the cell content in degrees.
     */
    /**
    * Gets or sets the rotation of the cell content in degrees.
    * <p class="body">
    * Cell text rotation, in degrees; 0 – 90 is up 0 – 90 degrees, 91 – 180 is down 1 – 90 degrees, and 255 is vertical.
    * </p>
    * The rotation of the cell content in degrees.
    */
    rotation: number;
    /**
     * Gets or sets the value indicating whether the cell content will shrink to fit the cell.
     * <p class="body">
     * If True, the size of the cell font will shrink so all data fits within the cell.
     * </p>
     * The value indicating whether the cell content will shrink to fit the cell.
     * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the ExcelDefaultableBoolean enumeration.
     */
    /**
    * Gets or sets the value indicating whether the cell content will shrink to fit the cell.
    * <p class="body">
    * If True, the size of the cell font will shrink so all data fits within the cell.
    * </p>
    * The value indicating whether the cell content will shrink to fit the cell.
    * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the ExcelDefaultableBoolean enumeration.
    */
    shrinkToFit: boolean | null;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _shrinkToFit$i: Nullable$1<boolean>;
    /**
     * Gets or sets the parent [[WorkbookStyle]] of the format.
     * <p class="body">
     * The parent style of a cell or differential format provides default format values. Depending on which FormatOptions
     * flags are present, only certain groups of format properties will be resolved from parent style. When any of the properties in a
     * group is set to a non-default value, the FormatOptions will automatically have that flag included so the format provides values
     * in that group rather than the style providing values in that group.
     * </p>
     * <p class="body">
     * By default, all cell and differential formats will have a parent style of the normal style, which is exposed by the
     * [[WorkbookStyleCollection.normalStyle]] property. If a value of null is assigned as the Style for a cell or differential
     * format, then NormalStyle will actually be set.
     * </p>
     * A [[WorkbookStyle]] instance if this is a cell or differential format, or null if this is a style format.
     * @throws [[InvalidOperationException]] The value assigned is non-null and the format is a style format.
     * @throws [[ArgumentException]] The value assigned is from a different [[Workbook]].
     * @see [[Workbook.styles]]
     * @see [[WorkbookStyle]]
     */
    /**
    * Gets or sets the parent [[WorkbookStyle]] of the format.
    * <p class="body">
    * The parent style of a cell or differential format provides default format values. Depending on which FormatOptions
    * flags are present, only certain groups of format properties will be resolved from parent style. When any of the properties in a
    * group is set to a non-default value, the FormatOptions will automatically have that flag included so the format provides values
    * in that group rather than the style providing values in that group.
    * </p>
    * <p class="body">
    * By default, all cell and differential formats will have a parent style of the normal style, which is exposed by the
    * [[WorkbookStyleCollection.normalStyle]] property. If a value of null is assigned as the Style for a cell or differential
    * format, then NormalStyle will actually be set.
    * </p>
    * A [[WorkbookStyle]] instance if this is a cell or differential format, or null if this is a style format.
    * @throws [[InvalidOperationException]] The value assigned is non-null and the format is a style format.
    * @throws [[ArgumentException]] The value assigned is from a different [[Workbook]].
    * @see [[Workbook.styles]]
    * @see [[WorkbookStyle]]
    */
    style: WorkbookStyle;
    /**
     * Gets or sets the vertical alignment of the content in a cell.
     * The vertical alignment of the content in a cell.
     * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the [[VerticalCellAlignment]] enumeration.
     * @see [[alignment]]
     */
    /**
    * Gets or sets the vertical alignment of the content in a cell.
    * The vertical alignment of the content in a cell.
    * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the [[VerticalCellAlignment]] enumeration.
    * @see [[alignment]]
    */
    verticalAlignment: VerticalCellAlignment;
    /**
     * Gets or sets the value which indicates whether text will wrap in a cell.
     * <p class="body">
     * If True, and the row associated with the cell has a default [[WorksheetRow.height]], the row's
     * height will automatically be increased to fit wrapped content.
     * </p>
     * The value which indicates whether text will wrap in a cell.
     * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the ExcelDefaultableBoolean enumeration.
     */
    /**
    * Gets or sets the value which indicates whether text will wrap in a cell.
    * <p class="body">
    * If True, and the row associated with the cell has a default [[WorksheetRow.height]], the row's
    * height will automatically be increased to fit wrapped content.
    * </p>
    * The value which indicates whether text will wrap in a cell.
    * @throws [[InvalidEnumArgumentException]] The value assigned is not defined in the ExcelDefaultableBoolean enumeration.
    */
    wrapText: boolean | null;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    _wrapText$i: Nullable$1<boolean>;
    /**
     * Sets the specified borders for the associated range to the specified style and color.
     * @param borders Identifies the borders to be changed
     * @param borderColor The color for the borders
     * @param borderStyle The style for the borders
     */
    setBorders(borders: SpreadsheetCellRangeBorders, borderColor: WorkbookColorInfo, borderStyle: CellBorderLineStyle): void;
    /**
     * @hidden
     */
    _u(a: IWorkbookFont): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderBackgroundLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetScrollRegion> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetScrollRegion, b: IRendererElementLayerView$2<SpreadsheetScrollRegion, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetItemLayerObserver extends Base implements IDisposable {
    static $t: Type;
    private _a;
    constructor();
    abstract dispose(): void;
    protected _b(a: ISupportPropertyChangeNotifications): void;
    protected abstract _d(a: any, b: string, c: any): void;
    private static _c;
    protected _e(a: ISupportPropertyChangeNotifications): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetScrollRegionLayerObserver extends SpreadsheetItemLayerObserver {
    static $t: Type;
    readonly _f: SpreadsheetScrollRegion;
    constructor(a: SpreadsheetScrollRegion);
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderBackgroundObserver extends SpreadsheetScrollRegionLayerObserver {
    static $t: Type;
    private _g;
    constructor(a: SpreadsheetScrollRegion, b: () => void);
    dispose(): void;
    protected _d(a: any, b: string, c: any): void;
    private static _h;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderGridlineLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetScrollRegion> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetScrollRegion, b: IRendererElementLayerView$2<SpreadsheetScrollRegion, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    private _v;
    private static _u;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderSelectionLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetScrollRegion> {
    static $t: Type;
    private _u;
    private _t;
    private _v;
    constructor(a: SpreadsheetScrollRegion, b: IRendererElementLayerView$2<SpreadsheetScrollRegion, ISpreadsheetGraphics>);
    _r(a: Rect): Rect;
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    private _w;
    private _y;
    private static _x;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetPaneLayerObserver extends SpreadsheetItemLayerObserver {
    static $t: Type;
    readonly _f: SpreadsheetPane;
    constructor(a: SpreadsheetPane);
}
/**
 * @hidden
 */
export declare class InvalidDataLayerObserver extends SpreadsheetPaneLayerObserver {
    static $t: Type;
    private _g;
    constructor(a: SpreadsheetPane, b: () => void);
    protected _d(a: any, b: string, c: any): void;
    dispose(): void;
}
/**
 * @hidden
 */
export declare class PaneInteractionLayerObserver extends SpreadsheetPaneLayerObserver {
    static $t: Type;
    private _g;
    _h: boolean;
    constructor(a: SpreadsheetPane, b: () => void);
    protected _d(a: any, b: string, c: any): void;
    dispose(): void;
}
/**
 * @hidden
 */
export declare class ShapeLayerObserver extends SpreadsheetPaneLayerObserver {
    static $t: Type;
    private _g;
    constructor(a: SpreadsheetPane, b: () => void);
    dispose(): void;
    protected _d(a: any, b: string, c: any): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneButtonLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    private static _u;
    private static _v;
    private _z;
    private static _y;
    static _w(a: SpreadsheetPane, b: SpreadsheetDropDownButton, c: PixelConverter): number;
    private static _x;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneCellBackgroundLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _u;
    private static readonly _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    private _w;
    private static _v;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneCellBorderLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    private _v;
    private static _u;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneGridlineLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    private _v;
    private static _u;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneInteractionOverlayLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneInvalidDataLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneSelectionLayer extends SpreadsheetRendererElementLayer$1<SpreadsheetPane> {
    static $t: Type;
    private _u;
    private _t;
    constructor(a: SpreadsheetPane, b: IRendererElementLayerView$2<SpreadsheetPane, ISpreadsheetGraphics>);
    _r(a: Rect): Rect;
    protected get__m(): RenderLayerType;
    readonly _m: RenderLayerType;
    protected _p(): void;
    protected get__s(): SpreadsheetRenderCache;
    readonly _s: SpreadsheetRenderCache;
    _q(a: ISpreadsheetGraphics, b: PixelConverter, c: Rect, d: Point): void;
    private _w;
    private static _v;
}
/**
 * @hidden
 */
export declare class SpreadsheetRenderUtilities extends Base {
    static $t: Type;
    static b(a: SpreadsheetScrollRegion, b: ISpreadsheetGraphics, c: PixelConverter, d: Rect, e: Point): void;
    static a(a: SpreadsheetPane, b: ISpreadsheetGraphics, c: PixelConverter, d: Rect, e: Point): boolean;
    static c(a: SpreadsheetPane, b: ISpreadsheetGraphics, c: PixelConverter, d: Rect, e: Point): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetMouseOperation$1<T> extends SpreadsheetMouseOperation {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    private _aa;
    private _aw;
    private _ax;
    private _w;
    private _v;
    private _ad;
    private _ac;
    private _ag;
    protected _o(a: MouseOperationState, b: MouseOperationState): void;
    _s(a: InputProxy): void;
    _g(a: InputProxy): MouseDownInProgressResult;
    protected abstract readonly _ai: boolean;
    protected abstract readonly _aj: boolean;
    abstract readonly _y: SpreadsheetColumnScrollRegion;
    readonly _ay: Rect;
    abstract readonly _z: SpreadsheetCursor;
    protected readonly _x: InputProxy;
    abstract readonly _ae: SpreadsheetRowScrollRegion;
    readonly _ab: T;
    _am(a: T, b: Rect, c: Rect): void;
    protected _ah(): boolean;
    protected _af(): SpreadsheetToolTipContext;
    _al(): void;
    protected _an(a: T): void;
    protected _ao(a: InputProxy, b: InputProxy): void;
    protected _ap(a: T): void;
    protected _ar(): void;
    private _ak;
    private _aq;
    private _as;
    private _at;
    protected _au(a: InputProxy): void;
    private _av;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetPaneMouseOperation extends SpreadsheetMouseOperation$1<SpreadsheetPane> {
    static $t: Type;
    constructor();
    protected get__y(): SpreadsheetColumnScrollRegion;
    readonly _y: SpreadsheetColumnScrollRegion;
    protected get__ae(): SpreadsheetRowScrollRegion;
    readonly _ae: SpreadsheetRowScrollRegion;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellDropDownOperation extends SpreadsheetPaneMouseOperation {
    static $t: Type;
    private _az;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    private _a0;
    _al(): void;
    protected _m(a: InputProxy): boolean;
    private _a1;
    protected _af(): SpreadsheetToolTipContext;
    private _a3;
    private _a4;
    private _a2;
    _s(a: InputProxy): void;
    protected _u(a: InputProxy): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellContextMenuOperation extends SpreadsheetPaneMouseOperation {
    static $t: Type;
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _m(a: InputProxy): boolean;
    protected _u(a: InputProxy): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetHeaderMouseOperation extends SpreadsheetMouseOperation$1<SpreadsheetScrollRegion> {
    static $t: Type;
    constructor();
    protected get__y(): SpreadsheetColumnScrollRegion;
    readonly _y: SpreadsheetColumnScrollRegion;
    protected get__ae(): SpreadsheetRowScrollRegion;
    readonly _ae: SpreadsheetRowScrollRegion;
    protected readonly _az: boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderContextMenuOperation extends SpreadsheetHeaderMouseOperation {
    static $t: Type;
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _m(a: InputProxy): boolean;
    protected _u(a: InputProxy): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetEnterEditModeOperation extends SpreadsheetPaneMouseOperation {
    static $t: Type;
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _m(a: InputProxy): boolean;
    protected _u(a: InputProxy): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderResizeOperation extends SpreadsheetHeaderMouseOperation {
    static $t: Type;
    private _a0;
    private _a6;
    private _a7;
    private _ba;
    private _a9;
    private _a8;
    private _bb;
    private _a5;
    private _a2;
    private _a3;
    private _a1;
    constructor(a: SpreadsheetHeaderResizeType);
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _an(a: SpreadsheetScrollRegion): void;
    protected _o(a: MouseOperationState, b: MouseOperationState): void;
    protected _m(a: InputProxy): boolean;
    _s(a: InputProxy): void;
    private _be;
    protected _u(a: InputProxy): void;
    _g(a: InputProxy): MouseDownInProgressResult;
    protected _ap(a: SpreadsheetScrollRegion): void;
    _bc: number;
    private _bd;
    private _bf;
    private _bg;
    private static _a4;
    private _bh;
    private static _bi;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetInteractionManager$1<T extends ISupportPropertyChangeNotifications> extends Base implements IPropertyChangeListener {
    static $t: Type;
    protected $t: Type;
    private h;
    private j;
    private a;
    private c;
    private f;
    readonly b: ISpreadsheetInteractionManagerOwner;
    constructor($t: Type, a: T, b: ISpreadsheetInteractionManagerOwner);
    abstract readonly d: Spreadsheet;
    private e;
    g: SpreadsheetCursor;
    readonly i: T;
    private m;
    abstract k(a: InputProxy): SpreadsheetMouseOperation$1<T>;
    protected n(): void;
    o(): void;
    p(): void;
    l(a: InputProxy): boolean;
    q(a: InputProxy): void;
    r(a: InputProxy): void;
    s(a: InputProxy): void;
    t(a: InputProxy): void;
    protected u(a: any, b: string, c: any): void;
    private v;
    private w;
    x(): void;
    onPropertyValueChanged(a: any, b: string, c: any): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetMenuBuilder_InitializeItemsState$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    d: LongValue;
    c: SpreadsheetCell;
    e: WorksheetTable;
    a: CellContentType;
    f: any;
    b: SortFilterAreaBase;
    g: string;
}
/**
 * @hidden
 */
export declare class SpreadsheetMouseOperation_ScrollTimer$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    private b;
    private a;
    private d;
    private c;
    constructor($t: Type, a: () => void);
    readonly e: boolean;
    g(a: SpreadsheetScrollRegion, b: boolean, c: number): void;
    h(): void;
    private f;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneInteractionManager extends SpreadsheetInteractionManager$1<SpreadsheetPane> {
    static $t: Type;
    private ab;
    private aa;
    private y;
    private z;
    constructor(a: SpreadsheetPane, b: ISpreadsheetInteractionManagerOwner);
    protected get_d(): Spreadsheet;
    readonly d: Spreadsheet;
    k(a: InputProxy): SpreadsheetMouseOperation$1<SpreadsheetPane>;
}
/**
 * @hidden
 */
export declare class SpreadsheetScrollRegionInteractionManager extends SpreadsheetInteractionManager$1<SpreadsheetScrollRegion> {
    static $t: Type;
    private ac;
    private aa;
    private ab;
    private z;
    private y;
    constructor(a: SpreadsheetScrollRegion, b: ISpreadsheetInteractionManagerOwner);
    protected get_d(): Spreadsheet;
    readonly d: Spreadsheet;
    k(a: InputProxy): SpreadsheetMouseOperation$1<SpreadsheetScrollRegion>;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellSelectionOperation extends SpreadsheetPaneMouseOperation {
    static $t: Type;
    private _a3;
    private _ba;
    private _a9;
    private _az;
    private _a0;
    private _a7;
    private _a8;
    private _br;
    private _bc;
    private _bb;
    private _be;
    private _a2;
    constructor();
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _af(): SpreadsheetToolTipContext;
    protected _an(a: SpreadsheetPane): void;
    protected _o(a: MouseOperationState, b: MouseOperationState): void;
    protected _m(a: InputProxy): boolean;
    _s(a: InputProxy): void;
    protected _u(a: InputProxy): void;
    _g(a: InputProxy): MouseDownInProgressResult;
    protected _ap(a: SpreadsheetPane): void;
    private _a6;
    private _a1;
    private _bg;
    private _bh;
    private _bi;
    private _bj;
    private _a4;
    private _a5;
    _bf(a: number, b: number, c: SpreadsheetToolTipType): {
        ret: any;
        p2: SpreadsheetToolTipType;
    };
    _al(): void;
    protected _ao(a: InputProxy, b: InputProxy): void;
    protected _bl(a: any, b: string, c: any): void;
    private static _bk;
    private _bm;
    private _bn;
    private _bo;
    private _bp;
    private _bq;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderSelectionOperation extends SpreadsheetHeaderMouseOperation {
    static $t: Type;
    private _a2;
    private _a0;
    protected get__ai(): boolean;
    protected readonly _ai: boolean;
    protected get__aj(): boolean;
    protected readonly _aj: boolean;
    protected get__z(): SpreadsheetCursor;
    readonly _z: SpreadsheetCursor;
    protected _an(a: SpreadsheetScrollRegion): void;
    protected _o(a: MouseOperationState, b: MouseOperationState): void;
    protected _m(a: InputProxy): boolean;
    _q(a: InputProxy): void;
    _r(a: InputProxy): void;
    _s(a: InputProxy): void;
    private _a5;
    protected _u(a: InputProxy): void;
    _g(a: InputProxy): MouseDownInProgressResult;
    protected _ap(a: SpreadsheetScrollRegion): void;
    _a3: Nullable$1<number>;
    private _a4;
}
/**
 * @hidden
 */
export declare class UnselectionHelper extends Base {
    static $t: Type;
    private readonly a;
    private b;
    private readonly c;
    constructor(a: SpreadsheetCell, b: SpreadsheetSelection);
    d(): void;
    e(): void;
    private f;
    g(a: SpreadsheetCell): void;
    h(a: SpreadsheetCellRange): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetCellHitTestResult extends SpreadsheetHitTestResult {
    static $t: Type;
    private readonly a;
    private readonly c;
    constructor(a: SpreadsheetCell, b: SpreadsheetPane);
    readonly b: SpreadsheetCell;
    readonly d: SpreadsheetPane;
}
/**
 * @hidden
 */
export declare class SpreadsheetHeaderHitTestResult extends SpreadsheetHitTestResult {
    static $t: Type;
    private readonly c;
    private readonly a;
    constructor(a: number, b: SpreadsheetScrollRegion);
    readonly d: number;
    readonly b: SpreadsheetScrollRegion;
}
/**
 * @hidden
 */
export interface ISpreadsheetPaneOwner {
    readonly activePane: SpreadsheetPane;
    activatePane(a: SpreadsheetPane): boolean;
    canActivatePane(a: SpreadsheetPane): boolean;
    canSelect(a: SpreadsheetCell): boolean;
    canSelect1(a: SpreadsheetCellRange): boolean;
    convertTwipsToPixels(a: number, b: boolean): number;
    extendRangeForMergedCells(a: SpreadsheetCellRange): SpreadsheetCellRange;
    getCellRange(a: SpreadsheetCell): SpreadsheetCellRange;
    getFilter(a: number, b: number): Filter;
    getHeaderCaption(a: number, b: number): string;
    getPane(a: SpreadsheetRowScrollRegion, b: SpreadsheetColumnScrollRegion): SpreadsheetPane;
    queueExpensiveOperation(a: () => void): IDisposable;
    verifyScrollPositions(): void;
    readonly spreadsheetOwnerState: SpreadsheetOwnerState;
    readonly renderCache: SpreadsheetRenderCache;
    scrollRangeIntoView(pane: SpreadsheetPane, rowRange: IntRange | null, columnRange: IntRange | null): void;
    _scrollRangeIntoView$i(a: SpreadsheetPane, b: Nullable$1<IntRange>, c: Nullable$1<IntRange>): void;
    getScrollableRegion(a: SpreadsheetScrollRegion): SpreadsheetScrollRegion;
}
/**
 * @hidden
 */
export declare let ISpreadsheetPaneOwner_$type: Type;
/**
 * @hidden
 */
export declare class SpreadsheetPaneManager extends PropertyChangeNotifierExtended implements ISpreadsheetPaneOwner {
    static $t: Type;
    private static _db;
    private _av;
    private _bm;
    private _h;
    private _n;
    private _g;
    private _m;
    private _i;
    private _o;
    private _de;
    private _df;
    private _an;
    private _bg;
    private readonly _bb;
    private readonly _p;
    private _ji;
    private _fl;
    private _jl;
    private _jk;
    private _jj;
    private _dv;
    private _du;
    private _eb;
    private _d9;
    private _ea;
    private _am;
    private readonly _a2;
    private _ba;
    private _v;
    private _w;
    private _t;
    private _u;
    private _ed;
    private _ee;
    private _dw;
    private _a7;
    private _a5;
    private _at;
    private _bn;
    private _ft;
    private _jg;
    private _dq;
    private _dr;
    private _ds;
    private _dt;
    readonly _al: SpreadsheetOwnerState;
    private _bk;
    private _a0;
    private readonly _dp;
    private _bl;
    constructor(a: Worksheet, b: (arg1: SpreadsheetPane) => SpreadsheetSelection, c: (arg1: SpreadsheetPane) => boolean, d: (arg1: SpreadsheetUserPromptInfo) => boolean, e: SpreadsheetTabManager, f: SpreadsheetOwnerState);
    e(a: any, b: string, c: any): void;
    _ao: SpreadsheetPane;
    _fu: Tuple$2<string, string>;
    _jh: Point;
    activePane: SpreadsheetPane;
    _a1: SpreadsheetSelection;
    _bh: WorksheetTable;
    _dx: number;
    readonly _dg: IList$1<SpreadsheetScrollRegion>;
    readonly _dh: IList$1<SpreadsheetColumnScrollRegion>;
    protected readonly _j: ObservableCollectionExtended$1<SpreadsheetColumnScrollRegion>;
    readonly _b9: boolean;
    _ca: boolean;
    _cd: boolean;
    _ce: boolean;
    readonly _cc: boolean;
    _cj: boolean;
    readonly _dl: IList$1<SpreadsheetPane>;
    protected readonly _k: ObservableCollectionExtended$1<SpreadsheetPane>;
    readonly _d0: number;
    readonly _d1: number;
    readonly _jo: Size;
    _a6: ISpreadsheetResourceProvider;
    _d2: number;
    readonly _dm: IList$1<SpreadsheetScrollRegion>;
    readonly _dn: IList$1<SpreadsheetRowScrollRegion>;
    protected readonly _l: ObservableCollectionExtended$1<SpreadsheetRowScrollRegion>;
    _fs: string;
    _d3: number;
    _d4: number;
    readonly _a3: SpreadsheetTabManager;
    readonly _bc: Worksheet;
    _d8: number;
    _fx(): void;
    _fw(): void;
    _fy(a: boolean): void;
    _en(): Nullable$1<boolean>;
    _f1(a: boolean): void;
    _f2(a: Direction, b: SpreadsheetCellRange, c?: SpreadsheetPane): void;
    _f3(a: SpreadsheetPane, b: SpreadsheetCellRange[]): void;
    _f5(a: SpreadsheetPane, b: SpreadsheetCellRange): void;
    private static _bp;
    _f4(a: SpreadsheetPane, b: SpreadsheetCell, c: number, d: number, e: number, f: number): void;
    _bq(a: SpreadsheetCellRange): boolean;
    _br(a: SpreadsheetCell): boolean;
    _bs(a: boolean): boolean;
    _bt(a: boolean): boolean;
    _bu(): boolean;
    _bv(a: boolean, b?: LockedEditRangeInfoForOperation): boolean;
    _canSelect(a: SpreadsheetCell): boolean;
    _canSelect1(a: SpreadsheetCellRange): boolean;
    _f6(a: boolean): void;
    _f7(a: boolean): void;
    _gb(): void;
    _ak(a: SpreadsheetUserPromptTrigger, b: boolean, c?: SpreadsheetCellRange[], d?: LockedEditRangeInfoForOperation): SpreadsheetOperationResult;
    _gc(a: boolean, b: boolean, c?: boolean): void;
    _gd(): void;
    _ge(): void;
    _s(a: SpreadsheetCell): SpreadsheetCellEditInfo;
    _ah(a: WorksheetMergedCellsRegion): SpreadsheetCellValueInfo;
    _ai(a: WorksheetRow, b: number): SpreadsheetCellValueInfo;
    _b0(a: number, b: number): boolean;
    private _bz;
    _gf(a: Nullable$1<boolean>): void;
    _gg(): void;
    _gh(): void;
    _gi(a: boolean): void;
    _gj(): void;
    _b1(a: boolean, b: boolean, c?: HashSet$1<WorksheetMergedCellsRegion>): boolean;
    _b2(a: SpreadsheetPane, b: SpreadsheetCell, c: boolean): boolean;
    _b3(a: SpreadsheetPane, b: SpreadsheetCellRange, c: boolean): boolean;
    _b4(a: SpreadsheetPane, b: Nullable$1<IntRange>, c: Nullable$1<IntRange>, d: boolean): boolean;
    extendRangeForMergedCells(a: SpreadsheetCellRange): SpreadsheetCellRange;
    _gl(a: SpreadsheetFilterByCell): void;
    _gm(a: number, b: number): void;
    _z(a: SpreadsheetCellRange): SpreadsheetCellRange;
    private static __dd;
    static _dd(a: Worksheet, b: IEnumerable$1<SpreadsheetCellRange>, c?: (arg1: SpreadsheetCellRange) => void): IEnumerable$1<SpreadsheetCell>;
    _aa(): SpreadsheetCellRange;
    _es(a: SpreadsheetCellRange, b: Nullable$1<SpreadsheetCell>): Nullable$1<SpreadsheetCell>;
    _a8(a: SpreadsheetCell): CellFill;
    _et(a: SpreadsheetCellRange, b: Nullable$1<SpreadsheetCell>): Nullable$1<SpreadsheetCell>;
    _eu(a: number, b: number, c: Direction, d?: Nullable$1<SpreadsheetCellRange>, e?: boolean, f?: boolean): Nullable$1<SpreadsheetCell>;
    getCellRange(a: SpreadsheetCell): SpreadsheetCellRange;
    _getCellRange1(a: number, b: number): SpreadsheetCellRange;
    static _getCellRange2(a: number, b: number, c: Worksheet): SpreadsheetCellRange;
    _fm(a: SpreadsheetCell, b?: boolean): string;
    _fk(a: SpreadsheetCell): any;
    _ev(a: number, b: number, c: Direction, d?: Nullable$1<SpreadsheetCellRange>, e?: boolean, f?: boolean): Nullable$1<SpreadsheetCell>;
    _fp(a: SpreadsheetCell): string;
    _e1(a: SpreadsheetCellRange): Nullable$1<SpreadsheetCell>;
    static _e2(a: SpreadsheetCellRange, b: Worksheet): Nullable$1<SpreadsheetCell>;
    static _e3(a: number, b: number, c: Worksheet): Nullable$1<number>;
    static _e4(a: number, b: number, c: Worksheet): Nullable$1<number>;
    _e6(a: SpreadsheetScrollRegion, b: IntRange, c: boolean): Nullable$1<IntRange>;
    _e8(a: number, b: number): Nullable$1<number>;
    _e7(a: SpreadsheetCellRange): Nullable$1<SpreadsheetCell>;
    _e9(a: number, b: number): Nullable$1<number>;
    _fa(a: SpreadsheetCellRange, b: Nullable$1<SpreadsheetCell>): Nullable$1<SpreadsheetCell>;
    _fc(a: number): Nullable$1<number>;
    _fd(a: number, b: number): Nullable$1<number>;
    _fe(a: number): Nullable$1<number>;
    _ei(a: boolean, b: number, c: number, d: number): number;
    _getPane2(a: number, b: number): SpreadsheetPane;
    _ar(a: SpreadsheetCell): SpreadsheetPane;
    _fg(a: SpreadsheetCellRange, b: Nullable$1<SpreadsheetCell>): Nullable$1<SpreadsheetCell>;
    _fh(a: number): Nullable$1<number>;
    _fi(a: number): Nullable$1<number>;
    _ae(a: boolean, b: number, c: Nullable$1<SortContext>): {
        ret: SpreadsheetCellRange;
        p1: number;
        p2: Nullable$1<SortContext>;
    };
    _fj(a: WorksheetProtectionType): Nullable$1<boolean>;
    _q(a: Nullable$1<SpreadsheetCell>): SortTargetResult;
    _af(a?: boolean, b?: number, c?: number): SpreadsheetCellRange;
    static _cf(a: Worksheet, b: WorksheetRegionAddress[]): boolean;
    _b8(a?: boolean): boolean;
    _cb(): boolean;
    _gp(a: boolean, b: boolean): void;
    _gt(): void;
    _gw(a: Nullable$1<boolean>): void;
    _gx(): void;
    _gy(): void;
    _gz(a: boolean): void;
    _g0(): void;
    _cg(): boolean;
    _ck(a: any): boolean;
    _cl(a: any): boolean;
    _jn(a: Size): Size;
    _g2(a: SpreadsheetCellMergeOperation): void;
    _g3(a: Direction, b: SpreadsheetCellNavigationType, c: boolean): void;
    _g4(a: Direction, b: boolean): void;
    _g5(a: boolean, b: boolean): void;
    _g6(a: boolean, b: boolean): void;
    _g7(a: boolean, b: boolean): void;
    _g8(a: boolean): void;
    _g9(a: boolean): void;
    _ha(a: boolean): void;
    _hb(a: boolean): void;
    _ct(a: boolean): boolean;
    _hc(a: Direction, b?: Nullable$1<boolean>): void;
    _hd<TContext extends IChangeInfoContext, TValue>($tContext: Type, $tValue: Type, a: TContext, b: ChangeInfo$2<TContext, TValue>): void;
    _he(a: Worksheet, b: number, c: number): void;
    _hf(a: WorksheetRegion): void;
    _hg(): void;
    _hh(): void;
    _cu(a: number, b: boolean): boolean;
    _hk(): void;
    _hm(a: Direction): void;
    _hr(): void;
    queueExpensiveOperation(a: () => void): IDisposable;
    _hu(): void;
    _ag(a: SpreadsheetCellRange): SpreadsheetCellRange;
    _hv(): void;
    _cx(a: boolean, b: SpreadsheetCell): boolean;
    _hw(a: boolean, b?: boolean): void;
    _hy(a: boolean, b: boolean): void;
    _h0(a: boolean): void;
    _h1(a: boolean): void;
    _h9(a: Direction): void;
    _ia(a: Direction): void;
    _ib(): void;
    _ic(): void;
    _c4(): boolean;
    _id(): void;
    _ie(a: boolean): void;
    _ig(a: boolean): void;
    _ih(): void;
    _ii(): void;
    _il(a: boolean): void;
    _im(a: IEnumerable$1<SpreadsheetCellRange>, b: SpreadsheetCellRangeBorders, c: WorkbookColorInfo, d: CellBorderLineStyle): void;
    _io<T>($t: Type, a: T, b: (arg1: WorksheetCellFormatProxy, arg2: T) => void, c: IEnumerable$1<SpreadsheetCellRange>, d: CellFormatValue, e?: boolean): void;
    _is(a: number): void;
    _iq(a: boolean): void;
    _ir(a: boolean): void;
    _it(a: boolean, b: boolean): void;
    _iu(a: SpreadsheetFilterByCell, b: boolean, c: Nullable$1<SpreadsheetCell>): void;
    _ix(): void;
    _iy(a: boolean): void;
    _i3(a?: boolean): void;
    _i5(): void;
    _c7(a: LockedEditRangeInfoForOperation, b: IList$1<SpreadsheetCellRange>, c: boolean, d: SpreadsheetOperationResult): {
        ret: boolean;
        p3: SpreadsheetOperationResult;
    };
    _c8(a: IList$1<Worksheet>, b: IList$1<WorksheetRegionAddress>, c: boolean): boolean;
    _c9(): boolean;
    _da(): boolean;
    _je(a: SpreadsheetZoomOperation): void;
    private _fv;
    private _bo;
    private _fz;
    private _f0;
    private _x;
    private _ax;
    private _ay;
    private _aw;
    private _f8;
    private _f9;
    private _ga;
    private _ef;
    convertTwipsToPixels(a: number, b: boolean): number;
    private _a9;
    private static _dc;
    private _by;
    private _gk;
    private static _b5;
    static _extendRangeForMergedCells1(a: Worksheet, b: SpreadsheetCellRange, c?: HashSet$1<WorksheetMergedCellsRegion>): SpreadsheetCellRange;
    private _eo;
    private _ep;
    private _eq;
    private _er;
    private _r;
    _bd(a: WorksheetRow, b: number, c: number): WorksheetCellFormatData;
    private _ez;
    private _ew;
    private _ey;
    private _e0;
    private _ex;
    static _fn(a: number): string;
    static _fo(a: number): string;
    _be(a: number): WorksheetItemPosition;
    _di(a: number, b: number, c?: number): IList$1<WorksheetItemPosition>;
    private _bi;
    _b6(a: IList$1<SpreadsheetDropDownButton>, b: SpreadsheetPane, c: number, d: number, e: number, f: number, g?: IList$1<SpreadsheetDropDownButton>): boolean;
    private _el;
    private _em;
    private _bj;
    private _b7;
    private _a4;
    _e5(a: WorksheetHyperlink): Nullable$1<boolean>;
    private _ad;
    private _getPane1;
    private _ff;
    private _as;
    private _dy;
    private _dz;
    private _ec;
    private _jm;
    private _bf;
    private _fq;
    private _fr;
    private _fb;
    private _au;
    private _dj;
    private _dk;
    private _gn;
    private _go;
    private _gq;
    _aj(a: SpreadsheetCellValueInfo, b: Nullable$1<boolean>, c: WorksheetCellFormatData, d?: boolean): SpreadsheetCellValueInfo;
    private _gr;
    private _ej;
    private _gu;
    private _gv;
    private _gs;
    private _g1;
    private static _ch;
    private _ci;
    private static _cm;
    private static _cn;
    private _cr;
    private _cq;
    private static _co;
    static _cp(a: Worksheet, b: number, c: number, d: number, e: number, f: LockedEditRangeInfoForWorksheet): boolean;
    _eh(a: number): number;
    private _ek;
    private _cs;
    private _az;
    private _hi;
    private _hj;
    private _hl;
    private _hn;
    private _cv;
    private _ho;
    private _hp;
    private _cw;
    private _hq;
    _hs(): void;
    private _ht;
    private _cy;
    static _hx(a: boolean, b: boolean, c: boolean, d: Worksheet, e: IList$1<SpreadsheetCellRange>): {
        p2: boolean;
    };
    private _cz;
    private _hz;
    private _h2;
    private _h3;
    private _h4;
    private _h5;
    private _h6;
    private _h7;
    private _h8;
    private _c1;
    private _c2;
    private _c0;
    private _c3;
    private _ij;
    _ik(a: SpreadsheetCell, b: boolean, c: Nullable$1<SpreadsheetCellRange>): void;
    private _c5;
    private _ip;
    private _c6;
    private _iv;
    private _iw;
    private _iz;
    private _i0;
    private _i1;
    _i2(): void;
    private _i4;
    private _i6;
    private _i7;
    private _i8;
    private _i9;
    private _jb;
    private _ja;
    private _d7;
    private _d5;
    private _d6;
    private _jc;
    private _jd;
    private _jf;
    activatePane(a: SpreadsheetPane): boolean;
    scrollRangeIntoView(pane: SpreadsheetPane, rowRange: IntRange | null, columnRange: IntRange | null): void;
    _scrollRangeIntoView$i(a: SpreadsheetPane, b: Nullable$1<IntRange>, c: Nullable$1<IntRange>): void;
    canActivatePane(a: SpreadsheetPane): boolean;
    canSelect(a: SpreadsheetCell): boolean;
    canSelect1(a: SpreadsheetCellRange): boolean;
    getFilter(a: number, b: number): Filter;
    getHeaderCaption(a: number, b: number): string;
    getPane(a: SpreadsheetRowScrollRegion, b: SpreadsheetColumnScrollRegion): SpreadsheetPane;
    readonly renderCache: SpreadsheetRenderCache;
    readonly spreadsheetOwnerState: SpreadsheetOwnerState;
    verifyScrollPositions(): void;
    getScrollableRegion(a: SpreadsheetScrollRegion): SpreadsheetScrollRegion;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneManager_IndentHelper extends Base {
    static $t: Type;
    private a;
    private d;
    private k;
    private j;
    private g;
    private m;
    private h;
    private i;
    private f;
    private e;
    private c;
    private b;
    constructor(a: SpreadsheetPaneManager, b: boolean);
    private n;
    private static l;
    private p;
    private q;
    private r;
    private s;
    private t;
    private u;
    static o(a: SpreadsheetPaneManager, b: boolean): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneManager_MergedCellOperationInfo extends Base {
    static $t: Type;
    readonly e: HashSet$1<WorksheetMergedCellsRegion>;
    readonly d: boolean;
    readonly a: SpreadsheetCellRange[];
    readonly b: Worksheet;
    readonly c: boolean;
    constructor(a: Worksheet, b: SpreadsheetCellRange[]);
}
/**
 * @hidden
 */
export declare class InViewPaneInfo extends Base {
    static $t: Type;
    private v;
    private r;
    private h;
    private i;
    private aq;
    private readonly l;
    private readonly j;
    private m;
    private readonly a;
    private p;
    private s;
    private b;
    readonly k: SpreadsheetViewCache;
    readonly g: SpreadsheetChartDataInfo;
    private readonly q;
    constructor(a: SpreadsheetPaneManager);
    private w;
    private static x;
    private static y;
    z(): void;
    aa(a: IChartObject): void;
    ab(a: IMultiChartContext): void;
    ac(): void;
    ad(): void;
    private c;
    private d;
    private e;
    private t;
    private u;
    ae(): void;
    readonly n: boolean;
    private f;
    af(a: number, b: number): void;
    ag(): void;
    ah(): void;
    private ai;
    private aj;
    ak(): void;
    o(): boolean;
    private ap;
    private al;
    private am;
    private an;
    private ao;
}
/**
 * @hidden
 */
export declare class InViewPaneInfo_ChartInfo extends Base {
    static $t: Type;
    private c;
    private a;
    constructor(a: SpreadsheetShape);
    d(a: SpreadsheetShape): void;
    e(): void;
    private static f;
    b(a: boolean): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetViewCache extends Base {
    static $t: Type;
    private h;
    private k;
    private i;
    private readonly f;
    private j;
    private l;
    private m;
    private readonly d;
    constructor(a: Worksheet);
    n(a: boolean): void;
    private static e;
    private static b;
    g(a: WorksheetRow, b: number, c: number): WorksheetCellFormatData;
    c(a: number, b: number): CellConditionalFormat;
    a(a: WorksheetRow, b: number, c: number): SpreadsheetResolvedRenderFormat;
    o(a: number, b: number): void;
    private p;
}
/**
 * Represents one or more [[SpreadsheetPane]] instances in a vertical column
 */
export declare class SpreadsheetColumnScrollRegion extends SpreadsheetScrollRegion {
    static $t: Type;
    constructor();
    /**
     * @hidden
     */
    _a0(): IList$1<IntRange>;
    /**
     * @hidden
     */
    _a2(): IList$1<IntRange>;
    /**
     * @hidden
     */
    protected get__aw(): boolean;
    /**
     * @hidden
     */
    readonly _aw: boolean;
}
/**
 * Returns one or more [[SpreadsheetPane]] instances in a horizontal row.
 */
export declare class SpreadsheetRowScrollRegion extends SpreadsheetScrollRegion {
    static $t: Type;
    constructor();
    /**
     * @hidden
     */
    _a0(): IList$1<IntRange>;
    /**
     * @hidden
     */
    _a2(): IList$1<IntRange>;
    /**
     * @hidden
     */
    protected get__aw(): boolean;
    /**
     * @hidden
     */
    readonly _aw: boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetScrollInfo extends ExtendedRangeScrollInfo {
    static $t: Type;
    private _a1;
    _a4: (arg1: SpreadsheetScrollRegion, arg2: ScrollInfoAmount, arg3: number) => boolean;
    _a5: (arg1: SpreadsheetScrollRegion, arg2: number) => number;
    private _a6;
    constructor(a: SpreadsheetScrollRegion);
    _ao(a: ScrollInfoAmount, b: number): void;
    _az(a: number): void;
    protected _au(a: number): number;
    readonly _a2: SpreadsheetScrollRegion;
    readonly _a3: boolean;
    _a7(): void;
    _a8(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetOwnerState extends PropertyChangeNotifierExtended {
    static $t: Type;
    private _q;
    private _n;
    private _u;
    private _v;
    private _i;
    private _r;
    private _m;
    private _g;
    private _k;
    _l: SpreadsheetChartAdapterBase;
    _w: (arg1: SpreadsheetCell) => string;
    _s: boolean;
    _o: () => void;
    _x: (arg1: LockedEditRangeInfoForOperation) => boolean;
    _j: SpreadsheetRenderCache;
    _h: Spreadsheet;
    _t: boolean;
    _p: (arg1: WorksheetHyperlink) => void;
}
/**
 * @hidden
 */
export declare class SpreadsheetRenderCache_DisposableCache extends Base implements IDisposable {
    static $t: Type;
    private readonly _a;
    constructor(a: SpreadsheetRenderCache);
    dispose(): void;
}
/**
 * @hidden
 */
export declare abstract class ExcelWorkbookSerializationProvider extends WorkbookSerializationProviderBase {
    static $t: Type;
    constructor(a: number, ...b: string[]);
    constructor(a: number, b: string[], c: string[]);
    constructor(a: number, ..._rest: any[]);
    private static q;
    private s;
    private r;
    private static k;
    private static t;
    private static u;
    private static v;
    private static w;
    private static x;
    private y;
    private z;
    private static o;
    private static l;
    private static _n;
    private static n;
    protected p(a: CellRegionMapBase, b: Worksheet[], c?: number): number;
    protected m(a: WorkbookDataObjectLoadContext, b: Workbook, c: boolean, d?: WorkbookReferenceBase): boolean;
}
/**
 * @hidden
 */
export declare class BIFF8SerializationProvider extends ExcelWorkbookSerializationProvider {
    static $t: Type;
    constructor();
    j(a: WorkbookDataObjectLoadContext): string;
    c(a: WorkbookDataObjectLoadContext): boolean;
    d(a: WorkbookDataObjectSaveContext): boolean;
}
/**
 * @hidden
 */
export declare abstract class PlainTextWorkbookSerializationProvider extends WorkbookSerializationProviderBase {
    static $t: Type;
    constructor(...a: string[]);
    c(a: WorkbookDataObjectLoadContext): boolean;
    abstract readonly k: string[];
    private static l;
    private static o;
    protected m(a: WorkbookDataObjectLoadContext, b: TextReader, c: string[], d?: Nullable$1<string>): boolean;
    protected n(a: WorkbookDataObjectSaveContext, b: TextWriter, c: string, d?: Nullable$1<string>): boolean;
}
/**
 * @hidden
 */
export declare class CSVWorkbookSerializationProvider extends PlainTextWorkbookSerializationProvider {
    static $t: Type;
    constructor();
    protected get_k(): string[];
    readonly k: string[];
    d(a: WorkbookDataObjectSaveContext): boolean;
}
/**
 * @hidden
 */
export declare class IGExcelSerializationProvider extends ExcelWorkbookSerializationProvider {
    static $t: Type;
    constructor();
    c(a: WorkbookDataObjectLoadContext): boolean;
    d(a: WorkbookDataObjectSaveContext): boolean;
}
/**
 * @hidden
 */
export declare class TSVWorkbookSerializationProvider extends PlainTextWorkbookSerializationProvider {
    static $t: Type;
    constructor();
    protected get_k(): string[];
    readonly k: string[];
    d(a: WorkbookDataObjectSaveContext): boolean;
}
/**
 * @hidden
 */
export declare class WorkbookDataObjectManager extends Base {
    static $t: Type;
    private h;
    constructor(a: Workbook);
    b: Workbook;
    c(a: () => boolean): boolean;
    static d(a: IDataObject): boolean;
    e(a: WorkbookSerializationLoadOptions): boolean;
    f(a: WorkbookSerializationLoadOptions, b: IDataObject, c?: WorksheetCell): boolean;
    private p;
    private n;
    private a;
    private o;
    private g;
    settingData: (sender: any, e: WorkbookDataObjectSettingDataEventArgs) => void;
    pasting: (sender: any, e: WorkbookDataObjectPastingEventArgs) => void;
    copying: (sender: any, e: WorkbookDataObjectCopyingEventArgs) => void;
    beforeCopying: (sender: any, e: EventArgs) => void;
    error: (sender: any, e: WorkbookSerializationErrorEventArgs) => void;
}
/**
 * @hidden
 */
export declare class SpreadsheetShape extends Base {
    static $t: Type;
    readonly b: SpreadsheetShape;
    readonly d: WorksheetShape;
    readonly j: List$1<SpreadsheetShape>;
    readonly i: boolean;
    constructor(a: WorksheetShape, b: SpreadsheetShape);
    g: boolean;
    h: boolean;
    n: number;
    p(): void;
    readonly c: SpreadsheetShape;
    a: SpreadsheetChartElementInfo;
    o: any;
    v: Rect;
    s: Rect;
    u: Rect;
    t: Rect;
    k: number;
    e: boolean;
    f: boolean;
    private l;
    m: IDisposable;
    q(): void;
    r(a: boolean): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetAreaLayoutManager_RowColumnInfo extends Base {
    static $t: Type;
    g: number;
    h: number;
    i: number;
    a: ScrollBarVisibilityCoordinator;
    readonly b: boolean;
    e: IList$1<SpreadsheetScrollRegion>;
    c: boolean;
    d: boolean;
    readonly f: List$1<SpreadsheetAreaLayoutManager_SheetLayerInfo$1<SpreadsheetScrollRegion>>;
    constructor(a: boolean);
}
/**
 * @hidden
 */
export declare class SpreadsheetUserPromptInfo extends Base {
    static $t: Type;
    constructor(a: SpreadsheetUserPromptTrigger, b: string, c: BaseError, d: any, e: boolean);
    b: boolean;
    c: boolean;
    h: string;
    g: any;
    d: boolean;
    readonly e: boolean;
    f: BaseError;
    i: string;
    a: SpreadsheetUserPromptTrigger;
}
/**
 * @hidden
 */
export declare class RotationHelper extends Base {
    static $t: Type;
    private a;
    private k;
    private l;
    private c;
    private d;
    constructor();
    readonly n: Rect;
    readonly e: number;
    readonly f: number;
    readonly m: Rect;
    g(a: number, b: number, c: number, d: number, e: number, f?: boolean): void;
    h(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h?: boolean): void;
    private i;
    b(a: number, b: number, c: number, d: number): boolean;
    j(a: number, b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabInfo extends PropertyChangeNotifierExtended {
    static $t: Type;
    private _ad;
    private readonly _i;
    private _g;
    private _k;
    private _aj;
    private _o;
    private _p;
    private _m;
    private _y;
    private _w;
    private _ai;
    private _n;
    private _q;
    private _z;
    constructor(a: Worksheet);
    e(a: any, b: string, c: any): void;
    _x: number;
    _ak: Color;
    _h: WorkbookColorInfo;
    _ac: any;
    _aa: number;
    _r: boolean;
    _s: boolean;
    _t: boolean;
    _u: boolean;
    _ae: string;
    _v: boolean;
    _l: WorksheetVisibility;
    readonly _j: Worksheet;
    _ab: number;
    private _af;
    _ag(a: boolean, b: boolean, c: boolean): void;
    _ah(): void;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetTabItemLayoutManager$1<TVisual> extends Base {
    static $t: Type;
    protected $tVisual: Type;
    private g;
    private i;
    private x;
    private k;
    private c;
    private ab;
    private a;
    private l;
    private m;
    private j;
    private a5;
    constructor($tVisual: Type);
    readonly e: SpreadsheetTabInfo;
    h: SpreadsheetTabManager;
    readonly w: IList$1<TVisual>;
    protected abstract au(a: SpreadsheetTabManager, b: SpreadsheetTabManager): void;
    protected abstract d(a: TVisual): SpreadsheetTabInfo;
    protected abstract a6(a: TVisual, b: number, c: number): Point;
    protected abstract n(): boolean;
    protected abstract an(): void;
    protected abstract av(): void;
    protected abstract aa(): number;
    protected abstract f(a: SpreadsheetTabInfo): TVisual;
    protected abstract az(a: TVisual): void;
    protected abstract z(a: TVisual): number;
    protected abstract y(): number;
    protected abstract ae(a: TVisual, b: Rect): void;
    protected abstract ak(): void;
    protected abstract ai(): void;
    protected abstract al(): void;
    protected abstract a4(): void;
    abstract readonly b: Spreadsheet;
    protected abstract ax(): void;
    protected abstract o(a: TVisual): boolean;
    protected abstract ay(a: TVisual): void;
    ad(a: number, b: number): void;
    aj(): void;
    a8(): Size;
    ao(): void;
    ap(): void;
    aq(a: InputProxy): void;
    q(a: InputProxy, b: TVisual): boolean;
    r(a: InputProxy): boolean;
    s(a: InputProxy): boolean;
    t(a: InputProxy, b: TVisual): boolean;
    u(a: InputProxy, b: TVisual): boolean;
    a7(a: number, b: number): Rect;
    private af;
    private ag;
    private ah;
    private ac;
    private p;
    private am;
    private as;
    private ar;
    private at;
    private aw;
    v(a: SpreadsheetTabInfo): boolean;
    a0(a: TVisual, b: Point): void;
    private a1;
    private a2;
    private a3;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabManager extends PropertyChangeNotifierExtended {
    static $t: Type;
    private readonly _l;
    private _x;
    private _u;
    private _am;
    private _g;
    private _i;
    private _m;
    private _r;
    private _h;
    private _s;
    private _n;
    private _t;
    private _v;
    private _z;
    private _av;
    private _au;
    private _ap;
    private _an;
    private _ao;
    private _q;
    constructor(a: Spreadsheet);
    e(a: any, b: string, c: any): void;
    _o: SpreadsheetTabInfo;
    _aq: number;
    _as: number;
    _aw: number;
    _at: number;
    _ac: boolean;
    _ae: boolean;
    _ah: boolean;
    _ai: boolean;
    readonly _j: ReadOnlyNotifyCollection$1<SpreadsheetTabInfo>;
    _w: ScrollBars;
    _p: SpreadsheetTabInfo;
    readonly _k: ReadOnlyNotifyCollection$1<SpreadsheetTabInfo>;
    readonly _ak: IList$1<SpreadsheetTabInfo>;
    _a1: number;
    _y: Workbook;
    readonly _al: IList$1<SpreadsheetTabInfo>;
    _a4(a: number): void;
    _a5(a: SheetTabAction): void;
    _ay(): number;
    _a0(a: number, b: boolean, c: number): number;
    _af(a: any): boolean;
    _ag(a: any): boolean;
    _a6(a: ChangeInfo): void;
    _a7(a: SpreadsheetTabInfo): void;
    _a8(): void;
    _bd(): void;
    private _a2;
    private _a3;
    private _aa;
    private _ax;
    private _az;
    private _ab;
    private static _ad;
    private _a9;
    private _ba;
    private _bb;
    private _aj;
    private _bc;
    private _be;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabManager_SelectedTabsCollection extends ObservableCollectionExtended$1<SpreadsheetTabInfo> {
    static $t: Type;
    private readonly _a5;
    constructor(a: SpreadsheetTabManager);
    protected get__ai(): boolean;
    protected _au(a: SpreadsheetTabInfo): void;
    protected _ax(a: SpreadsheetTabInfo): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabManager_VisibleTabsCollection extends LazyReadOnlyNotifyCollection$1<SpreadsheetTabInfo> {
    static $t: Type;
    private readonly _p;
    constructor(a: IList$1<SpreadsheetTabInfo>);
    protected _o(a: IList$1<SpreadsheetTabInfo>): void;
    _q(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabManager_ZIndexTabsCollection extends LazyReadOnlyNotifyCollection$1<SpreadsheetTabInfo> {
    static $t: Type;
    private readonly _p;
    constructor(a: IList$1<SpreadsheetTabInfo>);
    protected _o(a: IList$1<SpreadsheetTabInfo>): void;
    _q(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetUndoTransaction extends UndoTransaction implements IWorksheetUndoUnit {
    static $t: Type;
    private readonly _an;
    protected readonly _ah: SpreadsheetCellRange[];
    protected readonly _ak: Sheet;
    protected readonly _aj: SpreadsheetTransactionOperation;
    protected readonly _al: string;
    constructor(a: Spreadsheet, b: Sheet, c: SpreadsheetTransactionOperation, d: string, e: SpreadsheetCellRange[]);
    protected k(a: UndoExecuteContext): UndoTransaction;
    b(a: UndoExecuteContext): boolean;
    e(a: UndoHistoryItemType, b: boolean): string;
    protected readonly _ai: Spreadsheet;
    protected _am(a: SpreadsheetCellRange[]): string;
    readonly sheet: Sheet;
}
/**
 * @hidden
 */
export declare class SpreadsheetSelectionUndoTransaction extends SpreadsheetUndoTransaction {
    static $t: Type;
    private _ap;
    private _ao;
    constructor(a: Spreadsheet, b: Worksheet, c: SpreadsheetTransactionOperation, d: string, e: SpreadsheetCellRange[], f: SelectionSnapshot, g: (arg1: SelectionSnapshot, arg2: boolean) => void);
    protected k(a: UndoExecuteContext): UndoTransaction;
    b(a: UndoExecuteContext): boolean;
}
/**
 * @hidden
 */
export declare class WorkbookUndoUnit$2<TContext extends IChangeInfoContext, TValue> extends WorkbookUndoUnitBase {
    static $t: Type;
    protected $tContext: Type;
    protected $tValue: Type;
    private _g;
    private _h;
    private _k;
    private _i;
    private _j;
    constructor($tContext: Type, $tValue: Type, a: TContext, b: TValue, c: ChangeInfo$2<TContext, TValue>);
    b(a: UndoExecuteContext): boolean;
    e(a: UndoHistoryItemType, b: boolean): string;
    protected get_d(): any;
    readonly d: any;
    protected get_sheet(): Sheet;
    readonly sheet: Sheet;
}
/**
 * @hidden
 */
export interface ISpreadsheetVisualDataManager {
    exportVisualData(a: Spreadsheet): any;
}
/**
 * @hidden
 */
export declare let ISpreadsheetVisualDataManager_$type: Type;
/**
 * @hidden
 */
export declare class SpreadsheetVisualDataManager extends Base implements ISpreadsheetVisualDataManager {
    static $t: Type;
    exportVisualData(a: Spreadsheet): any;
    private a;
    private b;
    private c;
}
/**
 * @hidden
 */
export declare class FormulaBarButtonAreaElement extends VisualElement {
    static $t: Type;
    readonly cf: ButtonVisualElement;
    readonly cg: ButtonVisualElement;
    constructor(a: FormulaBarVisualElement);
    protected b7(a: number, b: number, c: number, d: number): void;
}
/**
 * @hidden
 */
export declare class FormulaBarNameBoxAreaElement extends VisualElement {
    static $t: Type;
    readonly cf: FormulaBarNameBoxElement;
    constructor(a: FormulaBarVisualElement);
    protected b7(a: number, b: number, c: number, d: number): void;
    private cg;
}
/**
 * @hidden
 */
export declare class FormulaBarNameBoxElement extends ComboBoxVisualElement {
    static $t: Type;
    cr: any;
    constructor(a: FormulaBarNameBoxAreaElement);
}
/**
 * @hidden
 */
export declare class FormulaBarNameBoxSplitter extends AdjustableVisualElement {
    static $t: Type;
    private cq;
    private cp;
    constructor(a: FormulaBarVisualElement);
    protected cm(): void;
    protected ck(a: number, b: number): void;
    protected cl(a: number, b: number): void;
    ad(a: InputProxy): boolean;
}
/**
 * @hidden
 */
export declare class FormulaBarTextAreaElement extends VisualElement {
    static $t: Type;
    readonly cf: TextBoxVisualElement;
    readonly cg: ToggleButtonVisualElement;
    ch: number;
    ci: number;
    constructor(a: FormulaBarVisualElement);
    ad(a: InputProxy): boolean;
    protected b7(a: number, b: number, c: number, d: number): void;
    private cj;
    private ck;
    cl(): void;
}
/**
 * @hidden
 */
export declare class FormulaBarTextAreaSplitter extends AdjustableVisualElement {
    static $t: Type;
    private cp;
    private cs;
    private cq;
    private cr;
    constructor(a: FormulaBarVisualElement);
    protected cm(): void;
    protected ck(a: number, b: number): void;
    protected cl(a: number, b: number): void;
}
/**
 * @hidden
 */
export declare class FormulaBarVisualElement extends VisualElement {
    static $t: Type;
    readonly cg: FormulaBarNameBoxAreaElement;
    readonly cf: FormulaBarButtonAreaElement;
    readonly cj: FormulaBarTextAreaSplitter;
    readonly ch: FormulaBarNameBoxSplitter;
    readonly ci: FormulaBarTextAreaElement;
    private cm;
    private ck;
    cl: number;
    constructor(a: SpreadsheetVisualElement);
    bz(): void;
    co(): number;
    cp(): void;
    private cq;
    protected b7(a: number, b: number, c: number, d: number): void;
    b8(): void;
    cr(): void;
    cn(a: number): number;
}
/**
 * @hidden
 */
export declare class SpreadsheetAreaVisualElement extends VisualElement {
    static $t: Type;
    cf: VisualElementSpreadsheetAreaLayoutManager;
    constructor(a: SpreadsheetVisualElement);
    ai(a: InputProxy, b: number): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    b4(): void;
    protected an(a: number, b: number, c: number, d: number): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetInplaceBackgroundElement extends VisualElement {
    static $t: Type;
    private cf;
    private ch;
    private cm;
    private ci;
    cl: DomWrapper;
    constructor(a: SpreadsheetAreaVisualElement);
    protected an(a: number, b: number, c: number, d: number): boolean;
    cg: CellFill;
    cn: Rect;
    cj: boolean;
    ck: boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetInplaceEditorElement extends VisualElement {
    static $t: Type;
    private dd;
    private cm;
    private ct;
    private cu;
    private c8;
    private cl;
    private df;
    private cq;
    private ch;
    private cn;
    private cf;
    private cp;
    private cj;
    private cr;
    private db;
    private co;
    private c5;
    private cs;
    constructor(a: SpreadsheetAreaVisualElement);
    ad(a: InputProxy): boolean;
    c9: string;
    de: Rect;
    ci: IWorkbookFont;
    dc: Color;
    cv: boolean;
    cw: boolean;
    cx: boolean;
    cy: boolean;
    cz: boolean;
    c0: boolean;
    c1: boolean;
    c2: boolean;
    cg: HorizontalCellAlignment;
    c3: boolean;
    c4: boolean;
    dg: Thickness;
    ck: VerticalCellAlignment;
    c6: number;
    da(): void;
    cellValueChanged: (sender: any, e: EventArgs) => void;
}
/**
 * @hidden
 */
export declare class SpreadsheetInputMessageElement extends VisualElement {
    static $t: Type;
    cl: string;
    ck: string;
    ch: boolean;
    cj: number;
    ci: number;
    readonly cf: VisualElement;
    readonly cg: VisualElement;
    constructor(a: SpreadsheetAreaVisualElement);
    cm(a: string, b: string): void;
    protected get_x(): boolean;
    ad(a: InputProxy): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetPaneSplitterElement extends VisualElement {
    static $t: Type;
    readonly cf: PaneSplitterType;
    constructor(a: SpreadsheetAreaVisualElement, b: PaneSplitterType);
    protected get_x(): boolean;
    ad(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    b4(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetSelectAllButtonElement extends VisualElement {
    static $t: Type;
    private cf;
    constructor(a: SpreadsheetAreaVisualElement);
    protected get_x(): boolean;
    ad(a: InputProxy): boolean;
    cg: boolean;
}
/**
 * @hidden
 */
export declare abstract class SpreadsheetShapeVisualElementBase extends VisualElement {
    static $t: Type;
    private cf;
    private ch;
    private cj;
    private cl;
    constructor(a: VisualElement, b: string);
    cm: number;
    ck: number;
    cg: SpreadsheetShape;
    ci: boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetShapeVisualElement extends SpreadsheetShapeVisualElementBase {
    static $t: Type;
    co: DomRenderer;
    cn: DomRenderer;
    constructor(a: VisualElement);
    protected an(a: number, b: number, c: number, d: number): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetChartVisualElement extends SpreadsheetShapeVisualElementBase {
    static $t: Type;
    readonly cn: ISpreadsheetPaneOwner;
    readonly cp: SpreadsheetChartAdapterBase;
    cr: DomRenderer;
    cq: DomRenderer;
    private co;
    constructor(a: VisualElement, b: SpreadsheetChartAdapterBase, c: ISpreadsheetPaneOwner);
    bz(): void;
    cs(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabAreaSplitterElement extends VisualElement {
    static $t: Type;
    constructor(a: SpreadsheetAreaVisualElement);
    protected get_x(): boolean;
    ad(a: InputProxy): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabItemAreaElement extends VisualElement {
    static $t: Type;
    readonly ci: ButtonVisualElement;
    readonly cl: ButtonVisualElement;
    readonly ck: ButtonVisualElement;
    readonly cj: ButtonVisualElement;
    readonly cg: ButtonVisualElement;
    readonly cm: SpreadsheetTabItemPanel;
    readonly cf: ButtonVisualElement;
    readonly ch: ButtonVisualElement;
    co: number;
    cp: number;
    constructor(a: SpreadsheetAreaVisualElement, b: string);
    protected b7(a: number, b: number, c: number, d: number): void;
    protected an(a: number, b: number, c: number, d: number): boolean;
    cq(): void;
    private cn;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabItemElement extends VisualElement {
    static $t: Type;
    private cn;
    readonly cf: SpreadsheetTabInfo;
    cl: number;
    cv: number;
    cm: DomWrapper;
    constructor(a: SpreadsheetTabItemPanel, b: SpreadsheetTabInfo);
    protected get_x(): boolean;
    private cy;
    ck: boolean;
    ci: boolean;
    cj: boolean;
    cg: boolean;
    ch: boolean;
    private cw;
    private cx;
    b4(): void;
    ad(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    bz(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabItemElementLayoutManager extends SpreadsheetTabItemLayoutManager$1<SpreadsheetTabItemElement> {
    static $t: Type;
    private readonly ba;
    bb: number;
    private bc;
    private a9;
    constructor(a: SpreadsheetTabItemPanel);
    protected get_b(): Spreadsheet;
    readonly b: Spreadsheet;
    protected ae(a: SpreadsheetTabItemElement, b: Rect): void;
    bd(): void;
    protected n(): boolean;
    protected o(a: SpreadsheetTabItemElement): boolean;
    protected f(a: SpreadsheetTabInfo): SpreadsheetTabItemElement;
    protected y(): number;
    protected z(a: SpreadsheetTabItemElement): number;
    protected a6(a: SpreadsheetTabItemElement, b: number, c: number): Point;
    protected d(a: SpreadsheetTabItemElement): SpreadsheetTabInfo;
    protected aa(): number;
    protected ai(): void;
    protected ak(): void;
    protected al(): void;
    protected an(): void;
    protected au(a: SpreadsheetTabManager, b: SpreadsheetTabManager): void;
    protected av(): void;
    protected ax(): void;
    protected ay(a: SpreadsheetTabItemElement): void;
    protected az(a: SpreadsheetTabItemElement): void;
    protected a4(): void;
}
/**
 * @hidden
 */
export declare class SpreadsheetTabItemPanel extends VisualElement {
    static $t: Type;
    readonly cf: SpreadsheetTabItemElementLayoutManager;
    constructor(a: SpreadsheetTabItemAreaElement);
    b4(): void;
    ad(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
}
/**
 * @hidden
 */
export declare class SpreadsheetVisualElement extends RootVisualElement {
    static $t: Type;
    readonly dq: Spreadsheet;
    readonly dr: SpreadsheetAreaVisualElement;
    readonly dp: FormulaBarVisualElement;
    constructor(a: Spreadsheet);
    protected c8(a: VisualElementInputType): void;
    protected da(a: EventProxy, b: EventProxy): void;
    protected cw(a: Point): boolean;
    protected cx(a: Point, b: number): boolean;
    protected b7(a: number, b: number, c: number, d: number): void;
    private ds;
}
/**
 * @hidden
 */
export declare class FilterDialogManager extends Base {
    static $t: Type;
    private a;
    private e;
    private c;
    private b;
    private j;
    private h;
    private f;
    private g;
    private k;
    private i;
    constructor(a: Spreadsheet, b: FilterDialogViewModel);
    private q;
    private r;
    private s;
    private t;
    private d;
    private o;
    private p;
    private m;
    private l;
    private n;
    u(): void;
}
/**
 * @hidden
 */
export declare class FormatCellsDialogManager extends Base {
    static $t: Type;
    private t;
    private v;
    private ag;
    private ah;
    private u;
    private y;
    private z;
    private r;
    private a0;
    private ay;
    private af;
    private bw;
    private az;
    private bx;
    private by;
    private ac;
    private bv;
    private bu;
    private bt;
    private b5;
    private b6;
    private ar;
    private at;
    private as;
    private av;
    private aq;
    private au;
    private aw;
    private ax;
    private b1;
    private b3;
    private b2;
    private b4;
    private ak;
    private an;
    private ap;
    private ao;
    private al;
    private am;
    private x;
    private q;
    private p;
    private o;
    private b0;
    private ai;
    private aj;
    private j;
    private k;
    private i;
    private h;
    private d;
    private a;
    private c;
    private f;
    private e;
    private g;
    private b;
    private bz;
    private n;
    private ad;
    private ae;
    private l;
    constructor(a: Spreadsheet, b: FormatCellsDialogViewModel, c: (arg1: SpreadsheetDialogResult) => void);
    readonly w: SpreadsheetCss;
    readonly bs: HTMLElement;
    private readonly s;
    ea(): void;
    b8(a: string, b: string, c: string): string;
    private dr;
    private ds;
    private dt;
    private du;
    private a1;
    private m;
    private bj;
    private bk;
    private bl;
    private b7;
    private a2;
    private a3;
    private a4;
    private a5;
    private a6;
    private a7;
    private a8;
    private a9;
    private ba;
    private bb;
    private bc;
    private bd;
    private be;
    private bf;
    private bg;
    private bh;
    private bi;
    ab(a: string, b: string, c: string, d: EventListener): HTMLButtonElement;
    private bm;
    private dv;
    private bn;
    private bo;
    private aa;
    private bp;
    private bq;
    private br;
    private dw;
    private dx;
    dg(a: HTMLElement): string;
    dh(a: string): string;
    di(a: string, b: string): {
        ret: string;
        p1: string;
    };
    private dy;
    private dz;
    private d0;
    private d1;
    private d2;
    private d3;
    private d4;
    private d5;
    private d6;
    private d7;
    private d8;
    private d9;
    private eb;
    private ec;
}
/**
 * @hidden
 */
export declare class ColorPickerProxy extends Base {
    static $t: Type;
    private e;
    private g;
    private k;
    private h;
    private i;
    private l;
    private j;
    private d;
    private o;
    private c;
    private p;
    private q;
    private aa;
    private b;
    private a;
    private f;
    private static n;
    constructor(a: FormatCellsDialogManager, b: string, c: string, d: boolean, e: (arg1: WorkbookColorInfo) => void);
    readonly m: HTMLElement;
    t(): void;
    w(a: boolean): void;
    v(): void;
    y(a: Color): void;
    x(): void;
    z(): void;
    private r;
    private s;
    private u;
}
/**
 * @hidden
 */
export declare class BorderPreviewSpreadsheetHelper extends Base {
    static $t: Type;
    private c;
    private a;
    private j;
    private i;
    private b;
    constructor(a: FormatCellsDialogViewModel, b: number, c: number, d: HorizontalCellAlignment, e: VerticalCellAlignment);
    k: Color;
    l: Color;
    readonly f: number;
    readonly g: number;
    readonly d: Workbook;
    e(a: number, b: number, c: string): WorkbookColorInfo;
    h(a: number, b: number, c: string): Nullable$1<CellBorderLineStyle>;
}
/**
 * @hidden
 */
export declare class ColorSortingCriteriaControl extends Base {
    static $t: Type;
    private readonly p;
    private readonly o;
    private readonly r;
    private readonly q;
    private d;
    private c;
    private a;
    private b;
    private i;
    private m;
    private n;
    private e;
    private f;
    constructor(a: Spreadsheet, b: SortDialogViewModel);
    private k;
    private l;
    private s;
    private static g;
    private h;
    u(a: string): void;
    private v;
    private w;
    x(): void;
    y(a: SortConditionWrapper): void;
    private z;
    ab(): void;
    ac(): void;
    private ad;
    private ae;
    readonly j: HTMLDivElement;
    private t;
    private aa;
}
/**
 * @hidden
 */
export declare class SortCriteriaRow extends Base implements IEnumerable$1<HTMLElement> {
    static $t: Type;
    private _d;
    private _b;
    private _c;
    private _k;
    private _m;
    private _n;
    private _g;
    private _a;
    _f: Dictionary$2<SortCriteriaRow_RowElementPart, HTMLElement>;
    private _o;
    constructor(a: Spreadsheet, b: SortDialogViewModel, c: SortConditionWrapper);
    private _h;
    private _p;
    private _i;
    private _j;
    _q(a: string): void;
    _r(): void;
    private _s;
    _u(): void;
    _v(): void;
    _w(): void;
    _x(): void;
    _y(a: boolean): void;
    _z(): void;
    private _aa;
    _ab(a: boolean): void;
    _item(a: SortCriteriaRow_RowElementPart): HTMLElement;
    readonly _e: boolean;
    getEnumerator(): IEnumerator$1<HTMLElement>;
    getEnumeratorObject(): IEnumerator;
    private _t;
}
/**
 * @hidden
 */
export declare class SortCriteriaRow_SortCriteriaRowEnumerator extends Base implements IEnumerator, IEnumerator$1<HTMLElement> {
    static $t: Type;
    private _a;
    private _b;
    constructor(a: SortCriteriaRow);
    readonly current: HTMLElement;
    readonly currentObject: any;
    dispose(): void;
    moveNext(): boolean;
    reset(): void;
}
/**
 * @hidden
 */
export declare class SortOptionsDialogManager extends Base {
    static $t: Type;
    private c;
    private d;
    private b;
    private a;
    private h;
    private e;
    private g;
    private f;
    constructor(a: Spreadsheet, b: SortDialogViewModel, c: Node);
    private k;
    private m;
    private l;
    private o;
    private n;
    private p;
    private i;
    private j;
    private q;
    r(): void;
}
/**
 * @hidden
 */
export declare class SortDialogManager extends Base {
    static $t: Type;
    private e;
    private r;
    private d;
    private c;
    private b;
    private v;
    private g;
    private m;
    private l;
    private s;
    private o;
    private q;
    private p;
    private i;
    private h;
    private k;
    private j;
    private n;
    constructor(a: Spreadsheet, b: SortDialogViewModel);
    private readonly u;
    private readonly y;
    private t;
    private f;
    private z;
    private ad;
    private ac;
    private ab;
    private aa;
    private ae;
    private af;
    private a;
    private w;
    private x;
    private ag;
    private ah;
    private ai;
    private ao;
    private ap;
    aq(): void;
    private ar;
    aj(a: () => void): void;
    private ak;
    private al;
    private am;
    private an;
    private as;
}
/**
 * @hidden
 */
export declare class TopOrBottomDialogManager extends Base {
    static $t: Type;
    private a;
    private f;
    private c;
    private b;
    private h;
    private g;
    private i;
    constructor(a: Spreadsheet, b: TopOrBottomDialogViewModel);
    private m;
    private n;
    private o;
    private p;
    private k;
    private l;
    private e;
    private d;
    private j;
    q(): void;
}
/**
 * @hidden
 */
export declare class CellBordersPreviewControlHelper extends Base {
    static $t: Type;
    private r;
    private q;
    private p;
    private o;
    private a;
    private e;
    private d;
    private b;
    private i;
    private h;
    private k;
    private m;
    private j;
    private l;
    private n;
    constructor(a: Workbook, b: FormatCellsDialogBorderInfo, c: number, d: number, e: Workbook, f: number);
    readonly t: number;
    readonly s: number;
    f(a: number, b: number, c: string): WorkbookColorInfo;
    u(a: number, b: number, c: string): Nullable$1<CellBorderLineStyle>;
    private w;
    private x;
    private y;
    private z;
    private aa;
    private ab;
    private ac;
    private ad;
    private ae;
    private af;
    private ag;
    private ah;
    private ai;
    private aj;
    private ak;
    private al;
    private c;
    private v;
    private g;
    private am;
    private an;
    private ao;
    private ap;
    private aq;
    private ar;
}
/**
 * @hidden
 */
export declare class FontControlViewModel extends Base implements INotifyPropertyChanged {
    static $t: Type;
    private _e;
    private _ab;
    private _aa;
    private _ac;
    private _q;
    private _at;
    private _ai;
    private _c;
    private _g;
    private _l;
    private _am;
    private _an;
    private _al;
    private _o;
    private _p;
    private _ad;
    private _i;
    private _ak;
    constructor(a: string, b: number, c: Nullable$1<boolean>, d: Nullable$1<boolean>, e: Nullable$1<boolean>, f: FontSuperscriptSubscriptStyle, g: FontUnderlineStyle, h: WorkbookColorInfo, i: ISpreadsheetDialogServicesManager, j: boolean, k: boolean, l: boolean, m: boolean, n: Workbook, o: ThemeColorPickerControlViewModel);
    readonly _ah: List$1<string>;
    readonly _ae: List$1<string>;
    readonly _af: List$1<number>;
    _ag: List$1<DialogFontStyleInfo>;
    readonly _n: any[];
    _v: boolean;
    _w: boolean;
    _x: boolean;
    _y: boolean;
    _z: boolean;
    readonly _a9: Color;
    _m: WorkbookColorInfo;
    _ax: string;
    _aj: number;
    _d: DialogFontStyleInfo;
    _h: FontUnderlineStyle;
    _aq: Nullable$1<boolean>;
    _ar: Nullable$1<boolean>;
    _as: Nullable$1<boolean>;
    _f: ThemeColorPickerControlViewModel;
    _k: Workbook;
    private readonly _j;
    private readonly _a;
    _a8(a: WorksheetCell): void;
    private _a5;
    private _r;
    private _ao;
    private _s;
    private _t;
    private _u;
    private _ap;
    private _a6;
    private _b;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected _a7(a: string): void;
}
/**
 * @hidden
 */
export declare class DialogFontStyleInfo extends Base {
    static $t: Type;
    constructor(a: DialogFontStyle);
    toString(): string;
    a: DialogFontStyle;
    readonly b: string;
}
/**
 * @hidden
 */
export declare class SpreadsheetDialogFormatsService extends Base implements ISpreadsheetDialogFormatsService {
    static $t: Type;
    private a;
    getFormatCategories(a: Workbook): List$1<SpreadsheetDialogFormatCategory>;
}
/**
 * @hidden
 */
export declare class FilterDialogViewModel extends Base {
    static $t: Type;
    private f;
    private j;
    private v;
    private m;
    private o;
    private r;
    private t;
    private c;
    private a;
    private g;
    private l;
    private h;
    private b;
    constructor(a: number, b: Worksheet, c: number, d: SpreadsheetFilterDialogOption);
    constructor(a: number, b: WorksheetTableColumn, c: SpreadsheetFilterDialogOption);
    constructor(a: number, ..._rest: any[]);
    private ac;
    private ad;
    private ab;
    private static x;
    private static y;
    private static e;
    private q;
    aa(a: Nullable$1<ExcelComparisonOperator>, b: string, c: Nullable$1<ExcelComparisonOperator>, d: string, e: ConditionalOperator): void;
    static i(a: Spreadsheet): List$1<ComboBoxListItem>;
    z(a: number): string;
    readonly k: List$1<any>;
    readonly w: string;
    readonly s: any;
    readonly u: any;
    readonly n: Nullable$1<ExcelComparisonOperator>;
    readonly p: Nullable$1<ExcelComparisonOperator>;
    readonly d: ConditionalOperator;
}
/**
 * @hidden
 */
export declare class FormatCellsDialogViewModel extends Base implements INotifyPropertyChanged {
    static $t: Type;
    private _e;
    private _f;
    private _i;
    private _a8;
    private _m;
    private _j;
    private _aw;
    private _a9;
    private _ax;
    private _a;
    private _r;
    private _ac;
    private _ae;
    private _aa;
    private _w;
    private _x;
    private _t;
    private _aj;
    private _ah;
    private _ai;
    private _bc;
    private _bk;
    private _bj;
    private _bi;
    private _bh;
    private _c;
    private _o;
    private _bb;
    private _ay;
    private _bt;
    private _l;
    private _ap;
    private _bd;
    private _aq;
    private _ar;
    private _ao;
    constructor(a: FormatCellsDialogOptions, b: FormatCellsDialogData, c: ISpreadsheetDialogServicesManager, d: any, e: any);
    _q: SpreadsheetDialogResult;
    readonly _a0: boolean;
    readonly _a1: boolean;
    readonly _a2: boolean;
    readonly _a3: boolean;
    readonly _a5: boolean;
    readonly _a6: boolean;
    _h: FormatCellsDialogTab;
    _ak: WorkbookColorInfo;
    _d: FormatCellsDialogBorderInfo;
    readonly _cx: Color;
    _al: WorkbookColorInfo;
    readonly _as: any[];
    _bs: any;
    _bx: string;
    _be: number;
    _am: WorkbookColorInfo;
    readonly _at: any[];
    readonly _b: FontControlViewModel;
    readonly _ba: List$1<SpreadsheetDialogFormatCategory>;
    readonly _au: any[];
    _bf: number;
    _a4: boolean;
    _a7: boolean;
    _bn: Nullable$1<boolean>;
    _bo: Nullable$1<boolean>;
    _bg: number;
    _v: CellBorderLineStyle;
    _y: CellFill;
    _z: CellFill;
    _ab: FillPatternStyle;
    _k: SpreadsheetDialogFormat;
    readonly _ce: string;
    _n: SpreadsheetDialogFormatCategory;
    _ad: HorizontalCellAlignment;
    _af: VerticalCellAlignment;
    _bq: Nullable$1<boolean>;
    readonly _s: ThemeColorPickerControlViewModel;
    readonly _av: any[];
    readonly _ag: Workbook;
    _br: Nullable$1<boolean>;
    private readonly _p;
    _ck(a: CellBorderPresetType): void;
    _cl(): void;
    _cv(a: CellBorderType): void;
    private _az;
    private _bl;
    private _bm;
    private _g;
    private _b1;
    private _b2;
    private _an;
    private _u;
    private _cn;
    private _cm;
    private _bp;
    private _co;
    private _cp;
    private _cr;
    private _cs;
    private _ct;
    private _cu;
    private _cw;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected _cq(a: string): void;
}
/**
 * For Internal Use only.
 * @typedef TEnum
 */
export declare class EnumWrapper$1<TEnum> extends Base {
    static $t: Type;
    protected $tEnum: Type;
    private _d;
    private _f;
    private _g;
    constructor($tEnum: Type, a: TEnum, b: string);
    /**
     * Returns a string representation of the object.
     * @return
     */
    toString(): string;
    /**
     * For Internal Use only.
     */
    readonly enumValue: TEnum;
    /**
     * @hidden
     */
    readonly _enumValue$i: TEnum;
    /**
     * For Internal Use only.
     */
    readonly enumValueNameLocalized: string;
    /**
     * @hidden
     */
    readonly _h: string;
    /**
     * @hidden
     */
    static _a<TEnum>($tEnum: Type, a: any[], b: string): EnumWrapper$1<TEnum>;
    /**
     * @hidden
     */
    static _b<TEnum>($tEnum: Type, a: any[], b: string): EnumWrapper$1<TEnum>;
    /**
     * @hidden
     */
    static _c<TEnum>($tEnum: Type, a: any[], b: TEnum): EnumWrapper$1<TEnum>;
}
/**
 * @hidden
 */
export declare class TopOrBottomDialogViewModel extends Base {
    static $t: Type;
    private a;
    private c;
    private i;
    private g;
    private m;
    private e;
    private o;
    private f;
    constructor(a: number, b: Worksheet, c: number);
    constructor(a: number, b: WorksheetTableColumn);
    constructor(a: number, ..._rest: any[]);
    private r;
    private static b;
    q(a: boolean, b: boolean, c: number): void;
    p(a: TopOrBottomFilterType, b: number): void;
    static k(a: Spreadsheet): List$1<ComboBoxListItem>;
    static l(a: Spreadsheet): List$1<ComboBoxListItem>;
    readonly d: TopOrBottomFilterType;
    readonly n: number;
    readonly j: boolean;
    readonly h: boolean;
}

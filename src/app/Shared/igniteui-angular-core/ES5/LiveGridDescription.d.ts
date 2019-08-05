import { Description } from "./Description";
import { SectionHeaderDescription } from "./SectionHeaderDescription";
import { RowSeparatorDescription } from "./RowSeparatorDescription";
import { GridAnimationSettingsDescription } from "./GridAnimationSettingsDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class LiveGridDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private p;
    sectionHeader: SectionHeaderDescription;
    private n;
    rowSeparator: RowSeparatorDescription;
    private g;
    dataSourceDesiredProperties: string[];
    private ah;
    rowHeight: number;
    private z;
    defaultColumnMinWidth: number;
    private ag;
    headerHeight: number;
    private a5;
    headerClickAction: string;
    private r;
    autoGenerateColumns: boolean;
    private ai;
    rowSeparatorHeight: number;
    private u;
    isPlaceholderRenderingEnabled: boolean;
    private av;
    columnAddingAnimationMode: string;
    private az;
    columnPropertyUpdatingAnimationMode: string;
    private ao;
    cellDataLoadedAnimationMode: string;
    private a9;
    rowSelectionAnimationMode: string;
    private l;
    animationSettings: GridAnimationSettingsDescription;
    private a1;
    columnShowingAnimationMode: string;
    private ay;
    columnMovingAnimationMode: string;
    private ax;
    columnHidingAnimationMode: string;
    private aw;
    columnExchangingAnimationMode: string;
    private bj;
    selectionMode: string;
    private s;
    isFilterUIEnabled: boolean;
    private t;
    isGroupRowSticky: boolean;
    private at;
    cellSelectedBackground: string;
    private bf;
    sectionHeaderSelectedBackground: string;
    private aa;
    pinnedRowOpacity: number;
    private bk;
    stickyRowBackground: string;
    private a8;
    pinnedRowBackground: string;
    private a7;
    lastStickyRowBackground: string;
    private am;
    cellBackground: string;
    private au;
    cellTextColor: string;
    private _cellFontFamily;
    cellFontFamily: string;
    private _cellFontSize;
    cellFontSize: number;
    private _cellFontStyle;
    cellFontStyle: string;
    private _cellFontWeight;
    cellFontWeight: string;
    private be;
    sectionHeaderBackground: string;
    private bg;
    sectionHeaderTextColor: string;
    private _sectionHeaderFontFamily;
    sectionHeaderFontFamily: string;
    private _sectionHeaderFontSize;
    sectionHeaderFontSize: number;
    private _sectionHeaderFontStyle;
    sectionHeaderFontStyle: string;
    private _sectionHeaderFontWeight;
    sectionHeaderFontWeight: string;
    private a4;
    headerBackground: string;
    private a6;
    headerTextColor: string;
    private _headerFontFamily;
    headerFontFamily: string;
    private _headerFontSize;
    headerFontSize: number;
    private _headerFontStyle;
    headerFontStyle: string;
    private _headerFontWeight;
    headerFontWeight: string;
    private ba;
    rowSeparatorBackground: string;
    private bd;
    rowSeparatorStickyRowBackground: string;
    private bb;
    rowSeparatorLastStickyRowBackground: string;
    private bc;
    rowSeparatorPinnedRowBackground: string;
    private h;
    primaryKey: string[];
    private f;
    actualPrimaryKey: string[];
    private a3;
    FilterExpressionsChangingRef: string;
    private a2;
    FilterExpressionsChangedRef: string;
    private ar;
    CellPreviewPointerDownRef: string;
    private as;
    CellPreviewPointerUpRef: string;
    private ap;
    CellPointerDownRef: string;
    private aq;
    CellPointerUpRef: string;
    private an;
    CellClickedRef: string;
    private a0;
    ColumnsAutoGeneratedRef: string;
    private bh;
    SelectedItemsChangedRef: string;
    private bi;
    SelectedKeysChangedRef: string;
}

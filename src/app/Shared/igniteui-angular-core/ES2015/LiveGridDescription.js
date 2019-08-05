/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class LiveGridDescription extends Description {
    constructor() {
        super();
        this.p = null;
        this.n = null;
        this.g = null;
        this.ah = 0;
        this.z = 0;
        this.ag = 0;
        this.a5 = null;
        this.r = false;
        this.ai = 0;
        this.u = false;
        this.av = null;
        this.az = null;
        this.ao = null;
        this.a9 = null;
        this.l = null;
        this.a1 = null;
        this.ay = null;
        this.ax = null;
        this.aw = null;
        this.bj = null;
        this.s = false;
        this.t = false;
        this.at = null;
        this.bf = null;
        this.aa = 0;
        this.bk = null;
        this.a8 = null;
        this.a7 = null;
        this.am = null;
        this.au = null;
        this._cellFontFamily = null;
        this._cellFontSize = 0;
        this._cellFontStyle = null;
        this._cellFontWeight = null;
        this.be = null;
        this.bg = null;
        this._sectionHeaderFontFamily = null;
        this._sectionHeaderFontSize = 0;
        this._sectionHeaderFontStyle = null;
        this._sectionHeaderFontWeight = null;
        this.a4 = null;
        this.a6 = null;
        this._headerFontFamily = null;
        this._headerFontSize = 0;
        this._headerFontStyle = null;
        this._headerFontWeight = null;
        this.ba = null;
        this.bd = null;
        this.bb = null;
        this.bc = null;
        this.h = null;
        this.f = null;
        this.a3 = null;
        this.a2 = null;
        this.ar = null;
        this.as = null;
        this.ap = null;
        this.aq = null;
        this.an = null;
        this.a0 = null;
        this.bh = null;
        this.bi = null;
    }
    get_type() {
        return "LiveGrid";
    }
    get type() {
        return this.get_type();
    }
    get sectionHeader() {
        return this.p;
    }
    set sectionHeader(a) {
        this.p = a;
        this.e("SectionHeader");
    }
    get rowSeparator() {
        return this.n;
    }
    set rowSeparator(a) {
        this.n = a;
        this.e("RowSeparator");
    }
    get dataSourceDesiredProperties() {
        return this.g;
    }
    set dataSourceDesiredProperties(a) {
        this.g = a;
        this.e("DataSourceDesiredProperties");
    }
    get rowHeight() {
        return this.ah;
    }
    set rowHeight(a) {
        this.ah = a;
        this.e("RowHeight");
    }
    get defaultColumnMinWidth() {
        return this.z;
    }
    set defaultColumnMinWidth(a) {
        this.z = a;
        this.e("DefaultColumnMinWidth");
    }
    get headerHeight() {
        return this.ag;
    }
    set headerHeight(a) {
        this.ag = a;
        this.e("HeaderHeight");
    }
    get headerClickAction() {
        return this.a5;
    }
    set headerClickAction(a) {
        this.a5 = a;
        this.e("HeaderClickAction");
    }
    get autoGenerateColumns() {
        return this.r;
    }
    set autoGenerateColumns(a) {
        this.r = a;
        this.e("AutoGenerateColumns");
    }
    get rowSeparatorHeight() {
        return this.ai;
    }
    set rowSeparatorHeight(a) {
        this.ai = a;
        this.e("RowSeparatorHeight");
    }
    get isPlaceholderRenderingEnabled() {
        return this.u;
    }
    set isPlaceholderRenderingEnabled(a) {
        this.u = a;
        this.e("IsPlaceholderRenderingEnabled");
    }
    get columnAddingAnimationMode() {
        return this.av;
    }
    set columnAddingAnimationMode(a) {
        this.av = a;
        this.e("ColumnAddingAnimationMode");
    }
    get columnPropertyUpdatingAnimationMode() {
        return this.az;
    }
    set columnPropertyUpdatingAnimationMode(a) {
        this.az = a;
        this.e("ColumnPropertyUpdatingAnimationMode");
    }
    get cellDataLoadedAnimationMode() {
        return this.ao;
    }
    set cellDataLoadedAnimationMode(a) {
        this.ao = a;
        this.e("CellDataLoadedAnimationMode");
    }
    get rowSelectionAnimationMode() {
        return this.a9;
    }
    set rowSelectionAnimationMode(a) {
        this.a9 = a;
        this.e("RowSelectionAnimationMode");
    }
    get animationSettings() {
        return this.l;
    }
    set animationSettings(a) {
        this.l = a;
        this.e("AnimationSettings");
    }
    get columnShowingAnimationMode() {
        return this.a1;
    }
    set columnShowingAnimationMode(a) {
        this.a1 = a;
        this.e("ColumnShowingAnimationMode");
    }
    get columnMovingAnimationMode() {
        return this.ay;
    }
    set columnMovingAnimationMode(a) {
        this.ay = a;
        this.e("ColumnMovingAnimationMode");
    }
    get columnHidingAnimationMode() {
        return this.ax;
    }
    set columnHidingAnimationMode(a) {
        this.ax = a;
        this.e("ColumnHidingAnimationMode");
    }
    get columnExchangingAnimationMode() {
        return this.aw;
    }
    set columnExchangingAnimationMode(a) {
        this.aw = a;
        this.e("ColumnExchangingAnimationMode");
    }
    get selectionMode() {
        return this.bj;
    }
    set selectionMode(a) {
        this.bj = a;
        this.e("SelectionMode");
    }
    get isFilterUIEnabled() {
        return this.s;
    }
    set isFilterUIEnabled(a) {
        this.s = a;
        this.e("IsFilterUIEnabled");
    }
    get isGroupRowSticky() {
        return this.t;
    }
    set isGroupRowSticky(a) {
        this.t = a;
        this.e("IsGroupRowSticky");
    }
    get cellSelectedBackground() {
        return this.at;
    }
    set cellSelectedBackground(a) {
        this.at = a;
        this.e("CellSelectedBackground");
    }
    get sectionHeaderSelectedBackground() {
        return this.bf;
    }
    set sectionHeaderSelectedBackground(a) {
        this.bf = a;
        this.e("SectionHeaderSelectedBackground");
    }
    get pinnedRowOpacity() {
        return this.aa;
    }
    set pinnedRowOpacity(a) {
        this.aa = a;
        this.e("PinnedRowOpacity");
    }
    get stickyRowBackground() {
        return this.bk;
    }
    set stickyRowBackground(a) {
        this.bk = a;
        this.e("StickyRowBackground");
    }
    get pinnedRowBackground() {
        return this.a8;
    }
    set pinnedRowBackground(a) {
        this.a8 = a;
        this.e("PinnedRowBackground");
    }
    get lastStickyRowBackground() {
        return this.a7;
    }
    set lastStickyRowBackground(a) {
        this.a7 = a;
        this.e("LastStickyRowBackground");
    }
    get cellBackground() {
        return this.am;
    }
    set cellBackground(a) {
        this.am = a;
        this.e("CellBackground");
    }
    get cellTextColor() {
        return this.au;
    }
    set cellTextColor(a) {
        this.au = a;
        this.e("CellTextColor");
    }
    get cellFontFamily() {
        return this._cellFontFamily;
    }
    set cellFontFamily(a) {
        this._cellFontFamily = a;
    }
    get cellFontSize() {
        return this._cellFontSize;
    }
    set cellFontSize(a) {
        this._cellFontSize = a;
    }
    get cellFontStyle() {
        return this._cellFontStyle;
    }
    set cellFontStyle(a) {
        this._cellFontStyle = a;
    }
    get cellFontWeight() {
        return this._cellFontWeight;
    }
    set cellFontWeight(a) {
        this._cellFontWeight = a;
    }
    get sectionHeaderBackground() {
        return this.be;
    }
    set sectionHeaderBackground(a) {
        this.be = a;
        this.e("SectionHeaderBackground");
    }
    get sectionHeaderTextColor() {
        return this.bg;
    }
    set sectionHeaderTextColor(a) {
        this.bg = a;
        this.e("SectionHeaderTextColor");
    }
    get sectionHeaderFontFamily() {
        return this._sectionHeaderFontFamily;
    }
    set sectionHeaderFontFamily(a) {
        this._sectionHeaderFontFamily = a;
    }
    get sectionHeaderFontSize() {
        return this._sectionHeaderFontSize;
    }
    set sectionHeaderFontSize(a) {
        this._sectionHeaderFontSize = a;
    }
    get sectionHeaderFontStyle() {
        return this._sectionHeaderFontStyle;
    }
    set sectionHeaderFontStyle(a) {
        this._sectionHeaderFontStyle = a;
    }
    get sectionHeaderFontWeight() {
        return this._sectionHeaderFontWeight;
    }
    set sectionHeaderFontWeight(a) {
        this._sectionHeaderFontWeight = a;
    }
    get headerBackground() {
        return this.a4;
    }
    set headerBackground(a) {
        this.a4 = a;
        this.e("HeaderBackground");
    }
    get headerTextColor() {
        return this.a6;
    }
    set headerTextColor(a) {
        this.a6 = a;
        this.e("HeaderTextColor");
    }
    get headerFontFamily() {
        return this._headerFontFamily;
    }
    set headerFontFamily(a) {
        this._headerFontFamily = a;
    }
    get headerFontSize() {
        return this._headerFontSize;
    }
    set headerFontSize(a) {
        this._headerFontSize = a;
    }
    get headerFontStyle() {
        return this._headerFontStyle;
    }
    set headerFontStyle(a) {
        this._headerFontStyle = a;
    }
    get headerFontWeight() {
        return this._headerFontWeight;
    }
    set headerFontWeight(a) {
        this._headerFontWeight = a;
    }
    get rowSeparatorBackground() {
        return this.ba;
    }
    set rowSeparatorBackground(a) {
        this.ba = a;
        this.e("RowSeparatorBackground");
    }
    get rowSeparatorStickyRowBackground() {
        return this.bd;
    }
    set rowSeparatorStickyRowBackground(a) {
        this.bd = a;
        this.e("RowSeparatorStickyRowBackground");
    }
    get rowSeparatorLastStickyRowBackground() {
        return this.bb;
    }
    set rowSeparatorLastStickyRowBackground(a) {
        this.bb = a;
        this.e("RowSeparatorLastStickyRowBackground");
    }
    get rowSeparatorPinnedRowBackground() {
        return this.bc;
    }
    set rowSeparatorPinnedRowBackground(a) {
        this.bc = a;
        this.e("RowSeparatorPinnedRowBackground");
    }
    get primaryKey() {
        return this.h;
    }
    set primaryKey(a) {
        this.h = a;
        this.e("PrimaryKey");
    }
    get actualPrimaryKey() {
        return this.f;
    }
    set actualPrimaryKey(a) {
        this.f = a;
        this.e("ActualPrimaryKey");
    }
    get FilterExpressionsChangingRef() {
        return this.a3;
    }
    set FilterExpressionsChangingRef(a) {
        this.a3 = a;
        this.e("FilterExpressionsChangingRef");
    }
    get FilterExpressionsChangedRef() {
        return this.a2;
    }
    set FilterExpressionsChangedRef(a) {
        this.a2 = a;
        this.e("FilterExpressionsChangedRef");
    }
    get CellPreviewPointerDownRef() {
        return this.ar;
    }
    set CellPreviewPointerDownRef(a) {
        this.ar = a;
        this.e("CellPreviewPointerDownRef");
    }
    get CellPreviewPointerUpRef() {
        return this.as;
    }
    set CellPreviewPointerUpRef(a) {
        this.as = a;
        this.e("CellPreviewPointerUpRef");
    }
    get CellPointerDownRef() {
        return this.ap;
    }
    set CellPointerDownRef(a) {
        this.ap = a;
        this.e("CellPointerDownRef");
    }
    get CellPointerUpRef() {
        return this.aq;
    }
    set CellPointerUpRef(a) {
        this.aq = a;
        this.e("CellPointerUpRef");
    }
    get CellClickedRef() {
        return this.an;
    }
    set CellClickedRef(a) {
        this.an = a;
        this.e("CellClickedRef");
    }
    get ColumnsAutoGeneratedRef() {
        return this.a0;
    }
    set ColumnsAutoGeneratedRef(a) {
        this.a0 = a;
        this.e("ColumnsAutoGeneratedRef");
    }
    get SelectedItemsChangedRef() {
        return this.bh;
    }
    set SelectedItemsChangedRef(a) {
        this.bh = a;
        this.e("SelectedItemsChangedRef");
    }
    get SelectedKeysChangedRef() {
        return this.bi;
    }
    set SelectedKeysChangedRef(a) {
        this.bi = a;
        this.e("SelectedKeysChangedRef");
    }
}
LiveGridDescription.$t = markType(LiveGridDescription, 'LiveGridDescription', Description.$);
//# sourceMappingURL=LiveGridDescription.js.map
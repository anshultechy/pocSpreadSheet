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
export class CellInfoDescription extends Description {
    constructor() {
        super();
        this.ce = null;
        this.a6 = 0;
        this.m = false;
        this.q = false;
        this.h = false;
        this.k = false;
        this.r = false;
        this.i = false;
        this.l = false;
        this.f = null;
        this.n = false;
        this.o = false;
        this.j = false;
        this.ca = null;
        this.aj = 0;
        this.ak = 0;
        this.bc = 0;
        this.bd = 0;
        this.ae = 0;
        this.af = 0;
        this.ad = 0;
        this.a7 = 0;
        this.be = 0;
        this.p = false;
        this.ah = 0;
        this.b4 = null;
        this.cg = null;
        this.b2 = null;
        this.b3 = null;
        this.b0 = null;
        this.b1 = null;
        this.cb = null;
        this.cd = null;
        this.b8 = null;
        this.b5 = null;
        this.ag = 0;
        this.b7 = null;
        this.b9 = null;
        this.cf = null;
        this._fontFamily = null;
        this._fontSize = 0;
        this._fontStyle = null;
        this._fontWeight = null;
        this.b6 = null;
        this.ai = 0;
        this.a9 = 0;
        this.bb = 0;
        this.ba = 0;
        this.a8 = 0;
        this.az = 0;
        this.a1 = 0;
        this.a0 = 0;
        this.ay = 0;
        this.a3 = 0;
        this.a5 = 0;
        this.a4 = 0;
        this.a2 = 0;
        this.av = 0;
        this.ax = 0;
        this.aw = 0;
        this.au = 0;
        this.cc = null;
    }
    get_type() {
        return "CellInfo";
    }
    get type() {
        return this.get_type();
    }
    get styleKey() {
        return this.ce;
    }
    set styleKey(a) {
        this.ce = a;
        this.e("StyleKey");
    }
    get dataRow() {
        return this.a6;
    }
    set dataRow(a) {
        this.a6 = a;
        this.e("DataRow");
    }
    get isPositionDirty() {
        return this.m;
    }
    set isPositionDirty(a) {
        this.m = a;
        this.e("IsPositionDirty");
    }
    get isSizeDirty() {
        return this.q;
    }
    set isSizeDirty(a) {
        this.q = a;
        this.e("IsSizeDirty");
    }
    get isContentDirty() {
        return this.h;
    }
    set isContentDirty(a) {
        this.h = a;
        this.e("IsContentDirty");
    }
    get isLayerDirty() {
        return this.k;
    }
    set isLayerDirty(a) {
        this.k = a;
        this.e("IsLayerDirty");
    }
    get isStateDirty() {
        return this.r;
    }
    set isStateDirty(a) {
        this.r = a;
        this.e("IsStateDirty");
    }
    get isDataDirty() {
        return this.i;
    }
    set isDataDirty(a) {
        this.i = a;
        this.e("IsDataDirty");
    }
    get isPlaceholdContentNeeded() {
        return this.l;
    }
    set isPlaceholdContentNeeded(a) {
        this.l = a;
        this.e("IsPlaceholdContentNeeded");
    }
    get actionManager() {
        return this.f;
    }
    set actionManager(a) {
        this.f = a;
        this.e("ActionManager");
    }
    get isRowPinned() {
        return this.n;
    }
    set isRowPinned(a) {
        this.n = a;
        this.e("IsRowPinned");
    }
    get isRowSticky() {
        return this.o;
    }
    set isRowSticky(a) {
        this.o = a;
        this.e("IsRowSticky");
    }
    get isLastStickyRow() {
        return this.j;
    }
    set isLastStickyRow(a) {
        this.j = a;
        this.e("IsLastStickyRow");
    }
    get rowItemRef() {
        return this.ca;
    }
    set rowItemRef(a) {
        this.ca = a;
        this.e("RowItemRef");
    }
    get x() {
        return this.aj;
    }
    set x(a) {
        this.aj = a;
        this.e("X");
    }
    get y() {
        return this.ak;
    }
    set y(a) {
        this.ak = a;
        this.e("Y");
    }
    get snappedX() {
        return this.bc;
    }
    set snappedX(a) {
        this.bc = a;
        this.e("SnappedX");
    }
    get snappedY() {
        return this.bd;
    }
    set snappedY(a) {
        this.bd = a;
        this.e("SnappedY");
    }
    get contentOpacity() {
        return this.ae;
    }
    set contentOpacity(a) {
        this.ae = a;
        this.e("ContentOpacity");
    }
    get opacity() {
        return this.af;
    }
    set opacity(a) {
        this.af = a;
        this.e("Opacity");
    }
    get actualOpacity() {
        return this.ad;
    }
    set actualOpacity(a) {
        this.ad = a;
        this.e("ActualOpacity");
    }
    get height() {
        return this.a7;
    }
    set height(a) {
        this.a7 = a;
        this.e("Height");
    }
    get width() {
        return this.be;
    }
    set width(a) {
        this.be = a;
        this.e("Width");
    }
    get isSelected() {
        return this.p;
    }
    set isSelected(a) {
        this.p = a;
        this.e("IsSelected");
    }
    get selectedStatus() {
        return this.ah;
    }
    set selectedStatus(a) {
        this.ah = a;
        this.e("SelectedStatus");
    }
    get horizontalAlignment() {
        return this.b4;
    }
    set horizontalAlignment(a) {
        this.b4 = a;
        this.e("HorizontalAlignment");
    }
    get verticalAlignment() {
        return this.cg;
    }
    set verticalAlignment(a) {
        this.cg = a;
        this.e("VerticalAlignment");
    }
    get background() {
        return this.b2;
    }
    set background(a) {
        this.b2 = a;
        this.e("Background");
    }
    get border() {
        return this.b3;
    }
    set border(a) {
        this.b3 = a;
        this.e("Border");
    }
    get actualBackground() {
        return this.b0;
    }
    set actualBackground(a) {
        this.b0 = a;
        this.e("ActualBackground");
    }
    get actualBorder() {
        return this.b1;
    }
    set actualBorder(a) {
        this.b1 = a;
        this.e("ActualBorder");
    }
    get selectedBackground() {
        return this.cb;
    }
    set selectedBackground(a) {
        this.cb = a;
        this.e("SelectedBackground");
    }
    get stickyRowBackground() {
        return this.cd;
    }
    set stickyRowBackground(a) {
        this.cd = a;
        this.e("StickyRowBackground");
    }
    get pinnedRowBackground() {
        return this.b8;
    }
    set pinnedRowBackground(a) {
        this.b8 = a;
        this.e("PinnedRowBackground");
    }
    get lastStickyRowBackground() {
        return this.b5;
    }
    set lastStickyRowBackground(a) {
        this.b5 = a;
        this.e("LastStickyRowBackground");
    }
    get pinnedRowOpacity() {
        return this.ag;
    }
    set pinnedRowOpacity(a) {
        this.ag = a;
        this.e("PinnedRowOpacity");
    }
    get originalValueRef() {
        return this.b7;
    }
    set originalValueRef(a) {
        this.b7 = a;
        this.e("OriginalValueRef");
    }
    get renderValue() {
        return this.b9;
    }
    set renderValue(a) {
        this.b9 = a;
        this.e("RenderValue");
    }
    get textColor() {
        return this.cf;
    }
    set textColor(a) {
        this.cf = a;
        this.e("TextColor");
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(a) {
        this._fontFamily = a;
    }
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(a) {
        this._fontSize = a;
    }
    get fontStyle() {
        return this._fontStyle;
    }
    set fontStyle(a) {
        this._fontStyle = a;
    }
    get fontWeight() {
        return this._fontWeight;
    }
    set fontWeight(a) {
        this._fontWeight = a;
    }
    get lineBreakMode() {
        return this.b6;
    }
    set lineBreakMode(a) {
        this.b6 = a;
        this.e("LineBreakMode");
    }
    get virtualizationPercentage() {
        return this.ai;
    }
    set virtualizationPercentage(a) {
        this.ai = a;
        this.e("VirtualizationPercentage");
    }
    get paddingLeft() {
        return this.a9;
    }
    set paddingLeft(a) {
        this.a9 = a;
        this.e("PaddingLeft");
    }
    get paddingTop() {
        return this.bb;
    }
    set paddingTop(a) {
        this.bb = a;
        this.e("PaddingTop");
    }
    get paddingRight() {
        return this.ba;
    }
    set paddingRight(a) {
        this.ba = a;
        this.e("PaddingRight");
    }
    get paddingBottom() {
        return this.a8;
    }
    set paddingBottom(a) {
        this.a8 = a;
        this.e("PaddingBottom");
    }
    get actualPaddingLeft() {
        return this.az;
    }
    set actualPaddingLeft(a) {
        this.az = a;
        this.e("ActualPaddingLeft");
    }
    get actualPaddingTop() {
        return this.a1;
    }
    set actualPaddingTop(a) {
        this.a1 = a;
        this.e("ActualPaddingTop");
    }
    get actualPaddingRight() {
        return this.a0;
    }
    set actualPaddingRight(a) {
        this.a0 = a;
        this.e("ActualPaddingRight");
    }
    get actualPaddingBottom() {
        return this.ay;
    }
    set actualPaddingBottom(a) {
        this.ay = a;
        this.e("ActualPaddingBottom");
    }
    get borderLeftWidth() {
        return this.a3;
    }
    set borderLeftWidth(a) {
        this.a3 = a;
        this.e("BorderLeftWidth");
    }
    get borderTopWidth() {
        return this.a5;
    }
    set borderTopWidth(a) {
        this.a5 = a;
        this.e("BorderTopWidth");
    }
    get borderRightWidth() {
        return this.a4;
    }
    set borderRightWidth(a) {
        this.a4 = a;
        this.e("BorderRightWidth");
    }
    get borderBottomWidth() {
        return this.a2;
    }
    set borderBottomWidth(a) {
        this.a2 = a;
        this.e("BorderBottomWidth");
    }
    get actualBorderLeftWidth() {
        return this.av;
    }
    set actualBorderLeftWidth(a) {
        this.av = a;
        this.e("ActualBorderLeftWidth");
    }
    get actualBorderTopWidth() {
        return this.ax;
    }
    set actualBorderTopWidth(a) {
        this.ax = a;
        this.e("ActualBorderTopWidth");
    }
    get actualBorderRightWidth() {
        return this.aw;
    }
    set actualBorderRightWidth(a) {
        this.aw = a;
        this.e("ActualBorderRightWidth");
    }
    get actualBorderBottomWidth() {
        return this.au;
    }
    set actualBorderBottomWidth(a) {
        this.au = a;
        this.e("ActualBorderBottomWidth");
    }
    get sortDirection() {
        return this.cc;
    }
    set sortDirection(a) {
        this.cc = a;
        this.e("SortDirection");
    }
}
CellInfoDescription.$t = markType(CellInfoDescription, 'CellInfoDescription', Description.$);
//# sourceMappingURL=CellInfoDescription.js.map
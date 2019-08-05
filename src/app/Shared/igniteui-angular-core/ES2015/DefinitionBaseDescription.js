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
export class DefinitionBaseDescription extends Description {
    constructor() {
        super();
        this.ab = null;
        this.ac = null;
        this.v = null;
        this.n = 0;
        this.p = 0;
        this.o = 0;
        this.m = 0;
        this.u = null;
        this.ak = null;
        this.z = null;
        this.aj = null;
        this.y = null;
        this.ah = null;
        this.w = null;
        this.g = 0;
        this.ag = null;
        this.am = null;
        this.ai = null;
        this.x = null;
        this.al = null;
        this.aa = null;
        this.h = 0;
        this.f = 0;
        this._fontFamily = null;
        this._fontSize = 0;
        this._fontStyle = null;
        this._fontWeight = null;
        this.ae = null;
        this.af = null;
        this.ad = null;
    }
    get_type() {
        return "DefinitionBase";
    }
    get type() {
        return this.get_type();
    }
    get background() {
        return this.ab;
    }
    set background(a) {
        this.ab = a;
        this.e("Background");
    }
    get border() {
        return this.ac;
    }
    set border(a) {
        this.ac = a;
        this.e("Border");
    }
    get actualBorder() {
        return this.v;
    }
    set actualBorder(a) {
        this.v = a;
        this.e("ActualBorder");
    }
    get borderLeftWidth() {
        return this.n;
    }
    set borderLeftWidth(a) {
        this.n = a;
        this.e("BorderLeftWidth");
    }
    get borderTopWidth() {
        return this.p;
    }
    set borderTopWidth(a) {
        this.p = a;
        this.e("BorderTopWidth");
    }
    get borderRightWidth() {
        return this.o;
    }
    set borderRightWidth(a) {
        this.o = a;
        this.e("BorderRightWidth");
    }
    get borderBottomWidth() {
        return this.m;
    }
    set borderBottomWidth(a) {
        this.m = a;
        this.e("BorderBottomWidth");
    }
    get actualBackground() {
        return this.u;
    }
    set actualBackground(a) {
        this.u = a;
        this.e("ActualBackground");
    }
    get stickyRowBackground() {
        return this.ak;
    }
    set stickyRowBackground(a) {
        this.ak = a;
        this.e("StickyRowBackground");
    }
    get actualStickyRowBackground() {
        return this.z;
    }
    set actualStickyRowBackground(a) {
        this.z = a;
        this.e("ActualStickyRowBackground");
    }
    get pinnedRowBackground() {
        return this.aj;
    }
    set pinnedRowBackground(a) {
        this.aj = a;
        this.e("PinnedRowBackground");
    }
    get actualPinnedRowBackground() {
        return this.y;
    }
    set actualPinnedRowBackground(a) {
        this.y = a;
        this.e("ActualPinnedRowBackground");
    }
    get lastStickyRowBackground() {
        return this.ah;
    }
    set lastStickyRowBackground(a) {
        this.ah = a;
        this.e("LastStickyRowBackground");
    }
    get actualLastStickyRowBackground() {
        return this.w;
    }
    set actualLastStickyRowBackground(a) {
        this.w = a;
        this.e("ActualLastStickyRowBackground");
    }
    get contentOpacity() {
        return this.g;
    }
    set contentOpacity(a) {
        this.g = a;
        this.e("ContentOpacity");
    }
    get horizontalAlignment() {
        return this.ag;
    }
    set horizontalAlignment(a) {
        this.ag = a;
        this.e("HorizontalAlignment");
    }
    get verticalAlignment() {
        return this.am;
    }
    set verticalAlignment(a) {
        this.am = a;
        this.e("VerticalAlignment");
    }
    get lineBreakMode() {
        return this.ai;
    }
    set lineBreakMode(a) {
        this.ai = a;
        this.e("LineBreakMode");
    }
    get actualLineBreakMode() {
        return this.x;
    }
    set actualLineBreakMode(a) {
        this.x = a;
        this.e("ActualLineBreakMode");
    }
    get textColor() {
        return this.al;
    }
    set textColor(a) {
        this.al = a;
        this.e("TextColor");
    }
    get actualTextColor() {
        return this.aa;
    }
    set actualTextColor(a) {
        this.aa = a;
        this.e("ActualTextColor");
    }
    get pinnedRowOpacity() {
        return this.h;
    }
    set pinnedRowOpacity(a) {
        this.h = a;
        this.e("PinnedRowOpacity");
    }
    get actualPinnedRowOpacity() {
        return this.f;
    }
    set actualPinnedRowOpacity(a) {
        this.f = a;
        this.e("ActualPinnedRowOpacity");
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
    get DataBindingRef() {
        return this.ae;
    }
    set DataBindingRef(a) {
        this.ae = a;
        this.e("DataBindingRef");
    }
    get DataBoundRef() {
        return this.af;
    }
    set DataBoundRef(a) {
        this.af = a;
        this.e("DataBoundRef");
    }
    get CellStyleKeyRequestedRef() {
        return this.ad;
    }
    set CellStyleKeyRequestedRef(a) {
        this.ad = a;
        this.e("CellStyleKeyRequestedRef");
    }
}
DefinitionBaseDescription.$t = markType(DefinitionBaseDescription, 'DefinitionBaseDescription', Description.$);
//# sourceMappingURL=DefinitionBaseDescription.js.map
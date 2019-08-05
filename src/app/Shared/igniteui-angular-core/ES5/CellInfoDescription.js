/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var CellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CellInfoDescription, _super);
    function CellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.ce = null;
        _this.a6 = 0;
        _this.m = false;
        _this.q = false;
        _this.h = false;
        _this.k = false;
        _this.r = false;
        _this.i = false;
        _this.l = false;
        _this.f = null;
        _this.n = false;
        _this.o = false;
        _this.j = false;
        _this.ca = null;
        _this.aj = 0;
        _this.ak = 0;
        _this.bc = 0;
        _this.bd = 0;
        _this.ae = 0;
        _this.af = 0;
        _this.ad = 0;
        _this.a7 = 0;
        _this.be = 0;
        _this.p = false;
        _this.ah = 0;
        _this.b4 = null;
        _this.cg = null;
        _this.b2 = null;
        _this.b3 = null;
        _this.b0 = null;
        _this.b1 = null;
        _this.cb = null;
        _this.cd = null;
        _this.b8 = null;
        _this.b5 = null;
        _this.ag = 0;
        _this.b7 = null;
        _this.b9 = null;
        _this.cf = null;
        _this._fontFamily = null;
        _this._fontSize = 0;
        _this._fontStyle = null;
        _this._fontWeight = null;
        _this.b6 = null;
        _this.ai = 0;
        _this.a9 = 0;
        _this.bb = 0;
        _this.ba = 0;
        _this.a8 = 0;
        _this.az = 0;
        _this.a1 = 0;
        _this.a0 = 0;
        _this.ay = 0;
        _this.a3 = 0;
        _this.a5 = 0;
        _this.a4 = 0;
        _this.a2 = 0;
        _this.av = 0;
        _this.ax = 0;
        _this.aw = 0;
        _this.au = 0;
        _this.cc = null;
        return _this;
    }
    CellInfoDescription.prototype.get_type = function () {
        return "CellInfo";
    };
    Object.defineProperty(CellInfoDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "styleKey", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("StyleKey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "dataRow", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("DataRow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isPositionDirty", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("IsPositionDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isSizeDirty", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("IsSizeDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isContentDirty", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IsContentDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isLayerDirty", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("IsLayerDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isStateDirty", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("IsStateDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isDataDirty", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("IsDataDirty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isPlaceholdContentNeeded", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("IsPlaceholdContentNeeded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actionManager", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ActionManager");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isRowPinned", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("IsRowPinned");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isRowSticky", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("IsRowSticky");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isLastStickyRow", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsLastStickyRow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "rowItemRef", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("RowItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "x", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("X");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "y", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("Y");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "snappedX", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("SnappedX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "snappedY", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("SnappedY");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "contentOpacity", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("ContentOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "opacity", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("Opacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualOpacity", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("ActualOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "height", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("Height");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "width", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("Width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "isSelected", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("IsSelected");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "selectedStatus", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("SelectedStatus");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "horizontalAlignment", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("HorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "verticalAlignment", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("VerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "background", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "border", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("Border");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBackground", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("ActualBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBorder", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("ActualBorder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "selectedBackground", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("SelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "stickyRowBackground", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("StickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "pinnedRowBackground", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("PinnedRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "lastStickyRowBackground", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("LastStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "pinnedRowOpacity", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("PinnedRowOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "originalValueRef", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("OriginalValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "renderValue", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("RenderValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "textColor", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (a) {
            this._fontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (a) {
            this._fontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (a) {
            this._fontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (a) {
            this._fontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "lineBreakMode", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("LineBreakMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "virtualizationPercentage", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("VirtualizationPercentage");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "paddingLeft", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("PaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "paddingTop", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("PaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "paddingRight", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("PaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "paddingBottom", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("PaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualPaddingLeft", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("ActualPaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualPaddingTop", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("ActualPaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualPaddingRight", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("ActualPaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualPaddingBottom", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("ActualPaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "borderLeftWidth", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("BorderLeftWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "borderTopWidth", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("BorderTopWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "borderRightWidth", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("BorderRightWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "borderBottomWidth", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("BorderBottomWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBorderLeftWidth", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("ActualBorderLeftWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBorderTopWidth", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("ActualBorderTopWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBorderRightWidth", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("ActualBorderRightWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "actualBorderBottomWidth", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("ActualBorderBottomWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellInfoDescription.prototype, "sortDirection", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("SortDirection");
        },
        enumerable: true,
        configurable: true
    });
    CellInfoDescription.$t = markType(CellInfoDescription, 'CellInfoDescription', Description.$);
    return CellInfoDescription;
}(Description));
export { CellInfoDescription };
//# sourceMappingURL=CellInfoDescription.js.map
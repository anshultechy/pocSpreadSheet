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
var LiveGridDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LiveGridDescription, _super);
    function LiveGridDescription() {
        var _this = _super.call(this) || this;
        _this.p = null;
        _this.n = null;
        _this.g = null;
        _this.ah = 0;
        _this.z = 0;
        _this.ag = 0;
        _this.a5 = null;
        _this.r = false;
        _this.ai = 0;
        _this.u = false;
        _this.av = null;
        _this.az = null;
        _this.ao = null;
        _this.a9 = null;
        _this.l = null;
        _this.a1 = null;
        _this.ay = null;
        _this.ax = null;
        _this.aw = null;
        _this.bj = null;
        _this.s = false;
        _this.t = false;
        _this.at = null;
        _this.bf = null;
        _this.aa = 0;
        _this.bk = null;
        _this.a8 = null;
        _this.a7 = null;
        _this.am = null;
        _this.au = null;
        _this._cellFontFamily = null;
        _this._cellFontSize = 0;
        _this._cellFontStyle = null;
        _this._cellFontWeight = null;
        _this.be = null;
        _this.bg = null;
        _this._sectionHeaderFontFamily = null;
        _this._sectionHeaderFontSize = 0;
        _this._sectionHeaderFontStyle = null;
        _this._sectionHeaderFontWeight = null;
        _this.a4 = null;
        _this.a6 = null;
        _this._headerFontFamily = null;
        _this._headerFontSize = 0;
        _this._headerFontStyle = null;
        _this._headerFontWeight = null;
        _this.ba = null;
        _this.bd = null;
        _this.bb = null;
        _this.bc = null;
        _this.h = null;
        _this.f = null;
        _this.a3 = null;
        _this.a2 = null;
        _this.ar = null;
        _this.as = null;
        _this.ap = null;
        _this.aq = null;
        _this.an = null;
        _this.a0 = null;
        _this.bh = null;
        _this.bi = null;
        return _this;
    }
    LiveGridDescription.prototype.get_type = function () {
        return "LiveGrid";
    };
    Object.defineProperty(LiveGridDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeader", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("SectionHeader");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparator", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("RowSeparator");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "dataSourceDesiredProperties", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("DataSourceDesiredProperties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowHeight", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("RowHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "defaultColumnMinWidth", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("DefaultColumnMinWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerHeight", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("HeaderHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerClickAction", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("HeaderClickAction");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "autoGenerateColumns", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("AutoGenerateColumns");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparatorHeight", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("RowSeparatorHeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "isPlaceholderRenderingEnabled", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("IsPlaceholderRenderingEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnAddingAnimationMode", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("ColumnAddingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnPropertyUpdatingAnimationMode", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("ColumnPropertyUpdatingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellDataLoadedAnimationMode", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            this.ao = a;
            this.e("CellDataLoadedAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSelectionAnimationMode", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("RowSelectionAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "animationSettings", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("AnimationSettings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnShowingAnimationMode", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("ColumnShowingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnMovingAnimationMode", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("ColumnMovingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnHidingAnimationMode", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("ColumnHidingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "columnExchangingAnimationMode", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("ColumnExchangingAnimationMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "selectionMode", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("SelectionMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "isFilterUIEnabled", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("IsFilterUIEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "isGroupRowSticky", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("IsGroupRowSticky");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellSelectedBackground", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("CellSelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderSelectedBackground", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("SectionHeaderSelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "pinnedRowOpacity", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("PinnedRowOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "stickyRowBackground", {
        get: function () {
            return this.bk;
        },
        set: function (a) {
            this.bk = a;
            this.e("StickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "pinnedRowBackground", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("PinnedRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "lastStickyRowBackground", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("LastStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellBackground", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("CellBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellTextColor", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("CellTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellFontFamily", {
        get: function () {
            return this._cellFontFamily;
        },
        set: function (a) {
            this._cellFontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellFontSize", {
        get: function () {
            return this._cellFontSize;
        },
        set: function (a) {
            this._cellFontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellFontStyle", {
        get: function () {
            return this._cellFontStyle;
        },
        set: function (a) {
            this._cellFontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "cellFontWeight", {
        get: function () {
            return this._cellFontWeight;
        },
        set: function (a) {
            this._cellFontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderBackground", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("SectionHeaderBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderTextColor", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("SectionHeaderTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderFontFamily", {
        get: function () {
            return this._sectionHeaderFontFamily;
        },
        set: function (a) {
            this._sectionHeaderFontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderFontSize", {
        get: function () {
            return this._sectionHeaderFontSize;
        },
        set: function (a) {
            this._sectionHeaderFontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderFontStyle", {
        get: function () {
            return this._sectionHeaderFontStyle;
        },
        set: function (a) {
            this._sectionHeaderFontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "sectionHeaderFontWeight", {
        get: function () {
            return this._sectionHeaderFontWeight;
        },
        set: function (a) {
            this._sectionHeaderFontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerBackground", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("HeaderBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerTextColor", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("HeaderTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerFontFamily", {
        get: function () {
            return this._headerFontFamily;
        },
        set: function (a) {
            this._headerFontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerFontSize", {
        get: function () {
            return this._headerFontSize;
        },
        set: function (a) {
            this._headerFontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerFontStyle", {
        get: function () {
            return this._headerFontStyle;
        },
        set: function (a) {
            this._headerFontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "headerFontWeight", {
        get: function () {
            return this._headerFontWeight;
        },
        set: function (a) {
            this._headerFontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparatorBackground", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("RowSeparatorBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparatorStickyRowBackground", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("RowSeparatorStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparatorLastStickyRowBackground", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("RowSeparatorLastStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "rowSeparatorPinnedRowBackground", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("RowSeparatorPinnedRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "primaryKey", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("PrimaryKey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "actualPrimaryKey", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ActualPrimaryKey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "FilterExpressionsChangingRef", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("FilterExpressionsChangingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "FilterExpressionsChangedRef", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("FilterExpressionsChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "CellPreviewPointerDownRef", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("CellPreviewPointerDownRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "CellPreviewPointerUpRef", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("CellPreviewPointerUpRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "CellPointerDownRef", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("CellPointerDownRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "CellPointerUpRef", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("CellPointerUpRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "CellClickedRef", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            this.an = a;
            this.e("CellClickedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "ColumnsAutoGeneratedRef", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("ColumnsAutoGeneratedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "SelectedItemsChangedRef", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("SelectedItemsChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiveGridDescription.prototype, "SelectedKeysChangedRef", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("SelectedKeysChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    LiveGridDescription.$t = markType(LiveGridDescription, 'LiveGridDescription', Description.$);
    return LiveGridDescription;
}(Description));
export { LiveGridDescription };
//# sourceMappingURL=LiveGridDescription.js.map
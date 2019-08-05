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
var DefinitionBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DefinitionBaseDescription, _super);
    function DefinitionBaseDescription() {
        var _this = _super.call(this) || this;
        _this.ab = null;
        _this.ac = null;
        _this.v = null;
        _this.n = 0;
        _this.p = 0;
        _this.o = 0;
        _this.m = 0;
        _this.u = null;
        _this.ak = null;
        _this.z = null;
        _this.aj = null;
        _this.y = null;
        _this.ah = null;
        _this.w = null;
        _this.g = 0;
        _this.ag = null;
        _this.am = null;
        _this.ai = null;
        _this.x = null;
        _this.al = null;
        _this.aa = null;
        _this.h = 0;
        _this.f = 0;
        _this._fontFamily = null;
        _this._fontSize = 0;
        _this._fontStyle = null;
        _this._fontWeight = null;
        _this.ae = null;
        _this.af = null;
        _this.ad = null;
        return _this;
    }
    DefinitionBaseDescription.prototype.get_type = function () {
        return "DefinitionBase";
    };
    Object.defineProperty(DefinitionBaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "background", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("Background");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "border", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("Border");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualBorder", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("ActualBorder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "borderLeftWidth", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("BorderLeftWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "borderTopWidth", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("BorderTopWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "borderRightWidth", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("BorderRightWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "borderBottomWidth", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("BorderBottomWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualBackground", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("ActualBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "stickyRowBackground", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("StickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualStickyRowBackground", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("ActualStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "pinnedRowBackground", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("PinnedRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualPinnedRowBackground", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("ActualPinnedRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "lastStickyRowBackground", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("LastStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualLastStickyRowBackground", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("ActualLastStickyRowBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "contentOpacity", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ContentOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "horizontalAlignment", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("HorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "verticalAlignment", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("VerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "lineBreakMode", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("LineBreakMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualLineBreakMode", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("ActualLineBreakMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "textColor", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("TextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualTextColor", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("ActualTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "pinnedRowOpacity", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("PinnedRowOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "actualPinnedRowOpacity", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ActualPinnedRowOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (a) {
            this._fontFamily = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (a) {
            this._fontSize = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (a) {
            this._fontStyle = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (a) {
            this._fontWeight = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "DataBindingRef", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("DataBindingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "DataBoundRef", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("DataBoundRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefinitionBaseDescription.prototype, "CellStyleKeyRequestedRef", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("CellStyleKeyRequestedRef");
        },
        enumerable: true,
        configurable: true
    });
    DefinitionBaseDescription.$t = markType(DefinitionBaseDescription, 'DefinitionBaseDescription', Description.$);
    return DefinitionBaseDescription;
}(Description));
export { DefinitionBaseDescription };
//# sourceMappingURL=DefinitionBaseDescription.js.map
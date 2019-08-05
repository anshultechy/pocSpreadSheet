/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DefinitionBaseDescription } from "./DefinitionBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnDescription, _super);
    function ColumnDescription() {
        var _this = _super.call(this) || this;
        _this.br = 0;
        _this.bt = 0;
        _this.bs = 0;
        _this.bq = 0;
        _this.b1 = null;
        _this.b2 = null;
        _this.b0 = null;
        _this.by = null;
        _this.b3 = null;
        _this.bz = null;
        _this.bc = null;
        _this.bo = 0;
        _this.bg = false;
        _this.be = false;
        _this.ba = null;
        _this.bf = false;
        _this.bh = false;
        _this.bi = false;
        _this.b4 = null;
        return _this;
    }
    ColumnDescription.prototype.get_type = function () {
        return "Column";
    };
    Object.defineProperty(ColumnDescription.prototype, "paddingLeft", {
        get: function () {
            return this.br;
        },
        set: function (a) {
            this.br = a;
            this.e("PaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "paddingTop", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("PaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "paddingRight", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("PaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "paddingBottom", {
        get: function () {
            return this.bq;
        },
        set: function (a) {
            this.bq = a;
            this.e("PaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "name", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "propertyPath", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("PropertyPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "headerText", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("HeaderText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "actualHeaderText", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("ActualHeaderText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "selectedBackground", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("SelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "actualSelectedBackground", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            this.bz = a;
            this.e("ActualSelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "animationSettings", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("AnimationSettings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "minWidth", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
            this.e("MinWidth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "isFromMarkup", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("IsFromMarkup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "isAutoGenerated", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("IsAutoGenerated");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "filter", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("Filter");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "isFilteringEnabled", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("IsFilteringEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "isHidden", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("IsHidden");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "shouldRemoveWhenHidden", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("ShouldRemoveWhenHidden");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnDescription.prototype, "sortDirection", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("SortDirection");
        },
        enumerable: true,
        configurable: true
    });
    ColumnDescription.$t = markType(ColumnDescription, 'ColumnDescription', DefinitionBaseDescription.$);
    return ColumnDescription;
}(DefinitionBaseDescription));
export { ColumnDescription };
//# sourceMappingURL=ColumnDescription.js.map
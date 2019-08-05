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
var SectionHeaderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SectionHeaderDescription, _super);
    function SectionHeaderDescription() {
        var _this = _super.call(this) || this;
        _this.bj = null;
        _this.bi = null;
        _this.bb = 0;
        _this.bd = 0;
        _this.bc = 0;
        _this.ba = 0;
        return _this;
    }
    SectionHeaderDescription.prototype.get_type = function () {
        return "SectionHeader";
    };
    Object.defineProperty(SectionHeaderDescription.prototype, "selectedBackground", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("SelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionHeaderDescription.prototype, "actualSelectedBackground", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("ActualSelectedBackground");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionHeaderDescription.prototype, "paddingLeft", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("PaddingLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionHeaderDescription.prototype, "paddingTop", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("PaddingTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionHeaderDescription.prototype, "paddingRight", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("PaddingRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionHeaderDescription.prototype, "paddingBottom", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("PaddingBottom");
        },
        enumerable: true,
        configurable: true
    });
    SectionHeaderDescription.$t = markType(SectionHeaderDescription, 'SectionHeaderDescription', DefinitionBaseDescription.$);
    return SectionHeaderDescription;
}(DefinitionBaseDescription));
export { SectionHeaderDescription };
//# sourceMappingURL=SectionHeaderDescription.js.map
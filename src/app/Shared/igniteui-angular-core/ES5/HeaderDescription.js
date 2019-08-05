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
var HeaderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderDescription, _super);
    function HeaderDescription() {
        var _this = _super.call(this) || this;
        _this.bb = 0;
        _this.bd = 0;
        _this.bc = 0;
        _this.ba = 0;
        return _this;
    }
    HeaderDescription.prototype.get_type = function () {
        return "Header";
    };
    Object.defineProperty(HeaderDescription.prototype, "paddingLeft", {
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
    Object.defineProperty(HeaderDescription.prototype, "paddingTop", {
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
    Object.defineProperty(HeaderDescription.prototype, "paddingRight", {
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
    Object.defineProperty(HeaderDescription.prototype, "paddingBottom", {
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
    HeaderDescription.$t = markType(HeaderDescription, 'HeaderDescription', DefinitionBaseDescription.$);
    return HeaderDescription;
}(DefinitionBaseDescription));
export { HeaderDescription };
//# sourceMappingURL=HeaderDescription.js.map
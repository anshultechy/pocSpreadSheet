/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var DropDownItem = /** @class */ (function (_super) {
    tslib_1.__extends(DropDownItem, _super);
    function DropDownItem() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.a = true;
        _this.b = true;
        _this.l = null;
        _this.n = null;
        _this.d = false;
        _this.e = false;
        _this.i = false;
        _this.p = null;
        _this.m = null;
        return _this;
    }
    Object.defineProperty(DropDownItem.prototype, "c", {
        get: function () {
            return this.j != null && this.j.count > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItem.prototype, "f", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItem.prototype, "g", {
        get: function () {
            return this.p == "-";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItem.prototype, "h", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItem.prototype, "k", {
        get: function () {
            if (this.j == null) {
                this.j = new List$1(DropDownItem.$, 0);
            }
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    DropDownItem.$t = markType(DropDownItem, 'DropDownItem');
    return DropDownItem;
}(Base));
export { DropDownItem };
//# sourceMappingURL=DropDownItem.js.map

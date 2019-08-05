/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ExtendedScrollArrowHelperBase } from "./ExtendedScrollArrowHelperBase";
import { Nullable$1, Number_$type, typeCast, runOn, delegateRemove, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { JsScrollBarAdapter } from "./JsScrollBarAdapter";
/**
 * @hidden
 */
var ExtendedScrollArrowHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedScrollArrowHelper, _super);
    function ExtendedScrollArrowHelper(a) {
        return _super.call(this, a) || this;
    }
    ExtendedScrollArrowHelper.prototype.k = function (a, b) {
        if (this.d != null) {
            switch (b._b) {
                case 5:
                    this.j(Nullable$1.toNullable(Number_$type, b._c));
                    break;
                case 8:
                    this.i();
                    break;
                case 1:
                    this.e(4, b._c);
                    b._c = this.d._ac;
                    break;
                case 0:
                    this.e(1, b._c);
                    b._c = this.d._ac;
                    break;
                case 3:
                    this.e(3, b._c);
                    b._c = this.d._ac;
                    break;
                case 2:
                    this.e(0, b._c);
                    b._c = this.d._ac;
                    break;
                default: return;
            }
        }
    };
    ExtendedScrollArrowHelper.prototype.h = function (a, b) {
        var c = typeCast(JsScrollBarAdapter.$, a);
        var d = typeCast(JsScrollBarAdapter.$, b);
        if (c != null) {
            var e = c.a.a;
            e.scroll = delegateRemove(e.scroll, runOn(this, this.k));
        }
        if (d != null) {
            var f = d.a.a;
            f.scroll = delegateCombine(f.scroll, runOn(this, this.k));
        }
    };
    ExtendedScrollArrowHelper.$t = markType(ExtendedScrollArrowHelper, 'ExtendedScrollArrowHelper', ExtendedScrollArrowHelperBase.$);
    return ExtendedScrollArrowHelper;
}(ExtendedScrollArrowHelperBase));
export { ExtendedScrollArrowHelper };
//# sourceMappingURL=ExtendedScrollArrowHelper.js.map
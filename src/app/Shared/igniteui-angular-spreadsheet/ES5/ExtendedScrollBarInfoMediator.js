/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
import { runOn, markType } from "../../igniteui-angular-core/ES5/type";
import { ExtendedScrollArrowHelper } from "./ExtendedScrollArrowHelper";
/**
 * @hidden
 */
var ExtendedScrollBarInfoMediator = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedScrollBarInfoMediator, _super);
    function ExtendedScrollBarInfoMediator(a) {
        var _this = _super.call(this, a) || this;
        _this.r = null;
        _this.r = new ExtendedScrollArrowHelper(runOn(a, a._ao));
        _this.r.d = a;
        return _this;
    }
    ExtendedScrollBarInfoMediator.prototype.k = function () {
        _super.prototype.k.call(this);
        this.r.d = null;
        this.r.b = null;
    };
    ExtendedScrollBarInfoMediator.prototype.m = function (a, b) {
        if (this.r.d != null) {
            this.r.b = b;
        }
    };
    ExtendedScrollBarInfoMediator.$t = markType(ExtendedScrollBarInfoMediator, 'ExtendedScrollBarInfoMediator', ScrollBarInfoMediator.$);
    return ExtendedScrollBarInfoMediator;
}(ScrollBarInfoMediator));
export { ExtendedScrollBarInfoMediator };
//# sourceMappingURL=ExtendedScrollBarInfoMediator.js.map

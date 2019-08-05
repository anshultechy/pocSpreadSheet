/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { isNaN_ } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var VisualElementThickness = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElementThickness, _super);
    function VisualElementThickness(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.a = 0;
        _this.b = isNaN_(a) ? 0 : a;
        _this.c = isNaN_(b) ? 0 : b;
        _this.d = _this.b + (isNaN_(c) ? 0 : c);
        _this.a = _this.c + (isNaN_(d) ? 0 : d);
        return _this;
    }
    VisualElementThickness.$t = markType(VisualElementThickness, 'VisualElementThickness');
    return VisualElementThickness;
}(Base));
export { VisualElementThickness };
//# sourceMappingURL=VisualElementThickness.js.map

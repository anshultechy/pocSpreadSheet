/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var ScalerVisibleBounds = /** @class */ (function (_super) {
    tslib_1.__extends(ScalerVisibleBounds, _super);
    function ScalerVisibleBounds(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.d = 0;
        _this.a = 0;
        _this.c = 0;
        _this.b = 0;
        _this.b = a;
        _this.d = b;
        _this.c = c;
        _this.a = d;
        return _this;
    }
    ScalerVisibleBounds.$t = markType(ScalerVisibleBounds, 'ScalerVisibleBounds');
    return ScalerVisibleBounds;
}(Base));
export { ScalerVisibleBounds };
//# sourceMappingURL=ScalerVisibleBounds.js.map
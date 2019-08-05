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
var AnimationState = /** @class */ (function (_super) {
    tslib_1.__extends(AnimationState, _super);
    function AnimationState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.e = 0;
        _this.d = 0;
        _this.i = null;
        _this.g = 0;
        _this.c = new Date();
        _this.a = null;
        _this.f = null;
        _this.j = null;
        _this.h = 0;
        _this.b = false;
        return _this;
    }
    AnimationState.$t = markType(AnimationState, 'AnimationState');
    return AnimationState;
}(Base));
export { AnimationState };
//# sourceMappingURL=AnimationState.js.map
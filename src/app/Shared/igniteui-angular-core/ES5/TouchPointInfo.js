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
var TouchPointInfo = /** @class */ (function (_super) {
    tslib_1.__extends(TouchPointInfo, _super);
    function TouchPointInfo(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.a = 0;
        _this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.a = c;
                    _this.b = d;
                }
                break;
            case 1: break;
        }
        return _this;
    }
    TouchPointInfo.$t = markType(TouchPointInfo, 'TouchPointInfo');
    return TouchPointInfo;
}(Base));
export { TouchPointInfo };
//# sourceMappingURL=TouchPointInfo.js.map
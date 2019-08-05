/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var RelativePositionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(RelativePositionInfo, _super);
    function RelativePositionInfo(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = 0;
        _this.h = 0;
        _this.f = false;
        _this.a = a;
        _this.h = b;
        _this.f = c;
        return _this;
    }
    Object.defineProperty(RelativePositionInfo.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativePositionInfo.prototype, "i", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativePositionInfo.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    RelativePositionInfo.$t = markType(RelativePositionInfo, 'RelativePositionInfo');
    RelativePositionInfo.c = new RelativePositionInfo(0, 0, false);
    RelativePositionInfo.e = new RelativePositionInfo(1, 0, false);
    RelativePositionInfo.d = new RelativePositionInfo(2, 0, false);
    return RelativePositionInfo;
}(Base));
export { RelativePositionInfo };
//# sourceMappingURL=RelativePositionInfo.js.map

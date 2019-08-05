/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, NotSupportedException, markType } from "./type";
/**
 * @hidden
 */
var Capture = /** @class */ (function (_super) {
    tslib_1.__extends(Capture, _super);
    function Capture(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = 0;
        _this.c = 0;
        _this.f = null;
        _this.a = a;
        _this.c = b;
        _this.f = c;
        return _this;
    }
    Object.defineProperty(Capture.prototype, "b", {
        get: function () {
            if (this.a < 0) {
                throw new NotSupportedException(1, "Cannot get the index of regex groups");
            }
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Capture.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Capture.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Capture.prototype.toString = function () {
        return this.f;
    };
    Capture.$t = markType(Capture, 'Capture');
    return Capture;
}(Base));
export { Capture };
//# sourceMappingURL=Capture.js.map
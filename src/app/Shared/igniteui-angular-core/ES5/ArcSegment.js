/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PathSegment } from "./PathSegment";
import { markType } from "./type";
import { Size } from "./Size";
/**
 * @hidden
 */
var ArcSegment = /** @class */ (function (_super) {
    tslib_1.__extends(ArcSegment, _super);
    function ArcSegment() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.b = false;
        _this.d = 0;
        _this.f = new Size();
        _this.c = 0;
        _this.b = false;
        _this.d = 0;
        return _this;
    }
    ArcSegment.prototype.get_a = function () {
        return 4;
    };
    Object.defineProperty(ArcSegment.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    ArcSegment.$t = markType(ArcSegment, 'ArcSegment', PathSegment.$);
    return ArcSegment;
}(PathSegment));
export { ArcSegment };
//# sourceMappingURL=ArcSegment.js.map
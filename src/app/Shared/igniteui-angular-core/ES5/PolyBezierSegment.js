/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PathSegment } from "./PathSegment";
import { PointCollection } from "./PointCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var PolyBezierSegment = /** @class */ (function (_super) {
    tslib_1.__extends(PolyBezierSegment, _super);
    function PolyBezierSegment() {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.b = new PointCollection(0);
        return _this;
    }
    PolyBezierSegment.prototype.get_a = function () {
        return 2;
    };
    Object.defineProperty(PolyBezierSegment.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    PolyBezierSegment.$t = markType(PolyBezierSegment, 'PolyBezierSegment', PathSegment.$);
    return PolyBezierSegment;
}(PathSegment));
export { PolyBezierSegment };
//# sourceMappingURL=PolyBezierSegment.js.map
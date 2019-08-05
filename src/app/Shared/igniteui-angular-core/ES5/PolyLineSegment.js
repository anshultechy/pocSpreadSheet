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
var PolyLineSegment = /** @class */ (function (_super) {
    tslib_1.__extends(PolyLineSegment, _super);
    function PolyLineSegment() {
        var _this = _super.call(this) || this;
        _this._points = null;
        _this._points = new PointCollection(0);
        return _this;
    }
    Object.defineProperty(PolyLineSegment.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (a) {
            this._points = a;
        },
        enumerable: true,
        configurable: true
    });
    PolyLineSegment.prototype.get_a = function () {
        return 3;
    };
    Object.defineProperty(PolyLineSegment.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    PolyLineSegment.$t = markType(PolyLineSegment, 'PolyLineSegment', PathSegment.$);
    return PolyLineSegment;
}(PathSegment));
export { PolyLineSegment };
//# sourceMappingURL=PolyLineSegment.js.map
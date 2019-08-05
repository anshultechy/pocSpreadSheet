/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PathSegment } from "./PathSegment";
import { markType } from "./type";
/**
 * @hidden
 */
var LineSegment = /** @class */ (function (_super) {
    tslib_1.__extends(LineSegment, _super);
    function LineSegment(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.b = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this.c = c;
                }
                break;
            case 1: break;
        }
        return _this;
    }
    Object.defineProperty(LineSegment.prototype, "c", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
        },
        enumerable: true,
        configurable: true
    });
    LineSegment.prototype.get_a = function () {
        return 0;
    };
    Object.defineProperty(LineSegment.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    LineSegment.$t = markType(LineSegment, 'LineSegment', PathSegment.$);
    return LineSegment;
}(PathSegment));
export { LineSegment };
//# sourceMappingURL=LineSegment.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PathSegment } from "./PathSegment";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
var BezierSegment = /** @class */ (function (_super) {
    tslib_1.__extends(BezierSegment, _super);
    function BezierSegment(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.c = null;
        _this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.e = _this.f = _this.g = { $type: Point_$type, x: 0, y: 0 };
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.e = c;
                    _this.f = d;
                    _this.g = e;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(BezierSegment.prototype, "e", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierSegment.prototype, "f", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierSegment.prototype, "g", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            this.d = a;
        },
        enumerable: true,
        configurable: true
    });
    BezierSegment.prototype.get_a = function () {
        return 1;
    };
    Object.defineProperty(BezierSegment.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    BezierSegment.$t = markType(BezierSegment, 'BezierSegment', PathSegment.$);
    return BezierSegment;
}(PathSegment));
export { BezierSegment };
//# sourceMappingURL=BezierSegment.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FrameworkElement } from "./FrameworkElement";
import { markType } from "./type";
/**
 * @hidden
 */
var Shape = /** @class */ (function (_super) {
    tslib_1.__extends(Shape, _super);
    function Shape() {
        var _this = _super.call(this) || this;
        _this._fill = null;
        _this._stroke = null;
        _this.ab = false;
        _this.ac = 0;
        _this.ai = null;
        _this.ad = 0;
        return _this;
    }
    Object.defineProperty(Shape.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (a) {
            this._fill = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (a) {
            this._stroke = a;
        },
        enumerable: true,
        configurable: true
    });
    Shape.$t = markType(Shape, 'Shape', FrameworkElement.$);
    return Shape;
}(FrameworkElement));
export { Shape };
//# sourceMappingURL=Shape.js.map
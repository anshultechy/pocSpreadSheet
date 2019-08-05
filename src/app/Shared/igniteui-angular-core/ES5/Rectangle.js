/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Shape } from "./Shape";
import { Rect } from "./Rect";
import { markType } from "./type";
/**
 * @hidden
 */
var Rectangle = /** @class */ (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this.ao = null;
        _this.aj = 0;
        _this.ak = 0;
        _this.ao = new Rect(0, 0, 0, 0, 0);
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "al", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "am", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.an = function (a) {
    };
    Rectangle.$t = markType(Rectangle, 'Rectangle', Shape.$);
    return Rectangle;
}(Shape));
export { Rectangle };
//# sourceMappingURL=Rectangle.js.map
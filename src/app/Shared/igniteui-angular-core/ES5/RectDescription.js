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
var RectDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RectDescription, _super);
    function RectDescription() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._left = 0;
        _this._top = 0;
        _this._width = 0;
        _this._height = 0;
        return _this;
    }
    Object.defineProperty(RectDescription.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (a) {
            this._left = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectDescription.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (a) {
            this._top = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectDescription.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectDescription.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    RectDescription.$t = markType(RectDescription, 'RectDescription');
    return RectDescription;
}(Base));
export { RectDescription };
//# sourceMappingURL=RectDescription.js.map
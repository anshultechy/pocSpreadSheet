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
var SizeDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SizeDescription, _super);
    function SizeDescription() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._width = 0;
        _this._height = 0;
        return _this;
    }
    Object.defineProperty(SizeDescription.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (a) {
            this._width = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeDescription.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (a) {
            this._height = a;
        },
        enumerable: true,
        configurable: true
    });
    SizeDescription.$t = markType(SizeDescription, 'SizeDescription');
    return SizeDescription;
}(Base));
export { SizeDescription };
//# sourceMappingURL=SizeDescription.js.map
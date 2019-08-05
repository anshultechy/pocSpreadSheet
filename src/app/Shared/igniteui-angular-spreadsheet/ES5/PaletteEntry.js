/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 */
var PaletteEntry = /** @class */ (function (_super) {
    tslib_1.__extends(PaletteEntry, _super);
    function PaletteEntry(a, b) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._colorInfo = null;
        _this.colorInfo = a;
        _this._a = b;
        return _this;
    }
    Object.defineProperty(PaletteEntry.prototype, "colorInfo", {
        /**
         */
        get: function () {
            return this._colorInfo;
        },
        /**
         */
        set: function (a) {
            this._colorInfo = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaletteEntry.prototype, "color", {
        /**
         */
        get: function () {
            return this._color$i.colorString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaletteEntry.prototype, "_color$i", {
        /**
         * @hidden
         */
        get: function () {
            return this.colorInfo._getResolvedColor1(this._a);
        },
        enumerable: true,
        configurable: true
    });
    PaletteEntry.$t = markType(PaletteEntry, 'PaletteEntry');
    return PaletteEntry;
}(Base));
export { PaletteEntry };
//# sourceMappingURL=PaletteEntry.js.map

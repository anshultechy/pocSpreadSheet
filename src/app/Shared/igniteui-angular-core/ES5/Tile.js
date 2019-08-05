/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Rect } from "./Rect";
/**
 * @hidden
 */
var Tile = /** @class */ (function (_super) {
    tslib_1.__extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = 0;
        _this.d = 0;
        _this.e = 0;
        _this.h = null;
        _this.g = null;
        _this.b = new Date();
        _this.a = false;
        _this.f = null;
        return _this;
    }
    Object.defineProperty(Tile.prototype, "i", {
        get: function () {
            var a = Math.pow(2, -this.e);
            var b = Math.pow(2, -this.e);
            return new Rect(0, this.c * a, this.d * b, a, b);
        },
        enumerable: true,
        configurable: true
    });
    Tile.$t = markType(Tile, 'Tile');
    return Tile;
}(Base));
export { Tile };
//# sourceMappingURL=Tile.js.map
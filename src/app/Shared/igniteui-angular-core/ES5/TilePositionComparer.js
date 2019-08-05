/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEqualityComparer$1_$type, markType } from "./type";
import { Tile } from "./Tile";
/**
 * @hidden
 */
var TilePositionComparer = /** @class */ (function (_super) {
    tslib_1.__extends(TilePositionComparer, _super);
    function TilePositionComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TilePositionComparer.prototype.equalsC = function (a, b) {
        return a.c == b.c && a.d == b.d && a.e == b.e;
    };
    TilePositionComparer.prototype.getHashCodeC = function (a) {
        var b = 23;
        b = b * 31 + a.c;
        b = b * 31 + a.d;
        b = b * 31 + a.e;
        return b;
    };
    TilePositionComparer.$t = markType(TilePositionComparer, 'TilePositionComparer', Base.$, [IEqualityComparer$1_$type.specialize(Tile.$)]);
    return TilePositionComparer;
}(Base));
export { TilePositionComparer };
//# sourceMappingURL=TilePositionComparer.js.map
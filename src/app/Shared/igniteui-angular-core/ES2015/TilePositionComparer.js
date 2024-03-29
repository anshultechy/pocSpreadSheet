/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEqualityComparer$1_$type, markType } from "./type";
import { Tile } from "./Tile";
/**
 * @hidden
 */
export class TilePositionComparer extends Base {
    equalsC(a, b) {
        return a.c == b.c && a.d == b.d && a.e == b.e;
    }
    getHashCodeC(a) {
        let b = 23;
        b = b * 31 + a.c;
        b = b * 31 + a.d;
        b = b * 31 + a.e;
        return b;
    }
}
TilePositionComparer.$t = markType(TilePositionComparer, 'TilePositionComparer', Base.$, [IEqualityComparer$1_$type.specialize(Tile.$)]);
//# sourceMappingURL=TilePositionComparer.js.map
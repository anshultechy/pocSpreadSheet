/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export class Tile extends Base {
    constructor() {
        super(...arguments);
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.h = null;
        this.g = null;
        this.b = new Date();
        this.a = false;
        this.f = null;
    }
    get i() {
        let a = Math.pow(2, -this.e);
        let b = Math.pow(2, -this.e);
        return new Rect(0, this.c * a, this.d * b, a, b);
    }
}
Tile.$t = markType(Tile, 'Tile');
//# sourceMappingURL=Tile.js.map
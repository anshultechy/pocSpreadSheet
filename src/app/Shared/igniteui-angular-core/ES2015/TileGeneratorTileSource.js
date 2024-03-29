/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MapTileSource } from "./MapTileSource";
import { markType } from "./type";
import { Uri } from "./Uri";
/**
 * @hidden
 */
export class TileGeneratorTileSource extends MapTileSource {
    constructor() {
        super(134217728, 134217728, 256, 256, 0);
        this.u = "tilegen://tile/{Z}/{X}/{Y}.png";
    }
    s(a, b, c, d) {
        let e = a - 8;
        if (e > 0) {
            let f = "tilegen://tile/" + e + "/" + b + "/" + c + ".png";
            d.add(new Uri(0, f));
        }
    }
}
TileGeneratorTileSource.$t = markType(TileGeneratorTileSource, 'TileGeneratorTileSource', MapTileSource.$);
//# sourceMappingURL=TileGeneratorTileSource.js.map
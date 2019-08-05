/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MapTileSource } from "./MapTileSource";
import { markType } from "./type";
import { GetTileImageUriArgs } from "./GetTileImageUriArgs";
/**
 * @hidden
 */
export class CustomMapTileSource extends MapTileSource {
    constructor(a, b, c, d, e) {
        super(a, b, c, d, e);
        this.getTileImageUri = null;
    }
    s(a, b, c, d) {
        let e = new GetTileImageUriArgs(a, b, c);
        this.v(e);
        if (e.tileImageUri != null) {
            d.add(e.tileImageUri);
        }
    }
    v(a) {
        if (this.getTileImageUri != null) {
            this.getTileImageUri(this, a);
        }
    }
}
CustomMapTileSource.$t = markType(CustomMapTileSource, 'CustomMapTileSource', MapTileSource.$);
//# sourceMappingURL=CustomMapTileSource.js.map
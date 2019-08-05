/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MapTileSource } from "./MapTileSource";
import { markType } from "./type";
import { Uri } from "./Uri";
/**
 * @hidden
 */
var TileGeneratorTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(TileGeneratorTileSource, _super);
    function TileGeneratorTileSource() {
        var _this = _super.call(this, 134217728, 134217728, 256, 256, 0) || this;
        _this.u = "tilegen://tile/{Z}/{X}/{Y}.png";
        return _this;
    }
    TileGeneratorTileSource.prototype.s = function (a, b, c, d) {
        var e = a - 8;
        if (e > 0) {
            var f = "tilegen://tile/" + e + "/" + b + "/" + c + ".png";
            d.add(new Uri(0, f));
        }
    };
    TileGeneratorTileSource.$t = markType(TileGeneratorTileSource, 'TileGeneratorTileSource', MapTileSource.$);
    return TileGeneratorTileSource;
}(MapTileSource));
export { TileGeneratorTileSource };
//# sourceMappingURL=TileGeneratorTileSource.js.map
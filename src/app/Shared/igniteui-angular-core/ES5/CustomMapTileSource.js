/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MapTileSource } from "./MapTileSource";
import { markType } from "./type";
import { GetTileImageUriArgs } from "./GetTileImageUriArgs";
/**
 * @hidden
 */
var CustomMapTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(CustomMapTileSource, _super);
    function CustomMapTileSource(a, b, c, d, e) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.getTileImageUri = null;
        return _this;
    }
    CustomMapTileSource.prototype.s = function (a, b, c, d) {
        var e = new GetTileImageUriArgs(a, b, c);
        this.v(e);
        if (e.tileImageUri != null) {
            d.add(e.tileImageUri);
        }
    };
    CustomMapTileSource.prototype.v = function (a) {
        if (this.getTileImageUri != null) {
            this.getTileImageUri(this, a);
        }
    };
    CustomMapTileSource.$t = markType(CustomMapTileSource, 'CustomMapTileSource', MapTileSource.$);
    return CustomMapTileSource;
}(MapTileSource));
export { CustomMapTileSource };
//# sourceMappingURL=CustomMapTileSource.js.map
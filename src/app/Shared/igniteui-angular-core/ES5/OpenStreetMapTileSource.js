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
import { stringReplace, stringIsNullOrEmpty, stringStartsWith } from "./string";
/**
 * @hidden
 */
var OpenStreetMapTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(OpenStreetMapTileSource, _super);
    function OpenStreetMapTileSource() {
        var _this = _super.call(this, 134217728, 134217728, 256, 256, 0) || this;
        _this.u = "tile.openstreetmap.org/{Z}/{X}/{Y}.png";
        _this.setTilePathUrl(_this.u);
        return _this;
    }
    OpenStreetMapTileSource.prototype.s = function (a, b, c, d) {
        var e = a - 8;
        if (e > 0) {
            var f = this.u;
            f = stringReplace(f, "{Z}", e.toString());
            f = stringReplace(f, "{X}", b.toString());
            f = stringReplace(f, "{Y}", c.toString());
            d.add(new Uri(0, f));
        }
    };
    OpenStreetMapTileSource.prototype.setTilePathUrl = function (a) {
        if (!stringIsNullOrEmpty(a)) {
            if (stringStartsWith(a, "http://") || stringStartsWith(a, "https://")) {
                this.u = a;
            }
            else {
                var b = "http://";
                b = (('https:' == document.location.protocol ? 'https://' : 'http://'));
                this.u = b + a;
            }
        }
    };
    OpenStreetMapTileSource.$t = markType(OpenStreetMapTileSource, 'OpenStreetMapTileSource', MapTileSource.$);
    return OpenStreetMapTileSource;
}(MapTileSource));
export { OpenStreetMapTileSource };
//# sourceMappingURL=OpenStreetMapTileSource.js.map
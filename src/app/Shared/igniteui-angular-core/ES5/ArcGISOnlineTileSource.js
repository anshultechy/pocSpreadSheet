/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { String_$type, Boolean_$type, Number_$type, typeGetValue, typeCast, markType } from "./type";
import { Uri } from "./Uri";
import { PropertyMetadata } from "./PropertyMetadata";
import { truncate } from "./number";
import { stringIsNullOrEmpty } from "./string";
import { stringFormat1 } from "./stringExtended";
/**
 * @hidden
 */
var ArcGISOnlineTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(ArcGISOnlineTileSource, _super);
    function ArcGISOnlineTileSource() {
        return _super.call(this, 2097152, 2097152, 256, 256, 0) || this;
    }
    Object.defineProperty(ArcGISOnlineTileSource.prototype, "mapServerUri", {
        get: function () {
            return this.c(ArcGISOnlineTileSource.mapServerUriProperty);
        },
        set: function (a) {
            this.h(ArcGISOnlineTileSource.mapServerUriProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcGISOnlineTileSource.prototype, "isMapPublic", {
        get: function () {
            return this.c(ArcGISOnlineTileSource.isMapPublicProperty);
        },
        set: function (a) {
            this.h(ArcGISOnlineTileSource.isMapPublicProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcGISOnlineTileSource.prototype, "levelOfDetail", {
        get: function () {
            return typeGetValue(this.c(ArcGISOnlineTileSource.levelOfDetailProperty));
        },
        set: function (a) {
            this.h(ArcGISOnlineTileSource.levelOfDetailProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcGISOnlineTileSource.prototype, "userToken", {
        get: function () {
            return this.c(ArcGISOnlineTileSource.userTokenProperty);
        },
        set: function (a) {
            this.h(ArcGISOnlineTileSource.userTokenProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    ArcGISOnlineTileSource.prototype.s = function (a, b, c, d) {
        var e = this.mapServerUri + "/tile/{0}/{1}/{2}";
        var f = "";
        if (stringIsNullOrEmpty(this.mapServerUri) || this.levelOfDetail < 1 || !Uri.isWellFormedUriString(this.mapServerUri, 1)) {
            return;
        }
        if (!this.isMapPublic) {
            if (!stringIsNullOrEmpty(this.userToken)) {
                e += "?token={3}";
                f = this.userToken.trim();
            }
            else {
                return;
            }
        }
        var g = a - 8;
        if (g > 0) {
            var h = stringFormat1(e, g, c, b, f);
            d.add(new Uri(0, h));
        }
    };
    ArcGISOnlineTileSource.y = function (a, b) {
        var c = a;
        if (b.f == ArcGISOnlineTileSource.mapServerUriProperty) {
            if (c.mapServerUri != typeCast(String_$type, b.newValue)) {
                c.mapServerUri = typeCast(String_$type, b.newValue);
            }
            c.t(0, 0, 0, 0);
        }
        if (b.f == ArcGISOnlineTileSource.userTokenProperty) {
            if (c.userToken != typeCast(String_$type, b.newValue)) {
                c.userToken = typeCast(String_$type, b.newValue);
            }
            c.t(0, 0, 0, 0);
        }
        if (b.f == ArcGISOnlineTileSource.levelOfDetailProperty) {
            c.q = truncate((Math.pow(2, c.levelOfDetail - 1) * 256));
            c.p = truncate((Math.pow(2, c.levelOfDetail - 1) * 256));
        }
        if (b.f == ArcGISOnlineTileSource.isMapPublicProperty) {
            c.t(0, 0, 0, 0);
        }
    };
    ArcGISOnlineTileSource.$t = markType(ArcGISOnlineTileSource, 'ArcGISOnlineTileSource', MapTileSource.$);
    ArcGISOnlineTileSource.mapServerUriProperty = DependencyProperty.i("MapServerUri", String_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, null, ArcGISOnlineTileSource.y));
    ArcGISOnlineTileSource.isMapPublicProperty = DependencyProperty.i("IsMapPublic", Boolean_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, true, ArcGISOnlineTileSource.y));
    ArcGISOnlineTileSource.levelOfDetailProperty = DependencyProperty.i("LevelOfDetail", Number_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, -1, ArcGISOnlineTileSource.y));
    ArcGISOnlineTileSource.userTokenProperty = DependencyProperty.i("UserToken", String_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, null, ArcGISOnlineTileSource.y));
    return ArcGISOnlineTileSource;
}(MapTileSource));
export { ArcGISOnlineTileSource };
//# sourceMappingURL=ArcGISOnlineTileSource.js.map
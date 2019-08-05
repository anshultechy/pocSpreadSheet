/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class ArcGISOnlineTileSource extends MapTileSource {
    constructor() {
        super(2097152, 2097152, 256, 256, 0);
    }
    get mapServerUri() {
        return this.c(ArcGISOnlineTileSource.mapServerUriProperty);
    }
    set mapServerUri(a) {
        this.h(ArcGISOnlineTileSource.mapServerUriProperty, a);
    }
    get isMapPublic() {
        return this.c(ArcGISOnlineTileSource.isMapPublicProperty);
    }
    set isMapPublic(a) {
        this.h(ArcGISOnlineTileSource.isMapPublicProperty, a);
    }
    get levelOfDetail() {
        return typeGetValue(this.c(ArcGISOnlineTileSource.levelOfDetailProperty));
    }
    set levelOfDetail(a) {
        this.h(ArcGISOnlineTileSource.levelOfDetailProperty, a);
    }
    get userToken() {
        return this.c(ArcGISOnlineTileSource.userTokenProperty);
    }
    set userToken(a) {
        this.h(ArcGISOnlineTileSource.userTokenProperty, a);
    }
    s(a, b, c, d) {
        let e = this.mapServerUri + "/tile/{0}/{1}/{2}";
        let f = "";
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
        let g = a - 8;
        if (g > 0) {
            let h = stringFormat1(e, g, c, b, f);
            d.add(new Uri(0, h));
        }
    }
    static y(a, b) {
        let c = a;
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
    }
}
ArcGISOnlineTileSource.$t = markType(ArcGISOnlineTileSource, 'ArcGISOnlineTileSource', MapTileSource.$);
ArcGISOnlineTileSource.mapServerUriProperty = DependencyProperty.i("MapServerUri", String_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, null, ArcGISOnlineTileSource.y));
ArcGISOnlineTileSource.isMapPublicProperty = DependencyProperty.i("IsMapPublic", Boolean_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, true, ArcGISOnlineTileSource.y));
ArcGISOnlineTileSource.levelOfDetailProperty = DependencyProperty.i("LevelOfDetail", Number_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, -1, ArcGISOnlineTileSource.y));
ArcGISOnlineTileSource.userTokenProperty = DependencyProperty.i("UserToken", String_$type, ArcGISOnlineTileSource.$, new PropertyMetadata(2, null, ArcGISOnlineTileSource.y));
//# sourceMappingURL=ArcGISOnlineTileSource.js.map
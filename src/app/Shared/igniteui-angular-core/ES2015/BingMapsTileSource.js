/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { String_$type, typeCast, runOn, delegateRemove, delegateCombine, markType } from "./type";
import { Uri } from "./Uri";
import { StringBuilder } from "./StringBuilder";
import { PropertyMetadata } from "./PropertyMetadata";
import { stringIsNullOrEmpty, stringReplace } from "./string";
/**
 * @hidden
 */
export class BingMapsTileSource extends MapTileSource {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(256 << 22, 256 << 22, 256, 256, 0);
                    this.w = null;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    {
                        super(256 << 22, 256 << 22, 256, 256, 0);
                        this.w = null;
                    }
                    this.tilePath = c;
                    this.subDomains = d;
                }
                break;
        }
    }
    get tilePath() {
        return this.c(BingMapsTileSource.tilePathProperty);
    }
    set tilePath(a) {
        this.h(BingMapsTileSource.tilePathProperty, a);
    }
    get subDomains() {
        return this.c(BingMapsTileSource.subDomainsProperty);
    }
    set subDomains(a) {
        this.h(BingMapsTileSource.subDomainsProperty, a);
    }
    ab(a, b) {
        this.t(0, 0, 0, 0);
    }
    get cultureName() {
        return this.c(BingMapsTileSource.cultureNameProperty);
    }
    set cultureName(a) {
        this.h(BingMapsTileSource.cultureNameProperty, a);
    }
    s(a, b, c, d) {
        if (!this.u()) {
            d.clear();
            return;
        }
        if (stringIsNullOrEmpty(this.tilePath)) {
            return;
        }
        a -= 8;
        if (a > 0) {
            let e = this.y(a, b, c);
            let f = this.tilePath;
            f = stringReplace(f, "{culture}", this.w);
            f = stringReplace(f, "{quadkey}", e);
            let g = parseInt(e.substr(e.length - 1, 1));
            if (g >= this.subDomains.count) {
                return;
            }
            f = stringReplace(f, "{subdomain}", this.subDomains._inner[g]);
            f = stringReplace(f, "&token={token}", "");
            d.add(new Uri(0, f));
        }
    }
    u() {
        let a = true;
        return a;
    }
    y(a, b, c) {
        let d = new StringBuilder(0);
        for (let e = a; e > 0; --e) {
            let f = '0';
            let g = 1 << (e - 1);
            if ((b & g) != 0) {
                ((() => { let $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
            }
            if ((c & g) != 0) {
                ((() => { let $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
                ((() => { let $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
            }
            d.h(f);
        }
        return d.toString();
    }
    static aa(a, b) {
        let c = a;
        if ((b.f == BingMapsTileSource.subDomainsProperty) || (b.f == BingMapsTileSource.tilePathProperty) || (b.f == BingMapsTileSource.cultureNameProperty)) {
            if (b.f == BingMapsTileSource.subDomainsProperty) {
                let d = typeCast(ObservableCollection$1.$.specialize(String_$type), b.oldValue);
                let e = typeCast(ObservableCollection$1.$.specialize(String_$type), b.newValue);
                if (d != null) {
                    d.collectionChanged = delegateRemove(d.collectionChanged, runOn(c, c.ab));
                }
                if (e != null) {
                    e.collectionChanged = delegateCombine(e.collectionChanged, runOn(c, c.ab));
                }
            }
            if (b.f == BingMapsTileSource.cultureNameProperty) {
                c.w = b.newValue;
            }
            c.t(0, 0, 0, 0);
        }
    }
}
BingMapsTileSource.$t = markType(BingMapsTileSource, 'BingMapsTileSource', MapTileSource.$);
BingMapsTileSource.tilePathProperty = DependencyProperty.i("TilePath", String_$type, BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
BingMapsTileSource.subDomainsProperty = DependencyProperty.i("SubDomains", ObservableCollection$1.$.specialize(String_$type), BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
BingMapsTileSource.cultureNameProperty = DependencyProperty.i("CultureName", String_$type, BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
//# sourceMappingURL=BingMapsTileSource.js.map
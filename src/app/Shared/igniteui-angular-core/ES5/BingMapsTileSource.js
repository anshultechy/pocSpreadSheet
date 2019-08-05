/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var BingMapsTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(BingMapsTileSource, _super);
    function BingMapsTileSource(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 256 << 22, 256 << 22, 256, 256, 0) || this;
                    _this.w = null;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    {
                        _this = _super.call(this, 256 << 22, 256 << 22, 256, 256, 0) || this;
                        _this.w = null;
                    }
                    _this.tilePath = c;
                    _this.subDomains = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(BingMapsTileSource.prototype, "tilePath", {
        get: function () {
            return this.c(BingMapsTileSource.tilePathProperty);
        },
        set: function (a) {
            this.h(BingMapsTileSource.tilePathProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BingMapsTileSource.prototype, "subDomains", {
        get: function () {
            return this.c(BingMapsTileSource.subDomainsProperty);
        },
        set: function (a) {
            this.h(BingMapsTileSource.subDomainsProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    BingMapsTileSource.prototype.ab = function (a, b) {
        this.t(0, 0, 0, 0);
    };
    Object.defineProperty(BingMapsTileSource.prototype, "cultureName", {
        get: function () {
            return this.c(BingMapsTileSource.cultureNameProperty);
        },
        set: function (a) {
            this.h(BingMapsTileSource.cultureNameProperty, a);
        },
        enumerable: true,
        configurable: true
    });
    BingMapsTileSource.prototype.s = function (a, b, c, d) {
        if (!this.u()) {
            d.clear();
            return;
        }
        if (stringIsNullOrEmpty(this.tilePath)) {
            return;
        }
        a -= 8;
        if (a > 0) {
            var e = this.y(a, b, c);
            var f = this.tilePath;
            f = stringReplace(f, "{culture}", this.w);
            f = stringReplace(f, "{quadkey}", e);
            var g = parseInt(e.substr(e.length - 1, 1));
            if (g >= this.subDomains.count) {
                return;
            }
            f = stringReplace(f, "{subdomain}", this.subDomains._inner[g]);
            f = stringReplace(f, "&token={token}", "");
            d.add(new Uri(0, f));
        }
    };
    BingMapsTileSource.prototype.u = function () {
        var a = true;
        return a;
    };
    BingMapsTileSource.prototype.y = function (a, b, c) {
        var d = new StringBuilder(0);
        var _loop_1 = function (e) {
            var f = '0';
            var g = 1 << (e - 1);
            if ((b & g) != 0) {
                ((function () { var $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
            }
            if ((c & g) != 0) {
                ((function () { var $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
                ((function () { var $value = f; f = String.fromCharCode($value.charCodeAt(0) + 1); return $value; })());
            }
            d.h(f);
        };
        for (var e = a; e > 0; --e) {
            _loop_1(e);
        }
        return d.toString();
    };
    BingMapsTileSource.aa = function (a, b) {
        var c = a;
        if ((b.f == BingMapsTileSource.subDomainsProperty) || (b.f == BingMapsTileSource.tilePathProperty) || (b.f == BingMapsTileSource.cultureNameProperty)) {
            if (b.f == BingMapsTileSource.subDomainsProperty) {
                var d = typeCast(ObservableCollection$1.$.specialize(String_$type), b.oldValue);
                var e = typeCast(ObservableCollection$1.$.specialize(String_$type), b.newValue);
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
    };
    BingMapsTileSource.$t = markType(BingMapsTileSource, 'BingMapsTileSource', MapTileSource.$);
    BingMapsTileSource.tilePathProperty = DependencyProperty.i("TilePath", String_$type, BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
    BingMapsTileSource.subDomainsProperty = DependencyProperty.i("SubDomains", ObservableCollection$1.$.specialize(String_$type), BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
    BingMapsTileSource.cultureNameProperty = DependencyProperty.i("CultureName", String_$type, BingMapsTileSource.$, new PropertyMetadata(2, null, BingMapsTileSource.aa));
    return BingMapsTileSource;
}(MapTileSource));
export { BingMapsTileSource };
//# sourceMappingURL=BingMapsTileSource.js.map
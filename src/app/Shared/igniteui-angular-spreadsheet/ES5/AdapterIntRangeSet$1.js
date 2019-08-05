/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { LazyReadOnlyNotifyCollection$1 } from "./LazyReadOnlyNotifyCollection$1";
import { IntRange } from "./IntRange";
import { Base, typeCast, runOn, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var AdapterIntRangeSet$1 = /** @class */ (function (_super) {
    tslib_1.__extends(AdapterIntRangeSet$1, _super);
    function AdapterIntRangeSet$1($tSource, a, b, c, d) {
        var _this = _super.call(this, IntRange.$) || this;
        _this.$tSource = null;
        _this._p = null;
        _this._s = null;
        _this._r = null;
        _this._q = null;
        _this.$tSource = $tSource;
        _this.$type = _this.$type.specialize(_this.$tSource);
        CoreUtilities.z(a, "source");
        CoreUtilities.z(b, "getRange");
        var e = typeCast(INotifyCollectionChanged_$type, a);
        if (e != null) {
            e.collectionChanged = delegateCombine(e.collectionChanged, runOn(_this, _this._u));
        }
        _this._p = a;
        _this._s = b;
        _this._r = c;
        if (d == null) {
            _this._q = function (f, g) { return Base.compareSimple(g, f) <= 0; };
        }
        else {
            _this._q = d;
        }
        return _this;
    }
    AdapterIntRangeSet$1.prototype._o = function (a) {
        a.clear();
        var b = this._p.count;
        if (b == 1) {
            var c = this._p.item(0);
            if (this._r == null || this._r(c)) {
                a.add(this._s(c));
            }
        }
        else if (b > 1) {
            var d = new List$1(IntRange.$, 2, b);
            for (var e = 0; e < b; e++) {
                var f = this._p.item(e);
                if (this._r == null || this._r(f)) {
                    d.add(this._s(f));
                }
            }
            b = d.count;
            if (b > 0) {
                var g = function (h, i) {
                    var j = Base.compareSimple(h._i, i._i);
                    if (j == 0) {
                        j = Base.compareSimple(h._h, i._h);
                    }
                    return j;
                };
                d.z(IntRange._g);
                var h = d._inner[0]._i;
                var i = d._inner[0]._h;
                for (var j = 1; j < b; j++) {
                    if (!this._q(i, d._inner[j]._i)) {
                        a.add(new IntRange(1, h, i));
                        h = d._inner[j]._i;
                        i = d._inner[j]._h;
                    }
                    else if (Base.compareSimple(i, d._inner[j]._h) < 0) {
                        i = d._inner[j]._h;
                    }
                }
                a.add(new IntRange(1, h, i));
            }
        }
    };
    AdapterIntRangeSet$1.prototype._t = function () {
        this._h();
    };
    AdapterIntRangeSet$1.prototype._u = function (a, b) {
        this._h();
    };
    AdapterIntRangeSet$1.$t = markType(AdapterIntRangeSet$1, 'AdapterIntRangeSet$1', LazyReadOnlyNotifyCollection$1.$.specialize(IntRange.$));
    return AdapterIntRangeSet$1;
}(LazyReadOnlyNotifyCollection$1));
export { AdapterIntRangeSet$1 };
//# sourceMappingURL=AdapterIntRangeSet$1.js.map

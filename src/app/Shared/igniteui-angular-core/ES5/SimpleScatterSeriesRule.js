/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, EnumUtil, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { List$1 } from "./List$1";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
/**
 * @hidden
 */
var SimpleScatterSeriesRule = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleScatterSeriesRule, _super);
    function SimpleScatterSeriesRule() {
        var _this = _super.call(this) || this;
        _this._priority = 0;
        _this._monotonicCheckAmount = 0;
        _this.priority = 9;
        _this.monotonicCheckAmount = 10000;
        return _this;
    }
    Object.defineProperty(SimpleScatterSeriesRule.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (a) {
            this._priority = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleScatterSeriesRule.prototype, "monotonicCheckAmount", {
        get: function () {
            return this._monotonicCheckAmount;
        },
        set: function (a) {
            this._monotonicCheckAmount = a;
        },
        enumerable: true,
        configurable: true
    });
    SimpleScatterSeriesRule.prototype.evaluate = function (a) {
        var b = a.analyzer.getAllNumericProperties();
        if (b.length == 0) {
            return;
        }
        var c = a.getCurrentDataSource().actualCount;
        var d = new List$1(String_$type, 0);
        for (var e = 0; e < b.length; e++) {
            d.add(b[e]);
        }
        var f = this.c(d);
        var g = this.d(d);
        var h = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (1)));
        var i = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (2)));
        if (h.length > 0 && i.length > 0 && h.length == i.length) {
            f.clear();
            g.clear();
            d.clear();
            for (var j = 0; j < h.length; j++) {
                f.add(h[j]);
                g.add(i[j]);
            }
        }
        var k = 0;
        for (k = 0; k < Math.min(f.count, g.count); k++) {
            var l = new Array(2);
            l[0] = f._inner[k];
            l[1] = g._inner[k];
            var m = a.analyzer.getTitleString(null, l);
            this.f(a, f._inner[k], g._inner[k], m);
        }
        for (; k < f.count; k++) {
            d.add(f._inner[k]);
        }
        for (; k < g.count; k++) {
            d.add(g._inner[k]);
        }
        for (var n = 0; n < d.count; n += 2) {
            if (n + 1 >= d.count) {
                continue;
            }
            var o = new Array(2);
            o[0] = d._inner[n];
            o[1] = d._inner[n + 1];
            var p = a.analyzer.getTitleString(null, o);
            this.f(a, d._inner[n], d._inner[n + 1], p);
        }
    };
    SimpleScatterSeriesRule.prototype.d = function (a) {
        var b = new List$1(String_$type, 0);
        for (var c = 0; c < a.count; c++) {
            if (this.b(a._inner[c])) {
                b.add(a._inner[c]);
                a.removeAt(c);
                c--;
            }
        }
        return b;
    };
    SimpleScatterSeriesRule.prototype.b = function (a) {
        if (Base.equalsStatic(a.toLowerCase(), "y") || Base.equalsStatic(a.toLowerCase(), "yvalue")) {
            return true;
        }
        return false;
    };
    SimpleScatterSeriesRule.prototype.c = function (a) {
        var b = new List$1(String_$type, 0);
        for (var c = 0; c < a.count; c++) {
            if (this.a(a._inner[c])) {
                b.add(a._inner[c]);
                a.removeAt(c);
                c--;
            }
        }
        return b;
    };
    SimpleScatterSeriesRule.prototype.a = function (a) {
        if (Base.equalsStatic(a.toLowerCase(), "x") || Base.equalsStatic(a.toLowerCase(), "xvalue")) {
            return true;
        }
        return false;
    };
    SimpleScatterSeriesRule.prototype.f = function (a, b, c, d) {
        var e = new DataSeries();
        e.name = b + "_" + c;
        if (d != null) {
            e.title = d;
        }
        else {
            e.title = b + " - " + c;
            e.title = a.analyzer.expandCamelCasedWords(e.title);
        }
        var f = new DataSeriesMemberPathHint();
        f.intent = 1;
        f.path = b;
        var g = new DataSeriesMemberPathHint();
        g.intent = 2;
        g.path = c;
        e.addMemberPathHint(f);
        e.addMemberPathHint(g);
        var h = a.getCurrentDataSource();
        var i = h.actualCount;
        if (i > this.monotonicCheckAmount) {
            e.suggestedSeries = 11;
        }
        else {
            if (a.analyzer.isMonotonic(h, b, this.monotonicCheckAmount)) {
                e.suggestedSeries = 12;
            }
            else {
                e.suggestedSeries = 11;
            }
        }
        e.suggestedPrimaryAxis = 1;
        e.suggestedSecondaryAxis = 1;
        a.addDataSeries(e, this);
    };
    SimpleScatterSeriesRule.$t = markType(SimpleScatterSeriesRule, 'SimpleScatterSeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
    return SimpleScatterSeriesRule;
}(Base));
export { SimpleScatterSeriesRule };
//# sourceMappingURL=SimpleScatterSeriesRule.js.map
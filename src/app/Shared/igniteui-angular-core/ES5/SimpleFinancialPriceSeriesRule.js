/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, EnumUtil, String_$type, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { List$1 } from "./List$1";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { truncate } from "./number";
import { stringJoin } from "./string";
/**
 * @hidden
 */
var SimpleFinancialPriceSeriesRule = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleFinancialPriceSeriesRule, _super);
    function SimpleFinancialPriceSeriesRule() {
        var _this = _super.call(this) || this;
        _this._priority = 0;
        _this._distinctCheckThreshold = 0;
        _this.priority = 10;
        _this.distinctCheckThreshold = 50000;
        return _this;
    }
    Object.defineProperty(SimpleFinancialPriceSeriesRule.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (a) {
            this._priority = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFinancialPriceSeriesRule.prototype, "distinctCheckThreshold", {
        get: function () {
            return this._distinctCheckThreshold;
        },
        set: function (a) {
            this._distinctCheckThreshold = a;
        },
        enumerable: true,
        configurable: true
    });
    SimpleFinancialPriceSeriesRule.prototype.e = function (a, b) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (a.contains(c)) {
                    a.remove(c);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SimpleFinancialPriceSeriesRule.d = function (a, b) {
        var c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (17)));
        if (c.length > 0) {
            return c[0];
        }
        return ((function (d) { return d != null ? d : a.analyzer.getFirstDateTimeProperty(); })(a.analyzer.getFirstDistinctDateTimeProperty(b)));
    };
    SimpleFinancialPriceSeriesRule.b = function (a, b) {
        var c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (17)));
        if (c.length > 0) {
            return c[0];
        }
        c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (16)));
        if (c.length > 0) {
            return c[0];
        }
        return ((function (d) { return d != null ? d : ((function (e) { return e != null ? e : ((function (f) { return f != null ? f : a.analyzer.getFirstStringProperty(); })(a.analyzer.getFirstDistinctMonotonicNumericProperty(b))); })(a.analyzer.getFirstDistinctStringProperty(b))); })(a.analyzer.getFirstDistinctDateTimeProperty(b)));
    };
    SimpleFinancialPriceSeriesRule.prototype.evaluate = function (a) {
        var e_2, _a;
        var b = SimpleFinancialPriceSeriesRule.d(a, this.distinctCheckThreshold);
        var c = SimpleFinancialPriceSeriesRule.b(a, this.distinctCheckThreshold);
        var d = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (11))));
        var e = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (12))));
        var f = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (13))));
        var g = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (14))));
        var h = new List$1(String_$type, 1, a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (15))));
        var i = Math.min(d.count, Math.min(e.count, Math.min(f.count, g.count)));
        if (i == 0) {
            var j = new List$1(String_$type, 1, a.analyzer.getAllNumericProperties());
            try {
                for (var _b = tslib_1.__values(fromEnum(j)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var k = _c.value;
                    if (Base.equalsStatic(k.toLowerCase(), "open")) {
                        d.add(k);
                        continue;
                    }
                    if (Base.equalsStatic(k.toLowerCase(), "high")) {
                        e.add(k);
                        continue;
                    }
                    if (Base.equalsStatic(k.toLowerCase(), "low")) {
                        f.add(k);
                        continue;
                    }
                    if (Base.equalsStatic(k.toLowerCase(), "close")) {
                        g.add(k);
                        continue;
                    }
                    if (Base.equalsStatic(k.toLowerCase(), "volume")) {
                        h.add(k);
                        continue;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.e(j, d);
            this.e(j, e);
            this.e(j, f);
            this.e(j, g);
            this.e(j, h);
            var l = d.count + e.count + f.count + g.count + j.count;
            if (l == 0) {
                return;
            }
            i = l <= 4 ? 1 : truncate(Math.floor(l / 5));
            var m = [d, e, f, g, h];
            var n = 0;
            while (j.count > 0) {
                m[n++ % m.length].add(j._inner[0]);
                j.removeAt(0);
            }
        }
        var o = this.c(a.getCurrentDataSource());
        var _loop_1 = function (p) {
            a.pushParentTitle(i == 1 ? o : o + (p + 1));
            var q = d.count > p ? d._inner[p] : null;
            var r = e.count > p ? e._inner[p] : null;
            var s = f.count > p ? f._inner[p] : null;
            var t = g.count > p ? g._inner[p] : null;
            var u = ((function () {
                var $ret = new DataSeries();
                $ret.name = stringJoin("_", q, r, s, t);
                $ret.title = a.analyzer.getTitleString(null, [q, r, s, t]);
                $ret.suggestedSeries = 20;
                $ret.suggestedPrimaryAxis = 0;
                $ret.suggestedSecondaryAxis = 1;
                return $ret;
            })());
            u.addMemberPathHint(((function () {
                var $ret = new DataSeriesMemberPathHint();
                $ret.intent = 11;
                $ret.path = q;
                return $ret;
            })()));
            u.addMemberPathHint(((function () {
                var $ret = new DataSeriesMemberPathHint();
                $ret.intent = 12;
                $ret.path = r;
                return $ret;
            })()));
            u.addMemberPathHint(((function () {
                var $ret = new DataSeriesMemberPathHint();
                $ret.intent = 13;
                $ret.path = s;
                return $ret;
            })()));
            u.addMemberPathHint(((function () {
                var $ret = new DataSeriesMemberPathHint();
                $ret.intent = 14;
                $ret.path = t;
                return $ret;
            })()));
            if (h.count > p) {
                u.addMemberPathHint(((function () {
                    var $ret = new DataSeriesMemberPathHint();
                    $ret.intent = 15;
                    $ret.path = h._inner[p];
                    return $ret;
                })()));
            }
            if (b != null) {
                u.addMemberPathHint(((function () {
                    var $ret = new DataSeriesMemberPathHint();
                    $ret.intent = 17;
                    $ret.path = b;
                    return $ret;
                })()));
            }
            u.addMemberPathHint(((function () {
                var $ret = new DataSeriesMemberPathHint();
                $ret.intent = 16;
                $ret.path = c;
                return $ret;
            })()));
            a.addDataSeries(u, this_1);
            a.popParentTitle();
        };
        var this_1 = this;
        for (var p = 0; p < i; p++) {
            _loop_1(p);
        }
    };
    SimpleFinancialPriceSeriesRule.prototype.c = function (a) {
        var b = a == null ? null : a.dataSource;
        if (b == null) {
            return null;
        }
        var c = (typeof b.title === 'function');
        return c ? (b.title()) : (b.title) ? (b.title) : null;
    };
    SimpleFinancialPriceSeriesRule.$t = markType(SimpleFinancialPriceSeriesRule, 'SimpleFinancialPriceSeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
    return SimpleFinancialPriceSeriesRule;
}(Base));
export { SimpleFinancialPriceSeriesRule };
//# sourceMappingURL=SimpleFinancialPriceSeriesRule.js.map
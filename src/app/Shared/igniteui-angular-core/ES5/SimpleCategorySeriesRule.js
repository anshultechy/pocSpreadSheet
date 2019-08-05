/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, EnumUtil, markType } from "./type";
import { IDataSeriesAdapterRule_$type } from "./IDataSeriesAdapterRule";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { DataSeries } from "./DataSeries";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
/**
 * @hidden
 */
var SimpleCategorySeriesRule = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleCategorySeriesRule, _super);
    function SimpleCategorySeriesRule() {
        var _this = _super.call(this) || this;
        _this._priority = 0;
        _this._useColumnThreshold = 0;
        _this._distinctCheckThreshold = 0;
        _this.priority = 10;
        _this.distinctCheckThreshold = 50000;
        _this.useColumnThreshold = 30;
        return _this;
    }
    Object.defineProperty(SimpleCategorySeriesRule.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (a) {
            this._priority = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleCategorySeriesRule.prototype, "useColumnThreshold", {
        get: function () {
            return this._useColumnThreshold;
        },
        set: function (a) {
            this._useColumnThreshold = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleCategorySeriesRule.prototype, "distinctCheckThreshold", {
        get: function () {
            return this._distinctCheckThreshold;
        },
        set: function (a) {
            this._distinctCheckThreshold = a;
        },
        enumerable: true,
        configurable: true
    });
    SimpleCategorySeriesRule.c = function (a, b) {
        var c = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (16)));
        if (c.length > 0) {
            return c[0];
        }
        return ((function (d) { return d != null ? d : ((function (e) { return e != null ? e : ((function (f) { return f != null ? f : a.analyzer.getFirstStringProperty(); })(a.analyzer.getFirstDistinctMonotonicNumericProperty(b))); })(a.analyzer.getFirstDistinctDateTimeProperty(b))); })(a.analyzer.getFirstDistinctStringProperty(b)));
    };
    SimpleCategorySeriesRule.prototype.evaluate = function (a) {
        var b = SimpleCategorySeriesRule.c(a, this.distinctCheckThreshold);
        var c = null;
        var d = a.analyzer.getAllPropertiesWithIntent(EnumUtil.getName(DataSeriesIntent_$type, (0)));
        if (d.length > 0) {
            c = d;
        }
        if (c == null) {
            c = a.analyzer.getAllNumericProperties();
        }
        if (c == null || c.length == 0) {
            return;
        }
        var e = a.getCurrentDataSource().actualCount;
        for (var f = 0; f < c.length; f++) {
            if (c[f] == b && c.length > 1) {
                continue;
            }
            var g = new Array(1);
            g[0] = c[f];
            var h = a.analyzer.getTitleString(null, g);
            var i = new DataSeries();
            var j = new DataSeriesMemberPathHint();
            j.intent = 0;
            j.path = c[f];
            var k = new DataSeriesMemberPathHint();
            k.intent = 16;
            k.path = b;
            i.addMemberPathHint(j);
            i.addMemberPathHint(k);
            if (e > this.useColumnThreshold) {
                i.suggestedSeries = 0;
            }
            else {
                i.suggestedSeries = 1;
            }
            this.d(i, a);
            i.suggestedPrimaryAxis = 0;
            i.suggestedSecondaryAxis = 1;
            i.name = c[f];
            if (h != null) {
                i.title = h;
            }
            else {
                i.title = c[f];
                i.title = a.analyzer.expandCamelCasedWords(i.title);
            }
            a.addDataSeries(i, this);
        }
    };
    SimpleCategorySeriesRule.prototype.d = function (a, b) {
        if (!b.hasValidType(a)) {
            a.suggestedSeries = 0;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 1;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 2;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 6;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 7;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 4;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 5;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 10;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 8;
            if (b.hasValidType(a)) {
                return;
            }
            a.suggestedSeries = 0;
        }
    };
    SimpleCategorySeriesRule.$t = markType(SimpleCategorySeriesRule, 'SimpleCategorySeriesRule', Base.$, [IDataSeriesAdapterRule_$type]);
    return SimpleCategorySeriesRule;
}(Base));
export { SimpleCategorySeriesRule };
//# sourceMappingURL=SimpleCategorySeriesRule.js.map
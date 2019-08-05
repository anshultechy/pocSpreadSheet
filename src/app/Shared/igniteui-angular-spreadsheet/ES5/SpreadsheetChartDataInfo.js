/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { Worksheet, MutableWorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var SpreadsheetChartDataInfo = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartDataInfo, _super);
    function SpreadsheetChartDataInfo(a) {
        var _this = _super.call(this) || this;
        _this.c = false;
        _this.b = null;
        _this.g = null;
        _this.h = null;
        _this.b = a;
        _this.g = new Dictionary$2(Worksheet.$, MutableWorksheetRegionAddress.$, 0);
        _this.h = new List$1(MutableWorksheetRegionAddress.$, 0);
        return _this;
    }
    Object.defineProperty(SpreadsheetChartDataInfo.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartDataInfo.prototype, "e", {
        get: function () {
            return this.c || this.g.count > 0;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartDataInfo.prototype.i = function () {
        var e_1, _a;
        if (this.g.count > 0) {
            this.g.clear();
            try {
                for (var _b = tslib_1.__values(fromEnum(this.h)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var a = _c.value;
                    if (a != null && !a.b) {
                        a.n();
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
        }
    };
    SpreadsheetChartDataInfo.prototype.j = function () {
        this.c = false;
        this.i();
    };
    SpreadsheetChartDataInfo.prototype.k = function (a, b, c) {
        if (!this.c) {
            var d = this.a(a);
            d.q(b, c);
        }
    };
    SpreadsheetChartDataInfo.prototype.l = function () {
        this.c = true;
        this.i();
    };
    SpreadsheetChartDataInfo.prototype.m = function (a, b) {
        if (!this.c) {
            var c = this.a(a);
            c.p(b.getRegionAddress());
        }
    };
    SpreadsheetChartDataInfo.prototype.a = function (a) {
        var b = a.index;
        if (b > this.h.count - 1) {
            this.n();
        }
        var c = this.h._inner[b];
        if (c.b) {
            this.g.item(a, c);
        }
        return c;
    };
    SpreadsheetChartDataInfo.prototype.f = function (a) {
        var e_2, _a;
        if (this.c) {
            return true;
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(this.g)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (a.isReferencingAnythingInRegion(b.key, b.value.a())) {
                    return true;
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
        return false;
    };
    SpreadsheetChartDataInfo.prototype.n = function () {
        var a = this.b._worksheets$i.count;
        for (var b = this.h.count; b < a; b++) {
            this.h.add(new MutableWorksheetRegionAddress());
        }
    };
    SpreadsheetChartDataInfo.$t = markType(SpreadsheetChartDataInfo, 'SpreadsheetChartDataInfo');
    return SpreadsheetChartDataInfo;
}(Base));
export { SpreadsheetChartDataInfo };
//# sourceMappingURL=SpreadsheetChartDataInfo.js.map

/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, EnumUtil, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { AxisInfo } from "./AxisInfo";
import { StraightNumericAxisBaseDescription } from "../../igniteui-angular-core/ES5/StraightNumericAxisBaseDescription";
import { SpreadsheetChartAdapterHelpers } from "./SpreadsheetChartAdapterHelpers";
import { AxisDescription } from "../../igniteui-angular-core/ES5/AxisDescription";
import { AxisLabelsLocation_$type } from "igniteui-angular-charts/ES5/AxisLabelsLocation";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
/**
 * @hidden
 */
var AxisInfos = /** @class */ (function (_super) {
    tslib_1.__extends(AxisInfos, _super);
    function AxisInfos() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.c = null;
        _this.d = null;
        _this.i = 0;
        _this.h = 0;
        _this.k = 0;
        _this.j = 0;
        _this.e = new List$1(AxisInfo.$, 0);
        _this.c = new List$1(AxisInfo.$, 0);
        _this.d = new List$1(AxisInfo.$, 0);
        return _this;
    }
    Object.defineProperty(AxisInfos.prototype, "f", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisInfos.prototype, "g", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisInfos.prototype, "b", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    AxisInfos.prototype.l = function (a) {
        this.e.add(a);
        if (a.g) {
            if (a.d) {
                this.h++;
            }
            else {
                this.i++;
            }
        }
        else {
            if (a.d) {
                this.j++;
            }
            else {
                this.k++;
            }
        }
        if (typeCast(StraightNumericAxisBaseDescription.$, a.a) !== null && a.b.minimumScaleIsAuto && a.b.maximumScaleIsAuto) {
            if (a.j) {
                this.f.add(a);
            }
            else if (a.k) {
                this.g.add(a);
            }
        }
    };
    AxisInfos.prototype.m = function (a, b) {
        for (var c = 0; c < this.e.count; c++) {
            var d = this.e._inner[c];
            if ((a && d.g) || (a == false && d.h)) {
                if (d.d) {
                    if (false == d.c) {
                        this.e._inner[c] = (SpreadsheetChartAdapterHelpers.f(d.b, b));
                        this.e._inner[c].a.isDisabled = false;
                    }
                }
                else if (d.i) {
                    if (false == d.f) {
                        this.e._inner[c] = (SpreadsheetChartAdapterHelpers.h(d.b, b));
                        this.e._inner[c].a.isDisabled = false;
                    }
                }
            }
        }
    };
    AxisInfos.prototype.n = function (a, b) {
        if (a) {
            if (this.i > 1) {
                return;
            }
            for (var c = 0; c < this.e.count; c++) {
                var d = this.e._inner[c];
                if (d.g && d.d) {
                    this.e._inner[c] = (SpreadsheetChartAdapterHelpers.i(d.b, b));
                    this.e._inner[c].a.labelLocation = EnumUtil.getName(AxisLabelsLocation_$type, (0));
                    this.e._inner[c].a.isDisabled = false;
                    break;
                }
            }
        }
        else {
            if (this.k > 1) {
                return;
            }
            for (var e = 0; e < this.e.count; e++) {
                var f = this.e._inner[e];
                if (f.h && f.d) {
                    this.e._inner[e] = SpreadsheetChartAdapterHelpers.i(f.b, b);
                    this.e._inner[e].a.labelLocation = EnumUtil.getName(AxisLabelsLocation_$type, (0));
                    this.e._inner[e].a.isDisabled = false;
                    break;
                }
            }
        }
    };
    AxisInfos.prototype.a = function () {
        var e_1, _a;
        var a = new List$1(AxisDescription.$, 0);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                a.add(b.a);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Enumerable.a(AxisDescription.$, a);
    };
    AxisInfos.$t = markType(AxisInfos, 'AxisInfos');
    return AxisInfos;
}(Base));
export { AxisInfos };
//# sourceMappingURL=AxisInfos.js.map

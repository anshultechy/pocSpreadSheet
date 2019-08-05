/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Delegate_$type, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { MDList$1 } from "./MDList$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
import { intDivide } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var ExcelWorkbookSerializationProvider_CellRangeTargetInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelWorkbookSerializationProvider_CellRangeTargetInfo, _super);
    function ExcelWorkbookSerializationProvider_CellRangeTargetInfo(a, b, c) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.d = null;
        _this.a = null;
        _this.b = null;
        _this.c = null;
        _this.e = a;
        _this.d = c;
        _this.c = b;
        _this.a = new Array(b.length);
        _this.b = new Array(_this.a.length);
        return _this;
    }
    ExcelWorkbookSerializationProvider_CellRangeTargetInfo.prototype.i = function (a, b, c, d, e) {
        if (this.a[a] == null) {
            var f = intDivide(this.c[a]._af, this.d.l);
            var g = intDivide(this.c[a]._ad, this.d.k);
            this.a[a] = new MDList$1(Dictionary$2.$.specialize(String_$type, String_$type), g, f);
            this.b[a] = new MDList$1(Delegate_$type, g, f);
        }
        var h = this.a[a];
        var i = h.item(b, c);
        if (i == null) {
            h.item(b, c, i = new Dictionary$2(String_$type, String_$type, 0));
            this.b[a].item(b, c, function (j) {
                var k;
                return ((function () { var l = i.tryGetValue(j, k); k = l.p1; return l.ret; })()) ? k : null;
            });
        }
        i.item(d.name, e);
    };
    ExcelWorkbookSerializationProvider_CellRangeTargetInfo.prototype.f = function () {
        var e_1, _a;
        var a = new HashSet$1(String_$type, 0);
        for (var b = 0; b < this.a.length; b++) {
            var c = this.a[b];
            if (c != null) {
                for (var d = 0; d < c.i; d++) {
                    if (c.d(d)) {
                        for (var e = 0; e < c.h; e++) {
                            var f = c.item(d, e);
                            if (f != null) {
                                try {
                                    for (var _b = tslib_1.__values(fromEnum(f)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var g = _c.value;
                                        a.add_1(g.value);
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
                        }
                    }
                }
            }
        }
        return a;
    };
    ExcelWorkbookSerializationProvider_CellRangeTargetInfo.prototype.h = function (a, b, c) {
        var d = this.b[a];
        return d != null ? d.item(b, c) : null;
    };
    ExcelWorkbookSerializationProvider_CellRangeTargetInfo.prototype.g = function (a, b, c) {
        var d = this.a[a];
        var e = d != null ? d.item(b, c) : null;
        return e != null ? e.values : null;
    };
    ExcelWorkbookSerializationProvider_CellRangeTargetInfo.$t = markType(ExcelWorkbookSerializationProvider_CellRangeTargetInfo, 'ExcelWorkbookSerializationProvider_CellRangeTargetInfo');
    return ExcelWorkbookSerializationProvider_CellRangeTargetInfo;
}(Base));
export { ExcelWorkbookSerializationProvider_CellRangeTargetInfo };
//# sourceMappingURL=ExcelWorkbookSerializationProvider_CellRangeTargetInfo.js.map

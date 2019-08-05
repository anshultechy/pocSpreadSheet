/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, Number_$type, fromEnum, toEnum, markType, getEnumerator } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetCellRange } from "./SpreadsheetCellRange";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator } from "./ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator";
import { ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator } from "./ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator";
import { ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator } from "./ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator";
import { boxArray$1 } from "../../igniteui-angular-core/ES5/array";
import { nullableEquals, nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
import { intDivide } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var ExcelWorkbookSerializationProvider_TargetColumnIndexHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelWorkbookSerializationProvider_TargetColumnIndexHelper, _super);
    function ExcelWorkbookSerializationProvider_TargetColumnIndexHelper(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.c = new SpreadsheetCellRange();
        _this.b = null;
        _this.a = null;
        _this.d = false;
        _this.e = false;
        _this.c = a;
        _this.b = b;
        _this.d = c;
        _this.e = d;
        _this.a = [new IntRange(1, a.firstColumn, a.lastColumn)];
        return _this;
    }
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype.i = function (a) {
        var b = a.worksheet._tables$i;
        var c = new List$1(IntRange.$, 0);
        var d = a.index;
        for (var e = 0; e < b.count; e++) {
            var f = b._item(e)._by;
            if (f._ac <= d && f._ae >= d) {
                c.add(new IntRange(1, f._w, f._x));
            }
        }
        if (c.count > 1) {
            c.z(IntRange._f);
        }
        return c;
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype.h = function () {
        return boxArray$1(this.a);
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype._f = function (a, b) {
        var e_1, _a, c, d, _b, _d, e, e_1_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    c = Nullable$1.toNullable(Number_$type, null);
                    d = 0;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 8, 9, 10]);
                    _b = tslib_1.__values(fromEnum(this.g(a, b))), _d = _b.next();
                    _e.label = 2;
                case 2:
                    if (!!_d.done) return [3 /*break*/, 7];
                    e = _d.value;
                    if (!nullableEquals(c, null)) return [3 /*break*/, 3];
                    c = Nullable$1.toNullable(Number_$type, d = e);
                    return [3 /*break*/, 6];
                case 3:
                    if (!(e == d + 1)) return [3 /*break*/, 4];
                    d = e;
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, new IntRange(1, c.value, d)];
                case 5:
                    _e.sent();
                    c = Nullable$1.toNullable(Number_$type, d = e);
                    _e.label = 6;
                case 6:
                    _d = _b.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_d && !_d.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10:
                    if (!nullableNotEquals(c, null)) return [3 /*break*/, 12];
                    return [4 /*yield*/, new IntRange(1, c.value, d)];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype.f = function (a, b) {
        var _this = this;
        return toEnum(function () { return _this._f(a, b); });
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype._g = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = -1;
                    d = intDivide(this.c._ad, this.b.l);
                    e = new ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator(a, this.b, this.c.firstColumn, d);
                    if (!e.moveNext()) {
                        e = null;
                    }
                    f = getEnumerator(b._ch(this.c.firstColumn, this.c.lastColumn));
                    if (!f.moveNext()) {
                        f = null;
                    }
                    g = null;
                    h = null;
                    if (this.d) {
                        {
                            g = new ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator(b.worksheet, 1);
                            if (!g.moveNext()) {
                                g = null;
                            }
                        }
                        {
                            h = new ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator(a.worksheet, d);
                            if (!h.moveNext()) {
                                h = null;
                            }
                        }
                    }
                    i = null;
                    if (this.e) {
                        i = new ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator(this.i(a), this.b.l, d);
                        if (!i.moveNext()) {
                            i = null;
                        }
                    }
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    j = 0x7FFFFFFF;
                    while (e != null) {
                        if (e.current > c) {
                            j = e.current;
                            break;
                        }
                        if (!e.moveNext()) {
                            e = null;
                        }
                    }
                    while (f != null) {
                        if (f.current.r > c) {
                            if (f.current.r < j) {
                                j = f.current.r;
                            }
                            break;
                        }
                        k = f.current;
                        if (!f.moveNext()) {
                            f = null;
                        }
                        k.u();
                    }
                    if (this.d) {
                        l = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, g, j);
                        g = l.p1;
                        j = l.p2;
                        m = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, h, j);
                        h = m.p1;
                        j = m.p2;
                    }
                    if (i != null) {
                        n = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, i, j);
                        i = n.p1;
                        j = n.p2;
                    }
                    if (j == 0x7FFFFFFF) {
                        return [3 /*break*/, 3];
                    }
                    return [4 /*yield*/, j];
                case 2:
                    _a.sent();
                    c = j;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.prototype.g = function (a, b) {
        var _this = this;
        return toEnum(function () { return _this._g(a, b); });
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j = function (a, b, c) {
        while (b != null) {
            if (b.current._c((a + 1))) {
                c = a + 1;
                break;
            }
            if (b.current._i > c) {
                break;
            }
            if (b.current._c(c)) {
                break;
            }
            if (b.current._i < c && b.current._h > a) {
                c = Math.max(a + 1, b.current._i);
                break;
            }
            if (!b.moveNext()) {
                b = null;
            }
        }
        return {
            p1: b,
            p2: c
        };
    };
    ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.$t = markType(ExcelWorkbookSerializationProvider_TargetColumnIndexHelper, 'ExcelWorkbookSerializationProvider_TargetColumnIndexHelper');
    return ExcelWorkbookSerializationProvider_TargetColumnIndexHelper;
}(Base));
export { ExcelWorkbookSerializationProvider_TargetColumnIndexHelper };
//# sourceMappingURL=ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.js.map

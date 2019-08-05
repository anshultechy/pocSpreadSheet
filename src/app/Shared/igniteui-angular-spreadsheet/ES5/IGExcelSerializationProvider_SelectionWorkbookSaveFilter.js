/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WorkbookSaveFilter, DefaultWorkbookSaveFilter, WorksheetRow } from "../../igniteui-angular-excel/ES5/excel.core";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { fromEnum, toEnum, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var IGExcelSerializationProvider_SelectionWorkbookSaveFilter = /** @class */ (function (_super) {
    tslib_1.__extends(IGExcelSerializationProvider_SelectionWorkbookSaveFilter, _super);
    function IGExcelSerializationProvider_SelectionWorkbookSaveFilter(a) {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.f = a;
        return _this;
    }
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.d = function (a) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.d(a);
        }
        var b = 0;
        var e = this.f.a.c;
        for (var d = 0; d < e.length; d++) {
            var c = e[d];
            b += Enumerable.aj(WorksheetRow.$, a._rows$i._m(c._i, c._h));
        }
        return b;
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.e = function (a) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.e(a);
        }
        return this.f.a.k;
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype._a = function (a) {
        var e_1, _b, _c, _d, b, e_1_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 5, 6, 7]);
                    _c = tslib_1.__values(fromEnum(a._mergedCellsRegions$i)), _d = _c.next();
                    _e.label = 1;
                case 1:
                    if (!!_d.done) return [3 /*break*/, 4];
                    b = _d.value;
                    if (!this.f.a.f(b._h)) return [3 /*break*/, 3];
                    return [4 /*yield*/, b];
                case 2:
                    _e.sent();
                    _e.label = 3;
                case 3:
                    _d = _c.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.a = function (a) {
        var _this = this;
        return toEnum(function () { return _this._a(a); });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.b = function (a, b) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.b(a, b);
        }
        if (b) {
            return this.i(a);
        }
        return this.h(a);
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.c = function (a) {
        return this.f.l;
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.k = function (a) {
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.l = function (a) {
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype._h = function (a) {
        var e_2, _b, b, c, f, e, d, g, _c, _d, h, e_2_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    b = a._rows$i;
                    c = -1;
                    f = this.f.a.c;
                    e = 0;
                    _e.label = 1;
                case 1:
                    if (!(e < f.length)) return [3 /*break*/, 11];
                    d = f[e];
                    g = IGExcelSerializationProvider_SelectionWorkbookSaveFilter.j(d._i, c, b);
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 7, 8, 9]);
                    _c = tslib_1.__values(fromEnum(b._m(g, d._h))), _d = _c.next();
                    _e.label = 3;
                case 3:
                    if (!!_d.done) return [3 /*break*/, 6];
                    h = _d.value;
                    return [4 /*yield*/, h];
                case 4:
                    _e.sent();
                    _e.label = 5;
                case 5:
                    _d = _c.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9:
                    c = d._h;
                    _e.label = 10;
                case 10:
                    e++;
                    return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.h = function (a) {
        var _this = this;
        return toEnum(function () { return _this._h(a); });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype._i = function (a) {
        var b, c, f, e, d, g, h, i;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    b = a._rows$i;
                    c = -1;
                    f = this.f.a.c;
                    e = 0;
                    _b.label = 1;
                case 1:
                    if (!(e < f.length)) return [3 /*break*/, 7];
                    d = f[e];
                    g = IGExcelSerializationProvider_SelectionWorkbookSaveFilter.j(d._i, c, b);
                    h = g, i = d._h;
                    _b.label = 2;
                case 2:
                    if (!(h <= i)) return [3 /*break*/, 5];
                    return [4 /*yield*/, b.item(h)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    h++;
                    return [3 /*break*/, 2];
                case 5:
                    c = d._h;
                    _b.label = 6;
                case 6:
                    e++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.i = function (a) {
        var _this = this;
        return toEnum(function () { return _this._i(a); });
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.j = function (a, b, c) {
        var e_3, _b;
        var d = a;
        if (d > b + 1) {
            var e = c._aj(d);
            if (e != null) {
                try {
                    for (var _c = tslib_1.__values(fromEnum(e._ch(void 0, void 0, true))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var f = _d.value;
                        if (f.o && f.p) {
                            var g = e._ar(f.r);
                            if (g._s == 1) {
                                var h = g;
                                d = Math.min(d, h.cellRange.firstRow);
                            }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            if (d < b + 1) {
                d = b + 1;
            }
        }
        return d;
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.prototype.g = function (a) {
        return this.f.e;
    };
    IGExcelSerializationProvider_SelectionWorkbookSaveFilter.$t = markType(IGExcelSerializationProvider_SelectionWorkbookSaveFilter, 'IGExcelSerializationProvider_SelectionWorkbookSaveFilter', WorkbookSaveFilter.$);
    return IGExcelSerializationProvider_SelectionWorkbookSaveFilter;
}(WorkbookSaveFilter));
export { IGExcelSerializationProvider_SelectionWorkbookSaveFilter };
//# sourceMappingURL=IGExcelSerializationProvider_SelectionWorkbookSaveFilter.js.map

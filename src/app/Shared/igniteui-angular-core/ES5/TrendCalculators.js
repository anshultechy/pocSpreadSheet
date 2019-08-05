/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, toEnum, markType, getEnumerator } from "./type";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var TrendCalculators = /** @class */ (function (_super) {
    tslib_1.__extends(TrendCalculators, _super);
    function TrendCalculators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendCalculators._g = function (a, b) {
        var e_1, _h, c, d, e, f, g, h, _j, _k, i, j, e_1_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    c = new Array(b);
                    d = 0;
                    for (d = 0; d < b; d++) {
                        c[d] = 0;
                    }
                    e = NaN;
                    f = NaN;
                    g = NaN;
                    h = NaN;
                    d = 0;
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    i = _k.value;
                    if (!isNaN_(i)) {
                        j = d % b;
                        if (d == 0) {
                            g = 1;
                            h = f = e = i;
                        }
                        else if (d < b) {
                            g += (d + 1);
                            e += i;
                            f += (d + 1) * i;
                            h = f / g;
                        }
                        else {
                            f = f + (b * i) - e;
                            h = f / g;
                            e = e + i - c[j];
                        }
                        c[j] = i;
                        ++d;
                    }
                    return [4 /*yield*/, h];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _l.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.g = function (a, b) {
        return toEnum(function () { return TrendCalculators._g(a, b); });
    };
    TrendCalculators._b = function (a, b) {
        var e_2, _h, c, d, e, _j, _k, f, e_2_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    c = 0;
                    d = NaN;
                    e = 2 / (1 + b);
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    f = _k.value;
                    if (!isNaN_(f)) {
                        if (c < b) {
                            d = isNaN_(d) ? f : (d * c + f) / (c + 1);
                        }
                        else {
                            d = (f - d) * e + d;
                        }
                        ++c;
                    }
                    return [4 /*yield*/, d];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _l.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.b = function (a, b) {
        return toEnum(function () { return TrendCalculators._b(a, b); });
    };
    TrendCalculators._c = function (a, b) {
        var e_3, _h, c, d, e, _j, _k, f, e_3_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    c = 0;
                    d = NaN;
                    e = 1 / b;
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    f = _k.value;
                    if (!isNaN_(f)) {
                        if (c < b) {
                            d = isNaN_(d) ? f : (d * c + f) / (c + 1);
                        }
                        else {
                            d = (f - d) * e + d;
                        }
                        ++c;
                    }
                    return [4 /*yield*/, d];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_3_1 = _l.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.c = function (a, b) {
        return toEnum(function () { return TrendCalculators._c(a, b); });
    };
    TrendCalculators._a = function (a) {
        var e_4, _h, b, c, _j, _k, d, e_4_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    b = NaN;
                    c = 0;
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    d = _k.value;
                    if (!isNaN_(d)) {
                        b = isNaN_(b) ? d : (b * c + d) / (c + 1);
                        ++c;
                    }
                    return [4 /*yield*/, b];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_4_1 = _l.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.a = function (a) {
        return toEnum(function () { return TrendCalculators._a(a); });
    };
    TrendCalculators._e = function (a, b) {
        var e_5, _h, c, d, e, _j, _k, f, g, h, e_5_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    c = new Array(b);
                    d = 0;
                    for (d = 0; d < b; d++) {
                        c[d] = 0;
                    }
                    d = 0;
                    e = NaN;
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    f = _k.value;
                    if (!isNaN_(f)) {
                        g = f / b;
                        h = d % b;
                        if (d < b) {
                            e = isNaN_(e) ? f : (e * d + f) / (d + 1);
                        }
                        else {
                            e = e + g - c[h];
                        }
                        c[h] = g;
                        ++d;
                    }
                    return [4 /*yield*/, e];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_5_1 = _l.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.e = function (a, b) {
        return toEnum(function () { return TrendCalculators._e(a, b); });
    };
    TrendCalculators._d = function (a, b) {
        var e_6, _h, c, d, e, _j, _k, f, g, h, e_6_1;
        return tslib_1.__generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    c = new Array(b);
                    d = 0;
                    for (d = 0; d < b; d++) {
                        c[d] = 0;
                    }
                    d = 0;
                    e = NaN;
                    _l.label = 1;
                case 1:
                    _l.trys.push([1, 6, 7, 8]);
                    _j = tslib_1.__values(fromEnum(a)), _k = _j.next();
                    _l.label = 2;
                case 2:
                    if (!!_k.done) return [3 /*break*/, 5];
                    f = _k.value;
                    if (!isNaN_(f)) {
                        g = f;
                        h = d % b;
                        if (d < b) {
                            e = isNaN_(e) ? g : e + g;
                        }
                        else {
                            e = e + g - c[h];
                        }
                        c[h] = g;
                        ++d;
                    }
                    return [4 /*yield*/, e];
                case 3:
                    _l.sent();
                    _l.label = 4;
                case 4:
                    _k = _j.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_6_1 = _l.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_k && !_k.done && (_h = _j.return)) _h.call(_j);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.d = function (a, b) {
        return toEnum(function () { return TrendCalculators._d(a, b); });
    };
    TrendCalculators._f = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l;
        return tslib_1.__generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    c = getEnumerator(TrendCalculators.e(a, b));
                    d = getEnumerator(a);
                    e = new Array(b);
                    f = 0;
                    for (f = 0; f < b; f++) {
                        e[f] = 0;
                    }
                    f = 0;
                    _h.label = 1;
                case 1:
                    if (!(d.moveNext() && c.moveNext())) return [3 /*break*/, 6];
                    e[(f++) % b] = d.current;
                    g = 0;
                    if (!(f < b)) return [3 /*break*/, 3];
                    h = 0;
                    for (i = 0; i < f; i++) {
                        j = (c.current - e[i]);
                        g += j * j;
                        h++;
                    }
                    return [4 /*yield*/, Math.sqrt(g / h)];
                case 2:
                    _h.sent();
                    return [3 /*break*/, 5];
                case 3:
                    for (k = 0; k < b; ++k) {
                        l = (c.current - e[k]);
                        g += l * l;
                    }
                    return [4 /*yield*/, Math.sqrt(g / b)];
                case 4:
                    _h.sent();
                    _h.label = 5;
                case 5: return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    };
    TrendCalculators.f = function (a, b) {
        return toEnum(function () { return TrendCalculators._f(a, b); });
    };
    TrendCalculators.$t = markType(TrendCalculators, 'TrendCalculators');
    return TrendCalculators;
}(Base));
export { TrendCalculators };
//# sourceMappingURL=TrendCalculators.js.map
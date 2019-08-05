/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, IList$1_$type, IComparable_$type, fromEnum, toEnum, typeCast, typeCastObjTo$t, fromEn, Type, getBoxIfEnum, Number_$type, markType, getEnumerator } from "./type";
import { SortedList$1 } from "./SortedList$1";
import { List$1 } from "./List$1";
import { ArgumentNullException } from "./ArgumentNullException";
import { Dictionary$2 } from "./Dictionary$2";
import { NotImplementedException } from "./NotImplementedException";
import { stringToString$1, stringCompareTo } from "./string";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
var Enumerable = /** @class */ (function (_super) {
    tslib_1.__extends(Enumerable, _super);
    function Enumerable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enumerable._u = function ($tSource, a, b) {
        var e_1, _a, _b, _c, c, e_1_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _b = tslib_1.__values(fromEnum(a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 4];
                    c = _c.value;
                    if (!b(c)) return [3 /*break*/, 3];
                    return [4 /*yield*/, c];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Enumerable.u = function ($tSource, a, b) {
        return toEnum(function () { return Enumerable._u($tSource, a, b); });
    };
    Enumerable._v = function ($tSource, a, b) {
        var e_2, _a, c, _b, _c, d, e_2_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    c = 0;
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 7, 8, 9]);
                    _b = tslib_1.__values(fromEnum(a)), _c = _b.next();
                    _d.label = 2;
                case 2:
                    if (!!_c.done) return [3 /*break*/, 6];
                    d = _c.value;
                    if (!b(d, c)) return [3 /*break*/, 4];
                    return [4 /*yield*/, d];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    c++;
                    _d.label = 5;
                case 5:
                    _c = _b.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    };
    Enumerable.v = function ($tSource, a, b) {
        return toEnum(function () { return Enumerable._v($tSource, a, b); });
    };
    Enumerable._o = function ($tSource, $tResult, a, b) {
        var e_3, _a, _b, _c, c, e_3_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _b = tslib_1.__values(fromEnum(a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 4];
                    c = _c.value;
                    return [4 /*yield*/, b(c)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Enumerable.o = function ($tSource, $tResult, a, b) {
        return toEnum(function () { return Enumerable._o($tSource, $tResult, a, b); });
    };
    Enumerable._p = function ($tSource, $tResult, a, b) {
        var e_4, _a, e_5, _b, _c, _d, c, _e, _f, d, e_5_1, e_4_1;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 11, 12, 13]);
                    _c = tslib_1.__values(fromEnum(a)), _d = _c.next();
                    _g.label = 1;
                case 1:
                    if (!!_d.done) return [3 /*break*/, 10];
                    c = _d.value;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 9]);
                    _e = tslib_1.__values(fromEnum(b(c))), _f = _e.next();
                    _g.label = 3;
                case 3:
                    if (!!_f.done) return [3 /*break*/, 6];
                    d = _f.value;
                    return [4 /*yield*/, d];
                case 4:
                    _g.sent();
                    _g.label = 5;
                case 5:
                    _f = _e.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_5_1 = _g.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _d = _c.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_4_1 = _g.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    Enumerable.p = function ($tSource, $tResult, a, b) {
        return toEnum(function () { return Enumerable._p($tSource, $tResult, a, b); });
    };
    Enumerable._l = function ($tResult, a) {
        var e_6, _a, _b, _c, b, e_6_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _b = tslib_1.__values(fromEn(a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 4];
                    b = _c.value;
                    if (!(typeCast($tResult, b) !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, typeCastObjTo$t($tResult, b)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_6_1 = _d.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Enumerable.l = function ($tResult, a) {
        return toEnum(function () { return Enumerable._l($tResult, a); });
    };
    Enumerable.ah = function ($tSource, a) {
        var e_7, _a;
        var b = typeCast(IList$1_$type.specialize($tSource), a);
        if (b != null) {
            return b.item(b.count - 1);
        }
        var c = Type.getDefaultValue($tSource);
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                c = d;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return c;
    };
    Enumerable.ad = function ($tSource, a) {
        var e_8, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                return b;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return Type.getDefaultValue($tSource);
    };
    Enumerable.ae = function ($tSource, a, b) {
        var e_9, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (b(c)) {
                    return c;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return Type.getDefaultValue($tSource);
    };
    Enumerable.af = function ($tSource, a) {
        var e_10, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                return b;
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return Type.getDefaultValue($tSource);
    };
    Enumerable.x = function ($tSource, $tKey, a, b) {
        var c = new SortedList$1($tSource, a);
        c.aa(function (d, e) {
            var f = d;
            var g = e;
            var h = b(f);
            var i = b(g);
            if (typeCast(IComparable_$type, h) !== null) {
                return CompareUtil.compareToObject((typeCast(IComparable_$type, h)), getBoxIfEnum($tKey, i));
            }
            else {
                return stringCompareTo(stringToString$1($tKey, h), stringToString$1($tKey, i));
            }
        });
        return c;
    };
    Enumerable.y = function ($tSource, $tKey, a, b) {
        var c = new SortedList$1($tSource, a);
        c.aa(function (d, e) {
            var f = e;
            var g = d;
            var h = b(f);
            var i = b(g);
            if (typeCast(IComparable_$type, h) !== null) {
                return CompareUtil.compareToObject((typeCast(IComparable_$type, h)), getBoxIfEnum($tKey, i));
            }
            else {
                return stringCompareTo(stringToString$1($tKey, h), stringToString$1($tKey, i));
            }
        });
        return c;
    };
    Enumerable.z = function ($tSource, a) {
        var b = new List$1($tSource, 1, a);
        return b;
    };
    Enumerable._m = function (a, b) {
        var c;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = a;
                    _a.label = 1;
                case 1:
                    if (!(c < b)) return [3 /*break*/, 4];
                    return [4 /*yield*/, c];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    c++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    Enumerable.m = function (a, b) {
        return toEnum(function () { return Enumerable._m(a, b); });
    };
    Enumerable._i = function ($tSource, a, b) {
        var e_11, _a, e_12, _b, _c, _d, c, e_11_1, _e, _f, d, e_12_1;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 5, 6, 7]);
                    _c = tslib_1.__values(fromEnum(a)), _d = _c.next();
                    _g.label = 1;
                case 1:
                    if (!!_d.done) return [3 /*break*/, 4];
                    c = _d.value;
                    return [4 /*yield*/, c];
                case 2:
                    _g.sent();
                    _g.label = 3;
                case 3:
                    _d = _c.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_11_1 = _g.sent();
                    e_11 = { error: e_11_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_11) throw e_11.error; }
                    return [7 /*endfinally*/];
                case 7:
                    _g.trys.push([7, 12, 13, 14]);
                    _e = tslib_1.__values(fromEnum(b)), _f = _e.next();
                    _g.label = 8;
                case 8:
                    if (!!_f.done) return [3 /*break*/, 11];
                    d = _f.value;
                    return [4 /*yield*/, d];
                case 9:
                    _g.sent();
                    _g.label = 10;
                case 10:
                    _f = _e.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_12_1 = _g.sent();
                    e_12 = { error: e_12_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_12) throw e_12.error; }
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    };
    Enumerable.i = function ($tSource, a, b) {
        return toEnum(function () { return Enumerable._i($tSource, a, b); });
    };
    Enumerable.ak = function (a) {
        var e_13, _a;
        var b = true;
        var c = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (b) {
                    b = false;
                    c = d;
                }
                else {
                    c = Math.max(c, d);
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return c;
    };
    Enumerable.al = function ($tSource, a, b) {
        return Enumerable.ak(Enumerable.o($tSource, Number_$type, a, b));
    };
    Enumerable.am = function (a) {
        var e_14, _a;
        var b = true;
        var c = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (b) {
                    b = false;
                    c = d;
                }
                else {
                    c = Math.min(c, d);
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return c;
    };
    Enumerable.an = function ($tSource, a, b) {
        return Enumerable.ak(Enumerable.o($tSource, Number_$type, a, b));
    };
    Enumerable.aj = function ($tSource, a) {
        var e_15, _a;
        var b = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b++;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return b;
    };
    Enumerable._n = function ($tSource, a) {
        var b, c;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    b = new List$1($tSource, 1, a);
                    c = b.count - 1;
                    _a.label = 1;
                case 1:
                    if (!(c >= 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, b._inner[c]];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    c--;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    Enumerable.n = function ($tSource, a) {
        return toEnum(function () { return Enumerable._n($tSource, a); });
    };
    Enumerable.h = function ($tResult, a) {
        var e_16, _a;
        if (a == null) {
            throw new ArgumentNullException(0, "source");
        }
        var b = typeCast(IEnumerable$1_$type.specialize($tResult), a);
        if (b != null) {
            return b;
        }
        var c = new List$1($tResult, 0);
        try {
            for (var _b = tslib_1.__values(fromEn(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (typeCast($tResult, d) !== null) {
                    c.add(typeCastObjTo$t($tResult, d));
                }
                else {
                    c.add(Type.getDefaultValue($tResult));
                }
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return c;
    };
    Enumerable._s = function ($tSource, a, b) {
        var e_17, _a, _b, _c, c, e_17_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 6, 7, 8]);
                    _b = tslib_1.__values(fromEnum(a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 5];
                    c = _c.value;
                    if (!(b > 0)) return [3 /*break*/, 3];
                    b--;
                    return [4 /*yield*/, c];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3: return [2 /*return*/, undefined];
                case 4:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_17_1 = _d.sent();
                    e_17 = { error: e_17_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_17) throw e_17.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    Enumerable.s = function ($tSource, a, b) {
        return toEnum(function () { return Enumerable._s($tSource, a, b); });
    };
    Enumerable._r = function ($tSource, a, b) {
        var e_18, _a, _b, _c, c, e_18_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 6, 7, 8]);
                    _b = tslib_1.__values(fromEnum(a)), _c = _b.next();
                    _d.label = 1;
                case 1:
                    if (!!_c.done) return [3 /*break*/, 5];
                    c = _c.value;
                    if (!(b <= 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, c];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    b--;
                    _d.label = 4;
                case 4:
                    _c = _b.next();
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_18_1 = _d.sent();
                    e_18 = { error: e_18_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_18) throw e_18.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    Enumerable.r = function ($tSource, a, b) {
        return toEnum(function () { return Enumerable._r($tSource, a, b); });
    };
    Enumerable.c = function ($tSource, a) {
        var e_19, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                return true;
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_19) throw e_19.error; }
        }
        return false;
    };
    Enumerable.e = function ($tSource, a, value_) {
        var e_20, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item_ = _c.value;
                if (item_ === value_) {
                    return true;
                }
                ;
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_20) throw e_20.error; }
        }
        return false;
    };
    Enumerable.t = function ($tSource, a, b) {
        return null;
    };
    Enumerable.a = function ($tSource, a) {
        var b = typeCast(List$1.$.specialize($tSource), a);
        if (b != null) {
            return b.toArray();
        }
        b = new List$1($tSource, 1, a);
        return b.asArray();
    };
    Enumerable.ac = function ($tSource, a, b) {
        var c = typeCast(IList$1_$type.specialize($tSource), a);
        if (c != null) {
            return c.item(b);
        }
        return Enumerable.ad($tSource, Enumerable.r($tSource, a, b));
    };
    Enumerable.aa = function (a) {
        var e_21, _a;
        var b = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b += c;
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_21) throw e_21.error; }
        }
        return b;
    };
    Enumerable.ab = function ($tSource, a, b) {
        return Enumerable.aa(Enumerable.o($tSource, Number_$type, a, b));
    };
    Enumerable.f = function ($tSource, a, b) {
        if (a == null) {
            throw new ArgumentNullException(0, "first");
        }
        if (b == null) {
            throw new ArgumentNullException(0, "second");
        }
        var c = getEnumerator(a);
        var d = getEnumerator(b);
        {
            while (c.moveNext()) {
                if (!d.moveNext() || !Base.equalsStatic(getBoxIfEnum($tSource, c.current), getBoxIfEnum($tSource, d.current))) {
                    return false;
                }
            }
            return (d.moveNext() == false);
        }
    };
    Enumerable._k = function ($tSource) {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, undefined];
        });
    };
    Enumerable.k = function ($tSource) {
        return toEnum(function () { return Enumerable._k($tSource); });
    };
    Enumerable._q = function ($tSource, $tCollection, $tResult, a, b, c) {
        var e_22, _a, e_23, _b, _c, _d, d, _e, _f, e, e_23_1, e_22_1;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 11, 12, 13]);
                    _c = tslib_1.__values(fromEnum(a)), _d = _c.next();
                    _g.label = 1;
                case 1:
                    if (!!_d.done) return [3 /*break*/, 10];
                    d = _d.value;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 9]);
                    _e = tslib_1.__values(fromEnum(b(d))), _f = _e.next();
                    _g.label = 3;
                case 3:
                    if (!!_f.done) return [3 /*break*/, 6];
                    e = _f.value;
                    return [4 /*yield*/, c(d, e)];
                case 4:
                    _g.sent();
                    _g.label = 5;
                case 5:
                    _f = _e.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_23_1 = _g.sent();
                    e_23 = { error: e_23_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_23) throw e_23.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _d = _c.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_22_1 = _g.sent();
                    e_22 = { error: e_22_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_22) throw e_22.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    Enumerable.q = function ($tSource, $tCollection, $tResult, a, b, c) {
        return toEnum(function () { return Enumerable._q($tSource, $tCollection, $tResult, a, b, c); });
    };
    Enumerable.d = function ($tSource, a, b) {
        var e_24, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (b(c)) {
                    return true;
                }
            }
        }
        catch (e_24_1) { e_24 = { error: e_24_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_24) throw e_24.error; }
        }
        return false;
    };
    Enumerable.ag = function ($tSource, a, b) {
        var e_25, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (b(c)) {
                    return c;
                }
            }
        }
        catch (e_25_1) { e_25 = { error: e_25_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_25) throw e_25.error; }
        }
        return Type.getDefaultValue($tSource);
    };
    Enumerable.b = function ($tSource, a, b) {
        var e_26, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (b(c) == false) {
                    return false;
                }
            }
        }
        catch (e_26_1) { e_26 = { error: e_26_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_26) throw e_26.error; }
        }
        return true;
    };
    Enumerable.g = function ($tSource, $tKey, a, b) {
        var e_27, _a;
        var c = new Dictionary$2($tKey, $tSource, 0);
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                c.item(b(d), d);
            }
        }
        catch (e_27_1) { e_27 = { error: e_27_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_27) throw e_27.error; }
        }
        return c;
    };
    Enumerable.ai = function ($tSource, a) {
        throw new NotImplementedException(0);
    };
    Enumerable.w = function ($tFirst, $tSecond, $tResult, a, b, c) {
        throw new NotImplementedException(0);
    };
    Enumerable.j = function ($tSource, a) {
        throw new NotImplementedException(0);
    };
    Enumerable.$t = markType(Enumerable, 'Enumerable');
    return Enumerable;
}(Base));
export { Enumerable };
//# sourceMappingURL=Enumerable.js.map
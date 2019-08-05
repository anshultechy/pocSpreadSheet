/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { WorksheetProtectedRange } from "../../igniteui-angular-excel/ES5/excel.core";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
/**
 * @hidden
 */
var LockedEditRangeInfoForOperation = /** @class */ (function (_super) {
    tslib_1.__extends(LockedEditRangeInfoForOperation, _super);
    function LockedEditRangeInfoForOperation() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.f = null;
        _this.d = new List$1(LockedEditRangeInfoForWorksheet.$, 0);
        _this.f = new ReadOnlyCollection$1(LockedEditRangeInfoForWorksheet.$, 1, _this.d);
        return _this;
    }
    Object.defineProperty(LockedEditRangeInfoForOperation.prototype, "c", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    LockedEditRangeInfoForOperation.prototype.b = function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.d)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                if (a.d) {
                    return false;
                }
                if (a.h != null && Enumerable.af(WorksheetProtectedRange.$, a.h) == null) {
                    return false;
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
        return true;
    };
    LockedEditRangeInfoForOperation.prototype.e = function (a) {
        var e_2, _a, e_3, _b;
        var b = new List$1(WorksheetProtectedRange.$, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(this.c)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var c = _d.value;
                var d = a ? c.h : c.g;
                if (d != null) {
                    try {
                        for (var _e = tslib_1.__values(fromEnum(d)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var e = _f.value;
                            if (e.isProtected) {
                                b.add(e);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    };
    LockedEditRangeInfoForOperation.prototype.a = function (a) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.d)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (b.b == a) {
                    return b;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var c = new LockedEditRangeInfoForWorksheet(this, a);
        this.d.add(c);
        return c;
    };
    LockedEditRangeInfoForOperation.$t = markType(LockedEditRangeInfoForOperation, 'LockedEditRangeInfoForOperation');
    return LockedEditRangeInfoForOperation;
}(Base));
export { LockedEditRangeInfoForOperation };
/**
 * @hidden
 */
var LockedEditRangeInfoForWorksheet = /** @class */ (function (_super) {
    tslib_1.__extends(LockedEditRangeInfoForWorksheet, _super);
    function LockedEditRangeInfoForWorksheet(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        _this.f = null;
        _this.i = null;
        _this.c = false;
        _this.a = a;
        _this.b = b;
        _this.f = new HashSet$1(WorksheetProtectedRange.$, 0);
        return _this;
    }
    Object.defineProperty(LockedEditRangeInfoForWorksheet.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockedEditRangeInfoForWorksheet.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockedEditRangeInfoForWorksheet.prototype, "h", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    LockedEditRangeInfoForWorksheet.prototype.j = function (a) {
        var e_5, _a;
        if (a != null) {
            try {
                for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var b = _c.value;
                    this.f.add_1(b);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    };
    LockedEditRangeInfoForWorksheet.prototype.k = function () {
        this.c = true;
    };
    LockedEditRangeInfoForWorksheet.prototype.e = function (a, b) {
        var e_6, _a, e_7, _b, e_8, _c;
        var c = b;
        if (this.i == null) {
            this.i = new List$1(WorksheetProtectedRange.$, 0);
            try {
                for (var _d = tslib_1.__values(fromEnum(this.f)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var d = _e.value;
                    if (d.isProtected == false) {
                        continue;
                    }
                    try {
                        for (var _f = tslib_1.__values(fromEnum(d.ranges)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var e = _g.value;
                            if (e._h._i(a, c)) {
                                this.i.add(d);
                                break;
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (this.i.count > 0) {
            for (var f = this.i.count - 1; f >= 0; f--) {
                var g = false;
                try {
                    for (var _j = tslib_1.__values(fromEnum(this.i._inner[f].ranges)), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var h = _k.value;
                        if (h._h._i(a, c)) {
                            g = true;
                            break;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                if (g == false) {
                    this.i.removeAt(f);
                }
            }
        }
        return this.i.count > 0;
    };
    LockedEditRangeInfoForWorksheet.$t = markType(LockedEditRangeInfoForWorksheet, 'LockedEditRangeInfoForWorksheet');
    return LockedEditRangeInfoForWorksheet;
}(Base));
export { LockedEditRangeInfoForWorksheet };
//# sourceMappingURL=LockedEditRangeInfoForOperation_combined.js.map

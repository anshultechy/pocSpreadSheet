/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, Point_$type, markType } from "./type";
import { Flattener } from "./Flattener";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { PointCollection } from "./PointCollection";
import { isInfinity } from "./number";
/**
 * @hidden
 */
var PointCollectionUtil = /** @class */ (function (_super) {
    tslib_1.__extends(PointCollectionUtil, _super);
    function PointCollectionUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointCollectionUtil.d = function (a, b, c) {
        var e_1, _a;
        if (b == null) {
            return;
        }
        b.clear();
        if (a.count >= 2) {
            var d = Flattener.d(a.count, function (e) { return a.item(e).x; }, function (e) { return a.item(e).y; }, c);
            try {
                for (var _b = tslib_1.__values(fromEnum(d)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    b.add(a.item(e));
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
    PointCollectionUtil.g = function (a) {
        var e_2, _a;
        var b = Number.POSITIVE_INFINITY;
        var c = Number.POSITIVE_INFINITY;
        var d = Number.NEGATIVE_INFINITY;
        var e = Number.NEGATIVE_INFINITY;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var f = _c.value;
                b = Math.min(b, f.x);
                c = Math.min(c, f.y);
                d = Math.max(d, f.x);
                e = Math.max(e, f.y);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (isInfinity(b) || isInfinity(c) || isInfinity(c) || isInfinity(e)) {
            return Rect.empty;
        }
        return new Rect(0, b, c, d - b, e - c);
    };
    PointCollectionUtil.h = function (a) {
        var e_3, _a;
        var b = Rect.empty;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b.union(PointCollectionUtil.g(c));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return b;
    };
    PointCollectionUtil.i = function (a) {
        var b = Number.POSITIVE_INFINITY;
        var c = Number.POSITIVE_INFINITY;
        var d = Number.NEGATIVE_INFINITY;
        var e = Number.NEGATIVE_INFINITY;
        var f;
        for (var g = 0; g < a.count; g++) {
            f = a.item(g);
            b = Math.min(b, f.x);
            c = Math.min(c, f.y);
            d = Math.max(d, f.x);
            e = Math.max(e, f.y);
        }
        if (isInfinity(b) || isInfinity(c) || isInfinity(c) || isInfinity(e)) {
            return Rect.empty;
        }
        return new Rect(0, b, c, d - b, e - c);
    };
    PointCollectionUtil.j = function (a) {
        if (a == null) {
            return Rect.empty;
        }
        var b = Rect.empty;
        var c;
        for (var d = 0; d < a.count; d++) {
            c = a._inner[d];
            b.union(PointCollectionUtil.i(c));
        }
        return b;
    };
    PointCollectionUtil.k = function (a) {
        var b = Rect.empty;
        var c;
        for (var d = 0; d < a.count; d++) {
            c = a._inner[d];
            b.union(PointCollectionUtil.i(c));
        }
        return b;
    };
    PointCollectionUtil.c = function (a, b, c) {
        var d = a.count;
        for (var e = 0; e < d; e++) {
            c.j(a.item(e));
        }
        c.i = null;
    };
    PointCollectionUtil.e = function (a) {
        var e_4, _a;
        var b = 0;
        var c = 0;
        var d = 0;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                b += e.x;
                c += e.y;
                d += 1;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return { $type: Point_$type, x: b / d, y: c / d };
    };
    PointCollectionUtil.f = function (a) {
        var e_5, _a;
        var b = new PointCollection(0);
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b.add(c);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return b;
    };
    PointCollectionUtil.b = function (a) {
        var e_6, _a;
        var b = new List$1(Point_$type, 0);
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b.add(c);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return b;
    };
    PointCollectionUtil.a = function (a) {
        var b = new List$1(PointCollection.$, 0);
        var c;
        var d = a.count;
        for (var e = 0; e < d; e++) {
            c = a._inner[e];
            var f = new PointCollection(1, c);
            b.add(f);
        }
        return b;
    };
    PointCollectionUtil.$t = markType(PointCollectionUtil, 'PointCollectionUtil');
    return PointCollectionUtil;
}(Base));
export { PointCollectionUtil };
//# sourceMappingURL=PointCollectionUtil.js.map
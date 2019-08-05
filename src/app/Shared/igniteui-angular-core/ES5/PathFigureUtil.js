/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "./type";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { PathSegmentCollection } from "./PathSegmentCollection";
import { ArcSegment } from "./ArcSegment";
import { LineSegment } from "./LineSegment";
import { PolyLineSegment } from "./PolyLineSegment";
/**
 * @hidden
 */
var PathFigureUtil = /** @class */ (function (_super) {
    tslib_1.__extends(PathFigureUtil, _super);
    function PathFigureUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PathFigureUtil.b = function (a) {
        var e_1, _a;
        var b = new PathFigureCollection();
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b.add(PathFigureUtil.a(c));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return b;
    };
    PathFigureUtil.a = function (a) {
        var e_2, _a, e_3, _b;
        if (a == null) {
            return null;
        }
        var b = new PathSegmentCollection();
        try {
            for (var _c = tslib_1.__values(fromEnum(a._segments)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var c = _d.value;
                switch (c.a) {
                    case 4:
                        var d = c;
                        var e = new ArcSegment();
                        e.b = d.b;
                        e.e = d.e;
                        e.c = d.c;
                        e.f = d.f;
                        e.d = d.d;
                        b.add(e);
                        break;
                    case 0:
                        var f = c;
                        var g = new LineSegment(1);
                        g.c = f.c;
                        b.add(g);
                        break;
                    case 3:
                        var h = c;
                        var i = new PolyLineSegment();
                        try {
                            for (var _e = tslib_1.__values(fromEnum(h._points)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var j = _f.value;
                                i._points.add(j);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        b.add(i);
                        break;
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
        return ((function () {
            var $ret = new PathFigure();
            $ret.isClosed = a._isClosed;
            $ret.isFilled = a._isFilled;
            $ret.startPoint = a._startPoint;
            $ret.segments = b;
            return $ret;
        })());
    };
    PathFigureUtil.$t = markType(PathFigureUtil, 'PathFigureUtil');
    return PathFigureUtil;
}(Base));
export { PathFigureUtil };
//# sourceMappingURL=PathFigureUtil.js.map
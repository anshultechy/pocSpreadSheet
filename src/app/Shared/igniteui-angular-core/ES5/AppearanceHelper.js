/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, BaseError, Nullable$1, Point_$type, typeCast, fromEnum, markType } from "./type";
import { ColorData } from "./ColorData";
import { Color } from "./Color";
import { LinearGradientBrushAppearanceData } from "./LinearGradientBrushAppearanceData";
import { GradientStopAppearanceData } from "./GradientStopAppearanceData";
import { SolidBrushAppearanceData } from "./SolidBrushAppearanceData";
import { List$1 } from "./List$1";
import { GeometryData } from "./GeometryData";
import { LineGeometry } from "./LineGeometry";
import { GeometryGroup } from "./GeometryGroup";
import { PathGeometry } from "./PathGeometry";
import { RectangleGeometry } from "./RectangleGeometry";
import { EllipseGeometry } from "./EllipseGeometry";
import { EllipseGeometryData } from "./EllipseGeometryData";
import { RectangleGeometryData } from "./RectangleGeometryData";
import { LineGeometryData } from "./LineGeometryData";
import { PathGeometryData } from "./PathGeometryData";
import { PathFigureData } from "./PathFigureData";
import { LabelAppearanceData } from "./LabelAppearanceData";
import { RotateTransform } from "./RotateTransform";
import { TransformGroup } from "./TransformGroup";
import { isNaN_ } from "./number";
import { stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
var AppearanceHelper = /** @class */ (function (_super) {
    tslib_1.__extends(AppearanceHelper, _super);
    function AppearanceHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppearanceHelper.b = function (a) {
        if (a == null) {
            return ColorData.a_1(Color.u(0, 0, 0, 0));
        }
        if (Color.c(Nullable$1.toNullable(Color.$, a.color), Nullable$1.toNullable(Color.$, null))) {
            return ColorData.a_1(Color.u(0, 0, 0, 0));
        }
        return ColorData.a_1(a.color);
    };
    AppearanceHelper.a = function (a) {
        if (a == null) {
            return null;
        }
        if (a.isGradient) {
            var b = new LinearGradientBrushAppearanceData();
            var c = a;
            b.startX = c.startX;
            b.startY = c.startY;
            b.endX = c.endX;
            b.endY = c.endY;
            var f = c.gradientStops;
            for (var e = 0; e < f.length; e++) {
                var d = f[e];
                var g = new GradientStopAppearanceData();
                g.colorValue = ColorData.a_1(d.color);
                g.offset = d.offset;
                b.stops.add(g);
            }
            return b;
        }
        else if (a.isRadialGradient) {
            return null;
        }
        else {
            var h = new SolidBrushAppearanceData();
            h.colorValue = ColorData.a_1(a.color);
            return h;
        }
    };
    AppearanceHelper.m = function (a) {
        return a.n;
    };
    AppearanceHelper.n = function (a) {
        return a.o;
    };
    AppearanceHelper.o = function (a) {
        return a.s;
    };
    AppearanceHelper.j = function (a) {
        return AppearanceHelper.g(a.aj);
    };
    AppearanceHelper.h = function (a) {
        var b = new LineGeometry();
        b.b = { $type: Point_$type, x: a.ak, y: a.am };
        b.c = { $type: Point_$type, x: a.aj, y: a.al };
        return AppearanceHelper.g(b);
    };
    AppearanceHelper.g = function (a) {
        if (a == null) {
            return new List$1(GeometryData.$, 0);
        }
        if (typeCast(GeometryGroup.$, a) !== null) {
            var b = new List$1(GeometryData.$, 0);
            var c = a;
            for (var d = 0; d < c.c.count; d++) {
                var e = AppearanceHelper.g(c.c._inner[d]);
                for (var f = 0; f < e.count; f++) {
                    b.add(e._inner[f]);
                }
            }
            return b;
        }
        else if (typeCast(PathGeometry.$, a) !== null) {
            return AppearanceHelper.k(a);
        }
        else if (typeCast(LineGeometry.$, a) !== null) {
            return AppearanceHelper.i(a);
        }
        else if (typeCast(RectangleGeometry.$, a) !== null) {
            return AppearanceHelper.l(a);
        }
        else if (typeCast(EllipseGeometry.$, a) !== null) {
            return AppearanceHelper.f(a);
        }
        else {
            throw new BaseError(1, "not supported");
        }
    };
    AppearanceHelper.f = function (a) {
        var b = new List$1(GeometryData.$, 0);
        var c = new EllipseGeometryData();
        b.add(c);
        c.centerX = a.d.x;
        c.centerY = a.d.y;
        c.radiusX = a.b;
        c.radiusY = a.c;
        return b;
    };
    AppearanceHelper.l = function (a) {
        var b = new List$1(GeometryData.$, 0);
        var c = new RectangleGeometryData();
        b.add(c);
        c.x = a.d.x;
        c.y = a.d.y;
        c.width = a.d.width;
        c.height = a.d.height;
        return b;
    };
    AppearanceHelper.i = function (a) {
        var b = new List$1(GeometryData.$, 0);
        var c = new LineGeometryData();
        b.add(c);
        c.x1 = a.c.x;
        c.y1 = a.c.y;
        c.x2 = a.b.x;
        c.y2 = a.b.y;
        return b;
    };
    AppearanceHelper.k = function (a) {
        var b = new List$1(GeometryData.$, 0);
        var c = new PathGeometryData();
        b.add(c);
        for (var d = 0; d < a.b.count; d++) {
            var e = a.b._inner[d];
            var f = new PathFigureData(1, e);
            c.figures.add(f);
        }
        return b;
    };
    AppearanceHelper.p = function (a, b) {
        a.stroke = AppearanceHelper.b(b._stroke);
        a.fill = AppearanceHelper.b(b._fill);
        a.strokeExtended = AppearanceHelper.a(b._stroke);
        a.fillExtended = AppearanceHelper.a(b._fill);
        a.strokeThickness = b.ac;
        a.dashArray = null;
        if (b.ai != null) {
            a.dashArray = b.ai.asArray();
        }
        a.dashCap = b.ad;
        a.isVisible = b._visibility == 0;
        a.opacity = b._opacity;
        a.canvasLeft = AppearanceHelper.m(b);
        a.canvasTop = AppearanceHelper.n(b);
        a.canvaZIndex = AppearanceHelper.o(b);
    };
    AppearanceHelper.c = function (a, b) {
        var e_1, _a;
        var c = new LabelAppearanceData();
        var d = a;
        c.text = d.ak;
        c.labelBrush = AppearanceHelper.b(d.am);
        c.labelBrushExtended = AppearanceHelper.a(d.am);
        c.visibility = (d._visibility == 0) ? true : false;
        c.opacity = d._opacity;
        if (b != null) {
            if (b.n != null) {
                c.fontFamily = b.n;
            }
            if (!isNaN_(b.d)) {
                c.fontSize = b.d;
            }
            c.fontWeight = stringIsNullOrEmpty(b.s) ? "Normal" : b.s;
            c.fontStyle = stringIsNullOrEmpty(b.q) ? "Normal" : b.q;
            if (b.o != null) {
                c.fontStretch = b.q;
            }
        }
        var e = 0;
        var f = d.j;
        if (typeCast(RotateTransform.$, f) !== null) {
            var g = typeCast(RotateTransform.$, f);
            e = g.j;
        }
        else if (typeCast(TransformGroup.$, f) !== null) {
            var h = typeCast(TransformGroup.$, f);
            try {
                for (var _b = tslib_1.__values(fromEnum(h.j)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var i = _c.value;
                    if (typeCast(RotateTransform.$, i) !== null) {
                        var j = typeCast(RotateTransform.$, i);
                        e = j.j;
                        break;
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
        c.angle = e;
        return c;
    };
    AppearanceHelper.serializeItems = function (a, b, c, d) {
        var e_2, _a;
        if (c != null) {
            if (!d) {
                a.l(", ");
            }
            a.l(b);
            a.l(": [");
            var e = false;
            try {
                for (var _b = tslib_1.__values(fromEnum(c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var f = _c.value;
                    if (e) {
                        a.u(", ");
                    }
                    else {
                        e = true;
                    }
                    a.l(f.serialize());
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            a.u("]");
            return true;
        }
        return false;
    };
    AppearanceHelper.serializeItem = function (a, b, c, d) {
        if (c != null) {
            if (!d) {
                a.l(", ");
            }
            a.l(b);
            a.l(": ");
            a.u(c.serialize());
            return true;
        }
        return false;
    };
    AppearanceHelper.$t = markType(AppearanceHelper, 'AppearanceHelper');
    return AppearanceHelper;
}(Base));
export { AppearanceHelper };
//# sourceMappingURL=AppearanceHelper.js.map
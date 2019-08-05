/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, fromEnum, markType } from "./type";
import { PathGeometry } from "./PathGeometry";
import { List$1 } from "./List$1";
import { PathFigure } from "./PathFigure";
import { Panel } from "./Panel";
import { ContentControl } from "./ContentControl";
import { UIElement } from "./UIElement";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
var Extensions = /** @class */ (function (_super) {
    tslib_1.__extends(Extensions, _super);
    function Extensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Extensions.e = function (a) {
        a.b.clear();
        a.b.add(new PathFigure());
        a.b.removeAt(0);
    };
    Extensions.d = function (a) {
        a.c.clear();
        a.c.add(new PathGeometry());
        a.c.removeAt(0);
    };
    Extensions.c = function (a) {
        if (a == null) {
            return;
        }
        var b = typeCast(Panel.$, a.x);
        if (b != null) {
            b.ab.remove(a);
            return;
        }
        var c = typeCast(ContentControl.$, a.x);
        if (c != null) {
            c.content = null;
            return;
        }
    };
    Extensions.f = function (a, b) {
        var e_1, _a, e_2, _b;
        var c = new List$1(UIElement.$, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(a.ab)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var d = _d.value;
                if (typeCast(UIElement.$, d) !== null) {
                    c.add(d);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(c)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var e = _f.value;
                a.ab.remove(e);
                b.ab.add(e);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Extensions.a = function (a) {
        return !isNaN_(a.x) && !isNaN_(a.y) && !isInfinity(a.x) && !isInfinity(a.y);
    };
    Extensions.b = function (a) {
        return !isNaN_(a.left) && !isNaN_(a.right) && !isNaN_(a.top) && !isNaN_(a.bottom) && !isInfinity(a.left) && !isInfinity(a.right) && !isInfinity(a.top) && !isInfinity(a.bottom);
    };
    Extensions.$t = markType(Extensions, 'Extensions');
    return Extensions;
}(Base));
export { Extensions };
//# sourceMappingURL=Extensions.js.map
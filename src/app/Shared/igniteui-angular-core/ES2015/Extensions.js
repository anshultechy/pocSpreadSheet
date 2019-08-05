/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class Extensions extends Base {
    static e(a) {
        a.b.clear();
        a.b.add(new PathFigure());
        a.b.removeAt(0);
    }
    static d(a) {
        a.c.clear();
        a.c.add(new PathGeometry());
        a.c.removeAt(0);
    }
    static c(a) {
        if (a == null) {
            return;
        }
        let b = typeCast(Panel.$, a.x);
        if (b != null) {
            b.ab.remove(a);
            return;
        }
        let c = typeCast(ContentControl.$, a.x);
        if (c != null) {
            c.content = null;
            return;
        }
    }
    static f(a, b) {
        let c = new List$1(UIElement.$, 0);
        for (let d of fromEnum(a.ab)) {
            if (typeCast(UIElement.$, d) !== null) {
                c.add(d);
            }
        }
        for (let e of fromEnum(c)) {
            a.ab.remove(e);
            b.ab.add(e);
        }
    }
    static a(a) {
        return !isNaN_(a.x) && !isNaN_(a.y) && !isInfinity(a.x) && !isInfinity(a.y);
    }
    static b(a) {
        return !isNaN_(a.left) && !isNaN_(a.right) && !isNaN_(a.top) && !isNaN_(a.bottom) && !isInfinity(a.left) && !isInfinity(a.right) && !isInfinity(a.top) && !isInfinity(a.bottom);
    }
}
Extensions.$t = markType(Extensions, 'Extensions');
//# sourceMappingURL=Extensions.js.map
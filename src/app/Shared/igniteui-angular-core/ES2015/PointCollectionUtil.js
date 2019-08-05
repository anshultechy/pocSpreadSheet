/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, Point_$type, markType } from "./type";
import { Flattener } from "./Flattener";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { PointCollection } from "./PointCollection";
import { isInfinity } from "./number";
/**
 * @hidden
 */
export class PointCollectionUtil extends Base {
    static d(a, b, c) {
        if (b == null) {
            return;
        }
        b.clear();
        if (a.count >= 2) {
            let d = Flattener.d(a.count, (e) => a.item(e).x, (e) => a.item(e).y, c);
            for (let e of fromEnum(d)) {
                b.add(a.item(e));
            }
        }
    }
    static g(a) {
        let b = Number.POSITIVE_INFINITY;
        let c = Number.POSITIVE_INFINITY;
        let d = Number.NEGATIVE_INFINITY;
        let e = Number.NEGATIVE_INFINITY;
        for (let f of fromEnum(a)) {
            b = Math.min(b, f.x);
            c = Math.min(c, f.y);
            d = Math.max(d, f.x);
            e = Math.max(e, f.y);
        }
        if (isInfinity(b) || isInfinity(c) || isInfinity(c) || isInfinity(e)) {
            return Rect.empty;
        }
        return new Rect(0, b, c, d - b, e - c);
    }
    static h(a) {
        let b = Rect.empty;
        for (let c of fromEnum(a)) {
            b.union(PointCollectionUtil.g(c));
        }
        return b;
    }
    static i(a) {
        let b = Number.POSITIVE_INFINITY;
        let c = Number.POSITIVE_INFINITY;
        let d = Number.NEGATIVE_INFINITY;
        let e = Number.NEGATIVE_INFINITY;
        let f;
        for (let g = 0; g < a.count; g++) {
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
    }
    static j(a) {
        if (a == null) {
            return Rect.empty;
        }
        let b = Rect.empty;
        let c;
        for (let d = 0; d < a.count; d++) {
            c = a._inner[d];
            b.union(PointCollectionUtil.i(c));
        }
        return b;
    }
    static k(a) {
        let b = Rect.empty;
        let c;
        for (let d = 0; d < a.count; d++) {
            c = a._inner[d];
            b.union(PointCollectionUtil.i(c));
        }
        return b;
    }
    static c(a, b, c) {
        let d = a.count;
        for (let e = 0; e < d; e++) {
            c.j(a.item(e));
        }
        c.i = null;
    }
    static e(a) {
        let b = 0;
        let c = 0;
        let d = 0;
        for (let e of fromEnum(a)) {
            b += e.x;
            c += e.y;
            d += 1;
        }
        return { $type: Point_$type, x: b / d, y: c / d };
    }
    static f(a) {
        let b = new PointCollection(0);
        for (let c of fromEnum(a)) {
            b.add(c);
        }
        return b;
    }
    static b(a) {
        let b = new List$1(Point_$type, 0);
        for (let c of fromEnum(a)) {
            b.add(c);
        }
        return b;
    }
    static a(a) {
        let b = new List$1(PointCollection.$, 0);
        let c;
        let d = a.count;
        for (let e = 0; e < d; e++) {
            c = a._inner[e];
            let f = new PointCollection(1, c);
            b.add(f);
        }
        return b;
    }
}
PointCollectionUtil.$t = markType(PointCollectionUtil, 'PointCollectionUtil');
//# sourceMappingURL=PointCollectionUtil.js.map
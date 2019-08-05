/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class PathFigureUtil extends Base {
    static b(a) {
        let b = new PathFigureCollection();
        for (let c of fromEnum(a)) {
            b.add(PathFigureUtil.a(c));
        }
        return b;
    }
    static a(a) {
        if (a == null) {
            return null;
        }
        let b = new PathSegmentCollection();
        for (let c of fromEnum(a._segments)) {
            switch (c.a) {
                case 4:
                    let d = c;
                    let e = new ArcSegment();
                    e.b = d.b;
                    e.e = d.e;
                    e.c = d.c;
                    e.f = d.f;
                    e.d = d.d;
                    b.add(e);
                    break;
                case 0:
                    let f = c;
                    let g = new LineSegment(1);
                    g.c = f.c;
                    b.add(g);
                    break;
                case 3:
                    let h = c;
                    let i = new PolyLineSegment();
                    for (let j of fromEnum(h._points)) {
                        i._points.add(j);
                    }
                    b.add(i);
                    break;
            }
        }
        return ((() => {
            let $ret = new PathFigure();
            $ret.isClosed = a._isClosed;
            $ret.isFilled = a._isFilled;
            $ret.startPoint = a._startPoint;
            $ret.segments = b;
            return $ret;
        })());
    }
}
PathFigureUtil.$t = markType(PathFigureUtil, 'PathFigureUtil');
//# sourceMappingURL=PathFigureUtil.js.map
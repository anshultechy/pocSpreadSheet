/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { markType } from "./type";
import { AppearanceHelper } from "./AppearanceHelper";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class PolygonVisualData extends PrimitiveVisualData {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(1, "polygon1");
                    this._points = null;
                    this.points = new List$1(PointData.$, 0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                    this._points = null;
                    this.points = new List$1(PointData.$, 0);
                    for (let e = 0; e < d.aj.count; e++) {
                        this.points.add(PointData.b(d.aj._inner[e]));
                    }
                    AppearanceHelper.p(this.appearance, d);
                }
                break;
        }
    }
    get_type() {
        return "Polygon";
    }
    get type() {
        return this.get_type();
    }
    get points() {
        return this._points;
    }
    set points(a) {
        this._points = a;
    }
    e() {
        let a = new StringBuilder(0);
        a.u("points: [");
        for (let b = 0; b < this.points.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l("{ x: " + this.points._inner[b].x + ", y: " + this.points._inner[b].y + "}");
        }
        a.u("]");
        return a.toString();
    }
    scaleByViewport(a) {
        super.scaleByViewport(a);
        for (let b = 0; b < this.points.count; b++) {
            this.points._inner[b] = new PointData((this.points._inner[b].x - a.left) / a.width, (this.points._inner[b].y - a.top) / a.height);
        }
    }
    getPointsOverride(a, b) {
        let c = new List$1(PointData.$, 0);
        a.add(c);
        for (let d = 0; d < this.points.count; d++) {
            c.add(this.points._inner[d]);
        }
    }
}
PolygonVisualData.$t = markType(PolygonVisualData, 'PolygonVisualData', PrimitiveVisualData.$);
//# sourceMappingURL=PolygonVisualData.js.map
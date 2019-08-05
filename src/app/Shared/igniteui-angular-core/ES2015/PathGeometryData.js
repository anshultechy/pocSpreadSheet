/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { GeometryData } from "./GeometryData";
import { List$1 } from "./List$1";
import { PathFigureData } from "./PathFigureData";
import { StringBuilder } from "./StringBuilder";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
export class PathGeometryData extends GeometryData {
    constructor() {
        super();
        this._figures = null;
        this.figures = new List$1(PathFigureData.$, 0);
    }
    get_type() {
        return "Path";
    }
    get type() {
        return this.get_type();
    }
    get figures() {
        return this._figures;
    }
    set figures(a) {
        this._figures = a;
    }
    a() {
        let a = new StringBuilder(0);
        a.u("figures: [");
        for (let b = 0; b < this.figures.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this.figures._inner[b].serialize());
        }
        a.u("]");
        return a.toString();
    }
    scaleByViewport(a) {
        for (let b of fromEnum(this.figures)) {
            b.d(a);
        }
    }
    getPointsOverride(a, b) {
        for (let c = 0; c < this.figures.count; c++) {
            let d = this.figures._inner[c];
            d.getPointsOverride(a, b);
        }
    }
}
PathGeometryData.$t = markType(PathGeometryData, 'PathGeometryData', GeometryData.$);
//# sourceMappingURL=PathGeometryData.js.map
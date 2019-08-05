/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { GeometryData } from "./GeometryData";
import { AppearanceHelper } from "./AppearanceHelper";
import { StringBuilder } from "./StringBuilder";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
export class PathVisualData extends PrimitiveVisualData {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(1, "path1");
                    this._data = null;
                    this.data = new List$1(GeometryData.$, 0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                    this._data = null;
                    this.data = AppearanceHelper.g(d.aj);
                    AppearanceHelper.p(this.appearance, d);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                    this._data = null;
                    this.data = AppearanceHelper.h(d);
                    AppearanceHelper.p(this.appearance, d);
                }
                break;
        }
    }
    get_type() {
        return "Path";
    }
    get type() {
        return this.get_type();
    }
    get data() {
        return this._data;
    }
    set data(a) {
        this._data = a;
    }
    e() {
        let a = new StringBuilder(0);
        a.u("data: [");
        for (let b = 0; b < this.data.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l((this.data._inner[b] != null ? this.data._inner[b].serialize() : "null"));
        }
        a.u("]");
        return a.toString();
    }
    scaleByViewport(a) {
        super.scaleByViewport(a);
        for (let b of fromEnum(this.data)) {
            b.scaleByViewport(a);
        }
    }
    getPointsOverride(a, b) {
        for (let c = 0; c < this.data.count; c++) {
            let d = this.data._inner[c];
            d.getPointsOverride(a, b);
        }
    }
}
PathVisualData.$t = markType(PathVisualData, 'PathVisualData', PrimitiveVisualData.$);
//# sourceMappingURL=PathVisualData.js.map
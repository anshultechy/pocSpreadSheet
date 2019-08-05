/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { Triangulator } from "./Triangulator";
import { boxArray$1 } from "./array";
/**
 * @hidden
 */
export class TriangulationSource extends Base {
    constructor() {
        super(...arguments);
        this._points = null;
        this._triangles = null;
    }
    static create(a, b, c) {
        let d = new TriangulationSource();
        let e = new Array(a);
        let f;
        let g;
        let h = new Array(a);
        let i = new Array(a);
        let j = 0;
        let k = 0;
        for (let l = 0; l < a; l++) {
            f = new TriangulationSourcePointRecord();
            g = b(l);
            j = g.x;
            k = g.y;
            f.pointX = j;
            f.pointY = k;
            f.value = c(l);
            e[l] = f;
            h[l] = j;
            i[l] = k;
        }
        d.points = e;
        let m = new Triangulator(a, boxArray$1(h), boxArray$1(i));
        m.x();
        d.triangles = m.n();
        return d;
    }
    static loadItf(a) {
        a.readBytes(5);
        let b = a.readInt32();
        let c = a.readInt32();
        let d = a.readInt32();
        let e = a.readInt32();
        a.readBytes(e);
        let f = new TriangulationSource();
        let g = new Array(b);
        let h;
        for (let i = 0; i < b; i++) {
            h = new TriangulationSourcePointRecord();
            h.pointX = a.readDouble();
            h.pointY = a.readDouble();
            h.value = a.readSingle();
            g[i] = h;
        }
        f.points = g;
        let j = new Array(c);
        let k;
        for (let l = 0; l < c; l++) {
            k = new Triangle();
            k.v1 = a.readInt32();
            k.v2 = a.readInt32();
            k.v3 = a.readInt32();
            j[l] = k;
        }
        f.triangles = boxArray$1(j);
        return f;
    }
    get points() {
        return this._points;
    }
    set points(a) {
        this._points = a;
    }
    get triangles() {
        return this._triangles;
    }
    set triangles(a) {
        this._triangles = a;
    }
}
TriangulationSource.$t = markType(TriangulationSource, 'TriangulationSource');
//# sourceMappingURL=TriangulationSource.js.map
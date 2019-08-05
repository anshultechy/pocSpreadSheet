/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PathSegment } from "./PathSegment";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
export class BezierSegment extends PathSegment {
    constructor(a, ..._rest) {
        super();
        this.b = null;
        this.c = null;
        this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.e = this.f = this.g = { $type: Point_$type, x: 0, y: 0 };
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    this.e = c;
                    this.f = d;
                    this.g = e;
                }
                break;
        }
    }
    get e() {
        return this.b;
    }
    set e(a) {
        this.b = a;
    }
    get f() {
        return this.c;
    }
    set f(a) {
        this.c = a;
    }
    get g() {
        return this.d;
    }
    set g(a) {
        this.d = a;
    }
    get_a() {
        return 1;
    }
    get a() {
        return this.get_a();
    }
}
BezierSegment.$t = markType(BezierSegment, 'BezierSegment', PathSegment.$);
//# sourceMappingURL=BezierSegment.js.map
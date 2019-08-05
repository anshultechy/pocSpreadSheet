/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { Stack$1 } from "./Stack$1";
import { SpiralTodo } from "./SpiralTodo";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class SpiralFlattener extends Base {
    constructor() {
        super();
    }
    static a(a, b, c, d, e) {
        if (isNaN_(e) || e <= 0) {
            e = 1;
        }
        let f = new List$1(Number_$type, 0);
        let g = new Stack$1(SpiralTodo.$);
        let h = (d - b) / (c - a);
        let i = b - h * a;
        let j = h * h;
        let k = i * i;
        let l = i * h;
        g.h(((() => {
            let $ret = new SpiralTodo();
            $ret.a = 0;
            $ret.b = 1;
            return $ret;
        })()));
        while (g.f != 0) {
            let m = g.e();
            let n = b + m.a * (d - b);
            let o = a + m.a * (c - a);
            let p = o * o;
            let q = p * o;
            let r = b + m.b * (d - b);
            let s = a + m.b * (c - a);
            let t = s * s;
            let u = t * s;
            let v;
            if (h == 0) {
                v = k * (s - o) / 2 + l * (t - p) / 2 + j * (u - q) / 6;
            }
            else {
                v = (Math.pow(i + h * s, 3) - Math.pow(i + h * o, 3)) / (6 * h);
            }
            let w = 0.5 * n * r * Math.sin(s - o);
            if (v - w > e) {
                let x = 0.5 * (m.a + m.b);
                g.h(((() => {
                    let $ret = new SpiralTodo();
                    $ret.a = x;
                    $ret.b = m.b;
                    return $ret;
                })()));
                g.h(((() => {
                    let $ret = new SpiralTodo();
                    $ret.a = m.a;
                    $ret.b = x;
                    return $ret;
                })()));
            }
            else {
                f.add(m.a);
            }
        }
        f.add(1);
        return f;
    }
}
SpiralFlattener.$t = markType(SpiralFlattener, 'SpiralFlattener');
//# sourceMappingURL=SpiralFlattener.js.map
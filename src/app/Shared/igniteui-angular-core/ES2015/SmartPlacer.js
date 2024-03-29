/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "./type";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { RectUtil } from "./RectUtil";
import { MathUtil } from "./MathUtil";
/**
 * @hidden
 */
export class SmartPlacer extends Base {
    constructor() {
        super();
        this.e = null;
        this.c = 0;
        this.b = 0;
        this.a = new List$1(Rect.$, 0);
        this.e = Rect.empty;
        this.c = 0.3;
        this.b = 2;
    }
    d(a) {
        if (a == null) {
            return;
        }
        let b = 1.7976931348623157E+308;
        let c = Rect.empty;
        let d = 7;
        let e = false;
        let h = a.getSmartPositions();
        for (let g = 0; g < h.length; g++) {
            let f = h[g];
            let i = a.getSmartBounds(f);
            if (this.e.isEmpty || this.e.containsRect(i)) {
                let j = 0;
                for (let k of fromEnum(this.a)) {
                    j += RectUtil.i(i, k);
                }
                if (j == 0) {
                    b = j;
                    d = f;
                    c = i;
                    e = true;
                    break;
                }
                if (j < b) {
                    b = j;
                    d = f;
                    c = i;
                    e = true;
                }
            }
        }
        let l = 0;
        if (e) {
            l = b / RectUtil.e(c);
        }
        if (!e || l > this.c) {
            a.opacity = 0;
        }
        else {
            if (b > 0) {
                a.opacity = Math.pow(1 - MathUtil.b(0, l, 1), this.b);
            }
            else {
                a.opacity = 1;
            }
            a.smartPosition = d;
            this.a.add(c);
        }
    }
}
SmartPlacer.$t = markType(SmartPlacer, 'SmartPlacer');
//# sourceMappingURL=SmartPlacer.js.map
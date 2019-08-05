/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { DataSourceVelocityReading } from "./DataSourceVelocityReading";
import { dateNow } from "./date";
/**
 * @hidden
 */
export class DataSourceVelocityTracker extends Base {
    constructor() {
        super();
        this.f = 0;
        this.d = 6;
        this.a = null;
        this.b = 0;
        this.c = 0;
        this.f = this.g();
        this.c = 0;
        this.a = new Array(this.d);
    }
    i(a) {
        let b = this.e();
        this.a[this.b] = new DataSourceVelocityReading(a, b);
        this.b++;
        if (this.b > (this.d - 1)) {
            this.b = 0;
        }
    }
    h() {
        for (let a = 0; a < this.d; a++) {
            this.a[a] = null;
        }
    }
    j() {
        let a = 0x7FFFFFFF;
        let b = -2147483648;
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = this.e();
        for (let h = 0; h < this.d; h++) {
            if (this.a[h] == null) {
                continue;
            }
            if ((g - this.a[h].a) > 300) {
                continue;
            }
            if (this.a[h].a < a) {
                a = this.a[h].a;
                c = this.a[h].b.x;
                d = this.a[h].b.y;
            }
            if (this.a[h].a > b) {
                b = this.a[h].a;
                e = this.a[h].b.x;
                f = this.a[h].b.y;
            }
        }
        let i = b - a;
        i = Math.max(i, 16);
        let j = (i) / 1000;
        if (j == 0) {
            return { $type: Point_$type, x: c, y: d };
        }
        return { $type: Point_$type, x: (e - c) / j, y: (f - d) / j };
    }
    g() {
        let a = dateNow();
        return a.getTime();
    }
    e() {
        let a = (this.g() - this.f);
        if (a == this.c) {
            a += 1;
        }
        this.c = a;
        return a;
    }
}
DataSourceVelocityTracker.$t = markType(DataSourceVelocityTracker, 'DataSourceVelocityTracker');
//# sourceMappingURL=DataSourceVelocityTracker.js.map
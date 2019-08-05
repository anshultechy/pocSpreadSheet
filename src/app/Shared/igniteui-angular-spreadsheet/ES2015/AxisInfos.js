/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, EnumUtil, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { AxisInfo } from "./AxisInfo";
import { StraightNumericAxisBaseDescription } from "../../igniteui-angular-core/ES2015/StraightNumericAxisBaseDescription";
import { SpreadsheetChartAdapterHelpers } from "./SpreadsheetChartAdapterHelpers";
import { AxisDescription } from "../../igniteui-angular-core/ES2015/AxisDescription";
import { AxisLabelsLocation_$type } from "igniteui-angular-charts/ES2015/AxisLabelsLocation";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
/**
 * @hidden
 */
export class AxisInfos extends Base {
    constructor() {
        super();
        this.e = null;
        this.c = null;
        this.d = null;
        this.i = 0;
        this.h = 0;
        this.k = 0;
        this.j = 0;
        this.e = new List$1(AxisInfo.$, 0);
        this.c = new List$1(AxisInfo.$, 0);
        this.d = new List$1(AxisInfo.$, 0);
    }
    get f() {
        return this.c;
    }
    get g() {
        return this.d;
    }
    get b() {
        return this.e;
    }
    l(a) {
        this.e.add(a);
        if (a.g) {
            if (a.d) {
                this.h++;
            }
            else {
                this.i++;
            }
        }
        else {
            if (a.d) {
                this.j++;
            }
            else {
                this.k++;
            }
        }
        if (typeCast(StraightNumericAxisBaseDescription.$, a.a) !== null && a.b.minimumScaleIsAuto && a.b.maximumScaleIsAuto) {
            if (a.j) {
                this.f.add(a);
            }
            else if (a.k) {
                this.g.add(a);
            }
        }
    }
    m(a, b) {
        for (let c = 0; c < this.e.count; c++) {
            let d = this.e._inner[c];
            if ((a && d.g) || (a == false && d.h)) {
                if (d.d) {
                    if (false == d.c) {
                        this.e._inner[c] = (SpreadsheetChartAdapterHelpers.f(d.b, b));
                        this.e._inner[c].a.isDisabled = false;
                    }
                }
                else if (d.i) {
                    if (false == d.f) {
                        this.e._inner[c] = (SpreadsheetChartAdapterHelpers.h(d.b, b));
                        this.e._inner[c].a.isDisabled = false;
                    }
                }
            }
        }
    }
    n(a, b) {
        if (a) {
            if (this.i > 1) {
                return;
            }
            for (let c = 0; c < this.e.count; c++) {
                let d = this.e._inner[c];
                if (d.g && d.d) {
                    this.e._inner[c] = (SpreadsheetChartAdapterHelpers.i(d.b, b));
                    this.e._inner[c].a.labelLocation = EnumUtil.getName(AxisLabelsLocation_$type, (0));
                    this.e._inner[c].a.isDisabled = false;
                    break;
                }
            }
        }
        else {
            if (this.k > 1) {
                return;
            }
            for (let e = 0; e < this.e.count; e++) {
                let f = this.e._inner[e];
                if (f.h && f.d) {
                    this.e._inner[e] = SpreadsheetChartAdapterHelpers.i(f.b, b);
                    this.e._inner[e].a.labelLocation = EnumUtil.getName(AxisLabelsLocation_$type, (0));
                    this.e._inner[e].a.isDisabled = false;
                    break;
                }
            }
        }
    }
    a() {
        let a = new List$1(AxisDescription.$, 0);
        for (let b of fromEnum(this.e)) {
            a.add(b.a);
        }
        return Enumerable.a(AxisDescription.$, a);
    }
}
AxisInfos.$t = markType(AxisInfos, 'AxisInfos');
//# sourceMappingURL=AxisInfos.js.map

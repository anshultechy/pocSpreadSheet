/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { DomRenderer_$type } from "../../igniteui-angular-core/ES2015/dom";
import { Stack$1 } from "../../igniteui-angular-core/ES2015/Stack$1";
/**
 * @hidden
 */
export class SpreadsheetMeasureHelper_MeasureStack extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = new Stack$1(DomRenderer_$type);
        this.a.h(a);
    }
    get b() {
        return this.a.d();
    }
    e(a, b = null) {
        let c = this.b.createElement(a);
        if (b != null) {
            c.addClass(b);
        }
        return this.d(c);
    }
    f() {
        while (this.a.f > 2) {
            this.a.e();
        }
        if (this.a.f > 1) {
            let a = this.a.e();
            a.rootWrapper.remove();
        }
    }
    d(a) {
        this.b.append(a);
        this.a.h(this.b.getSubRenderer(a));
        return this.b;
    }
    c() {
        let a = this.a.e();
        a.rootWrapper.remove();
        return this.b;
    }
}
SpreadsheetMeasureHelper_MeasureStack.$t = markType(SpreadsheetMeasureHelper_MeasureStack, 'SpreadsheetMeasureHelper_MeasureStack');
//# sourceMappingURL=SpreadsheetMeasureHelper_MeasureStack.js.map
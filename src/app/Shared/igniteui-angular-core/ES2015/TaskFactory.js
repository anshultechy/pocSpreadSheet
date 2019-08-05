/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, getBoxIfEnum, typeCastObjTo$t, markType } from "./type";
import { Task } from "./Task";
import { TaskCompletionSource$1 } from "./TaskCompletionSource$1";
/**
 * @hidden
 */
export class TaskFactory extends Base {
    c(a, b) {
        return new Task(0, this.b(this.a(a)).always(() => b(a)));
    }
    d($tResult, a, b) {
        let c = new TaskCompletionSource$1($tResult, 0);
        this.b(this.a(a)).always(() => {
            try {
                let d = b(a);
                c.e(d);
            }
            catch (e) {
                c.d((e));
            }
        });
        return c.b;
    }
    e($tAntecedentResult, $tResult, a, b) {
        let c = (d) => getBoxIfEnum($tResult, b(d));
        return this.d(Base.$, a, c).j($tResult, (d) => typeCastObjTo$t($tResult, d.m));
    }
    a(a) {
        let b = new Array(a.length);
        for (let c = 0; c < a.length; c++) {
            b[c] = a[c].c;
        }
        return b;
    }
    b(a) {
        let promises_ = a;
        let b = null;
        return b;
    }
}
TaskFactory.$t = markType(TaskFactory, 'TaskFactory');
//# sourceMappingURL=TaskFactory.js.map
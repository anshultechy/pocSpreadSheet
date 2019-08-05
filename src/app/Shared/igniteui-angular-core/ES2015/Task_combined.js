/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType, typeCastObjTo$t, getBoxIfEnum } from "./type";
import { AggregateException } from "./AggregateException";
/**
 * @hidden
 */
export class Task extends Base {
    constructor(a, ..._rest) {
        super();
        this.c = null;
        this.b = false;
        this.a = null;
        this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        let h = () => {
                        };
                        let i = (j) => {
                            if (j == null) {
                                this.b = true;
                            }
                            else {
                                this.a = new AggregateException(2, "Exception occurred during task execution", j);
                            }
                        };
                        this.c = f.done(h).fail(i);
                        this.d = g;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = () => {
                    };
                    let f = (g) => {
                        if (g == null) {
                            this.b = true;
                        }
                        else {
                            this.a = new AggregateException(2, "Exception occurred during task execution", g);
                        }
                    };
                    this.c = c.done(e).fail(f);
                    this.d = d;
                }
                break;
        }
    }
    get g() {
        if (this.b) {
            return 6;
        }
        switch (this.c.state()) {
            case "pending": return 0;
            case "resolved": return 5;
            case "rejected": return 7;
            default: return 0;
        }
    }
    e(a) {
        let b = () => a(this);
        let c = (d) => a(this);
        let d = this.c.done(b).fail(c);
        return new Task(0, d);
    }
    f($tNewResult, a) {
        let b = new TaskCompletionSource$1($tNewResult, 0);
        let c = () => {
            try {
                let d = a(this);
                b.e(d);
            }
            catch (e) {
                b.d((e));
            }
        };
        let d = (e) => c();
        let e = (f) => c();
        this.c.done(d).fail(e);
        return b.b;
    }
}
Task.$t = markType(Task, 'Task');
/**
 * @hidden
 */
export class Task$1 extends Task {
    constructor($tResult, a, b) {
        super(1, a, b);
        this.$tResult = null;
        this.h = false;
        this.l = null;
        this.$tResult = $tResult;
        this.$type = this.$type.specialize(this.$tResult);
        let c = (d) => {
            let e = typeCastObjTo$t(this.$tResult, d);
            this.l = e;
            this.h = true;
        };
        let d = (e) => this.h = true;
        this.c.done(c).fail(d);
    }
    get m() {
        if (!this.h) {
            throw 'Result is not ready yet';
        }
        if (this.a != null) {
            throw this.a;
        }
        return this.l;
    }
    i(a) {
        return super.e((b) => a(b));
    }
    j($tNewResult, a) {
        let b = (c) => getBoxIfEnum($tNewResult, a(c));
        return this.k(Base.$, b).k($tNewResult, (c) => typeCastObjTo$t($tNewResult, c.m));
    }
    k($tNewResult, a) {
        return super.f($tNewResult, a);
    }
}
Task$1.$t = markType(Task$1, 'Task$1', Task.$);
/**
 * @hidden
 */
export class TaskCompletionSource$1 extends Base {
    constructor($tResult, a, ..._rest) {
        super();
        this.$tResult = null;
        this.a = null;
        this.b = null;
        this.$tResult = $tResult;
        this.$type = this.$type.specialize(this.$tResult);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [null];
                    {
                        let e = c[0];
                        this.b = new Task$1(this.$tResult, this.a.promise(), e);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.b = new Task$1(this.$tResult, this.a.promise(), c);
                }
                break;
        }
    }
    c() {
        this.a.reject(null);
    }
    d(a) {
        this.a.reject(a);
    }
    e(a) {
        this.a.resolve(getBoxIfEnum(this.$tResult, a));
    }
}
TaskCompletionSource$1.$t = markType(TaskCompletionSource$1, 'TaskCompletionSource$1');
//# sourceMappingURL=Task_combined.js.map
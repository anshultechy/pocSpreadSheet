/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, getBoxIfEnum, typeCastObjTo$t, markType } from "./type";
import { Task } from "./Task";
import { TaskCompletionSource$1 } from "./TaskCompletionSource$1";
/**
 * @hidden
 */
var TaskFactory = /** @class */ (function (_super) {
    tslib_1.__extends(TaskFactory, _super);
    function TaskFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskFactory.prototype.c = function (a, b) {
        return new Task(0, this.b(this.a(a)).always(function () { return b(a); }));
    };
    TaskFactory.prototype.d = function ($tResult, a, b) {
        var c = new TaskCompletionSource$1($tResult, 0);
        this.b(this.a(a)).always(function () {
            try {
                var d = b(a);
                c.e(d);
            }
            catch (e) {
                c.d((e));
            }
        });
        return c.b;
    };
    TaskFactory.prototype.e = function ($tAntecedentResult, $tResult, a, b) {
        var c = function (d) { return getBoxIfEnum($tResult, b(d)); };
        return this.d(Base.$, a, c).j($tResult, function (d) { return typeCastObjTo$t($tResult, d.m); });
    };
    TaskFactory.prototype.a = function (a) {
        var b = new Array(a.length);
        for (var c = 0; c < a.length; c++) {
            b[c] = a[c].c;
        }
        return b;
    };
    TaskFactory.prototype.b = function (a) {
        var promises_ = a;
        var b = null;
        return b;
    };
    TaskFactory.$t = markType(TaskFactory, 'TaskFactory');
    return TaskFactory;
}(Base));
export { TaskFactory };
//# sourceMappingURL=TaskFactory.js.map
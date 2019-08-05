/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType, typeCastObjTo$t, getBoxIfEnum } from "./type";
import { AggregateException } from "./AggregateException";
/**
 * @hidden
 */
var Task = /** @class */ (function (_super) {
    tslib_1.__extends(Task, _super);
    function Task(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.b = false;
        _this.a = null;
        _this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = function () {
                        };
                        var i = function (j) {
                            if (j == null) {
                                _this.b = true;
                            }
                            else {
                                _this.a = new AggregateException(2, "Exception occurred during task execution", j);
                            }
                        };
                        _this.c = f.done(h).fail(i);
                        _this.d = g;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = function () {
                    };
                    var f = function (g) {
                        if (g == null) {
                            _this.b = true;
                        }
                        else {
                            _this.a = new AggregateException(2, "Exception occurred during task execution", g);
                        }
                    };
                    _this.c = c.done(e).fail(f);
                    _this.d = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Task.prototype, "g", {
        get: function () {
            if (this.b) {
                return 6;
            }
            switch (this.c.state()) {
                case "pending": return 0;
                case "resolved": return 5;
                case "rejected": return 7;
                default: return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.e = function (a) {
        var _this = this;
        var b = function () { return a(_this); };
        var c = function (d) { return a(_this); };
        var d = this.c.done(b).fail(c);
        return new Task(0, d);
    };
    Task.prototype.f = function ($tNewResult, a) {
        var _this = this;
        var b = new TaskCompletionSource$1($tNewResult, 0);
        var c = function () {
            try {
                var d_1 = a(_this);
                b.e(d_1);
            }
            catch (e) {
                b.d((e));
            }
        };
        var d = function (e) { return c(); };
        var e = function (f) { return c(); };
        this.c.done(d).fail(e);
        return b.b;
    };
    Task.$t = markType(Task, 'Task');
    return Task;
}(Base));
export { Task };
/**
 * @hidden
 */
var Task$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Task$1, _super);
    function Task$1($tResult, a, b) {
        var _this = _super.call(this, 1, a, b) || this;
        _this.$tResult = null;
        _this.h = false;
        _this.l = null;
        _this.$tResult = $tResult;
        _this.$type = _this.$type.specialize(_this.$tResult);
        var c = function (d) {
            var e = typeCastObjTo$t(_this.$tResult, d);
            _this.l = e;
            _this.h = true;
        };
        var d = function (e) { return _this.h = true; };
        _this.c.done(c).fail(d);
        return _this;
    }
    Object.defineProperty(Task$1.prototype, "m", {
        get: function () {
            if (!this.h) {
                throw 'Result is not ready yet';
            }
            if (this.a != null) {
                throw this.a;
            }
            return this.l;
        },
        enumerable: true,
        configurable: true
    });
    Task$1.prototype.i = function (a) {
        return _super.prototype.e.call(this, function (b) { return a(b); });
    };
    Task$1.prototype.j = function ($tNewResult, a) {
        var b = function (c) { return getBoxIfEnum($tNewResult, a(c)); };
        return this.k(Base.$, b).k($tNewResult, function (c) { return typeCastObjTo$t($tNewResult, c.m); });
    };
    Task$1.prototype.k = function ($tNewResult, a) {
        return _super.prototype.f.call(this, $tNewResult, a);
    };
    Task$1.$t = markType(Task$1, 'Task$1', Task.$);
    return Task$1;
}(Task));
export { Task$1 };
/**
 * @hidden
 */
var TaskCompletionSource$1 = /** @class */ (function (_super) {
    tslib_1.__extends(TaskCompletionSource$1, _super);
    function TaskCompletionSource$1($tResult, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$tResult = null;
        _this.a = null;
        _this.b = null;
        _this.$tResult = $tResult;
        _this.$type = _this.$type.specialize(_this.$tResult);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [null];
                    {
                        var e = c[0];
                        _this.b = new Task$1(_this.$tResult, _this.a.promise(), e);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.b = new Task$1(_this.$tResult, _this.a.promise(), c);
                }
                break;
        }
        return _this;
    }
    TaskCompletionSource$1.prototype.c = function () {
        this.a.reject(null);
    };
    TaskCompletionSource$1.prototype.d = function (a) {
        this.a.reject(a);
    };
    TaskCompletionSource$1.prototype.e = function (a) {
        this.a.resolve(getBoxIfEnum(this.$tResult, a));
    };
    TaskCompletionSource$1.$t = markType(TaskCompletionSource$1, 'TaskCompletionSource$1');
    return TaskCompletionSource$1;
}(Base));
export { TaskCompletionSource$1 };
//# sourceMappingURL=Task_combined.js.map
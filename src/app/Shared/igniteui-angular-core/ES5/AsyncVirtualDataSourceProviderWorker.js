/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, typeCast, markType } from "./type";
import { AsyncDataSourcePageRequest } from "./AsyncDataSourcePageRequest";
import { WeakReference } from "./WeakReference";
import { IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";
import { LinkedList$1 } from "./LinkedList$1";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var AsyncVirtualDataSourceProviderWorker = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncVirtualDataSourceProviderWorker, _super);
    function AsyncVirtualDataSourceProviderWorker(a) {
        var _this = _super.call(this) || this;
        _this.q = new LinkedList$1(AsyncDataSourcePageRequest.$);
        _this.o = new List$1(AsyncDataSourcePageRequest.$, 0);
        _this.ab = {};
        _this.h = true;
        _this.t = 0;
        _this.s = 0;
        _this.u = 0;
        _this.c = null;
        _this.r = -1;
        _this.ap = null;
        _this.ao = null;
        _this.g = false;
        _this._isShutdown = false;
        _this.f = false;
        _this.h = true;
        _this.t = a.pageSizeRequested;
        _this.s = _this.t;
        _this.u = a.timeoutMilliseconds;
        _this.ap = new WeakReference(a.pageLoaded);
        _this.ao = new WeakReference(a.executionContext);
        return _this;
    }
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "tasks", {
        get: function () {
            return this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "pageLoaded", {
        get: function () {
            if (this.ap == null) {
                return null;
            }
            return this.ap.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "executionContext", {
        get: function () {
            if (this.ao == null) {
                return null;
            }
            return this.ao.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "actualPageSize", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "actualCount", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "actualSchema", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "populatedActualPageSize", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "isRunning", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncVirtualDataSourceProviderWorker.prototype.addPageRequest = function (a, b) {
        return this.addPageRequestWithRetry(a, b, 200);
    };
    AsyncVirtualDataSourceProviderWorker.prototype.addPageRequestWithRetry = function (a, b, c) {
        if (this.isShutdown) {
            return false;
        }
        if (b == 2) {
            this.q.e(new AsyncDataSourcePageRequest(a, c));
        }
        else {
            this.q.f(new AsyncDataSourcePageRequest(a, c));
        }
        return true;
    };
    AsyncVirtualDataSourceProviderWorker.prototype.removePageRequest = function (a) {
        var b = null;
        var c = this.q.c;
        while (c != null) {
            var d = c.c;
            if (d.index == a) {
                b = c;
                break;
            }
            c = c.a;
        }
        if (b != null) {
            this.q.h(b);
        }
    };
    Object.defineProperty(AsyncVirtualDataSourceProviderWorker.prototype, "isShutdown", {
        get: function () {
            return this._isShutdown;
        },
        set: function (a) {
            this._isShutdown = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncVirtualDataSourceProviderWorker.prototype.removeAllPageRequests = function () {
        this.q.g();
    };
    AsyncVirtualDataSourceProviderWorker.prototype.shutdown = function () {
        this.ap = null;
        this.ao = null;
        this.isShutdown = true;
        this.h = false;
    };
    AsyncVirtualDataSourceProviderWorker.prototype.initialize = function () {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.getTaskDataHolder = function () {
        return null;
    };
    AsyncVirtualDataSourceProviderWorker.prototype.getTasksData = function (a) {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.removeCompletedTaskData = function (a, b) {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.getCompletedTaskData = function (a, b) {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.runATask = function () {
        for (var a = 0; a < this.o.count; a++) {
            if (!this.o.item(a).taskHolder.task.isRunning && !this.o.item(a).isDone && !this.o.item(a).taskHolder.task.isCompleted && !this.o.item(a).taskHolder.task.isCancelled) {
                this.o.item(a).taskHolder.task.isRunning = true;
                this.o.item(a).taskHolder.task.run();
                break;
            }
        }
    };
    AsyncVirtualDataSourceProviderWorker.prototype.checkAndPotentiallyWaitOnTasks = function (a) {
        this.runATask();
        for (var b = 0; b < a.length; b++) {
            if (a[b].isDone || a[b].taskHolder.task.isCompleted || a[b].taskHolder.task.isCancelled) {
                return b;
            }
        }
        return -1;
    };
    AsyncVirtualDataSourceProviderWorker.prototype.doWork = function () {
        if (!this.f) {
            this.f = true;
            this.initialize();
        }
        {
            var a = null;
            var b = null;
            var c = this.o.count;
            if (this.q.c != null && c < 2) {
                var d = this.q.c;
                this.q.i();
                this.makeTaskForRequest(d.c, d.c.retryDelay);
                c = this.o.count;
            }
            if (c > 0) {
                a = new Array(c);
                for (var e = 0; e < c; e++) {
                    a[e] = this.o.item(e);
                }
                b = this.getTaskDataHolder();
                this.getTasksData(b);
            }
            if (a != null && a.length > 0) {
                var f = this.checkAndPotentiallyWaitOnTasks(a);
                if (!this.h) {
                    return;
                }
                if (f >= 0) {
                    var g = a[f];
                    this.getCompletedTaskData(b, f);
                    this.o.remove(g);
                    this.removeCompletedTaskData(b, f);
                    this.processCompletedTask(g.taskHolder, g.retryDelay, g.index, b);
                }
            }
            else {
            }
            if (!this.h) {
                return;
            }
            if (this.h) {
                window.setTimeout(runOn(this, this.doWork), 100);
            }
        }
    };
    AsyncVirtualDataSourceProviderWorker.prototype.makeTaskForRequest = function (a, b) {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.processCompletedTask = function (a, b, c, d) {
    };
    AsyncVirtualDataSourceProviderWorker.prototype.retryIndex = function (a, b) {
        var _this = this;
        var c = b * 2;
        if (b > 20000) {
            this.removePageRequest(a);
        }
        if (this.ao == null) {
            this.shutdown();
            return;
        }
        var d = typeCast(IDataSourceExecutionContext_$type, this.ao.c);
        if (d == null) {
            this.shutdown();
            return;
        }
        d.executeDelayed(function () { return _this.addPageRequestWithRetry(a, 0, c); }, b);
    };
    AsyncVirtualDataSourceProviderWorker.prototype.isLastPage = function (a) {
        if (this.r < 0) {
            return false;
        }
        if ((this.r - (a * this.s)) < this.s) {
            return true;
        }
        return false;
    };
    AsyncVirtualDataSourceProviderWorker.$t = markType(AsyncVirtualDataSourceProviderWorker, 'AsyncVirtualDataSourceProviderWorker');
    AsyncVirtualDataSourceProviderWorker.maxSimultaneousExecutingTasks = 2;
    AsyncVirtualDataSourceProviderWorker.maxRetryDelay = 20000;
    AsyncVirtualDataSourceProviderWorker.initialRetryDelay = 200;
    return AsyncVirtualDataSourceProviderWorker;
}(Base));
export { AsyncVirtualDataSourceProviderWorker };
//# sourceMappingURL=AsyncVirtualDataSourceProviderWorker.js.map
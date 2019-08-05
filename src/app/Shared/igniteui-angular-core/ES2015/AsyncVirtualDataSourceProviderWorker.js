/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, typeCast, markType } from "./type";
import { AsyncDataSourcePageRequest } from "./AsyncDataSourcePageRequest";
import { WeakReference } from "./WeakReference";
import { IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";
import { LinkedList$1 } from "./LinkedList$1";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class AsyncVirtualDataSourceProviderWorker extends Base {
    constructor(a) {
        super();
        this.q = new LinkedList$1(AsyncDataSourcePageRequest.$);
        this.o = new List$1(AsyncDataSourcePageRequest.$, 0);
        this.ab = {};
        this.h = true;
        this.t = 0;
        this.s = 0;
        this.u = 0;
        this.c = null;
        this.r = -1;
        this.ap = null;
        this.ao = null;
        this.g = false;
        this._isShutdown = false;
        this.f = false;
        this.h = true;
        this.t = a.pageSizeRequested;
        this.s = this.t;
        this.u = a.timeoutMilliseconds;
        this.ap = new WeakReference(a.pageLoaded);
        this.ao = new WeakReference(a.executionContext);
    }
    get tasks() {
        return this.o;
    }
    get pageLoaded() {
        if (this.ap == null) {
            return null;
        }
        return this.ap.c;
    }
    get executionContext() {
        if (this.ao == null) {
            return null;
        }
        return this.ao.c;
    }
    get actualPageSize() {
        return this.s;
    }
    set actualPageSize(a) {
        this.s = a;
    }
    get actualCount() {
        return this.r;
    }
    set actualCount(a) {
        this.r = a;
    }
    get actualSchema() {
        return this.c;
    }
    set actualSchema(a) {
        this.c = a;
    }
    get populatedActualPageSize() {
        return this.g;
    }
    set populatedActualPageSize(a) {
        this.g = a;
    }
    get isRunning() {
        return this.h;
    }
    set isRunning(a) {
        this.h = a;
    }
    addPageRequest(a, b) {
        return this.addPageRequestWithRetry(a, b, 200);
    }
    addPageRequestWithRetry(a, b, c) {
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
    }
    removePageRequest(a) {
        let b = null;
        let c = this.q.c;
        while (c != null) {
            let d = c.c;
            if (d.index == a) {
                b = c;
                break;
            }
            c = c.a;
        }
        if (b != null) {
            this.q.h(b);
        }
    }
    get isShutdown() {
        return this._isShutdown;
    }
    set isShutdown(a) {
        this._isShutdown = a;
    }
    removeAllPageRequests() {
        this.q.g();
    }
    shutdown() {
        this.ap = null;
        this.ao = null;
        this.isShutdown = true;
        this.h = false;
    }
    initialize() {
    }
    getTaskDataHolder() {
        return null;
    }
    getTasksData(a) {
    }
    removeCompletedTaskData(a, b) {
    }
    getCompletedTaskData(a, b) {
    }
    runATask() {
        for (let a = 0; a < this.o.count; a++) {
            if (!this.o.item(a).taskHolder.task.isRunning && !this.o.item(a).isDone && !this.o.item(a).taskHolder.task.isCompleted && !this.o.item(a).taskHolder.task.isCancelled) {
                this.o.item(a).taskHolder.task.isRunning = true;
                this.o.item(a).taskHolder.task.run();
                break;
            }
        }
    }
    checkAndPotentiallyWaitOnTasks(a) {
        this.runATask();
        for (let b = 0; b < a.length; b++) {
            if (a[b].isDone || a[b].taskHolder.task.isCompleted || a[b].taskHolder.task.isCancelled) {
                return b;
            }
        }
        return -1;
    }
    doWork() {
        if (!this.f) {
            this.f = true;
            this.initialize();
        }
        {
            let a = null;
            let b = null;
            let c = this.o.count;
            if (this.q.c != null && c < 2) {
                let d = this.q.c;
                this.q.i();
                this.makeTaskForRequest(d.c, d.c.retryDelay);
                c = this.o.count;
            }
            if (c > 0) {
                a = new Array(c);
                for (let e = 0; e < c; e++) {
                    a[e] = this.o.item(e);
                }
                b = this.getTaskDataHolder();
                this.getTasksData(b);
            }
            if (a != null && a.length > 0) {
                let f = this.checkAndPotentiallyWaitOnTasks(a);
                if (!this.h) {
                    return;
                }
                if (f >= 0) {
                    let g = a[f];
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
    }
    makeTaskForRequest(a, b) {
    }
    processCompletedTask(a, b, c, d) {
    }
    retryIndex(a, b) {
        let c = b * 2;
        if (b > 20000) {
            this.removePageRequest(a);
        }
        if (this.ao == null) {
            this.shutdown();
            return;
        }
        let d = typeCast(IDataSourceExecutionContext_$type, this.ao.c);
        if (d == null) {
            this.shutdown();
            return;
        }
        d.executeDelayed(() => this.addPageRequestWithRetry(a, 0, c), b);
    }
    isLastPage(a) {
        if (this.r < 0) {
            return false;
        }
        if ((this.r - (a * this.s)) < this.s) {
            return true;
        }
        return false;
    }
}
AsyncVirtualDataSourceProviderWorker.$t = markType(AsyncVirtualDataSourceProviderWorker, 'AsyncVirtualDataSourceProviderWorker');
AsyncVirtualDataSourceProviderWorker.maxSimultaneousExecutingTasks = 2;
AsyncVirtualDataSourceProviderWorker.maxRetryDelay = 20000;
AsyncVirtualDataSourceProviderWorker.initialRetryDelay = 200;
//# sourceMappingURL=AsyncVirtualDataSourceProviderWorker.js.map
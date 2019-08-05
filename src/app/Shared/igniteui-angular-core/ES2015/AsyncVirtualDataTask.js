/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class AsyncVirtualDataTask extends Base {
    constructor() {
        super(...arguments);
        this._hasErrors = false;
        this._isRunning = false;
        this._isCancelled = false;
        this._isCompleted = false;
        this._result = null;
        this._run = null;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(a) {
        this._hasErrors = a;
    }
    get isRunning() {
        return this._isRunning;
    }
    set isRunning(a) {
        this._isRunning = a;
    }
    get isCancelled() {
        return this._isCancelled;
    }
    set isCancelled(a) {
        this._isCancelled = a;
    }
    get isCompleted() {
        return this._isCompleted;
    }
    set isCompleted(a) {
        this._isCompleted = a;
    }
    get result() {
        return this._result;
    }
    set result(a) {
        this._result = a;
    }
    get run() {
        return this._run;
    }
    set run(a) {
        this._run = a;
    }
}
AsyncVirtualDataTask.$t = markType(AsyncVirtualDataTask, 'AsyncVirtualDataTask');
//# sourceMappingURL=AsyncVirtualDataTask.js.map
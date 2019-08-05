/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var AsyncVirtualDataTask = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncVirtualDataTask, _super);
    function AsyncVirtualDataTask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hasErrors = false;
        _this._isRunning = false;
        _this._isCancelled = false;
        _this._isCompleted = false;
        _this._result = null;
        _this._run = null;
        return _this;
    }
    Object.defineProperty(AsyncVirtualDataTask.prototype, "hasErrors", {
        get: function () {
            return this._hasErrors;
        },
        set: function (a) {
            this._hasErrors = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataTask.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        set: function (a) {
            this._isRunning = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataTask.prototype, "isCancelled", {
        get: function () {
            return this._isCancelled;
        },
        set: function (a) {
            this._isCancelled = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataTask.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        set: function (a) {
            this._isCompleted = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataTask.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (a) {
            this._result = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataTask.prototype, "run", {
        get: function () {
            return this._run;
        },
        set: function (a) {
            this._run = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncVirtualDataTask.$t = markType(AsyncVirtualDataTask, 'AsyncVirtualDataTask');
    return AsyncVirtualDataTask;
}(Base));
export { AsyncVirtualDataTask };
//# sourceMappingURL=AsyncVirtualDataTask.js.map
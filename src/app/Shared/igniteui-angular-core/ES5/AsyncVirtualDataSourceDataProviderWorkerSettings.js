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
var AsyncVirtualDataSourceDataProviderWorkerSettings = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncVirtualDataSourceDataProviderWorkerSettings, _super);
    function AsyncVirtualDataSourceDataProviderWorkerSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pageSizeRequested = 0;
        _this._timeoutMilliseconds = 0;
        _this._pageLoaded = null;
        _this._executionContext = null;
        return _this;
    }
    Object.defineProperty(AsyncVirtualDataSourceDataProviderWorkerSettings.prototype, "pageSizeRequested", {
        get: function () {
            return this._pageSizeRequested;
        },
        set: function (a) {
            this._pageSizeRequested = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceDataProviderWorkerSettings.prototype, "timeoutMilliseconds", {
        get: function () {
            return this._timeoutMilliseconds;
        },
        set: function (a) {
            this._timeoutMilliseconds = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceDataProviderWorkerSettings.prototype, "pageLoaded", {
        get: function () {
            return this._pageLoaded;
        },
        set: function (a) {
            this._pageLoaded = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncVirtualDataSourceDataProviderWorkerSettings.prototype, "executionContext", {
        get: function () {
            return this._executionContext;
        },
        set: function (a) {
            this._executionContext = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncVirtualDataSourceDataProviderWorkerSettings.$t = markType(AsyncVirtualDataSourceDataProviderWorkerSettings, 'AsyncVirtualDataSourceDataProviderWorkerSettings');
    return AsyncVirtualDataSourceDataProviderWorkerSettings;
}(Base));
export { AsyncVirtualDataSourceDataProviderWorkerSettings };
//# sourceMappingURL=AsyncVirtualDataSourceDataProviderWorkerSettings.js.map
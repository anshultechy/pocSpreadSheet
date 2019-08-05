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
export class AsyncVirtualDataSourceDataProviderWorkerSettings extends Base {
    constructor() {
        super(...arguments);
        this._pageSizeRequested = 0;
        this._timeoutMilliseconds = 0;
        this._pageLoaded = null;
        this._executionContext = null;
    }
    get pageSizeRequested() {
        return this._pageSizeRequested;
    }
    set pageSizeRequested(a) {
        this._pageSizeRequested = a;
    }
    get timeoutMilliseconds() {
        return this._timeoutMilliseconds;
    }
    set timeoutMilliseconds(a) {
        this._timeoutMilliseconds = a;
    }
    get pageLoaded() {
        return this._pageLoaded;
    }
    set pageLoaded(a) {
        this._pageLoaded = a;
    }
    get executionContext() {
        return this._executionContext;
    }
    set executionContext(a) {
        this._executionContext = a;
    }
}
AsyncVirtualDataSourceDataProviderWorkerSettings.$t = markType(AsyncVirtualDataSourceDataProviderWorkerSettings, 'AsyncVirtualDataSourceDataProviderWorkerSettings');
//# sourceMappingURL=AsyncVirtualDataSourceDataProviderWorkerSettings.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";
/**
 * @hidden
 */
export class DataSourceExecutionContext extends Base {
    constructor() {
        super();
        this._requestAnimationFrame = null;
        this.requestAnimationFrame = (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });
    }
    get requestAnimationFrame() {
        return this._requestAnimationFrame;
    }
    set requestAnimationFrame(a) {
        this._requestAnimationFrame = a;
    }
    enqueueAction(a) {
        window.setTimeout(() => a(), 0);
    }
    execute(a) {
        window.setTimeout(() => a(), 0);
    }
    executeDelayed(a, b) {
        window.setTimeout(() => a(), b);
    }
}
DataSourceExecutionContext.$t = markType(DataSourceExecutionContext, 'DataSourceExecutionContext', Base.$, [IDataSourceExecutionContext_$type]);
//# sourceMappingURL=DataSourceExecutionContext.js.map
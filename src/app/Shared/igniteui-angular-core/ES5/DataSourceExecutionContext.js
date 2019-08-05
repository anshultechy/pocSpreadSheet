/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IDataSourceExecutionContext_$type } from "./IDataSourceExecutionContext";
/**
 * @hidden
 */
var DataSourceExecutionContext = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceExecutionContext, _super);
    function DataSourceExecutionContext() {
        var _this = _super.call(this) || this;
        _this._requestAnimationFrame = null;
        _this.requestAnimationFrame = (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });
        return _this;
    }
    Object.defineProperty(DataSourceExecutionContext.prototype, "requestAnimationFrame", {
        get: function () {
            return this._requestAnimationFrame;
        },
        set: function (a) {
            this._requestAnimationFrame = a;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceExecutionContext.prototype.enqueueAction = function (a) {
        window.setTimeout(function () { return a(); }, 0);
    };
    DataSourceExecutionContext.prototype.execute = function (a) {
        window.setTimeout(function () { return a(); }, 0);
    };
    DataSourceExecutionContext.prototype.executeDelayed = function (a, b) {
        window.setTimeout(function () { return a(); }, b);
    };
    DataSourceExecutionContext.$t = markType(DataSourceExecutionContext, 'DataSourceExecutionContext', Base.$, [IDataSourceExecutionContext_$type]);
    return DataSourceExecutionContext;
}(Base));
export { DataSourceExecutionContext };
//# sourceMappingURL=DataSourceExecutionContext.js.map
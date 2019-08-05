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
var AsyncDataSourcePageRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncDataSourcePageRequest, _super);
    function AsyncDataSourcePageRequest(a, b) {
        var _this = _super.call(this) || this;
        _this.e = 0;
        _this.f = 0;
        _this.a = null;
        _this.c = false;
        _this.e = a;
        _this.f = b;
        return _this;
    }
    Object.defineProperty(AsyncDataSourcePageRequest.prototype, "index", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncDataSourcePageRequest.prototype, "retryDelay", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncDataSourcePageRequest.prototype, "taskHolder", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncDataSourcePageRequest.prototype, "isDone", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    AsyncDataSourcePageRequest.$t = markType(AsyncDataSourcePageRequest, 'AsyncDataSourcePageRequest');
    return AsyncDataSourcePageRequest;
}(Base));
export { AsyncDataSourcePageRequest };
//# sourceMappingURL=AsyncDataSourcePageRequest.js.map
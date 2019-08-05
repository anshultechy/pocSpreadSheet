/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var FastItemsSourceEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemsSourceEventArgs, _super);
    function FastItemsSourceEventArgs(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this) || this;
                    _this._action = 0;
                    _this._position = 0;
                    _this._count = 0;
                    _this._propertyName = null;
                    _this.action = c;
                    _this.position = d;
                    _this.count = e;
                    _this.propertyName = null;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this) || this;
                    _this._action = 0;
                    _this._position = 0;
                    _this._count = 0;
                    _this._propertyName = null;
                    _this.action = 3;
                    _this.position = c;
                    _this.count = 1;
                    _this.propertyName = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(FastItemsSourceEventArgs.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (a) {
            this._action = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemsSourceEventArgs.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (a) {
            this._position = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemsSourceEventArgs.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (a) {
            this._count = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FastItemsSourceEventArgs.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            this._propertyName = a;
        },
        enumerable: true,
        configurable: true
    });
    FastItemsSourceEventArgs.$t = markType(FastItemsSourceEventArgs, 'FastItemsSourceEventArgs', EventArgs.$);
    return FastItemsSourceEventArgs;
}(EventArgs));
export { FastItemsSourceEventArgs };
//# sourceMappingURL=FastItemsSourceEventArgs.js.map
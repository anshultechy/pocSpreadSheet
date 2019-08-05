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
var DataTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(DataTemplate, _super);
    function DataTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._render = null;
        _this._measure = null;
        _this._passStarting = null;
        _this._passCompleted = null;
        return _this;
    }
    Object.defineProperty(DataTemplate.prototype, "render", {
        get: function () {
            return this._render;
        },
        set: function (a) {
            this._render = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTemplate.prototype, "measure", {
        get: function () {
            return this._measure;
        },
        set: function (a) {
            this._measure = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTemplate.prototype, "passStarting", {
        get: function () {
            return this._passStarting;
        },
        set: function (a) {
            this._passStarting = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTemplate.prototype, "passCompleted", {
        get: function () {
            return this._passCompleted;
        },
        set: function (a) {
            this._passCompleted = a;
        },
        enumerable: true,
        configurable: true
    });
    DataTemplate.$t = markType(DataTemplate, 'DataTemplate');
    return DataTemplate;
}(Base));
export { DataTemplate };
//# sourceMappingURL=DataTemplate.js.map
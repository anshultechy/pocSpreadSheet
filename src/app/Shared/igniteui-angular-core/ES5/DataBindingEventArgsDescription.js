/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var DataBindingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DataBindingEventArgsDescription, _super);
    function DataBindingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    DataBindingEventArgsDescription.prototype.get_type = function () {
        return "DataBindingEventArgs";
    };
    Object.defineProperty(DataBindingEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingEventArgsDescription.prototype, "resolvedValueRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ResolvedValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBindingEventArgsDescription.prototype, "rowObjectRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("RowObjectRef");
        },
        enumerable: true,
        configurable: true
    });
    DataBindingEventArgsDescription.$t = markType(DataBindingEventArgsDescription, 'DataBindingEventArgsDescription', Description.$);
    return DataBindingEventArgsDescription;
}(Description));
export { DataBindingEventArgsDescription };
//# sourceMappingURL=DataBindingEventArgsDescription.js.map
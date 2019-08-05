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
var SelectedItemChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemChangedEventArgsDescription, _super);
    function SelectedItemChangedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    SelectedItemChangedEventArgsDescription.prototype.get_type = function () {
        return "SelectedItemChangedEventArgs";
    };
    Object.defineProperty(SelectedItemChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedItemChangedEventArgsDescription.prototype, "oldItemRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("OldItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedItemChangedEventArgsDescription.prototype, "newItemRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("NewItemRef");
        },
        enumerable: true,
        configurable: true
    });
    SelectedItemChangedEventArgsDescription.$t = markType(SelectedItemChangedEventArgsDescription, 'SelectedItemChangedEventArgsDescription', Description.$);
    return SelectedItemChangedEventArgsDescription;
}(Description));
export { SelectedItemChangedEventArgsDescription };
//# sourceMappingURL=SelectedItemChangedEventArgsDescription.js.map
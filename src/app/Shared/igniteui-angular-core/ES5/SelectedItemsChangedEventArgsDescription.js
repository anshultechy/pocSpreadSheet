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
var SelectedItemsChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemsChangedEventArgsDescription, _super);
    function SelectedItemsChangedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.f = null;
        return _this;
    }
    SelectedItemsChangedEventArgsDescription.prototype.get_type = function () {
        return "SelectedItemsChangedEventArgs";
    };
    Object.defineProperty(SelectedItemsChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedItemsChangedEventArgsDescription.prototype, "oldItemsRef", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("OldItemsRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedItemsChangedEventArgsDescription.prototype, "newItemsRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("NewItemsRef");
        },
        enumerable: true,
        configurable: true
    });
    SelectedItemsChangedEventArgsDescription.$t = markType(SelectedItemsChangedEventArgsDescription, 'SelectedItemsChangedEventArgsDescription', Description.$);
    return SelectedItemsChangedEventArgsDescription;
}(Description));
export { SelectedItemsChangedEventArgsDescription };
//# sourceMappingURL=SelectedItemsChangedEventArgsDescription.js.map
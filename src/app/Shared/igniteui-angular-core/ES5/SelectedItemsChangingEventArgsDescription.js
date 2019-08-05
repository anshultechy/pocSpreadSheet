/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SelectedItemsChangedEventArgsDescription } from "./SelectedItemsChangedEventArgsDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var SelectedItemsChangingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemsChangingEventArgsDescription, _super);
    function SelectedItemsChangingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.k = false;
        return _this;
    }
    SelectedItemsChangingEventArgsDescription.prototype.get_type = function () {
        return "SelectedItemsChangingEventArgs";
    };
    Object.defineProperty(SelectedItemsChangingEventArgsDescription.prototype, "cancel", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("Cancel");
        },
        enumerable: true,
        configurable: true
    });
    SelectedItemsChangingEventArgsDescription.$t = markType(SelectedItemsChangingEventArgsDescription, 'SelectedItemsChangingEventArgsDescription', SelectedItemsChangedEventArgsDescription.$);
    return SelectedItemsChangingEventArgsDescription;
}(SelectedItemsChangedEventArgsDescription));
export { SelectedItemsChangingEventArgsDescription };
//# sourceMappingURL=SelectedItemsChangingEventArgsDescription.js.map
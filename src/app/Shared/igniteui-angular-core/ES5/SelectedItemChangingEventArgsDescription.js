/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SelectedItemChangedEventArgsDescription } from "./SelectedItemChangedEventArgsDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var SelectedItemChangingEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedItemChangingEventArgsDescription, _super);
    function SelectedItemChangingEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.k = false;
        return _this;
    }
    SelectedItemChangingEventArgsDescription.prototype.get_type = function () {
        return "SelectedItemChangingEventArgs";
    };
    Object.defineProperty(SelectedItemChangingEventArgsDescription.prototype, "cancel", {
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
    SelectedItemChangingEventArgsDescription.$t = markType(SelectedItemChangingEventArgsDescription, 'SelectedItemChangingEventArgsDescription', SelectedItemChangedEventArgsDescription.$);
    return SelectedItemChangingEventArgsDescription;
}(SelectedItemChangedEventArgsDescription));
export { SelectedItemChangingEventArgsDescription };
//# sourceMappingURL=SelectedItemChangingEventArgsDescription.js.map
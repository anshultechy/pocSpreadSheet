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
var HoleDimensionsChangedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HoleDimensionsChangedEventArgsDescription, _super);
    function HoleDimensionsChangedEventArgsDescription() {
        return _super.call(this) || this;
    }
    HoleDimensionsChangedEventArgsDescription.prototype.get_type = function () {
        return "HoleDimensionsChangedEventArgs";
    };
    Object.defineProperty(HoleDimensionsChangedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    HoleDimensionsChangedEventArgsDescription.$t = markType(HoleDimensionsChangedEventArgsDescription, 'HoleDimensionsChangedEventArgsDescription', Description.$);
    return HoleDimensionsChangedEventArgsDescription;
}(Description));
export { HoleDimensionsChangedEventArgsDescription };
//# sourceMappingURL=HoleDimensionsChangedEventArgsDescription.js.map
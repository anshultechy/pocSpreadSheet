/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "./type";
/**
 * @hidden
 */
var DependencyObjectNotifier = /** @class */ (function (_super) {
    tslib_1.__extends(DependencyObjectNotifier, _super);
    function DependencyObjectNotifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propertyChanged = null;
        return _this;
    }
    DependencyObjectNotifier.prototype.j = function (a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    };
    DependencyObjectNotifier.$t = markType(DependencyObjectNotifier, 'DependencyObjectNotifier', DependencyObject.$, [INotifyPropertyChanged_$type]);
    return DependencyObjectNotifier;
}(DependencyObject));
export { DependencyObjectNotifier };
//# sourceMappingURL=DependencyObjectNotifier.js.map
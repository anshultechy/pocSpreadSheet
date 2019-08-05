/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var PropertyChangeNotifier = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangeNotifier, _super);
    function PropertyChangeNotifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propertyChanged = null;
        return _this;
    }
    PropertyChangeNotifier.prototype.a = function (a) {
        var b = this.propertyChanged;
        if (b != null) {
            b(this, new PropertyChangedEventArgs(a));
        }
    };
    PropertyChangeNotifier.$t = markType(PropertyChangeNotifier, 'PropertyChangeNotifier', Base.$, [INotifyPropertyChanged_$type]);
    return PropertyChangeNotifier;
}(Base));
export { PropertyChangeNotifier };
//# sourceMappingURL=PropertyChangeNotifier.js.map

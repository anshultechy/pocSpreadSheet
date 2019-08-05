/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { Base, String_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { ListenerList } from "./ListenerList";
/**
 * @hidden
 */
var PropertyChangeNotifierExtended = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangeNotifierExtended, _super);
    function PropertyChangeNotifierExtended() {
        var _this = _super.call(this) || this;
        _this.b = null;
        return _this;
    }
    PropertyChangeNotifierExtended.prototype.a = function (a) {
        _super.prototype.a.call(this, a);
        this.d(this, a, null);
    };
    PropertyChangeNotifierExtended.prototype.addListener = function (a, b) {
        this.b = ListenerList.add2(this.b, a, b);
    };
    PropertyChangeNotifierExtended.prototype.d = function (a, b, c) {
        this.e(a, b, c);
    };
    PropertyChangeNotifierExtended.prototype.e = function (a, b, c) {
        if (null != this.b) {
            ListenerList.aj(Base.$, String_$type, this.b, a, b, c);
        }
    };
    PropertyChangeNotifierExtended.prototype.removeListener = function (a) {
        this.b = ListenerList.remove2(this.b, a);
    };
    PropertyChangeNotifierExtended.prototype.onPropertyValueChanged = function (a, b, c) {
        this.d(a, b, c);
    };
    PropertyChangeNotifierExtended.$t = markType(PropertyChangeNotifierExtended, 'PropertyChangeNotifierExtended', PropertyChangeNotifier.$, [ISupportPropertyChangeNotifications_$type, IPropertyChangeListener_$type]);
    return PropertyChangeNotifierExtended;
}(PropertyChangeNotifier));
export { PropertyChangeNotifierExtended };
//# sourceMappingURL=PropertyChangeNotifierExtended.js.map

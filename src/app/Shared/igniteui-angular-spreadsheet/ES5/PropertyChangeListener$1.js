/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PropertyChangeListenerBase } from "./PropertyChangeListenerBase";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { typeCastObjTo$t, markType } from "../../igniteui-angular-core/ES5/type";
import { ListenerList } from "./ListenerList";
import { CoreUtilities } from "./CoreUtilities";
import { WeakReference } from "../../igniteui-angular-core/ES5/WeakReference";
/**
 * @hidden
 */
var PropertyChangeListener$1 = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyChangeListener$1, _super);
    function PropertyChangeListener$1($tOwner, a, b, c) {
        var _this = _super.call(this) || this;
        _this.$tOwner = null;
        _this.d = null;
        _this.c = null;
        _this.$tOwner = $tOwner;
        _this.$type = _this.$type.specialize(_this.$tOwner);
        CoreUtilities.y(a);
        _this.d = c ? new WeakReference(a) : a;
        _this.c = b;
        return _this;
    }
    Object.defineProperty(PropertyChangeListener$1.prototype, "b", {
        get: function () {
            return typeCastObjTo$t(this.$tOwner, ListenerList.ag(this.d));
        },
        enumerable: true,
        configurable: true
    });
    PropertyChangeListener$1.prototype.onPropertyValueChanged = function (a, b, c) {
        var d = this.b;
        if (null != d && null != this.c) {
            this.c(d, a, b, c);
        }
    };
    PropertyChangeListener$1.prototype.a = function () {
        return this.b;
    };
    PropertyChangeListener$1.$t = markType(PropertyChangeListener$1, 'PropertyChangeListener$1', PropertyChangeListenerBase.$, [IPropertyChangeListener_$type]);
    return PropertyChangeListener$1;
}(PropertyChangeListenerBase));
export { PropertyChangeListener$1 };
//# sourceMappingURL=PropertyChangeListener$1.js.map

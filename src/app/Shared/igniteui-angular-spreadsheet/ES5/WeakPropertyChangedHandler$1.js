/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, delegateRemove, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WeakPropertyChangedHandler$1 = /** @class */ (function (_super) {
    tslib_1.__extends(WeakPropertyChangedHandler$1, _super);
    function WeakPropertyChangedHandler$1($tInstance, a, b, c) {
        var _this = _super.call(this, $tInstance, INotifyPropertyChanged_$type, PropertyChangedEventArgs.$, a, b, c, function (d, e) { return e.propertyChanged = delegateRemove(e.propertyChanged, runOn(d, d.f)); }) || this;
        _this.$tInstance = null;
        _this.$tInstance = $tInstance;
        _this.$type = _this.$type.specialize(_this.$tInstance);
        return _this;
    }
    WeakPropertyChangedHandler$1.$t = markType(WeakPropertyChangedHandler$1, 'WeakPropertyChangedHandler$1', WeakEventHandler$3.$.specialize(0, INotifyPropertyChanged_$type, PropertyChangedEventArgs.$));
    return WeakPropertyChangedHandler$1;
}(WeakEventHandler$3));
export { WeakPropertyChangedHandler$1 };
//# sourceMappingURL=WeakPropertyChangedHandler$1.js.map

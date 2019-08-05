/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
import { runOn, delegateRemove, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WeakCollectionChangedHandler$1 = /** @class */ (function (_super) {
    tslib_1.__extends(WeakCollectionChangedHandler$1, _super);
    function WeakCollectionChangedHandler$1($tInstance, a, b, c) {
        var _this = _super.call(this, $tInstance, INotifyCollectionChanged_$type, NotifyCollectionChangedEventArgs.$, a, b, c, function (d, e) { return e.collectionChanged = delegateRemove(e.collectionChanged, runOn(d, d.f)); }) || this;
        _this.$tInstance = null;
        _this.$tInstance = $tInstance;
        _this.$type = _this.$type.specialize(_this.$tInstance);
        return _this;
    }
    WeakCollectionChangedHandler$1.$t = markType(WeakCollectionChangedHandler$1, 'WeakCollectionChangedHandler$1', WeakEventHandler$3.$.specialize(0, INotifyCollectionChanged_$type, NotifyCollectionChangedEventArgs.$));
    return WeakCollectionChangedHandler$1;
}(WeakEventHandler$3));
export { WeakCollectionChangedHandler$1 };
//# sourceMappingURL=WeakCollectionChangedHandler$1.js.map

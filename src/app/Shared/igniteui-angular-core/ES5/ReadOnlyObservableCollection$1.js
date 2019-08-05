/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
import { INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { INotifyPropertyChanged_$type, markType } from "./type";
/**
 * @hidden
 */
var ReadOnlyObservableCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ReadOnlyObservableCollection$1, _super);
    function ReadOnlyObservableCollection$1($t, a) {
        var _this = _super.call(this, $t, 0) || this;
        _this.$t = null;
        _this.collectionChanged = null;
        _this.propertyChanged = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    ReadOnlyObservableCollection$1.$t = markType(ReadOnlyObservableCollection$1, 'ReadOnlyObservableCollection$1', ReadOnlyCollection$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
    return ReadOnlyObservableCollection$1;
}(ReadOnlyCollection$1));
export { ReadOnlyObservableCollection$1 };
//# sourceMappingURL=ReadOnlyObservableCollection$1.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { IOrderedEnumerable$1_$type } from "./IOrderedEnumerable$1";
import { markType } from "./type";
/**
 * @hidden
 */
var SortedList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(SortedList$1, _super);
    function SortedList$1($tElement, a) {
        var _this = _super.call(this, $tElement, 1, a) || this;
        _this.$tElement = null;
        _this.$tElement = $tElement;
        _this.$type = _this.$type.specialize(_this.$tElement);
        return _this;
    }
    SortedList$1.prototype.getEnumeratorObject = function () {
        return _super.prototype.getEnumerator.call(this);
    };
    SortedList$1.$t = markType(SortedList$1, 'SortedList$1', List$1.$.specialize(0), [IOrderedEnumerable$1_$type.specialize(0)]);
    return SortedList$1;
}(List$1));
export { SortedList$1 };
//# sourceMappingURL=SortedList$1.js.map
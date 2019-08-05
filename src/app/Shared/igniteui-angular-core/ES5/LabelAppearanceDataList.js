/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { LabelAppearanceData } from "./LabelAppearanceData";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
var LabelAppearanceDataList = /** @class */ (function (_super) {
    tslib_1.__extends(LabelAppearanceDataList, _super);
    function LabelAppearanceDataList() {
        return _super.call(this, LabelAppearanceData.$, 0) || this;
    }
    LabelAppearanceDataList.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.l("{ items: [");
        for (var b = 0; b < this.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this._inner[b].serialize());
        }
        return a.toString();
    };
    LabelAppearanceDataList.$t = markType(LabelAppearanceDataList, 'LabelAppearanceDataList', List$1.$.specialize(LabelAppearanceData.$), [IVisualData_$type]);
    return LabelAppearanceDataList;
}(List$1));
export { LabelAppearanceDataList };
//# sourceMappingURL=LabelAppearanceDataList.js.map
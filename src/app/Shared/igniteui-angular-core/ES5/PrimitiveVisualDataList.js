/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
var PrimitiveVisualDataList = /** @class */ (function (_super) {
    tslib_1.__extends(PrimitiveVisualDataList, _super);
    function PrimitiveVisualDataList() {
        return _super.call(this, PrimitiveVisualData.$, 0) || this;
    }
    PrimitiveVisualDataList.prototype.containingTag = function (a) {
        var b = new PrimitiveVisualDataList();
        for (var c = 0; c < this.count; c++) {
            var d = this._inner[c];
            for (var e = 0; e < d.tags.count; e++) {
                if (d.tags._inner[e] == a) {
                    b.add(d);
                    break;
                }
            }
        }
        return b;
    };
    PrimitiveVisualDataList.prototype.serialize = function () {
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
    PrimitiveVisualDataList.$t = markType(PrimitiveVisualDataList, 'PrimitiveVisualDataList', List$1.$.specialize(PrimitiveVisualData.$), [IVisualData_$type]);
    return PrimitiveVisualDataList;
}(List$1));
export { PrimitiveVisualDataList };
//# sourceMappingURL=PrimitiveVisualDataList.js.map
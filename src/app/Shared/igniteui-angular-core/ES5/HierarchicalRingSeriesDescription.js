/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var HierarchicalRingSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HierarchicalRingSeriesDescription, _super);
    function HierarchicalRingSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.bu = null;
        return _this;
    }
    HierarchicalRingSeriesDescription.prototype.get_type = function () {
        return "HierarchicalRingSeries";
    };
    Object.defineProperty(HierarchicalRingSeriesDescription.prototype, "childrenMemberPath", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("ChildrenMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    HierarchicalRingSeriesDescription.$t = markType(HierarchicalRingSeriesDescription, 'HierarchicalRingSeriesDescription', RingSeriesBaseDescription.$);
    return HierarchicalRingSeriesDescription;
}(RingSeriesBaseDescription));
export { HierarchicalRingSeriesDescription };
//# sourceMappingURL=HierarchicalRingSeriesDescription.js.map
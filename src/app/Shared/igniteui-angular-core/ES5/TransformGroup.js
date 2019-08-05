/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Transform } from "./Transform";
import { TransformCollection } from "./TransformCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var TransformGroup = /** @class */ (function (_super) {
    tslib_1.__extends(TransformGroup, _super);
    function TransformGroup() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.j = new TransformCollection();
        return _this;
    }
    TransformGroup.$t = markType(TransformGroup, 'TransformGroup', Transform.$);
    return TransformGroup;
}(Transform));
export { TransformGroup };
//# sourceMappingURL=TransformGroup.js.map
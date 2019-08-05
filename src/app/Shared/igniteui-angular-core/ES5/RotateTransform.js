/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Transform } from "./Transform";
import { markType } from "./type";
/**
 * @hidden
 */
var RotateTransform = /** @class */ (function (_super) {
    tslib_1.__extends(RotateTransform, _super);
    function RotateTransform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.j = 0;
        _this.k = 0;
        _this.l = 0;
        return _this;
    }
    RotateTransform.$t = markType(RotateTransform, 'RotateTransform', Transform.$);
    return RotateTransform;
}(Transform));
export { RotateTransform };
//# sourceMappingURL=RotateTransform.js.map
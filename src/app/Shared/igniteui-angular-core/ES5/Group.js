/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Capture } from "./Capture";
import { markType } from "./type";
/**
 * @hidden
 */
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group(a, b, c, d) {
        var _this = _super.call(this, b, c, d) || this;
        _this.h = false;
        _this.h = a;
        return _this;
    }
    Object.defineProperty(Group.prototype, "i", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    Group.$t = markType(Group, 'Group', Capture.$);
    return Group;
}(Capture));
export { Group };
//# sourceMappingURL=Group.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { LongValue } from "./LongValue";
/**
 * @hidden
 */
var CommandMap_Requirement = /** @class */ (function (_super) {
    tslib_1.__extends(CommandMap_Requirement, _super);
    function CommandMap_Requirement(a, b) {
        var _this = _super.call(this) || this;
        _this.a = new LongValue();
        _this.b = new LongValue();
        _this.a = a;
        _this.b = b;
        return _this;
    }
    CommandMap_Requirement.$t = markType(CommandMap_Requirement, 'CommandMap_Requirement');
    return CommandMap_Requirement;
}(Base));
export { CommandMap_Requirement };
//# sourceMappingURL=CommandMap_Requirement.js.map

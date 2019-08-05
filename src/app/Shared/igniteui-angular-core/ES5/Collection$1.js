/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { markType } from "./type";
/**
 * @hidden
 */
var Collection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(Collection$1, _super);
    function Collection$1($t) {
        var _this = _super.call(this, $t, 0) || this;
        _this.$t = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        return _this;
    }
    Object.defineProperty(Collection$1.prototype, "ac", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Collection$1.$t = markType(Collection$1, 'Collection$1', List$1.$.specialize(0));
    return Collection$1;
}(List$1));
export { Collection$1 };
//# sourceMappingURL=Collection$1.js.map
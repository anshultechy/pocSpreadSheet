/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var LRUCacheItem$2 = /** @class */ (function (_super) {
    tslib_1.__extends(LRUCacheItem$2, _super);
    function LRUCacheItem$2($tKey, $tValue) {
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.a = null;
        _this.b = null;
        _this.c = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        return _this;
    }
    LRUCacheItem$2.$t = markType(LRUCacheItem$2, 'LRUCacheItem$2');
    return LRUCacheItem$2;
}(Base));
export { LRUCacheItem$2 };
//# sourceMappingURL=LRUCacheItem$2.js.map
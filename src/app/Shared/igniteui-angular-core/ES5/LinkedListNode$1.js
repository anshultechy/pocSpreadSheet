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
var LinkedListNode$1 = /** @class */ (function (_super) {
    tslib_1.__extends(LinkedListNode$1, _super);
    function LinkedListNode$1($t, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.c = c;
                }
                break;
        }
        return _this;
    }
    LinkedListNode$1.$t = markType(LinkedListNode$1, 'LinkedListNode$1');
    return LinkedListNode$1;
}(Base));
export { LinkedListNode$1 };
//# sourceMappingURL=LinkedListNode$1.js.map
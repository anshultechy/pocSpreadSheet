/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Boolean_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var Description = /** @class */ (function (_super) {
    tslib_1.__extends(Description, _super);
    function Description() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = new Dictionary$2(String_$type, Boolean_$type, 0);
        _this.c = null;
        return _this;
    }
    Description.prototype.e = function (a) {
        this.b.item(a, true);
    };
    Description.prototype.a = function (a) {
        if (this.b.containsKey(a)) {
            return this.b.item(a);
        }
        return false;
    };
    Object.defineProperty(Description.prototype, "name", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Description.$t = markType(Description, 'Description');
    return Description;
}(Base));
export { Description };
//# sourceMappingURL=Description.js.map
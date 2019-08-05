/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDictionary_$type, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var Hashtable = /** @class */ (function (_super) {
    tslib_1.__extends(Hashtable, _super);
    function Hashtable() {
        var _this = _super.call(this) || this;
        _this.b = new Dictionary$2(String_$type, Base.$, 0);
        return _this;
    }
    Object.defineProperty(Hashtable.prototype, "c", {
        get: function () {
            return this.b.keys;
        },
        enumerable: true,
        configurable: true
    });
    Hashtable.prototype.f = function (a) {
        this.b.removeItem(a);
    };
    Hashtable.prototype.e = function (a, b) {
        this.b.addItem(a, b);
    };
    Hashtable.prototype.a = function (a) {
        return this.b.containsKey(a);
    };
    Hashtable.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.b.item(a, b);
            return b;
        }
        else {
            return this.b.item(a);
        }
    };
    Hashtable.$t = markType(Hashtable, 'Hashtable', Base.$, [IDictionary_$type]);
    return Hashtable;
}(Base));
export { Hashtable };
//# sourceMappingURL=Hashtable.js.map
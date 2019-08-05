/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var NameValueCollection = /** @class */ (function (_super) {
    tslib_1.__extends(NameValueCollection, _super);
    function NameValueCollection() {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = new Dictionary$2(String_$type, String_$type, 0);
        return _this;
    }
    NameValueCollection.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            if (this.a.containsKey(a)) {
                this.a.item(a, b);
            }
            else {
                this.a.addItem(a, b);
            }
            return b;
        }
        else {
            if (this.a.containsKey(a)) {
                return this.a.item(a);
            }
            else {
                return null;
            }
        }
    };
    NameValueCollection.$t = markType(NameValueCollection, 'NameValueCollection');
    return NameValueCollection;
}(Base));
export { NameValueCollection };
//# sourceMappingURL=NameValueCollection.js.map
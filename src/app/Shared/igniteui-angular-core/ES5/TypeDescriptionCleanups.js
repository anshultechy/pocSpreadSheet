/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Delegate_$type, markType, getInstanceType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { stringReplace } from "./string";
/**
 * @hidden
 */
var TypeDescriptionCleanups = /** @class */ (function (_super) {
    tslib_1.__extends(TypeDescriptionCleanups, _super);
    function TypeDescriptionCleanups() {
        var _this = _super.call(this) || this;
        _this.a = new Dictionary$2(String_$type, Delegate_$type, 0);
        _this.a.item("Series", function (a) {
            var s_ = a;
            if (s_.removeAxes)
                s_.removeAxes();
        });
        return _this;
    }
    TypeDescriptionCleanups.prototype.b = function (a, b) {
        if (b == null) {
            return;
        }
        var c = "";
        var d;
        var obj_ = b;
        var impl_ = obj_.i;
        var e = (impl_);
        if (e) {
            d = getInstanceType(impl_);
        }
        else {
            impl_ = obj_._chart || obj_._map || obj_._gauge;
            e = (impl_);
            if (e) {
                d = getInstanceType(impl_);
            }
            else {
                return;
            }
        }
        while (d != null) {
            c = d.typeName;
            c = stringReplace(stringReplace(c, "Ultra", ""), "Xam", "");
            if (this.a.containsKey(c)) {
                this.a.item(c)(b);
            }
            d = d.baseType;
            if (d != null && (d.typeName == "Object" || d.typeName == "Base")) {
                return;
            }
        }
    };
    TypeDescriptionCleanups.$t = markType(TypeDescriptionCleanups, 'TypeDescriptionCleanups');
    return TypeDescriptionCleanups;
}(Base));
export { TypeDescriptionCleanups };
//# sourceMappingURL=TypeDescriptionCleanups.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { stringEndsWith } from "./string";
/**
 * @hidden
 */
var DescriptionTreeAction = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionTreeAction, _super);
    function DescriptionTreeAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        _this.b = null;
        _this.c = null;
        _this.i = null;
        _this.g = null;
        _this.f = null;
        _this.e = 0;
        _this.d = 0;
        return _this;
    }
    DescriptionTreeAction.prototype.h = function (a) {
        var b = this.i;
        if (this.c != null) {
            b = this.c.g(a);
        }
        else {
            if (TypeDescriptionMetadata.shouldCamelize(a)) {
                b = TypeDescriptionMetadata.camelize(this.i);
            }
        }
        if (stringEndsWith(b, "Ref")) {
            b = b.substr(0, b.length - ("Ref").length);
        }
        return b;
    };
    DescriptionTreeAction.$t = markType(DescriptionTreeAction, 'DescriptionTreeAction');
    return DescriptionTreeAction;
}(Base));
export { DescriptionTreeAction };
//# sourceMappingURL=DescriptionTreeAction.js.map
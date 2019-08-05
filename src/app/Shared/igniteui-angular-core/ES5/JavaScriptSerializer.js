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
var JavaScriptSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(JavaScriptSerializer, _super);
    function JavaScriptSerializer() {
        return _super.call(this) || this;
    }
    JavaScriptSerializer.prototype.a = function (a) {
        var text_ = a;
        return JSON.parse(text_);
    };
    JavaScriptSerializer.prototype.b = function (a) {
        var value_ = a;
        return (JSON.stringify(value_));
    };
    JavaScriptSerializer.$t = markType(JavaScriptSerializer, 'JavaScriptSerializer');
    return JavaScriptSerializer;
}(Base));
export { JavaScriptSerializer };
//# sourceMappingURL=JavaScriptSerializer.js.map
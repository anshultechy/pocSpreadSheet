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
var XNamespace = /** @class */ (function (_super) {
    tslib_1.__extends(XNamespace, _super);
    function XNamespace(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    XNamespace.get = function (a) {
        return new XNamespace(a);
    };
    Object.defineProperty(XNamespace, "xmlns", {
        get: function () {
            return XNamespace.get("http://www.w3.org/2000/xmlns/");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XNamespace.prototype, "namespaceName", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    XNamespace.$t = markType(XNamespace, 'XNamespace');
    return XNamespace;
}(Base));
export { XNamespace };
//# sourceMappingURL=XNamespace.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { XNamespace } from "./XNamespace";
/**
 * @hidden
 */
var XName = /** @class */ (function (_super) {
    tslib_1.__extends(XName, _super);
    function XName(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = null;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Object.defineProperty(XName.prototype, "localName", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XName.prototype, "namespaceName", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XName.prototype, "namespace", {
        get: function () {
            return XNamespace.get(this.b);
        },
        enumerable: true,
        configurable: true
    });
    XName.get = function (a, b) {
        return new XName(a, b);
    };
    XName.$t = markType(XName, 'XName');
    return XName;
}(Base));
export { XName };
//# sourceMappingURL=XName.js.map
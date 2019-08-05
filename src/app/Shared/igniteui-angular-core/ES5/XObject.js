/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { XmlUtils } from "./XmlUtils";
/**
 * @hidden
 */
var XObject = /** @class */ (function (_super) {
    tslib_1.__extends(XObject, _super);
    function XObject(a) {
        var _this = _super.call(this) || this;
        _this._backingNode = null;
        _this.backingNode = a;
        return _this;
    }
    Object.defineProperty(XObject.prototype, "backingNode", {
        get: function () {
            return this._backingNode;
        },
        set: function (a) {
            this._backingNode = a;
        },
        enumerable: true,
        configurable: true
    });
    XObject.prototype.toString = function () {
        if (this.backingNode != null) {
            return XmlUtils.xmlNodeToString(this.backingNode);
        }
        else {
            return "";
        }
    };
    XObject.$t = markType(XObject, 'XObject');
    return XObject;
}(Base));
export { XObject };
//# sourceMappingURL=XObject.js.map
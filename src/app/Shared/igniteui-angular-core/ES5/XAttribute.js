/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { XObject } from "./XObject";
import { XmlUtils } from "./XmlUtils";
import { markType } from "./type";
/**
 * @hidden
 */
var XAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(XAttribute, _super);
    function XAttribute(a) {
        return _super.call(this, a) || this;
    }
    XAttribute.prototype.e = function (a) {
        this.backingNode = this.backingNode.cloneNode(true);
        a.setAttributeNode(this.backingNode);
    };
    XAttribute.prototype.get_nodeType = function () {
        return 2;
    };
    Object.defineProperty(XAttribute.prototype, "nodeType", {
        get: function () {
            return this.get_nodeType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XAttribute.prototype, "value", {
        get: function () {
            return XmlUtils.b(this.backingNode);
        },
        enumerable: true,
        configurable: true
    });
    XAttribute.$t = markType(XAttribute, 'XAttribute', XObject.$);
    return XAttribute;
}(XObject));
export { XAttribute };
//# sourceMappingURL=XAttribute.js.map
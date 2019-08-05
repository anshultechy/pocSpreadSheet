/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { XmlUtils } from "./XmlUtils";
/**
 * @hidden
 */
export class XObject extends Base {
    constructor(a) {
        super();
        this._backingNode = null;
        this.backingNode = a;
    }
    get backingNode() {
        return this._backingNode;
    }
    set backingNode(a) {
        this._backingNode = a;
    }
    toString() {
        if (this.backingNode != null) {
            return XmlUtils.xmlNodeToString(this.backingNode);
        }
        else {
            return "";
        }
    }
}
XObject.$t = markType(XObject, 'XObject');
//# sourceMappingURL=XObject.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { XObject } from "./XObject";
import { XmlUtils } from "./XmlUtils";
import { markType } from "./type";
/**
 * @hidden
 */
export class XAttribute extends XObject {
    constructor(a) {
        super(a);
    }
    e(a) {
        this.backingNode = this.backingNode.cloneNode(true);
        a.setAttributeNode(this.backingNode);
    }
    get_nodeType() {
        return 2;
    }
    get nodeType() {
        return this.get_nodeType();
    }
    get value() {
        return XmlUtils.b(this.backingNode);
    }
}
XAttribute.$t = markType(XAttribute, 'XAttribute', XObject.$);
//# sourceMappingURL=XAttribute.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { XNamespace } from "./XNamespace";
/**
 * @hidden
 */
export class XName extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.b = null;
        this.a = a;
        this.b = b;
    }
    get localName() {
        return this.a;
    }
    get namespaceName() {
        return this.b;
    }
    get namespace() {
        return XNamespace.get(this.b);
    }
    static get(a, b) {
        return new XName(a, b);
    }
}
XName.$t = markType(XName, 'XName');
//# sourceMappingURL=XName.js.map
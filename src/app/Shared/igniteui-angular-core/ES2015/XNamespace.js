/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class XNamespace extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    static get(a) {
        return new XNamespace(a);
    }
    static get xmlns() {
        return XNamespace.get("http://www.w3.org/2000/xmlns/");
    }
    get namespaceName() {
        return this.a;
    }
}
XNamespace.$t = markType(XNamespace, 'XNamespace');
//# sourceMappingURL=XNamespace.js.map
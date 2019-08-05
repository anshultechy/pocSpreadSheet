/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator_$type, markType } from "./type";
/**
 * @hidden
 */
export class AbstractEnumerator extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    get currentObject() {
        return this.a.currentObject;
    }
    moveNext() {
        return this.a.moveNext();
    }
    reset() {
        this.a.reset();
    }
}
AbstractEnumerator.$t = markType(AbstractEnumerator, 'AbstractEnumerator', Base.$, [IEnumerator_$type]);
//# sourceMappingURL=AbstractEnumerator.js.map
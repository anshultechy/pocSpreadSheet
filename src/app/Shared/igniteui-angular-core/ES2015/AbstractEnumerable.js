/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable_$type, markType, getEnumeratorObject } from "./type";
import { AbstractEnumerator } from "./AbstractEnumerator";
/**
 * @hidden
 */
export class AbstractEnumerable extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    getEnumeratorObject() {
        return new AbstractEnumerator(getEnumeratorObject(this.a()));
    }
}
AbstractEnumerable.$t = markType(AbstractEnumerable, 'AbstractEnumerable', Base.$, [IEnumerable_$type]);
//# sourceMappingURL=AbstractEnumerable.js.map
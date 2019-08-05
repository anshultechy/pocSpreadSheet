/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { IDataObject_$type } from "./IDataObject";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class DataObject extends Base {
    constructor() {
        super();
        this.a = null;
        this.a = new Dictionary$2(String_$type, Base.$, 0);
    }
    getData(a) {
        let b;
        if (((() => { let c = this.a.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    }
    getDataPresent(a) {
        return this.a.containsKey(a);
    }
    setData(a, b) {
        this.a.item(a, b);
    }
}
DataObject.$t = markType(DataObject, 'DataObject', Base.$, [IDataObject_$type]);
//# sourceMappingURL=DataObject.js.map
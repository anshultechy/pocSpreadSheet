/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, IComparable$1_$type, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { stringCompare1 } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class Spreadsheet_SimpleNamedReference extends ValueType {
    constructor(a, ..._rest) {
        super();
        this._a = null;
        this._b = new WorksheetRegionAddress();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this._a = c;
                    this._b = d;
                }
                break;
        }
    }
    compareTo(a) {
        return stringCompare1(this._a.name, a._a.name, 1);
    }
}
Spreadsheet_SimpleNamedReference.$t = markStruct(Spreadsheet_SimpleNamedReference, 'Spreadsheet_SimpleNamedReference', ValueType.$, [IComparable$1_$type.specialize(-1)]).initSelfReferences();
//# sourceMappingURL=Spreadsheet_SimpleNamedReference.js.map

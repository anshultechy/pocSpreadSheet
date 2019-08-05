/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, fromEnum, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class DataSourceSpecialRow extends Base {
    constructor() {
        super(...arguments);
        this.$$isSpecialRow = true;
        this.e = new Dictionary$2(String_$type, Base.$, 0);
        this.d = new Dictionary$2(String_$type, Base.$, 0);
        this._rowType = 0;
        this._targetRow = null;
    }
    get rowType() {
        return this._rowType;
    }
    set rowType(a) {
        this._rowType = a;
    }
    get targetRow() {
        return this._targetRow;
    }
    set targetRow(a) {
        this._targetRow = a;
    }
    getValue(a) {
        if (a == "SectionInformation") {
            return this.d;
        }
        let b;
        if (((() => { let c = this.e.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    }
    getSectionValue(a) {
        let b;
        if (((() => { let c = this.d.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            return b;
        }
        return null;
    }
    setValue(a, b) {
        this.e.item(a, b);
    }
    setSectionValue(a, b) {
        this.d.item(a, b);
    }
    getSectionKeys() {
        let a = new Array(this.d.keys.count);
        let b = 0;
        for (let c of fromEnum(this.d.keys)) {
            a[b] = c;
            b++;
        }
        return a;
    }
}
DataSourceSpecialRow.$t = markType(DataSourceSpecialRow, 'DataSourceSpecialRow');
//# sourceMappingURL=DataSourceSpecialRow.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Stream, typeCast, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISpreadsheetEditInfo_$type } from "./ISpreadsheetEditInfo";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { CoreUtilities } from "./CoreUtilities";
import { StreamReader } from "../../igniteui-angular-core/ES2015/StreamReader";
import { WorkbookSerializationLoadException } from "./WorkbookSerializationLoadException";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class WorkbookDataObjectLoadContext extends Base {
    constructor(a, b, c) {
        super();
        this.n = null;
        this.c = null;
        this.k = null;
        this._workbook = null;
        CoreUtilities.z(a, "workbook");
        this.workbook = a;
        this.o = b;
        this.c = c;
    }
    get b() {
        return this.c != null ? this.c.b : 8370167;
    }
    get o() {
        return this.n;
    }
    set o(a) {
        if (this.n != a) {
            if (a == null) {
                throw new ArgumentNullException(1);
            }
            this.n = a;
        }
    }
    get f() {
        let a = this.workbook.windowOptions.selectedWorksheet;
        let b = a != null ? a.displayOptions : null;
        if (b != null && b._ai) {
            let c = b._af.a(b._z);
            if (c != null && c.d.count > 1) {
                return true;
            }
        }
        return false;
    }
    get a() {
        return this.c != null ? this.c.a : 0;
    }
    get g() {
        return this.c != null && this.c.d;
    }
    get workbook() {
        return this._workbook;
    }
    set workbook(a) {
        this._workbook = a;
    }
    j(a) {
        return this.n.getData(a);
    }
    l(a) {
        let b = this.e(a) ? this.j(a) : null;
        if (b == null) {
            return null;
        }
        let c = typeCast(Stream.$, b);
        let d = null;
        if (null != c) {
            {
                let e = new StreamReader(c);
                try {
                    d = e.h();
                }
                finally {
                    if (e != null) {
                        e.dispose();
                    }
                }
            }
        }
        else {
            d = typeCast(String_$type, b);
        }
        if (stringIsNullOrEmpty(d)) {
            return null;
        }
        return d;
    }
    e(a) {
        return this.n.getDataPresent(a);
    }
    m(a) {
        throw new WorkbookSerializationLoadException(a);
    }
    h(a) {
        let b = this.c.e;
        if (b != null && !b(a)) {
            return false;
        }
        return true;
    }
    i(a, b, c) {
        let d = this.c.f;
        if (d != null && !d(a, b, c)) {
            return false;
        }
        return true;
    }
    get isFixedDecimalEnabled() {
        return this.c != null ? this.c.c : false;
    }
    get fixedDecimalPlaceCount() {
        return this.c != null ? this.c.g : 2;
    }
}
WorkbookDataObjectLoadContext.$t = markType(WorkbookDataObjectLoadContext, 'WorkbookDataObjectLoadContext', Base.$, [ISpreadsheetEditInfo_$type]);
//# sourceMappingURL=WorkbookDataObjectLoadContext.js.map
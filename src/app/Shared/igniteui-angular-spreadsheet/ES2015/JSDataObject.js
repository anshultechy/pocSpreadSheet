/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Stream, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { IDataObject_$type } from "../../igniteui-angular-core/ES2015/IDataObject";
import { DataFormats } from "../../igniteui-angular-core/ES2015/DataFormats";
import { DocCoreUtils } from "../../igniteui-angular-excel/ES2015/documents.core";
import { Convert } from "../../igniteui-angular-core/ES2015/Convert";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class JSDataObject extends Base {
    constructor(a, b) {
        super();
        this._c = null;
        this._b = false;
        this._c = a;
        this._b = b;
    }
    _f(a) {
        if (a == DataFormats.d || a == DataFormats.c || a == DataFormats.e) {
            return this._b ? "Text" : "text/plain";
        }
        else if (this._b) {
            return null;
        }
        else if (a == DataFormats.b) {
            return "text/html";
        }
        else if (a == DataFormats.a) {
            return "text/csv";
        }
        return null;
    }
    getData(a) {
        let b = this._f(a);
        if (stringIsNullOrEmpty(b)) {
            return JSDataObject._e;
        }
        try {
            return this._c.getData(b);
        }
        catch (c) {
            return JSDataObject._d;
        }
    }
    getDataPresent(a) {
        let b = this._f(a);
        if (!stringIsNullOrEmpty(b)) {
            if ((this._c.types)) {
                let c = (this._c.types.length);
                for (let d = 0; d < c; d++) {
                    if (b == (this._c.types[d])) {
                        return true;
                    }
                }
            }
            else if (this._b) {
                try {
                    this._c.getData(b);
                    return true;
                }
                catch (e) {
                }
            }
        }
        return false;
    }
    setData(a, b) {
        let c = this._f(a);
        if (!stringIsNullOrEmpty(c)) {
            let d;
            if (b == null) {
                d = null;
            }
            else if (typeof b === 'string') {
                d = b;
            }
            else if (typeCast(Stream.$, b) !== null) {
                d = Convert.toBase64String(DocCoreUtils.c(b));
            }
            else {
                d = b.toString();
            }
            try {
                this._c.setData(c, d);
            }
            catch (e) {
            }
        }
    }
    static _a(a) {
        let b = a.originalEvent;
        let c = b.clipboardData;
        if (c != null) {
            return new JSDataObject(c, false);
        }
        c = window.clipboardData;
        return c == null ? null : new JSDataObject(c, true);
    }
}
JSDataObject.$t = markType(JSDataObject, 'JSDataObject', Base.$, [IDataObject_$type]);
JSDataObject._e = {};
JSDataObject._d = {};
//# sourceMappingURL=JSDataObject.js.map

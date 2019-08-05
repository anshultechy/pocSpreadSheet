/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetDialogFormatBase } from "./SpreadsheetDialogFormatBase";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetDialogFormat extends SpreadsheetDialogFormatBase {
    constructor(a, ..._rest) {
        super();
        this._d = null;
        this._b = null;
        this._f = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this._d = c;
                    this._f = d;
                    this._b = "#1E1E1E";
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    this._d = c;
                    this._f = d;
                    this._b = e;
                }
                break;
        }
    }
    get _e() {
        return this._d;
    }
    set _e(a) {
        this._d = a;
        this._a("Mask");
    }
    get _c() {
        return this._b;
    }
    set _c(a) {
        this._b = a;
        this._a("Color");
    }
    get _g() {
        return this._f;
    }
    set _g(a) {
        this._f = a;
        this._a("PreviewText");
    }
}
SpreadsheetDialogFormat.$t = markType(SpreadsheetDialogFormat, 'SpreadsheetDialogFormat', SpreadsheetDialogFormatBase.$);
//# sourceMappingURL=SpreadsheetDialogFormat.js.map
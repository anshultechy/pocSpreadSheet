/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class CellStyleRequestedEventArgsDescription extends Description {
    constructor() {
        super();
        this.i = null;
        this.h = null;
        this.f = 0;
    }
    get_type() {
        return "CellStyleRequestedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get styleKey() {
        return this.i;
    }
    set styleKey(a) {
        this.i = a;
        this.e("StyleKey");
    }
    get resolvedValueRef() {
        return this.h;
    }
    set resolvedValueRef(a) {
        this.h = a;
        this.e("ResolvedValueRef");
    }
    get rowNumber() {
        return this.f;
    }
    set rowNumber(a) {
        this.f = a;
        this.e("RowNumber");
    }
}
CellStyleRequestedEventArgsDescription.$t = markType(CellStyleRequestedEventArgsDescription, 'CellStyleRequestedEventArgsDescription', Description.$);
//# sourceMappingURL=CellStyleRequestedEventArgsDescription.js.map
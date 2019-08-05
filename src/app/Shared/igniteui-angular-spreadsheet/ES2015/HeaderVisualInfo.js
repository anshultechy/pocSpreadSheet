/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetHeaderContentLayerBase_HeaderInfo$1 } from "./SpreadsheetHeaderContentLayerBase_HeaderInfo$1";
import { HeaderVisual } from "./HeaderVisual";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class HeaderVisualInfo extends SpreadsheetHeaderContentLayerBase_HeaderInfo$1 {
    constructor() {
        super(HeaderVisual.$);
        this.q = null;
        this.p = 0;
        this.n = 0;
        this.o = 0;
        this.i = false;
        this.l = 0;
        this.m = 0;
        this.k = 0;
        this.j = 0;
    }
    f(a, b, c, d) {
        this.i = true;
        this.l = a;
        this.m = b;
        this.k = c;
        this.j = d;
    }
    g() {
        this.i = false;
    }
    h(a, b) {
        this.n = a;
        this.o = b;
    }
}
HeaderVisualInfo.$t = markType(HeaderVisualInfo, 'HeaderVisualInfo', SpreadsheetHeaderContentLayerBase_HeaderInfo$1.$.specialize(HeaderVisual.$));
//# sourceMappingURL=HeaderVisualInfo.js.map
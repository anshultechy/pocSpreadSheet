/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export class WriteableBitmap extends Base {
    constructor(a, b) {
        super();
        this.b = 0;
        this.a = 0;
        this.c = null;
        this.d = null;
        this.b = a;
        this.a = b;
        this.d = Rect.empty;
    }
}
WriteableBitmap.$t = markType(WriteableBitmap, 'WriteableBitmap');
//# sourceMappingURL=WriteableBitmap.js.map
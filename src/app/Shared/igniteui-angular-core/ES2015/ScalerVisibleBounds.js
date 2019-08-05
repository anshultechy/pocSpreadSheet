/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class ScalerVisibleBounds extends Base {
    constructor(a, b, c, d) {
        super();
        this.d = 0;
        this.a = 0;
        this.c = 0;
        this.b = 0;
        this.b = a;
        this.d = b;
        this.c = c;
        this.a = d;
    }
}
ScalerVisibleBounds.$t = markType(ScalerVisibleBounds, 'ScalerVisibleBounds');
//# sourceMappingURL=ScalerVisibleBounds.js.map
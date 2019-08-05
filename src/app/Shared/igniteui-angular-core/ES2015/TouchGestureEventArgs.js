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
export class TouchGestureEventArgs extends Base {
    constructor() {
        super(...arguments);
        this.d = 0;
        this.e = 0;
        this.c = 0;
        this.f = 0;
        this.g = 0;
        this.a = 0;
        this.b = 0;
        this.h = 0;
        this.i = 0;
    }
}
TouchGestureEventArgs.$t = markType(TouchGestureEventArgs, 'TouchGestureEventArgs');
//# sourceMappingURL=TouchGestureEventArgs.js.map
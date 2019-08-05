/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IExecutionContext_$type } from "./IExecutionContext";
import { dateNow } from "./date";
/**
 * @hidden
 */
export class DOMExecutionContext extends Base {
    constructor(a) {
        super();
        this.c = 0;
        this.b = null;
        this._requestAnimationFrame = null;
        this.b = a;
        this.requestAnimationFrame = a.getRequestAnimationFrame();
        this.c = dateNow().getTime();
    }
    get requestAnimationFrame() {
        return this._requestAnimationFrame;
    }
    set requestAnimationFrame(a) {
        this._requestAnimationFrame = a;
    }
    execute(a) {
        a();
    }
    enqueueAction(a) {
        this.b.setTimeout(a, 0);
    }
    enqueueAnimationAction(a) {
        this.requestAnimationFrame(a);
    }
    executeDelayed(a, b) {
        this.b.setTimeout(a, b);
    }
    getCurrentRelativeTime() {
        return dateNow().getTime() - this.c;
    }
}
DOMExecutionContext.$t = markType(DOMExecutionContext, 'DOMExecutionContext', Base.$, [IExecutionContext_$type]);
//# sourceMappingURL=DOMExecutionContext.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
export class AsyncCompletedEventArgs extends EventArgs {
    constructor(a, b, c) {
        super();
        this.d = null;
        this.b = false;
        this.f = null;
        this.b = b;
        this.d = a;
        this.f = c;
    }
    get error() {
        return this.d;
    }
    get cancelled() {
        return this.b;
    }
    get userState() {
        return this.f;
    }
    h() {
        if (this.error != null) {
            throw this.error;
        }
    }
}
AsyncCompletedEventArgs.$t = markType(AsyncCompletedEventArgs, 'AsyncCompletedEventArgs', EventArgs.$);
//# sourceMappingURL=AsyncCompletedEventArgs.js.map
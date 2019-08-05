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
export class AsyncDataSourcePageRequest extends Base {
    constructor(a, b) {
        super();
        this.e = 0;
        this.f = 0;
        this.a = null;
        this.c = false;
        this.e = a;
        this.f = b;
    }
    get index() {
        return this.e;
    }
    set index(a) {
        this.e = a;
    }
    get retryDelay() {
        return this.f;
    }
    set retryDelay(a) {
        this.f = a;
    }
    get taskHolder() {
        return this.a;
    }
    set taskHolder(a) {
        this.a = a;
    }
    get isDone() {
        return this.c;
    }
    set isDone(a) {
        this.c = a;
    }
}
AsyncDataSourcePageRequest.$t = markType(AsyncDataSourcePageRequest, 'AsyncDataSourcePageRequest');
//# sourceMappingURL=AsyncDataSourcePageRequest.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
export class UploadDataCompletedEventArgs extends AsyncCompletedEventArgs {
    constructor(a, b, c, d) {
        super(b, c, d);
        this.i = null;
        this.i = a;
    }
    get result() {
        this.h();
        return this.i;
    }
}
UploadDataCompletedEventArgs.$t = markType(UploadDataCompletedEventArgs, 'UploadDataCompletedEventArgs', AsyncCompletedEventArgs.$);
//# sourceMappingURL=UploadDataCompletedEventArgs.js.map
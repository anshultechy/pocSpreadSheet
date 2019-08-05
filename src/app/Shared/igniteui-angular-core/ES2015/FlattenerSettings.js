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
export class FlattenerSettings extends Base {
    constructor() {
        super();
        this._chunkingAmount = 0;
        this.chunkingAmount = 3000;
    }
    static get instance() {
        if (FlattenerSettings.a == null) {
            FlattenerSettings.a = new FlattenerSettings();
        }
        return FlattenerSettings.a;
    }
    get chunkingAmount() {
        return this._chunkingAmount;
    }
    set chunkingAmount(a) {
        this._chunkingAmount = a;
    }
}
FlattenerSettings.$t = markType(FlattenerSettings, 'FlattenerSettings');
FlattenerSettings.a = null;
//# sourceMappingURL=FlattenerSettings.js.map
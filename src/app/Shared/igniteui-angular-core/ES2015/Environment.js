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
export class Environment extends Base {
    static get newLine() {
        return "\n";
    }
    static get b() {
        try {
            throw new Error();
        }
        catch (a) {
            return (a.stack);
        }
        return "";
    }
}
Environment.$t = markType(Environment, 'Environment');
//# sourceMappingURL=Environment.js.map
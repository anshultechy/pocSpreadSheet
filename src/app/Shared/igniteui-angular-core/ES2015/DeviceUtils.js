/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class DeviceUtils extends Base {
    static g(a) {
        return a;
    }
    static f(a) {
        return a;
    }
    static a(a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (a <= 0) {
            return NaN;
        }
        return a;
    }
    static c(a) {
        return a * DeviceUtils.d();
    }
    static b(a) {
        return a * DeviceUtils.e();
    }
    static d() {
        let a = DeviceUtils.g(2);
        return 2 / a;
    }
    static e() {
        let a = DeviceUtils.f(2);
        return 2 / a;
    }
}
DeviceUtils.$t = markType(DeviceUtils, 'DeviceUtils');
//# sourceMappingURL=DeviceUtils.js.map
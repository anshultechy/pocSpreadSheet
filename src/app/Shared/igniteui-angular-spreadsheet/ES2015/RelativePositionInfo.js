/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RelativePositionInfo extends Base {
    constructor(a, b, c) {
        super();
        this.a = 0;
        this.h = 0;
        this.f = false;
        this.a = a;
        this.h = b;
        this.f = c;
    }
    get b() {
        return this.a;
    }
    get i() {
        return this.h;
    }
    get g() {
        return this.f;
    }
}
RelativePositionInfo.$t = markType(RelativePositionInfo, 'RelativePositionInfo');
RelativePositionInfo.c = new RelativePositionInfo(0, 0, false);
RelativePositionInfo.e = new RelativePositionInfo(1, 0, false);
RelativePositionInfo.d = new RelativePositionInfo(2, 0, false);
//# sourceMappingURL=RelativePositionInfo.js.map
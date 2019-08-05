/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Geometry } from "./Geometry";
import { markType } from "./type";
/**
 * @hidden
 */
export class LineGeometry extends Geometry {
    constructor() {
        super(...arguments);
        this.c = null;
        this.b = null;
    }
    get_a() {
        return 1;
    }
    get a() {
        return this.get_a();
    }
}
LineGeometry.$t = markType(LineGeometry, 'LineGeometry', Geometry.$);
//# sourceMappingURL=LineGeometry.js.map
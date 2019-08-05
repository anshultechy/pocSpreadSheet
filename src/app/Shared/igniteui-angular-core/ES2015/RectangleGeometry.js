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
export class RectangleGeometry extends Geometry {
    constructor() {
        super(...arguments);
        this.d = null;
        this.b = 0;
        this.c = 0;
    }
    get_a() {
        return 2;
    }
    get a() {
        return this.get_a();
    }
}
RectangleGeometry.$t = markType(RectangleGeometry, 'RectangleGeometry', Geometry.$);
//# sourceMappingURL=RectangleGeometry.js.map
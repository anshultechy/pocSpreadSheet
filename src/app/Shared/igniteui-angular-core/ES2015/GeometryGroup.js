/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Geometry } from "./Geometry";
import { GeometryCollection } from "./GeometryCollection";
import { markType } from "./type";
/**
 * @hidden
 */
export class GeometryGroup extends Geometry {
    constructor() {
        super();
        this.c = null;
        this.b = 0;
        this.c = new GeometryCollection();
    }
    get_a() {
        return 0;
    }
    get a() {
        return this.get_a();
    }
}
GeometryGroup.$t = markType(GeometryGroup, 'GeometryGroup', Geometry.$);
//# sourceMappingURL=GeometryGroup.js.map
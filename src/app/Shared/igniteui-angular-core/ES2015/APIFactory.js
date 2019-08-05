/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { Color } from "./Color";
/**
 * @hidden
 */
export class APIFactory extends Base {
    static createPoint(a, b) {
        return { $type: Point_$type, x: a, y: b };
    }
    static createRect(a, b, c, d) {
        return new Rect(0, a, b, c, d);
    }
    static createSize(a, b) {
        return new Size(1, a, b);
    }
    static createColor(a) {
        let b = new Color();
        b.colorString = a;
        return b;
    }
}
APIFactory.$t = markType(APIFactory, 'APIFactory');
//# sourceMappingURL=APIFactory.js.map
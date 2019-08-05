/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, markType } from "./type";
import { ISmartPlaceable_$type } from "./ISmartPlaceable";
import { Size } from "./Size";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export class SmartPlaceableWrapper$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.f = false;
        this.c = null;
        this.g = null;
        this.i = null;
        this.a = [4];
        this.b = [4, 5, 2, 1, 8, 7, 0, 3, 6];
        this.j = new Size();
        this.e = 0;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.f = false;
    }
    get d() {
        return this.c;
    }
    set d(a) {
        this.c = a;
    }
    getSmartPositions() {
        if (this.f) {
            return this.a;
        }
        else {
            return this.b;
        }
    }
    k() {
        return this.j;
    }
    getSmartBounds(a) {
        let b = this.k();
        let c = b.width;
        let d = b.height;
        let e;
        {
            e = this.h(a, c, d);
        }
        return new Rect(0, this.i.x + e.x, this.i.y + e.y, c, d);
    }
    get opacity() {
        return this.d._opacity;
    }
    set opacity(a) {
        this.d._opacity = a;
    }
    get smartPosition() {
        return this.e;
    }
    set smartPosition(a) {
        this.e = a;
        let b = this.k();
        let c = b.height;
        let d = b.width;
        let e;
        {
            e = this.h(this.e, d, c);
        }
        this.g = { $type: Point_$type, x: this.i.x + e.x, y: this.i.y + e.y };
    }
    h(a, b, c) {
        let d = 0.25;
        switch (a) {
            case 0: return { $type: Point_$type, x: -b * d, y: -c * d };
            case 1: return { $type: Point_$type, x: 0, y: -c * d };
            case 2: return { $type: Point_$type, x: b * d, y: -c * d };
            case 3: return { $type: Point_$type, x: -b * d, y: 0 };
            case 4: return { $type: Point_$type, x: 0, y: 0 };
            case 5: return { $type: Point_$type, x: b * d, y: 0 };
            case 6: return { $type: Point_$type, x: -b * d, y: c * d };
            case 7: return { $type: Point_$type, x: 0, y: c * d };
            default: return { $type: Point_$type, x: b * d, y: c * d };
        }
    }
}
SmartPlaceableWrapper$1.$t = markType(SmartPlaceableWrapper$1, 'SmartPlaceableWrapper$1', Base.$, [ISmartPlaceable_$type]);
//# sourceMappingURL=SmartPlaceableWrapper$1.js.map
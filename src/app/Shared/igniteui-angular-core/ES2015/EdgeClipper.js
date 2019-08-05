/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, Point_$type, markType } from "./type";
/**
 * @hidden
 */
export class EdgeClipper extends Base {
    constructor() {
        super(...arguments);
        this.h = null;
        this._nextClipper = null;
        this.c = true;
        this.j = null;
        this.l = null;
        this.g = false;
        this.d = false;
        this.f = false;
    }
    get i() {
        return this.h;
    }
    set i(a) {
        if (this.h != a) {
            this.c = true;
            this.h = a;
        }
    }
    get nextClipper() {
        return this._nextClipper;
    }
    set nextClipper(a) {
        this._nextClipper = a;
    }
    add(a) {
        let b = this.e(a);
        if (this.c) {
            this.c = false;
            this.j = a;
        }
        else {
            if (true) {
                if (b) {
                    if (!this.g) {
                        this.h.add(this.k(this.l, a));
                    }
                    else {
                        if (!this.d && !this.f) {
                            this.h.add(this.l);
                            this.f = true;
                        }
                    }
                    this.h.add(a);
                }
                else {
                    if (this.g) {
                        if (!this.d && !this.f) {
                            this.h.add(this.l);
                            this.f = true;
                        }
                        this.h.add(this.k(this.l, a));
                    }
                }
            }
        }
        this.l = a;
        this.g = b;
    }
    clear() {
        if (this.d && !this.c) {
            this.add(this.j);
        }
        if (this._nextClipper != null) {
            this._nextClipper.clear();
        }
        this.c = true;
        this.f = false;
    }
    getEnumeratorObject() {
        return null;
    }
    getEnumerator() {
        return null;
    }
    get isReadOnly() {
        return false;
    }
    get count() {
        return 0;
    }
    remove(a) {
        return false;
    }
    removeAt(a) {
    }
    copyTo(a, b) {
    }
    contains(a) {
        return false;
    }
    item(a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return { $type: Point_$type, x: 0, y: 0 };
        }
    }
    insert(a, b) {
    }
    indexOf(a) {
        return -1;
    }
}
EdgeClipper.$t = markType(EdgeClipper, 'EdgeClipper', Base.$, [IList$1_$type.specialize(Point_$type)]);
//# sourceMappingURL=EdgeClipper.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
export class FastItemsSourceEventArgs extends EventArgs {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    super();
                    this._action = 0;
                    this._position = 0;
                    this._count = 0;
                    this._propertyName = null;
                    this.action = c;
                    this.position = d;
                    this.count = e;
                    this.propertyName = null;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super();
                    this._action = 0;
                    this._position = 0;
                    this._count = 0;
                    this._propertyName = null;
                    this.action = 3;
                    this.position = c;
                    this.count = 1;
                    this.propertyName = d;
                }
                break;
        }
    }
    get action() {
        return this._action;
    }
    set action(a) {
        this._action = a;
    }
    get position() {
        return this._position;
    }
    set position(a) {
        this._position = a;
    }
    get count() {
        return this._count;
    }
    set count(a) {
        this._count = a;
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(a) {
        this._propertyName = a;
    }
}
FastItemsSourceEventArgs.$t = markType(FastItemsSourceEventArgs, 'FastItemsSourceEventArgs', EventArgs.$);
//# sourceMappingURL=FastItemsSourceEventArgs.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScrollInfo } from "./ScrollInfo";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
/**
 * @hidden
 */
export class MergedScrollInfo extends ScrollInfo {
    constructor() {
        super();
        this._aw = false;
        this._av = false;
        this._az = null;
        this._at = null;
        this._az = new Dictionary$2(ScrollInfo.$, Base.$, 0);
    }
    _ak(a) {
        this._a1();
        super._ak(a);
    }
    get _au() {
        return this._at;
    }
    set _au(a) {
        this._at = a;
    }
    get _ax() {
        return this._av;
    }
    _a0(a) {
        if (!this._az.containsKey(a)) {
            this._az.addItem(a, null);
            let b = a;
            b.addListener(this, true);
        }
    }
    _a1() {
        if (!this._av) {
            this._av = true;
            if (this._at != null) {
                this._at();
            }
        }
    }
    _ay(a) {
        let b = this._az.removeItem(a);
        if (b) {
            let c = a;
            c.removeListener(this);
        }
        return b;
    }
    _a2() {
        if (!this._av) {
            return;
        }
        this._aw = true;
        try {
            let a = 0;
            let b = 0;
            for (let c of fromEnum(this._az.keys)) {
                if (!c._i) {
                    continue;
                }
                a = Math.max(a, c._af);
                b = Math.max(b, c._t);
            }
            this._aj(a, b, this._ac);
            for (let d of fromEnum(this._az.keys)) {
                if (!d._i) {
                    continue;
                }
                d._ac = this._ac;
            }
        }
        finally {
            this._aw = false;
            this._av = false;
        }
    }
    onPropertyValueChanged(a, b, c) {
        if (b == "Offset") {
            return;
        }
        this._a1();
    }
}
MergedScrollInfo.$t = markType(MergedScrollInfo, 'MergedScrollInfo', ScrollInfo.$, [IPropertyChangeListener_$type]);
//# sourceMappingURL=MergedScrollInfo.js.map
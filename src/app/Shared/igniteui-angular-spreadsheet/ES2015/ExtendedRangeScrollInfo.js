/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScrollInfo } from "./ScrollInfo";
import { Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { nullableIsNull } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class ExtendedRangeScrollInfo extends ScrollInfo {
    constructor() {
        super(...arguments);
        this._av = 0;
        this._aw = Nullable$1.toNullable(Number_$type, null);
    }
    _aq(a) {
        if (!this._at) {
            a = this._au(a);
        }
        super._aq(a);
    }
    get _at() {
        return this._av > 0;
    }
    get _ax() {
        return this._aw;
    }
    _ay() {
        this._av--;
        if (this._av == 0) {
            this._aw = Nullable$1.toNullable(Number_$type, null);
            this._ak("IsRangeChangeSuspended");
            this._au(this._ac);
        }
    }
    _az(a) {
        this._ac = a;
    }
    _a0(a = Nullable$1.toNullable(Number_$type, null)) {
        this._av++;
        if (this._av == 1) {
            this._aw = Nullable$1.toNullable(Number_$type, !nullableIsNull(a) ? a.value : this._ac);
            this._ak("IsRangeChangeSuspended");
        }
    }
}
ExtendedRangeScrollInfo.$t = markType(ExtendedRangeScrollInfo, 'ExtendedRangeScrollInfo', ScrollInfo.$);
//# sourceMappingURL=ExtendedRangeScrollInfo.js.map

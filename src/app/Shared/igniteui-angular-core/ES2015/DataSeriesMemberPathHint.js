/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, enumGetBox, markType } from "./type";
import { DataSeriesIntent_$type } from "./DataSeriesIntent";
import { stringIsNullOrEmpty, stringReplace } from "./string";
/**
 * @hidden
 */
export class DataSeriesMemberPathHint extends Base {
    constructor() {
        super(...arguments);
        this._path = null;
        this._intent = 0;
    }
    get path() {
        return this._path;
    }
    set path(a) {
        this._path = a;
    }
    get intent() {
        return this._intent;
    }
    set intent(a) {
        this._intent = a;
    }
    equals(a) {
        let b = typeCast(DataSeriesMemberPathHint.$, a);
        if (b == null) {
            return false;
        }
        if (!Base.equalsStatic(this.path, b.path)) {
            return false;
        }
        if (this.intent != b.intent) {
            return false;
        }
        return true;
    }
    toString() {
        return enumGetBox(DataSeriesIntent_$type, this.intent) + " Path = '" + this.path + "'";
    }
    update1(a, b = null) {
        this.path = stringIsNullOrEmpty(b) ? a : stringReplace(b, "NAME", a);
    }
    update(a, b = null) {
        if (a.count == 0) {
            return;
        }
        this.update1(a._inner[0], b);
    }
    hasPath() {
        return !stringIsNullOrEmpty(this.path);
    }
    clone() {
        return ((() => {
            let $ret = new DataSeriesMemberPathHint();
            $ret.intent = this.intent;
            $ret.path = this.path;
            return $ret;
        })());
    }
}
DataSeriesMemberPathHint.$t = markType(DataSeriesMemberPathHint, 'DataSeriesMemberPathHint');
//# sourceMappingURL=DataSeriesMemberPathHint.js.map
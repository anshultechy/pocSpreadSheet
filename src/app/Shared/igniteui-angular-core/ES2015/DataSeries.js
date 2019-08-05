/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, enumGetBox, fromEnum, markType } from "./type";
import { DataSeriesType_$type } from "./DataSeriesType";
import { List$1 } from "./List$1";
import { DataSeriesMemberPathHint } from "./DataSeriesMemberPathHint";
import { stringIsNullOrEmpty } from "./string";
/**
 * @hidden
 */
export class DataSeries extends Base {
    constructor() {
        super();
        this.j = null;
        this._name = null;
        this._title = null;
        this._data = null;
        this._priority = 0;
        this._index = 0;
        this._suggestedPrimaryAxis = 0;
        this._suggestedSecondaryAxis = 0;
        this._suggestedSeries = 0;
        this._dataPath = null;
        this._suggestedMarker = 0;
        this.j = new List$1(DataSeriesMemberPathHint.$, 0);
        this.suggestedMarker = 0;
        this.index = -1;
        this.priority = -1;
    }
    get name() {
        return this._name;
    }
    set name(a) {
        this._name = a;
    }
    get title() {
        return this._title;
    }
    set title(a) {
        this._title = a;
    }
    get data() {
        return this._data;
    }
    set data(a) {
        this._data = a;
    }
    get priority() {
        return this._priority;
    }
    set priority(a) {
        this._priority = a;
    }
    get index() {
        return this._index;
    }
    set index(a) {
        this._index = a;
    }
    get suggestedPrimaryAxis() {
        return this._suggestedPrimaryAxis;
    }
    set suggestedPrimaryAxis(a) {
        this._suggestedPrimaryAxis = a;
    }
    get suggestedSecondaryAxis() {
        return this._suggestedSecondaryAxis;
    }
    set suggestedSecondaryAxis(a) {
        this._suggestedSecondaryAxis = a;
    }
    get suggestedSeries() {
        return this._suggestedSeries;
    }
    set suggestedSeries(a) {
        this._suggestedSeries = a;
    }
    get dataPath() {
        return this._dataPath;
    }
    set dataPath(a) {
        this._dataPath = a;
    }
    get suggestedMarker() {
        return this._suggestedMarker;
    }
    set suggestedMarker(a) {
        this._suggestedMarker = a;
    }
    addMemberPathHint(a) {
        this.j.add(a);
    }
    addMemberPathHint1(a, b) {
        let c = a.clone();
        c.intent = b;
        this.j.add(c);
    }
    addMemberPathHint2(a, b) {
        let c = new DataSeriesMemberPathHint();
        c.intent = b;
        c.path = a;
        this.j.add(c);
    }
    removeMemberPathHint(a) {
        this.j.remove(a);
    }
    clearMemberPathHints() {
        this.j.clear();
    }
    getMemberPathHintCount() {
        return this.j.count;
    }
    getMemberPathHintAt(a) {
        return this.j._inner[a];
    }
    findMatchingHint(a) {
        for (let b = 0; b < this.j.count; b++) {
            if (this.j._inner[b].intent == a) {
                return this.j._inner[b];
            }
        }
        return null;
    }
    getMemberPathFor(a) {
        let b = this.findMatchingHint(a);
        if (b == null) {
            return "";
        }
        return b.path;
    }
    hasMatchingHint(a) {
        let b = this.findMatchingHint(a);
        if (b == null) {
            return false;
        }
        if (stringIsNullOrEmpty(b.path)) {
            return false;
        }
        return true;
    }
    i() {
        return this.j;
    }
    equals(a) {
        let b = typeCast(DataSeries.$, a);
        if (b == null) {
            return false;
        }
        if (!Base.equalsStatic(this.name, b.name)) {
            return false;
        }
        if (!Base.equalsStatic(this.title, b.title)) {
            return false;
        }
        if (this.data != b.data) {
            return false;
        }
        if (this.priority != b.priority) {
            return false;
        }
        if (this.suggestedPrimaryAxis != b.suggestedPrimaryAxis) {
            return false;
        }
        if (this.suggestedSecondaryAxis != b.suggestedSecondaryAxis) {
            return false;
        }
        if (this.suggestedSeries != b.suggestedSeries) {
            return false;
        }
        if (this.suggestedMarker != b.suggestedMarker) {
            return false;
        }
        if (!Base.equalsStatic(this.dataPath, b.dataPath)) {
            return false;
        }
        let c = this.i();
        let d = b.i();
        if (c.count != d.count) {
            return false;
        }
        for (let e = 0; e < c.count; e++) {
            if (!c.item(e).equals(d.item(e))) {
                return false;
            }
        }
        return true;
    }
    toString() {
        let a = enumGetBox(DataSeriesType_$type, this.suggestedSeries) + " hints: ";
        for (let b of fromEnum(this.j)) {
            a += " {" + b.toString() + "}, ";
        }
        return a;
    }
}
DataSeries.$t = markType(DataSeries, 'DataSeries');
//# sourceMappingURL=DataSeries.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";
import { ShapeTags } from "./ShapeTags";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export class PrimitiveVisualData extends Base {
    constructor(a, ..._rest) {
        super();
        this._appearance = null;
        this._tags = null;
        this._name = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.name = c;
                    this.tags = new ShapeTags();
                    this.appearance = new PrimitiveAppearanceData();
                }
                break;
        }
    }
    get appearance() {
        return this._appearance;
    }
    set appearance(a) {
        this._appearance = a;
    }
    get tags() {
        return this._tags;
    }
    set tags(a) {
        this._tags = a;
    }
    get name() {
        return this._name;
    }
    set name(a) {
        this._name = a;
    }
    scaleByViewport(a) {
        this.appearance.m(a);
    }
    getPoints(a) {
        let b = new List$1(List$1.$.specialize(PointData.$), 0);
        this.getPointsOverride(b, a);
        return b;
    }
    serialize() {
        let a = new StringBuilder(0);
        a.u("{");
        a.u("appearance: " + (this.appearance != null ? this.appearance.serialize() : "null") + ", ");
        a.u("tags: [");
        for (let b = 0; b < this.tags.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l("\"" + this.tags._inner[b] + "\"");
        }
        a.u("],");
        a.u("type: \"" + this.type + "\", ");
        a.u("name: \"" + this.name + "\", ");
        a.u(this.e());
        a.u("}");
        return a.toString();
    }
    e() {
        return "";
    }
}
PrimitiveVisualData.$t = markType(PrimitiveVisualData, 'PrimitiveVisualData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=PrimitiveVisualData.js.map
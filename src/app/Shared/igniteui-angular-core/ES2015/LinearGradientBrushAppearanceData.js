/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BrushAppearanceData } from "./BrushAppearanceData";
import { List$1 } from "./List$1";
import { GradientStopAppearanceData } from "./GradientStopAppearanceData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
export class LinearGradientBrushAppearanceData extends BrushAppearanceData {
    constructor() {
        super();
        this._startX = 0;
        this._startY = 0;
        this._endX = 0;
        this._endY = 0;
        this._stops = null;
        this.stops = new List$1(GradientStopAppearanceData.$, 0);
    }
    get_type() {
        return "linear";
    }
    get type() {
        return this.get_type();
    }
    get startX() {
        return this._startX;
    }
    set startX(a) {
        this._startX = a;
    }
    get startY() {
        return this._startY;
    }
    set startY(a) {
        this._startY = a;
    }
    get endX() {
        return this._endX;
    }
    set endX(a) {
        this._endX = a;
    }
    get endY() {
        return this._endY;
    }
    set endY(a) {
        this._endY = a;
    }
    get stops() {
        return this._stops;
    }
    set stops(a) {
        this._stops = a;
    }
    a() {
        let a = new StringBuilder(0);
        a.l("startX: " + this.startX + ", endX: " + this.endX + ", startY: " + this.startY + ", endY: " + this.endY);
        a.l(", stops: [");
        for (let b = 0; b < this.stops.count; b++) {
            if (b > 0) {
                a.l(", ");
            }
            a.l(this.stops._inner[b].serialize());
        }
        a.l("]");
        return a.toString();
    }
}
LinearGradientBrushAppearanceData.$t = markType(LinearGradientBrushAppearanceData, 'LinearGradientBrushAppearanceData', BrushAppearanceData.$);
//# sourceMappingURL=LinearGradientBrushAppearanceData.js.map
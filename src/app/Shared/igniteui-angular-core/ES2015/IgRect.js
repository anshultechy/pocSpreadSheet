/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { typeCast } from "./type";
import { Rect } from "./Rect";
export function isRect(r) {
    if (r == null)
        return false;
    if (typeCast(Rect.$t, r) != null)
        return true;
    if (typeof r.x === "number" && typeof r.y === "number" &&
        typeof r.width === "number" && typeof r.height === "number")
        return true;
    //if (typeof r.left === "number" && typeof r.top === "number" &&
    //    typeof r.right === "number" && typeof r.bottom === "number")
    //    return true;
    return false;
}
export function rectFromLiteral(r) {
    if (r == null)
        return new Rect(0, 0, 0, 0, 0);
    var cast = typeCast(Rect.$t, r);
    if (cast != null)
        return cast;
    return new Rect(0, r.left, r.top, r.width, r.height);
}
export function rectToLiteral(r) {
    if (r == null)
        return null;
    return { left: r.left, top: r.top, width: r.width, height: r.height };
}
//# sourceMappingURL=IgRect.js.map
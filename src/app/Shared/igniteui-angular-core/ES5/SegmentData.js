/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
var SegmentData = /** @class */ (function (_super) {
    tslib_1.__extends(SegmentData, _super);
    function SegmentData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentData.prototype.serialize = function () {
        var a = new StringBuilder(0);
        a.u("{");
        a.u("type: \"" + this.type + "\", ");
        a.u(this.a());
        a.u("}");
        return a.toString();
    };
    SegmentData.prototype.a = function () {
        return "";
    };
    SegmentData.$t = markType(SegmentData, 'SegmentData', Base.$, [IVisualData_$type]);
    return SegmentData;
}(Base));
export { SegmentData };
//# sourceMappingURL=SegmentData.js.map
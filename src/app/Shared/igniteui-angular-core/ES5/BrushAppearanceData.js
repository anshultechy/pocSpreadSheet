/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
/**
 * @hidden
 */
var BrushAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(BrushAppearanceData, _super);
    function BrushAppearanceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushAppearanceData.prototype.serialize = function () {
        return "{ type: \"" + this.type + "\", " + this.a() + " }";
    };
    BrushAppearanceData.prototype.a = function () {
        return "";
    };
    BrushAppearanceData.$t = markType(BrushAppearanceData, 'BrushAppearanceData', Base.$, [IVisualData_$type]);
    return BrushAppearanceData;
}(Base));
export { BrushAppearanceData };
//# sourceMappingURL=BrushAppearanceData.js.map
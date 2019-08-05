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
var GeometryData = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryData, _super);
    function GeometryData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeometryData.prototype.serialize = function () {
        return "{ type: \"" + this.type + "\", " + this.a() + "}";
    };
    GeometryData.prototype.a = function () {
        return "";
    };
    GeometryData.$t = markType(GeometryData, 'GeometryData', Base.$, [IVisualData_$type]);
    return GeometryData;
}(Base));
export { GeometryData };
//# sourceMappingURL=GeometryData.js.map
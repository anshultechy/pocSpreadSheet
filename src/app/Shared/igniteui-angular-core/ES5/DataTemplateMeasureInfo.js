/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var DataTemplateMeasureInfo = /** @class */ (function (_super) {
    tslib_1.__extends(DataTemplateMeasureInfo, _super);
    function DataTemplateMeasureInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContext = null;
        _this.context = null;
        _this.width = 0;
        _this.height = 0;
        _this.isConstant = false;
        _this.data = null;
        _this.passInfo = null;
        _this.renderOffsetX = 0;
        _this.renderOffsetY = 0;
        return _this;
    }
    DataTemplateMeasureInfo.$t = markType(DataTemplateMeasureInfo, 'DataTemplateMeasureInfo');
    return DataTemplateMeasureInfo;
}(Base));
export { DataTemplateMeasureInfo };
//# sourceMappingURL=DataTemplateMeasureInfo.js.map
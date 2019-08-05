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
var DataTemplatePassInfo = /** @class */ (function (_super) {
    tslib_1.__extends(DataTemplatePassInfo, _super);
    function DataTemplatePassInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContext = null;
        _this.context = null;
        _this.viewportTop = 0;
        _this.viewportLeft = 0;
        _this.viewportWidth = 0;
        _this.viewportHeight = 0;
        _this.isHitTestRender = false;
        _this.passID = null;
        return _this;
    }
    DataTemplatePassInfo.$t = markType(DataTemplatePassInfo, 'DataTemplatePassInfo');
    return DataTemplatePassInfo;
}(Base));
export { DataTemplatePassInfo };
//# sourceMappingURL=DataTemplatePassInfo.js.map
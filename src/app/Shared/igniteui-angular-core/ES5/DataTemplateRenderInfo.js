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
var DataTemplateRenderInfo = /** @class */ (function (_super) {
    tslib_1.__extends(DataTemplateRenderInfo, _super);
    function DataTemplateRenderInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContext = null;
        _this.context = null;
        _this.xPosition = 0;
        _this.yPosition = 0;
        _this.availableWidth = 0;
        _this.availableHeight = 0;
        _this.data = null;
        _this.isHitTestRender = false;
        _this.passInfo = null;
        _this.renderOffsetX = 0;
        _this.renderOffsetY = 0;
        return _this;
    }
    DataTemplateRenderInfo.$t = markType(DataTemplateRenderInfo, 'DataTemplateRenderInfo');
    return DataTemplateRenderInfo;
}(Base));
export { DataTemplateRenderInfo };
//# sourceMappingURL=DataTemplateRenderInfo.js.map
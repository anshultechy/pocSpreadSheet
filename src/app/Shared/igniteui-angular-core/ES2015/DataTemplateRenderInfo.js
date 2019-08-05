/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class DataTemplateRenderInfo extends Base {
    constructor() {
        super(...arguments);
        this.renderContext = null;
        this.context = null;
        this.xPosition = 0;
        this.yPosition = 0;
        this.availableWidth = 0;
        this.availableHeight = 0;
        this.data = null;
        this.isHitTestRender = false;
        this.passInfo = null;
        this.renderOffsetX = 0;
        this.renderOffsetY = 0;
    }
}
DataTemplateRenderInfo.$t = markType(DataTemplateRenderInfo, 'DataTemplateRenderInfo');
//# sourceMappingURL=DataTemplateRenderInfo.js.map
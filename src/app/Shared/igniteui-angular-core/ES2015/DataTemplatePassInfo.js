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
export class DataTemplatePassInfo extends Base {
    constructor() {
        super(...arguments);
        this.renderContext = null;
        this.context = null;
        this.viewportTop = 0;
        this.viewportLeft = 0;
        this.viewportWidth = 0;
        this.viewportHeight = 0;
        this.isHitTestRender = false;
        this.passID = null;
    }
}
DataTemplatePassInfo.$t = markType(DataTemplatePassInfo, 'DataTemplatePassInfo');
//# sourceMappingURL=DataTemplatePassInfo.js.map
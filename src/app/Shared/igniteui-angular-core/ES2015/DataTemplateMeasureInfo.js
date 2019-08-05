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
export class DataTemplateMeasureInfo extends Base {
    constructor() {
        super(...arguments);
        this.renderContext = null;
        this.context = null;
        this.width = 0;
        this.height = 0;
        this.isConstant = false;
        this.data = null;
        this.passInfo = null;
        this.renderOffsetX = 0;
        this.renderOffsetY = 0;
    }
}
DataTemplateMeasureInfo.$t = markType(DataTemplateMeasureInfo, 'DataTemplateMeasureInfo');
//# sourceMappingURL=DataTemplateMeasureInfo.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FrameworkElement } from "./FrameworkElement";
import { markType } from "./type";
/**
 * @hidden
 */
export class Image extends FrameworkElement {
    constructor() {
        super(...arguments);
        this.ac = null;
        this.ab = false;
    }
}
Image.$t = markType(Image, 'Image', FrameworkElement.$);
//# sourceMappingURL=Image.js.map
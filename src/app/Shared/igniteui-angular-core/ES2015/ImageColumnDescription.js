/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ImageColumnDescription extends ColumnDescription {
    constructor() {
        super();
        this.cc = null;
    }
    get_type() {
        return "ImageColumn";
    }
    get imageStretchOption() {
        return this.cc;
    }
    set imageStretchOption(a) {
        this.cc = a;
        this.e("ImageStretchOption");
    }
}
ImageColumnDescription.$t = markType(ImageColumnDescription, 'ImageColumnDescription', ColumnDescription.$);
//# sourceMappingURL=ImageColumnDescription.js.map
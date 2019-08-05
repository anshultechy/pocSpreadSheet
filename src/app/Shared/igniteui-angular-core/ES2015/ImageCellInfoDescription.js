/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ImageCellInfoDescription extends CellInfoDescription {
    constructor() {
        super();
        this.c2 = null;
        this.c4 = null;
        this.c3 = null;
    }
    get_type() {
        return "ImageCellInfo";
    }
    get imagePath() {
        return this.c2;
    }
    set imagePath(a) {
        this.c2 = a;
        this.e("ImagePath");
    }
    get imageStretchOption() {
        return this.c4;
    }
    set imageStretchOption(a) {
        this.c4 = a;
        this.e("ImageStretchOption");
    }
    get imageResourceType() {
        return this.c3;
    }
    set imageResourceType(a) {
        this.c3 = a;
        this.e("ImageResourceType");
    }
}
ImageCellInfoDescription.$t = markType(ImageCellInfoDescription, 'ImageCellInfoDescription', CellInfoDescription.$);
//# sourceMappingURL=ImageCellInfoDescription.js.map
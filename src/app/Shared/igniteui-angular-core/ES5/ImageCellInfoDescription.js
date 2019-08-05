/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ImageCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ImageCellInfoDescription, _super);
    function ImageCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c2 = null;
        _this.c4 = null;
        _this.c3 = null;
        return _this;
    }
    ImageCellInfoDescription.prototype.get_type = function () {
        return "ImageCellInfo";
    };
    Object.defineProperty(ImageCellInfoDescription.prototype, "imagePath", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("ImagePath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCellInfoDescription.prototype, "imageStretchOption", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("ImageStretchOption");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCellInfoDescription.prototype, "imageResourceType", {
        get: function () {
            return this.c3;
        },
        set: function (a) {
            this.c3 = a;
            this.e("ImageResourceType");
        },
        enumerable: true,
        configurable: true
    });
    ImageCellInfoDescription.$t = markType(ImageCellInfoDescription, 'ImageCellInfoDescription', CellInfoDescription.$);
    return ImageCellInfoDescription;
}(CellInfoDescription));
export { ImageCellInfoDescription };
//# sourceMappingURL=ImageCellInfoDescription.js.map
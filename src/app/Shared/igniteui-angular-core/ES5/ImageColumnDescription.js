/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ImageColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ImageColumnDescription, _super);
    function ImageColumnDescription() {
        var _this = _super.call(this) || this;
        _this.cc = null;
        return _this;
    }
    ImageColumnDescription.prototype.get_type = function () {
        return "ImageColumn";
    };
    Object.defineProperty(ImageColumnDescription.prototype, "imageStretchOption", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("ImageStretchOption");
        },
        enumerable: true,
        configurable: true
    });
    ImageColumnDescription.$t = markType(ImageColumnDescription, 'ImageColumnDescription', ColumnDescription.$);
    return ImageColumnDescription;
}(ColumnDescription));
export { ImageColumnDescription };
//# sourceMappingURL=ImageColumnDescription.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { ImageColumnDescription } from "./ImageColumnDescription";
/**
 * @hidden
 */
var ImageColumnDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ImageColumnDescriptionMetadata, _super);
    function ImageColumnDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageColumnDescriptionMetadata.b = function (a) {
        if (ImageColumnDescriptionMetadata.a == null) {
            ImageColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ImageColumnDescriptionMetadata.c(a, ImageColumnDescriptionMetadata.a);
        }
    };
    ImageColumnDescriptionMetadata.c = function (a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("ImageStretchOption", "ExportedType:string:ImageStretchOptions");
    };
    ImageColumnDescriptionMetadata.d = function (a) {
        ImageColumnDescriptionMetadata.b(a);
        a.n("ImageColumn", function () { return new ImageColumnDescription(); });
        a.m("ImageColumn", ImageColumnDescriptionMetadata.a);
    };
    ImageColumnDescriptionMetadata.$t = markType(ImageColumnDescriptionMetadata, 'ImageColumnDescriptionMetadata');
    ImageColumnDescriptionMetadata.a = null;
    return ImageColumnDescriptionMetadata;
}(Base));
export { ImageColumnDescriptionMetadata };
//# sourceMappingURL=ImageColumnDescriptionMetadata.js.map
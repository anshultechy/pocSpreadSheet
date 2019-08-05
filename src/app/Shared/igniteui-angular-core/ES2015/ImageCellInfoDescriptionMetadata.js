/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { ImageCellInfoDescription } from "./ImageCellInfoDescription";
/**
 * @hidden
 */
export class ImageCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (ImageCellInfoDescriptionMetadata.a == null) {
            ImageCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ImageCellInfoDescriptionMetadata.c(a, ImageCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("ImagePath", "String");
        b.item("ImageStretchOption", "ExportedType:string:ImageStretchOptions");
        b.item("ImageResourceType", "ExportedType:string:ImageResourceType");
    }
    static d(a) {
        ImageCellInfoDescriptionMetadata.b(a);
        a.n("ImageCellInfo", () => new ImageCellInfoDescription());
        a.m("ImageCellInfo", ImageCellInfoDescriptionMetadata.a);
    }
}
ImageCellInfoDescriptionMetadata.$t = markType(ImageCellInfoDescriptionMetadata, 'ImageCellInfoDescriptionMetadata');
ImageCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=ImageCellInfoDescriptionMetadata.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
export class ColorScaleDescriptionMetadata extends Base {
    static b(a) {
        if (ColorScaleDescriptionMetadata.a == null) {
            ColorScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColorScaleDescriptionMetadata.c(a, ColorScaleDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    }
    static d(a) {
        ColorScaleDescriptionMetadata.b(a);
        a.m("ColorScale", ColorScaleDescriptionMetadata.a);
    }
}
ColorScaleDescriptionMetadata.$t = markType(ColorScaleDescriptionMetadata, 'ColorScaleDescriptionMetadata');
ColorScaleDescriptionMetadata.a = null;
//# sourceMappingURL=ColorScaleDescriptionMetadata.js.map
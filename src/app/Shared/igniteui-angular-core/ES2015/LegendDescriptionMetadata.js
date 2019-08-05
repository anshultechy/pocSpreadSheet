/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { LegendDescription } from "./LegendDescription";
/**
 * @hidden
 */
export class LegendDescriptionMetadata extends Base {
    static e(a, b) {
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
    }
    static b(a) {
        if (LegendDescriptionMetadata.a == null) {
            LegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendDescriptionMetadata.c(a, LegendDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
        b.item("Orientation", "ExportedType:string:LegendOrientation");
        b.item("TextColor", "String");
        b.item("TextStyle", "String");
        LegendDescriptionMetadata.e(a, b);
    }
    static d(a) {
        LegendDescriptionMetadata.b(a);
        a.n("Legend", () => new LegendDescription());
        a.m("Legend", LegendDescriptionMetadata.a);
    }
}
LegendDescriptionMetadata.$t = markType(LegendDescriptionMetadata, 'LegendDescriptionMetadata');
LegendDescriptionMetadata.a = null;
//# sourceMappingURL=LegendDescriptionMetadata.js.map
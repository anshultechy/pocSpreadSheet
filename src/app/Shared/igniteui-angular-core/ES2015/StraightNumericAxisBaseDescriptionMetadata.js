/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
/**
 * @hidden
 */
export class StraightNumericAxisBaseDescriptionMetadata extends Base {
    static b(a) {
        if (StraightNumericAxisBaseDescriptionMetadata.a == null) {
            StraightNumericAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StraightNumericAxisBaseDescriptionMetadata.c(a, StraightNumericAxisBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("ScaleMode", "ExportedType:string:NumericScaleMode");
    }
    static d(a) {
        StraightNumericAxisBaseDescriptionMetadata.b(a);
        a.m("StraightNumericAxisBase", StraightNumericAxisBaseDescriptionMetadata.a);
    }
}
StraightNumericAxisBaseDescriptionMetadata.$t = markType(StraightNumericAxisBaseDescriptionMetadata, 'StraightNumericAxisBaseDescriptionMetadata');
StraightNumericAxisBaseDescriptionMetadata.a = null;
//# sourceMappingURL=StraightNumericAxisBaseDescriptionMetadata.js.map
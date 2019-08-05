/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
/**
 * @hidden
 */
var StraightNumericAxisBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StraightNumericAxisBaseDescriptionMetadata, _super);
    function StraightNumericAxisBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StraightNumericAxisBaseDescriptionMetadata.b = function (a) {
        if (StraightNumericAxisBaseDescriptionMetadata.a == null) {
            StraightNumericAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StraightNumericAxisBaseDescriptionMetadata.c(a, StraightNumericAxisBaseDescriptionMetadata.a);
        }
    };
    StraightNumericAxisBaseDescriptionMetadata.c = function (a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("ScaleMode", "ExportedType:string:NumericScaleMode");
    };
    StraightNumericAxisBaseDescriptionMetadata.d = function (a) {
        StraightNumericAxisBaseDescriptionMetadata.b(a);
        a.m("StraightNumericAxisBase", StraightNumericAxisBaseDescriptionMetadata.a);
    };
    StraightNumericAxisBaseDescriptionMetadata.$t = markType(StraightNumericAxisBaseDescriptionMetadata, 'StraightNumericAxisBaseDescriptionMetadata');
    StraightNumericAxisBaseDescriptionMetadata.a = null;
    return StraightNumericAxisBaseDescriptionMetadata;
}(Base));
export { StraightNumericAxisBaseDescriptionMetadata };
//# sourceMappingURL=StraightNumericAxisBaseDescriptionMetadata.js.map
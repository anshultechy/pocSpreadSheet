/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PrimaryKeyValueDescription } from "./PrimaryKeyValueDescription";
/**
 * @hidden
 */
var PrimaryKeyValueDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PrimaryKeyValueDescriptionMetadata, _super);
    function PrimaryKeyValueDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryKeyValueDescriptionMetadata.b = function (a) {
        if (PrimaryKeyValueDescriptionMetadata.a == null) {
            PrimaryKeyValueDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PrimaryKeyValueDescriptionMetadata.c(a, PrimaryKeyValueDescriptionMetadata.a);
        }
    };
    PrimaryKeyValueDescriptionMetadata.c = function (a, b) {
    };
    PrimaryKeyValueDescriptionMetadata.d = function (a) {
        PrimaryKeyValueDescriptionMetadata.b(a);
        a.n("PrimaryKeyValue", function () { return new PrimaryKeyValueDescription(); });
        a.m("PrimaryKeyValue", PrimaryKeyValueDescriptionMetadata.a);
    };
    PrimaryKeyValueDescriptionMetadata.$t = markType(PrimaryKeyValueDescriptionMetadata, 'PrimaryKeyValueDescriptionMetadata');
    PrimaryKeyValueDescriptionMetadata.a = null;
    return PrimaryKeyValueDescriptionMetadata;
}(Base));
export { PrimaryKeyValueDescriptionMetadata };
//# sourceMappingURL=PrimaryKeyValueDescriptionMetadata.js.map
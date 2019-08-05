/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBaseDescriptionMetadata } from "./TimeAxisBaseDescriptionMetadata";
import { TimeXAxisDescription } from "./TimeXAxisDescription";
/**
 * @hidden
 */
var TimeXAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TimeXAxisDescriptionMetadata, _super);
    function TimeXAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeXAxisDescriptionMetadata.b = function (a) {
        if (TimeXAxisDescriptionMetadata.a == null) {
            TimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeXAxisDescriptionMetadata.c(a, TimeXAxisDescriptionMetadata.a);
        }
    };
    TimeXAxisDescriptionMetadata.c = function (a, b) {
        TimeAxisBaseDescriptionMetadata.c(a, b);
    };
    TimeXAxisDescriptionMetadata.d = function (a) {
        TimeXAxisDescriptionMetadata.b(a);
        a.n("TimeXAxis", function () { return new TimeXAxisDescription(); });
        a.m("TimeXAxis", TimeXAxisDescriptionMetadata.a);
    };
    TimeXAxisDescriptionMetadata.$t = markType(TimeXAxisDescriptionMetadata, 'TimeXAxisDescriptionMetadata');
    TimeXAxisDescriptionMetadata.a = null;
    return TimeXAxisDescriptionMetadata;
}(Base));
export { TimeXAxisDescriptionMetadata };
//# sourceMappingURL=TimeXAxisDescriptionMetadata.js.map
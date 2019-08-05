/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBreakDescription } from "./TimeAxisBreakDescription";
/**
 * @hidden
 */
var TimeAxisBreakDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisBreakDescriptionMetadata, _super);
    function TimeAxisBreakDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeAxisBreakDescriptionMetadata.b = function (a) {
        if (TimeAxisBreakDescriptionMetadata.a == null) {
            TimeAxisBreakDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisBreakDescriptionMetadata.c(a, TimeAxisBreakDescriptionMetadata.a);
        }
    };
    TimeAxisBreakDescriptionMetadata.c = function (a, b) {
        b.item("Start", "Date");
        b.item("End", "Date");
        b.item("Interval", "TimeSpan");
    };
    TimeAxisBreakDescriptionMetadata.d = function (a) {
        TimeAxisBreakDescriptionMetadata.b(a);
        a.n("TimeAxisBreak", function () { return new TimeAxisBreakDescription(); });
        a.m("TimeAxisBreak", TimeAxisBreakDescriptionMetadata.a);
    };
    TimeAxisBreakDescriptionMetadata.$t = markType(TimeAxisBreakDescriptionMetadata, 'TimeAxisBreakDescriptionMetadata');
    TimeAxisBreakDescriptionMetadata.a = null;
    return TimeAxisBreakDescriptionMetadata;
}(Base));
export { TimeAxisBreakDescriptionMetadata };
//# sourceMappingURL=TimeAxisBreakDescriptionMetadata.js.map
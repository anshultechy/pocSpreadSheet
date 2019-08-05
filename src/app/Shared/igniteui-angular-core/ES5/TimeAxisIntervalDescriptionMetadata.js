/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisIntervalDescription } from "./TimeAxisIntervalDescription";
/**
 * @hidden
 */
var TimeAxisIntervalDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisIntervalDescriptionMetadata, _super);
    function TimeAxisIntervalDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeAxisIntervalDescriptionMetadata.b = function (a) {
        if (TimeAxisIntervalDescriptionMetadata.a == null) {
            TimeAxisIntervalDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisIntervalDescriptionMetadata.c(a, TimeAxisIntervalDescriptionMetadata.a);
        }
    };
    TimeAxisIntervalDescriptionMetadata.c = function (a, b) {
        b.item("Range", "TimeSpan");
        b.item("Interval", "Number:double");
        b.item("IntervalType", "ExportedType:string:TimeAxisIntervalType");
    };
    TimeAxisIntervalDescriptionMetadata.d = function (a) {
        TimeAxisIntervalDescriptionMetadata.b(a);
        a.n("TimeAxisInterval", function () { return new TimeAxisIntervalDescription(); });
        a.m("TimeAxisInterval", TimeAxisIntervalDescriptionMetadata.a);
    };
    TimeAxisIntervalDescriptionMetadata.$t = markType(TimeAxisIntervalDescriptionMetadata, 'TimeAxisIntervalDescriptionMetadata');
    TimeAxisIntervalDescriptionMetadata.a = null;
    return TimeAxisIntervalDescriptionMetadata;
}(Base));
export { TimeAxisIntervalDescriptionMetadata };
//# sourceMappingURL=TimeAxisIntervalDescriptionMetadata.js.map
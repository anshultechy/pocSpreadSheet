/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";
/**
 * @hidden
 */
var TimeAxisBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisBaseDescriptionMetadata, _super);
    function TimeAxisBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeAxisBaseDescriptionMetadata.b = function (a) {
        if (TimeAxisBaseDescriptionMetadata.a == null) {
            TimeAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TimeAxisBaseDescriptionMetadata.c(a, TimeAxisBaseDescriptionMetadata.a);
        }
    };
    TimeAxisBaseDescriptionMetadata.c = function (a, b) {
        CategoryAxisBaseDescriptionMetadata.c(a, b);
        b.item("DateTimeMemberPath", "String");
        b.item("IsDataPreSorted", "Boolean");
        b.item("ActualMinimumValue", "Date");
        b.item("ActualMaximumValue", "Date");
        b.item("MinimumValue", "Date");
        b.item("MaximumValue", "Date");
    };
    TimeAxisBaseDescriptionMetadata.d = function (a) {
        TimeAxisBaseDescriptionMetadata.b(a);
        a.m("TimeAxisBase", TimeAxisBaseDescriptionMetadata.a);
    };
    TimeAxisBaseDescriptionMetadata.$t = markType(TimeAxisBaseDescriptionMetadata, 'TimeAxisBaseDescriptionMetadata');
    TimeAxisBaseDescriptionMetadata.a = null;
    return TimeAxisBaseDescriptionMetadata;
}(Base));
export { TimeAxisBaseDescriptionMetadata };
//# sourceMappingURL=TimeAxisBaseDescriptionMetadata.js.map
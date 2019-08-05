/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisRangeChangedEventArgsDescription } from "./AxisRangeChangedEventArgsDescription";
/**
 * @hidden
 */
var AxisRangeChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AxisRangeChangedEventArgsDescriptionMetadata, _super);
    function AxisRangeChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisRangeChangedEventArgsDescriptionMetadata.b = function (a) {
        if (AxisRangeChangedEventArgsDescriptionMetadata.a == null) {
            AxisRangeChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AxisRangeChangedEventArgsDescriptionMetadata.c(a, AxisRangeChangedEventArgsDescriptionMetadata.a);
        }
    };
    AxisRangeChangedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("OldMinimumValue", "Number:double");
        b.item("MinimumValue", "Number:double");
        b.item("OldMaximumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
    };
    AxisRangeChangedEventArgsDescriptionMetadata.d = function (a) {
        AxisRangeChangedEventArgsDescriptionMetadata.b(a);
        a.n("AxisRangeChangedEventArgs", function () { return new AxisRangeChangedEventArgsDescription(); });
        a.m("AxisRangeChangedEventArgs", AxisRangeChangedEventArgsDescriptionMetadata.a);
    };
    AxisRangeChangedEventArgsDescriptionMetadata.$t = markType(AxisRangeChangedEventArgsDescriptionMetadata, 'AxisRangeChangedEventArgsDescriptionMetadata');
    AxisRangeChangedEventArgsDescriptionMetadata.a = null;
    return AxisRangeChangedEventArgsDescriptionMetadata;
}(Base));
export { AxisRangeChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=AxisRangeChangedEventArgsDescriptionMetadata.js.map
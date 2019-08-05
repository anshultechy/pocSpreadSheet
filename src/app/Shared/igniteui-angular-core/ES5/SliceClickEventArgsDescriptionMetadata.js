/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SliceClickEventArgsDescription } from "./SliceClickEventArgsDescription";
/**
 * @hidden
 */
var SliceClickEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SliceClickEventArgsDescriptionMetadata, _super);
    function SliceClickEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliceClickEventArgsDescriptionMetadata.b = function (a) {
        if (SliceClickEventArgsDescriptionMetadata.a == null) {
            SliceClickEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SliceClickEventArgsDescriptionMetadata.c(a, SliceClickEventArgsDescriptionMetadata.a);
        }
    };
    SliceClickEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("IsSelected", "Boolean");
        b.item("IsExploded", "Boolean");
        b.item("OriginalEventRef", "(w:OriginalEvent,wf:OriginalEvent)DataRef");
    };
    SliceClickEventArgsDescriptionMetadata.d = function (a) {
        SliceClickEventArgsDescriptionMetadata.b(a);
        a.n("SliceClickEventArgs", function () { return new SliceClickEventArgsDescription(); });
        a.m("SliceClickEventArgs", SliceClickEventArgsDescriptionMetadata.a);
    };
    SliceClickEventArgsDescriptionMetadata.$t = markType(SliceClickEventArgsDescriptionMetadata, 'SliceClickEventArgsDescriptionMetadata');
    SliceClickEventArgsDescriptionMetadata.a = null;
    return SliceClickEventArgsDescriptionMetadata;
}(Base));
export { SliceClickEventArgsDescriptionMetadata };
//# sourceMappingURL=SliceClickEventArgsDescriptionMetadata.js.map
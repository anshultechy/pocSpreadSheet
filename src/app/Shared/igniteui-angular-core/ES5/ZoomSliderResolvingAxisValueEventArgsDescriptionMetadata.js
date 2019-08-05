/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ZoomSliderResolvingAxisValueEventArgsDescription } from "./ZoomSliderResolvingAxisValueEventArgsDescription";
/**
 * @hidden
 */
var ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata, _super);
    function ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.b = function (a) {
        if (ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a == null) {
            ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.c(a, ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a);
        }
    };
    ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Position", "Number:double");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    };
    ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.d = function (a) {
        ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.b(a);
        a.n("ZoomSliderResolvingAxisValueEventArgs", function () { return new ZoomSliderResolvingAxisValueEventArgsDescription(); });
        a.m("ZoomSliderResolvingAxisValueEventArgs", ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a);
    };
    ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.$t = markType(ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata, 'ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata');
    ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.a = null;
    return ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata;
}(Base));
export { ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata };
//# sourceMappingURL=ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.js.map
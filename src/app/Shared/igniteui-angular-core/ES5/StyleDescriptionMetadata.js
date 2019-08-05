/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleDescription } from "./StyleDescription";
/**
 * @hidden
 */
var StyleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StyleDescriptionMetadata, _super);
    function StyleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleDescriptionMetadata.b = function (a) {
        if (StyleDescriptionMetadata.a == null) {
            StyleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StyleDescriptionMetadata.c(a, StyleDescriptionMetadata.a);
        }
    };
    StyleDescriptionMetadata.c = function (a, b) {
    };
    StyleDescriptionMetadata.d = function (a) {
        StyleDescriptionMetadata.b(a);
        a.n("Style", function () { return new StyleDescription(); });
        a.m("Style", StyleDescriptionMetadata.a);
    };
    StyleDescriptionMetadata.$t = markType(StyleDescriptionMetadata, 'StyleDescriptionMetadata');
    StyleDescriptionMetadata.a = null;
    return StyleDescriptionMetadata;
}(Base));
export { StyleDescriptionMetadata };
//# sourceMappingURL=StyleDescriptionMetadata.js.map
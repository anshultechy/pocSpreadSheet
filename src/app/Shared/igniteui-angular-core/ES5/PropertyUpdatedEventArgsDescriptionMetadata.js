/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescription } from "./PropertyUpdatedEventArgsDescription";
/**
 * @hidden
 */
var PropertyUpdatedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyUpdatedEventArgsDescriptionMetadata, _super);
    function PropertyUpdatedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyUpdatedEventArgsDescriptionMetadata.b = function (a) {
        if (PropertyUpdatedEventArgsDescriptionMetadata.a == null) {
            PropertyUpdatedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PropertyUpdatedEventArgsDescriptionMetadata.c(a, PropertyUpdatedEventArgsDescriptionMetadata.a);
        }
    };
    PropertyUpdatedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("PropertyName", "String");
        b.item("OldValueRef", "(w:OldValue,wf:OldValue)DataRef");
        b.item("NewValueRef", "(w:NewValue,wf:NewValue)DataRef");
    };
    PropertyUpdatedEventArgsDescriptionMetadata.d = function (a) {
        PropertyUpdatedEventArgsDescriptionMetadata.b(a);
        a.n("PropertyUpdatedEventArgs", function () { return new PropertyUpdatedEventArgsDescription(); });
        a.m("PropertyUpdatedEventArgs", PropertyUpdatedEventArgsDescriptionMetadata.a);
    };
    PropertyUpdatedEventArgsDescriptionMetadata.$t = markType(PropertyUpdatedEventArgsDescriptionMetadata, 'PropertyUpdatedEventArgsDescriptionMetadata');
    PropertyUpdatedEventArgsDescriptionMetadata.a = null;
    return PropertyUpdatedEventArgsDescriptionMetadata;
}(Base));
export { PropertyUpdatedEventArgsDescriptionMetadata };
//# sourceMappingURL=PropertyUpdatedEventArgsDescriptionMetadata.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnPropertySetterDescription } from "./ColumnPropertySetterDescription";
/**
 * @hidden
 */
var ColumnPropertySetterDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnPropertySetterDescriptionMetadata, _super);
    function ColumnPropertySetterDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnPropertySetterDescriptionMetadata.b = function (a) {
        if (ColumnPropertySetterDescriptionMetadata.a == null) {
            ColumnPropertySetterDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnPropertySetterDescriptionMetadata.c(a, ColumnPropertySetterDescriptionMetadata.a);
        }
    };
    ColumnPropertySetterDescriptionMetadata.c = function (a, b) {
        b.item("ColumnName", "String");
        b.item("PropertyName", "String");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    };
    ColumnPropertySetterDescriptionMetadata.d = function (a) {
        ColumnPropertySetterDescriptionMetadata.b(a);
        a.n("ColumnPropertySetter", function () { return new ColumnPropertySetterDescription(); });
        a.m("ColumnPropertySetter", ColumnPropertySetterDescriptionMetadata.a);
    };
    ColumnPropertySetterDescriptionMetadata.$t = markType(ColumnPropertySetterDescriptionMetadata, 'ColumnPropertySetterDescriptionMetadata');
    ColumnPropertySetterDescriptionMetadata.a = null;
    return ColumnPropertySetterDescriptionMetadata;
}(Base));
export { ColumnPropertySetterDescriptionMetadata };
//# sourceMappingURL=ColumnPropertySetterDescriptionMetadata.js.map
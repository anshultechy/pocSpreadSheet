/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridSelectedKeysChangedEventArgsDescription } from "./GridSelectedKeysChangedEventArgsDescription";
/**
 * @hidden
 */
var GridSelectedKeysChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridSelectedKeysChangedEventArgsDescriptionMetadata, _super);
    function GridSelectedKeysChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridSelectedKeysChangedEventArgsDescriptionMetadata.b = function (a) {
        if (GridSelectedKeysChangedEventArgsDescriptionMetadata.a == null) {
            GridSelectedKeysChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridSelectedKeysChangedEventArgsDescriptionMetadata.c(a, GridSelectedKeysChangedEventArgsDescriptionMetadata.a);
        }
    };
    GridSelectedKeysChangedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("AddedKeys", "Collection:PrimaryKeyValueDescription:GridSelectedKeysCollection:PrimaryKeyValueDescription");
        b.item("RemovedKeys", "Collection:PrimaryKeyValueDescription:GridSelectedKeysCollection:PrimaryKeyValueDescription");
    };
    GridSelectedKeysChangedEventArgsDescriptionMetadata.d = function (a) {
        GridSelectedKeysChangedEventArgsDescriptionMetadata.b(a);
        a.n("GridSelectedKeysChangedEventArgs", function () { return new GridSelectedKeysChangedEventArgsDescription(); });
        a.m("GridSelectedKeysChangedEventArgs", GridSelectedKeysChangedEventArgsDescriptionMetadata.a);
    };
    GridSelectedKeysChangedEventArgsDescriptionMetadata.$t = markType(GridSelectedKeysChangedEventArgsDescriptionMetadata, 'GridSelectedKeysChangedEventArgsDescriptionMetadata');
    GridSelectedKeysChangedEventArgsDescriptionMetadata.a = null;
    return GridSelectedKeysChangedEventArgsDescriptionMetadata;
}(Base));
export { GridSelectedKeysChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=GridSelectedKeysChangedEventArgsDescriptionMetadata.js.map
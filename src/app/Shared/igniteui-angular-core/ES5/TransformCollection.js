/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { Transform } from "./Transform";
import { markType } from "./type";
/**
 * @hidden
 */
var TransformCollection = /** @class */ (function (_super) {
    tslib_1.__extends(TransformCollection, _super);
    function TransformCollection() {
        return _super.call(this, Transform.$, 0) || this;
    }
    TransformCollection.$t = markType(TransformCollection, 'TransformCollection', List$1.$.specialize(Transform.$));
    return TransformCollection;
}(List$1));
export { TransformCollection };
//# sourceMappingURL=TransformCollection.js.map
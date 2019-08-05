/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { Geometry } from "./Geometry";
import { markType } from "./type";
/**
 * @hidden
 */
var GeometryCollection = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryCollection, _super);
    function GeometryCollection() {
        return _super.call(this, Geometry.$, 0) || this;
    }
    GeometryCollection.$t = markType(GeometryCollection, 'GeometryCollection', List$1.$.specialize(Geometry.$));
    return GeometryCollection;
}(List$1));
export { GeometryCollection };
//# sourceMappingURL=GeometryCollection.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { PathFigure } from "./PathFigure";
import { markType } from "./type";
/**
 * @hidden
 */
var PathFigureCollection = /** @class */ (function (_super) {
    tslib_1.__extends(PathFigureCollection, _super);
    function PathFigureCollection() {
        return _super.call(this, PathFigure.$, 0) || this;
    }
    PathFigureCollection.$t = markType(PathFigureCollection, 'PathFigureCollection', List$1.$.specialize(PathFigure.$));
    return PathFigureCollection;
}(List$1));
export { PathFigureCollection };
//# sourceMappingURL=PathFigureCollection.js.map
/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { PathFigure } from "./PathFigure";
import { markType } from "./type";
/**
 * @hidden
 */
export class PathFigureCollection extends List$1 {
    constructor() {
        super(PathFigure.$, 0);
    }
}
PathFigureCollection.$t = markType(PathFigureCollection, 'PathFigureCollection', List$1.$.specialize(PathFigure.$));
//# sourceMappingURL=PathFigureCollection.js.map
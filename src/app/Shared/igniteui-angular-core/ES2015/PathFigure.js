/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { PathSegmentCollection } from "./PathSegmentCollection";
/**
 * @hidden
 */
export class PathFigure extends Base {
    constructor() {
        super();
        this._segments = null;
        this._startPoint = null;
        this._isFilled = false;
        this._isClosed = false;
        this._segments = new PathSegmentCollection();
        this._isClosed = false;
        this._isFilled = true;
    }
    get segments() {
        return this._segments;
    }
    set segments(a) {
        this._segments = a;
    }
    get startPoint() {
        return this._startPoint;
    }
    set startPoint(a) {
        this._startPoint = a;
    }
    get isFilled() {
        return this._isFilled;
    }
    set isFilled(a) {
        this._isFilled = a;
    }
    get isClosed() {
        return this._isClosed;
    }
    set isClosed(a) {
        this._isClosed = a;
    }
}
PathFigure.$t = markType(PathFigure, 'PathFigure');
//# sourceMappingURL=PathFigure.js.map
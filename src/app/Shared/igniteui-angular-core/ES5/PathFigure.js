/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { PathSegmentCollection } from "./PathSegmentCollection";
/**
 * @hidden
 */
var PathFigure = /** @class */ (function (_super) {
    tslib_1.__extends(PathFigure, _super);
    function PathFigure() {
        var _this = _super.call(this) || this;
        _this._segments = null;
        _this._startPoint = null;
        _this._isFilled = false;
        _this._isClosed = false;
        _this._segments = new PathSegmentCollection();
        _this._isClosed = false;
        _this._isFilled = true;
        return _this;
    }
    Object.defineProperty(PathFigure.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        set: function (a) {
            this._segments = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathFigure.prototype, "startPoint", {
        get: function () {
            return this._startPoint;
        },
        set: function (a) {
            this._startPoint = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathFigure.prototype, "isFilled", {
        get: function () {
            return this._isFilled;
        },
        set: function (a) {
            this._isFilled = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathFigure.prototype, "isClosed", {
        get: function () {
            return this._isClosed;
        },
        set: function (a) {
            this._isClosed = a;
        },
        enumerable: true,
        configurable: true
    });
    PathFigure.$t = markType(PathFigure, 'PathFigure');
    return PathFigure;
}(Base));
export { PathFigure };
//# sourceMappingURL=PathFigure.js.map
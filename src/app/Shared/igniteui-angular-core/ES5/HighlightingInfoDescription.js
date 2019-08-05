/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var HighlightingInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HighlightingInfoDescription, _super);
    function HighlightingInfoDescription() {
        var _this = _super.call(this) || this;
        _this.m = 0;
        _this.l = 0;
        _this.p = null;
        _this.j = 0;
        _this.h = false;
        _this.f = null;
        return _this;
    }
    HighlightingInfoDescription.prototype.get_type = function () {
        return "HighlightingInfo";
    };
    Object.defineProperty(HighlightingInfoDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "startIndex", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("StartIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "endIndex", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("EndIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "state", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("State");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "progress", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Progress");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "isMarker", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IsMarker");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightingInfoDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    HighlightingInfoDescription.$t = markType(HighlightingInfoDescription, 'HighlightingInfoDescription', Description.$);
    return HighlightingInfoDescription;
}(Description));
export { HighlightingInfoDescription };
//# sourceMappingURL=HighlightingInfoDescription.js.map
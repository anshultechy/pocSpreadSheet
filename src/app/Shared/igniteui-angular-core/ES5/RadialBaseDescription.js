/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RadialBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RadialBaseDescription, _super);
    function RadialBaseDescription() {
        var _this = _super.call(this) || this;
        _this.b8 = null;
        _this.b9 = null;
        _this.b6 = false;
        return _this;
    }
    RadialBaseDescription.prototype.get_type = function () {
        return "RadialBase";
    };
    Object.defineProperty(RadialBaseDescription.prototype, "angleAxisRef", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("AngleAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBaseDescription.prototype, "valueAxisRef", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("ValueAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBaseDescription.prototype, "clipSeriesToBounds", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("ClipSeriesToBounds");
        },
        enumerable: true,
        configurable: true
    });
    RadialBaseDescription.$t = markType(RadialBaseDescription, 'RadialBaseDescription', MarkerSeriesDescription.$);
    return RadialBaseDescription;
}(MarkerSeriesDescription));
export { RadialBaseDescription };
//# sourceMappingURL=RadialBaseDescription.js.map